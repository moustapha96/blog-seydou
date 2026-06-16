import { useRef, useState } from 'react';
import { FiUploadCloud, FiX, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { uploadApi } from '../../api';
import { fileUrl } from '../../api/client';
import { useToast } from '../../context/ToastContext';

// Gestion de plusieurs images (banniere/carrousel) avec reordonnancement
export default function MultiImageUpload({ value = [], onChange, label = 'Images' }) {
  const ref = useRef();
  const [uploading, setUploading] = useState(false);
  const toast = useToast();

  const handleFiles = async (files) => {
    if (!files?.length) return;
    setUploading(true);
    try {
      const urls = [];
      for (const file of Array.from(files)) {
        // eslint-disable-next-line no-await-in-loop
        const res = await uploadApi.single(file);
        urls.push(res.url);
      }
      onChange([...value, ...urls]);
      toast.success(`${urls.length} image(s) ajoutee(s)`);
    } catch (err) {
      toast.error(err.message || "Echec de l'upload");
    } finally {
      setUploading(false);
    }
  };

  const remove = (i) => onChange(value.filter((_, idx) => idx !== i));
  const move = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= value.length) return;
    const next = [...value];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>

      {value.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
          {value.map((img, i) => (
            <div key={i} className="relative group rounded-lg overflow-hidden border border-gray-200 dark:border-slate-700">
              <img src={fileUrl(img)} alt="" className="w-full h-28 object-cover" />
              <span className="absolute top-1.5 left-1.5 size-5 rounded-full bg-black/60 text-white text-[11px] flex items-center justify-center">{i + 1}</span>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-1.5">
                <button type="button" onClick={() => move(i, -1)} disabled={i === 0} className="size-7 rounded-full bg-white/90 text-slate-700 flex items-center justify-center disabled:opacity-30"><FiArrowLeft className="size-3.5" /></button>
                <button type="button" onClick={() => remove(i)} className="size-7 rounded-full bg-red-500 text-white flex items-center justify-center"><FiX className="size-3.5" /></button>
                <button type="button" onClick={() => move(i, 1)} disabled={i === value.length - 1} className="size-7 rounded-full bg-white/90 text-slate-700 flex items-center justify-center disabled:opacity-30"><FiArrowRight className="size-3.5" /></button>
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => ref.current?.click()}
        disabled={uploading}
        className="w-full border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg p-5 text-center hover:border-indigo-500 transition disabled:opacity-60"
      >
        <FiUploadCloud className="size-6 mx-auto text-slate-400 mb-1.5" />
        <p className="text-sm text-slate-500">{uploading ? 'Televersement...' : 'Ajouter une ou plusieurs images'}</p>
        <p className="text-xs text-slate-400 mt-0.5">2 images ou plus = carrousel automatique</p>
      </button>
      <input ref={ref} type="file" accept="image/*" multiple hidden onChange={(e) => handleFiles(e.target.files)} />
    </div>
  );
}
