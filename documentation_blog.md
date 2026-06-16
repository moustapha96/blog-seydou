Voici un **cahier des charges complet** pour un **site de blog universitaire** destiné à un **professeur de l'UCAD** (Université Cheikh Anta Diop de Dakar), développé avec **Node.js comme backend** et **React comme frontend**.

***

# 📘 CAHIER DES CHARGES – SITE DE BLOG POUR PROFESSEUR UNIVERSITAIRE (UCAD)

## 1. Présentation du projet

### 1.1 Contexte
Un professeur de l'**UCAD** souhaite créer un **blog universitaire professionnel** pour :
- Publier des **articles de recherche**, **publications scientifiques**, et **actualités académiques**
- Présentation de ses **livres** et **ouvrages** publiés
- Partager des **informations** sur ses cours, conférences, et événements
- Permettre des **commentaires** et interactions avec étudiants, collègues et public
- Centraliser son **portfolio académique** (CV, publications, recherches)

### 1.2 Objectifs principaux
| Objectif | Description |
|----------|-------------|
| **Diffusion scientifique** | Publier et partager recherches, articles, livres |
| **Communication** | Actualité pédagogique, conférences, événements UCAD |
| **Interaction** | Commentaires, discussions avec lectorat |
| **Portfolio** | Présentation CV, expertise, parcours académique |
| **Référencement** | SEO optimisé pour visibilité internationale |

### 1.3 Public cible
- **Étudiants** de l'UCAD et autres universités
- **Collègues professeurs** et chercheurs
- **Professionnels** intéressés par le domaine du professeur
- **Public général** curieux de contenu académique

## 3. Spécifications fonctionnelles

### 3.1 Fonctionnalités principales

#### 📝 **Système de publication**
| Fonctionnalité | Description |
|---------------|-------------|
| Création d'article | Titres, contenu riche (texte, images, vidéos, PDF), métadonnées |
| Catégories/Tags | Organisation par thèmes (recherche, pédagogie, actualité, livres) |
| Brouillon | Sauvegarde avant publication |
| Planification | Publication programmée à date/heure définie |
| Édition | Modification darticles publiés |
| Archivage | Articles anciens accessibles mais moins visibles |

#### 📚 **Section Livres & Publications**
| Fonctionnalité | Description |
|---------------|-------------|
| Catalogue livres | Titre, auteur, éditeur, date, couverture, description, ISBN |
| Downloads | PDF/chapitres gratuits en téléchargement |
| Liens d'achat | Référence vers sites vente (Amazon, éditeur) |
| Citations académiques | Format APA/MLA pour référence |

#### 💬 **Système de commentaires**
| Fonctionnalité | Description |
|---------------|-------------|
| Commentaires utilisateurs | Champ texte, nom, email (optionnel) |
| Modération | Professeur valide/supprime commentaires |
| Réponses | Professeur répond aux commentaires |
| Notifications | Email lors de nouveau commentaire |
| Anti-spam | Validation CAPTCHA ou filtre |

#### 📰 **Actualités & Informations**
| Fonctionnalité | Description |
|---------------|-------------|
| Ajout news | Événements, conférences, cours, annonces UCAD |
| Calendrier | Vue calendrier des événements |
| RSS | Flux RSS pour suivi actualités |

#### 👤 **Portfolio du professeur**
| Fonctionnalité | Description |
|---------------|-------------|
| CV complet | Formation, expérience, compétences, publications |
| Projets de recherche | Description, partenaires, financements |
| Médias | Photos, vidéos conférences/interviews |
| Contact | Formulaire de contact, email, téléphone |

#### 🔍 **Search & Navigation**
| Fonctionnalité | Description |
|---------------|-------------|
| Recherche globale | Titres, contenu, tags, catégories |
| Filtres | Par date, catégorie, tag, type (article/livre/news) |
|Navigation | Menu principal, footer, sidebar avec widgets |

### 3.2 Fonctionnalités secondaires

| Fonctionnalité | Description |
|---------------|-------------|
| **Newsletter** | Inscription email, envoi automatique nouveaux articles |
| **Social sharing** | Boutons Facebook, Twitter, LinkedIn pour partager |
| **Lecteurs connectés** | Option création compte utilisateur (future évolution) |
| **Statistiques** | Vues articles, commentaires, trafic (intégration Google Analytics) |
| **Multilingue** | Français + Anglais (optionnel) |
| **Export PDF** | Télécharger article en PDF |

***

## 4. Spécifications techniques

