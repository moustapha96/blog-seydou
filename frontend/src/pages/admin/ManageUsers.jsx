import { useEffect, useState, useCallback } from 'react';
import { FiPlus, FiEdit2, FiTrash2, FiSearch, FiUserCheck, FiUserX } from 'react-icons/fi';
import { userApi } from '../../api';
import { useToast } from '../../context/ToastContext';
import { useAuth } from '../../context/AuthContext';
import { PageHeader, Card, Btn, Field, inputCls } from '../../components/admin/ui';
import Modal from '../../components/admin/Modal';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import Spinner from '../../components/ui/Spinner';
import EmptyState from '../../components/ui/EmptyState';
import Pagination from '../../components/ui/Pagination';
import { formatDate } from '../../utils/format';

const ROLES = [
  { value: 'ADMIN', label: 'Administrateur' },
  { value: 'EDITOR', label: 'Editeur' },
  { value: 'READER', label: 'Lecteur' },
];

const ROLE_BADGE = {
  ADMIN: 'bg-indigo-600/10 text-indigo-600',
  EDITOR: 'bg-amber-500/10 text-amber-600',
  READER: 'bg-slate-500/10 text-slate-500',
};

const empty = { name: '', email: '', password: '', role: 'READER', bio: '', isActive: true };

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [q, setQ] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(empty);
  const [saving, setSaving] = useState(false);
  const [toDelete, setToDelete] = useState(null);
  const toast = useToast();
  const { user: me } = useAuth();

  const load = useCallback(() => {
    setLoading(true);
    userApi
      .list({ page, limit: 12, q: q || undefined, role: roleFilter || undefined })
      .then((r) => { setUsers(r.data); setPagination(r.pagination); })
      .catch((e) => toast.error(e.message))
      .finally(() => setLoading(false));
  }, [page, q, roleFilter, toast]);
  useEffect(() => { load(); }, [load]);

  const openCreate = () => { setEditing(null); setForm(empty); setModal(true); };
  const openEdit = (u) => {
    setEditing(u);
    setForm({ name: u.name, email: u.email, password: '', role: u.role, bio: u.bio || '', isActive: u.isActive });
    setModal(true);
  };

  const save = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) { toast.error('Nom et email requis'); return; }
    if (!editing && !form.password) { toast.error('Mot de passe requis'); return; }
    setSaving(true);
    try {
      if (editing) {
        const payload = { name: form.name, email: form.email, role: form.role, bio: form.bio, isActive: form.isActive };
        if (form.password) payload.password = form.password;
        await userApi.update(editing.id, payload);
        toast.success('Utilisateur mis a jour');
      } else {
        await userApi.create(form);
        toast.success('Utilisateur cree');
      }
      setModal(false); load();
    } catch (err) { toast.error(err.message); }
    finally { setSaving(false); }
  };

  const confirmDelete = async () => {
    try { await userApi.remove(toDelete.id); toast.success('Utilisateur supprime'); setToDelete(null); load(); }
    catch (e) { toast.error(e.message); }
  };

  return (
    <div>
      <PageHeader
        title="Utilisateurs"
        subtitle={`${pagination?.total ?? 0} compte(s)`}
        action={<Btn onClick={openCreate}><FiPlus className="size-4" /> Nouvel utilisateur</Btn>}
      />

      {/* Filtres */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          <input
            className={`${inputCls} pl-10`}
            placeholder="Rechercher par nom ou email..."
            value={q}
            onChange={(e) => { setPage(1); setQ(e.target.value); }}
          />
        </div>
        <select className={`${inputCls} sm:w-52`} value={roleFilter} onChange={(e) => { setPage(1); setRoleFilter(e.target.value); }}>
          <option value="">Tous les roles</option>
          {ROLES.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
        </select>
      </div>

      <Card>
        {loading ? (
          <Spinner className="size-9" />
        ) : users.length === 0 ? (
          <EmptyState icon={FiUserCheck} title="Aucun utilisateur" />
        ) : (
          <div className="divide-y divide-gray-50 dark:divide-slate-700/50">
            {users.map((u) => (
              <div key={u.id} className="flex items-center gap-3 px-5 py-3.5">
                <span className="size-10 rounded-full bg-indigo-600/10 text-indigo-600 font-semibold flex items-center justify-center shrink-0">
                  {u.name?.split(' ').map((s) => s[0]).slice(0, 2).join('').toUpperCase()}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-sm truncate">{u.name}</p>
                    {u.id === me?.id && <span className="text-[11px] px-1.5 py-0.5 rounded bg-indigo-600 text-white">Vous</span>}
                    <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${ROLE_BADGE[u.role]}`}>
                      {ROLES.find((r) => r.value === u.role)?.label || u.role}
                    </span>
                    {u.isActive ? (
                      <span className="text-[11px] text-emerald-600 inline-flex items-center gap-1"><FiUserCheck className="size-3" /> Actif</span>
                    ) : (
                      <span className="text-[11px] text-red-500 inline-flex items-center gap-1"><FiUserX className="size-3" /> Desactive</span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 truncate">{u.email}</p>
                </div>
                <div className="hidden md:block text-right text-xs text-slate-400 shrink-0">
                  <p>{u._count?.articles ?? 0} article(s)</p>
                  <p>Inscrit le {formatDate(u.createdAt)}</p>
                </div>
                <div className="flex gap-1 shrink-0">
                  <button onClick={() => openEdit(u)} className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 text-indigo-600"><FiEdit2 className="size-4" /></button>
                  <button
                    onClick={() => setToDelete(u)}
                    disabled={u.id === me?.id}
                    className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 text-red-500 disabled:opacity-30 disabled:cursor-not-allowed"
                    title={u.id === me?.id ? 'Vous ne pouvez pas vous supprimer' : 'Supprimer'}
                  >
                    <FiTrash2 className="size-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
      <Pagination pagination={pagination} onChange={setPage} />

      <Modal open={modal} onClose={() => setModal(false)} title={editing ? "Modifier l'utilisateur" : 'Nouvel utilisateur'} size="sm">
        <form onSubmit={save} className="space-y-4">
          <Field label="Nom complet *"><input className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></Field>
          <Field label="Email *"><input type="email" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></Field>
          <Field label={editing ? 'Nouveau mot de passe' : 'Mot de passe *'} hint={editing ? 'Laisser vide pour ne pas changer' : '6 caracteres minimum'}>
            <input type="password" className={inputCls} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} autoComplete="new-password" />
          </Field>
          <Field label="Role">
            <select className={inputCls} value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
              {ROLES.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
            </select>
          </Field>
          <Field label="Biographie"><textarea className={`${inputCls} resize-none`} rows={2} value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} /></Field>
          <label className="flex items-center gap-2.5 cursor-pointer select-none">
            <input type="checkbox" className="size-4 rounded accent-indigo-600" checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} />
            <span className="text-sm">Compte actif (peut se connecter)</span>
          </label>
          <div className="flex justify-end gap-3 pt-2">
            <Btn type="button" variant="outline" onClick={() => setModal(false)}>Annuler</Btn>
            <Btn type="submit" disabled={saving}>{saving ? '...' : editing ? 'Mettre a jour' : 'Creer'}</Btn>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        open={!!toDelete}
        title="Supprimer l'utilisateur"
        message={`Supprimer definitivement "${toDelete?.name}" ? Cette action est irreversible.`}
        onConfirm={confirmDelete}
        onCancel={() => setToDelete(null)}
      />
    </div>
  );
}
