# 📘 Blog Universitaire UCAD — Pr. Seydou Diop

Application web complète (full-stack) pour le **blog universitaire d'un professeur de l'UCAD** :
articles de recherche, livres & publications, actualités, événements, portfolio académique,
commentaires modérés, newsletter et espace d'administration.

> Réalisé d'après le cahier des charges `documentation_blog.md`.

---

## 🧱 Stack technique

| Couche | Technologies |
|--------|--------------|
| **Frontend** | React 19, React Router 7, Vite 6, TailwindCSS 4, Axios, React-Quill, date-fns |
| **Backend** | Node.js 20+, Express 4, Prisma 6 |
| **Base de données** | PostgreSQL 17 |
| **Auth** | JWT + bcrypt |
| **Sécurité** | Helmet, CORS, express-rate-limit, express-validator, DOMPurify (anti-XSS) |
| **Fichiers** | Multer + Sharp (optimisation images en WebP) |
| **Logs** | Winston + Morgan |
| **Email** | Nodemailer (newsletter, notifications) |
| **Docs API** | Swagger (OpenAPI) |

---

## 📂 Structure du projet

```
blog-seydou/
├── backend/                  # API REST Node/Express + Prisma
│   ├── prisma/
│   │   ├── schema.prisma     # Modèle de données
│   │   └── seed.js           # Données initiales (admin, 5 articles, 3 livres...)
│   ├── src/
│   │   ├── config/           # env, prisma, logger, swagger
│   │   ├── controllers/      # Logique métier
│   │   ├── middleware/       # auth, validation, upload, rate-limit, erreurs
│   │   ├── routes/           # Définition des endpoints
│   │   ├── utils/            # helpers, JWT, mailer, sanitize
│   │   ├── validators/       # Règles express-validator
│   │   ├── app.js            # Application Express
│   │   └── server.js         # Point d'entrée
│   ├── scripts/              # Sauvegarde PostgreSQL (.bat / .sh)
│   └── uploads/              # Fichiers téléversés (images, PDF)
└── frontend/                 # Application React (Vite)
    └── src/
        ├── api/              # Client Axios + services
        ├── components/       # layout, blog, admin, ui
        ├── context/          # Auth & Toast
        ├── pages/
        │   ├── public/       # Accueil, Articles, Livres, Actualités, À propos...
        │   └── admin/        # Dashboard + gestion de contenu
        └── utils/            # Formatage de dates, etc.
```

---

## 🚀 Installation & démarrage

### Prérequis
- Node.js ≥ 20
- PostgreSQL ≥ 14 (testé sur 17)

### 1) Base de données
La base `blog_ucad` doit exister. Sur cette machine (user `user` / mot de passe `password`) :
```bash
psql -U user -h localhost -c "CREATE DATABASE blog_ucad;"
```

### 2) Backend
```bash
cd backend
npm install
# Le fichier .env est déjà configuré (DATABASE_URL avec user/password)
npx prisma migrate dev      # crée les tables
npm run seed                # insère les données initiales
npm run dev                 # démarre l'API sur http://localhost:5000
```

- API : <http://localhost:5000>
- Documentation Swagger : <http://localhost:5000/api/docs>
- Flux RSS : <http://localhost:5000/rss.xml>

### 3) Frontend
```bash
cd frontend
npm install
npm run dev                 # démarre le site sur http://localhost:5173
```

---

## 🔑 Compte administrateur (créé par le seed)

| Email | Mot de passe |
|-------|--------------|
| `admin@blog-ucad.sn` | `Admin@2026` |

Espace d'administration : <http://localhost:5173/admin/login>

> ⚠️ Pensez à changer ce mot de passe et la clé `JWT_SECRET` en production.

---

## ✨ Fonctionnalités implémentées

**Publication** — création/édition d'articles (éditeur riche), catégories & tags, brouillons,
**publication programmée**, archivage, image de couverture, SEO, temps de lecture & vues automatiques.

**Livres & publications** — catalogue, couverture, ISBN, description, PDF gratuit en téléchargement,
lien d'achat, citations APA/MLA copiables.

**Commentaires** — soumission publique, **modération** (validation/suppression), **réponses** de l'admin,
notification email, anti-spam (rate-limit), assainissement anti-XSS.

**Actualités & événements** — actualités, calendrier/timeline d'événements (à venir / passés), flux RSS.

**Portfolio** — CV complet éditable (formation, expérience, recherches, publications, distinctions, réseaux).

**Navigation & recherche** — recherche globale, filtres par catégorie/tag, tri, pagination.

**Secondaires** — newsletter (inscription + export CSV), partage social (FB/X/LinkedIn/WhatsApp),
formulaire de contact + boîte de réception admin, mode sombre, responsive, statistiques du tableau de bord.

---

## 🔌 Principaux endpoints API

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/login` | Connexion (JWT) |
| GET | `/api/articles` | Liste paginée (filtres) |
| GET | `/api/articles/:slug` | Détail + commentaires + similaires |
| POST/PUT/DELETE | `/api/articles[/:id]` | CRUD (admin) |
| GET/POST | `/api/comments` | Modération / ajout |
| GET/…/DELETE | `/api/books` | Livres |
| GET/…/DELETE | `/api/news` | Actualités |
| GET/…/DELETE | `/api/events` | Événements |
| GET | `/api/categories`, `/api/tags` | Taxonomie |
| POST | `/api/newsletter/subscribe` | Newsletter |
| POST | `/api/contact` | Contact |
| GET/PUT | `/api/profile-info` | Portfolio |
| GET | `/api/stats` | Tableau de bord (admin) |
| POST | `/api/upload` | Upload fichier (admin) |

Documentation interactive complète : `/api/docs`.

---

## 💾 Sauvegarde de la base

- **Windows** : `backend/scripts/backup.bat` (planifiable via le Planificateur de tâches)
- **Linux/VPS** : `backend/scripts/backup.sh` (planifiable via cron, ex. `0 3 * * *`)

Conserve automatiquement les 14 dernières sauvegardes (rotation).

---

## 🌐 Déploiement (VPS)

1. **PostgreSQL** : créer la base et un utilisateur dédié.
2. **Backend** : `npm ci && npx prisma migrate deploy && npm run seed`, lancer avec **PM2** (`pm2 start src/server.js --name blog-api`).
3. **Frontend** : `npm run build` → servir le dossier `dist/` via **Nginx**.
4. **Nginx** : reverse-proxy `/api` et `/uploads` vers le backend, le reste vers `dist/`.
5. **HTTPS** : certificat Let's Encrypt (Certbot).
6. Mettre `NODE_ENV=production`, un `JWT_SECRET` fort et `CLIENT_URL` réel dans `backend/.env`.

---

## 🔒 Notes de sécurité

- Mots de passe hachés (bcrypt, 12 rounds), JWT expirant (24 h).
- Validation systématique des entrées (express-validator).
- HTML des articles/commentaires assaini (DOMPurify) → protection XSS.
- Requêtes paramétrées via Prisma → protection contre l'injection SQL.
- En-têtes sécurisés (Helmet), limitation de débit (rate-limit) globale + renforcée sur auth/commentaires.
