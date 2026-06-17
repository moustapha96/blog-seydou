import prisma from '../config/prisma.js';
import logger from '../config/logger.js';

const RESOURCE_LABELS = {
  articles: 'article', comments: 'commentaire', books: 'livre', news: 'actualite',
  events: 'evenement', categories: 'categorie', tags: 'tag', users: 'utilisateur',
  newsletter: 'newsletter', contact: 'message', banners: 'banniere',
  'profile-info': 'portfolio', upload: 'fichier', audit: 'journal d\'audit',
};

const VERBS = { POST: 'Creation', PUT: 'Modification', PATCH: 'Mise a jour', DELETE: 'Suppression' };

// Construit un libelle d'action lisible a partir de la methode et du chemin
function describe(method, path) {
  const clean = path.split('?')[0].replace(/^\/api\//, '');
  const seg = clean.split('/');
  const resource = seg[0];

  // Cas particuliers
  if (resource === 'auth') {
    if (seg[1] === 'login') return 'Connexion';
    if (seg[1] === 'register') return 'Inscription';
    if (seg[1] === 'profile') return 'Mise a jour du profil';
    if (seg[1] === 'refresh') return 'Rafraichissement de session';
    if (seg[1] === 'logout') return 'Deconnexion';
    if (seg[1] === 'logout-all') return 'Fermeture de toutes les sessions';
    if (seg[1] === 'forgot-password') return 'Demande de reinitialisation de mot de passe';
    if (seg[1] === 'reset-password') return 'Reinitialisation de mot de passe';
    if (seg[1] === 'verify-email') return 'Verification d\'email';
    if (seg[1] === 'resend-verification') return 'Renvoi de verification d\'email';
  }
  if (resource === 'articles' && seg[2] === 'archive') return 'Archivage article';
  if (resource === 'comments' && seg[2] === 'approve') return 'Approbation commentaire';
  if (resource === 'comments' && seg[2] === 'reply') return 'Reponse au commentaire';
  if (resource === 'newsletter' && seg[1] === 'subscribe') return 'Inscription newsletter';
  if (resource === 'newsletter' && seg[1] === 'unsubscribe') return 'Desinscription newsletter';
  if (resource === 'upload') return 'Televersement de fichier';

  const label = RESOURCE_LABELS[resource] || resource;
  const verb = VERBS[method] || method;
  return `${verb} ${label}`;
}

// Enregistre les requetes de modification (et l'authentification) dans le journal d'audit.
// Monte AVANT les routes : la lecture de req.user se fait au moment du 'finish'
// (apres execution du middleware protect).
export function auditLogger(req, res, next) {
  const auditable = ['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method);
  if (!auditable) return next();
  // Le rafraichissement de session est trop frequent pour etre journalise
  if (req.path === '/auth/refresh') return next();

  res.on('finish', () => {
    // N'enregistre pas la consultation/purge du journal lui-meme via GET (deja filtre)
    const actorName = req.user?.name || req.body?.email || 'Anonyme';
    const meta = {};
    if (req.params?.id) meta.targetId = req.params.id;
    if (req.body?.title) meta.title = req.body.title;

    prisma.auditLog
      .create({
        data: {
          userId: req.user?.id || null,
          userName: actorName,
          userRole: req.user?.role || null,
          action: describe(req.method, req.originalUrl),
          method: req.method,
          path: req.originalUrl.split('?')[0],
          statusCode: res.statusCode,
          ipAddress: req.ip,
          userAgent: req.headers['user-agent']?.slice(0, 255) || null,
          meta: Object.keys(meta).length ? meta : undefined,
        },
      })
      .catch((err) => logger.error(`[AUDIT] echec enregistrement: ${err.message}`));
  });

  next();
}
