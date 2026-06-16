import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiDownload, FiExternalLink, FiCopy, FiBook, FiCalendar } from 'react-icons/fi';
import { publicationApi } from '../../api';
import { fileUrl } from '../../api/client';
import Spinner from '../../components/ui/Spinner';
import EmptyState from '../../components/ui/EmptyState';
import { useToast } from '../../context/ToastContext';
import { usePageTitle } from '../../context/SiteContext';

export default function PublicationDetail() {
  const { slug } = useParams();
  const [pub, setPub] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const toast = useToast();
  usePageTitle(pub?.title);

  useEffect(() => {
    setLoading(true);
    publicationApi.get(slug).then((r) => setPub(r.data)).catch(() => setError(true)).finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <Spinner className="size-10" />;
  if (error || !pub) {
    return (
      <div className="container mx-auto px-4 py-20">
        <EmptyState title="Publication introuvable" />
        <div className="text-center mt-4"><Link to="/publications" className="text-indigo-600 font-medium">Retour aux publications</Link></div>
      </div>
    );
  }

  const copyCitation = (text) => { navigator.clipboard.writeText(text); toast.success('Citation copiee !'); };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link to="/publications" className="text-sm text-indigo-600 mb-6 inline-block">&larr; Retour aux publications</Link>

      <article className="reveal">
        {pub.category && (
          <span className="inline-block text-xs uppercase font-semibold px-3 py-1 rounded-full text-white mb-4" style={{ backgroundColor: pub.category.color }}>
            {pub.category.name}
          </span>
        )}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3">{pub.title}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-2">{pub.authors}</p>
        {pub.journal && <p className="text-indigo-600 italic mb-6">{pub.journal}{pub.year && `, ${pub.year}`}</p>}

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 mb-8">
          {pub.publisher && <span className="flex items-center gap-1.5"><FiBook className="size-4 text-indigo-600" /> {pub.publisher}</span>}
          {pub.year && <span className="flex items-center gap-1.5"><FiCalendar className="size-4 text-indigo-600" /> {pub.year}</span>}
          {pub.volume && <span>Vol. {pub.volume}</span>}
          {pub.pages && <span>pp. {pub.pages}</span>}
          {pub.doi && <span>DOI : {pub.doi}</span>}
        </div>

        {pub.abstract && (
          <div className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-6 mb-8 border border-gray-100 dark:border-slate-700">
            <h2 className="font-bold mb-2">Resume</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{pub.abstract}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-3 mb-8">
          {pub.link && (
            <a href={pub.link} target="_blank" rel="noreferrer" className="btn-glow press inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium">
              <FiExternalLink className="size-4" /> Voir en ligne
            </a>
          )}
          {pub.pdfFile && (
            <a href={fileUrl(pub.pdfFile)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-medium transition">
              <FiDownload className="size-4" /> Telecharger le PDF
            </a>
          )}
        </div>

        {(pub.citationApa || pub.citationMla) && (
          <div className="space-y-4">
            <h2 className="font-bold text-lg">Citations</h2>
            {pub.citationApa && (
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 p-5">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs font-semibold uppercase text-slate-400">APA</span>
                  <button type="button" onClick={() => copyCitation(pub.citationApa)} className="text-indigo-600 text-sm inline-flex items-center gap-1 hover:underline"><FiCopy className="size-4" /> Copier</button>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{pub.citationApa}</p>
              </div>
            )}
            {pub.citationMla && (
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 p-5">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs font-semibold uppercase text-slate-400">MLA</span>
                  <button type="button" onClick={() => copyCitation(pub.citationMla)} className="text-indigo-600 text-sm inline-flex items-center gap-1 hover:underline"><FiCopy className="size-4" /> Copier</button>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{pub.citationMla}</p>
              </div>
            )}
          </div>
        )}
      </article>
    </div>
  );
}
