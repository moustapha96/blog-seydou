import dotenv from 'dotenv';
dotenv.config();

const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '5000', 10),
  apiUrl: process.env.API_URL || 'http://localhost:5000',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
  corsOrigins: (process.env.CORS_ORIGINS || '')
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean),
  databaseUrl: process.env.DATABASE_URL,
  jwt: {
    secret: process.env.JWT_SECRET || 'dev_secret',
    // Conserve pour retro-compat ; l'access token utilise accessExpiresIn
    expiresIn: process.env.JWT_EXPIRES_IN || '24h',
    accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN || '15m',
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '30d',
  },
  security: {
    maxFailedLogins: parseInt(process.env.AUTH_MAX_FAILED_LOGINS || '5', 10),
    lockMinutes: parseInt(process.env.AUTH_LOCK_MINUTES || '15', 10),
    resetTokenTtlMin: parseInt(process.env.AUTH_RESET_TTL_MIN || '30', 10),
    verifyTokenTtlHours: parseInt(process.env.AUTH_VERIFY_TTL_HOURS || '48', 10),
  },
  cookie: {
    name: process.env.REFRESH_COOKIE_NAME || 'ucad_refresh',
  },
  upload: {
    dir: process.env.UPLOAD_DIR || 'uploads',
    maxSize: parseInt(process.env.MAX_FILE_SIZE || '10485760', 10),
  },
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10),
    max: parseInt(process.env.RATE_LIMIT_MAX || '100', 10),
  },
  mail: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    from: process.env.MAIL_FROM || 'Blog UCAD <no-reply@blog-ucad.sn>',
    adminEmail: process.env.ADMIN_EMAIL,
  },
  isProd: process.env.NODE_ENV === 'production',
};

export default env;
