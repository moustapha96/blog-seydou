import { Router } from 'express';
import * as ctrl from '../controllers/news.controller.js';
import { validate } from '../middleware/validate.js';
import { protect, authorize, optionalAuth } from '../middleware/auth.js';
import { newsRules } from '../validators/index.js';

const router = Router();
const staff = [protect, authorize('ADMIN', 'EDITOR')];

/**
 * @openapi
 * /api/news:
 *   get:
 *     tags: [News]
 *     summary: Liste des actualites
 *     responses: { 200: { description: OK } }
 */
router.get('/', optionalAuth, ctrl.listNews);
router.get('/:idOrSlug', ctrl.getNews);

router.post('/', ...staff, validate(newsRules), ctrl.createNews);
router.put('/:id', ...staff, ctrl.updateNews);
router.delete('/:id', ...staff, ctrl.deleteNews);

export default router;
