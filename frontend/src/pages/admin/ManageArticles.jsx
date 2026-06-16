import { useEffect, useState, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FiPlus, FiEdit2, FiTrash2, FiEye, FiArchive, FiExternalLink } from 'react-icons/fi';
import { articleApi, taxonomyApi } from '../../api';
import { useToast } from '../../context/ToastContext';
import { PageHeader, Card, Btn, Field, inputCls } from '../../components/admin/ui';
import { STATUS_META, formatDate } from '../../utils/format';
import Modal from '../../components/admin/Modal';
import RichEditor from '../../components/admin/RichEditor';
import ImageUpload from '../../components/admin/ImageUpload';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import Spinner from '../../components/ui/Spinner';
import Pagination from '../../components/ui/Pagination';
import EmptyState from '../../components/ui/EmptyState';

const empty = {
  title: '', content: '', excerpt: '', coverImage: '', categoryId: '', tags: '',
  status: 'DRAFT', featured: false, scheduledAt: '', metaTitle: '', metaDesc: '',
};

export default function ManageArticles() {
  const [params, setParams] = useSearchParams();
  const [articles, setArticles] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('');
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(empty);
  const [saving, setSaving] = useState(false);
  const [toDelete, setToDelete] = useState(null);
  const toast = useToast();

  const load = useCallback(() => {
    setLoading(true);
    articleApi
      .list({ page, limit: 10, status: statusFilter || undefined })
      .then((r) => { setArticles(r.data); setPagination(r.pagination); })
      .finally(() => setLoading(false));
  }, [page, statusFilter]);

  useEffect(() => { load(); }, [load]);
  useEffect(() => { taxonomyApi.categories().then((r) => setCategories(r.data)).catch(() => {}); }, []);

  const openCreate = useCallback(() => { setEditing(null); setForm(empty); setModal(true); }, []);

  useEffect(() => {
    if (params.get('new')) { openCreate(); setParams({}, { replace: true }); }
  }, [params, openCreate, setParams]);

  const openEdit = (a) => {
    setEditing(a);
    setForm({
      title: a.title, content: a.content, excerpt: a.excerpt || '', coverImage: a.coverImage || '',
      categoryId: a.categoryId || '', tags: (a.tags || []).map((t) => t.name).join(', '),
      status: a.status, featured: a.featured,
      scheduledAt: a.scheduledAt ? a.scheduledAt.slice(0, 16) : '',
      metaTitle: a.metaTitle || '', metaDesc: a.metaDesc || '',
    });
    setModal(true);
  };

  const save = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) { toast.error('Titre et contenu requis'); return; }
    setSaving(true);
    const payload = {
      ...form,
      categoryId: form.categoryId || null,
      tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
      scheduledAt: form.status === 'SCHEDULED' && form.scheduledAt ? new Date(form.scheduledAt).toISOString() : null,
    };
    try {
      if (editing) { await articleApi.update(editing.id, payload); toast.success('Article mis a jour'); }
      else { await articleApi.create(payload); toast.success('Article cree'); }
      setModal(false);
      load();
    } catch (err) {
      toast.error(err.errors?.[0]?.message || err.message || 'Erreur');
    } finally {
      setSaving(false);
    }
  };

  const confirmDelete = async () => {
    try {
      await articleApi.remove(toDelete.id);
      toast.success('Article supprime');
      setToDelete(null);
      load();
    } catch (err) { toast.error(err.message); }
  };

  const archive = async (a) => {
    try { await articleApi.archive(a.id); toast.success('Article archive'); load(); }
    catch (err) { toast.error(err.message); }
  };

  return (
    <div>
      <PageHeader
        title="Articles"
        subtitle="Gerez vos publications, brouillons et planifications"
        action={<Btn onClick={openCreate}><FiPlus className="size-4" /> Nouvel article</Btn>}
      />

      <div className="flex gap-2 mb-4 flex-wrap">
        {[['', 'Tous'], ['PUBLISHED', 'Publies'], ['DRAFT', 'Brouillons'], ['SCHEDULED', 'Programmes'], ['ARCHIVED', 'Archives']].map(([v, l]) => (
          <button
            key={v}
            onClick={() => { setStatusFilter(v); setPage(1); }}
            className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition ${statusFilter === v ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700'}`}
          >
            {l}
          </button>
        ))}
      </div>

      <Card>
        {loading ? (
          <Spinner className="size-9" />
        ) : articles.length === 0 ? (
          <EmptyState title="Aucun article" message="Creez votre premier article." />
        ) : (
          <div className="overflow-x-auto thin-scroll">
            <table className="w-full text-sm">
              <thead className="text-left text-xs uppercase text-slate-400 border-b border-gray-100 dark:border-slate-700">
                <tr>
                  <th className="px-5 py-3">Titre</th>
                  <th className="px-5 py-3">Categorie</th>
                  <th className="px-5 py-3">Statut</th>
                  <th className="px-5 py-3">Vues</th>
                  <th className="px-5 py-3">Date</th>
                  <th className="px-5 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((a) => (
                  <tr key={a.id} className="border-b border-gray-50 dark:border-slate-700/50 last:border-0 hover:bg-gray-50/50 dark:hover:bg-slate-700/30">
                    <td className="px-5 py-3 font-medium max-w-xs">
                      <span className="line-clamp-1">{a.title}</span>
                      {a.featured && <span className="text-[10px] text-orange-500 font-semibold">★ A la une</span>}
                    </td>
                    <td className="px-5 py-3 text-slate-500">{a.category?.name || '-'}</td>
                    <td className="px-5 py-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${STATUS_META[a.status]?.badge}`}>{STATUS_META[a.status]?.label}</span>
                    </td>
                    <td className="px-5 py-3 text-slate-500">{a.views}</td>
                    <td className="px-5 py-3 text-slate-500">{formatDate(a.publishedAt || a.createdAt)}</td>
                    <td className="px-5 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <Link to={`/articles/${a.slug}`} target="_blank" title="Voir" className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 text-slate-500"><FiExternalLink className="size-4" /></Link>
                        <button onClick={() => openEdit(a)} title="Modifier" className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 text-indigo-600"><FiEdit2 className="size-4" /></button>
                        {a.status !== 'ARCHIVED' && <button onClick={() => archive(a)} title="Archiver" className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 text-slate-500"><FiArchive className="size-4" /></button>}
                        <button onClick={() => setToDelete(a)} title="Supprimer" className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 text-red-500"><FiTrash2 className="size-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
      <Pagination pagination={pagination} onChange={setPage} />

      {/* Modal creation/edition */}
      <Modal open={modal} onClose={() => setModal(false)} title={editing ? 'Modifier l\'article' : 'Nouvel article'} size="lg">
        <form onSubmit={save} className="space-y-4">
          <Field label="Titre *">
            <input className={inputCls} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Titre de l'article" />
          </Field>

          <Field label="Contenu *">
            <RichEditor value={form.content} onChange={(v) => setForm({ ...form, content: v })} />
          </Field>

          <Field label="Extrait (resume)" hint="Laisse vide = genere automatiquement">
            <textarea className={`${inputCls} resize-none`} rows={2} value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} />
          </Field>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Categorie">
              <select className={inputCls} value={form.categoryId} onChange={(e) => setForm({ ...form, categoryId: e.target.value })}>
                <option value="">-- Aucune --</option>
                {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </Field>
            <Field label="Tags" hint="Separes par des virgules">
              <input className={inputCls} value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} placeholder="recherche, afrique, ..." />
            </Field>
          </div>

          <ImageUpload label="Image de couverture" value={form.coverImage} onChange={(v) => setForm({ ...form, coverImage: v })} />

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Statut">
              <select className={inputCls} value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
                <option value="DRAFT">Brouillon</option>
                <option value="PUBLISHED">Publie</option>
                <option value="SCHEDULED">Programme</option>
                <option value="ARCHIVED">Archive</option>
              </select>
            </Field>
            {form.status === 'SCHEDULED' && (
              <Field label="Date de publication">
                <input type="datetime-local" className={inputCls} value={form.scheduledAt} onChange={(e) => setForm({ ...form, scheduledAt: e.target.value })} />
              </Field>
            )}
          </div>

          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="size-4 accent-indigo-600" />
            Mettre a la une (page d'accueil)
          </label>

          <details className="text-sm">
            <summary className="cursor-pointer text-slate-500 font-medium">Options SEO</summary>
            <div className="space-y-3 mt-3">
              <Field label="Meta titre"><input className={inputCls} value={form.metaTitle} onChange={(e) => setForm({ ...form, metaTitle: e.target.value })} /></Field>
              <Field label="Meta description"><textarea className={`${inputCls} resize-none`} rows={2} value={form.metaDesc} onChange={(e) => setForm({ ...form, metaDesc: e.target.value })} /></Field>
            </div>
          </details>

          <div className="flex justify-end gap-3 pt-2">
            <Btn type="button" variant="outline" onClick={() => setModal(false)}>Annuler</Btn>
            <Btn type="submit" disabled={saving}>{saving ? 'Enregistrement...' : editing ? 'Mettre a jour' : 'Creer'}</Btn>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        open={!!toDelete}
        title="Supprimer l'article"
        message={`Voulez-vous vraiment supprimer "${toDelete?.title}" ? Cette action est irreversible.`}
        onConfirm={confirmDelete}
        onCancel={() => setToDelete(null)}
      />
    </div>
  );
}
