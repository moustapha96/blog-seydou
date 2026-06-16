import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiX, FiInfo, FiCheckCircle, FiAlertTriangle, FiCalendar, FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import useAnnouncements from '../../hooks/useAnnouncements';

// Styles par type d'annonce
const STYLES = {
  info: { bg: 'bg-indigo-600', icon: FiInfo },
  success: { bg: 'bg-emerald-600', icon: FiCheckCircle },
  warning: { bg: 'bg-amber-500', icon: FiAlertTriangle },
  event: { bg: 'bg-fuchsia-600', icon: FiCalendar },
};

const DISMISS_KEY = 'ucad_dismissed_announcements';

function readDismissed() {
  try { return JSON.parse(localStorage.getItem(DISMISS_KEY) || '[]'); } catch { return []; }
}

export default function AnnouncementBar() {
  const all = useAnnouncements();
  const [dismissed, setDismissed] = useState(readDismissed);
  const [idx, setIdx] = useState(0);

  // Annonces non fermees par l'utilisateur
  const items = all.filter((a) => !dismissed.includes(a.id));

  // Rotation automatique s'il y a plusieurs annonces
  useEffect(() => {
    if (items.length <= 1) return undefined;
    const id = setInterval(() => setIdx((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, [items.length]);

  useEffect(() => { setIdx((i) => (i >= items.length ? 0 : i)); }, [items.length]);

  if (!items.length) return null;

  const a = items[idx] || items[0];
  const style = STYLES[a.type] || STYLES.info;
  const Icon = style.icon;
  const isExternal = a.link && /^https?:\/\//.test(a.link);

  const dismiss = (id) => {
    const next = [...dismissed, id];
    setDismissed(next);
    try { localStorage.setItem(DISMISS_KEY, JSON.stringify(next)); } catch { /* ignore */ }
  };

  const linkLabel = a.linkLabel || 'En savoir plus';
  const LinkInner = (
    <>
      <span className="font-medium">{a.message}</span>
      {a.link && (
        <span className="inline-flex items-center gap-1 font-semibold underline underline-offset-2 whitespace-nowrap">
          {linkLabel} <FiArrowRight className="size-3.5" />
        </span>
      )}
    </>
  );

  return (
    <div className={`${style.bg} text-white text-sm relative slide-down`}>
      <div className="container mx-auto px-4 py-2.5 flex items-center gap-3">
        {/* Navigation entre annonces multiples */}
        {items.length > 1 && (
          <button onClick={() => setIdx((i) => (i - 1 + items.length) % items.length)} aria-label="Annonce precedente" className="shrink-0 opacity-80 hover:opacity-100">
            <FiChevronLeft className="size-4" />
          </button>
        )}

        <Icon className="size-4 shrink-0" />

        <div className="flex-1 min-w-0 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-center transition-opacity duration-500">
          {a.link ? (
            isExternal
              ? <a href={a.link} target="_blank" rel="noreferrer" className="flex flex-wrap items-center justify-center gap-x-2 hover:opacity-90">{LinkInner}</a>
              : <Link to={a.link} className="flex flex-wrap items-center justify-center gap-x-2 hover:opacity-90">{LinkInner}</Link>
          ) : LinkInner}
        </div>

        {items.length > 1 && (
          <button onClick={() => setIdx((i) => (i + 1) % items.length)} aria-label="Annonce suivante" className="shrink-0 opacity-80 hover:opacity-100">
            <FiChevronRight className="size-4" />
          </button>
        )}

        {a.dismissible && (
          <button onClick={() => dismiss(a.id)} aria-label="Fermer l'annonce" className="shrink-0 opacity-80 hover:opacity-100">
            <FiX className="size-4" />
          </button>
        )}
      </div>

      {/* Pastilles de progression */}
      {items.length > 1 && (
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
          {items.map((_, i) => (
            <span key={i} className={`size-1 rounded-full ${i === idx ? 'bg-white' : 'bg-white/40'}`} />
          ))}
        </div>
      )}
    </div>
  );
}
