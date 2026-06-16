import { validationResult } from 'express-validator';
import ApiError from '../utils/ApiError.js';

// Execute les chaines de validation puis renvoie les erreurs eventuelles
export const validate = (validations) => async (req, res, next) => {
  await Promise.all(validations.map((v) => v.run(req)));
  const result = validationResult(req);
  if (result.isEmpty()) return next();
  const errors = result.array().map((e) => ({ field: e.path, message: e.msg }));
  return next(ApiError.badRequest('Donnees invalides', errors));
};
