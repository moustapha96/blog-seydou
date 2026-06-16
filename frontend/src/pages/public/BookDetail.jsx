import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiDownload, FiShoppingCart, FiBook, FiCalendar, FiHash, FiCopy } from 'react-icons/fi';
import { bookApi } from '../../api';
import { fileUrl } from '../../api/client';
import Spinner from '../../components/ui/Spinner';
import EmptyState from '../../components/ui/EmptyState';
import { useToast } from '../../context/ToastContext';
import { usePageTitle } from '../../context/SiteContext';

export default function BookDetail() {
  const { slug } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const toast = useToast();
  usePageTitle(book?.title);

  useEffect(() => {
    setLoading(true);
    bookApi.get(slug).then((r) => setBook(r.data)).catch(() => setError(true)).finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <Spinner className="size-10" />;
  if (error || !book)
    return (
      <div className="container mx-auto px-4 py-20">
        <EmptyState title="Livre introuvable" />
        <div className="text-center mt-4"><Link to="/livres" className="text-indigo-600 font-medium">Retour aux livres</Link></div>
      </div>
    );

  const cover = book.cover ? fileUrl(book.cover) : 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600&q=80';
  const copyCitation = (text) => { navigator.clipboard.writeText(text); toast.success('Citation copiee !'); };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <Link to="/livres" className="text-sm text-indigo-600 mb-6 inline-block">&larr; Retour aux livres</Link>
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <img src={cover} alt={book.title} className="w-full rounded-xl shadow-lg aspect-[3/4] object-cover" />
          <div className="flex flex-col gap-2 mt-5">
            {book.purchaseUrl && (
              <a href={book.purchaseUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium">
                <FiShoppingCart className="size-4" /> Acheter le livre
              </a>
            )}
            {book.pdfFile && (
              <a href={fileUrl(book.pdfFile)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 py-3 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-medium">
                <FiDownload className="size-4" /> Telecharger (PDF gratuit)
              </a>
            )}
          </div>
        </div>

        <div className="md:col-span-3">
          {book.category && <span className="text-sm uppercase tracking-wide text-indigo-600 font-semibold">{book.category}</span>}
          <h1 className="text-3xl font-bold mt-1 mb-3">{book.title}</h1>
          <p className="text-slate-500 mb-6">par <span className="font-medium text-slate-700 dark:text-slate-200">{book.author}</span></p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {book.publisher && <Info icon={FiBook} label="Editeur" value={book.publisher} />}
            {book.year && <Info icon={FiCalendar} label="Annee" value={book.year} />}
            {book.isbn && <Info icon={FiHash} label="ISBN" value={book.isbn} />}
            {book.downloads > 0 && <Info icon={FiDownload} label="Telechargements" value={book.downloads} />}
          </div>

          {book.description && (
            <div className="mb-8">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{book.description}</p>
            </div>
          )}

          {(book.citationApa || book.citationMla) && (
            <div>
              <h3 className="font-semibold mb-3">Citations academiques</h3>
              <div className="space-y-3">
                {book.citationApa && <Citation label="APA" text={book.citationApa} onCopy={copyCitation} />}
                {book.citationMla && <Citation label="MLA" text={book.citationMla} onCopy={copyCitation} />}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const Info = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-slate-800">
    <Icon className="size-5 text-indigo-600 shrink-0" />
    <div>
      <p className="text-xs text-slate-400">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  </div>
);

const Citation = ({ label, text, onCopy }) => (
  <div className="p-4 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
    <div className="flex items-center justify-between mb-1">
      <span className="text-xs font-bold text-indigo-600">{label}</span>
      <button onClick={() => onCopy(text)} className="text-slate-400 hover:text-indigo-600"><FiCopy className="size-4" /></button>
    </div>
    <p className="text-sm text-slate-600 dark:text-slate-300 italic">{text}</p>
  </div>
);
