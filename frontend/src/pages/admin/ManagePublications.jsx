import { useEffect, useState, useCallback } from 'react';
import { FiPlus, FiEdit2, FiTrash2, FiTag } from 'react-icons/fi';
import { publicationApi } from '../../api';
import { useToast } from '../../context/ToastContext';
import { PageHeader, Card, Btn, Field, inputCls } from '../../components/admin/ui';
import Modal from '../../components/admin/Modal';
import ImageUpload from '../../components/admin/ImageUpload';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import Spinner from '../../components/ui/Spinner';
import Pagination from '../../components/ui/Pagination';
import EmptyState from '../../components/ui/EmptyState';

const emptyPub = {
  title: '', authors: 'Seydou Diop', journal: '', publisher: '', year: '', volume: '', pages: '',
  doi: '', link: '', abstract: '', citationApa: '', citationMla: '', pdfFile: '', categoryId: '',
  status: 'PUBLISHED', featured: false,
};

const emptyCat = { name: '', description: '', color: '#7c3aed', sortOrder: 0 };

const STATUS_OPTS = [
  ['PUBLISHED', 'Publie'],
  ['DRAFT', 'Brouillon'],
  ['ARCHIVED', 'Archive'],
];

export default function ManagePublications() {
  const [tab, setTab] = useState('list');
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [catModal, setCatModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [editingCat, setEditingCat] = useState(null);
  const [form, setForm] = useState(emptyPub);
  const [catForm, setCatForm] = useState(emptyCat);
  const [saving, setSaving] = useState(false);
  const [toDelete, setToDelete] = useState(null);
  const [toDeleteCat, setToDeleteCat] = useState(null);
  const toast = useToast();

  const loadCats = useCallback(() => {
    publicationApi.categories().then((r) => setCategories(r.data)).catch(() => {});
  }, []);

  const load = useCallback(() => {
    setLoading(true);
    publicationApi.list({ page, limit: 12, status: 'all' })
      .then((r) => { setItems(r.data); setPagination(r.pagination); })
      .finally(() => setLoading(false));
  }, [page]);

  useEffect(() => { load(); loadCats(); }, [load, loadCats]);

  const openCreate = () => { setEditing(null); setForm(emptyPub); setModal(true); };
  const openEdit = (p) => {
    setEditing(p);
    setForm({
      title: p.title || '',
      authors: p.authors || emptyPub.authors,
      journal: p.journal || '',
      publisher: p.publisher || '',
      year: p.year || '',
      volume: p.volume || '',
      pages: p.pages || '',
      doi: p.doi || '',
      link: p.link || '',
      abstract: p.abstract || '',
      citationApa: p.citationApa || '',
      citationMla: p.citationMla || '',
      pdfFile: p.pdfFile || '',
      categoryId: p.categoryId || p.category?.id || '',
      status: p.status || 'PUBLISHED',
      featured: !!p.featured,
    });
    setModal(true);
  };

  const openCatCreate = () => { setEditingCat(null); setCatForm(emptyCat); setCatModal(true); };
  const openCatEdit = (c) => {
    setEditingCat(c);
    setCatForm({ name: c.name, description: c.description || '', color: c.color || '#7c3aed', sortOrder: c.sortOrder ?? 0 });
    setCatModal(true);
  };

  const save = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.authors.trim()) { toast.error('Titre et auteurs requis'); return; }
    setSaving(true);
    const payload = {
      title: form.title.trim(),
      authors: form.authors.trim(),
      journal: form.journal.trim() || null,
      publisher: form.publisher.trim() || null,
      year: form.year ? parseInt(form.year, 10) : null,
      volume: form.volume.trim() || null,
      pages: form.pages.trim() || null,
      doi: form.doi.trim() || null,
      link: form.link.trim() || null,
      abstract: form.abstract.trim() || null,
      citationApa: form.citationApa.trim() || null,
      citationMla: form.citationMla.trim() || null,
      pdfFile: form.pdfFile || null,
      categoryId: form.categoryId || null,
      status: form.status,
      featured: form.featured,
    };
    try {
      if (editing) { await publicationApi.update(editing.id, payload); toast.success('Publication mise a jour'); }
      else { await publicationApi.create(payload); toast.success('Publication creee'); }
      setModal(false); load();
    } catch (err) { toast.error(err.errors?.[0]?.message || err.message); }
    finally { setSaving(false); }
  };

  const saveCat = async (e) => {
    e.preventDefault();
    if (!catForm.name.trim()) { toast.error('Nom requis'); return; }
    setSaving(true);
    try {
      if (editingCat) { await publicationApi.updateCategory(editingCat.id, catForm); toast.success('Categorie mise a jour'); }
      else { await publicationApi.createCategory(catForm); toast.success('Categorie creee'); }
      setCatModal(false); loadCats();
    } catch (err) { toast.error(err.message); }
    finally { setSaving(false); }
  };

  const confirmDelete = async () => {
    try { await publicationApi.remove(toDelete.id); toast.success('Supprime'); setToDelete(null); load(); }
    catch (e) { toast.error(e.message); }
  };

  const confirmDeleteCat = async () => {
    try { await publicationApi.removeCategory(toDeleteCat.id); toast.success('Supprime'); setToDeleteCat(null); loadCats(); }
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
        title="Publications scientifiques"
        subtitle="Articles, chapitres, communications et rapports"
        action={tab === 'list' ? <Btn onClick={openCreate}><FiPlus className="size-4" /> Nouvelle publication</Btn> : <Btn onClick={openCatCreate}><FiPlus className="size-4" /> Nouvelle categorie</Btn>}
      />
      <div className="flex gap-2 mb-6">{tabBtn('list', 'Publications')}{tabBtn('categories', 'Categories')}</div>

      {tab === 'list' ? (
        loading ? <Spinner className="size-9" /> : items.length === 0 ? (
          <Card className="p-6"><EmptyState title="Aucune publication" /></Card>
        ) : (
          <>
            <div className="space-y-3">
              {items.map((p) => (
                <Card key={p.id} className="p-4 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      {p.category && <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: p.category.color }}>{p.category.name}</span>}
                      {p.featured && <span className="text-[10px] text-orange-500 font-semibold">★ A la une</span>}
                      {p.status !== 'PUBLISHED' && <span className="text-[10px] bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded">{p.status}</span>}
                    </div>
                    <h3 className="font-semibold line-clamp-1">{p.title}</h3>
                    <p className="text-sm text-slate-500">{p.authors}{p.journal && ` · ${p.journal}`}{p.year && ` · ${p.year}`}</p>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    <button onClick={() => openEdit(p)} className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 text-indigo-600"><FiEdit2 className="size-4" /></button>
                    <button onClick={() => setToDelete(p)} className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 text-red-500"><FiTrash2 className="size-4" /></button>
                  </div>
                </Card>
              ))}
            </div>
            <Pagination pagination={pagination} onChange={setPage} />
          </>
        )
      ) : categories.length === 0 ? (
        <Card className="p-6"><EmptyState icon={FiTag} title="Aucune categorie" message="Creez des categories (Article de revue, Communication...)" /></Card>
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
              <p className="text-xs text-indigo-600 font-medium mt-2">{c._count?.publications ?? 0} publication(s)</p>
            </Card>
          ))}
        </div>
      )}

      <Modal open={modal} onClose={() => setModal(false)} title={editing ? 'Modifier la publication' : 'Nouvelle publication'} size="lg">
        <form onSubmit={save} className="space-y-4 max-h-[70vh] overflow-y-auto thin-scroll pe-1">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <Field label="Titre *">
                <input className={inputCls} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
              </Field>
            </div>
            <Field label="Auteurs *"><input className={inputCls} value={form.authors} onChange={(e) => setForm({ ...form, authors: e.target.value })} placeholder="Nom1, Nom2" /></Field>
            <Field label="Annee"><input type="number" className={inputCls} value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} /></Field>
            <Field label="Revue / Colloque"><input className={inputCls} value={form.journal} onChange={(e) => setForm({ ...form, journal: e.target.value })} /></Field>
            <Field label="Editeur"><input className={inputCls} value={form.publisher} onChange={(e) => setForm({ ...form, publisher: e.target.value })} /></Field>
            <Field label="Volume"><input className={inputCls} value={form.volume} onChange={(e) => setForm({ ...form, volume: e.target.value })} /></Field>
            <Field label="Pages"><input className={inputCls} value={form.pages} onChange={(e) => setForm({ ...form, pages: e.target.value })} placeholder="45-72" /></Field>
            <Field label="DOI"><input className={inputCls} value={form.doi} onChange={(e) => setForm({ ...form, doi: e.target.value })} /></Field>
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
          </div>
          <Field label="Resume"><textarea className={`${inputCls} resize-none`} rows={3} value={form.abstract} onChange={(e) => setForm({ ...form, abstract: e.target.value })} /></Field>
          <Field label="Lien externe"><input className={inputCls} value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} placeholder="https://..." /></Field>
          <ImageUpload label="PDF" accept=".pdf" value={form.pdfFile} onChange={(v) => setForm({ ...form, pdfFile: v })} />
          <Field label="Citation APA"><textarea className={`${inputCls} resize-none`} rows={2} value={form.citationApa} onChange={(e) => setForm({ ...form, citationApa: e.target.value })} /></Field>
          <Field label="Citation MLA"><textarea className={`${inputCls} resize-none`} rows={2} value={form.citationMla} onChange={(e) => setForm({ ...form, citationMla: e.target.value })} /></Field>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="size-4 accent-indigo-600" /> Mettre a la une
          </label>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 sm:gap-3 pt-2">
            <Btn type="button" variant="outline" onClick={() => setModal(false)}>Annuler</Btn>
            <Btn type="submit" disabled={saving}>{saving ? 'Enregistrement...' : editing ? 'Mettre a jour' : 'Creer'}</Btn>
          </div>
        </form>
      </Modal>

      <Modal open={catModal} onClose={() => setCatModal(false)} title={editingCat ? 'Modifier la categorie' : 'Nouvelle categorie'} size="sm">
        <form onSubmit={saveCat} className="space-y-4">
          <Field label="Nom *"><input className={inputCls} value={catForm.name} onChange={(e) => setCatForm({ ...catForm, name: e.target.value })} /></Field>
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

      <ConfirmDialog open={!!toDelete} title="Supprimer la publication" message={`Supprimer "${toDelete?.title}" ?`} onConfirm={confirmDelete} onCancel={() => setToDelete(null)} />
      <ConfirmDialog open={!!toDeleteCat} title="Supprimer la categorie" message={`Supprimer "${toDeleteCat?.name}" ?`} onConfirm={confirmDeleteCat} onCancel={() => setToDeleteCat(null)} />
    </div>
  );
}
