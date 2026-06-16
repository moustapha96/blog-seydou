import { Router } from 'express';
import * as ctrl from '../controllers/misc.controller.js';
import * as uploadCtrl from '../controllers/upload.controller.js';
import { validate } from '../middleware/validate.js';
import { protect, authorize } from '../middleware/auth.js';
import { upload, processUploads } from '../middleware/upload.js';
import { newsletterRules, contactRules } from '../validators/index.js';

const router = Router();
const staff = [protect, authorize('ADMIN', 'EDITOR')];

// ---- Newsletter ----
router.post('/newsletter/subscribe', validate(newsletterRules), ctrl.subscribeNewsletter);
router.post('/newsletter/unsubscribe', validate(newsletterRules), ctrl.unsubscribeNewsletter);
router.get('/newsletter/subscribers', ...staff, ctrl.listSubscribers);

// ---- Contact ----
router.post('/contact', validate(contactRules), ctrl.sendContact);
router.get('/contact', ...staff, ctrl.listMessages);
router.patch('/contact/:id/read', ...staff, ctrl.markMessageRead);
router.delete('/contact/:id', ...staff, ctrl.deleteMessage);

// ---- Profile / Portfolio ----
router.get('/profile-info', ctrl.getPublicProfile);
router.put('/profile-info', ...staff, ctrl.upsertProfile);

// ---- Stats (dashboard) ----
router.get('/stats', ...staff, ctrl.getStats);

// ---- Upload ----
/**
 * @openapi
 * /api/upload:
 *   post:
 *     tags: [Upload]
 *     summary: Upload d'un fichier (image optimisee en webp, ou PDF/doc)
 *     security: [{ bearerAuth: [] }]
 *     responses: { 201: { description: Fichier enregistre } }
 */
router.post('/upload', ...staff, upload.single('file'), processUploads, uploadCtrl.handleUpload);
router.post('/upload/multiple', ...staff, upload.array('files', 10), processUploads, uploadCtrl.handleUpload);

export default router;
