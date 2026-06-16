import { useEffect, useState, useCallback } from 'react';
import { FiSearch, FiTrash2, FiActivity } from 'react-icons/fi';
import { auditApi } from '../../api';
import { useToast } from '../../context/ToastContext';
import { PageHeader, Card, Btn, inputCls } from '../../components/admin/ui';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import Spinner from '../../components/ui/Spinner';
import EmptyState from '../../components/ui/EmptyState';
import Pagination from '../../components/ui/Pagination';
import { formatDate, fromNow } from '../../utils/format';

const METHOD_BADGE = {
  POST: 'bg-emerald-500/10 text-emerald-600',
  PUT: 'bg-amber-500/10 text-amber-600',
  PATCH: 'bg-blue-500/10 text-blue-600',
  DELETE: 'bg-red-500/10 text-red-600',
};

const statusColor = (code) => {
  if (!code) return 'text-slate-400';
  if (code < 300) return 'text-emerald-600';
  if (code < 400) return 'text-blue-600';
  if (code < 500) return 'text-amber-600';
  return 'text-red-600';
};

export default function ManageAudit() {
  const [logs, setLogs] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [q, setQ] = useState('');
  const [method, setMethod] = useState('');
  const [confirmClear, setConfirmClear] = useState(false);
  const toast = useToast();

  const load = useCallback(() => {
    setLoading(true);
    auditApi
      .list({ page, limit: 25, q: q || undefined, method: method || undefined })
      .then((r) => { setLogs(r.data); setPagination(r.pagination); })
      .catch((e) => toast.error(e.message))
      .finally(() => setLoading(false));
  }, [page, q, method, toast]);
  useEffect(() => { load(); }, [load]);

  const clearAll = async () => {
    try { const r = await auditApi.clear(); toast.success(r.message || 'Journal purge'); setConfirmClear(false); setPage(1); load(); }
    catch (e) { toast.error(e.message); }
  };

  return (
    <div>
      <PageHeader
        title="Audit des requetes"
        subtitle={`${pagination?.total ?? 0} action(s) enregistree(s)`}
        action={logs.length > 0 && <Btn variant="danger" onClick={() => setConfirmClear(true)}><FiTrash2 className="size-4" /> Purger le journal</Btn>}
      />

      {/* Filtres */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          <input
            className={`${inputCls} pl-10`}
            placeholder="Rechercher action, chemin, utilisateur..."
            value={q}
            onChange={(e) => { setPage(1); setQ(e.target.value); }}
          />
        </div>
        <select className={`${inputCls} sm:w-44`} value={method} onChange={(e) => { setPage(1); setMethod(e.target.value); }}>
          <option value="">Toutes methodes</option>
          {['POST', 'PUT', 'PATCH', 'DELETE'].map((m) => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>

      <Card className="overflow-hidden">
        {loading ? (
          <Spinner className="size-9" />
        ) : logs.length === 0 ? (
          <EmptyState icon={FiActivity} title="Aucune action enregistree" message="Les creations, modifications et suppressions apparaitront ici." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-xs text-slate-400 border-b border-gray-100 dark:border-slate-700">
                <tr>
                  <th className="px-5 py-3 font-medium">Action</th>
                  <th className="px-3 py-3 font-medium">Utilisateur</th>
                  <th className="px-3 py-3 font-medium">Methode</th>
                  <th className="px-3 py-3 font-medium hidden md:table-cell">Chemin</th>
                  <th className="px-3 py-3 font-medium">Statut</th>
                  <th className="px-3 py-3 font-medium hidden lg:table-cell">IP</th>
                  <th className="px-5 py-3 font-medium text-right">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-slate-700/50">
                {logs.map((l) => (
                  <tr key={l.id} className="hover:bg-gray-50/50 dark:hover:bg-slate-700/20">
                    <td className="px-5 py-3 font-medium">
                      {l.action}
                      {l.meta?.title && <span className="block text-xs text-slate-400 truncate max-w-[200px]">{l.meta.title}</span>}
                    </td>
                    <td className="px-3 py-3">
                      <span className="block">{l.userName}</span>
                      {l.userRole && <span className="text-[11px] text-slate-400">{l.userRole}</span>}
                    </td>
                    <td className="px-3 py-3">
                      <span className={`text-[11px] px-2 py-0.5 rounded font-semibold ${METHOD_BADGE[l.method] || 'bg-slate-500/10 text-slate-500'}`}>{l.method}</span>
                    </td>
                    <td className="px-3 py-3 hidden md:table-cell font-mono text-xs text-slate-500 truncate max-w-[220px]">{l.path}</td>
                    <td className={`px-3 py-3 font-semibold ${statusColor(l.statusCode)}`}>{l.statusCode || '—'}</td>
                    <td className="px-3 py-3 hidden lg:table-cell font-mono text-xs text-slate-400">{l.ipAddress || '—'}</td>
                    <td className="px-5 py-3 text-right text-xs text-slate-400 whitespace-nowrap" title={formatDate(l.createdAt, 'd MMM yyyy HH:mm')}>{fromNow(l.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
      <Pagination pagination={pagination} onChange={setPage} />

      <ConfirmDialog
        open={confirmClear}
        title="Purger le journal d'audit"
        message="Supprimer toutes les entrees du journal ? Cette action est irreversible."
        confirmLabel="Tout purger"
        onConfirm={clearAll}
        onCancel={() => setConfirmClear(false)}
      />
    </div>
  );
}
