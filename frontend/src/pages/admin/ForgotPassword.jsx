import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiSend, FiCheckCircle } from 'react-icons/fi';
import AuthCard from '../../components/auth/AuthCard';
import { usePageTitle } from '../../context/SiteContext';
import { authApi } from '../../api';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  usePageTitle('Mot de passe oublie');

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await authApi.forgotPassword(email);
      setSent(true);
    } catch {
      // Reponse anti-enumeration : on affiche le meme message succes cote UI
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Mot de passe oublie"
      subtitle={sent ? null : 'Recevez un lien de reinitialisation par email'}
      footer={
        <Link to="/admin/login" className="block text-center text-sm text-indigo-600 mt-5 hover:underline">
          &larr; Retour a la connexion
        </Link>
      }
    >
      {sent ? (
        <div className="text-center py-2">
          <FiCheckCircle className="size-12 text-emerald-500 mx-auto mb-3" />
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Si un compte existe pour <strong>{email}</strong>, un email contenant un lien de
            reinitialisation vient d'etre envoye. Pensez a verifier vos spams.
          </p>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-4">
          <div className="relative">
            <FiMail className="absolute left-3.5 top-3.5 size-4 text-slate-400" />
            <input
              type="email"
              required
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full ps-10 pe-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-700 outline-none focus:ring-2 ring-indigo-500/40"
            />
          </div>
          <button
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium disabled:opacity-60"
          >
            <FiSend className="size-4" /> {loading ? 'Envoi...' : 'Envoyer le lien'}
          </button>
        </form>
      )}
    </AuthCard>
  );
}
