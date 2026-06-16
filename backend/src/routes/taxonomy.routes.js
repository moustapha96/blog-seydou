import { Router } from 'express';
import * as ctrl from '../controllers/taxonomy.controller.js';
import { validate } from '../middleware/validate.js';
import { protect, authorize } from '../middleware/auth.js';
import { categoryRules } from '../validators/index.js';

const router = Router();
const staff = [protect, authorize('ADMIN', 'EDITOR')];

/**
 * @openapi
 * /api/categories:
 *   get:
 *     tags: [Categories]
 *     summary: Liste des categories avec nombre d'articles publies
 *     responses: { 200: { description: OK } }
 */
router.get('/categories', ctrl.listCategories);
router.post('/categories', ...staff, validate(categoryRules), ctrl.createCategory);
router.put('/categories/:id', ...staff, ctrl.updateCategory);
router.delete('/categories/:id', ...staff, ctrl.deleteCategory);

router.get('/tags', ctrl.listTags);
router.delete('/tags/:id', ...staff, ctrl.deleteTag);

export default router;