### 4.1 Architecture technique

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND (React)                     │
│  - React 18+ avec Hooks                                 │
│  - React Router pour navigation                         │
│  - Axios pour appels API                                │
│  - TailwindCSS / Material-UI pour styling               │
│  - Responsive mobile/tablette/desktop                   │
└─────────────────────────────────────────────────────────┘
                           ↕ HTTP/REST API
┌─────────────────────────────────────────────────────────┐
│                   BACKEND (Node.js)                     │
│  - Node.js 20+                                          │
│  - Express.js 4+ (framework web)                        │
│  - PostgreSql (base de données)                         │
│  - Mongoose (ODM MongoDB)                               │
│  - JWT (authentication)                                 │
│  - Multer (upload fichiers)                             │
│  - Winston (logging)                                    │
└─────────────────────────────────────────────────────────┘
                           ↕
┌─────────────────────────────────────────────────────────┐
│                   INFRASTRUCTURE                        │
│  - Hébergement VPS (OVH/LWS comme votre expérience)     │
│  - Nginx (reverse proxy)                                │
│  - SSL/TLS (HTTPS)                                      │
│  - PM2 (process manager Node.js)                        │
│  - Backup automatique MongoDB                           │
└─────────────────────────────────────────────────────────┘
```

### 4.2 Stack technologique détaillée

| Composant | Technology | Version |
|-----------|------------|---------|
| **Frontend** | React | 18.2+ |
| **Backend** | Node.js | 20+ |
| **Framework backend** | Express.js | 4.18+ |
| **Base de données** | MongoDB | 7+ |
| **ODM** | Mongoose | 7+ |
| **Authentication** | JWT + bcrypt | latest |
| **Upload fichiers** | Multer | 1.4+ |
| **Validation** | Joi / express-validator | latest |
| **Styling frontend** | TailwindCSS | 3.4+ |
| **HTTP client** | Axios | 1.6+ |
| **Routing** | React Router | 6.21+ |
| **Logging** | Winston | 3.11+ |
| **Process manager** | PM2 | 5.3+ |


### 4.4 API REST endpoints

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| **Articles** |
| GET | `/api/articles` | Liste tous articles (pagination) |
| GET | `/api/articles/:id` | Détail article + commentaires |
| POST | `/api/articles` | Créer article (admin) |
| PUT | `/api/articles/:id` | Modifier article (admin) |
| DELETE | `/api/articles/:id` | Supprimer article (admin) |
| GET | `/api/articles/category/:cat` | Articles par catégorie |
| GET | `/api/articles/search?q=` | Recherche articles |
| **Commentaires** |
| GET | `/api/comments/article/:id` | Comments d'un article |
| POST | `/api/comments` | Ajouter commentaire |
| PUT | `/api/comments/:id` | Modifier comment (admin) |
| DELETE | `/api/comments/:id` | Supprimer comment (admin) |
| PUT | `/api/comments/:id/approve` | Valider comment (admin) |
| **Livres** |
| GET | `/api/books` | Liste tous livres |
| GET | `/api/books/:id` | Détail livre |
| POST | `/api/books` | Créer livre (admin) |
| PUT | `/api/books/:id` | Modifier livre (admin) |
| DELETE | `/api/books/:id` | Supprimer livre (admin) |
| **Actualités** |
| GET | `/api/news` | Liste actualités |
| GET | `/api/news/:id` | Détail actualité |
| POST | `/api/news` | Créer actualité (admin) |
| PUT | `/api/news/:id` | Modifier actualité (admin) |
| DELETE | `/api/news/:id` | Supprimer actualité (admin) |
| **Auth** |
| POST | `/api/auth/register` | Création compte |
| POST | `/api/auth/login` | Login + JWT |
| GET | `/api/auth/profile` | Profil utilisateur (auth) |

### 4.5 Sécurité

| Aspect | Mesure |
|--------|--------|
| **Authentication** | JWT avec expiry 24h, bcrypt hash passwords |
| **HTTPS** | SSL/TLS obligatoire (Certbot Let's Encrypt) |
| **Input validation** | express-validator sur tous endpoints |
| **Rate limiting** | express-rate-limit (100 req/15min par IP) |
| **Anti-spam** | CAPTCHA commentaires, filtre email |
| **SQL Injection** | PosgesQl |
| **XSS** | Sanitization contenu HTML (dompurify) |
| **Headers** | Helmet.js pour headers sécurité |


### 4.6 Performance

| Aspect | Optimisation |
|--------|--------------|
| **Cache** | Redis pour articles populaires |
| **Compression** | compression middleware (gzip) |
| **Images** | Lazy loading, resize automatique (sharp) |
| **Pagination** | Limit 10 articles/page |
| **CDN** | Optionnel pour images (Cloudflare) |
| **Build** | React production build, minification |

***



## 6. Design & UX

### 6.1 Charte graphique

| Élément | Specs |
|---------|-------|
| **Couleurs principales** | Bleu universitaire (#1e40af), Blanc (#ffffff), Gris foncé (#1f2937) |
| **Couleurs secondaires** | Orange accent (#f97316) pour boutons/CTA |
| **Typographie** | Header: Inter/Bold, Corps: Inter/Regular, Code: JetBrains Mono |
| **Logo** | Logo UCAD + nom professeur (ex: "Prof. [Nom] - UCAD") |
| **Style** | Épuré, académique, professionnel, responsive |

### 6.2 UX principes

| Principe | Application |
|----------|-------------|
| **Clarté** | Navigation simple, menus explicites |
| **Accessibilité** | Contraste suffisant, tailles lisibles, ARIA labels |
| **Réactivité** | Mobile-first, grille flexible |
| **Performance** | Loading rapide, lazy loading images |
| **SEO** | Meta tags, titres hiérarchisés, URLs sémantiques |

### 6.3 Maquettes (pages clés)

**Page d'accueil:**
- Header avec logo + navigation
- Hero section: photo professeur + bio courte
- 3-5 derniers articles (cards)
- Section livres populaires
- Actualités récentes
- Footer: liens, newsletter, contact

**Page article:**
- Titre + date + catégorie
- Contenu riche (texte, images, vidéos)
- Boutons share (Facebook, Twitter, LinkedIn)
- Section commentaires (liste + formulaire)
- Sidebar: articles similaires, livrespopulaires

**Page livres:**
- Grille livres (couvertures)
- Filtres: catégorie, année
- Détail livre: description, download, achat

***



## 8. Livrables

### 8.1 Livrables techniques

| Livrable | Description |
|----------|-------------|
| **Code backend** | Repository Node.js/Express complet (GitHub/GitLab) |
| **Code frontend** | Repository React complet |
| **Base de données** | PostgresSql + prisma + données initiales (ex: 5 articles, 3 livres) |
| **Documentation API** | Swagger/OpenAPI documentation endpoints |
| **Documentation déploiement** | README installation + déploiement VPS |
| **Scripts backup** | Scripts backup automatique PostgresSQL |

### 8.2 Livrables Fonctionnels

| Livrable | Description |
|----------|-------------|
| **Site en production** | URL accessible publiquement (HTTPS) |
| **Compte admin** | Compte professeur avec tous droits |
| **Contenu initial** | Articles, livres, actualités pré-remplis |
| **Formation** | Session 1h pour professeur (gestion contenu) |
| **Support** | 1 mois support après déploiement |

***

## 9. Évolutions futures (optionnel)

| Évolution | Description |
|-----------|-------------|
| **Multi-auteurs** | Autres professeurs peuvent publier |
| **Système de cours** | Modules e-learning vidéos/PDF |
| **Payment** | Vente cours/livres (Stripe) |
| **Mobile app** | React Native app companion |
| **Podcast** | Section podcast conférences |
| **Intégration UCAD** | Lien avec portail UCAD |
| **Analytics avancé** | Tableau statistiques détaillé |

***

## 10. Conclusion

Ce cahier des charges définit un **blog universitaire complet** pour un professeur de l'**UCAD**, avec :

✅ **Fonctionnalités clés**: articles, livres, actualités, commentaires, portfolio  
✅ **Stack technique**: Node.js + Express (backend) + React (frontend) + MongoDB  
✅ **Sécurité**: JWT, HTTPS, validation inputs, anti-spam  
✅ **Performance**: Cache, lazy loading, pagination  
✅ **SEO**: Meta tags, URLs sémantiques, contenu optimisé  
✅ **Budget**: ~200-400€/an (hébergement + domaine)  
✅ **Délais**: 3 mois (fin Août 2026)  

Ce site s'inspire de références comme **Neil Patel**, **Cult of Pedagogy**, et **Hypothèses** pour un design professionnel et une expérience utilisateur optimale. [culture.gouv](https://www.culture.gouv.fr/thematiques/musees/pour-les-professionnels/travailler-en-reseau/les-portails-de-publication-en-sciences-humaines-et-sociales-au-service-des-musees-de-france)

***

**Besoin d'ajustements**? Je peux modifier certaines sections (fonctionnalités, stack technique, budget) selon vos préférences spécifiques.