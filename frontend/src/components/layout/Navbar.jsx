import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiSearch, FiMenu, FiX, FiMoon, FiSun, FiBookOpen, FiLock } from 'react-icons/fi';
import { useSiteIdentity } from '../../context/SiteContext';
import { fileUrl } from '../../api/client';

const links = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/articles', label: 'Articles' },
  { to: '/livres', label: 'Livres' },
  { to: '/publications', label: 'Publications' },
  { to: '/encadrements', label: 'Encadrements' },
  { to: '/actualites', label: 'Actualites' },
  { to: '/evenements', label: 'Evenements' },
  { to: '/a-propos', label: 'A propos' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  const navigate = useNavigate();
  // Identite du site configurable depuis l'admin (Portfolio > Identite du site)
  const { siteName, siteTagline, logo } = useSiteIdentity();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const locked = open || searchOpen;
    document.body.style.overflow = locked ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open, searchOpen]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const toggleDark = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    setDark(html.classList.contains('dark'));
  };

  const submitSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/recherche?q=${encodeURIComponent(search.trim())}`);
      setSearch('');
      setSearchOpen(false);
      setOpen(false);
    }
  };

  const linkClass = ({ isActive }) =>
    `nav-link link-underline px-3 py-2 text-[15px] font-medium transition-colors rounded-md ${
      isActive
        ? 'active text-indigo-600'
        : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600'
    }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 safe-top ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur shadow-sm py-2'
          : 'bg-white dark:bg-slate-900 py-3'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo (configurable depuis l'admin) */}
        <Link to="/" className="flex items-center gap-2 sm:gap-2.5 min-w-0 max-w-[52vw] xs:max-w-xs lg:max-w-none shrink group press">
          {logo ? (
            <img src={fileUrl(logo)} alt={siteName} className="size-9 sm:size-10 rounded-xl object-cover shadow-md shrink-0" />
          ) : (
            <span className="size-9 sm:size-10 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-700 text-white flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 shrink-0">
              <FiBookOpen className="size-5" />
            </span>
          )}
          <span className="leading-tight min-w-0">
            <span className="block font-bold text-[15px] sm:text-[17px] text-slate-900 dark:text-white truncate">{siteName}</span>
            {siteTagline && <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-indigo-600 font-semibold truncate">{siteTagline}</span>}
          </span>
        </Link>

        {/* Liens desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <form onSubmit={submitSearch} className="hidden md:flex items-center relative search-focus rounded-full">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher..."
              className="w-44 lg:w-52 ps-9 pe-3 py-2 text-sm rounded-full bg-gray-100 dark:bg-slate-800 border border-transparent focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 outline-none transition"
            />
            <FiSearch className="absolute left-3 size-4 text-slate-400" />
          </form>

          <button
            onClick={toggleDark}
            title="Mode sombre"
            className="size-9 inline-flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 press transition-transform hover:rotate-12 duration-300"
          >
            {dark ? <FiSun className="size-4" /> : <FiMoon className="size-4" />}
          </button>

          <Link
            to="/admin/login"
            title="Espace administration"
            className="hidden sm:inline-flex size-9 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            <FiLock className="size-4" />
          </Link>

          <button
            onClick={() => setSearchOpen((s) => !s)}
            className="md:hidden size-9 inline-flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            <FiSearch className="size-4" />
          </button>

          <button
            onClick={() => { setSearchOpen(false); setOpen((o) => !o); }}
            aria-expanded={open}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="lg:hidden size-9 inline-flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            {open ? <FiX className="size-5" /> : <FiMenu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Recherche mobile */}
      {searchOpen && (
        <form onSubmit={submitSearch} className="md:hidden container mx-auto px-4 mt-2 slide-down">
          <div className="relative">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher un article..."
              className="w-full ps-9 pe-3 py-2 text-sm rounded-full bg-gray-100 dark:bg-slate-800 outline-none"
              autoFocus
            />
            <FiSearch className="absolute left-3 top-2.5 size-4 text-slate-400" />
          </div>
        </form>
      )}

      {/* Menu mobile */}
      {open && (
        <nav className="lg:hidden container mx-auto px-4 mt-2 pb-3 flex flex-col slide-down menu-stagger max-h-[calc(100dvh-4.5rem-env(safe-area-inset-top))] overflow-y-auto overscroll-contain">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2.5 rounded-md text-[15px] font-medium ${
                  isActive ? 'bg-indigo-600/10 text-indigo-600' : 'text-slate-600 dark:text-slate-300'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/admin/login" onClick={() => setOpen(false)} className="px-3 py-2.5 text-[15px] font-medium text-indigo-600 flex items-center gap-2">
            <FiLock className="size-4" /> Administration
          </Link>
        </nav>
      )}
    </header>
  );
}
