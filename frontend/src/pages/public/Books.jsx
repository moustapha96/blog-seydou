import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { bookApi } from '../../api';
import BookCard from '../../components/blog/BookCard';
import PageBanner from '../../components/blog/PageBanner';
import Pagination from '../../components/ui/Pagination';
import Spinner from '../../components/ui/Spinner';
import EmptyState from '../../components/ui/EmptyState';
import useBanner from '../../hooks/useBanner';
import { usePageTitle } from '../../context/SiteContext';

export default function Books() {
  const banner = useBanner('livres');
  usePageTitle('Livres');
  const [books, setBooks] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    bookApi
      .list({ page, limit: 12, q: search || undefined })
      .then((r) => { setBooks(r.data); setPagination(r.pagination); })
      .finally(() => setLoading(false));
  }, [page, search]);

  return (
    <div>
      <PageBanner
        title="Livres & Publications"
        subtitle="Decouvrez mes ouvrages, manuels et publications scientifiques."
        breadcrumb={[{ label: 'Livres' }]}
        banner={banner}
      />
      <div className="container mx-auto px-4 py-12">
        <form
          onSubmit={(e) => { e.preventDefault(); setPage(1); setSearch(q); }}
          className="relative max-w-md mx-auto mb-10 reveal search-focus rounded-lg"
        >
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher un livre, un auteur..."
            className="w-full ps-10 pe-4 py-2.5 rounded-lg bg-gray-100 dark:bg-slate-800 outline-none focus:ring-2 ring-indigo-500/40"
          />
          <FiSearch className="absolute left-3.5 top-3 size-4 text-slate-400" />
        </form>

        {loading ? (
          <Spinner className="size-10" />
        ) : books.length === 0 ? (
          <EmptyState title="Aucun livre trouve" />
        ) : (
          <>
            <div className="stagger grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {books.map((b) => <BookCard key={b.id} book={b} />)}
            </div>
            <Pagination pagination={pagination} onChange={setPage} />
          </>
        )}
      </div>
    </div>
  );
}
