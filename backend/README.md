# Backend — API Blog Universitaire UCAD

API REST Node.js / Express / Prisma / PostgreSQL.

## Démarrage
```bash
npm install
npx prisma migrate dev     # crée les tables
npm run seed               # données initiales
npm run dev                # http://localhost:5000
```

## Scripts npm
| Script | Description |
|--------|-------------|
| `npm run dev` | Démarrage avec rechargement (nodemon) |
| `npm start` | Démarrage production |
| `npm run seed` | Insère les données initiales |
| `npm run prisma:studio` | Interface visuelle Prisma |
| `npm run prisma:deploy` | Applique les migrations (production) |
| `npm run db:reset` | Réinitialise la base + re-seed |

## Documentation
- Swagger : <http://localhost:5000/api/docs>
- RSS : <http://localhost:5000/rss.xml>
- Healthcheck : <http://localhost:5000/api/health>

## Variables d'environnement
Voir `.env.example`. La connexion PostgreSQL de cette machine est déjà
configurée dans `.env` (`user` / `password`, base `blog_ucad`).

## Sauvegarde
- `scripts/backup.bat` (Windows) — `scripts/backup.sh` (Linux/cron)

Documentation complète : `README.md` à la racine du projet.
