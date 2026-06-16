import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiBookOpen, FiAward, FiUsers, FiFileText } from 'react-icons/fi';
import { articleApi, bookApi, newsApi, profileApi } from '../../api';
import { fileUrl } from '../../api/client';
import ArticleCard from '../../components/blog/ArticleCard';
import BookCard from '../../components/blog/BookCard';
import Spinner from '../../components/ui/Spinner';
import { formatDate } from '../../utils/format';
import useBanner from '../../hooks/useBanner';
import { usePageTitle } from '../../context/SiteContext';

function SectionTitle({ overline, title, link, linkLabel }) {
  return (
    <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
      <div>
        {overline && <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">{overline}</span>}
        <h2 className="text-2xl md:text-3xl font-bold mt-1">{title}</h2>
      </div>
      {link && (
        <Link to={link} className="inline-flex items-center gap-1 text-indigo-600 font-medium hover:gap-2 transition-all duration-300 group self-start sm:self-auto shrink-0">
          {linkLabel || 'Voir tout'} <FiArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      )}
    </div>
  );
}

export default function Home() {
  const [data, setData] = useState({ featured: [], latest: [], books: [], news: [], profile: null });
  const [loading, setLoading] = useState(true);
  usePageTitle(); // titre de l'onglet = nom du site

  // Fond d'accueil configurable depuis l'admin (Slides > Accueil) : images et/ou videos
  const banner = useBanner('home');
  const heroSlides = (Array.isArray(banner?.slides) && banner.slides.length)
    ? banner.slides.filter((s) => s?.src && (s.type === 'image' || s.type === 'video'))
    : (banner?.images?.filter(Boolean) || []).map((src) => ({ type: 'image', src, duration: banner?.interval || 5000 }));
  const [heroIdx, setHeroIdx] = useState(0);
  useEffect(() => {
    if (heroSlides.length <= 1) return undefined;
    const delay = heroSlides[heroIdx]?.duration || banner?.interval || 5000;
    const id = setTimeout(() => setHeroIdx((i) => (i + 1) % heroSlides.length), delay);
    return () => clearTimeout(id);
  }, [heroIdx, heroSlides, banner?.interval]);

  useEffect(() => {
    Promise.all([
      articleApi.list({ featured: true, limit: 3 }),
      articleApi.list({ limit: 6 }),
      bookApi.list({ limit: 4, featured: true }),
      newsApi.list({ limit: 3 }),
      profileApi.get().catch(() => ({ data: null })),
    ])
      .then(([featured, latest, books, news, profile]) => {
        setData({
          featured: featured.data,
          latest: latest.data,
          books: books.data.length ? books.data : [],
          news: news.data,
          profile: profile.data,
        });
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner className="size-10" label="Chargement..." />;

  const p = data.profile;

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 overflow-x-clip">
        {/* Fond carrousel configurable depuis l'admin (Slides > Accueil) */}
        {heroSlides.length > 0 && (
          <div className="absolute inset-0">
            {heroSlides.map((s, i) => (
              s.type === 'video' ? (
                <video
                  key={i}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                  style={{ opacity: i === heroIdx ? 1 : 0 }}
                  src={fileUrl(s.src)}
                  poster={s.poster ? fileUrl(s.poster) : undefined}
                  autoPlay muted loop playsInline
                />
              ) : (
                <div
                  key={i}
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
                  style={{ backgroundImage: `url(${fileUrl(s.src)})`, opacity: i === heroIdx ? 1 : 0 }}
                />
              )
            ))}
            {/* Voile clair pour conserver la lisibilite du texte sombre */}
            <div className="absolute inset-0 bg-white/75 dark:bg-slate-900/80" />
          </div>
        )}
        <div className="container mx-auto px-4 py-14 sm:py-16 md:py-24 pb-20 sm:pb-16 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">
          <div className="hero-stagger">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600/10 text-indigo-600 text-sm font-medium mb-5">
              <FiAward className="size-4" /> {p?.institution || 'Universite Cheikh Anta Diop de Dakar'}
            </span>
            <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold leading-tight mb-5">
              {p?.fullName || 'Pr. Seydou KHOUMA'}
              <span className="block text-indigo-600 text-2xl md:text-3xl mt-2 font-semibold">
                {p?.title || 'Professeur & Chercheur'}
              </span>
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8 line-clamp-4">
              {p?.bio || "Bienvenue sur mon blog universitaire, espace de partage de mes recherches, publications et reflexions academiques."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/articles" className="btn-glow press inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg shadow-indigo-600/25 transition">
                Lire les articles <FiArrowRight className="size-4" />
              </Link>
              <Link to="/a-propos" className="press inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 hover:border-indigo-600 hover:text-indigo-600 font-medium transition-all hover:-translate-y-0.5">
                Mon parcours
              </Link>
            </div>
          </div>

          <div className="relative hero-stagger pb-8 sm:pb-0">
            <div className="aspect-[4/5] max-w-[280px] xs:max-w-xs sm:max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl img-hover">
              <img
                src={p?.photo ? fileUrl(p.photo) : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80'}
                alt={p?.fullName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-6 sm:-bottom-5 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-3 sm:p-4 flex items-center gap-3 floaty hover-lift w-[calc(100%-2rem)] sm:w-auto max-w-xs">
              <span className="size-11 rounded-lg bg-orange-500/15 text-orange-500 flex items-center justify-center">
                <FiBookOpen className="size-5" />
              </span>
              <div>
                <p className="font-bold text-lg leading-none">{data.books.length || '3'}+ ouvrages</p>
                <p className="text-xs text-slate-400">publies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container mx-auto px-4 -mt-4 relative z-10">
        <div className="stagger grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: FiFileText, value: `${data.latest.length}+`, label: 'Articles' },
            { icon: FiBookOpen, value: `${data.books.length || 3}+`, label: 'Ouvrages' },
            { icon: FiAward, value: `${p?.awards?.length || 2}`, label: 'Distinctions' },
            { icon: FiUsers, value: `${p?.experience?.length || 15}+`, label: "Annees d'experience" },
          ].map((s, i) => (
            <div key={i} className="reveal reveal-zoom hover-lift bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-5 text-center">
              <s.icon className="size-6 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DERNIERS ARTICLES */}
      <section className="container mx-auto px-4 py-16">
        <SectionTitle overline="Le blog" title="Derniers articles" link="/articles" />
        <div className="stagger grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.latest.slice(0, 6).map((a) => <ArticleCard key={a.id} article={a} />)}
        </div>
      </section>

      {/* LIVRES */}
      {data.books.length > 0 && (
        <section className="bg-gray-50 dark:bg-slate-800/50 py-16">
          <div className="container mx-auto px-4">
            <SectionTitle overline="Bibliographie" title="Livres & publications" link="/livres" />
            <div className="stagger grid grid-cols-2 lg:grid-cols-4 gap-6">
              {data.books.map((b) => <BookCard key={b.id} book={b} />)}
            </div>
          </div>
        </section>
      )}

      {/* ACTUALITES */}
      {data.news.length > 0 && (
        <section className="container mx-auto px-4 py-16">
          <SectionTitle overline="A la une" title="Actualites recentes" link="/actualites" />
          <div className="stagger grid md:grid-cols-3 gap-6">
            {data.news.map((n) => (
              <Link key={n.id} to={`/actualites/${n.slug}`} className="reveal hover-lift group bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-100 dark:border-slate-700">
                <span className="text-xs text-orange-500 font-semibold">{formatDate(n.publishedAt)}</span>
                <h3 className="font-bold text-lg mt-2 mb-2 line-clamp-2 group-hover:text-indigo-600 transition">{n.title}</h3>
                <p className="text-sm text-slate-500 line-clamp-3">{n.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-indigo-600 text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  Lire la suite <FiArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA newsletter */}
      <section className="container mx-auto px-4 pb-16">
        <div className="reveal reveal-zoom animate-gradient bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-700 rounded-2xl p-10 md:p-14 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Restez informe de mes publications</h2>
            <p className="text-indigo-100 max-w-xl mx-auto mb-6">
              Inscrivez-vous a la newsletter pour recevoir les nouveaux articles et actualites academiques.
            </p>
            <Link to="/contact" className="btn-glow press inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-white text-indigo-700 font-semibold hover:bg-indigo-50 transition">
              Me contacter <FiArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
