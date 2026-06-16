import { useEffect, useState } from 'react';
import { FiPlus, FiTrash2, FiSave } from 'react-icons/fi';
import { profileApi } from '../../api';
import { useToast } from '../../context/ToastContext';
import { useSite } from '../../context/SiteContext';
import { PageHeader, Card, Btn, Field, inputCls } from '../../components/admin/ui';
import ImageUpload from '../../components/admin/ImageUpload';
import Spinner from '../../components/ui/Spinner';
import { PALETTES, PALETTE_LABELS, DEFAULT_THEME, applyThemeColor } from '../../utils/theme';

const arr = (v) => (Array.isArray(v) ? v : []);

// Editeur generique de liste d'objets
function ListEditor({ title, items, fields, onChange }) {
  const add = () => onChange([...items, Object.fromEntries(fields.map((f) => [f.key, '']))]);
  const remove = (i) => onChange(items.filter((_, idx) => idx !== i));
  const set = (i, key, val) => onChange(items.map((it, idx) => (idx === i ? { ...it, [key]: val } : it)));

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">{title}</h3>
        <button type="button" onClick={add} className="text-sm text-indigo-600 inline-flex items-center gap-1"><FiPlus className="size-4" /> Ajouter</button>
      </div>
      <div className="space-y-3">
        {items.length === 0 && <p className="text-sm text-slate-400">Aucun element.</p>}
        {items.map((it, i) => (
          <div key={i} className="relative grid sm:grid-cols-2 gap-3 p-4 rounded-lg bg-gray-50 dark:bg-slate-700/40">
            {fields.map((f) => (
              <div key={f.key} className={f.full ? 'sm:col-span-2' : ''}>
                {f.textarea ? (
                  <textarea placeholder={f.label} value={it[f.key] || ''} onChange={(e) => set(i, f.key, e.target.value)} className={`${inputCls} resize-none`} rows={2} />
                ) : (
                  <input placeholder={f.label} value={it[f.key] || ''} onChange={(e) => set(i, f.key, e.target.value)} className={inputCls} />
                )}
              </div>
            ))}
            <button type="button" onClick={() => remove(i)} className="absolute -top-2 -right-2 size-6 rounded-full bg-red-500 text-white flex items-center justify-center"><FiTrash2 className="size-3" /></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ManageProfile() {
  const [p, setP] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const toast = useToast();
  const { refresh } = useSite();

  useEffect(() => {
    profileApi.get().then((r) => setP(r.data || {
      fullName: '', title: '', institution: 'Universite Cheikh Anta Diop de Dakar (UCAD)', bio: '', photo: '',
      email: '', phone: '', address: '', education: [], experience: [], skills: [], research: [],
      publications: [], awards: [], socialLinks: {},
    })).finally(() => setLoading(false));
  }, []);

  const upd = (patch) => setP({ ...p, ...patch });

  const save = async () => {
    setSaving(true);
    try {
      const res = await profileApi.save(p);
      setP(res.data);
      refresh(); // met a jour le logo/nom dans la navbar et le footer
      toast.success('Portfolio enregistre');
    } catch (err) { toast.error(err.message); }
    finally { setSaving(false); }
  };

  if (loading) return <Spinner className="size-10" />;

  const social = p.socialLinks || {};
  const setSocial = (k, v) => upd({ socialLinks: { ...social, [k]: v } });

  // Couleur du theme : applique en direct (apercu immediat sur toute l'interface)
  const theme = p.themeColor || DEFAULT_THEME;
  const setTheme = (v) => { upd({ themeColor: v }); applyThemeColor(v); };
  const isCustom = !PALETTES[theme];

  return (
    <div>
      <PageHeader
        title="Portfolio du professeur"
        subtitle="Informations affichees sur la page 'A propos'"
        action={<Btn onClick={save} disabled={saving}><FiSave className="size-4" /> {saving ? 'Enregistrement...' : 'Enregistrer'}</Btn>}
      />

      <div className="space-y-6">
        {/* Identite du site : logo + nom affiches dans l'en-tete et le pied de page */}
        <Card className="p-6 space-y-4">
          <div>
            <h3 className="font-semibold">Identite du site</h3>
            <p className="text-sm text-slate-400 mt-0.5">Logo et nom affiches dans la barre de navigation et le pied de page de tout le site.</p>
          </div>
          <div className="grid lg:grid-cols-[200px_1fr] gap-6 items-start">
            <ImageUpload label="Logo (carre, ~256px)" value={p.logo} onChange={(v) => upd({ logo: v })} />
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Nom du site" hint="Vide = nom complet du professeur">
                  <input className={inputCls} value={p.siteName || ''} onChange={(e) => upd({ siteName: e.target.value })} placeholder={p.fullName || 'Pr. Seydou KHOUMA'} />
                </Field>
                <Field label="Sous-titre du logo" hint="Vide = « Blog UCAD »">
                  <input className={inputCls} value={p.siteTagline || ''} onChange={(e) => upd({ siteTagline: e.target.value })} placeholder="Blog UCAD" />
                </Field>
              </div>
              {/* Apercu */}
              <div>
                <label className="block text-sm font-medium mb-1.5">Apercu</label>
                <div className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                  {p.logo ? (
                    <img src={p.logo.startsWith('http') ? p.logo : `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${p.logo}`} alt="logo" className="size-10 rounded-xl object-cover shadow-md" />
                  ) : (
                    <span className="size-10 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-700 text-white flex items-center justify-center shadow-md font-bold">B</span>
                  )}
                  <span className="leading-tight">
                    <span className="block font-bold text-[17px]">{p.siteName || p.fullName || 'Pr. Seydou KHOUMA'}</span>
                    <span className="block text-[11px] uppercase tracking-wider text-indigo-600 font-semibold">{p.siteTagline || 'Blog UCAD'}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Couleur principale du site */}
        <Card className="p-6 space-y-4">
          <div>
            <h3 className="font-semibold">Couleur principale</h3>
            <p className="text-sm text-slate-400 mt-0.5">Applique a tout le site : boutons, liens, accents. L'apercu est immediat.</p>
          </div>

          {/* Palettes predefinies */}
          <div className="flex flex-wrap gap-2.5">
            {Object.keys(PALETTES).map((key) => (
              <button
                key={key}
                type="button"
                title={PALETTE_LABELS[key] || key}
                onClick={() => setTheme(key)}
                className={`size-9 rounded-full transition ring-offset-2 ring-offset-white dark:ring-offset-slate-800 ${theme === key ? 'ring-2 ring-slate-900 dark:ring-white scale-110' : 'hover:scale-105'}`}
                style={{ backgroundColor: PALETTES[key][600] }}
              />
            ))}
          </div>

          {/* Couleur personnalisee (hex) */}
          <div className="flex flex-wrap items-end gap-4 pt-1">
            <Field label="Couleur personnalisee" hint="Choisissez une teinte exacte">
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={isCustom ? (theme.startsWith('#') ? theme : `#${theme}`) : PALETTES[theme][600]}
                  onChange={(e) => setTheme(e.target.value)}
                  className="size-10 rounded-lg border border-gray-200 dark:border-slate-600 bg-transparent cursor-pointer p-0.5"
                />
                <input
                  className={`${inputCls} w-32 font-mono`}
                  value={isCustom ? theme : ''}
                  placeholder="#4f46e5"
                  onChange={(e) => { const v = e.target.value.trim(); if (/^#?[0-9a-fA-F]{6}$/.test(v)) setTheme(v.startsWith('#') ? v : `#${v}`); else upd({ themeColor: v }); }}
                />
              </div>
            </Field>
            <button type="button" onClick={() => setTheme(DEFAULT_THEME)} className="text-sm text-slate-500 hover:text-indigo-600 underline underline-offset-2 pb-2.5">
              Reinitialiser (Indigo)
            </button>
          </div>

          {/* Apercu des composants */}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-gray-100 dark:border-slate-700">
            <span className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium">Bouton</span>
            <span className="px-4 py-2 rounded-lg bg-indigo-600/10 text-indigo-600 text-sm font-medium">Accent doux</span>
            <a className="text-indigo-600 text-sm font-medium hover:underline cursor-pointer">Lien colore</a>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold">Badge</span>
          </div>
        </Card>

        {/* Identite */}
        <Card className="p-6 space-y-4">
          <h3 className="font-semibold">Identite</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Nom complet"><input className={inputCls} value={p.fullName || ''} onChange={(e) => upd({ fullName: e.target.value })} /></Field>
            <Field label="Titre"><input className={inputCls} value={p.title || ''} onChange={(e) => upd({ title: e.target.value })} placeholder="Professeur titulaire" /></Field>
            <Field label="Institution"><input className={inputCls} value={p.institution || ''} onChange={(e) => upd({ institution: e.target.value })} /></Field>
            <Field label="Email"><input className={inputCls} value={p.email || ''} onChange={(e) => upd({ email: e.target.value })} /></Field>
            <Field label="Telephone"><input className={inputCls} value={p.phone || ''} onChange={(e) => upd({ phone: e.target.value })} /></Field>
            <Field label="Adresse"><input className={inputCls} value={p.address || ''} onChange={(e) => upd({ address: e.target.value })} /></Field>
          </div>
          <Field label="Biographie"><textarea className={`${inputCls} resize-none`} rows={4} value={p.bio || ''} onChange={(e) => upd({ bio: e.target.value })} /></Field>
          <ImageUpload label="Photo" value={p.photo} onChange={(v) => upd({ photo: v })} />
        </Card>

        {/* Reseaux */}
        <Card className="p-6 space-y-4">
          <h3 className="font-semibold">Reseaux academiques</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="LinkedIn"><input className={inputCls} value={social.linkedin || ''} onChange={(e) => setSocial('linkedin', e.target.value)} /></Field>
            <Field label="Twitter / X"><input className={inputCls} value={social.twitter || ''} onChange={(e) => setSocial('twitter', e.target.value)} /></Field>
            <Field label="ResearchGate"><input className={inputCls} value={social.researchgate || ''} onChange={(e) => setSocial('researchgate', e.target.value)} /></Field>
            <Field label="Google Scholar"><input className={inputCls} value={social.googleScholar || ''} onChange={(e) => setSocial('googleScholar', e.target.value)} /></Field>
          </div>
        </Card>

        {/* Competences */}
        <Card className="p-6">
          <Field label="Domaines d'expertise" hint="Separes par des virgules">
            <input className={inputCls} value={arr(p.skills).join(', ')} onChange={(e) => upd({ skills: e.target.value.split(',').map((s) => s.trim()).filter(Boolean) })} />
          </Field>
        </Card>

        <Card className="p-6">
          <ListEditor title="Formation" items={arr(p.education)} onChange={(v) => upd({ education: v })}
            fields={[{ key: 'degree', label: 'Diplome', full: true }, { key: 'school', label: 'Etablissement' }, { key: 'year', label: 'Annee' }]} />
        </Card>

        <Card className="p-6">
          <ListEditor title="Experience" items={arr(p.experience)} onChange={(v) => upd({ experience: v })}
            fields={[{ key: 'role', label: 'Poste' }, { key: 'place', label: 'Lieu' }, { key: 'period', label: 'Periode' }, { key: 'description', label: 'Description', textarea: true, full: true }]} />
        </Card>

        <Card className="p-6">
          <ListEditor title="Projets de recherche" items={arr(p.research)} onChange={(v) => upd({ research: v })}
            fields={[{ key: 'title', label: 'Titre', full: true }, { key: 'description', label: 'Description', textarea: true, full: true }, { key: 'partners', label: 'Partenaires' }, { key: 'funding', label: 'Financement' }]} />
        </Card>

        <Card className="p-6">
          <ListEditor title="Publications" items={arr(p.publications)} onChange={(v) => upd({ publications: v })}
            fields={[{ key: 'title', label: 'Titre', full: true }, { key: 'journal', label: 'Revue / Editeur' }, { key: 'year', label: 'Annee' }, { key: 'link', label: 'Lien', full: true }]} />
        </Card>

        <Card className="p-6">
          <ListEditor title="Distinctions" items={arr(p.awards)} onChange={(v) => upd({ awards: v })}
            fields={[{ key: 'title', label: 'Distinction' }, { key: 'year', label: 'Annee' }]} />
        </Card>

        <div className="flex justify-end">
          <Btn onClick={save} disabled={saving}><FiSave className="size-4" /> {saving ? 'Enregistrement...' : 'Enregistrer le portfolio'}</Btn>
        </div>
      </div>
    </div>
  );
}
