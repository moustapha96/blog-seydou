import { Router } from 'express';
import * as ctrl from '../controllers/publication.controller.js';
import { validate } from '../middleware/validate.js';
import { protect, authorize, optionalAuth } from '../middleware/auth.js';
import { publicationRules, publicationCategoryRules } from '../validators/index.js';

const router = Router();
const staff = [protect, authorize('ADMIN', 'EDITOR')];

router.get('/categories', ctrl.listPublicationCategories);
router.post('/categories', ...staff, validate(publicationCategoryRules), ctrl.createPublicationCategory);
router.put('/categories/:id', ...staff, ctrl.updatePublicationCategory);
router.delete('/categories/:id', ...staff, ctrl.deletePublicationCategory);

router.get('/', optionalAuth, ctrl.listPublications);
router.get('/:idOrSlug', optionalAuth, ctrl.getPublication);
router.post('/', ...staff, validate(publicationRules), ctrl.createPublication);
router.put('/:id', ...staff, ctrl.updatePublication);
router.delete('/:id', ...staff, ctrl.deletePublication);

export default router;
