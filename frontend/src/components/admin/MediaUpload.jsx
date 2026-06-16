import { useRef, useState } from 'react';
import { FiUploadCloud, FiX, FiFilm, FiImage, FiLink } from 'react-icons/fi';
import { uploadApi } from '../../api';
import { fileUrl } from '../../api/client';
import { useToast } from '../../context/ToastContext';

// Selecteur d'un media unique : upload image/video OU saisie d'une URL externe.
// onChange recoit { src, type } ou ('image' | 'video') deduit du fichier.
export default function MediaUpload({ value = '', mediaType = 'image', onChange, accept = 'image/*,video/*', label }) {
  const ref = useRef();
  const [uploading, setUploading] = useState(false);
  const [showUrl, setShowUrl] = useState(false);
  const [url, setUrl] = useState('');
  const toast = useToast();

  const handleFile = async (file) => {
    if (!file) return;
    setUploading(true);
    try {
      const res = await uploadApi.single(file);
      const f = res.files?.[0];
      onChange(res.url, f?.type || (file.type.startsWith('video') ? 'video' : 'image'));
      toast.success('Media televerse');
    } catch (err) {
      toast.error(err.message || "Echec de l'upload");
    } finally {
      setUploading(false);
    }
  };

  const applyUrl = () => {
    if (!url.trim()) return;
    const t = /\.(mp4|webm|ogg|mov)(\?|$)/i.test(url) ? 'video' : 'image';
    onChange(url.trim(), t);
    setUrl('');
    setShowUrl(false);
  };

  const isVideo = mediaType === 'video';

  return (
    <div>
      {label && <label className="block text-sm font-medium mb-1.5">{label}</label>}

      {value ? (
        <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900">
          {isVideo ? (
            <video src={fileUrl(value)} className="w-full h-36 object-cover" muted />
          ) : (
            <img src={fileUrl(value)} alt="" className="w-full h-36 object-cover" />
          )}
          <span className="absolute top-1.5 left-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 text-white text-[11px]">
            {isVideo ? <FiFilm className="size-3" /> : <FiImage className="size-3" />} {isVideo ? 'Video' : 'Image'}
          </span>
          <button type="button" onClick={() => onChange('', mediaType)} className="absolute top-1.5 right-1.5 size-7 rounded-full bg-red-500 text-white flex items-center justify-center">
            <FiX className="size-3.5" />
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <button
            type="button"
            onClick={() => ref.current?.click()}
            disabled={uploading}
            className="w-full border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg p-4 text-center hover:border-indigo-500 transition disabled:opacity-60"
          >
            <FiUploadCloud className="size-5 mx-auto text-slate-400 mb-1" />
            <p className="text-sm text-slate-500">{uploading ? 'Televersement...' : 'Image ou video (mp4, webm)'}</p>
          </button>

          {showUrl ? (
            <div className="flex gap-2">
              <input
                className="flex-1 px-3 py-2 rounded-lg bg-gray-50 dark:bg-slate-700 border border-transparent focus:border-indigo-500 outline-none text-sm"
                placeholder="https://..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && applyUrl()}
              />
              <button type="button" onClick={applyUrl} className="px-3 rounded-lg bg-indigo-600 text-white text-sm">OK</button>
            </div>
          ) : (
            <button type="button" onClick={() => setShowUrl(true)} className="inline-flex items-center gap-1.5 text-xs text-indigo-600 hover:underline">
              <FiLink className="size-3.5" /> Utiliser une URL externe
            </button>
          )}
        </div>
      )}

      <input ref={ref} type="file" accept={accept} hidden onChange={(e) => handleFile(e.target.files?.[0])} />
    </div>
  );
}
