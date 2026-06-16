# Frontend — Blog Universitaire UCAD

Application React (Vite + TailwindCSS) du blog du Pr. Seydou KHOUMA.
Construite à partir du squelette Techwind, adaptée en un blog universitaire complet.

## Démarrage
```bash
npm install
npm run dev      # http://localhost:5173
```

Configurez l'URL de l'API dans `.env` :
```
VITE_API_URL=http://localhost:5000
```

## Build production
```bash
npm run build    # génère dist/
npm run preview
```

## Organisation
- `src/api/` — client Axios + services par ressource
- `src/components/` — `layout/`, `blog/`, `admin/`, `ui/`
- `src/context/` — `AuthContext`, `ToastContext`
- `src/pages/public/` — site public
- `src/pages/admin/` — espace d'administration (protégé)

Voir le `README.md` à la racine du projet pour la documentation complète (backend inclus).
