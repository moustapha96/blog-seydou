import slugify from 'slugify';
import DOMPurify from 'isomorphic-dompurify';

// Genere un slug unique a partir d'un titre. checkFn(slug) -> bool (true si deja pris)
export async function generateUniqueSlug(title, checkFn) {
  const base = slugify(title, { lower: true, strict: true, locale: 'fr' }) || 'item';
  let slug = base;
  let i = 1;
  // eslint-disable-next-line no-await-in-loop
  while (await checkFn(slug)) {
    slug = `${base}-${i++}`;
  }
  return slug;
}

// Nettoie le HTML pour eviter les attaques XSS dans le contenu riche
export function sanitizeHtml(dirty) {
  if (!dirty) return dirty;
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'br', 'hr', 'strong', 'b', 'em', 'i', 'u', 's',
      'blockquote', 'code', 'pre', 'ul', 'ol', 'li', 'a', 'img', 'figure', 'figcaption',
      'table', 'thead', 'tbody', 'tr', 'th', 'td', 'span', 'div', 'iframe', 'video', 'audio', 'source', 'sub', 'sup',
    ],
    ALLOWED_ATTR: [
      'href', 'src', 'alt', 'title', 'class', 'target', 'rel', 'width', 'height',
      'frameborder', 'allow', 'allowfullscreen', 'controls', 'type', 'colspan', 'rowspan', 'style',
    ],
    ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto|tel|data):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,
  });
}

// Estime le temps de lecture en minutes (200 mots/min) a partir d'un HTML
export function estimateReadingTime(html = '') {
  const text = html.replace(/<[^>]*>/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

// Construit un extrait depuis le contenu HTML
export function buildExcerpt(html = '', length = 160) {
  const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.length > length ? `${text.slice(0, length)}...` : text;
}

// Pagination depuis la query
export function getPagination(query) {
  const page = Math.max(1, parseInt(query.page || '1', 10));
  const limit = Math.min(50, Math.max(1, parseInt(query.limit || '10', 10)));
  return { page, limit, skip: (page - 1) * limit };
}

export function paginatedResponse(data, total, page, limit) {
  return {
    data,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit) || 1,
      hasNext: page * limit < total,
      hasPrev: page > 1,
    },
  };
}
