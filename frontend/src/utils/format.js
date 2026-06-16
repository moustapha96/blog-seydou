import { format, formatDistanceToNow, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

export function formatDate(date, pattern = 'd MMMM yyyy') {
  if (!date) return '';
  const d = typeof date === 'string' ? parseISO(date) : date;
  try {
    return format(d, pattern, { locale: fr });
  } catch {
    return '';
  }
}

export function fromNow(date) {
  if (!date) return '';
  const d = typeof date === 'string' ? parseISO(date) : date;
  try {
    return formatDistanceToNow(d, { addSuffix: true, locale: fr });
  } catch {
    return '';
  }
}

export function plural(n, singular, pluriel) {
  return `${n} ${n > 1 ? pluriel : singular}`;
}

// Statut d'article -> libelle + couleur (classes Tailwind)
export const STATUS_META = {
  DRAFT: { label: 'Brouillon', badge: 'bg-amber-500/15 text-amber-600' },
  SCHEDULED: { label: 'Programme', badge: 'bg-violet-500/15 text-violet-600' },
  PUBLISHED: { label: 'Publie', badge: 'bg-emerald-500/15 text-emerald-600' },
  ARCHIVED: { label: 'Archive', badge: 'bg-slate-500/15 text-slate-500' },
};
