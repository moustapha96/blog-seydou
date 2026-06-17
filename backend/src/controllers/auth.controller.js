import bcrypt from 'bcryptjs';
import prisma from '../config/prisma.js';
import env from '../config/env.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import {
  signAccessToken,
  generateOpaqueToken,
  hashToken,
  durationToMs,
} from '../utils/token.js';
import { sendVerificationEmail, sendPasswordResetEmail } from '../utils/mailer.js';

const publicUser = (u) => ({
  id: u.id, name: u.name, email: u.email, role: u.role, avatar: u.avatar, bio: u.bio,
  emailVerified: u.emailVerified, lastLoginAt: u.lastLoginAt,
});

const REFRESH_MS = durationToMs(env.jwt.refreshExpiresIn);

// Options du cookie httpOnly portant le refresh token.
// path limite l'envoi du cookie aux routes /api/auth (refresh, logout...).
function cookieOptions() {
  return {
    httpOnly: true,
    secure: env.isProd,
    sameSite: env.isProd ? 'strict' : 'lax',
    path: '/api/auth',
    maxAge: REFRESH_MS,
  };
}

// Cree une session : access token (JWT court) + refresh token opaque (cookie httpOnly).
// Le refresh n'est stocke que sous forme de hash SHA-256.
async function issueSession(req, res, user) {
  const accessToken = signAccessToken({ id: user.id, role: user.role });
  const refreshToken = generateOpaqueToken();

  await prisma.refreshToken.create({
    data: {
      tokenHash: hashToken(refreshToken),
      userId: user.id,
      userAgent: req.headers['user-agent']?.slice(0, 255) || null,
      ipAddress: req.ip,
      expiresAt: new Date(Date.now() + REFRESH_MS),
    },
  });

  res.cookie(env.cookie.name, refreshToken, cookieOptions());
  return accessToken;
}

// Cree un jeton a usage unique (reset / verification) et renvoie le token EN CLAIR
// (a inserer dans le lien email) ; seul son hash est persiste.
async function createVerificationToken(userId, type, ttlMs) {
  const token = generateOpaqueToken();
  await prisma.verificationToken.create({
    data: {
      tokenHash: hashToken(token),
      userId,
      type,
      expiresAt: new Date(Date.now() + ttlMs),
    },
  });
  return token;
}

// POST /api/auth/register
export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) throw ApiError.conflict('Un compte existe deja avec cet email');

  // Le tout premier compte cree devient ADMIN et est auto-verifie (proprietaire du site)
  const count = await prisma.user.count();
  const isFirst = count === 0;
  const hashed = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashed,
      role: isFirst ? 'ADMIN' : 'READER',
      emailVerified: isFirst,
    },
  });

  // 1er admin : session immediate. Sinon : email de verification, pas de connexion.
  if (isFirst) {
    const token = await issueSession(req, res, user);
    return res.status(201).json({ success: true, token, user: publicUser(user) });
  }

  const vToken = await createVerificationToken(
    user.id,
    'VERIFY_EMAIL',
    env.security.verifyTokenTtlHours * 3_600_000
  );
  await sendVerificationEmail(user, `${env.clientUrl}/verify-email?token=${vToken}`);

  res.status(201).json({
    success: true,
    message: 'Compte cree. Un email de verification vous a ete envoye.',
    user: publicUser(user),
  });
});

// POST /api/auth/login
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  // Message generique pour ne pas reveler l'existence d'un compte
  if (!user) throw ApiError.unauthorized('Identifiants invalides');

  // Compte verrouille (anti brute-force)
  if (user.lockedUntil && user.lockedUntil > new Date()) {
    const min = Math.ceil((user.lockedUntil - new Date()) / 60000);
    throw new ApiError(423, `Compte temporairement verrouille. Reessayez dans ${min} min.`);
  }

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    const attempts = user.failedLoginAttempts + 1;
    const data = { failedLoginAttempts: attempts };
    if (attempts >= env.security.maxFailedLogins) {
      data.lockedUntil = new Date(Date.now() + env.security.lockMinutes * 60000);
      data.failedLoginAttempts = 0;
    }
    await prisma.user.update({ where: { id: user.id }, data });
    if (data.lockedUntil) {
      throw new ApiError(423, `Trop de tentatives. Compte verrouille ${env.security.lockMinutes} min.`);
    }
    throw ApiError.unauthorized('Identifiants invalides');
  }

  if (!user.isActive) throw ApiError.forbidden('Compte desactive. Contactez un administrateur.');

  // Verification d'email bloquante
  if (!user.emailVerified) {
    return res.status(403).json({
      success: false,
      code: 'EMAIL_NOT_VERIFIED',
      message: 'Veuillez verifier votre adresse email avant de vous connecter.',
      email: user.email,
    });
  }

  // Succes : reset compteurs + horodatage
  const fresh = await prisma.user.update({
    where: { id: user.id },
    data: { failedLoginAttempts: 0, lockedUntil: null, lastLoginAt: new Date() },
  });

  const token = await issueSession(req, res, fresh);
  res.json({ success: true, token, user: publicUser(fresh) });
});

// POST /api/auth/refresh  (rotation du refresh token)
export const refresh = asyncHandler(async (req, res) => {
  const raw = req.cookies?.[env.cookie.name];
  if (!raw) throw ApiError.unauthorized('Session expiree');

  const stored = await prisma.refreshToken.findUnique({
    where: { tokenHash: hashToken(raw) },
    include: { user: true },
  });

  const invalid = !stored || stored.revokedAt || stored.expiresAt < new Date();
  if (invalid || !stored.user?.isActive) {
    res.clearCookie(env.cookie.name, { ...cookieOptions(), maxAge: undefined });
    throw ApiError.unauthorized('Session invalide ou expiree');
  }

  // Rotation : on revoque l'ancien et on en emet un nouveau
  await prisma.refreshToken.update({
    where: { id: stored.id },
    data: { revokedAt: new Date() },
  });

  const token = await issueSession(req, res, stored.user);
  res.json({ success: true, token, user: publicUser(stored.user) });
});

