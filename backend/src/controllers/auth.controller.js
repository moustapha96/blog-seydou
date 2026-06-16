import bcrypt from 'bcryptjs';
import prisma from '../config/prisma.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import { signToken } from '../utils/token.js';

const publicUser = (u) => ({
  id: u.id, name: u.name, email: u.email, role: u.role, avatar: u.avatar, bio: u.bio,
});

// POST /api/auth/register
export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) throw ApiError.conflict('Un compte existe deja avec cet email');

  // Le tout premier compte cree devient ADMIN, sinon READER
  const count = await prisma.user.count();
  const hashed = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: { name, email, password: hashed, role: count === 0 ? 'ADMIN' : 'READER' },
  });

  const token = signToken({ id: user.id, role: user.role });
  res.status(201).json({ success: true, token, user: publicUser(user) });
});

// POST /api/auth/login
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !user.isActive) throw ApiError.unauthorized('Identifiants invalides');

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw ApiError.unauthorized('Identifiants invalides');

  const token = signToken({ id: user.id, role: user.role });
  res.json({ success: true, token, user: publicUser(user) });
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

  if (newPassword) {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    const ok = await bcrypt.compare(currentPassword || '', user.password);
    if (!ok) throw ApiError.badRequest('Mot de passe actuel incorrect');
    data.password = await bcrypt.hash(newPassword, 12);
  }

  const updated = await prisma.user.update({ where: { id: req.user.id }, data });
  res.json({ success: true, user: publicUser(updated) });
});
