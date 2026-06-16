import { FiPlus, FiTrash2, FiArrowUp, FiArrowDown, FiImage, FiFilm, FiDroplet } from 'react-icons/fi';
import MediaUpload from './MediaUpload';
import { Field, inputCls } from './ui';

export const blankSlide = {
  type: 'image',
  src: '',
  poster: '',
  title: '',
  subtitle: '',
  ctaText: '',
  ctaLink: '',
  align: 'center',
  overlay: 0.6,
  duration: 6000,
};

const TYPE_TABS = [
  { key: 'image', label: 'Image', icon: FiImage },
  { key: 'video', label: 'Video', icon: FiFilm },
  { key: 'gradient', label: 'Degrade', icon: FiDroplet },
];

// Editeur d'une liste de slides (value = tableau, onChange = nouveau tableau)
export default function SlideEditor({ value = [], onChange }) {
  const update = (i, patch) => onChange(value.map((s, idx) => (idx === i ? { ...s, ...patch } : s)));
  const add = () => onChange([...value, { ...blankSlide }]);
  const remove = (i) => onChange(value.filter((_, idx) => idx !== i));
  const move = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= value.length) return;
    const next = [...value];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div className="space-y-4">
      {value.length === 0 && (
        <p className="text-sm text-slate-400 text-center py-6 border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-lg">
          Aucune slide. Cliquez sur « Ajouter une slide » pour commencer.
        </p>
      )}

      {value.map((slide, i) => (
        <div key={i} className="rounded-xl border border-gray-200 dark:border-slate-700 p-4 space-y-4 bg-gray-50/60 dark:bg-slate-900/40">
          {/* En-tete de la slide */}
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center justify-center size-7 rounded-full bg-indigo-600 text-white text-xs font-bold">{i + 1}</span>
            <div className="flex items-center gap-1">
              <button type="button" onClick={() => move(i, -1)} disabled={i === 0} className="size-8 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 disabled:opacity-30 flex items-center justify-center"><FiArrowUp className="size-4" /></button>
              <button type="button" onClick={() => move(i, 1)} disabled={i === value.length - 1} className="size-8 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 disabled:opacity-30 flex items-center justify-center"><FiArrowDown className="size-4" /></button>
              <button type="button" onClick={() => remove(i)} className="size-8 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 flex items-center justify-center"><FiTrash2 className="size-4" /></button>
            </div>
          </div>

          {/* Type de fond */}
          <div className="flex gap-1.5">
            {TYPE_TABS.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => update(i, { type: t.key })}
                className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-medium transition ${
                  slide.type === t.key ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
              >
                <t.icon className="size-4" /> {t.label}
              </button>
            ))}
          </div>

          {/* Media selon le type */}
          {slide.type === 'image' && (
            <MediaUpload value={slide.src} mediaType="image" accept="image/*" onChange={(src) => update(i, { src })} label="Image de fond" />
          )}
          {slide.type === 'video' && (
            <div className="grid sm:grid-cols-2 gap-3">
              <MediaUpload value={slide.src} mediaType="video" accept="video/*" onChange={(src) => update(i, { src })} label="Video de fond (muette, en boucle)" />
              <MediaUpload value={slide.poster} mediaType="image" accept="image/*" onChange={(poster) => update(i, { poster })} label="Image d'attente (poster)" />
            </div>
          )}

          {/* Textes */}
          <Field label="Titre">
            <input className={inputCls} value={slide.title} onChange={(e) => update(i, { title: e.target.value })} placeholder="Titre de la slide" />
          </Field>
          <Field label="Sous-titre">
            <textarea className={`${inputCls} resize-none`} rows={2} value={slide.subtitle} onChange={(e) => update(i, { subtitle: e.target.value })} />
          </Field>

          {/* Bouton d'action */}
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="Bouton (texte)" hint="Vide = pas de bouton">
              <input className={inputCls} value={slide.ctaText} onChange={(e) => update(i, { ctaText: e.target.value })} placeholder="Ex : Lire l'article" />
            </Field>
            <Field label="Bouton (lien)" hint="/evenements ou https://...">
              <input className={inputCls} value={slide.ctaLink} onChange={(e) => update(i, { ctaLink: e.target.value })} placeholder="/evenements" />
            </Field>
          </div>

          {/* Reglages d'affichage */}
          <div className="grid sm:grid-cols-3 gap-3">
            <Field label="Alignement">
              <select className={inputCls} value={slide.align} onChange={(e) => update(i, { align: e.target.value })}>
                <option value="left">Gauche</option>
                <option value="center">Centre</option>
                <option value="right">Droite</option>
              </select>
            </Field>
            <Field label={`Voile sombre (${Math.round((slide.overlay ?? 0.6) * 100)}%)`}>
              <input type="range" min="0" max="1" step="0.05" value={slide.overlay ?? 0.6} onChange={(e) => update(i, { overlay: Number(e.target.value) })} className="w-full accent-indigo-600 mt-2.5" />
            </Field>
            <Field label="Duree (s)" hint="1.5 a 30 s">
              <input type="number" min="1.5" max="30" step="0.5" className={inputCls} value={(slide.duration ?? 6000) / 1000} onChange={(e) => update(i, { duration: Math.round(Number(e.target.value) * 1000) })} />
            </Field>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={add}
        className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg border-2 border-dashed border-indigo-300 dark:border-indigo-500/40 text-indigo-600 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition"
      >
        <FiPlus className="size-4" /> Ajouter une slide
      </button>
    </div>
  );
}
