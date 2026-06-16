import prisma from '../config/prisma.js';
import asyncHandler from '../utils/asyncHandler.js';
import env from '../config/env.js';

function escapeXml(str = '') {
  return str.replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c]));
}

// GET /rss.xml  - Flux RSS des derniers articles
export const rssFeed = asyncHandler(async (req, res) => {
  const articles = await prisma.article.findMany({
    where: { status: 'PUBLISHED' },
    orderBy: { publishedAt: 'desc' },
    take: 20,
    include: { category: true },
  });

  const items = articles.map((a) => `
    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${env.clientUrl}/articles/${a.slug}</link>
      <guid isPermaLink="false">${a.id}</guid>
      <description>${escapeXml(a.excerpt || '')}</description>
      ${a.category ? `<category>${escapeXml(a.category.name)}</category>` : ''}
      <pubDate>${new Date(a.publishedAt || a.createdAt).toUTCString()}</pubDate>
    </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Blog Universitaire UCAD</title>
    <link>${env.clientUrl}</link>
    <description>Articles de recherche, publications et actualites academiques</description>
    <language>fr-FR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  res.set('Content-Type', 'application/rss+xml; charset=utf-8').send(xml);
});
