import { Router } from 'express';
import * as ctrl from '../controllers/event.controller.js';
import { validate } from '../middleware/validate.js';
import { protect, authorize } from '../middleware/auth.js';
import { eventRules } from '../validators/index.js';

const router = Router();
const staff = [protect, authorize('ADMIN', 'EDITOR')];

/**
 * @openapi
 * /api/events:
 *   get:
 *     tags: [Events]
 *     summary: Liste des evenements (filtres upcoming, month=YYYY-MM)
 *     responses: { 200: { description: OK } }
 */
router.get('/', ctrl.listEvents);
router.get('/:id', ctrl.getEvent);

router.post('/', ...staff, validate(eventRules), ctrl.createEvent);
router.put('/:id', ...staff, ctrl.updateEvent);
router.delete('/:id', ...staff, ctrl.deleteEvent);

export default router;
