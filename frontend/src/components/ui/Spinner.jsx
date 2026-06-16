export default function Spinner({ className = 'size-8', label }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-10">
      <div className={`${className} animate-spin rounded-full border-4 border-indigo-600/20 border-t-indigo-600`} />
      {label && <p className="text-sm text-slate-500">{label}</p>}
    </div>
  );
}
