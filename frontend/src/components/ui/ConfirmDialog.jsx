import { FiAlertTriangle } from 'react-icons/fi';

export default function ConfirmDialog({ open, title, message, confirmLabel = 'Confirmer', onConfirm, onCancel, loading }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[9998] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/50 safe-top" onClick={onCancel}>
      <div
        className="bg-white dark:bg-slate-800 rounded-t-2xl sm:rounded-xl shadow-xl max-w-md w-full p-5 sm:p-6 fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="size-11 rounded-full bg-red-500/15 text-red-600 flex items-center justify-center shrink-0">
            <FiAlertTriangle className="size-5" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-slate-500 text-sm mb-6">{message}</p>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 sm:gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md border border-gray-200 dark:border-slate-700 text-sm hover:bg-gray-50 dark:hover:bg-slate-700"
          >
            Annuler
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white text-sm disabled:opacity-60"
          >
            {loading ? 'Suppression...' : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
