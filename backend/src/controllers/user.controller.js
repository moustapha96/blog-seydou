import bcrypt from 'bcryptjs';
import prisma from '../config/prisma.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import { getPagination, paginatedResponse } from '../utils/helpers.js';

const safeSelect = {
  id: true, name: true, email: true, role: true, avatar: true, bio: true,
  isActive: true, createdAt: true, updatedAt: true,
  _count: { select: { articles: true, comments: true } },
};

// GET /api/users  (ADMIN)
export const listUsers = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const { q, role } = req.query;
  const where = {};
  if (role) where.role = role;
  if (q) {
    where.OR = [
      { name: { contains: q, mode: 'insensitive' } },
      { email: { contains: q, mode: 'insensitive' } },
    ];
  }
  const [items, total] = await Promise.all([
    prisma.user.findMany({ where, select: safeSelect, orderBy: { createdAt: 'desc' }, skip, take: limit }),
    prisma.user.count({ where }),
  ]);
  res.json({ success: true, ...paginatedResponse(items, total, page, limit) });
});

// GET /api/users/:id  (ADMIN)
export const getUser = asyncHandler(async (req, res) => {
  const user = await prisma.user.findUnique({ where: { id: req.params.id }, select: safeSelect });
  if (!user) throw ApiError.notFound('Utilisateur introuvable');
  res.json({ success: true, data: user });
});

// POST /api/users  (ADMIN)
export const createUser = asyncHandler(async (req, res) => {
  const { name, email, password, role = 'READER', bio, isActive = true } = req.body;
  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) throw ApiError.conflict('Un compte existe deja avec cet email');
  const hashed = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: { name, email, password: hashed, role, bio, isActive },
    select: safeSelect,
  });
  res.status(201).json({ success: true, data: user });
});

// PUT /api/users/:id  (ADMIN)
export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const target = await prisma.user.findUnique({ where: { id } });
  if (!target) throw ApiError.notFound('Utilisateur introuvable');

  const { name, email, role, bio, isActive, password } = req.body;
  const data = {};
  if (name !== undefined) data.name = name;
  if (email !== undefined) data.email = email;
  if (bio !== undefined) data.bio = bio;
  if (password) data.password = await bcrypt.hash(password, 12);

  // Empeche de se retrograder ou se desactiver soi-meme
  const isSelf = id === req.user.id;
  if (role !== undefined) {
    if (isSelf && target.role === 'ADMIN' && role !== 'ADMIN') {
      throw ApiError.badRequest('Vous ne pouvez pas modifier votre propre role administrateur');
    }
    data.role = role;
  }
  if (isActive !== undefined) {
    if (isSelf && !isActive) throw ApiError.badRequest('Vous ne pouvez pas desactiver votre propre compte');
    data.isActive = isActive;
  }

  // Ne jamais retirer le dernier administrateur actif
  if ((role !== undefined && role !== 'ADMIN') || isActive === false) {
    if (target.role === 'ADMIN') {
      const activeAdmins = await prisma.user.count({ where: { role: 'ADMIN', isActive: true } });
      if (activeAdmins <= 1) throw ApiError.badRequest('Impossible : il doit rester au moins un administrateur actif');
    }
  }

  const user = await prisma.user.update({ where: { id }, data, select: safeSelect });
  res.json({ success: true, data: user });
});

// DELETE /api/users/:id  (ADMIN)
export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (id === req.user.id) throw ApiError.badRequest('Vous ne pouvez pas supprimer votre propre compte');
  const target = await prisma.user.findUnique({ where: { id } });
  if (!target) throw ApiError.notFound('Utilisateur introuvable');
  if (target.role === 'ADMIN') {
    const admins = await prisma.user.count({ where: { role: 'ADMIN' } });
    if (admins <= 1) throw ApiError.badRequest('Impossible de supprimer le dernier administrateur');
  }
  await prisma.user.delete({ where: { id } });
  res.json({ success: true, message: 'Utilisateur supprime' });
});
