import { useEffect, useState, useCallback } from 'react';
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { bookApi } from '../../api';
import { fileUrl } from '../../api/client';
import { useToast } from '../../context/ToastContext';
import { PageHeader, Card, Btn, Field, inputCls } from '../../components/admin/ui';
import Modal from '../../components/admin/Modal';
import ImageUpload from '../../components/admin/ImageUpload';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import Spinner from '../../components/ui/Spinner';
import Pagination from '../../components/ui/Pagination';
import EmptyState from '../../components/ui/EmptyState';

const empty = {
  title: '', author: 'Seydou Diop', publisher: '', isbn: '', year: '', category: '',
  cover: '', description: '', pdfFile: '', purchaseUrl: '', citationApa: '', citationMla: '', featured: false,
};

export default function ManageBooks() {
  const [books, setBooks] = useState([]);
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
    bookApi.list({ page, limit: 12 }).then((r) => { setBooks(r.data); setPagination(r.pagination); }).finally(() => setLoading(false));
  }, [page]);
  useEffect(() => { load(); }, [load]);

  const openCreate = () => { setEditing(null); setForm(empty); setModal(true); };
  const openEdit = (b) => { setEditing(b); setForm({ ...empty, ...b, year: b.year || '' }); setModal(true); };

  const save = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.author.trim()) { toast.error('Titre et auteur requis'); return; }
    setSaving(true);
    const payload = { ...form, year: form.year ? parseInt(form.year, 10) : null };
    try {
      if (editing) { await bookApi.update(editing.id, payload); toast.success('Livre mis a jour'); }
      else { await bookApi.create(payload); toast.success('Livre cree'); }
      setModal(false); load();
    } catch (err) { toast.error(err.errors?.[0]?.message || err.message); }
    finally { setSaving(false); }
  };

  const confirmDelete = async () => { try { await bookApi.remove(toDelete.id); toast.success('Supprime'); setToDelete(null); load(); } catch (e) { toast.error(e.message); } };

  return (
    <div>
      <PageHeader title="Livres & Publications" subtitle="Gerez votre catalogue d'ouvrages" action={<Btn onClick={openCreate}><FiPlus className="size-4" /> Nouveau livre</Btn>} />

      {loading ? (
        <Spinner className="size-9" />
      ) : books.length === 0 ? (
        <Card className="p-6"><EmptyState title="Aucun livre" /></Card>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((b) => (
            <Card key={b.id} className="p-4 flex gap-4">
              <img src={b.cover ? fileUrl(b.cover) : 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&q=80'} alt="" className="w-20 h-28 rounded-lg object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm line-clamp-2">{b.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{b.author}{b.year && ` · ${b.year}`}</p>
                {b.featured && <span className="text-[10px] text-orange-500 font-semibold">★ A la une</span>}
                <div className="flex gap-1 mt-2">
                  <button onClick={() => openEdit(b)} className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 text-indigo-600"><FiEdit2 className="size-4" /></button>
                  <button onClick={() => setToDelete(b)} className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 text-red-500"><FiTrash2 className="size-4" /></button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
      <Pagination pagination={pagination} onChange={setPage} />

      <Modal open={modal} onClose={() => setModal(false)} title={editing ? 'Modifier le livre' : 'Nouveau livre'} size="lg">
        <form onSubmit={save} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Titre *"><input className={inputCls} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></Field>
            <Field label="Auteur *"><input className={inputCls} value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} /></Field>
            <Field label="Editeur"><input className={inputCls} value={form.publisher} onChange={(e) => setForm({ ...form, publisher: e.target.value })} /></Field>
            <Field label="Annee"><input type="number" className={inputCls} value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} /></Field>
            <Field label="ISBN"><input className={inputCls} value={form.isbn} onChange={(e) => setForm({ ...form, isbn: e.target.value })} /></Field>
            <Field label="Categorie"><input className={inputCls} value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="Sociologie, Manuel..." /></Field>
          </div>
          <Field label="Description"><textarea className={`${inputCls} resize-none`} rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></Field>
          <div className="grid sm:grid-cols-2 gap-4">
            <ImageUpload label="Couverture" value={form.cover} onChange={(v) => setForm({ ...form, cover: v })} />
            <ImageUpload label="Fichier PDF (gratuit)" accept=".pdf" value={form.pdfFile} onChange={(v) => setForm({ ...form, pdfFile: v })} />
          </div>
          <Field label="Lien d'achat (Amazon, editeur...)"><input className={inputCls} value={form.purchaseUrl} onChange={(e) => setForm({ ...form, purchaseUrl: e.target.value })} placeholder="https://..." /></Field>
          <Field label="Citation APA"><textarea className={`${inputCls} resize-none`} rows={2} value={form.citationApa} onChange={(e) => setForm({ ...form, citationApa: e.target.value })} /></Field>
          <Field label="Citation MLA"><textarea className={`${inputCls} resize-none`} rows={2} value={form.citationMla} onChange={(e) => setForm({ ...form, citationMla: e.target.value })} /></Field>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="size-4 accent-indigo-600" /> Mettre a la une
          </label>
          <div className="flex justify-end gap-3 pt-2">
            <Btn type="button" variant="outline" onClick={() => setModal(false)}>Annuler</Btn>
            <Btn type="submit" disabled={saving}>{saving ? 'Enregistrement...' : editing ? 'Mettre a jour' : 'Creer'}</Btn>
          </div>
        </form>
      </Modal>

      <ConfirmDialog open={!!toDelete} title="Supprimer le livre" message={`Supprimer "${toDelete?.title}" ?`} onConfirm={confirmDelete} onCancel={() => setToDelete(null)} />
    </div>
  );
}
