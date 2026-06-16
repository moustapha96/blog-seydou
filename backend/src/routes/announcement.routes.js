import { Router } from 'express';
import * as ctrl from '../controllers/announcement.controller.js';
import { validate } from '../middleware/validate.js';
import { protect, authorize } from '../middleware/auth.js';
import { announcementRules } from '../validators/index.js';

const router = Router();
const staff = [protect, authorize('ADMIN', 'EDITOR')];

/**
 * @openapi
 * /api/announcements:
 *   get:
 *     tags: [Announcements]
 *     summary: Annonces actives a afficher dans le bandeau (public)
 *     responses: { 200: { description: OK } }
 */
router.get('/', ctrl.listActiveAnnouncements);
router.get('/all', ...staff, ctrl.listAllAnnouncements);
router.post('/', ...staff, validate(announcementRules), ctrl.createAnnouncement);
router.put('/:id', ...staff, ctrl.updateAnnouncement);
router.delete('/:id', ...staff, ctrl.deleteAnnouncement);

export default router;
