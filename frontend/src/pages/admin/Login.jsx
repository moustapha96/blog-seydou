import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FiBookOpen, FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { useSiteIdentity, usePageTitle } from '../../context/SiteContext';
import { fileUrl } from '../../api/client';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { siteName, siteTagline, logo } = useSiteIdentity();
  usePageTitle('Connexion');
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/admin';

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await login(form);
      if (['ADMIN', 'EDITOR'].includes(user.role)) {
        toast.success(`Bienvenue, ${user.name}`);
        navigate(from, { replace: true });
      } else {
        toast.error("Acces reserve a l'administration");
      }
    } catch (err) {
      toast.error(err.message || 'Identifiants invalides');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-blue-700 to-blue-900 p-4">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="relative w-full max-w-md">
        <div className="text-center mb-6">
          <Link to="/" className="inline-flex items-center gap-2.5 text-white">
            {logo ? (
              <img src={fileUrl(logo)} alt={siteName} className="size-11 rounded-xl object-cover bg-white/15" />
            ) : (
              <span className="size-11 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center">
                <FiBookOpen className="size-6" />
              </span>
            )}
            <span className="text-left leading-tight">
              <span className="block font-bold text-lg">{siteName}</span>
              {siteTagline && <span className="block text-xs uppercase tracking-wider text-indigo-200">{siteTagline}</span>}
            </span>
          </Link>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 fade-up">
          <h1 className="text-xl font-bold text-center mb-1">Espace administration</h1>
          <p className="text-sm text-slate-400 text-center mb-6">Connectez-vous pour gerer votre blog</p>

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

          <div className="mt-6 p-3 rounded-lg bg-indigo-50 dark:bg-slate-700/50 text-xs text-slate-500 text-center">
            <p className="font-medium text-slate-600 dark:text-slate-300 mb-1">Compte de demonstration</p>
            admin@blog-ucad.sn / Admin@2026
          </div>

          <Link to="/" className="block text-center text-sm text-indigo-600 mt-5 hover:underline">&larr; Retour au site</Link>
        </div>
      </div>
    </div>
  );
}
