import { useEffect, useState, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FiCheckCircle, FiXCircle, FiLoader } from 'react-icons/fi';
import AuthCard from '../../components/auth/AuthCard';
import { usePageTitle } from '../../context/SiteContext';
import { authApi } from '../../api';

export default function VerifyEmail() {
  const [params] = useSearchParams();
  const token = params.get('token') || '';
  const [status, setStatus] = useState('pending'); // pending | success | error
  const [message, setMessage] = useState('');
  const done = useRef(false);
  usePageTitle('Verification de l\'email');

  useEffect(() => {
    if (done.current) return; // evite le double appel en StrictMode
    done.current = true;

    if (!token) {
      setStatus('error');
      setMessage('Jeton de verification manquant.');
      return;
    }
    authApi
      .verifyEmail(token)
      .then((res) => {
        setStatus('success');
        setMessage(res.message || 'Votre email a ete verifie.');
      })
      .catch((err) => {
        setStatus('error');
        setMessage(err.message || 'Lien de verification invalide ou expire.');
      });
  }, [token]);

  const ui = {
    pending: { Icon: FiLoader, cls: 'text-indigo-500 animate-spin', title: 'Verification en cours...' },
    success: { Icon: FiCheckCircle, cls: 'text-emerald-500', title: 'Email verifie' },
    error: { Icon: FiXCircle, cls: 'text-red-500', title: 'Verification echouee' },
  }[status];
  const { Icon } = ui;

  return (
    <AuthCard
      title={ui.title}
      footer={
        status !== 'pending' && (
          <Link to="/admin/login" className="block text-center text-sm text-indigo-600 mt-5 hover:underline">
            Aller a la connexion
          </Link>
        )
      }
    >
      <div className="text-center py-2">
        <Icon className={`size-14 mx-auto mb-3 ${ui.cls}`} />
        {message && <p className="text-sm text-slate-600 dark:text-slate-300">{message}</p>}
      </div>
    </AuthCard>
  );
}
