import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { profileApi } from '../api';
import { applyThemeColor } from '../utils/theme';

// Valeurs de repli si aucun profil n'est encore configure
const DEFAULTS = { siteName: 'Pr. Seydou KHOUMA', siteTagline: 'Blog UCAD', logo: null };

// Fournit l'identite du site (logo, nom, sous-titre) recuperee une seule fois
// depuis le profil public. Partage par la Navbar, le Footer, l'admin, etc.
const SiteContext = createContext({ site: null, identity: DEFAULTS, refresh: () => {}, setSite: () => {} });

export const useSite = () => useContext(SiteContext);

// Identite resolue (avec replis), pratique pour les composants de marque
export function useSiteIdentity() {
  const { site } = useSite();
  return {
    siteName: site?.siteName || site?.fullName || DEFAULTS.siteName,
    siteTagline: site?.siteTagline ?? DEFAULTS.siteTagline,
    logo: site?.logo || null,
  };
}

// Definit le titre de l'onglet : "<pageTitle> | <siteName>" (ou juste le nom du site)
export function usePageTitle(pageTitle) {
  const { siteName } = useSiteIdentity();
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} | ${siteName}` : siteName;
  }, [pageTitle, siteName]);
}

export function SiteProvider({ children }) {
  const [site, setSite] = useState(null);

  const refresh = useCallback(() => {
    profileApi.get().then((r) => {
      setSite(r.data);
      try { localStorage.setItem('ucad_theme', r.data?.themeColor || ''); } catch { /* ignore */ }
    }).catch(() => {});
  }, []);

  // Applique tout de suite le theme mis en cache (evite le flash de couleur au chargement)
  useEffect(() => {
    try { applyThemeColor(localStorage.getItem('ucad_theme') || undefined); } catch { /* ignore */ }
    refresh();
  }, [refresh]);

  // Re-applique la couleur principale quand le profil change (ex: apres edition admin)
  useEffect(() => {
    if (site) applyThemeColor(site.themeColor);
  }, [site]);

  // Le titre de l'onglet est gere par chaque page via usePageTitle()
  // (pas d'effet global ici, sinon il ecraserait le titre de la page).

  return (
    <SiteContext.Provider value={{ site, refresh, setSite }}>
      {children}
    </SiteContext.Provider>
  );
}
