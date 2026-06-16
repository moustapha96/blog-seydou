import { Router } from 'express';
import * as ctrl from '../controllers/book.controller.js';
import { validate } from '../middleware/validate.js';
import { protect, authorize } from '../middleware/auth.js';
import { bookRules } from '../validators/index.js';

const router = Router();
const staff = [protect, authorize('ADMIN', 'EDITOR')];

/**
 * @openapi
 * /api/books:
 *   get:
 *     tags: [Books]
 *     summary: Liste des livres & publications (filtres category, year, q)
 *     responses: { 200: { description: OK } }
 */
router.get('/', ctrl.listBooks);
router.get('/:idOrSlug', ctrl.getBook);
router.get('/:id/download', ctrl.downloadBook);

router.post('/', ...staff, validate(bookRules), ctrl.createBook);
router.put('/:id', ...staff, ctrl.updateBook);
router.delete('/:id', ...staff, ctrl.deleteBook);

export default router;
