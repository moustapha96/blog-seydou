import { verifyToken } from '../utils/token.js';
import ApiError from '../utils/ApiError.js';
import prisma from '../config/prisma.js';
import asyncHandler from '../utils/asyncHandler.js';

// Exige un utilisateur authentifie (JWT valide)
export const protect = asyncHandler(async (req, res, next) => {
  let token;
  const header = req.headers.authorization;
  if (header && header.startsWith('Bearer ')) token = header.split(' ')[1];
  if (!token) throw ApiError.unauthorized('Token manquant, veuillez vous connecter');

  let decoded;
  try {
    decoded = verifyToken(token);
  } catch {
    throw ApiError.unauthorized('Token invalide ou expire');
  }

  const user = await prisma.user.findUnique({
    where: { id: decoded.id },
    select: { id: true, name: true, email: true, role: true, isActive: true, avatar: true },
  });
  if (!user || !user.isActive) throw ApiError.unauthorized('Compte introuvable ou desactive');

  req.user = user;
  next();
});

// Restreint l'acces a certains roles
export const authorize = (...roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.role)) {
    return next(ApiError.forbidden("Vous n'avez pas les droits requis"));
  }
  next();
};

// Authentification optionnelle (ne bloque pas si absent)
export const optionalAuth = asyncHandler(async (req, res, next) => {
  const header = req.headers.authorization;
  if (header && header.startsWith('Bearer ')) {
    try {
      const decoded = verifyToken(header.split(' ')[1]);
      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
        select: { id: true, name: true, email: true, role: true },
      });
      if (user) req.user = user;
    } catch {
      /* ignore */
    }
  }
  next();
});
