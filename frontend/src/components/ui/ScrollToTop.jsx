import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Remonte en haut de page a chaque changement de route
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}
