import prisma from '../config/prisma.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import env from '../config/env.js';
import { getPagination, paginatedResponse } from '../utils/helpers.js';
import { sendMail } from '../utils/mailer.js';

// ============ NEWSLETTER ============
export const subscribeNewsletter = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const existing = await prisma.newsletter.findUnique({ where: { email } });
  if (existing && !existing.unsubscribed) {
    return res.json({ success: true, message: 'Vous etes deja inscrit.' });
  }
  await prisma.newsletter.upsert({
    where: { email },
    update: { unsubscribed: false },
    create: { email },
  });
  sendMail({
    to: email,
    subject: 'Bienvenue dans la newsletter du Blog UCAD',
    html: `<p>Merci de votre inscription. Vous recevrez nos nouveaux articles et actualites.</p>`,
  });
  res.status(201).json({ success: true, message: 'Inscription reussie !' });
});

export const unsubscribeNewsletter = asyncHandler(async (req, res) => {
  const { email } = req.body;
  await prisma.newsletter.updateMany({ where: { email }, data: { unsubscribed: true } });
  res.json({ success: true, message: 'Desinscription effectuee.' });
});

export const listSubscribers = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const where = { unsubscribed: false };
  const [items, total] = await Promise.all([
    prisma.newsletter.findMany({ where, orderBy: { createdAt: 'desc' }, skip, take: limit }),
    prisma.newsletter.count({ where }),
  ]);
  res.json({ success: true, ...paginatedResponse(items, total, page, limit) });
});

// ============ CONTACT ============
export const sendContact = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;
  const msg = await prisma.contactMessage.create({ data: { name, email, subject, message } });
  if (env.mail.adminEmail) {
    sendMail({
      to: env.mail.adminEmail,
      subject: `[Contact] ${subject || 'Nouveau message'}`,
      html: `<p><strong>De :</strong> ${name} (${email})</p><p>${message}</p>`,
    });
  }
  res.status(201).json({ success: true, message: 'Message envoye, merci !', data: { id: msg.id } });
});

export const listMessages = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const [items, total] = await Promise.all([
    prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' }, skip, take: limit }),
    prisma.contactMessage.count(),
  ]);
  res.json({ success: true, ...paginatedResponse(items, total, page, limit) });
});

export const markMessageRead = asyncHandler(async (req, res) => {
  const msg = await prisma.contactMessage.update({ where: { id: req.params.id }, data: { isRead: true } });
  res.json({ success: true, data: msg });
});

export const deleteMessage = asyncHandler(async (req, res) => {
  await prisma.contactMessage.delete({ where: { id: req.params.id } });
  res.json({ success: true, message: 'Message supprime' });
});

// ============ PROFILE / PORTFOLIO ============
export const getPublicProfile = asyncHandler(async (req, res) => {
  const profile = await prisma.profile.findFirst();
  res.json({ success: true, data: profile });
});

export const upsertProfile = asyncHandler(async (req, res) => {
  const existing = await prisma.profile.findFirst();
  const data = { ...req.body };
  delete data.id;
  const profile = existing
    ? await prisma.profile.update({ where: { id: existing.id }, data })
    : await prisma.profile.create({ data: { fullName: data.fullName || 'Professeur UCAD', ...data } });
  res.json({ success: true, data: profile });
});

// ============ STATS (dashboard) ============
export const getStats = asyncHandler(async (req, res) => {
  const [
    articles, published, drafts, scheduled, books, publications, supervisions, news, events,
    pendingComments, totalComments, subscribers, messages, unreadMessages, viewsAgg, topArticles,
  ] = await Promise.all([
    prisma.article.count(),
    prisma.article.count({ where: { status: 'PUBLISHED' } }),
    prisma.article.count({ where: { status: 'DRAFT' } }),
    prisma.article.count({ where: { status: 'SCHEDULED' } }),
    prisma.book.count(),
    prisma.publication.count({ where: { status: 'PUBLISHED' } }),
    prisma.supervision.count(),
    prisma.news.count(),
    prisma.event.count(),
    prisma.comment.count({ where: { approved: false } }),
    prisma.comment.count(),
    prisma.newsletter.count({ where: { unsubscribed: false } }),
    prisma.contactMessage.count(),
    prisma.contactMessage.count({ where: { isRead: false } }),
    prisma.article.aggregate({ _sum: { views: true } }),
    prisma.article.findMany({
      where: { status: 'PUBLISHED' }, orderBy: { views: 'desc' }, take: 5,
      select: { id: true, title: true, slug: true, views: true },
    }),
  ]);

  res.json({
    success: true,
    data: {
      articles: { total: articles, published, drafts, scheduled },
      books, publications, supervisions, news, events,
      comments: { total: totalComments, pending: pendingComments },
      newsletter: subscribers,
      messages: { total: messages, unread: unreadMessages },
      totalViews: viewsAgg._sum.views || 0,
      topArticles,
    },
  });
});

export { ApiError };
