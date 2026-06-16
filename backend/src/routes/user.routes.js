import { Router } from 'express';
import * as ctrl from '../controllers/user.controller.js';
import { validate } from '../middleware/validate.js';
import { protect, authorize } from '../middleware/auth.js';
import { createUserRules, updateUserRules } from '../validators/index.js';

const router = Router();
const adminOnly = [protect, authorize('ADMIN')];

/**
 * @openapi
 * /api/users:
 *   get:
 *     tags: [Users]
 *     summary: Liste des utilisateurs (ADMIN)
 *     security: [{ bearerAuth: [] }]
 *     responses: { 200: { description: OK } }
 *   post:
 *     tags: [Users]
 *     summary: Creer un utilisateur (ADMIN)
 *     security: [{ bearerAuth: [] }]
 *     responses: { 201: { description: Cree } }
 */
router.get('/', ...adminOnly, ctrl.listUsers);
router.post('/', ...adminOnly, validate(createUserRules), ctrl.createUser);
router.get('/:id', ...adminOnly, ctrl.getUser);
router.put('/:id', ...adminOnly, validate(updateUserRules), ctrl.updateUser);
router.delete('/:id', ...adminOnly, ctrl.deleteUser);

export default router;
