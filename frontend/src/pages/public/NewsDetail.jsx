import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { newsApi } from '../../api';
import { fileUrl } from '../../api/client';
import { formatDate } from '../../utils/format';
import Spinner from '../../components/ui/Spinner';
import EmptyState from '../../components/ui/EmptyState';
import SocialShare from '../../components/blog/SocialShare';
import { usePageTitle } from '../../context/SiteContext';

export default function NewsDetail() {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  usePageTitle(item?.title);

  useEffect(() => {
    setLoading(true);
    newsApi.get(slug).then((r) => setItem(r.data)).catch(() => setError(true)).finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <Spinner className="size-10" />;
  if (error || !item)
    return (
      <div className="container mx-auto px-4 py-20">
        <EmptyState title="Actualite introuvable" />
        <div className="text-center mt-4"><Link to="/actualites" className="text-indigo-600 font-medium">Retour aux actualites</Link></div>
      </div>
    );

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <Link to="/actualites" className="text-sm text-indigo-600 mb-6 inline-block">&larr; Toutes les actualites</Link>
      <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{item.title}</h1>
      <div className="flex items-center gap-5 text-sm text-slate-500 mb-8">
        <span className="flex items-center gap-1.5"><FiCalendar className="size-4" /> {formatDate(item.publishedAt)}</span>
        {item.author && <span className="flex items-center gap-1.5"><FiUser className="size-4" /> {item.author.name}</span>}
      </div>
      {item.image && <img src={fileUrl(item.image)} alt="" className="w-full rounded-xl mb-8 aspect-[16/9] object-cover" />}
      <div className="article-content" dangerouslySetInnerHTML={{ __html: item.content }} />
      <div className="mt-10 pt-6 border-t border-gray-100 dark:border-slate-800">
        <SocialShare title={item.title} />
      </div>
    </article>
  );
}
