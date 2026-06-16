import { Router } from 'express';
import * as ctrl from '../controllers/comment.controller.js';
import { validate } from '../middleware/validate.js';
import { protect, authorize } from '../middleware/auth.js';
import { commentLimiter } from '../middleware/rateLimiter.js';
import { commentRules } from '../validators/index.js';

const router = Router();
const staff = [protect, authorize('ADMIN', 'EDITOR')];

/**
 * @openapi
 * /api/comments:
 *   get:
 *     tags: [Comments]
 *     summary: Liste de tous les commentaires (admin, filtre status=pending|approved)
 *     security: [{ bearerAuth: [] }]
 *     responses: { 200: { description: OK } }
 *   post:
 *     tags: [Comments]
 *     summary: Ajouter un commentaire (public, soumis a moderation)
 *     responses: { 201: { description: Cree } }
 */
router.get('/', ...staff, ctrl.listAllComments);
router.post('/', commentLimiter, validate(commentRules), ctrl.createComment);

router.get('/article/:articleId', ctrl.getArticleComments);

router.put('/:id/approve', ...staff, ctrl.approveComment);
router.post('/:id/reply', ...staff, ctrl.replyComment);
router.put('/:id', ...staff, ctrl.updateComment);
router.delete('/:id', ...staff, ctrl.deleteComment);

export default router;
