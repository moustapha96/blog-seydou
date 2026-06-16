import swaggerJsdoc from 'swagger-jsdoc';
import env from './env.js';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Blog Universitaire UCAD',
      version: '1.0.0',
      description:
        "Documentation de l'API REST du blog universitaire d'un professeur de l'UCAD. " +
        'Articles, livres, actualites, commentaires, portfolio, newsletter et contact.',
      contact: { name: 'Support Blog UCAD' },
    },
    servers: [{ url: env.apiUrl, description: 'Serveur' }],
    components: {
      securitySchemes: {
        bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      },
    },
    tags: [
      { name: 'Auth', description: 'Authentification' },
      { name: 'Articles', description: 'Gestion des articles' },
      { name: 'Comments', description: 'Commentaires & moderation' },
      { name: 'Books', description: 'Livres & publications' },
      { name: 'News', description: 'Actualites' },
      { name: 'Events', description: 'Evenements / calendrier' },
      { name: 'Categories', description: 'Categories & tags' },
      { name: 'Newsletter', description: 'Inscription newsletter' },
      { name: 'Contact', description: 'Messages de contact' },
      { name: 'Profile', description: 'Portfolio du professeur' },
      { name: 'Stats', description: 'Statistiques tableau de bord' },
      { name: 'Upload', description: 'Telechargement de fichiers' },
      { name: 'Users', description: 'Gestion des utilisateurs' },
      { name: 'Audit', description: 'Journal d\'audit des actions' },
      { name: 'Banners', description: 'Bannieres de page (carrousel)' },
    ],
  },
  apis: ['./src/routes/*.js'],
};

export default swaggerJsdoc(options);
