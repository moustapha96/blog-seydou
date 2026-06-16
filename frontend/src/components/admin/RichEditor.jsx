import { useMemo } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

export default function RichEditor({ value, onChange, placeholder = 'Redigez votre contenu...' }) {
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['blockquote', 'code-block'],
        ['link', 'image', 'video'],
        [{ align: [] }],
        ['clean'],
      ],
    }),
    []
  );

  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden">
      <ReactQuill theme="snow" value={value} onChange={onChange} modules={modules} placeholder={placeholder} />
    </div>
  );
}
