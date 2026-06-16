import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiClock, FiEye, FiCalendar, FiUser, FiDownload, FiTag, FiPaperclip } from 'react-icons/fi';
import { articleApi } from '../../api';
import { fileUrl } from '../../api/client';
import { formatDate } from '../../utils/format';
import { usePageTitle } from '../../context/SiteContext';
import Spinner from '../../components/ui/Spinner';
import EmptyState from '../../components/ui/EmptyState';
import SocialShare from '../../components/blog/SocialShare';
import CommentSection from '../../components/blog/CommentSection';
import ArticleCard from '../../components/blog/ArticleCard';

export default function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  usePageTitle(article?.title);

  useEffect(() => {
    setLoading(true);
    setError(false);
    articleApi
      .get(slug)
      .then((r) => {
        setArticle(r.data);
        setRelated(r.related || []);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <Spinner className="size-10" label="Chargement de l'article..." />;
  if (error || !article)
    return (
      <div className="container mx-auto px-4 py-20">
        <EmptyState title="Article introuvable" message="Cet article n'existe pas ou a ete supprime." />
        <div className="text-center mt-4">
          <Link to="/articles" className="text-indigo-600 font-medium">Retour aux articles</Link>
        </div>
      </div>
    );

  const cover = article.coverImage ? fileUrl(article.coverImage) : 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&q=80';

  return (
    <article>
      {/* En-tete */}
      <header className="bg-gray-50 dark:bg-slate-800/50 border-b border-gray-100 dark:border-slate-800">
        <div className="container mx-auto px-4 py-10 max-w-4xl hero-stagger">
          {article.category && (
            <Link
              to={`/articles?category=${article.category.slug}`}
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4"
              style={{ backgroundColor: article.category.color || '#1e40af' }}
            >
              {article.category.name}
            </Link>
          )}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
            <span className="flex items-center gap-1.5"><FiUser className="size-4" /> {article.author?.name}</span>
            <span className="flex items-center gap-1.5"><FiCalendar className="size-4" /> {formatDate(article.publishedAt || article.createdAt)}</span>
            <span className="flex items-center gap-1.5"><FiClock className="size-4" /> {article.readingTime} min de lecture</span>
            <span className="flex items-center gap-1.5"><FiEye className="size-4" /> {article.views} vues</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contenu */}
          <div className="lg:col-span-2 max-w-3xl">
            <div className="reveal img-hover rounded-xl mb-8 overflow-hidden">
              <img src={cover} alt={article.title} className="w-full aspect-[16/9] object-cover" />
            </div>

            <div className="reveal article-content" dangerouslySetInnerHTML={{ __html: article.content }} />

            {/* Pieces jointes */}
            {article.attachments?.length > 0 && (
              <div className="reveal mt-8 p-5 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
                <h4 className="font-semibold flex items-center gap-2 mb-3"><FiPaperclip /> Documents joints</h4>
                <ul className="space-y-2">
                  {article.attachments.map((a, i) => (
                    <li key={i}>
                      <a href={fileUrl(a)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-indigo-600 text-sm hover:underline">
                        <FiDownload className="size-4" /> Telecharger le document {i + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            {article.tags?.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-8">
                <FiTag className="text-slate-400" />
                {article.tags.map((t) => (
                  <Link key={t.id} to={`/articles?q=${t.name}`} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300 hover:bg-indigo-600/10 hover:text-indigo-600 transition">
                    #{t.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Partage */}
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-slate-800">
              <SocialShare title={article.title} />
            </div>

            {/* Commentaires */}
            <CommentSection articleId={article.id} comments={article.comments || []} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="reveal reveal-right hover-lift bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 p-6 text-center transition-shadow duration-300">
              <span className="size-16 rounded-full bg-indigo-600/10 text-indigo-600 text-xl font-bold flex items-center justify-center mx-auto mb-3">
                {article.author?.name?.split(' ').map((s) => s[0]).slice(0, 2).join('')}
              </span>
              <h4 className="font-bold">{article.author?.name}</h4>
              <p className="text-xs text-slate-400 mt-1">Auteur</p>
              <Link to="/a-propos" className="inline-block mt-3 text-sm text-indigo-600 font-medium">Voir le profil</Link>
            </div>

            {/* Articles similaires */}
            {related.length > 0 && (
              <div className="reveal reveal-right bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 p-6">
                <h4 className="font-bold mb-4">Articles similaires</h4>
                <div className="space-y-4">
                  {related.map((a) => <ArticleCard key={a.id} article={a} compact />)}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </article>
  );
}
