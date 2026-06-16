import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiFileText, FiEye, FiMessageSquare, FiBook, FiBell, FiUsers, FiMail, FiCalendar, FiArrowRight, FiEdit,
} from 'react-icons/fi';
import { statsApi } from '../../api';
import { PageHeader, Card } from '../../components/admin/ui';
import Spinner from '../../components/ui/Spinner';

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    statsApi.get().then((r) => setStats(r.data)).finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner className="size-10" />;
  if (!stats) return null;

  const cards = [
    { label: 'Articles publies', value: stats.articles.published, sub: `${stats.articles.drafts} brouillon(s)`, icon: FiFileText, color: 'indigo', to: '/admin/articles' },
    { label: 'Vues totales', value: stats.totalViews, sub: 'toutes pages', icon: FiEye, color: 'emerald' },
    { label: 'Commentaires', value: stats.comments.total, sub: `${stats.comments.pending} en attente`, icon: FiMessageSquare, color: 'orange', to: '/admin/commentaires' },
    { label: 'Livres', value: stats.books, sub: 'au catalogue', icon: FiBook, color: 'violet', to: '/admin/livres' },
    { label: 'Actualites', value: stats.news, sub: 'publiees', icon: FiBell, color: 'sky', to: '/admin/actualites' },
    { label: 'Evenements', value: stats.events, sub: 'programmes', icon: FiCalendar, color: 'rose', to: '/admin/evenements' },
    { label: 'Abonnes', value: stats.newsletter, sub: 'newsletter', icon: FiUsers, color: 'teal', to: '/admin/abonnes' },
    { label: 'Messages', value: stats.messages.total, sub: `${stats.messages.unread} non lu(s)`, icon: FiMail, color: 'amber', to: '/admin/messages' },
  ];

  const colorMap = {
    indigo: 'bg-indigo-600/10 text-indigo-600', emerald: 'bg-emerald-500/10 text-emerald-600',
    orange: 'bg-orange-500/10 text-orange-600', violet: 'bg-violet-500/10 text-violet-600',
    sky: 'bg-sky-500/10 text-sky-600', rose: 'bg-rose-500/10 text-rose-600',
    teal: 'bg-teal-500/10 text-teal-600', amber: 'bg-amber-500/10 text-amber-600',
  };

  return (
    <div>
      <PageHeader
        title="Tableau de bord"
        subtitle="Vue d'ensemble de votre blog universitaire"
        action={
          <Link to="/admin/articles?new=1" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium">
            <FiEdit className="size-4" /> Nouvel article
          </Link>
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {cards.map((c, i) => {
          const inner = (
            <Card className="p-5 hover:shadow-md transition h-full">
              <div className={`size-11 rounded-lg flex items-center justify-center mb-3 ${colorMap[c.color]}`}>
                <c.icon className="size-5" />
              </div>
              <p className="text-2xl font-bold">{c.value}</p>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{c.label}</p>
              <p className="text-xs text-slate-400 mt-0.5">{c.sub}</p>
            </Card>
          );
          return c.to ? <Link key={i} to={c.to}>{inner}</Link> : <div key={i}>{inner}</div>;
        })}
      </div>

      {/* Top articles */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold">Articles les plus consultes</h3>
          <Link to="/admin/articles" className="text-sm text-indigo-600 inline-flex items-center gap-1">Tout voir <FiArrowRight className="size-3.5" /></Link>
        </div>
        {stats.topArticles.length === 0 ? (
          <p className="text-sm text-slate-400">Aucun article pour le moment.</p>
        ) : (
          <div className="space-y-2">
            {stats.topArticles.map((a, i) => (
              <div key={a.id} className="flex items-center gap-3 py-2 border-b border-gray-50 dark:border-slate-700 last:border-0">
                <span className="size-7 rounded-md bg-indigo-600/10 text-indigo-600 text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                <Link to={`/articles/${a.slug}`} target="_blank" className="flex-1 text-sm font-medium hover:text-indigo-600 line-clamp-1">{a.title}</Link>
                <span className="text-sm text-slate-400 flex items-center gap-1"><FiEye className="size-3.5" /> {a.views}</span>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
