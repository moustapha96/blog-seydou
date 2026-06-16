import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { publicationApi } from '../../api';
import PublicationCard from '../../components/blog/PublicationCard';
import PageBanner from '../../components/blog/PageBanner';
import Pagination from '../../components/ui/Pagination';
import Spinner from '../../components/ui/Spinner';
import EmptyState from '../../components/ui/EmptyState';
import useBanner from '../../hooks/useBanner';
import { usePageTitle } from '../../context/SiteContext';
import { useToast } from '../../context/ToastContext';

export default function Publications() {
  const banner = useBanner('publications');
  usePageTitle('Publications');
  const toast = useToast();
  const [params, setParams] = useSearchParams();
  const [publications, setPublications] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState(params.get('q') || '');

  const category = params.get('category') || '';
  const year = params.get('year') || '';
  const page = parseInt(params.get('page') || '1', 10);

  useEffect(() => {
    publicationApi.categories().then((r) => setCategories(r.data)).catch(() => {});
  }, []);

  useEffect(() => {
    setLoading(true);
    publicationApi
      .list({
        page,
        limit: 12,
        category: category || undefined,
        year: year || undefined,
        q: params.get('q') || undefined,
      })
      .then((r) => { setPublications(r.data); setPagination(r.pagination); })
      .finally(() => setLoading(false));
  }, [page, category, year, params]);

  const update = (patch) => {
    const next = new URLSearchParams(params);
    Object.entries(patch).forEach(([k, v]) => {
      if (v) next.set(k, v);
      else next.delete(k);
    });
    if (!patch.page) next.set('page', '1');
    setParams(next);
  };

  const copyCitation = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Citation copiee !');
  };

  return (
    <div>
      <PageBanner
        title="Publications scientifiques"
        subtitle="Articles de revue, chapitres de livre, communications et rapports de recherche."
        breadcrumb={[{ label: 'Publications' }]}
        banner={banner}
      />

      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="reveal flex flex-col gap-4 mb-6 sm:mb-8">
          <form onSubmit={(e) => { e.preventDefault(); update({ q, page: '' }); }} className="relative w-full lg:max-w-sm search-focus rounded-lg">
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher une publication..." className="w-full ps-10 pe-4 py-2.5 rounded-lg bg-gray-100 dark:bg-slate-800 outline-none focus:ring-2 ring-indigo-500/40 text-base sm:text-sm" />
            <FiSearch className="absolute left-3.5 top-3 size-4 text-slate-400" />
          </form>

          <div className="filter-scroll lg:flex-wrap">
            <button type="button" onClick={() => update({ category: '', year: '' })} className={`filter-pill px-4 py-2 rounded-full text-sm font-medium ${!category ? 'filter-pill-active bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-slate-800'}`}>Toutes</button>
            {categories.map((c) => (
              <button key={c.id} type="button" onClick={() => update({ category: c.slug })} className={`filter-pill px-4 py-2 rounded-full text-sm font-medium ${category === c.slug ? 'filter-pill-active bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-slate-800'}`}>{c.name}</button>
            ))}
          </div>
        </div>

        {loading ? (
          <Spinner className="size-10" />
        ) : publications.length === 0 ? (
          <EmptyState title="Aucune publication trouvee" message="Essayez de modifier vos filtres." />
        ) : (
          <>
            <div className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {publications.map((p) => <PublicationCard key={p.id} publication={p} onCopyCitation={copyCitation} />)}
            </div>
            <Pagination pagination={pagination} onChange={(p) => update({ page: String(p) })} />
          </>
        )}
      </div>
    </div>
  );
}
