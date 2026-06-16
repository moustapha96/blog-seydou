import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { articleApi, taxonomyApi } from '../../api';
import ArticleCard from '../../components/blog/ArticleCard';
import PageBanner from '../../components/blog/PageBanner';
import Pagination from '../../components/ui/Pagination';
import Spinner from '../../components/ui/Spinner';
import EmptyState from '../../components/ui/EmptyState';
import useBanner from '../../hooks/useBanner';
import { usePageTitle } from '../../context/SiteContext';

export default function Articles() {
  const banner = useBanner('articles');
  usePageTitle('Articles');
  const [params, setParams] = useSearchParams();
  const [articles, setArticles] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState(params.get('q') || '');

  const category = params.get('category') || '';
  const sort = params.get('sort') || 'recent';
  const page = parseInt(params.get('page') || '1', 10);

  useEffect(() => {
    taxonomyApi.categories().then((r) => setCategories(r.data)).catch(() => {});
  }, []);

  useEffect(() => {
    setLoading(true);
    articleApi
      .list({ page, limit: 9, category: category || undefined, sort, q: params.get('q') || undefined })
      .then((r) => {
        setArticles(r.data);
        setPagination(r.pagination);
      })
      .finally(() => setLoading(false));
  }, [page, category, sort, params]);

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
        title="Articles & Recherches"
        subtitle="Publications scientifiques, reflexions pedagogiques et analyses academiques."
        breadcrumb={[{ label: 'Articles' }]}
        banner={banner}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Barre de filtres */}
        <div className="reveal flex flex-col md:flex-row gap-4 md:items-center justify-between mb-8">
          <form
            onSubmit={(e) => { e.preventDefault(); update({ q, page: '' }); }}
            className="relative w-full md:max-w-xs search-focus rounded-lg"
          >
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Rechercher un article..."
              className="w-full ps-10 pe-4 py-2.5 rounded-lg bg-gray-100 dark:bg-slate-800 outline-none focus:ring-2 ring-indigo-500/40"
            />
            <FiSearch className="absolute left-3.5 top-3 size-4 text-slate-400" />
          </form>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => update({ category: '' })}
              className={`filter-pill px-4 py-2 rounded-full text-sm font-medium ${
                !category ? 'filter-pill-active bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-600/10'
              }`}
            >
              Tous
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => update({ category: c.slug })}
                className={`filter-pill px-4 py-2 rounded-full text-sm font-medium ${
                  category === c.slug ? 'filter-pill-active bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-600/10'
                }`}
              >
                {c.name}
              </button>
            ))}
            <select
              value={sort}
              onChange={(e) => update({ sort: e.target.value })}
              className="px-3 py-2 rounded-full text-sm bg-gray-100 dark:bg-slate-800 outline-none cursor-pointer"
            >
              <option value="recent">Plus recents</option>
              <option value="oldest">Plus anciens</option>
              <option value="popular">Plus populaires</option>
            </select>
          </div>
        </div>

        {loading ? (
          <Spinner className="size-10" />
        ) : articles.length === 0 ? (
          <EmptyState title="Aucun article trouve" message="Essayez de modifier vos filtres ou votre recherche." />
        ) : (
          <>
            <div className="stagger grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((a) => <ArticleCard key={a.id} article={a} />)}
            </div>
            <Pagination pagination={pagination} onChange={(p) => update({ page: String(p) })} />
          </>
        )}
      </div>
    </div>
  );
}
