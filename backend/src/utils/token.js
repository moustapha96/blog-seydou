import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import env from '../config/env.js';

// ----- Access token (JWT court) -----
export function signAccessToken(payload) {
  return jwt.sign(payload, env.jwt.secret, { expiresIn: env.jwt.accessExpiresIn });
}

export function verifyAccessToken(token) {
  return jwt.verify(token, env.jwt.secret);
}

// Alias retro-compatibles (anciens appels signToken/verifyToken)
export const signToken = signAccessToken;
export const verifyToken = verifyAccessToken;

// ----- Refresh token (opaque, stocke hashe) -----
export function generateOpaqueToken() {
  return crypto.randomBytes(40).toString('hex');
}

export function hashToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

// Convertit une duree ('30d', '15m', '48h', '900s') en millisecondes.
export function durationToMs(str) {
  const m = /^(\d+)\s*(ms|s|m|h|d)?$/.exec(String(str).trim());
  if (!m) return 0;
  const n = parseInt(m[1], 10);
  const unit = m[2] || 'ms';
  const mult = { ms: 1, s: 1000, m: 60_000, h: 3_600_000, d: 86_400_000 };
  return n * (mult[unit] || 1);
}
