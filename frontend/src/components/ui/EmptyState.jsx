import { FiInbox } from 'react-icons/fi';

export default function EmptyState({ icon: Icon = FiInbox, title = 'Rien a afficher', message }) {
  return (
    <div className="text-center py-16 pop-in">
      <div className="mx-auto size-16 rounded-full bg-indigo-600/10 text-indigo-600 flex items-center justify-center mb-4">
        <Icon className="size-7" />
      </div>
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      {message && <p className="text-slate-500 text-sm max-w-md mx-auto">{message}</p>}
    </div>
  );
}
