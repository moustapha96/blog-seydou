/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { authApi } from '../api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem('ucad_user');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(true);

  // Verifie la validite de la session au chargement
  useEffect(() => {
    const token = localStorage.getItem('ucad_token');
    if (!token) {
      setLoading(false);
      return;
    }
    authApi
      .profile()
      .then((res) => {
        setUser(res.user);
        localStorage.setItem('ucad_user', JSON.stringify(res.user));
      })
      .catch(() => {
        localStorage.removeItem('ucad_token');
        localStorage.removeItem('ucad_user');
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = useCallback(async (credentials) => {
    const res = await authApi.login(credentials);
    localStorage.setItem('ucad_token', res.token);
    localStorage.setItem('ucad_user', JSON.stringify(res.user));
    setUser(res.user);
    return res.user;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('ucad_token');
    localStorage.removeItem('ucad_user');
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
