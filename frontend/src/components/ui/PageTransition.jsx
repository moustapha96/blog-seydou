import { useLocation } from 'react-router-dom';

// Rejoue une courte animation d'entree a chaque changement de route
export default function PageTransition({ children }) {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}
