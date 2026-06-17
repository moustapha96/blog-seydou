import rateLimit from 'express-rate-limit';
import env from '../config/env.js';

// Limiteur global
export const globalLimiter = rateLimit({
  windowMs: env.rateLimit.windowMs,
  max: env.rateLimit.max,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Trop de requetes, veuillez reessayer plus tard.' },
});

// Limiteur strict pour l'authentification (anti brute-force)
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Trop de tentatives de connexion, reessayez dans 15 minutes.' },
});

// Limiteur pour la recuperation de mot de passe / renvoi de verification
export const passwordResetLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Trop de demandes, reessayez dans une heure.' },
});

// Limiteur souple pour le rafraichissement de session
export const refreshLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Trop de requetes.' },
});

// Limiteur pour les commentaires (anti-spam)
export const commentLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Vous commentez trop vite, patientez quelques minutes.' },
});
