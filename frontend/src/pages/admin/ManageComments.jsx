import { useEffect, useState, useCallback } from 'react';
import { FiCheck, FiTrash2, FiCornerDownRight, FiSend } from 'react-icons/fi';
import { commentApi } from '../../api';
import { useToast } from '../../context/ToastContext';
import { PageHeader, Card, Btn } from '../../components/admin/ui';
import { fromNow } from '../../utils/format';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import Spinner from '../../components/ui/Spinner';
import Pagination from '../../components/ui/Pagination';
import EmptyState from '../../components/ui/EmptyState';

export default function ManageComments() {
  const [comments, setComments] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('pending');
  const [toDelete, setToDelete] = useState(null);
  const [replyTo, setReplyTo] = useState(null);
  const [replyText, setReplyText] = useState('');
  const toast = useToast();

  const load = useCallback(() => {
    setLoading(true);
    commentApi
      .listAll({ page, limit: 15, status: filter || undefined })
      .then((r) => { setComments(r.data); setPagination(r.pagination); })
      .finally(() => setLoading(false));
  }, [page, filter]);

  useEffect(() => { load(); }, [load]);

  const approve = async (c) => { try { await commentApi.approve(c.id); toast.success('Commentaire approuve'); load(); } catch (e) { toast.error(e.message); } };
  const confirmDelete = async () => { try { await commentApi.remove(toDelete.id); toast.success('Supprime'); setToDelete(null); load(); } catch (e) { toast.error(e.message); } };
  const sendReply = async () => {
    if (!replyText.trim()) return;
    try { await commentApi.reply(replyTo.id, replyText); toast.success('Reponse publiee'); setReplyTo(null); setReplyText(''); load(); }
    catch (e) { toast.error(e.message); }
  };

  return (
    <div>
      <PageHeader title="Commentaires" subtitle="Moderez et repondez aux commentaires" />

      <div className="flex gap-2 mb-4">
        {[['pending', 'En attente'], ['approved', 'Approuves'], ['', 'Tous']].map(([v, l]) => (
          <button key={v} onClick={() => { setFilter(v); setPage(1); }} className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition ${filter === v ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700'}`}>{l}</button>
        ))}
      </div>

      {loading ? (
        <Spinner className="size-9" />
      ) : comments.length === 0 ? (
        <Card className="p-6"><EmptyState title="Aucun commentaire" /></Card>
      ) : (
        <div className="space-y-3">
          {comments.map((c) => (
            <Card key={c.id} className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-sm">{c.authorName}</span>
                    {c.authorEmail && <span className="text-xs text-slate-400">{c.authorEmail}</span>}
                    <span className={`text-[11px] px-2 py-0.5 rounded-full ${c.approved ? 'bg-emerald-500/15 text-emerald-600' : 'bg-amber-500/15 text-amber-600'}`}>
                      {c.approved ? 'Approuve' : 'En attente'}
                    </span>
                    {c.parentId && <span className="text-[11px] text-indigo-500 flex items-center gap-1"><FiCornerDownRight className="size-3" /> reponse</span>}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1.5">{c.content}</p>
                  <p className="text-xs text-slate-400 mt-2">
                    Sur <span className="font-medium text-slate-500">{c.article?.title}</span> · {fromNow(c.createdAt)}
                  </p>
                </div>
                <div className="flex flex-col gap-1.5 shrink-0">
                  {!c.approved && <button onClick={() => approve(c)} title="Approuver" className="size-8 inline-flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20"><FiCheck className="size-4" /></button>}
                  {!c.parentId && <button onClick={() => { setReplyTo(c); setReplyText(''); }} title="Repondre" className="size-8 inline-flex items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600 hover:bg-indigo-600/20"><FiCornerDownRight className="size-4" /></button>}
                  <button onClick={() => setToDelete(c)} title="Supprimer" className="size-8 inline-flex items-center justify-center rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20"><FiTrash2 className="size-4" /></button>
                </div>
              </div>

              {replyTo?.id === c.id && (
                <div className="mt-4 flex gap-2">
                  <input
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Votre reponse..."
                    className="flex-1 px-3.5 py-2 rounded-lg bg-gray-50 dark:bg-slate-700 outline-none text-sm"
                    autoFocus
                    onKeyDown={(e) => e.key === 'Enter' && sendReply()}
                  />
                  <Btn onClick={sendReply}><FiSend className="size-4" /> Repondre</Btn>
                  <Btn variant="outline" onClick={() => setReplyTo(null)}>Annuler</Btn>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}
      <Pagination pagination={pagination} onChange={setPage} />

      <ConfirmDialog open={!!toDelete} title="Supprimer le commentaire" message="Cette action est irreversible." onConfirm={confirmDelete} onCancel={() => setToDelete(null)} />
    </div>
  );
}
