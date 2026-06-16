import { useEffect, useState } from 'react';
import { announcementApi } from '../api';

// Recupere les annonces actives (deja filtrees par date cote serveur).
export default function useAnnouncements() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let active = true;
    announcementApi
      .active()
      .then((r) => { if (active) setItems(r.data || []); })
      .catch(() => {});
    return () => { active = false; };
  }, []);

  return items;
}
