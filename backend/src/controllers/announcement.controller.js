import prisma from '../config/prisma.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';

const TYPES = ['info', 'success', 'warning', 'event'];

function pickData(body = {}) {
  const data = {};
  if (body.message !== undefined) data.message = String(body.message).trim();
  if (body.link !== undefined) data.link = body.link ? String(body.link).trim() : null;
  if (body.linkLabel !== undefined) data.linkLabel = body.linkLabel ? String(body.linkLabel).trim() : null;
  if (body.type !== undefined) data.type = TYPES.includes(body.type) ? body.type : 'info';
  if (body.active !== undefined) data.active = !!body.active;
  if (body.dismissible !== undefined) data.dismissible = !!body.dismissible;
  if (body.position !== undefined) data.position = parseInt(body.position, 10) || 0;
  if (body.startsAt !== undefined) data.startsAt = body.startsAt ? new Date(body.startsAt) : null;
  if (body.endsAt !== undefined) data.endsAt = body.endsAt ? new Date(body.endsAt) : null;
  return data;
}

// GET /api/announcements  (public) -> uniquement les annonces actives et dans la fenetre de dates
export const listActiveAnnouncements = asyncHandler(async (req, res) => {
  const now = new Date();
  const items = await prisma.announcement.findMany({
    where: {
      active: true,
      AND: [
        { OR: [{ startsAt: null }, { startsAt: { lte: now } }] },
        { OR: [{ endsAt: null }, { endsAt: { gte: now } }] },
      ],
    },
    orderBy: [{ position: 'asc' }, { createdAt: 'desc' }],
  });
  res.json({ success: true, data: items });
});

// GET /api/announcements/all  (admin) -> toutes
export const listAllAnnouncements = asyncHandler(async (req, res) => {
  const items = await prisma.announcement.findMany({
    orderBy: [{ position: 'asc' }, { createdAt: 'desc' }],
  });
  res.json({ success: true, data: items });
});

// POST /api/announcements  (admin)
export const createAnnouncement = asyncHandler(async (req, res) => {
  const data = pickData(req.body);
  if (!data.message) throw ApiError.badRequest('Le message est requis');
  const item = await prisma.announcement.create({ data });
  res.status(201).json({ success: true, data: item });
});

// PUT /api/announcements/:id  (admin)
export const updateAnnouncement = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.announcement.findUnique({ where: { id } });
  if (!existing) throw ApiError.notFound('Annonce introuvable');
  const item = await prisma.announcement.update({ where: { id }, data: pickData(req.body) });
  res.json({ success: true, data: item });
});

// DELETE /api/announcements/:id  (admin)
export const deleteAnnouncement = asyncHandler(async (req, res) => {
  await prisma.announcement.delete({ where: { id: req.params.id } });
  res.json({ success: true, message: 'Annonce supprimee' });
});
