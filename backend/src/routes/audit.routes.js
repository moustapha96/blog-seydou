import { Router } from 'express';
import * as ctrl from '../controllers/audit.controller.js';
import { protect, authorize } from '../middleware/auth.js';

const router = Router();
const adminOnly = [protect, authorize('ADMIN')];

/**
 * @openapi
 * /api/audit:
 *   get:
 *     tags: [Audit]
 *     summary: Journal d'audit des actions (ADMIN)
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - { in: query, name: method, schema: { type: string } }
 *       - { in: query, name: q, schema: { type: string } }
 *     responses: { 200: { description: OK } }
 */
router.get('/', ...adminOnly, ctrl.listAudit);
router.delete('/', ...adminOnly, ctrl.clearAudit);

export default router;
