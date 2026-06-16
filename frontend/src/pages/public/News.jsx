import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { newsApi } from '../../api';
import { fileUrl } from '../../api/client';
import { formatDate } from '../../utils/format';
import PageBanner from '../../components/blog/PageBanner';
import Pagination from '../../components/ui/Pagination';
import Spinner from '../../components/ui/Spinner';
import EmptyState from '../../components/ui/EmptyState';
import useBanner from '../../hooks/useBanner';
import { usePageTitle } from '../../context/SiteContext';

export default function News() {
  const banner = useBanner('actualites');
  usePageTitle('Actualites');
  const [news, setNews] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    newsApi.list({ page, limit: 9 }).then((r) => { setNews(r.data); setPagination(r.pagination); }).finally(() => setLoading(false));
  }, [page]);

  return (
    <div>
      <PageBanner title="Actualites" subtitle="Conferences, evenements, annonces et vie academique." breadcrumb={[{ label: 'Actualites' }]} banner={banner} />
      <div className="container mx-auto px-4 py-12">
        {loading ? (
          <Spinner className="size-10" />
        ) : news.length === 0 ? (
          <EmptyState title="Aucune actualite" />
        ) : (
          <>
            <div className="stagger grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((n) => (
                <Link key={n.id} to={`/actualites/${n.slug}`} className="reveal hover-lift group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-gray-100 dark:border-slate-700 flex flex-col img-hover">
                  {n.image && <img src={fileUrl(n.image)} alt="" className="aspect-[16/9] object-cover w-full" />}
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs text-orange-500 font-semibold">{formatDate(n.publishedAt)}</span>
                    <h3 className="font-bold text-lg mt-2 mb-2 line-clamp-2 group-hover:text-indigo-600 transition">{n.title}</h3>
                    <p className="text-sm text-slate-500 line-clamp-3 flex-1">{n.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-indigo-600 text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                      Lire la suite <FiArrowRight className="size-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <Pagination pagination={pagination} onChange={setPage} />
          </>
        )}
      </div>
    </div>
  );
}
