import { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  FiGrid, FiFileText, FiMessageSquare, FiBook, FiBell, FiCalendar, FiTag,
  FiMail, FiUsers, FiUser, FiLogOut, FiMenu, FiExternalLink, FiBookOpen,
  FiImage, FiUserCheck, FiShield, FiLayers, FiVolume2, FiAward,
} from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import { useSiteIdentity, usePageTitle } from '../../context/SiteContext';
import { fileUrl } from '../../api/client';
import ScrollToTop from '../ui/ScrollToTop';

const nav = [
  { to: '/admin', label: 'Tableau de bord', icon: FiGrid, end: true },
  { to: '/admin/articles', label: 'Articles', icon: FiFileText },
  { to: '/admin/commentaires', label: 'Commentaires', icon: FiMessageSquare },
  { to: '/admin/livres', label: 'Livres', icon: FiBook },
  { to: '/admin/publications', label: 'Publications', icon: FiFileText },
  { to: '/admin/encadrements', label: 'Encadrements', icon: FiAward },
  { to: '/admin/actualites', label: 'Actualites', icon: FiBell },
  { to: '/admin/evenements', label: 'Evenements', icon: FiCalendar },
  { to: '/admin/categories', label: 'Categories', icon: FiTag },
  { to: '/admin/messages', label: 'Messages', icon: FiMail },
  { to: '/admin/abonnes', label: 'Abonnes', icon: FiUsers },
  { to: '/admin/bannieres', label: 'Slides des pages', icon: FiLayers },
  { to: '/admin/annonces', label: 'Annonces', icon: FiVolume2 },
  { to: '/admin/profil', label: 'Portfolio', icon: FiUser },
  { to: '/admin/utilisateurs', label: 'Utilisateurs', icon: FiUserCheck, adminOnly: true },
  { to: '/admin/audit', label: "Audit", icon: FiShield, adminOnly: true },
];

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const { siteName, logo } = useSiteIdentity();
  usePageTitle('Administration');
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const doLogout = () => { logout(); navigate('/admin/login'); };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${
      isActive ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25' : 'text-slate-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800'
    }`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex">
      <ScrollToTop />

      {/* Overlay mobile */}
      {open && <div className="fixed inset-0 bg-slate-900/50 z-30 lg:hidden" onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 z-40 h-screen w-64 bg-white dark:bg-slate-800 border-r border-gray-100 dark:border-slate-700 flex flex-col transition-transform ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-5 border-b border-gray-100 dark:border-slate-700 flex items-center gap-2.5">
          {logo ? (
            <img src={fileUrl(logo)} alt={siteName} className="size-9 rounded-lg object-cover" />
          ) : (
            <span className="size-9 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-700 text-white flex items-center justify-center">
              <FiBookOpen className="size-5" />
            </span>
          )}
          <div className="leading-tight">
            <p className="font-bold text-sm">Administration</p>
            <p className="text-[11px] text-indigo-600 font-semibold truncate max-w-[150px]">{siteName}</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto thin-scroll p-3 space-y-1">
          {nav.filter((n) => !n.adminOnly || user?.role === 'ADMIN').map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end} onClick={() => setOpen(false)} className={linkClass}>
              <n.icon className="size-[18px]" /> {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-3 border-t border-gray-100 dark:border-slate-700 space-y-1">
          <Link to="/" target="_blank" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-slate-500 hover:bg-gray-100 dark:hover:bg-slate-700">
            <FiExternalLink className="size-[18px]" /> Voir le site
          </Link>
          <button onClick={doLogout} className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10">
            <FiLogOut className="size-[18px]" /> Deconnexion
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur border-b border-gray-100 dark:border-slate-700 px-4 py-3 flex items-center justify-between safe-top">
          <button onClick={() => setOpen(true)} className="lg:hidden size-9 inline-flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">
            <FiMenu className="size-5" />
          </button>
          <div className="hidden lg:block" />
          <div className="flex items-center gap-3">
            <div className="text-right leading-tight">
              <p className="text-sm font-semibold">{user?.name}</p>
              <p className="text-xs text-slate-400">{user?.role}</p>
            </div>
            <span className="size-9 rounded-full bg-indigo-600/10 text-indigo-600 font-semibold flex items-center justify-center">
              {user?.name?.split(' ').map((s) => s[0]).slice(0, 2).join('')}
            </span>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
