import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaLink } from 'react-icons/fa';
import { useToast } from '../../context/ToastContext';

export default function SocialShare({ title }) {
  const toast = useToast();
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const enc = encodeURIComponent(url);
  const encT = encodeURIComponent(title || '');

  const links = [
    { Icon: FaFacebookF, href: `https://www.facebook.com/sharer/sharer.php?u=${enc}`, cls: 'hover:bg-[#1877f2]' },
    { Icon: FaTwitter, href: `https://twitter.com/intent/tweet?url=${enc}&text=${encT}`, cls: 'hover:bg-[#1da1f2]' },
    { Icon: FaLinkedinIn, href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc}`, cls: 'hover:bg-[#0a66c2]' },
    { Icon: FaWhatsapp, href: `https://wa.me/?text=${encT}%20${enc}`, cls: 'hover:bg-[#25d366]' },
  ];

  const copy = () => {
    navigator.clipboard.writeText(url);
    toast.success('Lien copie !');
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-slate-500 me-1">Partager :</span>
      {links.map(({ Icon, href, cls }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noreferrer"
          className={`size-9 rounded-full bg-gray-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-white flex items-center justify-center transition ${cls}`}
        >
          <Icon className="size-4" />
        </a>
      ))}
      <button
        onClick={copy}
        className="size-9 rounded-full bg-gray-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-indigo-600 hover:text-white flex items-center justify-center transition"
      >
        <FaLink className="size-4" />
      </button>
    </div>
  );
}
