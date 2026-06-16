import { Router } from 'express';
import * as ctrl from '../controllers/article.controller.js';
import { validate } from '../middleware/validate.js';
import { protect, authorize, optionalAuth } from '../middleware/auth.js';
import { articleRules } from '../validators/index.js';

const router = Router();
const staff = [protect, authorize('ADMIN', 'EDITOR')];

/**
 * @openapi
 * /api/articles:
 *   get:
 *     tags: [Articles]
 *     summary: Liste paginee des articles publies (filtres category, tag, q, sort, featured)
 *     parameters:
 *       - { in: query, name: page, schema: { type: integer } }
 *       - { in: query, name: limit, schema: { type: integer } }
 *       - { in: query, name: category, schema: { type: string } }
 *       - { in: query, name: q, schema: { type: string } }
 *     responses:
 *       200: { description: Liste des articles }
 */
router.get('/', optionalAuth, ctrl.listArticles);
router.get('/search', ctrl.searchArticles);
router.get('/category/:slug', ctrl.articlesByCategory);

/**
 * @openapi
 * /api/articles/{idOrSlug}:
 *   get:
 *     tags: [Articles]
 *     summary: Detail d'un article (par id ou slug) + commentaires + similaires
 *     parameters:
 *       - { in: path, name: idOrSlug, required: true, schema: { type: string } }
 *     responses:
 *       200: { description: Article }
 *       404: { description: Introuvable }
 */
router.get('/:idOrSlug', optionalAuth, ctrl.getArticle);

/**
 * @openapi
 * /api/articles:
 *   post:
 *     tags: [Articles]
 *     summary: Creer un article (admin/editor)
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       201: { description: Cree }
 */
router.post('/', ...staff, validate(articleRules), ctrl.createArticle);
router.put('/:id', ...staff, ctrl.updateArticle);
router.patch('/:id/archive', ...staff, ctrl.archiveArticle);
router.delete('/:id', ...staff, ctrl.deleteArticle);

export default router;
