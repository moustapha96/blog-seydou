import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import path from 'path';
import swaggerUi from 'swagger-ui-express';

import env from './config/env.js';
import logger from './config/logger.js';
import swaggerSpec from './config/swagger.js';
import apiRoutes from './routes/index.js';
import { rssFeed } from './controllers/feed.controller.js';
import { globalLimiter } from './middleware/rateLimiter.js';
import { auditLogger } from './middleware/audit.js';
import { notFoundHandler, errorHandler } from './middleware/error.js';

const app = express();

// Securite & perfs
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(compression());
app.use(
  cors({
    origin: env.isProd ? env.clientUrl : true,
    credentials: true,
  })
);
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Logs HTTP
app.use(
  morgan(env.isProd ? 'combined' : 'dev', {
    stream: { write: (msg) => logger.http?.(msg.trim()) || logger.info(msg.trim()) },
  })
);

// Fichiers statiques (uploads)
app.use('/uploads', express.static(path.resolve(env.upload.dir)));

// Documentation Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { customSiteTitle: 'API Blog UCAD' }));
app.get('/api/docs.json', (req, res) => res.json(swaggerSpec));

// Flux RSS
app.get('/rss.xml', rssFeed);

// API (rate limit global + journal d'audit des modifications)
app.use('/api', globalLimiter, auditLogger, apiRoutes);

// Accueil
app.get('/', (req, res) =>
  res.json({
    success: true,
    name: 'API Blog Universitaire UCAD',
    version: '1.0.0',
    docs: `${env.apiUrl}/api/docs`,
    health: `${env.apiUrl}/api/health`,
  })
);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
