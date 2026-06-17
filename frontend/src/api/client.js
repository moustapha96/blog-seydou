import axios from 'axios';

export const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';
export const TOKEN_KEY = 'ucad_token';
export const USER_KEY = 'ucad_user';

const client = axios.create({
  baseURL: `${API_BASE}/api`,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true, // envoie le cookie refresh httpOnly
});

// Endpoints d'auth qui ne doivent PAS declencher de tentative de refresh sur 401
const AUTH_PATHS = ['/auth/login', '/auth/refresh', '/auth/register'];

// --- Gestion de l'access token ---
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (t) => {
  if (t) localStorage.setItem(TOKEN_KEY, t);
  else localStorage.removeItem(TOKEN_KEY);
};
export const clearSession = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

// Injecte l'access token a chaque requete
client.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// --- File d'attente pendant un refresh en cours (evite les refresh concurrents) ---
let isRefreshing = false;
let waiters = [];
const subscribe = (cb) => waiters.push(cb);
const flush = (token) => {
  waiters.forEach((cb) => cb(token));
  waiters = [];
};

// Notifie l'app que la session est definitivement perdue (ecoute dans AuthContext)
function emitExpired() {
  clearSession();
  window.dispatchEvent(new Event('auth:expired'));
}

// Rafraichit l'access token via le cookie refresh ; renvoie le nouveau token ou null
async function doRefresh() {
  try {
    const { data } = await axios.post(
      `${API_BASE}/api/auth/refresh`,
      {},
      { withCredentials: true }
    );
    setToken(data.token);
    if (data.user) localStorage.setItem(USER_KEY, JSON.stringify(data.user));
    return data.token;
  } catch {
    return null;
  }
}

// Normalise les erreurs et gere le refresh transparent
client.interceptors.response.use(
  (res) => res,
  async (error) => {
    const status = error.response?.status;
    const original = error.config || {};
    const isAuthCall = AUTH_PATHS.some((p) => original.url?.includes(p));

    // Tentative de refresh transparent sur 401 (une seule fois, hors endpoints d'auth)
    if (status === 401 && !original._retry && !isAuthCall && getToken()) {
      original._retry = true;

      if (isRefreshing) {
        // Un refresh est deja en cours : on attend son resultat
        return new Promise((resolve, reject) => {
          subscribe((token) => {
            if (!token) return reject({ status: 401, message: 'Session expiree' });
            original.headers.Authorization = `Bearer ${token}`;
            resolve(client(original));
          });
        });
      }

      isRefreshing = true;
      const newToken = await doRefresh();
      isRefreshing = false;
      flush(newToken);

      if (newToken) {
        original.headers.Authorization = `Bearer ${newToken}`;
        return client(original);
      }
      // Refresh impossible : session perdue
      emitExpired();
    }

    const message =
      error.response?.data?.message || error.message || 'Une erreur est survenue';
    return Promise.reject({
      status,
      message,
      code: error.response?.data?.code,
      errors: error.response?.data?.errors,
    });
  }
);

// Transforme un chemin /uploads/... en URL absolue
export const fileUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${API_BASE}${path}`;
};

export default client;
