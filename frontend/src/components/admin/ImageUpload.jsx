import { useRef, useState } from 'react';
import { FiUploadCloud, FiX, FiImage } from 'react-icons/fi';
import { uploadApi } from '../../api';
import { fileUrl } from '../../api/client';
import { useToast } from '../../context/ToastContext';

export default function ImageUpload({ value, onChange, label = 'Image', accept = 'image/*' }) {
  const ref = useRef();
  const [uploading, setUploading] = useState(false);
  const toast = useToast();

  const handleFile = async (file) => {
    if (!file) return;
    setUploading(true);
    try {
      const res = await uploadApi.single(file);
      onChange(res.url);
      toast.success('Fichier televerse');
    } catch (err) {
      toast.error(err.message || "Echec de l'upload");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      {value ? (
        <div className="relative inline-block">
          {value.match(/\.(pdf|docx?|zip)$/i) ? (
            <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-100 dark:bg-slate-700 text-sm">
              <FiImage className="size-4" /> Fichier joint
            </div>
          ) : (
            <img src={fileUrl(value)} alt="" className="h-32 rounded-lg object-cover border border-gray-200 dark:border-slate-700" />
          )}
          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute -top-2 -right-2 size-6 rounded-full bg-red-500 text-white flex items-center justify-center shadow"
          >
            <FiX className="size-3.5" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => ref.current?.click()}
          disabled={uploading}
          className="w-full border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg p-6 text-center hover:border-indigo-500 transition disabled:opacity-60"
        >
          <FiUploadCloud className="size-7 mx-auto text-slate-400 mb-2" />
          <p className="text-sm text-slate-500">{uploading ? 'Televersement...' : 'Cliquez pour televerser'}</p>
        </button>
      )}
      <input ref={ref} type="file" accept={accept} hidden onChange={(e) => handleFile(e.target.files[0])} />
    </div>
  );
}
