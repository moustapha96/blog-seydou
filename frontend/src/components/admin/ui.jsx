// Petits composants reutilisables pour l'admin
export function PageHeader({ title, subtitle, action }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        {subtitle && <p className="text-sm text-slate-400 mt-0.5">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 ${className}`}>
      {children}
    </div>
  );
}

export const inputCls =
  'w-full px-3.5 py-2.5 rounded-lg bg-gray-50 dark:bg-slate-700 border border-transparent focus:border-indigo-500 outline-none text-sm';

export function Field({ label, children, hint }) {
  return (
    <div>
      {label && <label className="block text-sm font-medium mb-1.5">{label}</label>}
      {children}
      {hint && <p className="text-xs text-slate-400 mt-1">{hint}</p>}
    </div>
  );
}

export function Btn({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    outline: 'border border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    soft: 'bg-indigo-600/10 text-indigo-600 hover:bg-indigo-600/20',
  };
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition disabled:opacity-60 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
