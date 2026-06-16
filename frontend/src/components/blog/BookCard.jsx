import { Link } from 'react-router-dom';
import { FiDownload, FiShoppingCart } from 'react-icons/fi';
import { fileUrl } from '../../api/client';

const FALLBACK = 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600&q=80';

export default function BookCard({ book }) {
  const cover = book.cover ? fileUrl(book.cover) : FALLBACK;
  return (
    <div className="reveal hover-lift group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col">
      <Link to={`/livres/${book.slug}`} className="relative block aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-slate-700 img-hover">
        <img src={cover} alt={book.title} className="w-full h-full object-cover" />
        {book.year && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white/90 text-slate-700 text-xs font-semibold">{book.year}</span>
        )}
      </Link>
      <div className="p-4 flex flex-col flex-1">
        {book.category && <span className="text-[11px] uppercase tracking-wide text-indigo-600 font-semibold">{book.category}</span>}
        <Link to={`/livres/${book.slug}`}>
          <h3 className="font-bold leading-snug line-clamp-2 group-hover:text-indigo-600 transition mt-1">{book.title}</h3>
        </Link>
        <p className="text-sm text-slate-400 mt-1">{book.author}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mt-2 flex-1">{book.description}</p>
        <div className="flex gap-2 mt-4">
          {book.purchaseUrl && (
            <a
              href={book.purchaseUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium btn-glow press transition"
            >
              <FiShoppingCart className="size-3.5" /> Acheter
            </a>
          )}
          {book.pdfFile && (
            <a
              href={fileUrl(book.pdfFile)}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white text-xs font-medium"
            >
              <FiDownload className="size-3.5" /> PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
