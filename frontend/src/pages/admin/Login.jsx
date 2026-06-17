import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { usePageTitle } from '../../context/SiteContext';
import { authApi } from '../../api';
import AuthCard from '../../components/auth/AuthCard';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [unverified, setUnverified] = useState(false);
  const [resending, setResending] = useState(false);
  const { login } = useAuth();
  usePageTitle('Connexion');
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/admin';

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setUnverified(false);
    try {
      const user = await login(form);
      if (['ADMIN', 'EDITOR'].includes(user.role)) {
        toast.success(`Bienvenue, ${user.name}`);
        navigate(from, { replace: true });
      } else {
        toast.error("Acces reserve a l'administration");
      }
    } catch (err) {
      if (err.code === 'EMAIL_NOT_VERIFIED') {
        setUnverified(true);
        toast.error('Email non verifie. Consultez votre boite mail.');
      } else {
        toast.error(err.message || 'Identifiants invalides');
      }
    } finally {
      setLoading(false);
    }
  };

  const resend = async () => {
    setResending(true);
    try {
      await authApi.resendVerification(form.email);
      toast.success('Email de verification renvoye.');
    } catch (err) {
      toast.error(err.message || 'Echec de l\'envoi');
    } finally {
      setResending(false);
    }
  };

  return (
    <AuthCard
      title="Espace administration"
      subtitle="Connectez-vous pour gerer votre blog"
      footer={<Link to="/" className="block text-center text-sm text-indigo-600 mt-5 hover:underline">&larr; Retour au site</Link>}
    >
      {unverified && (
            <div className="mb-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-sm text-amber-700 dark:text-amber-300">
              <p className="font-medium mb-1">Adresse email non verifiee</p>
              <p className="text-xs mb-2">Vous devez confirmer votre email avant de vous connecter.</p>
              <button
                type="button"
                onClick={resend}
                disabled={resending}
                className="text-xs font-medium underline hover:no-underline disabled:opacity-60"
              >
                {resending ? 'Envoi...' : 'Renvoyer l\'email de verification'}
              </button>
            </div>
          )}

          <form onSubmit={submit} className="space-y-4">
            <div className="relative">
              <FiMail className="absolute left-3.5 top-3.5 size-4 text-slate-400" />
              <input
                type="email"
                required
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full ps-10 pe-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-700 outline-none focus:ring-2 ring-indigo-500/40"
              />
            </div>
            <div className="relative">
              <FiLock className="absolute left-3.5 top-3.5 size-4 text-slate-400" />
              <input
                type="password"
                required
                placeholder="Mot de passe"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full ps-10 pe-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-700 outline-none focus:ring-2 ring-indigo-500/40"
              />
            </div>
            <button
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium disabled:opacity-60"
            >
              <FiLogIn className="size-4" /> {loading ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>

          <div className="text-center mt-4">
            <Link to="/admin/forgot-password" className="text-sm text-indigo-600 hover:underline">
              Mot de passe oublie ?
            </Link>
          </div>

          <div className="mt-6 p-3 rounded-lg bg-indigo-50 dark:bg-slate-700/50 text-xs text-slate-500 text-center">
            <p className="font-medium text-slate-600 dark:text-slate-300 mb-1">Compte de demonstration</p>
            admin@blog-ucad.sn / Admin@2026
          </div>
    </AuthCard>
  );
}
