export default class ApiError extends Error {
  constructor(statusCode, message, details = null) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(msg = 'Requete invalide', details) {
    return new ApiError(400, msg, details);
  }
  static unauthorized(msg = 'Non authentifie') {
    return new ApiError(401, msg);
  }
  static forbidden(msg = 'Acces refuse') {
    return new ApiError(403, msg);
  }
  static notFound(msg = 'Ressource introuvable') {
    return new ApiError(404, msg);
  }
  static conflict(msg = 'Conflit de donnees') {
    return new ApiError(409, msg);
  }
}
