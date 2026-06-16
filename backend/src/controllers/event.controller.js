import prisma from '../config/prisma.js';
import asyncHandler from '../utils/asyncHandler.js';

// GET /api/events  (optionnel ?upcoming=true, ?month=YYYY-MM)
export const listEvents = asyncHandler(async (req, res) => {
  const { upcoming, month } = req.query;
  const where = {};
  if (upcoming === 'true') where.startDate = { gte: new Date() };
  if (month) {
    const [y, m] = month.split('-').map(Number);
    where.startDate = { gte: new Date(y, m - 1, 1), lt: new Date(y, m, 1) };
  }
  const events = await prisma.event.findMany({ where, orderBy: { startDate: 'asc' } });
  res.json({ success: true, data: events });
});

// GET /api/events/:id
export const getEvent = asyncHandler(async (req, res) => {
  const event = await prisma.event.findUnique({ where: { id: req.params.id } });
  if (!event) return res.status(404).json({ success: false, message: 'Evenement introuvable' });
  res.json({ success: true, data: event });
});

// POST /api/events
export const createEvent = asyncHandler(async (req, res) => {
  const { title, description, location, startDate, endDate, link, image } = req.body;
  const event = await prisma.event.create({
    data: {
      title, description, location, link, image,
      startDate: new Date(startDate),
      endDate: endDate ? new Date(endDate) : null,
    },
  });
  res.status(201).json({ success: true, data: event });
});

// PUT /api/events/:id
export const updateEvent = asyncHandler(async (req, res) => {
  const { title, description, location, startDate, endDate, link, image } = req.body;
  const data = { title, description, location, link, image };
  if (startDate) data.startDate = new Date(startDate);
  if (endDate !== undefined) data.endDate = endDate ? new Date(endDate) : null;
  Object.keys(data).forEach((k) => data[k] === undefined && delete data[k]);
  const event = await prisma.event.update({ where: { id: req.params.id }, data });
  res.json({ success: true, data: event });
});

// DELETE /api/events/:id
export const deleteEvent = asyncHandler(async (req, res) => {
  await prisma.event.delete({ where: { id: req.params.id } });
  res.json({ success: true, message: 'Evenement supprime' });
});
