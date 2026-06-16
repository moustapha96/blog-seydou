import { useEffect, useState, useCallback } from 'react';
import { FiSave, FiLayers, FiEye } from 'react-icons/fi';
import { bannerApi } from '../../api';
import { useToast } from '../../context/ToastContext';
import { PageHeader, Card, Btn } from '../../components/admin/ui';
import SlideEditor from '../../components/admin/SlideEditor';
import PageBanner from '../../components/blog/PageBanner';
import Spinner from '../../components/ui/Spinner';

// Pages configurables (doit rester aligne avec BANNER_PAGES cote backend)
const PAGES = [
  { key: 'home', label: 'Accueil', defaultTitle: 'Bienvenue' },
  { key: 'articles', label: 'Articles', defaultTitle: 'Articles' },
  { key: 'livres', label: 'Livres', defaultTitle: 'Ouvrages' },
  { key: 'publications', label: 'Publications', defaultTitle: 'Publications scientifiques' },
  { key: 'encadrements', label: 'Encadrements', defaultTitle: 'Encadrements' },
  { key: 'actualites', label: 'Actualites', defaultTitle: 'Actualites' },
  { key: 'evenements', label: 'Evenements', defaultTitle: 'Evenements' },
  { key: 'a-propos', label: 'A propos', defaultTitle: 'A propos' },
  { key: 'contact', label: 'Contact', defaultTitle: 'Contact' },
  { key: 'recherche', label: 'Recherche', defaultTitle: 'Recherche' },
];

// Normalise les slides recus (legacy images -> slides) pour l'edition
function toSlides(banner) {
  if (Array.isArray(banner?.slides) && banner.slides.length) return banner.slides;
  const imgs = banner?.images?.filter(Boolean) || [];
  if (imgs.length) {
    return imgs.map((src, i) => ({
      type: 'image', src, poster: '',
      title: i === 0 ? (banner?.title || '') : '',
      subtitle: i === 0 ? (banner?.subtitle || '') : '',
      ctaText: '', ctaLink: '', align: 'center', overlay: 0.6,
      duration: banner?.interval || 5000,
    }));
  }
  return [];
}

export default function ManageBanners() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [active, setActive] = useState('home');
  const [banners, setBanners] = useState({});
  const [slides, setSlides] = useState([]);
  const toast = useToast();

  const load = useCallback(() => {
    setLoading(true);
    bannerApi.all().then((r) => setBanners(r.data || {})).catch((e) => toast.error(e.message)).finally(() => setLoading(false));
  }, [toast]);
  useEffect(() => { load(); }, [load]);

  useEffect(() => { setSlides(toSlides(banners[active])); }, [active, banners]);

  const save = async () => {
    setSaving(true);
    try {
      const r = await bannerApi.save(active, { slides, images: [] });
      setBanners((prev) => ({ ...prev, [active]: r.data }));
      toast.success('Slides enregistrees');
    } catch (e) { toast.error(e.message); }
    finally { setSaving(false); }
  };

  const current = PAGES.find((p) => p.key === active);

  return (
    <div>
      <PageHeader
        title="Slides des pages"
        subtitle="Composez l'en-tete de chaque page avec des slides images ou videos, titres, boutons et minutage."
        action={<Btn onClick={save} disabled={saving}><FiSave className="size-4" /> {saving ? 'Enregistrement...' : 'Enregistrer'}</Btn>}
      />

      {loading ? (
        <Spinner className="size-9" />
      ) : (
        <div className="grid lg:grid-cols-[220px_1fr] gap-5">
          {/* Selecteur de page */}
          <Card className="p-2 h-fit lg:sticky lg:top-20">
            <nav className="flex lg:flex-col gap-1 overflow-x-auto">
              {PAGES.map((p) => {
                const count = toSlides(banners[p.key]).length;
                return (
                  <button
                    key={p.key}
                    onClick={() => setActive(p.key)}
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-sm font-medium transition whitespace-nowrap shrink-0 ${
                      active === p.key ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:bg-gray-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    <FiLayers className="size-4 shrink-0" />
                    <span className="flex-1 text-left">{p.label}</span>
                    {count > 0 && (
                      <span className={`text-[11px] px-1.5 rounded-full ${active === p.key ? 'bg-white/25' : 'bg-emerald-500/15 text-emerald-600'}`}>{count}</span>
                    )}
                  </button>
                );
              })}
            </nav>
          </Card>

          <div className="space-y-5">
            {/* Apercu en direct */}
            <Card className="overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-2.5 border-b border-gray-100 dark:border-slate-700 text-xs font-medium text-slate-400">
                <FiEye className="size-3.5" /> Apercu en direct {slides.length > 1 && <span className="text-indigo-600">• {slides.length} slides</span>}
              </div>
              <PageBanner
                title={current?.defaultTitle}
                breadcrumb={active === 'home' ? [] : [{ label: current?.label }]}
                banner={{ slides }}
              />
            </Card>

            {/* Editeur de slides */}
            <Card className="p-5">
              <SlideEditor value={slides} onChange={setSlides} />
            </Card>

            <div className="flex justify-end">
              <Btn onClick={save} disabled={saving}><FiSave className="size-4" /> {saving ? 'Enregistrement...' : 'Enregistrer les slides'}</Btn>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
