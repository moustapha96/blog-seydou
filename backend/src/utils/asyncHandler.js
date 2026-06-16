// Enrobe un controleur async pour propager les erreurs vers le middleware d'erreur
const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;
