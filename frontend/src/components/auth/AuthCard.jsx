import { Link } from 'react-router-dom';
import { FiBookOpen } from 'react-icons/fi';
import { useSiteIdentity } from '../../context/SiteContext';
import { fileUrl } from '../../api/client';

// Coque visuelle commune aux ecrans d'authentification (login, reset, verify...)
export default function AuthCard({ title, subtitle, children, footer }) {
  const { siteName, siteTagline, logo } = useSiteIdentity();
  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 px-4 py-8 sm:p-6">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="relative w-full max-w-sm sm:max-w-md">
        <div className="text-center mb-5 sm:mb-6">
          <Link to="/" className="inline-flex items-center gap-2.5 text-white">
            {logo ? (
              <img src={fileUrl(logo)} alt={siteName} className="size-10 sm:size-11 rounded-xl object-cover bg-white/15 shrink-0" />
            ) : (
              <span className="size-10 sm:size-11 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center shrink-0">
                <FiBookOpen className="size-5 sm:size-6" />
              </span>
            )}
            <span className="text-left leading-tight">
              <span className="block font-bold text-base sm:text-lg">{siteName}</span>
              {siteTagline && <span className="block text-[11px] sm:text-xs uppercase tracking-wider text-indigo-200">{siteTagline}</span>}
            </span>
          </Link>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 fade-up">
          <h1 className="text-lg sm:text-xl font-bold text-center mb-1">{title}</h1>
          {subtitle && <p className="text-sm text-slate-400 text-center mb-6">{subtitle}</p>}
          {children}
          {footer}
        </div>
      </div>
    </div>
  );
}
