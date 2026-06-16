import { useEffect, useState, useCallback } from 'react';
import { FiPlus, FiEdit2, FiTrash2, FiTag } from 'react-icons/fi';
import { supervisionApi } from '../../api';
import { useToast } from '../../context/ToastContext';
import { PageHeader, Card, Btn, Field, inputCls } from '../../components/admin/ui';
import Modal from '../../components/admin/Modal';
import ImageUpload from '../../components/admin/ImageUpload';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import Spinner from '../../components/ui/Spinner';
import Pagination from '../../components/ui/Pagination';
import EmptyState from '../../components/ui/EmptyState';

const emptySup = {
  title: '', studentName: '', studentEmail: '', institution: 'Universite Cheikh Anta Diop (UCAD)',
  coSupervisor: '', year: '', startYear: '', endYear: '', status: 'IN_PROGRESS',
  description: '', link: '', pdfFile: '', categoryId: '', featured: false,
};

const emptyCat = { name: '', description: '', color: '#0891b2', sortOrder: 0 };

const STATUS_OPTS = [
  ['IN_PROGRESS', 'En cours'],
  ['DEFENDED', 'Soutenu / Termine'],
  ['ABANDONED', 'Abandonne'],
];

const statusLabel = (s) => STATUS_OPTS.find(([v]) => v === s)?.[1] || s;

