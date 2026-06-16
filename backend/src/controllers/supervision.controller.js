import prisma from '../config/prisma.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import slugify from 'slugify';
import { getPagination, paginatedResponse } from '../utils/helpers.js';

// ---- CATEGORIES ----
export const listSupervisionCategories = asyncHandler(async (req, res) => {
  const categories = await prisma.supervisionCategory.findMany({
    orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
    include: { _count: { select: { supervisions: true } } },
  });
  res.json({ success: true, data: categories });
});

export const createSupervisionCategory = asyncHandler(async (req, res) => {
  const { name, description, color, sortOrder } = req.body;
  const slug = slugify(name, { lower: true, strict: true, locale: 'fr' });
  const category = await prisma.supervisionCategory.create({
    data: { name, slug, description, color, sortOrder: sortOrder ?? 0 },
  });
  res.status(201).json({ success: true, data: category });
});

export const updateSupervisionCategory = asyncHandler(async (req, res) => {
  const { name, description, color, sortOrder } = req.body;
  const data = { description, color, sortOrder };
  if (name) {
    data.name = name;
    data.slug = slugify(name, { lower: true, strict: true, locale: 'fr' });
  }
  Object.keys(data).forEach((k) => data[k] === undefined && delete data[k]);
  const category = await prisma.supervisionCategory.update({ where: { id: req.params.id }, data });
  res.json({ success: true, data: category });
});

export const deleteSupervisionCategory = asyncHandler(async (req, res) => {
  await prisma.supervisionCategory.delete({ where: { id: req.params.id } });
  res.json({ success: true, message: 'Categorie supprimee' });
});

// ---- ENCADREMENTS ----
export const listSupervisions = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const { category, status, year, q, featured } = req.query;
  const where = {};
  if (category) where.category = { slug: category };
  if (status) where.status = status;
  if (year) where.year = parseInt(year, 10);
  if (featured === 'true') where.featured = true;
  if (q) {
    where.OR = [
      { title: { contains: q, mode: 'insensitive' } },
      { studentName: { contains: q, mode: 'insensitive' } },
      { description: { contains: q, mode: 'insensitive' } },
    ];
  }
  const [items, total] = await Promise.all([
    prisma.supervision.findMany({
      where,
      orderBy: [{ year: 'desc' }, { createdAt: 'desc' }],
      skip,
      take: limit,
      include: { category: true },
    }),
    prisma.supervision.count({ where }),
  ]);
  res.json({ success: true, ...paginatedResponse(items, total, page, limit) });
});

export const getSupervision = asyncHandler(async (req, res) => {
  const sup = await prisma.supervision.findUnique({
    where: { id: req.params.id },
    include: { category: true },
  });
  if (!sup) throw ApiError.notFound('Encadrement introuvable');
  res.json({ success: true, data: sup });
});

const SUPERVISION_FIELDS = [
  'title', 'studentName', 'studentEmail', 'institution', 'coSupervisor',
  'year', 'startYear', 'endYear', 'status', 'description', 'link', 'pdfFile',
  'featured', 'categoryId',
];

function pickSupervisionData(body) {
  const data = {};
  for (const key of SUPERVISION_FIELDS) {
    if (body[key] !== undefined) data[key] = body[key];
  }
  ['year', 'startYear', 'endYear'].forEach((k) => {
    if (data[k]) data[k] = parseInt(data[k], 10);
    else if (data[k] === '' || data[k] === null) data[k] = null;
  });
  if (data.categoryId === '') data.categoryId = null;
  return data;
}

export const createSupervision = asyncHandler(async (req, res) => {
  const sup = await prisma.supervision.create({
    data: pickSupervisionData(req.body),
    include: { category: true },
  });
  res.status(201).json({ success: true, data: sup });
});

export const updateSupervision = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.supervision.findUnique({ where: { id } });
  if (!existing) throw ApiError.notFound('Encadrement introuvable');
  const sup = await prisma.supervision.update({
    where: { id },
    data: pickSupervisionData(req.body),
    include: { category: true },
  });
  res.json({ success: true, data: sup });
});

export const deleteSupervision = asyncHandler(async (req, res) => {
  await prisma.supervision.delete({ where: { id: req.params.id } });
  res.json({ success: true, message: 'Encadrement supprime' });
});
