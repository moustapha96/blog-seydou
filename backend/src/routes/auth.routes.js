import { Router } from 'express';
import * as ctrl from '../controllers/auth.controller.js';
import { validate } from '../middleware/validate.js';
import { protect } from '../middleware/auth.js';
import { authLimiter, passwordResetLimiter, refreshLimiter } from '../middleware/rateLimiter.js';
import {
  registerRules,
  loginRules,
  forgotPasswordRules,
  resetPasswordRules,
  resendVerificationRules,
} from '../validators/index.js';

const router = Router();

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Creation d'un compte (le 1er compte devient ADMIN et est auto-verifie)
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
 *       201: { description: Compte cree (email de verification envoye) }
 */
router.post('/register', authLimiter, validate(registerRules), ctrl.register);

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Connexion, retourne un access token + pose un cookie refresh httpOnly
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
 *       403: { description: Email non verifie (code EMAIL_NOT_VERIFIED) }
 *       423: { description: Compte verrouille }
 */
router.post('/login', authLimiter, validate(loginRules), ctrl.login);

/**
 * @openapi
 * /api/auth/refresh:
 *   post:
 *     tags: [Auth]
 *     summary: Rafraichit l'access token via le cookie refresh (rotation)
 *     responses:
 *       200: { description: Nouvel access token }
 *       401: { description: Session invalide ou expiree }
 */
router.post('/refresh', refreshLimiter, ctrl.refresh);

/**
 * @openapi
 * /api/auth/logout:
 *   post:
 *     tags: [Auth]
 *     summary: Deconnexion (revoque la session courante)
 *     responses:
 *       200: { description: Deconnecte }
 */
router.post('/logout', ctrl.logout);

/**
 * @openapi
 * /api/auth/logout-all:
 *   post:
 *     tags: [Auth]
 *     summary: Ferme toutes les sessions de l'utilisateur connecte
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Sessions fermees }
 */
router.post('/logout-all', protect, ctrl.logoutAll);

/**
 * @openapi
 * /api/auth/forgot-password:
 *   post:
 *     tags: [Auth]
 *     summary: Demande un email de reinitialisation de mot de passe
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email]
 *             properties: { email: { type: string } }
 *     responses:
 *       200: { description: Email envoye si le compte existe }
 */
router.post('/forgot-password', passwordResetLimiter, validate(forgotPasswordRules), ctrl.forgotPassword);

/**
 * @openapi
 * /api/auth/reset-password:
 *   post:
 *     tags: [Auth]
 *     summary: Definit un nouveau mot de passe a partir d'un jeton
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [token, password]
 *             properties:
 *               token: { type: string }
 *               password: { type: string }
 *     responses:
 *       200: { description: Mot de passe reinitialise }
 *       400: { description: Lien invalide ou expire }
 */
router.post('/reset-password', passwordResetLimiter, validate(resetPasswordRules), ctrl.resetPassword);

/**
 * @openapi
 * /api/auth/verify-email:
 *   get:
 *     tags: [Auth]
 *     summary: Verifie l'adresse email a partir d'un jeton
 *     parameters:
 *       - in: query
 *         name: token
 *         schema: { type: string }
 *     responses:
 *       200: { description: Email verifie }
 *       400: { description: Lien invalide ou expire }
 */
router.get('/verify-email', ctrl.verifyEmail);
router.post('/verify-email', ctrl.verifyEmail);

/**
 * @openapi
 * /api/auth/resend-verification:
 *   post:
 *     tags: [Auth]
 *     summary: Renvoie l'email de verification
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email]
 *             properties: { email: { type: string } }
 *     responses:
 *       200: { description: Email renvoye si compte non verifie }
 */
router.post('/resend-verification', passwordResetLimiter, validate(resendVerificationRules), ctrl.resendVerification);

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
