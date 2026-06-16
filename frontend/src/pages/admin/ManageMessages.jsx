import { useEffect, useState, useCallback } from 'react';
import { FiMail, FiTrash2, FiCheck } from 'react-icons/fi';
import { contactApi } from '../../api';
import { useToast } from '../../context/ToastContext';
import { PageHeader, Card } from '../../components/admin/ui';
import { fromNow } from '../../utils/format';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import Spinner from '../../components/ui/Spinner';
import Pagination from '../../components/ui/Pagination';
import EmptyState from '../../components/ui/EmptyState';

export default function ManageMessages() {
  const [messages, setMessages] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [toDelete, setToDelete] = useState(null);
  const [open, setOpen] = useState(null);
  const toast = useToast();

  const load = useCallback(() => {
    setLoading(true);
    contactApi.list({ page, limit: 15 }).then((r) => { setMessages(r.data); setPagination(r.pagination); }).finally(() => setLoading(false));
  }, [page]);
  useEffect(() => { load(); }, [load]);

  const toggle = async (m) => {
    setOpen(open === m.id ? null : m.id);
    if (!m.isRead) { try { await contactApi.markRead(m.id); load(); } catch { /* ignore */ } }
  };
  const confirmDelete = async () => { try { await contactApi.remove(toDelete.id); toast.success('Supprime'); setToDelete(null); load(); } catch (e) { toast.error(e.message); } };

  return (
    <div>
      <PageHeader title="Messages de contact" subtitle="Demandes recues via le formulaire de contact" />

      <Card>
        {loading ? (
          <Spinner className="size-9" />
        ) : messages.length === 0 ? (
          <EmptyState icon={FiMail} title="Aucun message" />
        ) : (
          <div className="divide-y divide-gray-50 dark:divide-slate-700/50">
            {messages.map((m) => (
              <div key={m.id} className={`px-5 py-4 ${!m.isRead ? 'bg-indigo-50/40 dark:bg-indigo-500/5' : ''}`}>
                <div className="flex items-start gap-3 cursor-pointer" onClick={() => toggle(m)}>
                  <span className="size-9 rounded-full bg-indigo-600/10 text-indigo-600 font-semibold flex items-center justify-center shrink-0">{m.name[0]?.toUpperCase()}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-sm">{m.name}</p>
                      {!m.isRead && <span className="size-2 rounded-full bg-indigo-600" />}
                    </div>
                    <p className="text-xs text-slate-400">{m.email} · {fromNow(m.createdAt)}</p>
                    <p className="text-sm font-medium mt-1">{m.subject || '(sans sujet)'}</p>
                    {open === m.id && <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 whitespace-pre-line">{m.message}</p>}
                  </div>
                  <div className="flex gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
                    <a href={`mailto:${m.email}?subject=Re: ${encodeURIComponent(m.subject || '')}`} className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 text-indigo-600"><FiMail className="size-4" /></a>
                    <button onClick={() => setToDelete(m)} className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 text-red-500"><FiTrash2 className="size-4" /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
      <Pagination pagination={pagination} onChange={setPage} />

      <ConfirmDialog open={!!toDelete} title="Supprimer le message" message="Cette action est irreversible." onConfirm={confirmDelete} onCancel={() => setToDelete(null)} />
    </div>
  );
}
