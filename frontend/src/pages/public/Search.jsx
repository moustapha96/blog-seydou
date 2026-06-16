import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { articleApi } from '../../api';
import ArticleCard from '../../components/blog/ArticleCard';
import PageBanner from '../../components/blog/PageBanner';
import Spinner from '../../components/ui/Spinner';
import EmptyState from '../../components/ui/EmptyState';
import useBanner from '../../hooks/useBanner';
import { usePageTitle } from '../../context/SiteContext';

export default function Search() {
  const banner = useBanner('recherche');
  usePageTitle('Recherche');
  const [params, setParams] = useSearchParams();
  const q = params.get('q') || '';
  const [input, setInput] = useState(q);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!q) { setResults([]); return; }
    setLoading(true);
    articleApi.search(q).then((r) => setResults(r.data)).finally(() => setLoading(false));
  }, [q]);

  return (
    <div>
      <PageBanner title="Recherche" subtitle={q ? `Resultats pour "${q}"` : 'Recherchez parmi les articles'} breadcrumb={[{ label: 'Recherche' }]} banner={banner} />
      <div className="container mx-auto px-4 py-12">
        <form
          onSubmit={(e) => { e.preventDefault(); setParams(input.trim() ? { q: input.trim() } : {}); }}
          className="relative max-w-xl mx-auto mb-10 reveal search-focus rounded-xl"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Mots-cles, titre, theme..."
            className="w-full ps-12 pe-4 py-3.5 rounded-xl bg-gray-100 dark:bg-slate-800 outline-none focus:ring-2 ring-indigo-500/40"
            autoFocus
          />
          <FiSearch className="absolute left-4 top-4 size-5 text-slate-400" />
        </form>

        {loading ? (
          <Spinner className="size-10" />
        ) : !q ? (
          <EmptyState icon={FiSearch} title="Lancez une recherche" message="Saisissez des mots-cles pour trouver des articles." />
        ) : results.length === 0 ? (
          <EmptyState title={`Aucun resultat pour "${q}"`} message="Essayez d'autres mots-cles." />
        ) : (
          <>
            <p className="reveal text-sm text-slate-500 mb-6">{results.length} resultat(s) trouve(s)</p>
            <div className="stagger grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((a) => <ArticleCard key={a.id} article={a} />)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
