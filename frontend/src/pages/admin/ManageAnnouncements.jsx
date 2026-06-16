import { useEffect, useState, useCallback } from 'react';
import { FiPlus, FiEdit2, FiTrash2, FiInfo, FiCheckCircle, FiAlertTriangle, FiCalendar } from 'react-icons/fi';
import { announcementApi } from '../../api';
import { useToast } from '../../context/ToastContext';
import { PageHeader, Card, Btn, Field, inputCls } from '../../components/admin/ui';
import { formatDate } from '../../utils/format';
import Modal from '../../components/admin/Modal';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import Spinner from '../../components/ui/Spinner';
import EmptyState from '../../components/ui/EmptyState';

const TYPES = [
  { key: 'info', label: 'Information', icon: FiInfo, cls: 'bg-indigo-600' },
  { key: 'success', label: 'Succes', icon: FiCheckCircle, cls: 'bg-emerald-600' },
  { key: 'warning', label: 'Alerte', icon: FiAlertTriangle, cls: 'bg-amber-500' },
  { key: 'event', label: 'Evenement', icon: FiCalendar, cls: 'bg-fuchsia-600' },
];

const empty = { message: '', type: 'info', link: '', linkLabel: '', active: true, dismissible: true, position: 0, startsAt: '', endsAt: '' };

