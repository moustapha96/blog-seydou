import { useEffect, useState, useCallback } from 'react';
import { FiUsers, FiDownload } from 'react-icons/fi';
import { newsletterApi } from '../../api';
import { PageHeader, Card, Btn } from '../../components/admin/ui';
import { formatDate } from '../../utils/format';
import Spinner from '../../components/ui/Spinner';
import Pagination from '../../components/ui/Pagination';
import EmptyState from '../../components/ui/EmptyState';

export default function ManageSubscribers() {
  const [subs, setSubs] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const load = useCallback(() => {
    setLoading(true);
    newsletterApi.subscribers({ page, limit: 20 }).then((r) => { setSubs(r.data); setPagination(r.pagination); }).finally(() => setLoading(false));
  }, [page]);
  useEffect(() => { load(); }, [load]);

  const exportCsv = () => {
    const csv = ['email,date'].concat(subs.map((s) => `${s.email},${s.createdAt}`)).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'abonnes-newsletter.csv';
    a.click();
  };

  return (
    <div>
      <PageHeader
        title="Abonnes newsletter"
        subtitle={`${pagination?.total ?? 0} abonne(s)`}
        action={subs.length > 0 && <Btn variant="outline" onClick={exportCsv}><FiDownload className="size-4" /> Exporter CSV</Btn>}
      />

      <Card>
        {loading ? (
          <Spinner className="size-9" />
        ) : subs.length === 0 ? (
          <EmptyState icon={FiUsers} title="Aucun abonne" />
        ) : (
          <div className="divide-y divide-gray-50 dark:divide-slate-700/50">
            {subs.map((s) => (
              <div key={s.id} className="flex items-center gap-3 px-5 py-3">
                <span className="size-9 rounded-full bg-indigo-600/10 text-indigo-600 flex items-center justify-center shrink-0"><FiUsers className="size-4" /></span>
                <span className="flex-1 text-sm font-medium">{s.email}</span>
                <span className="text-xs text-slate-400">{formatDate(s.createdAt)}</span>
              </div>
            ))}
          </div>
        )}
      </Card>
      <Pagination pagination={pagination} onChange={setPage} />
    </div>
  );
}
