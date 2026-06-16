import prisma from '../config/prisma.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import slugify from 'slugify';
import { generateUniqueSlug, getPagination, paginatedResponse } from '../utils/helpers.js';

// ---- CATEGORIES ----
export const listPublicationCategories = asyncHandler(async (req, res) => {
  const categories = await prisma.publicationCategory.findMany({
    orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
    include: { _count: { select: { publications: { where: { status: 'PUBLISHED' } } } } },
  });
  res.json({ success: true, data: categories });
});

export const createPublicationCategory = asyncHandler(async (req, res) => {
  const { name, description, color, sortOrder } = req.body;
  const slug = slugify(name, { lower: true, strict: true, locale: 'fr' });
  const category = await prisma.publicationCategory.create({
    data: { name, slug, description, color, sortOrder: sortOrder ?? 0 },
  });
  res.status(201).json({ success: true, data: category });
});

export const updatePublicationCategory = asyncHandler(async (req, res) => {
  const { name, description, color, sortOrder } = req.body;
  const data = { description, color, sortOrder };
  if (name) {
    data.name = name;
    data.slug = slugify(name, { lower: true, strict: true, locale: 'fr' });
  }
  Object.keys(data).forEach((k) => data[k] === undefined && delete data[k]);
  const category = await prisma.publicationCategory.update({ where: { id: req.params.id }, data });
  res.json({ success: true, data: category });
});

export const deletePublicationCategory = asyncHandler(async (req, res) => {
  await prisma.publicationCategory.delete({ where: { id: req.params.id } });
  res.json({ success: true, message: 'Categorie supprimee' });
});

// ---- PUBLICATIONS ----
export const listPublications = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const { category, year, q, featured, status } = req.query;
  const isStaff = req.user && ['ADMIN', 'EDITOR'].includes(req.user.role);
  const where = {};
  if (category) where.category = { slug: category };
  if (year) where.year = parseInt(year, 10);
  if (featured === 'true') where.featured = true;
  if (!isStaff) where.status = 'PUBLISHED';
  else if (status && status !== 'all') where.status = status;
  if (q) {
    where.OR = [
      { title: { contains: q, mode: 'insensitive' } },
      { authors: { contains: q, mode: 'insensitive' } },
      { journal: { contains: q, mode: 'insensitive' } },
      { abstract: { contains: q, mode: 'insensitive' } },
    ];
  }
  const [items, total] = await Promise.all([
    prisma.publication.findMany({
      where,
      orderBy: [{ year: 'desc' }, { createdAt: 'desc' }],
      skip,
      take: limit,
      include: { category: true },
    }),
    prisma.publication.count({ where }),
  ]);
  res.json({ success: true, ...paginatedResponse(items, total, page, limit) });
});

export const getPublication = asyncHandler(async (req, res) => {
  const { idOrSlug } = req.params;
  const pub = await prisma.publication.findFirst({
    where: { OR: [{ id: idOrSlug }, { slug: idOrSlug }] },
    include: { category: true },
  });
  if (!pub) throw ApiError.notFound('Publication introuvable');
  const isStaff = req.user && ['ADMIN', 'EDITOR'].includes(req.user.role);
  if (pub.status !== 'PUBLISHED' && !isStaff) throw ApiError.notFound('Publication introuvable');
  res.json({ success: true, data: pub });
});

const PUBLICATION_FIELDS = [
  'title', 'authors', 'journal', 'publisher', 'year', 'volume', 'pages', 'doi',
  'link', 'abstract', 'citationApa', 'citationMla', 'pdfFile', 'featured',
  'status', 'categoryId',
];

function pickPublicationData(body) {
  const data = {};
  for (const key of PUBLICATION_FIELDS) {
    if (body[key] !== undefined) data[key] = body[key];
  }
  if (data.year) data.year = parseInt(data.year, 10);
  else if (data.year === '' || data.year === null) data.year = null;
  if (data.categoryId === '') data.categoryId = null;
  return data;
}

export const createPublication = asyncHandler(async (req, res) => {
  const data = pickPublicationData(req.body);
  data.slug = await generateUniqueSlug(data.title, async (s) =>
    !!(await prisma.publication.findUnique({ where: { slug: s } })));
  const pub = await prisma.publication.create({
    data,
    include: { category: true },
  });
  res.status(201).json({ success: true, data: pub });
});

export const updatePublication = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.publication.findUnique({ where: { id } });
  if (!existing) throw ApiError.notFound('Publication introuvable');
  const data = pickPublicationData(req.body);
  if (data.title && data.title !== existing.title) {
    data.slug = await generateUniqueSlug(data.title, async (s) =>
      !!(await prisma.publication.findFirst({ where: { slug: s, NOT: { id } } })));
  }
  const pub = await prisma.publication.update({
    where: { id },
    data,
    include: { category: true },
  });
  res.json({ success: true, data: pub });
});

export const deletePublication = asyncHandler(async (req, res) => {
  await prisma.publication.delete({ where: { id: req.params.id } });
  res.json({ success: true, message: 'Publication supprimee' });
});
