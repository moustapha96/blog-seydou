import { Link } from 'react-router-dom';
import { FiClock, FiEye, FiMessageSquare, FiCalendar } from 'react-icons/fi';
import { fileUrl } from '../../api/client';
import { formatDate } from '../../utils/format';

const FALLBACK = 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80';

export default function ArticleCard({ article, compact = false }) {
  const img = article.coverImage ? fileUrl(article.coverImage) : FALLBACK;
  const cat = article.category;

  if (compact) {
    return (
      <Link to={`/articles/${article.slug}`} className="flex gap-3 group">
        <img src={img} alt="" className="size-16 rounded-lg object-cover shrink-0" />
        <div>
          <h4 className="text-sm font-semibold line-clamp-2 group-hover:text-indigo-600 transition">{article.title}</h4>
          <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
            <FiCalendar className="size-3" /> {formatDate(article.publishedAt || article.createdAt)}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <article className="reveal hover-lift group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col">
      <Link to={`/articles/${article.slug}`} className="relative block overflow-hidden aspect-[16/10] img-hover">
        <img src={img} alt={article.title} className="w-full h-full object-cover" />
        {cat && (
          <span
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white shadow"
            style={{ backgroundColor: cat.color || '#1e40af' }}
          >
            {cat.name}
          </span>
        )}
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <Link to={`/articles/${article.slug}`}>
          <h3 className="text-lg font-bold leading-snug line-clamp-2 group-hover:text-indigo-600 transition mb-2">
            {article.title}
          </h3>
        </Link>
        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 flex-1">{article.excerpt}</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mt-4 pt-4 border-t border-gray-100 dark:border-slate-700 text-xs text-slate-400">
          <span className="flex items-center gap-1 shrink-0"><FiCalendar className="size-3.5" /> {formatDate(article.publishedAt || article.createdAt)}</span>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="flex items-center gap-1"><FiClock className="size-3.5" /> {article.readingTime} min</span>
            <span className="hidden xs:flex items-center gap-1"><FiEye className="size-3.5" /> {article.views}</span>
            <span className="flex items-center gap-1"><FiMessageSquare className="size-3.5" /> {article._count?.comments ?? 0}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
