import prisma from '../config/prisma.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import { generateUniqueSlug, sanitizeHtml, buildExcerpt, getPagination, paginatedResponse } from '../utils/helpers.js';

// GET /api/news
export const listNews = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const isStaff = req.user && ['ADMIN', 'EDITOR'].includes(req.user.role);
  const where = isStaff ? {} : { status: 'PUBLISHED' };
  const [items, total] = await Promise.all([
    prisma.news.findMany({
      where, include: { author: { select: { id: true, name: true } } },
      orderBy: { publishedAt: 'desc' }, skip, take: limit,
    }),
    prisma.news.count({ where }),
  ]);
  res.json({ success: true, ...paginatedResponse(items, total, page, limit) });
});

// GET /api/news/:idOrSlug
export const getNews = asyncHandler(async (req, res) => {
  const { idOrSlug } = req.params;
  const item = await prisma.news.findFirst({
    where: { OR: [{ id: idOrSlug }, { slug: idOrSlug }] },
    include: { author: { select: { id: true, name: true } } },
  });
  if (!item) throw ApiError.notFound('Actualite introuvable');
  res.json({ success: true, data: item });
});

// POST /api/news
export const createNews = asyncHandler(async (req, res) => {
  const { title, content, excerpt, image, status = 'PUBLISHED' } = req.body;
  const clean = sanitizeHtml(content);
  const slug = await generateUniqueSlug(title, async (s) => !!(await prisma.news.findUnique({ where: { slug: s } })));
  const item = await prisma.news.create({
    data: {
      title, slug, content: clean, excerpt: excerpt || buildExcerpt(clean),
      image, status, authorId: req.user.id,
    },
  });
  res.status(201).json({ success: true, data: item });
});

// PUT /api/news/:id
export const updateNews = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.news.findUnique({ where: { id } });
  if (!existing) throw ApiError.notFound('Actualite introuvable');
  const { title, content, excerpt, image, status } = req.body;
  const data = {};
  if (title && title !== existing.title) {
    data.title = title;
    data.slug = await generateUniqueSlug(title, async (s) =>
      !!(await prisma.news.findFirst({ where: { slug: s, NOT: { id } } })));
  }
  if (content !== undefined) {
    data.content = sanitizeHtml(content);
    if (excerpt === undefined) data.excerpt = buildExcerpt(data.content);
  }
  if (excerpt !== undefined) data.excerpt = excerpt;
  if (image !== undefined) data.image = image;
  if (status !== undefined) data.status = status;
  const item = await prisma.news.update({ where: { id }, data });
  res.json({ success: true, data: item });
});

// DELETE /api/news/:id
export const deleteNews = asyncHandler(async (req, res) => {
  await prisma.news.delete({ where: { id: req.params.id } });
  res.json({ success: true, message: 'Actualite supprimee' });
});
