import { Link } from 'react-router-dom';
import { FiExternalLink, FiDownload, FiCopy } from 'react-icons/fi';
import { fileUrl } from '../../api/client';

export default function PublicationCard({ publication, onCopyCitation }) {
  const p = publication;
  const cat = p.category;

  return (
    <article className="reveal hover-lift group bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 p-4 sm:p-6 flex flex-col h-full">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        {cat && (
          <span className="text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: cat.color }}>
            {cat.name}
          </span>
        )}
        {p.year && <span className="text-xs text-slate-400 font-medium">{p.year}</span>}
        {p.featured && <span className="text-[10px] text-orange-500 font-semibold">★ A la une</span>}
      </div>

      <Link to={`/publications/${p.slug}`} className="flex-1">
        <h3 className="font-bold text-lg leading-snug line-clamp-2 group-hover:text-indigo-600 transition mb-2">{p.title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">{p.authors}</p>
        {p.journal && <p className="text-sm text-indigo-600/80 mt-1 line-clamp-1 italic">{p.journal}</p>}
        {p.abstract && <p className="text-sm text-slate-500 line-clamp-3 mt-3">{p.abstract}</p>}
      </Link>

      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-slate-700">
        {p.citationApa && (
          <button type="button" onClick={() => onCopyCitation?.(p.citationApa)} className="inline-flex items-center gap-1 text-xs text-indigo-600 font-medium hover:underline">
            <FiCopy className="size-3.5" /> APA
          </button>
        )}
        {p.citationMla && (
          <button type="button" onClick={() => onCopyCitation?.(p.citationMla)} className="inline-flex items-center gap-1 text-xs text-indigo-600 font-medium hover:underline">
            <FiCopy className="size-3.5" /> MLA
          </button>
        )}
        {p.link && (
          <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-indigo-600">
            <FiExternalLink className="size-3.5" /> Lien
          </a>
        )}
        {p.pdfFile && (
          <a href={fileUrl(p.pdfFile)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-indigo-600">
            <FiDownload className="size-3.5" /> PDF
          </a>
        )}
      </div>
    </article>
  );
}
