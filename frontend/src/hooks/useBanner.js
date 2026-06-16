import { useEffect, useState } from 'react';
import { bannerApi } from '../api';

// Recupere la configuration de banniere d'une page (titre/sous-titre/images).
// Renvoie null tant que rien n'est configure : la page utilise alors ses valeurs par defaut.
export default function useBanner(page) {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    let active = true;
    bannerApi
      .get(page)
      .then((r) => { if (active) setBanner(r.data); })
      .catch(() => {});
    return () => { active = false; };
  }, [page]);

  return banner;
}
