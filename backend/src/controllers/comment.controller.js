import prisma from '../config/prisma.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import { sanitizeHtml, getPagination, paginatedResponse } from '../utils/helpers.js';
import { notifyNewComment } from '../utils/mailer.js';

// GET /api/comments/article/:articleId  (commentaires approuves)
export const getArticleComments = asyncHandler(async (req, res) => {
  const comments = await prisma.comment.findMany({
    where: { articleId: req.params.articleId, approved: true, parentId: null },
    orderBy: { createdAt: 'desc' },
    include: { replies: { orderBy: { createdAt: 'asc' } } },
  });
  res.json({ success: true, data: comments });
});

// POST /api/comments  (public, en attente de moderation)
export const createComment = asyncHandler(async (req, res) => {
  const { articleId, authorName, authorEmail, content } = req.body;
  const article = await prisma.article.findUnique({ where: { id: articleId } });
  if (!article) throw ApiError.notFound('Article introuvable');

  const comment = await prisma.comment.create({
    data: {
      articleId,
      authorName,
      authorEmail: authorEmail || null,
      content: sanitizeHtml(content),
      approved: false,
      ipAddress: req.ip,
    },
  });

  notifyNewComment({ articleTitle: article.title, authorName, content });

  res.status(201).json({
    success: true,
    message: 'Commentaire envoye, il sera visible apres validation.',
    data: comment,
  });
});

// GET /api/comments  (admin : tous, filtre par statut)
export const listAllComments = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const { status } = req.query; // pending | approved
  const where = {};
  if (status === 'pending') where.approved = false;
  if (status === 'approved') where.approved = true;

  const [items, total] = await Promise.all([
    prisma.comment.findMany({
      where,
      include: { article: { select: { id: true, title: true, slug: true } } },
      orderBy: { createdAt: 'desc' },
      skip, take: limit,
    }),
    prisma.comment.count({ where }),
  ]);
  res.json({ success: true, ...paginatedResponse(items, total, page, limit) });
});

// PUT /api/comments/:id/approve
export const approveComment = asyncHandler(async (req, res) => {
  const comment = await prisma.comment.update({ where: { id: req.params.id }, data: { approved: true } });
  res.json({ success: true, data: comment });
});

// PUT /api/comments/:id  (edition par admin)
export const updateComment = asyncHandler(async (req, res) => {
  const { content, approved } = req.body;
  const data = {};
  if (content !== undefined) data.content = sanitizeHtml(content);
  if (approved !== undefined) data.approved = approved;
  const comment = await prisma.comment.update({ where: { id: req.params.id }, data });
  res.json({ success: true, data: comment });
});

// POST /api/comments/:id/reply  (reponse de l'admin)
export const replyComment = asyncHandler(async (req, res) => {
  const parent = await prisma.comment.findUnique({ where: { id: req.params.id } });
  if (!parent) throw ApiError.notFound('Commentaire introuvable');
  const reply = await prisma.comment.create({
    data: {
      articleId: parent.articleId,
      parentId: parent.id,
      authorName: req.user.name,
      content: sanitizeHtml(req.body.content),
      approved: true,
      userId: req.user.id,
    },
  });
  res.status(201).json({ success: true, data: reply });
});

// DELETE /api/comments/:id
export const deleteComment = asyncHandler(async (req, res) => {
  await prisma.comment.delete({ where: { id: req.params.id } });
  res.json({ success: true, message: 'Commentaire supprime' });
});
