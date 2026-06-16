import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { contactApi } from '../../api';
import { useToast } from '../../context/ToastContext';
import PageBanner from '../../components/blog/PageBanner';
import useBanner from '../../hooks/useBanner';
import { usePageTitle } from '../../context/SiteContext';

export default function Contact() {
  const banner = useBanner('contact');
  usePageTitle('Contact');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await contactApi.send(form);
      toast.success(res.message || 'Message envoye !');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      toast.error(err.errors?.[0]?.message || err.message || "Echec de l'envoi");
    } finally {
      setLoading(false);
    }
  };

  const field = 'w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-slate-700 outline-none focus:ring-2 ring-indigo-500/40';

  return (
    <div>
      <PageBanner title="Contact" subtitle="Une question, une collaboration ? Ecrivez-moi." breadcrumb={[{ label: 'Contact' }]} banner={banner} />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="stagger space-y-4">
            {[
              { icon: FiMail, label: 'Email', value: 'contact@blog-ucad.sn', href: 'mailto:contact@blog-ucad.sn' },
              { icon: FiPhone, label: 'Telephone', value: '+221 33 000 00 00', href: 'tel:+22133000000' },
              { icon: FiMapPin, label: 'Adresse', value: 'FLSH, UCAD, Dakar, Senegal' },
            ].map((c, i) => (
              <div key={i} className="reveal hover-lift bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 p-5 flex items-start gap-4">
                <span className="size-11 rounded-lg bg-indigo-600/10 text-indigo-600 flex items-center justify-center shrink-0">
                  <c.icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs text-slate-400">{c.label}</p>
                  {c.href ? <a href={c.href} className="font-medium hover:text-indigo-600">{c.value}</a> : <p className="font-medium">{c.value}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-2 reveal reveal-right bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 p-7 hover-lift transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-5">Envoyez-moi un message</h3>
            <form onSubmit={submit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Nom complet *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} />
                <input required type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} />
              </div>
              <input placeholder="Sujet" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={field} />
              <textarea required rows={6} placeholder="Votre message *" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${field} resize-none`} />
              <button disabled={loading} className="btn-glow press inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium disabled:opacity-60">
                <FiSend className="size-4" /> {loading ? 'Envoi...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