// ISO -> valeur d'input datetime-local (heure locale)
const toLocalInput = (iso) => {
  if (!iso) return '';
  const d = new Date(iso);
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

export default function ManageAnnouncements() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(empty);
  const [saving, setSaving] = useState(false);
  const [toDelete, setToDelete] = useState(null);
  const toast = useToast();

  const load = useCallback(() => {
    setLoading(true);
    announcementApi.all().then((r) => setItems(r.data || [])).catch((e) => toast.error(e.message)).finally(() => setLoading(false));
  }, [toast]);
  useEffect(() => { load(); }, [load]);

  const openCreate = () => { setEditing(null); setForm({ ...empty, position: items.length }); setModal(true); };
  const openEdit = (a) => {
    setEditing(a);
    setForm({
      message: a.message, type: a.type, link: a.link || '', linkLabel: a.linkLabel || '',
      active: a.active, dismissible: a.dismissible, position: a.position,
      startsAt: toLocalInput(a.startsAt), endsAt: toLocalInput(a.endsAt),
    });
    setModal(true);
  };

  const save = async (e) => {
    e.preventDefault();
    if (!form.message.trim()) { toast.error('Le message est requis'); return; }
    setSaving(true);
    const payload = {
      ...form,
      startsAt: form.startsAt ? new Date(form.startsAt).toISOString() : null,
      endsAt: form.endsAt ? new Date(form.endsAt).toISOString() : null,
    };
    try {
      if (editing) { await announcementApi.update(editing.id, payload); toast.success('Annonce mise a jour'); }
      else { await announcementApi.create(payload); toast.success('Annonce creee'); }
      setModal(false); load();
    } catch (err) { toast.error(err.errors?.[0]?.message || err.message); }
    finally { setSaving(false); }
  };

  const toggleActive = async (a) => {
    try { await announcementApi.update(a.id, { active: !a.active }); load(); }
    catch (e) { toast.error(e.message); }
  };

  const confirmDelete = async () => {
    try { await announcementApi.remove(toDelete.id); toast.success('Supprimee'); setToDelete(null); load(); }
    catch (e) { toast.error(e.message); }
  };

  return (
    <div>
      <PageHeader
        title="Annonces"
        subtitle="Bandeau d'annonces affiche en haut du site (rotation si plusieurs annonces actives)."
        action={<Btn onClick={openCreate}><FiPlus className="size-4" /> Nouvelle annonce</Btn>}
      />

      <Card>
        {loading ? (
          <Spinner className="size-9" />
        ) : items.length === 0 ? (
          <EmptyState title="Aucune annonce" />
        ) : (
          <div className="divide-y divide-gray-50 dark:divide-slate-700/50">
            {items.map((a) => {
              const t = TYPES.find((x) => x.key === a.type) || TYPES[0];
              return (
                <div key={a.id} className="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50/50 dark:hover:bg-slate-700/30">
                  <span className={`inline-flex items-center justify-center size-8 rounded-lg text-white shrink-0 ${t.cls}`}><t.icon className="size-4" /></span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm line-clamp-1">{a.message}</p>
                    <p className="text-xs text-slate-400">
                      {t.label}
                      {a.startsAt && ` · des le ${formatDate(a.startsAt)}`}
                      {a.endsAt && ` · jusqu'au ${formatDate(a.endsAt)}`}
                    </p>
                  </div>
                  {/* Interrupteur actif/inactif */}
                  <button onClick={() => toggleActive(a)} title={a.active ? 'Active' : 'Inactive'} className={`relative w-10 h-5 rounded-full transition shrink-0 ${a.active ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-slate-600'}`}>
                    <span className={`absolute top-0.5 size-4 rounded-full bg-white transition-all ${a.active ? 'left-5' : 'left-0.5'}`} />
                  </button>
                  <button onClick={() => openEdit(a)} className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 text-indigo-600"><FiEdit2 className="size-4" /></button>
                  <button onClick={() => setToDelete(a)} className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 text-red-500"><FiTrash2 className="size-4" /></button>
                </div>
              );
            })}
          </div>
        )}
      </Card>

      <Modal open={modal} onClose={() => setModal(false)} title={editing ? "Modifier l'annonce" : 'Nouvelle annonce'} size="lg">
        <form onSubmit={save} className="space-y-4">
          <Field label="Message *" hint="280 caracteres maximum">
            <textarea className={`${inputCls} resize-none`} rows={2} maxLength={280} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Ex : Conference inaugurale le 12 octobre a l'amphi A" />
          </Field>

          <Field label="Type / couleur">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {TYPES.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setForm({ ...form, type: t.key })}
                  className={`inline-flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-medium transition ${form.type === t.key ? `${t.cls} text-white` : 'bg-gray-100 dark:bg-slate-700 text-slate-500'}`}
                >
                  <t.icon className="size-4" /> {t.label}
                </button>
              ))}
            </div>
          </Field>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Lien (optionnel)" hint="/evenements ou https://...">
              <input className={inputCls} value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} placeholder="/evenements" />
            </Field>
            <Field label="Libelle du lien">
              <input className={inputCls} value={form.linkLabel} onChange={(e) => setForm({ ...form, linkLabel: e.target.value })} placeholder="En savoir plus" />
            </Field>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Afficher a partir de" hint="Vide = immediatement">
              <input type="datetime-local" className={inputCls} value={form.startsAt} onChange={(e) => setForm({ ...form, startsAt: e.target.value })} />
            </Field>
            <Field label="Masquer apres" hint="Vide = indefiniment">
              <input type="datetime-local" className={inputCls} value={form.endsAt} onChange={(e) => setForm({ ...form, endsAt: e.target.value })} />
            </Field>
          </div>

          <div className="flex flex-wrap gap-5 pt-1">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" className="accent-indigo-600 size-4" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} />
              Active (visible sur le site)
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" className="accent-indigo-600 size-4" checked={form.dismissible} onChange={(e) => setForm({ ...form, dismissible: e.target.checked })} />
              Le visiteur peut la fermer
            </label>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <Btn type="button" variant="outline" onClick={() => setModal(false)}>Annuler</Btn>
            <Btn type="submit" disabled={saving}>{saving ? 'Enregistrement...' : editing ? 'Mettre a jour' : 'Creer'}</Btn>
          </div>
        </form>
      </Modal>

      <ConfirmDialog open={!!toDelete} title="Supprimer l'annonce" message="Cette annonce sera definitivement supprimee." onConfirm={confirmDelete} onCancel={() => setToDelete(null)} />
    </div>
  );
}
