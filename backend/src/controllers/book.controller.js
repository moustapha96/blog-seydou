import prisma from '../config/prisma.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import { generateUniqueSlug, getPagination, paginatedResponse } from '../utils/helpers.js';

// GET /api/books
export const listBooks = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const { category, year, q, featured } = req.query;
  const where = {};
  if (category) where.category = category;
  if (year) where.year = parseInt(year, 10);
  if (featured === 'true') where.featured = true;
  if (q) {
    where.OR = [
      { title: { contains: q, mode: 'insensitive' } },
      { author: { contains: q, mode: 'insensitive' } },
      { description: { contains: q, mode: 'insensitive' } },
    ];
  }
  const [items, total] = await Promise.all([
    prisma.book.findMany({ where, orderBy: { createdAt: 'desc' }, skip, take: limit }),
    prisma.book.count({ where }),
  ]);
  res.json({ success: true, ...paginatedResponse(items, total, page, limit) });
});

// GET /api/books/:idOrSlug
export const getBook = asyncHandler(async (req, res) => {
  const { idOrSlug } = req.params;
  const book = await prisma.book.findFirst({ where: { OR: [{ id: idOrSlug }, { slug: idOrSlug }] } });
  if (!book) throw ApiError.notFound('Livre introuvable');
  res.json({ success: true, data: book });
});

// POST /api/books
export const createBook = asyncHandler(async (req, res) => {
  const data = { ...req.body };
  if (data.year) data.year = parseInt(data.year, 10);
  data.slug = await generateUniqueSlug(data.title, async (s) => !!(await prisma.book.findUnique({ where: { slug: s } })));
  const book = await prisma.book.create({ data });
  res.status(201).json({ success: true, data: book });
});

// PUT /api/books/:id
export const updateBook = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.book.findUnique({ where: { id } });
  if (!existing) throw ApiError.notFound('Livre introuvable');
  const data = { ...req.body };
  if (data.year) data.year = parseInt(data.year, 10);
  if (data.title && data.title !== existing.title) {
    data.slug = await generateUniqueSlug(data.title, async (s) =>
      !!(await prisma.book.findFirst({ where: { slug: s, NOT: { id } } })));
  }
  const book = await prisma.book.update({ where: { id }, data });
  res.json({ success: true, data: book });
});

// DELETE /api/books/:id
export const deleteBook = asyncHandler(async (req, res) => {
  await prisma.book.delete({ where: { id: req.params.id } });
  res.json({ success: true, message: 'Livre supprime' });
});

// GET /api/books/:id/download  (incremente le compteur, renvoie l'URL)
export const downloadBook = asyncHandler(async (req, res) => {
  const book = await prisma.book.findUnique({ where: { id: req.params.id } });
  if (!book || !book.pdfFile) throw ApiError.notFound('Fichier indisponible');
  await prisma.book.update({ where: { id: book.id }, data: { downloads: { increment: 1 } } });
  res.json({ success: true, url: book.pdfFile });
});
