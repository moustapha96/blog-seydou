/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useCallback } from 'react';
import { FiCheckCircle, FiAlertCircle, FiInfo, FiX } from 'react-icons/fi';

const ToastContext = createContext(null);

let idSeq = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const remove = useCallback((id) => setToasts((t) => t.filter((x) => x.id !== id)), []);

  const push = useCallback((message, type = 'success') => {
    const id = ++idSeq;
    setToasts((t) => [...t, { id, message, type }]);
    setTimeout(() => remove(id), 4000);
  }, [remove]);

  const toast = {
    success: (m) => push(m, 'success'),
    error: (m) => push(m, 'error'),
    info: (m) => push(m, 'info'),
  };

  const meta = {
    success: { icon: FiCheckCircle, cls: 'border-emerald-500 text-emerald-600' },
    error: { icon: FiAlertCircle, cls: 'border-red-500 text-red-600' },
    info: { icon: FiInfo, cls: 'border-indigo-500 text-indigo-600' },
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="fixed top-[max(1.25rem,env(safe-area-inset-top))] right-[max(1.25rem,env(safe-area-inset-right))] z-[9999] flex flex-col gap-2 w-80 max-w-[calc(100vw-2rem)]">
        {toasts.map((t) => {
          const M = meta[t.type] || meta.info;
          const Icon = M.icon;
          return (
            <div
              key={t.id}
              className={`fade-up flex items-start gap-3 bg-white dark:bg-slate-800 shadow-lg rounded-lg border-l-4 ${M.cls} px-4 py-3`}
            >
              <Icon className="size-5 mt-0.5 shrink-0" />
              <p className="text-sm text-slate-700 dark:text-slate-200 flex-1">{t.message}</p>
              <button onClick={() => remove(t.id)} className="text-slate-400 hover:text-slate-600">
                <FiX className="size-4" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
