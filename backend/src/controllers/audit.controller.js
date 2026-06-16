import prisma from '../config/prisma.js';
import asyncHandler from '../utils/asyncHandler.js';
import { getPagination, paginatedResponse } from '../utils/helpers.js';

// GET /api/audit  (ADMIN) - journal des actions, filtrable
export const listAudit = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const { method, userId, q } = req.query;
  const where = {};
  if (method) where.method = method;
  if (userId) where.userId = userId;
  if (q) {
    where.OR = [
      { action: { contains: q, mode: 'insensitive' } },
      { path: { contains: q, mode: 'insensitive' } },
      { userName: { contains: q, mode: 'insensitive' } },
    ];
  }
  const [items, total] = await Promise.all([
    prisma.auditLog.findMany({ where, orderBy: { createdAt: 'desc' }, skip, take: limit }),
    prisma.auditLog.count({ where }),
  ]);
  res.json({ success: true, ...paginatedResponse(items, total, page, limit) });
});

// DELETE /api/audit  (ADMIN) - purge du journal
export const clearAudit = asyncHandler(async (req, res) => {
  const { before } = req.query; // ISO date optionnelle
  const where = before ? { createdAt: { lt: new Date(before) } } : {};
  const { count } = await prisma.auditLog.deleteMany({ where });
  res.json({ success: true, message: `${count} entree(s) supprimee(s)` });
});
