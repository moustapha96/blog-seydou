import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiChevronLeft, FiArrowRight } from 'react-icons/fi';
import { fileUrl } from '../../api/client';

// Construit la liste de slides a afficher a partir de la config de banniere.
// - Priorite aux `slides` riches definis dans l'admin.
// - Sinon repli sur les anciennes `images` (carrousel d'arriere-plan).
// - Sinon repli sur le degrade par defaut (avec le titre/sous-titre de la page).
export function resolveSlides(banner, fallbackTitle, fallbackSubtitle) {
  const slides = Array.isArray(banner?.slides) ? banner.slides.filter((s) => s && (s.src || s.type === 'gradient' || s.title)) : [];
  if (slides.length) return slides;

  const images = banner?.images?.filter(Boolean) || [];
  if (images.length) {
    return images.map((src, i) => ({
      type: 'image',
      src,
      title: i === 0 ? (banner?.title || fallbackTitle) : '',
      subtitle: i === 0 ? (banner?.subtitle || fallbackSubtitle) : '',
      align: 'center',
      overlay: 0.7,
      duration: banner?.interval || 5000,
    }));
  }

  return [{
    type: 'gradient',
    title: banner?.title || fallbackTitle,
    subtitle: banner?.subtitle || fallbackSubtitle,
    align: 'center',
    overlay: 0,
    duration: 5000,
  }];
}

const ALIGN = {
  left: 'text-left items-start',
  center: 'text-center items-center',
  right: 'text-right items-end',
};

// Lien interne (react-router) si commence par "/", sinon lien externe
function SlideCta({ text, link }) {
  if (!text) return null;
  const cls = 'inline-flex items-center gap-2 px-6 py-3 mt-6 rounded-lg bg-white text-indigo-700 font-semibold shadow-lg hover:bg-indigo-50 transition btn-glow press';
  if (link && /^https?:\/\//.test(link)) {
    return <a href={link} target="_blank" rel="noreferrer" className={cls}>{text} <FiArrowRight className="size-4" /></a>;
  }
  return <Link to={link || '#'} className={cls}>{text} <FiArrowRight className="size-4" /></Link>;
}

function SlideMedia({ slide, isActive }) {
  if (slide.type === 'video' && slide.src) {
    return (
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={fileUrl(slide.src)}
        poster={slide.poster ? fileUrl(slide.poster) : undefined}
        autoPlay
        muted
        loop
        playsInline
        preload={isActive ? 'auto' : 'none'}
      />
    );
  }
  if (slide.type === 'image' && slide.src) {
    return (
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${fileUrl(slide.src)})` }}
      />
    );
  }
  // gradient par defaut
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-blue-700 to-blue-800" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
    </>
  );
}

export default function PageBanner({ title, subtitle, breadcrumb = [], banner }) {
  const slides = useMemo(() => resolveSlides(banner, title, subtitle), [banner, title, subtitle]);
  const [index, setIndex] = useState(0);
  const hoverRef = useRef(false);

  // Reinitialise si la liste change (ex: edition en direct dans l'admin)
  useEffect(() => { setIndex((i) => (i >= slides.length ? 0 : i)); }, [slides.length]);

  // Defilement automatique base sur la duree de chaque slide
  useEffect(() => {
    if (slides.length <= 1) return undefined;
    const current = slides[index] || {};
    const delay = Math.min(30000, Math.max(1500, current.duration || 6000));
    const id = setTimeout(() => {
      if (!hoverRef.current) setIndex((i) => (i + 1) % slides.length);
    }, delay);
    return () => clearTimeout(id);
  }, [index, slides]);

  const go = (dir) => setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <section
      className="relative overflow-hidden text-white"
      onMouseEnter={() => { hoverRef.current = true; }}
      onMouseLeave={() => { hoverRef.current = false; }}
    >
      {/* Couche medias (fondu enchaine) */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === index ? 1 : 0 }}
            aria-hidden={i !== index}
          >
            <SlideMedia slide={slide} isActive={i === index} />
            {/* Voile sombre pour la lisibilite, intensite reglable par slide */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-950"
              style={{ opacity: slide.overlay ?? 0.6 }}
            />
          </div>
        ))}
      </div>

      {/* Contenu de la slide active */}
      <div className={`container mx-auto px-4 relative py-14 sm:py-16 md:py-24 ${slides.length > 1 ? 'sm:px-12 md:px-16' : ''}`}>
        {slides.map((slide, i) => {
          const alignCls = ALIGN[slide.align] || ALIGN.center;
          const wrap = slide.align === 'center' ? 'mx-auto' : (slide.align === 'right' ? 'ml-auto' : '');
          return (
            <div
              key={i}
              className={`flex flex-col ${alignCls} max-w-2xl ${wrap} transition-all duration-700 ease-out ${i === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 absolute inset-x-0 pointer-events-none'}`}
            >
              <h1 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 drop-shadow px-1">{slide.title || title}</h1>
              {(slide.subtitle || (i === 0 && subtitle)) && (
                <p className="text-indigo-100 text-base sm:text-lg max-w-2xl drop-shadow px-1">{slide.subtitle || subtitle}</p>
              )}
              <SlideCta text={slide.ctaText} link={slide.ctaLink} />
            </div>
          );
        })}

        {/* Fil d'ariane */}
        {breadcrumb.length >= 0 && (
          <nav className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-xs sm:text-sm mt-6 text-indigo-100 relative z-10 px-2">
            <Link to="/" className="hover:text-white">Accueil</Link>
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <FiChevronRight className="size-3.5" />
                {b.to ? <Link to={b.to} className="hover:text-white">{b.label}</Link> : <span className="text-white font-medium">{b.label}</span>}
              </span>
            ))}
          </nav>
        )}
      </div>

      {/* Fleches + indicateurs si plusieurs slides */}
      {slides.length > 1 && (
        <>
          <button onClick={() => go(-1)} aria-label="Slide precedente" className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 size-9 sm:size-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur flex items-center justify-center transition">
            <FiChevronLeft className="size-5" />
          </button>
          <button onClick={() => go(1)} aria-label="Slide suivante" className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 size-9 sm:size-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur flex items-center justify-center transition">
            <FiChevronRight className="size-5" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${i === index ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80 hover:scale-125'}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
