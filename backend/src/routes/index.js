import { Router } from 'express';
import authRoutes from './auth.routes.js';
import articleRoutes from './article.routes.js';
import commentRoutes from './comment.routes.js';
import bookRoutes from './book.routes.js';
import newsRoutes from './news.routes.js';
import eventRoutes from './event.routes.js';
import taxonomyRoutes from './taxonomy.routes.js';
import miscRoutes from './misc.routes.js';
import userRoutes from './user.routes.js';
import auditRoutes from './audit.routes.js';
import bannerRoutes from './banner.routes.js';
import announcementRoutes from './announcement.routes.js';
import publicationRoutes from './publication.routes.js';
import supervisionRoutes from './supervision.routes.js';

const router = Router();

router.get('/health', (req, res) => res.json({ success: true, status: 'ok', time: new Date().toISOString() }));

router.use('/auth', authRoutes);
router.use('/articles', articleRoutes);
router.use('/comments', commentRoutes);
router.use('/books', bookRoutes);
router.use('/news', newsRoutes);
router.use('/events', eventRoutes);
router.use('/users', userRoutes);
router.use('/audit', auditRoutes);
router.use('/banners', bannerRoutes);
router.use('/announcements', announcementRoutes);
router.use('/publications', publicationRoutes);
router.use('/supervisions', supervisionRoutes);
router.use('/', taxonomyRoutes); // /categories, /tags
router.use('/', miscRoutes); // newsletter, contact, profile-info, stats, upload

export default router;
