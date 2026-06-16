import { useEffect, useState, useCallback } from 'react';
import { FiPlus, FiEdit2, FiTrash2, FiMapPin, FiCalendar } from 'react-icons/fi';
import { eventApi } from '../../api';
import { useToast } from '../../context/ToastContext';
import { PageHeader, Card, Btn, Field, inputCls } from '../../components/admin/ui';
import { formatDate } from '../../utils/format';
import Modal from '../../components/admin/Modal';
import ImageUpload from '../../components/admin/ImageUpload';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import Spinner from '../../components/ui/Spinner';
import EmptyState from '../../components/ui/EmptyState';

const empty = { title: '', description: '', location: '', startDate: '', endDate: '', link: '', image: '' };

export default function ManageEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(empty);
  const [saving, setSaving] = useState(false);
  const [toDelete, setToDelete] = useState(null);
  const toast = useToast();

  const load = useCallback(() => {
    setLoading(true);
    eventApi.list().then((r) => setEvents(r.data)).finally(() => setLoading(false));
  }, []);
  useEffect(() => { load(); }, [load]);

  const openCreate = () => { setEditing(null); setForm(empty); setModal(true); };
  const openEdit = (ev) => {
    setEditing(ev);
    setForm({
      title: ev.title, description: ev.description || '', location: ev.location || '',
      startDate: ev.startDate ? ev.startDate.slice(0, 16) : '', endDate: ev.endDate ? ev.endDate.slice(0, 16) : '',
      link: ev.link || '', image: ev.image || '',
    });
    setModal(true);
  };

  const save = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.startDate) { toast.error('Titre et date de debut requis'); return; }
    setSaving(true);
    const payload = {
      ...form,
      startDate: new Date(form.startDate).toISOString(),
      endDate: form.endDate ? new Date(form.endDate).toISOString() : null,
    };
    try {
      if (editing) { await eventApi.update(editing.id, payload); toast.success('Evenement mis a jour'); }
      else { await eventApi.create(payload); toast.success('Evenement cree'); }
      setModal(false); load();
    } catch (err) { toast.error(err.errors?.[0]?.message || err.message); }
    finally { setSaving(false); }
  };

  const confirmDelete = async () => { try { await eventApi.remove(toDelete.id); toast.success('Supprime'); setToDelete(null); load(); } catch (e) { toast.error(e.message); } };

  return (
    <div>
      <PageHeader title="Evenements" subtitle="Conferences, seminaires et rencontres" action={<Btn onClick={openCreate}><FiPlus className="size-4" /> Nouvel evenement</Btn>} />

      {loading ? (
        <Spinner className="size-9" />
      ) : events.length === 0 ? (
        <Card className="p-6"><EmptyState title="Aucun evenement" /></Card>
      ) : (
        <div className="space-y-3">
          {events.map((ev) => (
            <Card key={ev.id} className="p-4 flex items-center gap-4">
              <div className="size-12 rounded-lg bg-indigo-600/10 text-indigo-600 flex flex-col items-center justify-center shrink-0">
                <FiCalendar className="size-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm line-clamp-1">{ev.title}</p>
                <p className="text-xs text-slate-400 flex items-center gap-3 mt-0.5">
                  <span>{formatDate(ev.startDate)}</span>
                  {ev.location && <span className="flex items-center gap-1"><FiMapPin className="size-3" /> {ev.location}</span>}
                </p>
              </div>
              <button onClick={() => openEdit(ev)} className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 text-indigo-600"><FiEdit2 className="size-4" /></button>
              <button onClick={() => setToDelete(ev)} className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 text-red-500"><FiTrash2 className="size-4" /></button>
            </Card>
          ))}
        </div>
      )}

      <Modal open={modal} onClose={() => setModal(false)} title={editing ? 'Modifier l\'evenement' : 'Nouvel evenement'}>
        <form onSubmit={save} className="space-y-4">
          <Field label="Titre *"><input className={inputCls} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></Field>
          <Field label="Description"><textarea className={`${inputCls} resize-none`} rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></Field>
          <Field label="Lieu"><input className={inputCls} value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} /></Field>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Date de debut *"><input type="datetime-local" className={inputCls} value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} /></Field>
            <Field label="Date de fin"><input type="datetime-local" className={inputCls} value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} /></Field>
          </div>
          <Field label="Lien"><input className={inputCls} value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} placeholder="https://..." /></Field>
          <ImageUpload label="Affiche" value={form.image} onChange={(v) => setForm({ ...form, image: v })} />
          <div className="flex justify-end gap-3 pt-2">
            <Btn type="button" variant="outline" onClick={() => setModal(false)}>Annuler</Btn>
            <Btn type="submit" disabled={saving}>{saving ? 'Enregistrement...' : editing ? 'Mettre a jour' : 'Creer'}</Btn>
          </div>
        </form>
      </Modal>

      <ConfirmDialog open={!!toDelete} title="Supprimer l'evenement" message={`Supprimer "${toDelete?.title}" ?`} onConfirm={confirmDelete} onCancel={() => setToDelete(null)} />
    </div>
  );
}
