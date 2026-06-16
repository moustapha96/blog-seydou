import prisma from '../config/prisma.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import {
  generateUniqueSlug, sanitizeHtml, estimateReadingTime, buildExcerpt,
  getPagination, paginatedResponse,
} from '../utils/helpers.js';

const articleInclude = {
  author: { select: { id: true, name: true, avatar: true } },
  category: true,
  tags: true,
  _count: { select: { comments: { where: { approved: true } } } },
};

// Determine le statut effectif d'une publication programmee arrivee a echeance
async function publishDueArticles() {
  await prisma.article.updateMany({
    where: { status: 'SCHEDULED', scheduledAt: { lte: new Date() } },
    data: { status: 'PUBLISHED', publishedAt: new Date() },
  });
}

// Connecte / cree les tags par nom et retourne le format prisma
async function resolveTags(tagNames = []) {
  const ops = [];
  for (const raw of tagNames) {
    const name = String(raw).trim();
    if (!name) continue;
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    ops.push({ where: { name }, create: { name, slug } });
  }
  return ops;
}

// GET /api/articles  (liste publique paginee + filtres)
export const listArticles = asyncHandler(async (req, res) => {
  await publishDueArticles();
  const { page, limit, skip } = getPagination(req.query);
  const { category, tag, featured, status, q, sort } = req.query;

  // Visiteurs : uniquement PUBLISHED. Admin/Editor peuvent demander un statut.
  const isStaff = req.user && ['ADMIN', 'EDITOR'].includes(req.user.role);
  const where = {};
  if (isStaff && status) where.status = status;
  else where.status = 'PUBLISHED';

  if (category) where.category = { slug: category };
  if (tag) where.tags = { some: { slug: tag } };
  if (featured === 'true') where.featured = true;
  if (q) {
    where.OR = [
      { title: { contains: q, mode: 'insensitive' } },
      { excerpt: { contains: q, mode: 'insensitive' } },
      { content: { contains: q, mode: 'insensitive' } },
    ];
  }

  const orderBy =
    sort === 'popular' ? { views: 'desc' } :
    sort === 'oldest' ? { publishedAt: 'asc' } :
    { publishedAt: 'desc' };

  const [items, total] = await Promise.all([
    prisma.article.findMany({ where, include: articleInclude, orderBy, skip, take: limit }),
    prisma.article.count({ where }),
  ]);

  res.json({ success: true, ...paginatedResponse(items, total, page, limit) });
});

// GET /api/articles/search?q=
export const searchArticles = asyncHandler(async (req, res) => {
  const q = (req.query.q || '').trim();
  if (!q) return res.json({ success: true, data: [] });
  const items = await prisma.article.findMany({
    where: {
      status: 'PUBLISHED',
      OR: [
        { title: { contains: q, mode: 'insensitive' } },
        { excerpt: { contains: q, mode: 'insensitive' } },
        { content: { contains: q, mode: 'insensitive' } },
        { tags: { some: { name: { contains: q, mode: 'insensitive' } } } },
      ],
    },
    include: articleInclude,
    orderBy: { publishedAt: 'desc' },
    take: 20,
  });
  res.json({ success: true, data: items });
});

// GET /api/articles/category/:slug
export const articlesByCategory = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const where = { status: 'PUBLISHED', category: { slug: req.params.slug } };
  const [items, total] = await Promise.all([
    prisma.article.findMany({ where, include: articleInclude, orderBy: { publishedAt: 'desc' }, skip, take: limit }),
    prisma.article.count({ where }),
  ]);
  res.json({ success: true, ...paginatedResponse(items, total, page, limit) });
});

// GET /api/articles/:idOrSlug  (detail + incrementation des vues)
export const getArticle = asyncHandler(async (req, res) => {
  const { idOrSlug } = req.params;
  const isStaff = req.user && ['ADMIN', 'EDITOR'].includes(req.user.role);

  const article = await prisma.article.findFirst({
    where: { OR: [{ id: idOrSlug }, { slug: idOrSlug }] },
    include: {
      ...articleInclude,
      comments: {
        where: { approved: true, parentId: null },
        orderBy: { createdAt: 'desc' },
        include: { replies: { orderBy: { createdAt: 'asc' } } },
      },
    },
  });
  if (!article) throw ApiError.notFound('Article introuvable');
  if (article.status !== 'PUBLISHED' && !isStaff) throw ApiError.notFound('Article introuvable');

  // Compte une vue uniquement pour les visiteurs (pas le staff)
  if (!isStaff) {
    await prisma.article.update({ where: { id: article.id }, data: { views: { increment: 1 } } });
    article.views += 1;
  }

  // Articles similaires (meme categorie)
  const related = await prisma.article.findMany({
    where: { status: 'PUBLISHED', id: { not: article.id }, categoryId: article.categoryId || undefined },
    include: articleInclude,
    orderBy: { publishedAt: 'desc' },
    take: 3,
  });

  res.json({ success: true, data: article, related });
});

