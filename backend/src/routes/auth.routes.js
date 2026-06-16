import { Router } from 'express';
import * as ctrl from '../controllers/auth.controller.js';
import { validate } from '../middleware/validate.js';
import { protect } from '../middleware/auth.js';
import { authLimiter } from '../middleware/rateLimiter.js';
import { registerRules, loginRules } from '../validators/index.js';

const router = Router();

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Creation d'un compte (le 1er compte devient ADMIN)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, password]
 *             properties:
 *               name: { type: string }
 *               email: { type: string }
 *               password: { type: string }
 *     responses:
 *       201: { description: Compte cree }
 */
router.post('/register', authLimiter, validate(registerRules), ctrl.register);

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Connexion, retourne un JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email: { type: string }
 *               password: { type: string }
 *     responses:
 *       200: { description: Connecte }
 *       401: { description: Identifiants invalides }
 */
router.post('/login', authLimiter, validate(loginRules), ctrl.login);

/**
 * @openapi
 * /api/auth/profile:
 *   get:
 *     tags: [Auth]
 *     summary: Profil de l'utilisateur connecte
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: OK }
 */
router.get('/profile', protect, ctrl.getProfile);
router.put('/profile', protect, ctrl.updateProfile);

export default router;
