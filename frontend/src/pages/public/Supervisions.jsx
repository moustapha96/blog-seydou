import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiSearch, FiUser, FiCalendar, FiDownload, FiExternalLink } from 'react-icons/fi';
import { supervisionApi } from '../../api';
import { fileUrl } from '../../api/client';
import PageBanner from '../../components/blog/PageBanner';
import Pagination from '../../components/ui/Pagination';
import Spinner from '../../components/ui/Spinner';
import EmptyState from '../../components/ui/EmptyState';
import useBanner from '../../hooks/useBanner';
import { usePageTitle } from '../../context/SiteContext';

const STATUS_LABEL = {
  IN_PROGRESS: { label: 'En cours', cls: 'bg-amber-500/15 text-amber-600' },
  DEFENDED: { label: 'Soutenu / Termine', cls: 'bg-emerald-500/15 text-emerald-600' },
  ABANDONED: { label: 'Abandonne', cls: 'bg-slate-200 text-slate-500 dark:bg-slate-700' },
};

export default function Supervisions() {
  const banner = useBanner('encadrements');
  usePageTitle('Encadrements');
  const [params, setParams] = useSearchParams();
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState(params.get('q') || '');

  const category = params.get('category') || '';
  const status = params.get('status') || '';
  const page = parseInt(params.get('page') || '1', 10);

  useEffect(() => {
    supervisionApi.categories().then((r) => setCategories(r.data)).catch(() => {});
  }, []);

  useEffect(() => {
    setLoading(true);
    supervisionApi
      .list({ page, limit: 12, category: category || undefined, status: status || undefined, q: params.get('q') || undefined })
      .then((r) => { setItems(r.data); setPagination(r.pagination); })
      .finally(() => setLoading(false));
  }, [page, category, status, params]);

  const update = (patch) => {
    const next = new URLSearchParams(params);
    Object.entries(patch).forEach(([k, v]) => {
      if (v) next.set(k, v);
      else next.delete(k);
    });
    if (!patch.page) next.set('page', '1');
    setParams(next);
  };

  return (
    <div>
      <PageBanner
        title="Encadrements"
        subtitle="Theses, memoires, stages et projets de recherche encadres."
        breadcrumb={[{ label: 'Encadrements' }]}
        banner={banner}
      />

      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-5xl">
        <div className="reveal flex flex-col gap-4 mb-6 sm:mb-8">
          <form onSubmit={(e) => { e.preventDefault(); update({ q, page: '' }); }} className="relative w-full md:max-w-sm search-focus rounded-lg">
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher un etudiant, un sujet..." className="w-full ps-10 pe-4 py-2.5 rounded-lg bg-gray-100 dark:bg-slate-800 outline-none focus:ring-2 ring-indigo-500/40 text-base sm:text-sm" />
            <FiSearch className="absolute left-3.5 top-3 size-4 text-slate-400" />
          </form>
          <div className="filter-scroll lg:flex-wrap">
            <button type="button" onClick={() => update({ category: '', status: '' })} className={`filter-pill px-4 py-2 rounded-full text-sm font-medium ${!category && !status ? 'filter-pill-active bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-slate-800'}`}>Tous</button>
            {categories.map((c) => (
              <button key={c.id} type="button" onClick={() => update({ category: c.slug })} className={`filter-pill px-4 py-2 rounded-full text-sm font-medium ${category === c.slug ? 'filter-pill-active bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-slate-800'}`}>{c.name}</button>
            ))}
          </div>
        </div>

        <div className="reveal filter-scroll lg:flex-wrap mb-6 sm:mb-8">
          {[['', 'Tous statuts'], ['IN_PROGRESS', 'En cours'], ['DEFENDED', 'Soutenus'], ['ABANDONED', 'Abandonnes']].map(([v, l]) => (
            <button key={v || 'all'} type="button" onClick={() => update({ status: v })} className={`filter-pill px-4 py-2 rounded-full text-sm font-medium ${status === v ? 'filter-pill-active bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-slate-800'}`}>{l}</button>
          ))}
        </div>

        {loading ? (
          <Spinner className="size-10" />
        ) : items.length === 0 ? (
          <EmptyState title="Aucun encadrement trouve" />
        ) : (
          <>
            <div className="stagger space-y-4">
              {items.map((s) => {
                const st = STATUS_LABEL[s.status] || STATUS_LABEL.IN_PROGRESS;
                return (
                  <article key={s.id} className="reveal hover-lift bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 p-4 sm:p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {s.category && <span className="text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: s.category.color }}>{s.category.name}</span>}
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${st.cls}`}>{st.label}</span>
                    </div>
                    <h3 className="font-bold text-base sm:text-lg mb-2 leading-snug">{s.title}</h3>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-500 mb-3">
                      <span className="flex items-center gap-1.5"><FiUser className="size-4 text-indigo-600" /> {s.studentName}</span>
                      {s.year && <span className="flex items-center gap-1.5"><FiCalendar className="size-4 text-indigo-600" /> {s.year}</span>}
                      {s.institution && <span>{s.institution}</span>}
                    </div>
                    {s.coSupervisor && <p className="text-sm text-slate-400 mb-2">Co-encadrant : {s.coSupervisor}</p>}
                    {s.description && <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3">{s.description}</p>}
                    <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-slate-700">
                      {s.link && (
                        <a href={s.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-indigo-600 font-medium hover:underline">
                          <FiExternalLink className="size-4" /> Voir la these
                        </a>
                      )}
                      {s.pdfFile && (
                        <a href={fileUrl(s.pdfFile)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-indigo-600 font-medium hover:underline">
                          <FiDownload className="size-4" /> PDF
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
            <Pagination pagination={pagination} onChange={(p) => update({ page: String(p) })} />
          </>
        )}
      </div>
    </div>
  );
}
