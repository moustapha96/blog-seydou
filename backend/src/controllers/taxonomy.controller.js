import prisma from '../config/prisma.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import slugify from 'slugify';

// ---- CATEGORIES ----
export const listCategories = asyncHandler(async (req, res) => {
  const categories = await prisma.category.findMany({
    orderBy: { name: 'asc' },
    include: { _count: { select: { articles: { where: { status: 'PUBLISHED' } } } } },
  });
  res.json({ success: true, data: categories });
});

export const createCategory = asyncHandler(async (req, res) => {
  const { name, description, color } = req.body;
  const slug = slugify(name, { lower: true, strict: true });
  const category = await prisma.category.create({ data: { name, slug, description, color } });
  res.status(201).json({ success: true, data: category });
});

export const updateCategory = asyncHandler(async (req, res) => {
  const { name, description, color } = req.body;
  const data = { description, color };
  if (name) { data.name = name; data.slug = slugify(name, { lower: true, strict: true }); }
  Object.keys(data).forEach((k) => data[k] === undefined && delete data[k]);
  const category = await prisma.category.update({ where: { id: req.params.id }, data });
  res.json({ success: true, data: category });
});

export const deleteCategory = asyncHandler(async (req, res) => {
  await prisma.category.delete({ where: { id: req.params.id } });
  res.json({ success: true, message: 'Categorie supprimee' });
});

// ---- TAGS ----
export const listTags = asyncHandler(async (req, res) => {
  const tags = await prisma.tag.findMany({
    orderBy: { name: 'asc' },
    include: { _count: { select: { articles: true } } },
  });
  res.json({ success: true, data: tags });
});

export const deleteTag = asyncHandler(async (req, res) => {
  await prisma.tag.delete({ where: { id: req.params.id } });
  res.json({ success: true, message: 'Tag supprime' });
});

export { ApiError };