export default function ManageSupervisions() {
  const [tab, setTab] = useState('list');
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState('');
  const [modal, setModal] = useState(false);
  const [catModal, setCatModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [editingCat, setEditingCat] = useState(null);
  const [form, setForm] = useState(emptySup);
  const [catForm, setCatForm] = useState(emptyCat);
  const [saving, setSaving] = useState(false);
  const [toDelete, setToDelete] = useState(null);
  const [toDeleteCat, setToDeleteCat] = useState(null);
  const toast = useToast();

  const loadCats = useCallback(() => {
    supervisionApi.categories().then((r) => setCategories(r.data)).catch(() => {});
  }, []);

  const load = useCallback(() => {
    setLoading(true);
    supervisionApi.list({ page, limit: 12, status: filterStatus || undefined })
      .then((r) => { setItems(r.data); setPagination(r.pagination); })
      .finally(() => setLoading(false));
  }, [page, filterStatus]);

  useEffect(() => { load(); loadCats(); }, [load, loadCats]);

  const openCreate = () => { setEditing(null); setForm(emptySup); setModal(true); };
  const openEdit = (s) => {
    setEditing(s);
    setForm({
      title: s.title || '',
      studentName: s.studentName || '',
      studentEmail: s.studentEmail || '',
      institution: s.institution || emptySup.institution,
      coSupervisor: s.coSupervisor || '',
      year: s.year || '',
      startYear: s.startYear || '',
      endYear: s.endYear || '',
      status: s.status || 'IN_PROGRESS',
      description: s.description || '',
      link: s.link || '',
      pdfFile: s.pdfFile || '',
      categoryId: s.categoryId || s.category?.id || '',
      featured: !!s.featured,
    });
    setModal(true);
  };

  const openCatCreate = () => { setEditingCat(null); setCatForm(emptyCat); setCatModal(true); };
  const openCatEdit = (c) => {
    setEditingCat(c);
    setCatForm({ name: c.name, description: c.description || '', color: c.color || '#0891b2', sortOrder: c.sortOrder ?? 0 });
    setCatModal(true);
  };

  const save = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.studentName.trim()) { toast.error('Sujet et nom etudiant requis'); return; }
    setSaving(true);
    const payload = {
      title: form.title.trim(),
      studentName: form.studentName.trim(),
      studentEmail: form.studentEmail.trim() || null,
      institution: form.institution.trim() || null,
      coSupervisor: form.coSupervisor.trim() || null,
      year: form.year ? parseInt(form.year, 10) : null,
      startYear: form.startYear ? parseInt(form.startYear, 10) : null,
      endYear: form.endYear ? parseInt(form.endYear, 10) : null,
      status: form.status,
      description: form.description.trim() || null,
      link: form.link.trim() || null,
      pdfFile: form.pdfFile || null,
      categoryId: form.categoryId || null,
      featured: form.featured,
    };
    try {
      if (editing) { await supervisionApi.update(editing.id, payload); toast.success('Encadrement mis a jour'); }
      else { await supervisionApi.create(payload); toast.success('Encadrement cree'); }
      setModal(false); load();
    } catch (err) { toast.error(err.errors?.[0]?.message || err.message); }
    finally { setSaving(false); }
  };

  const saveCat = async (e) => {
    e.preventDefault();
    if (!catForm.name.trim()) { toast.error('Nom requis'); return; }
    setSaving(true);
    try {
      if (editingCat) { await supervisionApi.updateCategory(editingCat.id, catForm); toast.success('Categorie mise a jour'); }
      else { await supervisionApi.createCategory(catForm); toast.success('Categorie creee'); }
      setCatModal(false); loadCats();
    } catch (err) { toast.error(err.message); }
    finally { setSaving(false); }
  };

  const confirmDelete = async () => {
    try { await supervisionApi.remove(toDelete.id); toast.success('Supprime'); setToDelete(null); load(); }
    catch (e) { toast.error(e.message); }
  };

  const confirmDeleteCat = async () => {
    try { await supervisionApi.removeCategory(toDeleteCat.id); toast.success('Supprime'); setToDeleteCat(null); loadCats(); }
    catch (e) { toast.error(e.message); }
  };

  const tabBtn = (id, label) => (
    <button type="button" onClick={() => setTab(id)} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${tab === id ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
      {label}
    </button>
  );

  return (
    <div>
      <PageHeader
        title="Encadrements"
        subtitle="Theses, memoires, stages et projets encadres"
        action={tab === 'list' ? <Btn onClick={openCreate}><FiPlus className="size-4" /> Nouvel encadrement</Btn> : <Btn onClick={openCatCreate}><FiPlus className="size-4" /> Nouvelle categorie</Btn>}
      />
      <div className="flex flex-wrap gap-2 mb-6">
        {tabBtn('list', 'Encadrements')}
        {tabBtn('categories', 'Categories')}
      </div>

      {tab === 'list' ? (
        <>
          <div className="flex flex-wrap gap-2 mb-4">
            <button type="button" onClick={() => { setFilterStatus(''); setPage(1); }} className={`filter-pill px-4 py-2 rounded-full text-sm font-medium ${!filterStatus ? 'filter-pill-active bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-slate-800'}`}>Tous</button>
            {STATUS_OPTS.map(([v, l]) => (
              <button key={v} type="button" onClick={() => { setFilterStatus(v); setPage(1); }} className={`filter-pill px-4 py-2 rounded-full text-sm font-medium ${filterStatus === v ? 'filter-pill-active bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-slate-800'}`}>{l}</button>
            ))}
          </div>
          {loading ? <Spinner className="size-9" /> : items.length === 0 ? (
            <Card className="p-6"><EmptyState title="Aucun encadrement" /></Card>
          ) : (
            <>
              <div className="space-y-3">
                {items.map((s) => (
                  <Card key={s.id} className="p-4 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        {s.category && <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: s.category.color }}>{s.category.name}</span>}
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${s.status === 'DEFENDED' ? 'bg-emerald-500/15 text-emerald-600' : s.status === 'ABANDONED' ? 'bg-slate-200 text-slate-500' : 'bg-amber-500/15 text-amber-600'}`}>{statusLabel(s.status)}</span>
                        {s.featured && <span className="text-[10px] text-orange-500 font-semibold">★</span>}
                      </div>
                      <h3 className="font-semibold line-clamp-1">{s.title}</h3>
                      <p className="text-sm text-slate-500">{s.studentName}{s.year && ` · ${s.year}`}{s.institution && ` · ${s.institution}`}</p>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <button onClick={() => openEdit(s)} className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 text-indigo-600"><FiEdit2 className="size-4" /></button>
                      <button onClick={() => setToDelete(s)} className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-red-50 text-red-500"><FiTrash2 className="size-4" /></button>
                    </div>
                  </Card>
                ))}
              </div>
              <Pagination pagination={pagination} onChange={setPage} />
            </>
          )}
        </>
      ) : categories.length === 0 ? (
        <Card className="p-6"><EmptyState icon={FiTag} title="Aucune categorie" message="Creez des categories (Doctorat, Master, Stage...)" /></Card>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((c) => (
            <Card key={c.id} className="p-5">
              <div className="flex items-start justify-between">
                <span className="size-10 rounded-lg flex items-center justify-center text-white font-bold" style={{ backgroundColor: c.color }}>{c.name[0]}</span>
                <div className="flex gap-1">
                  <button onClick={() => openCatEdit(c)} className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 text-indigo-600"><FiEdit2 className="size-4" /></button>
                  <button onClick={() => setToDeleteCat(c)} className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-red-50 text-red-500"><FiTrash2 className="size-4" /></button>
                </div>
              </div>
              <h3 className="font-semibold mt-3">{c.name}</h3>
              <p className="text-sm text-slate-400 line-clamp-2">{c.description || 'Sans description'}</p>
              <p className="text-xs text-indigo-600 font-medium mt-2">{c._count?.supervisions ?? 0} encadrement(s)</p>
            </Card>
          ))}
        </div>
      )}

      <Modal open={modal} onClose={() => setModal(false)} title={editing ? 'Modifier l\'encadrement' : 'Nouvel encadrement'} size="lg">
        <form onSubmit={save} className="space-y-4 max-h-[70vh] overflow-y-auto thin-scroll pe-1">
          <Field label="Sujet / Titre *"><input className={inputCls} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></Field>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Nom de l'etudiant *"><input className={inputCls} value={form.studentName} onChange={(e) => setForm({ ...form, studentName: e.target.value })} /></Field>
            <Field label="Email etudiant"><input type="email" className={inputCls} value={form.studentEmail} onChange={(e) => setForm({ ...form, studentEmail: e.target.value })} /></Field>
            <Field label="Institution"><input className={inputCls} value={form.institution} onChange={(e) => setForm({ ...form, institution: e.target.value })} /></Field>
            <Field label="Co-encadrant"><input className={inputCls} value={form.coSupervisor} onChange={(e) => setForm({ ...form, coSupervisor: e.target.value })} /></Field>
            <Field label="Categorie">
              <select className={inputCls} value={form.categoryId} onChange={(e) => setForm({ ...form, categoryId: e.target.value })}>
                <option value="">— Aucune —</option>
                {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </Field>
            <Field label="Statut">
              <select className={inputCls} value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
                {STATUS_OPTS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
              </select>
            </Field>
            <Field label="Annee (soutenance)"><input type="number" className={inputCls} value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} /></Field>
            <Field label="Annee debut"><input type="number" className={inputCls} value={form.startYear} onChange={(e) => setForm({ ...form, startYear: e.target.value })} /></Field>
            <Field label="Annee fin prevue"><input type="number" className={inputCls} value={form.endYear} onChange={(e) => setForm({ ...form, endYear: e.target.value })} /></Field>
          </div>
          <Field label="Description"><textarea className={`${inputCls} resize-none`} rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></Field>
          <Field label="Lien (these en ligne)"><input className={inputCls} value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} placeholder="https://..." /></Field>
          <ImageUpload label="PDF (memoire / these)" accept=".pdf" value={form.pdfFile} onChange={(v) => setForm({ ...form, pdfFile: v })} />
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="size-4 accent-indigo-600" /> Mettre en avant
          </label>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 sm:gap-3 pt-2">
            <Btn type="button" variant="outline" onClick={() => setModal(false)}>Annuler</Btn>
            <Btn type="submit" disabled={saving}>{saving ? 'Enregistrement...' : editing ? 'Mettre a jour' : 'Creer'}</Btn>
          </div>
        </form>
      </Modal>

      <Modal open={catModal} onClose={() => setCatModal(false)} title={editingCat ? 'Modifier la categorie' : 'Nouvelle categorie'} size="sm">
        <form onSubmit={saveCat} className="space-y-4">
          <Field label="Nom *"><input className={inputCls} value={catForm.name} onChange={(e) => setCatForm({ ...catForm, name: e.target.value })} placeholder="Doctorat, Master, Stage..." /></Field>
          <Field label="Description"><textarea className={`${inputCls} resize-none`} rows={2} value={catForm.description} onChange={(e) => setCatForm({ ...catForm, description: e.target.value })} /></Field>
          <Field label="Ordre d'affichage"><input type="number" className={inputCls} value={catForm.sortOrder} onChange={(e) => setCatForm({ ...catForm, sortOrder: parseInt(e.target.value, 10) || 0 })} /></Field>
          <Field label="Couleur">
            <div className="flex items-center gap-3">
              <input type="color" value={catForm.color} onChange={(e) => setCatForm({ ...catForm, color: e.target.value })} className="size-10 rounded cursor-pointer" />
              <input className={inputCls} value={catForm.color} onChange={(e) => setCatForm({ ...catForm, color: e.target.value })} />
            </div>
          </Field>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 sm:gap-3 pt-2">
            <Btn type="button" variant="outline" onClick={() => setCatModal(false)}>Annuler</Btn>
            <Btn type="submit" disabled={saving}>{saving ? '...' : editingCat ? 'Mettre a jour' : 'Creer'}</Btn>
          </div>
        </form>
      </Modal>

      <ConfirmDialog open={!!toDelete} title="Supprimer l'encadrement" message={`Supprimer l'encadrement de "${toDelete?.studentName}" ?`} onConfirm={confirmDelete} onCancel={() => setToDelete(null)} />
      <ConfirmDialog open={!!toDeleteCat} title="Supprimer la categorie" message={`Supprimer "${toDeleteCat?.name}" ?`} onConfirm={confirmDeleteCat} onCancel={() => setToDeleteCat(null)} />
    </div>
  );
}
