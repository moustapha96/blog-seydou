import { useState } from 'react';
import { FiMessageSquare, FiCornerDownRight, FiSend } from 'react-icons/fi';
import { commentApi } from '../../api';
import { useToast } from '../../context/ToastContext';
import { fromNow } from '../../utils/format';

function Avatar({ name }) {
  const initials = (name || '?').split(' ').map((s) => s[0]).slice(0, 2).join('').toUpperCase();
  return (
    <span className="size-10 rounded-full bg-indigo-600/10 text-indigo-600 font-semibold flex items-center justify-center shrink-0">
      {initials}
    </span>
  );
}

function CommentItem({ comment }) {
  return (
    <div className="flex gap-3">
      <Avatar name={comment.authorName} />
      <div className="flex-1">
        <div className="bg-gray-50 dark:bg-slate-800 rounded-xl px-4 py-3">
          <div className="flex items-center justify-between">
            <h5 className="font-semibold text-sm">{comment.authorName}</h5>
            <span className="text-xs text-slate-400">{fromNow(comment.createdAt)}</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 whitespace-pre-line">{comment.content}</p>
        </div>
        {comment.replies?.length > 0 && (
          <div className="mt-3 ml-4 space-y-3 border-l-2 border-indigo-100 dark:border-slate-700 pl-4">
            {comment.replies.map((r) => (
              <div key={r.id} className="flex gap-2">
                <FiCornerDownRight className="size-4 text-indigo-400 mt-2 shrink-0" />
                <div className="flex-1 bg-indigo-50/60 dark:bg-slate-700/40 rounded-lg px-3 py-2">
                  <div className="flex items-center justify-between">
                    <h6 className="font-semibold text-sm text-indigo-700 dark:text-indigo-300">{r.authorName}</h6>
                    <span className="text-xs text-slate-400">{fromNow(r.createdAt)}</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">{r.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CommentSection({ articleId, comments = [] }) {
  const [form, setForm] = useState({ authorName: '', authorEmail: '', content: '' });
  const [submitting, setSubmitting] = useState(false);
  const toast = useToast();

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await commentApi.create({ articleId, ...form });
      toast.success(res.message || 'Commentaire envoye, en attente de validation.');
      setForm({ authorName: '', authorEmail: '', content: '' });
    } catch (err) {
      toast.error(err.message || "Echec de l'envoi");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-12">
      <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
        <FiMessageSquare className="text-indigo-600" /> Commentaires ({comments.length})
      </h3>

      {comments.length > 0 ? (
        <div className="space-y-5 mb-10">
          {comments.map((c) => <CommentItem key={c.id} comment={c} />)}
        </div>
      ) : (
        <p className="text-slate-400 text-sm mb-10">Soyez le premier a commenter cet article.</p>
      )}

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 p-6">
        <h4 className="font-semibold mb-4">Laisser un commentaire</h4>
        <p className="text-xs text-slate-400 mb-4">
          Votre commentaire sera publie apres validation. Votre email reste confidentiel.
        </p>
        <form onSubmit={submit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              placeholder="Votre nom *"
              value={form.authorName}
              onChange={(e) => setForm({ ...form, authorName: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-slate-700 outline-none focus:ring-2 ring-indigo-500/40"
            />
            <input
              type="email"
              placeholder="Email (optionnel)"
              value={form.authorEmail}
              onChange={(e) => setForm({ ...form, authorEmail: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-slate-700 outline-none focus:ring-2 ring-indigo-500/40"
            />
          </div>
          <textarea
            required
            rows={4}
            placeholder="Votre message *"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-slate-700 outline-none focus:ring-2 ring-indigo-500/40 resize-none"
          />
          <button
            disabled={submitting}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium disabled:opacity-60"
          >
            <FiSend className="size-4" /> {submitting ? 'Envoi...' : 'Publier'}
          </button>
        </form>
      </div>
    </div>
  );
}
