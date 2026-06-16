import multer from 'multer';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import sharp from 'sharp';
import env from '../config/env.js';
import ApiError from '../utils/ApiError.js';

const uploadRoot = path.resolve(env.upload.dir);
const imageDir = path.join(uploadRoot, 'images');
const fileDir = path.join(uploadRoot, 'files');
const videoDir = path.join(uploadRoot, 'videos');
[uploadRoot, imageDir, fileDir, videoDir].forEach((d) => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

const ALLOWED_IMAGE = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
const ALLOWED_VIDEO = ['video/mp4', 'video/webm', 'video/ogg', 'video/quicktime'];
const ALLOWED_FILE = ['application/pdf', 'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/zip'];

const storage = multer.memoryStorage();

function fileFilter(req, file, cb) {
  if ([...ALLOWED_IMAGE, ...ALLOWED_VIDEO, ...ALLOWED_FILE].includes(file.mimetype)) cb(null, true);
  else cb(ApiError.badRequest(`Type de fichier non autorise : ${file.mimetype}`), false);
}

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: env.upload.maxSize },
});

function randomName(ext) {
  return `${Date.now()}-${crypto.randomBytes(6).toString('hex')}${ext}`;
}

// Traite les fichiers en memoire : optimise les images (sharp), ecrit sur disque,
// expose req.savedFiles = [{ url, type, originalName }]
export async function processUploads(req, res, next) {
  try {
    const files = req.files || (req.file ? [req.file] : []);
    req.savedFiles = [];
    for (const file of files) {
      if (ALLOWED_IMAGE.includes(file.mimetype) && file.mimetype !== 'image/svg+xml') {
        const name = randomName('.webp');
        const dest = path.join(imageDir, name);
        // eslint-disable-next-line no-await-in-loop
        await sharp(file.buffer)
          .resize({ width: 1600, withoutEnlargement: true })
          .webp({ quality: 82 })
          .toFile(dest);
        req.savedFiles.push({ url: `/uploads/images/${name}`, type: 'image', originalName: file.originalname });
      } else if (ALLOWED_IMAGE.includes(file.mimetype)) {
        const name = randomName('.svg');
        fs.writeFileSync(path.join(imageDir, name), file.buffer);
        req.savedFiles.push({ url: `/uploads/images/${name}`, type: 'image', originalName: file.originalname });
      } else if (ALLOWED_VIDEO.includes(file.mimetype)) {
        const ext = path.extname(file.originalname) || '.mp4';
        const name = randomName(ext);
        fs.writeFileSync(path.join(videoDir, name), file.buffer);
        req.savedFiles.push({ url: `/uploads/videos/${name}`, type: 'video', originalName: file.originalname });
      } else {
        const ext = path.extname(file.originalname) || '';
        const name = randomName(ext);
        fs.writeFileSync(path.join(fileDir, name), file.buffer);
        req.savedFiles.push({ url: `/uploads/files/${name}`, type: 'file', originalName: file.originalname });
      }
    }
    next();
  } catch (err) {
    next(err);
  }
}
