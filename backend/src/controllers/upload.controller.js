import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import env from '../config/env.js';

// POST /api/upload (single) ou /api/upload/multiple
// processUploads a deja ecrit les fichiers et rempli req.savedFiles
export const handleUpload = asyncHandler(async (req, res) => {
  if (!req.savedFiles || req.savedFiles.length === 0) {
    throw ApiError.badRequest('Aucun fichier recu');
  }
  const withAbsolute = req.savedFiles.map((f) => ({ ...f, fullUrl: `${env.apiUrl}${f.url}` }));
  res.status(201).json({
    success: true,
    files: withAbsolute,
    // raccourci pratique pour un upload simple
    url: withAbsolute[0].url,
  });
});
