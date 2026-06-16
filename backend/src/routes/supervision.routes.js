import { Router } from 'express';
import * as ctrl from '../controllers/supervision.controller.js';
import { validate } from '../middleware/validate.js';
import { protect, authorize } from '../middleware/auth.js';
import { supervisionRules, supervisionCategoryRules } from '../validators/index.js';

const router = Router();
const staff = [protect, authorize('ADMIN', 'EDITOR')];

router.get('/categories', ctrl.listSupervisionCategories);
router.post('/categories', ...staff, validate(supervisionCategoryRules), ctrl.createSupervisionCategory);
router.put('/categories/:id', ...staff, ctrl.updateSupervisionCategory);
router.delete('/categories/:id', ...staff, ctrl.deleteSupervisionCategory);

router.get('/', ctrl.listSupervisions);
router.get('/:id', ctrl.getSupervision);
router.post('/', ...staff, validate(supervisionRules), ctrl.createSupervision);
router.put('/:id', ...staff, ctrl.updateSupervision);
router.delete('/:id', ...staff, ctrl.deleteSupervision);

export default router;