// POST /api/articles  (admin/editor)
export const createArticle = asyncHandler(async (req, res) => {
  const {
    title, content, excerpt, coverImage, categoryId, tags = [],
    status = 'DRAFT', featured = false, scheduledAt, metaTitle, metaDesc, attachments = [],
  } = req.body;

  const cleanContent = sanitizeHtml(content);
  const slug = await generateUniqueSlug(title, async (s) => !!(await prisma.article.findUnique({ where: { slug: s } })));

  let publishedAt = null;
  let finalStatus = status;
  if (status === 'PUBLISHED') publishedAt = new Date();
  if (status === 'SCHEDULED' && scheduledAt) finalStatus = 'SCHEDULED';

  const article = await prisma.article.create({
    data: {
      title, slug, content: cleanContent,
      excerpt: excerpt || buildExcerpt(cleanContent),
      coverImage, categoryId: categoryId || null,
      status: finalStatus, featured: !!featured,
      readingTime: estimateReadingTime(cleanContent),
      metaTitle, metaDesc, attachments,
      publishedAt,
      scheduledAt: scheduledAt ? new Date(scheduledAt) : null,
      authorId: req.user.id,
      tags: { connectOrCreate: await resolveTags(tags) },
    },
    include: articleInclude,
  });
  res.status(201).json({ success: true, data: article });
});

// PUT /api/articles/:id  (admin/editor)
export const updateArticle = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const existing = await prisma.article.findUnique({ where: { id } });
  if (!existing) throw ApiError.notFound('Article introuvable');

  const {
    title, content, excerpt, coverImage, categoryId, tags,
    status, featured, scheduledAt, metaTitle, metaDesc, attachments,
  } = req.body;

  const data = {};
  if (title && title !== existing.title) {
    data.title = title;
    data.slug = await generateUniqueSlug(title, async (s) =>
      !!(await prisma.article.findFirst({ where: { slug: s, NOT: { id } } })));
  }
  if (content !== undefined) {
    data.content = sanitizeHtml(content);
    data.readingTime = estimateReadingTime(data.content);
    if (excerpt === undefined) data.excerpt = buildExcerpt(data.content);
  }
  if (excerpt !== undefined) data.excerpt = excerpt;
  if (coverImage !== undefined) data.coverImage = coverImage;
  if (categoryId !== undefined) data.categoryId = categoryId || null;
  if (featured !== undefined) data.featured = !!featured;
  if (metaTitle !== undefined) data.metaTitle = metaTitle;
  if (metaDesc !== undefined) data.metaDesc = metaDesc;
  if (attachments !== undefined) data.attachments = attachments;
  if (scheduledAt !== undefined) data.scheduledAt = scheduledAt ? new Date(scheduledAt) : null;

  if (status !== undefined) {
    data.status = status;
    if (status === 'PUBLISHED' && !existing.publishedAt) data.publishedAt = new Date();
  }
  if (tags !== undefined) {
    data.tags = { set: [], connectOrCreate: await resolveTags(tags) };
  }

  const article = await prisma.article.update({ where: { id }, data, include: articleInclude });
  res.json({ success: true, data: article });
});

// DELETE /api/articles/:id
export const deleteArticle = asyncHandler(async (req, res) => {
  await prisma.article.delete({ where: { id: req.params.id } });
  res.json({ success: true, message: 'Article supprime' });
});

// PATCH /api/articles/:id/archive
export const archiveArticle = asyncHandler(async (req, res) => {
  const article = await prisma.article.update({
    where: { id: req.params.id }, data: { status: 'ARCHIVED' },
  });
  res.json({ success: true, data: article });
});
