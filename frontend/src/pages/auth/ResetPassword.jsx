import { useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { FiLock, FiCheck } from 'react-icons/fi';
import AuthCard from '../../components/auth/AuthCard';
import { usePageTitle } from '../../context/SiteContext';
import { useToast } from '../../context/ToastContext';
import { authApi } from '../../api';

export default function ResetPassword() {
  const [params] = useSearchParams();
  const token = params.get('token') || '';
  const [form, setForm] = useState({ password: '', confirm: '' });
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  usePageTitle('Reinitialisation du mot de passe');

  const valid = form.password.length >= 8 && /[A-Za-z]/.test(form.password) && /\d/.test(form.password);

  const submit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      toast.error('Les deux mots de passe ne correspondent pas');
      return;
    }
    if (!valid) {
      toast.error('Mot de passe : 8 caracteres min., avec lettres et chiffres');
      return;
    }
    setLoading(true);
    try {
      await authApi.resetPassword({ token, password: form.password });
      toast.success('Mot de passe reinitialise. Connectez-vous.');
      navigate('/admin/login', { replace: true });
    } catch (err) {
      toast.error(err.message || 'Lien invalide ou expire');
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <AuthCard
        title="Lien invalide"
        subtitle="Le jeton de reinitialisation est manquant"
        footer={<Link to="/admin/forgot-password" className="block text-center text-sm text-indigo-600 mt-5 hover:underline">Refaire une demande</Link>}
      >
        <p className="text-sm text-center text-slate-500">Veuillez utiliser le lien recu par email.</p>
      </AuthCard>
    );
  }

  return (
    <AuthCard
      title="Nouveau mot de passe"
      subtitle="Choisissez un mot de passe securise"
      footer={<Link to="/admin/login" className="block text-center text-sm text-indigo-600 mt-5 hover:underline">&larr; Retour a la connexion</Link>}
    >
      <form onSubmit={submit} className="space-y-4">
        <div className="relative">
          <FiLock className="absolute left-3.5 top-3.5 size-4 text-slate-400" />
          <input
            type="password"
            required
            placeholder="Nouveau mot de passe"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full ps-10 pe-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-700 outline-none focus:ring-2 ring-indigo-500/40"
          />
        </div>
        <div className="relative">
          <FiLock className="absolute left-3.5 top-3.5 size-4 text-slate-400" />
          <input
            type="password"
            required
            placeholder="Confirmer le mot de passe"
            value={form.confirm}
            onChange={(e) => setForm({ ...form, confirm: e.target.value })}
            className="w-full ps-10 pe-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-700 outline-none focus:ring-2 ring-indigo-500/40"
          />
        </div>
        <p className="text-xs text-slate-400">8 caracteres minimum, avec au moins une lettre et un chiffre.</p>
        <button
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium disabled:opacity-60"
        >
          <FiCheck className="size-4" /> {loading ? 'Validation...' : 'Reinitialiser'}
        </button>
      </form>
    </AuthCard>
  );
}
