import { useEffect, useState, useCallback } from 'react';
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { taxonomyApi } from '../../api';
import { useToast } from '../../context/ToastContext';
import { PageHeader, Card, Btn, Field, inputCls } from '../../components/admin/ui';
import Modal from '../../components/admin/Modal';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import Spinner from '../../components/ui/Spinner';
import EmptyState from '../../components/ui/EmptyState';

const empty = { name: '', description: '', color: '#1e40af' };

export default function ManageCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(empty);
  const [saving, setSaving] = useState(false);
  const [toDelete, setToDelete] = useState(null);
  const toast = useToast();

  const load = useCallback(() => {
    setLoading(true);
    taxonomyApi.categories().then((r) => setCategories(r.data)).finally(() => setLoading(false));
  }, []);
  useEffect(() => { load(); }, [load]);

  const openCreate = () => { setEditing(null); setForm(empty); setModal(true); };
  const openEdit = (c) => { setEditing(c); setForm({ name: c.name, description: c.description || '', color: c.color || '#1e40af' }); setModal(true); };

  const save = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) { toast.error('Nom requis'); return; }
    setSaving(true);
    try {
      if (editing) { await taxonomyApi.updateCategory(editing.id, form); toast.success('Categorie mise a jour'); }
      else { await taxonomyApi.createCategory(form); toast.success('Categorie creee'); }
      setModal(false); load();
    } catch (err) { toast.error(err.message); }
    finally { setSaving(false); }
  };

  const confirmDelete = async () => { try { await taxonomyApi.removeCategory(toDelete.id); toast.success('Supprime'); setToDelete(null); load(); } catch (e) { toast.error(e.message); } };

  return (
    <div>
      <PageHeader title="Categories" subtitle="Organisez vos articles par theme" action={<Btn onClick={openCreate}><FiPlus className="size-4" /> Nouvelle categorie</Btn>} />

      {loading ? (
        <Spinner className="size-9" />
      ) : categories.length === 0 ? (
        <Card className="p-6"><EmptyState title="Aucune categorie" /></Card>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((c) => (
            <Card key={c.id} className="p-5">
              <div className="flex items-start justify-between">
                <span className="size-10 rounded-lg flex items-center justify-center text-white font-bold" style={{ backgroundColor: c.color }}>{c.name[0]}</span>
                <div className="flex gap-1">
                  <button onClick={() => openEdit(c)} className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 text-indigo-600"><FiEdit2 className="size-4" /></button>
                  <button onClick={() => setToDelete(c)} className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 text-red-500"><FiTrash2 className="size-4" /></button>
                </div>
              </div>
              <h3 className="font-semibold mt-3">{c.name}</h3>
              <p className="text-sm text-slate-400 line-clamp-2">{c.description || 'Aucune description'}</p>
              <p className="text-xs text-indigo-600 font-medium mt-2">{c._count?.articles ?? 0} article(s)</p>
            </Card>
          ))}
        </div>
      )}

      <Modal open={modal} onClose={() => setModal(false)} title={editing ? 'Modifier la categorie' : 'Nouvelle categorie'} size="sm">
        <form onSubmit={save} className="space-y-4">
          <Field label="Nom *"><input className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></Field>
          <Field label="Description"><textarea className={`${inputCls} resize-none`} rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></Field>
          <Field label="Couleur">
            <div className="flex items-center gap-3">
              <input type="color" value={form.color} onChange={(e) => setForm({ ...form, color: e.target.value })} className="size-10 rounded cursor-pointer" />
              <input className={inputCls} value={form.color} onChange={(e) => setForm({ ...form, color: e.target.value })} />
            </div>
          </Field>
          <div className="flex justify-end gap-3 pt-2">
            <Btn type="button" variant="outline" onClick={() => setModal(false)}>Annuler</Btn>
            <Btn type="submit" disabled={saving}>{saving ? '...' : editing ? 'Mettre a jour' : 'Creer'}</Btn>
          </div>
        </form>
      </Modal>

      <ConfirmDialog open={!!toDelete} title="Supprimer la categorie" message={`Supprimer "${toDelete?.name}" ? Les articles ne seront pas supprimes.`} onConfirm={confirmDelete} onCancel={() => setToDelete(null)} />
    </div>
  );
}
