import { Router } from 'express';
import * as ctrl from '../controllers/banner.controller.js';
import { validate } from '../middleware/validate.js';
import { protect, authorize } from '../middleware/auth.js';
import { bannerRules } from '../validators/index.js';

const router = Router();
const staff = [protect, authorize('ADMIN', 'EDITOR')];

/**
 * @openapi
 * /api/banners:
 *   get:
 *     tags: [Banners]
 *     summary: Bannieres de toutes les pages (public)
 *     responses: { 200: { description: OK } }
 */
router.get('/', ctrl.listBanners);
router.get('/:page', ctrl.getBanner);
router.put('/:page', ...staff, validate(bannerRules), ctrl.upsertBanner);

export default router;
