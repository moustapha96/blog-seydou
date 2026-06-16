import { body } from 'express-validator';

export const registerRules = [
  body('name').trim().notEmpty().withMessage('Le nom est requis').isLength({ max: 100 }),
  body('email').isEmail().withMessage('Email invalide').normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('Mot de passe : 6 caracteres minimum'),
];

export const loginRules = [
  body('email').isEmail().withMessage('Email invalide').normalizeEmail(),
  body('password').notEmpty().withMessage('Mot de passe requis'),
];

export const articleRules = [
  body('title').trim().notEmpty().withMessage('Le titre est requis').isLength({ max: 250 }),
  body('content').notEmpty().withMessage('Le contenu est requis'),
  body('status').optional().isIn(['DRAFT', 'SCHEDULED', 'PUBLISHED', 'ARCHIVED']),
  body('scheduledAt').optional({ nullable: true }).isISO8601().withMessage('Date de planification invalide'),
];

export const commentRules = [
  body('articleId').notEmpty().withMessage('Article requis'),
  body('authorName').trim().notEmpty().withMessage('Votre nom est requis').isLength({ max: 100 }),
  body('authorEmail').optional({ nullable: true, checkFalsy: true }).isEmail().withMessage('Email invalide'),
  body('content').trim().notEmpty().withMessage('Le commentaire est vide').isLength({ min: 2, max: 3000 }),
];

export const bookRules = [
  body('title').trim().notEmpty().withMessage('Le titre est requis'),
  body('author').trim().notEmpty().withMessage("L'auteur est requis"),
  body('year').optional({ nullable: true, checkFalsy: true }).isInt({ min: 1000, max: 3000 }),
  body('purchaseUrl').optional({ nullable: true, checkFalsy: true }).isURL().withMessage("Lien d'achat invalide"),
];

export const newsRules = [
  body('title').trim().notEmpty().withMessage('Le titre est requis'),
  body('content').notEmpty().withMessage('Le contenu est requis'),
];

export const eventRules = [
  body('title').trim().notEmpty().withMessage('Le titre est requis'),
  body('startDate').notEmpty().withMessage('La date de debut est requise').isISO8601(),
];

export const categoryRules = [
  body('name').trim().notEmpty().withMessage('Le nom est requis'),
];

export const newsletterRules = [
  body('email').isEmail().withMessage('Email invalide').normalizeEmail(),
];

export const contactRules = [
  body('name').trim().notEmpty().withMessage('Le nom est requis'),
  body('email').isEmail().withMessage('Email invalide').normalizeEmail(),
  body('message').trim().notEmpty().withMessage('Le message est requis').isLength({ min: 5, max: 5000 }),
];

export const createUserRules = [
  body('name').trim().notEmpty().withMessage('Le nom est requis').isLength({ max: 100 }),
  body('email').isEmail().withMessage('Email invalide').normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('Mot de passe : 6 caracteres minimum'),
  body('role').optional().isIn(['ADMIN', 'EDITOR', 'READER']).withMessage('Role invalide'),
];

export const updateUserRules = [
  body('email').optional().isEmail().withMessage('Email invalide').normalizeEmail(),
  body('password').optional({ checkFalsy: true }).isLength({ min: 6 }).withMessage('Mot de passe : 6 caracteres minimum'),
  body('role').optional().isIn(['ADMIN', 'EDITOR', 'READER']).withMessage('Role invalide'),
];

export const bannerRules = [
  body('images').optional().isArray().withMessage('images doit etre un tableau'),
  body('slides').optional().isArray().withMessage('slides doit etre un tableau'),
  body('slides.*.type').optional().isIn(['image', 'video', 'gradient']).withMessage('Type de slide invalide'),
  body('interval').optional({ checkFalsy: true }).isInt({ min: 1500, max: 30000 }).withMessage('Intervalle entre 1500 et 30000 ms'),
];

export const announcementRules = [
  body('message').trim().notEmpty().withMessage('Le message est requis').isLength({ max: 280 }).withMessage('280 caracteres maximum'),
  body('type').optional().isIn(['info', 'success', 'warning', 'event']).withMessage('Type invalide'),
  body('link').optional({ checkFalsy: true }).isLength({ max: 500 }),
  body('startsAt').optional({ checkFalsy: true }).isISO8601().withMessage('Date de debut invalide'),
  body('endsAt').optional({ checkFalsy: true }).isISO8601().withMessage('Date de fin invalide'),
];

export const publicationCategoryRules = [
  body('name').trim().notEmpty().withMessage('Le nom est requis'),
];

export const publicationRules = [
  body('title').trim().notEmpty().withMessage('Le titre est requis'),
  body('authors').trim().notEmpty().withMessage('Les auteurs sont requis'),
  body('year').optional({ nullable: true, checkFalsy: true }).isInt({ min: 1000, max: 3000 }),
  body('status').optional().isIn(['DRAFT', 'SCHEDULED', 'PUBLISHED', 'ARCHIVED']),
  body('link').optional({ nullable: true, checkFalsy: true }).isURL().withMessage('Lien invalide'),
  body('doi').optional({ nullable: true, checkFalsy: true }).isLength({ max: 120 }),
];

export const supervisionCategoryRules = [
  body('name').trim().notEmpty().withMessage('Le nom est requis'),
];

export const supervisionRules = [
  body('title').trim().notEmpty().withMessage('Le sujet est requis'),
  body('studentName').trim().notEmpty().withMessage('Le nom de l\'etudiant est requis'),
  body('status').optional().isIn(['IN_PROGRESS', 'DEFENDED', 'ABANDONED']),
  body('year').optional({ nullable: true, checkFalsy: true }).isInt({ min: 1980, max: 3000 }),
  body('startYear').optional({ nullable: true, checkFalsy: true }).isInt({ min: 1980, max: 3000 }),
  body('endYear').optional({ nullable: true, checkFalsy: true }).isInt({ min: 1980, max: 3000 }),
  body('link').optional({ nullable: true, checkFalsy: true }).isURL().withMessage('Lien invalide'),
];
