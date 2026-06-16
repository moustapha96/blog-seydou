import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Pagination({ pagination, onChange }) {
  if (!pagination || pagination.totalPages <= 1) return null;
  const { page, totalPages } = pagination;

  const pages = [];
  const windowSize = 3;
  const start = Math.max(1, Math.min(page - 1, totalPages - windowSize + 1));
  const end = Math.min(totalPages, start + windowSize - 1);
  for (let i = start; i <= end; i++) pages.push(i);

  const btn = 'size-9 sm:size-9 min-w-9 inline-flex items-center justify-center rounded-md border text-sm transition press';

  return (
    <div className="reveal flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-8 sm:mt-10 px-2">
      <button
        disabled={!pagination.hasPrev}
        onClick={() => onChange(page - 1)}
        aria-label="Page precedente"
        className={`${btn} border-gray-200 dark:border-slate-700 disabled:opacity-40 hover:border-indigo-600 hover:text-indigo-600`}
      >
        <FiChevronLeft />
      </button>
      {start > 1 && (
        <>
          <button onClick={() => onChange(1)} className={`${btn} border-gray-200 dark:border-slate-700 hover:border-indigo-600 hover:text-indigo-600`}>1</button>
          {start > 2 && <span className="px-1 text-slate-400">…</span>}
        </>
      )}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          aria-current={p === page ? 'page' : undefined}
          className={`${btn} ${
            p === page
              ? 'filter-pill-active bg-indigo-600 border-indigo-600 text-white'
              : 'border-gray-200 dark:border-slate-700 hover:border-indigo-600 hover:text-indigo-600 hover:-translate-y-0.5'
          }`}
        >
          {p}
        </button>
      ))}
      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span className="px-1 text-slate-400">…</span>}
          <button onClick={() => onChange(totalPages)} className={`${btn} border-gray-200 dark:border-slate-700 hover:border-indigo-600 hover:text-indigo-600`}>{totalPages}</button>
        </>
      )}
      <button
        disabled={!pagination.hasNext}
        onClick={() => onChange(page + 1)}
        aria-label="Page suivante"
        className={`${btn} border-gray-200 dark:border-slate-700 disabled:opacity-40 hover:border-indigo-600 hover:text-indigo-600`}
      >
        <FiChevronRight />
      </button>
    </div>
  );
}
