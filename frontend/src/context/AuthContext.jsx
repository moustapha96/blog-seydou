/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import { authApi } from '../api';
import { setToken, clearSession, USER_KEY } from '../api/client';
import { useToast } from './ToastContext';

const AuthContext = createContext(null);

// Lit la date d'expiration (ms) d'un JWT sans librairie
function decodeExp(token) {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return (payload.exp || 0) * 1000;
  } catch {
    return 0;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(true);
  const refreshTimer = useRef(null);
  const userRef = useRef(user);
  const toast = useToast();

  useEffect(() => {
    userRef.current = user;
  }, [user]);

  const persist = useCallback((token, u) => {
    setToken(token);
    if (u) {
      localStorage.setItem(USER_KEY, JSON.stringify(u));
      setUser(u);
    }
  }, []);

  // Planifie un rafraichissement proactif ~1 min avant l'expiration de l'access token
  const scheduleRefresh = useCallback((token) => {
    clearTimeout(refreshTimer.current);
    if (!token) return;
    const delay = decodeExp(token) - Date.now() - 60_000;
    if (delay <= 0) return; // expiration imminente : l'interceptor 401 prendra le relais
    refreshTimer.current = setTimeout(async () => {
      try {
        const res = await authApi.refresh();
        persist(res.token, res.user);
        scheduleRefresh(res.token);
      } catch {
        /* l'evenement auth:expired gerera la deconnexion */
      }
    }, delay);
  }, [persist]);

  // Au chargement : tentative de session silencieuse via le cookie refresh
  useEffect(() => {
    authApi
      .refresh()
      .then((res) => {
        persist(res.token, res.user);
        scheduleRefresh(res.token);
      })
      .catch(() => {
        clearSession();
        setUser(null);
      })
      .finally(() => setLoading(false));
    return () => clearTimeout(refreshTimer.current);
  }, [persist, scheduleRefresh]);

  // Deconnexion automatique quand la session est definitivement perdue (refresh impossible)
  useEffect(() => {
    const onExpired = () => {
      clearTimeout(refreshTimer.current);
      if (userRef.current) toast.info('Votre session a expire. Veuillez vous reconnecter.');
      setUser(null);
    };
    window.addEventListener('auth:expired', onExpired);
    return () => window.removeEventListener('auth:expired', onExpired);
  }, [toast]);

  const login = useCallback(async (credentials) => {
    const res = await authApi.login(credentials);
    persist(res.token, res.user);
    scheduleRefresh(res.token);
    return res.user;
  }, [persist, scheduleRefresh]);

  const logout = useCallback(async () => {
    clearTimeout(refreshTimer.current);
    try {
      await authApi.logout();
    } catch {
      /* on nettoie quand meme cote client */
    }
    clearSession();
    setUser(null);
  }, []);

  const isAdmin = user && ['ADMIN', 'EDITOR'].includes(user.role);

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, loading, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
