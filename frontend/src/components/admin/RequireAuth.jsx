import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Spinner from '../ui/Spinner';

export default function RequireAuth({ children }) {
  const { user, isAdmin, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div className="min-h-screen flex items-center justify-center"><Spinner className="size-10" /></div>;
  if (!user || !isAdmin) return <Navigate to="/admin/login" state={{ from: location }} replace />;
  return children;
}
