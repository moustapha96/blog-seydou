import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiBookOpen, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { FaLinkedinIn, FaTwitter, FaResearchgate, FaGoogle } from 'react-icons/fa';
import { newsletterApi } from '../../api';
import { useToast } from '../../context/ToastContext';
import { useSiteIdentity } from '../../context/SiteContext';
import { fileUrl } from '../../api/client';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { siteName, siteTagline, logo } = useSiteIdentity();

  const subscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    try {
      const res = await newsletterApi.subscribe(email.trim());
      toast.success(res.message || 'Inscription reussie !');
      setEmail('');
    } catch (err) {
      toast.error(err.message || "Echec de l'inscription");
    } finally {
      setLoading(false);
    }
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 mt-12 sm:mt-20 safe-bottom">
      <div className="container mx-auto px-4 py-10 sm:py-14">
        <div className="stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* A propos */}
          <div className="reveal reveal-left">
            <div className="flex items-center gap-2.5 mb-4">
              {logo ? (
                <img src={fileUrl(logo)} alt={siteName} className="size-10 rounded-xl object-cover" />
              ) : (
                <span className="size-10 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-700 text-white flex items-center justify-center">
                  <FiBookOpen className="size-5" />
                </span>
              )}
              <span className="leading-tight">
                <span className="block font-bold text-white">{siteName}</span>
                {siteTagline && <span className="block text-[11px] uppercase tracking-wider text-indigo-400 font-semibold">{siteTagline}</span>}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Blog universitaire dedie a la diffusion de la recherche, des publications et des actualites
              academiques de l'Universite Cheikh Anta Diop de Dakar.
            </p>
            <div className="flex gap-2 mt-5">
              {[FaLinkedinIn, FaTwitter, FaResearchgate, FaGoogle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-9 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center icon-spin-hover"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="reveal">
            <h5 className="text-white font-semibold mb-4">Navigation</h5>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Articles', '/articles'],
                ['Livres & Publications', '/livres'],
                ['Publications scientifiques', '/publications'],
                ['Encadrements', '/encadrements'],
                ['Actualites', '/actualites'],
                ['Evenements', '/evenements'],
                ['A propos', '/a-propos'],
                ['Contact', '/contact'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-slate-400 hover:text-indigo-400 transition-colors hover:translate-x-1 inline-block duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="reveal">
            <h5 className="text-white font-semibold mb-4">Contact</h5>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex gap-3">
                <FiMapPin className="size-4 mt-0.5 text-indigo-400 shrink-0" />
                Faculte des Lettres et Sciences Humaines, UCAD, Dakar, Senegal
              </li>
              <li className="flex gap-3">
                <FiMail className="size-4 mt-0.5 text-indigo-400 shrink-0" />
                contact@blog-ucad.sn
              </li>
              <li className="flex gap-3">
                <FiPhone className="size-4 mt-0.5 text-indigo-400 shrink-0" />
                +221 33 000 00 00
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="reveal reveal-right">
            <h5 className="text-white font-semibold mb-4">Newsletter</h5>
            <p className="text-sm text-slate-400 mb-4">
              Recevez les nouveaux articles et actualites directement par email.
            </p>
            <form onSubmit={subscribe} className="relative search-focus rounded-lg">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                className="w-full ps-4 pe-12 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:border-indigo-500 outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="absolute right-1.5 top-1.5 size-8 rounded-md bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center disabled:opacity-60 btn-glow press"
              >
                <FiSend className="size-4 text-white" />
              </button>
            </form>
            <a href="/rss.xml" className="inline-block mt-4 text-xs text-orange-400 hover:underline">
              Flux RSS
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>&copy; {year} {siteName} - UCAD. Tous droits reserves.</p>
          <div className="flex gap-5">
            <Link to="/confidentialite" className="hover:text-indigo-400">Confidentialite</Link>
            <Link to="/mentions-legales" className="hover:text-indigo-400">Mentions legales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
