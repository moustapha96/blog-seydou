import { Prisma } from '@prisma/client';
import ApiError from '../utils/ApiError.js';
import logger from '../config/logger.js';
import env from '../config/env.js';

// 404 - route non trouvee
export function notFoundHandler(req, res, next) {
  next(ApiError.notFound(`Route introuvable : ${req.method} ${req.originalUrl}`));
}

// Gestionnaire d'erreur global
// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Erreur serveur interne';
  let details = err.details || null;

  // Erreurs Prisma connues
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      statusCode = 409;
      message = `Valeur deja utilisee pour : ${err.meta?.target?.join(', ') || 'champ unique'}`;
    } else if (err.code === 'P2025') {
      statusCode = 404;
      message = 'Ressource introuvable';
    } else {
      statusCode = 400;
      message = 'Erreur de base de donnees';
    }
  }

  if (statusCode >= 500) {
    logger.error(`${req.method} ${req.originalUrl} -> ${err.message}\n${err.stack}`);
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(details && { errors: details }),
    ...(!env.isProd && statusCode >= 500 && { stack: err.stack }),
  });
}
