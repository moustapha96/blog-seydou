import axios from 'axios';

export const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const client = axios.create({
  baseURL: `${API_BASE}/api`,
  headers: { 'Content-Type': 'application/json' },
});

// Injecte le token JWT a chaque requete
client.interceptors.request.use((config) => {
  const token = localStorage.getItem('ucad_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Normalise les erreurs et gere l'expiration de session
client.interceptors.response.use(
  (res) => res,
  (error) => {
    const status = error.response?.status;
    const message =
      error.response?.data?.message ||
      error.message ||
      'Une erreur est survenue';
    const errors = error.response?.data?.errors;

    if (status === 401 && localStorage.getItem('ucad_token')) {
      // Token invalide/expire : on nettoie (sauf sur la page de login)
      if (!window.location.pathname.includes('/admin/login')) {
        localStorage.removeItem('ucad_token');
        localStorage.removeItem('ucad_user');
      }
    }
    return Promise.reject({ status, message, errors });
  }
);

// Transforme un chemin /uploads/... en URL absolue
export const fileUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${API_BASE}${path}`;
};

export default client;
