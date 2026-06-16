import prisma from '../config/prisma.js';
import asyncHandler from '../utils/asyncHandler.js';

// Pages autorisees a posseder une banniere
export const BANNER_PAGES = ['home', 'articles', 'livres', 'publications', 'encadrements', 'actualites', 'evenements', 'a-propos', 'contact', 'recherche'];

// GET /api/banners  -> { home: {...}, articles: {...} }  (public)
export const listBanners = asyncHandler(async (req, res) => {
  const banners = await prisma.banner.findMany();
  const map = {};
  banners.forEach((b) => { map[b.page] = b; });
  res.json({ success: true, data: map });
});

// GET /api/banners/:page  (public)
export const getBanner = asyncHandler(async (req, res) => {
  const banner = await prisma.banner.findUnique({ where: { page: req.params.page } });
  res.json({ success: true, data: banner });
});

const SLIDE_TYPES = ['image', 'video', 'gradient'];
const SLIDE_ALIGN = ['left', 'center', 'right'];

// Nettoie/normalise un slide recu du client (defense en profondeur)
function sanitizeSlide(s = {}) {
  return {
    type: SLIDE_TYPES.includes(s.type) ? s.type : 'image',
    src: typeof s.src === 'string' ? s.src.trim() : '',
    poster: typeof s.poster === 'string' ? s.poster.trim() : '',
    title: typeof s.title === 'string' ? s.title : '',
    subtitle: typeof s.subtitle === 'string' ? s.subtitle : '',
    ctaText: typeof s.ctaText === 'string' ? s.ctaText : '',
    ctaLink: typeof s.ctaLink === 'string' ? s.ctaLink.trim() : '',
    align: SLIDE_ALIGN.includes(s.align) ? s.align : 'center',
    overlay: typeof s.overlay === 'number' ? Math.min(1, Math.max(0, s.overlay)) : 0.6,
    duration: Number.isFinite(s.duration) ? Math.min(30000, Math.max(1500, Math.round(s.duration))) : 6000,
  };
}

// PUT /api/banners/:page  (admin) - cree ou met a jour
export const upsertBanner = asyncHandler(async (req, res) => {
  const { page } = req.params;
  if (!BANNER_PAGES.includes(page)) {
    return res.status(400).json({ success: false, message: `Page inconnue : ${page}` });
  }
  const { title, subtitle, images = [], interval, slides = [] } = req.body;
  const data = {
    title: title ?? null,
    subtitle: subtitle ?? null,
    images: Array.isArray(images) ? images.filter(Boolean) : [],
    interval: interval ? parseInt(interval, 10) : 5000,
    slides: Array.isArray(slides) ? slides.map(sanitizeSlide) : [],
  };
  const banner = await prisma.banner.upsert({
    where: { page },
    update: data,
    create: { page, ...data },
  });
  res.json({ success: true, data: banner });
});
