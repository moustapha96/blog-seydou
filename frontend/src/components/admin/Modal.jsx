import { FiX } from 'react-icons/fi';

export default function Modal({ open, title, onClose, children, size = 'md' }) {
  if (!open) return null;
  const widths = { sm: 'max-w-md', md: 'max-w-2xl', lg: 'max-w-4xl' };
  return (
    <div
      className="fixed inset-0 z-[9990] flex items-end sm:items-start justify-center p-0 sm:p-4 bg-slate-900/50 overflow-y-auto safe-top"
      onClick={onClose}
    >
      <div
        className={`bg-white dark:bg-slate-800 shadow-xl w-full ${widths[size]} my-0 sm:my-8 max-h-[100dvh] sm:max-h-[calc(100dvh-4rem)] flex flex-col rounded-t-2xl sm:rounded-xl fade-up`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-100 dark:border-slate-700 shrink-0 bg-white dark:bg-slate-800 rounded-t-2xl sm:rounded-t-xl">
          <h3 className="text-base sm:text-lg font-semibold pe-4 line-clamp-2">{title}</h3>
          <button onClick={onClose} aria-label="Fermer" className="size-9 sm:size-8 inline-flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 shrink-0">
            <FiX className="size-5" />
          </button>
        </div>
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 thin-scroll">{children}</div>
      </div>
    </div>
  );
}