// POST /api/auth/logout  (revoque la session courante)
export const logout = asyncHandler(async (req, res) => {
  const raw = req.cookies?.[env.cookie.name];
  if (raw) {
    await prisma.refreshToken.updateMany({
      where: { tokenHash: hashToken(raw), revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }
  res.clearCookie(env.cookie.name, { ...cookieOptions(), maxAge: undefined });
  res.json({ success: true, message: 'Deconnecte' });
});

// POST /api/auth/logout-all  (revoque toutes les sessions de l'utilisateur)
export const logoutAll = asyncHandler(async (req, res) => {
  await prisma.refreshToken.updateMany({
    where: { userId: req.user.id, revokedAt: null },
    data: { revokedAt: new Date() },
  });
  res.clearCookie(env.cookie.name, { ...cookieOptions(), maxAge: undefined });
  res.json({ success: true, message: 'Toutes les sessions ont ete fermees' });
});

// POST /api/auth/forgot-password
export const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  // Reponse toujours identique (anti-enumeration des comptes)
  if (user && user.isActive) {
    const token = await createVerificationToken(
      user.id,
      'RESET_PASSWORD',
      env.security.resetTokenTtlMin * 60000
    );
    await sendPasswordResetEmail(user, `${env.clientUrl}/reset-password?token=${token}`);
  }

  res.json({
    success: true,
    message: 'Si un compte existe pour cet email, un lien de reinitialisation a ete envoye.',
  });
});

// POST /api/auth/reset-password
export const resetPassword = asyncHandler(async (req, res) => {
  const { token, password } = req.body;
  const stored = await prisma.verificationToken.findUnique({
    where: { tokenHash: hashToken(token) },
  });

  const invalid = !stored || stored.type !== 'RESET_PASSWORD' || stored.usedAt || stored.expiresAt < new Date();
  if (invalid) throw ApiError.badRequest('Lien invalide ou expire. Refaites une demande.');

  const hashed = await bcrypt.hash(password, 12);
  await prisma.$transaction([
    prisma.user.update({
      where: { id: stored.userId },
      data: { password: hashed, failedLoginAttempts: 0, lockedUntil: null },
    }),
    prisma.verificationToken.update({ where: { id: stored.id }, data: { usedAt: new Date() } }),
    // Securite : on ferme toutes les sessions existantes
    prisma.refreshToken.updateMany({
      where: { userId: stored.userId, revokedAt: null },
      data: { revokedAt: new Date() },
    }),
  ]);

  res.json({ success: true, message: 'Mot de passe reinitialise. Vous pouvez vous connecter.' });
});

// GET|POST /api/auth/verify-email
export const verifyEmail = asyncHandler(async (req, res) => {
  const token = req.body?.token || req.query?.token;
  if (!token) throw ApiError.badRequest('Jeton manquant');

  const stored = await prisma.verificationToken.findUnique({
    where: { tokenHash: hashToken(String(token)) },
  });

  const invalid = !stored || stored.type !== 'VERIFY_EMAIL' || stored.usedAt || stored.expiresAt < new Date();
  if (invalid) throw ApiError.badRequest('Lien de verification invalide ou expire.');

  await prisma.$transaction([
    prisma.user.update({ where: { id: stored.userId }, data: { emailVerified: true } }),
    prisma.verificationToken.update({ where: { id: stored.id }, data: { usedAt: new Date() } }),
  ]);

  res.json({ success: true, message: 'Email verifie. Vous pouvez maintenant vous connecter.' });
});

// POST /api/auth/resend-verification
export const resendVerification = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (user && !user.emailVerified && user.isActive) {
    const token = await createVerificationToken(
      user.id,
      'VERIFY_EMAIL',
      env.security.verifyTokenTtlHours * 3_600_000
    );
    await sendVerificationEmail(user, `${env.clientUrl}/verify-email?token=${token}`);
  }

  res.json({
    success: true,
    message: 'Si un compte non verifie existe pour cet email, un nouveau lien a ete envoye.',
  });
});

// GET /api/auth/profile
export const getProfile = asyncHandler(async (req, res) => {
  const user = await prisma.user.findUnique({ where: { id: req.user.id } });
  res.json({ success: true, user: publicUser(user) });
});

// PUT /api/auth/profile
export const updateProfile = asyncHandler(async (req, res) => {
  const { name, bio, avatar, currentPassword, newPassword } = req.body;
  const data = {};
  if (name) data.name = name;
  if (bio !== undefined) data.bio = bio;
  if (avatar !== undefined) data.avatar = avatar;

  let passwordChanged = false;
  if (newPassword) {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    const ok = await bcrypt.compare(currentPassword || '', user.password);
    if (!ok) throw ApiError.badRequest('Mot de passe actuel incorrect');
    data.password = await bcrypt.hash(newPassword, 12);
    passwordChanged = true;
  }

  const updated = await prisma.user.update({ where: { id: req.user.id }, data });

  // Changement de mot de passe : on revoque les autres sessions par securite
  if (passwordChanged) {
    const raw = req.cookies?.[env.cookie.name];
    await prisma.refreshToken.updateMany({
      where: {
        userId: req.user.id,
        revokedAt: null,
        ...(raw && { tokenHash: { not: hashToken(raw) } }),
      },
      data: { revokedAt: new Date() },
    });
  }

  res.json({ success: true, user: publicUser(updated) });
});
