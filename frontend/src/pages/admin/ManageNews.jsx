import { useEffect, useState, useCallback } from 'react';
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { newsApi } from '../../api';
import { useToast } from '../../context/ToastContext';
import { PageHeader, Card, Btn, Field, inputCls } from '../../components/admin/ui';
import { formatDate } from '../../utils/format';
import Modal from '../../components/admin/Modal';
import RichEditor from '../../components/admin/RichEditor';
import ImageUpload from '../../components/admin/ImageUpload';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import Spinner from '../../components/ui/Spinner';
import Pagination from '../../components/ui/Pagination';
import EmptyState from '../../components/ui/EmptyState';

const empty = { title: '', content: '', excerpt: '', image: '', status: 'PUBLISHED' };

export default function ManageNews() {
  const [news, setNews] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(empty);
  const [saving, setSaving] = useState(false);
  const [toDelete, setToDelete] = useState(null);
  const toast = useToast();

  const load = useCallback(() => {
    setLoading(true);
    newsApi.list({ page, limit: 10 }).then((r) => { setNews(r.data); setPagination(r.pagination); }).finally(() => setLoading(false));
  }, [page]);
  useEffect(() => { load(); }, [load]);

  const openCreate = () => { setEditing(null); setForm(empty); setModal(true); };
  const openEdit = (n) => { setEditing(n); setForm({ title: n.title, content: n.content, excerpt: n.excerpt || '', image: n.image || '', status: n.status }); setModal(true); };

  const save = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) { toast.error('Titre et contenu requis'); return; }
    setSaving(true);
    try {
      if (editing) { await newsApi.update(editing.id, form); toast.success('Actualite mise a jour'); }
      else { await newsApi.create(form); toast.success('Actualite creee'); }
      setModal(false); load();
    } catch (err) { toast.error(err.errors?.[0]?.message || err.message); }
    finally { setSaving(false); }
  };

  const confirmDelete = async () => { try { await newsApi.remove(toDelete.id); toast.success('Supprime'); setToDelete(null); load(); } catch (e) { toast.error(e.message); } };

  return (
    <div>
      <PageHeader title="Actualites" subtitle="Annonces, conferences et evenements academiques" action={<Btn onClick={openCreate}><FiPlus className="size-4" /> Nouvelle actualite</Btn>} />

      <Card>
        {loading ? (
          <Spinner className="size-9" />
        ) : news.length === 0 ? (
          <EmptyState title="Aucune actualite" />
        ) : (
          <div className="divide-y divide-gray-50 dark:divide-slate-700/50">
            {news.map((n) => (
              <div key={n.id} className="flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50/50 dark:hover:bg-slate-700/30">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm line-clamp-1">{n.title}</p>
                  <p className="text-xs text-slate-400">{formatDate(n.publishedAt)} · {n.status === 'PUBLISHED' ? 'Publie' : 'Brouillon'}</p>
                </div>
                <button onClick={() => openEdit(n)} className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 text-indigo-600"><FiEdit2 className="size-4" /></button>
                <button onClick={() => setToDelete(n)} className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 text-red-500"><FiTrash2 className="size-4" /></button>
              </div>
            ))}
          </div>
        )}
      </Card>
      <Pagination pagination={pagination} onChange={setPage} />

      <Modal open={modal} onClose={() => setModal(false)} title={editing ? 'Modifier l\'actualite' : 'Nouvelle actualite'} size="lg">
        <form onSubmit={save} className="space-y-4">
          <Field label="Titre *"><input className={inputCls} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></Field>
          <Field label="Contenu *"><RichEditor value={form.content} onChange={(v) => setForm({ ...form, content: v })} /></Field>
          <Field label="Extrait"><textarea className={`${inputCls} resize-none`} rows={2} value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} /></Field>
          <ImageUpload label="Image" value={form.image} onChange={(v) => setForm({ ...form, image: v })} />
          <Field label="Statut">
            <select className={inputCls} value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
              <option value="PUBLISHED">Publie</option>
              <option value="DRAFT">Brouillon</option>
            </select>
          </Field>
          <div className="flex justify-end gap-3 pt-2">
            <Btn type="button" variant="outline" onClick={() => setModal(false)}>Annuler</Btn>
            <Btn type="submit" disabled={saving}>{saving ? 'Enregistrement...' : editing ? 'Mettre a jour' : 'Creer'}</Btn>
          </div>
        </form>
      </Modal>

      <ConfirmDialog open={!!toDelete} title="Supprimer l'actualite" message={`Supprimer "${toDelete?.title}" ?`} onConfirm={confirmDelete} onCancel={() => setToDelete(null)} />
    </div>
  );
}
