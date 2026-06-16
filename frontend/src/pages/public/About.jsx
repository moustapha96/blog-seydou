import { useEffect, useState } from 'react';
import {
  FiBookOpen, FiAward, FiBriefcase, FiMail, FiPhone, FiMapPin, FiExternalLink, FiCheckCircle,
} from 'react-icons/fi';
import { FaLinkedinIn, FaTwitter, FaResearchgate, FaGoogle } from 'react-icons/fa';
import { profileApi } from '../../api';
import { fileUrl } from '../../api/client';
import PageBanner from '../../components/blog/PageBanner';
import Spinner from '../../components/ui/Spinner';
import useBanner from '../../hooks/useBanner';
import { usePageTitle } from '../../context/SiteContext';

const asArray = (v) => (Array.isArray(v) ? v : []);

export default function About() {
  const banner = useBanner('a-propos');
  usePageTitle('A propos');
  const [p, setP] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    profileApi.get().then((r) => setP(r.data)).finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner className="size-10" />;
  if (!p) return <PageBanner title="A propos" breadcrumb={[{ label: 'A propos' }]} banner={banner} />;

  const social = p.socialLinks || {};
  const socials = [
    [FaLinkedinIn, social.linkedin],
    [FaTwitter, social.twitter],
    [FaResearchgate, social.researchgate],
    [FaGoogle, social.googleScholar],
  ].filter(([, url]) => url);

  return (
    <div>
      <PageBanner title="A propos" subtitle="Parcours, recherches et expertise academique." breadcrumb={[{ label: 'A propos' }]} banner={banner} />

      <div className="container mx-auto px-4 py-12">
        {/* Profil */}
        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          <div className="lg:col-span-1 reveal reveal-left">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 p-4 sm:p-6 lg:sticky lg:top-24 hover-lift transition-shadow duration-300">
              <img
                src={p.photo ? fileUrl(p.photo) : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80'}
                alt={p.fullName}
                className="w-full aspect-square object-cover rounded-xl mb-5"
              />
              <h2 className="text-xl font-bold text-center">{p.fullName}</h2>
              <p className="text-indigo-600 text-sm text-center font-medium">{p.title}</p>
              <p className="text-slate-400 text-xs text-center mt-1">{p.institution}</p>

              <div className="space-y-3 mt-6 text-sm">
                {p.email && <a href={`mailto:${p.email}`} className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-indigo-600 break-all"><FiMail className="size-4 text-indigo-600 shrink-0" /> {p.email}</a>}
                {p.phone && <span className="flex items-center gap-3 text-slate-600 dark:text-slate-300 break-all"><FiPhone className="size-4 text-indigo-600 shrink-0" /> {p.phone}</span>}
                {p.address && <span className="flex items-start gap-3 text-slate-600 dark:text-slate-300"><FiMapPin className="size-4 text-indigo-600 mt-0.5 shrink-0" /> <span className="break-words">{p.address}</span></span>}
              </div>

              {socials.length > 0 && (
                <div className="flex gap-2 mt-6 justify-center">
                  {socials.map(([Icon, url], i) => (
                    <a key={i} href={url} target="_blank" rel="noreferrer" className="size-9 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-indigo-600 hover:text-white flex items-center justify-center icon-spin-hover">
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-10">
            {p.bio && (
              <section className="reveal">
                <h3 className="text-xl font-bold mb-3">Biographie</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{p.bio}</p>
              </section>
            )}

            {/* Competences */}
            {asArray(p.skills).length > 0 && (
              <section className="reveal">
                <h3 className="text-xl font-bold mb-4">Domaines d'expertise</h3>
                <div className="stagger flex flex-wrap gap-2">
                  {asArray(p.skills).map((s, i) => (
                    <span key={i} className="reveal px-4 py-2 rounded-lg bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 text-sm font-medium hover:bg-indigo-600/20 transition-colors">{s}</span>
                  ))}
                </div>
              </section>
            )}

            {/* Formation */}
            {asArray(p.education).length > 0 && (
              <Timeline title="Formation" icon={FiAward} items={asArray(p.education).map((e) => ({ title: e.degree, sub: e.school, period: e.year }))} />
            )}

            {/* Experience */}
            {asArray(p.experience).length > 0 && (
              <Timeline title="Experience" icon={FiBriefcase} items={asArray(p.experience).map((e) => ({ title: e.role, sub: e.place, period: e.period, desc: e.description }))} />
            )}
          </div>
        </div>

        {/* Recherches */}
        {asArray(p.research).length > 0 && (
          <section className="mb-16">
            <h3 className="reveal text-2xl font-bold mb-6 text-center">Projets de recherche</h3>
            <div className="stagger grid md:grid-cols-2 gap-6">
              {asArray(p.research).map((r, i) => (
                <div key={i} className="reveal hover-lift bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 p-6">
                  <FiBookOpen className="size-7 text-indigo-600 mb-3" />
                  <h4 className="font-bold mb-2">{r.title}</h4>
                  <p className="text-sm text-slate-500 mb-3">{r.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs">
                    {r.partners && <span className="text-slate-400">Partenaires : <span className="text-slate-600 dark:text-slate-300">{r.partners}</span></span>}
                    {r.funding && <span className="text-slate-400">Financement : <span className="text-slate-600 dark:text-slate-300">{r.funding}</span></span>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Publications */}
        {asArray(p.publications).length > 0 && (
          <section className="mb-16 max-w-3xl mx-auto">
            <h3 className="reveal text-2xl font-bold mb-6 text-center">Publications scientifiques</h3>
            <div className="stagger space-y-3">
              {asArray(p.publications).map((pub, i) => (
                <div key={i} className="reveal hover-lift flex items-start gap-3 bg-white dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-slate-700 p-4">
                  <FiCheckCircle className="size-5 text-indigo-600 mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium">{pub.title}</p>
                    <p className="text-sm text-slate-400">{pub.journal}{pub.year && `, ${pub.year}`}</p>
                  </div>
                  {pub.link && <a href={pub.link} target="_blank" rel="noreferrer" className="text-indigo-600"><FiExternalLink className="size-4" /></a>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Distinctions */}
        {asArray(p.awards).length > 0 && (
          <section className="max-w-3xl mx-auto">
            <h3 className="reveal text-2xl font-bold mb-6 text-center">Distinctions</h3>
            <div className="stagger grid sm:grid-cols-2 gap-4">
              {asArray(p.awards).map((a, i) => (
                <div key={i} className="reveal hover-lift flex items-center gap-3 bg-gradient-to-br from-orange-500/10 to-amber-500/5 rounded-lg p-4 border border-orange-200/40">
                  <FiAward className="size-6 text-orange-500 shrink-0" />
                  <div>
                    <p className="font-medium">{a.title}</p>
                    <p className="text-xs text-slate-400">{a.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function Timeline({ title, icon: Icon, items }) {
  return (
    <section className="reveal">
      <h3 className="text-xl font-bold mb-5 flex items-center gap-2"><Icon className="text-indigo-600" /> {title}</h3>
      <div className="relative border-l-2 border-indigo-100 dark:border-slate-700 ml-2 space-y-6">
        {items.map((it, i) => (
          <div key={i} className="reveal relative pl-6">
            <span className="absolute -left-[7px] top-1.5 size-3 rounded-full bg-indigo-600 ring-4 ring-indigo-600/20" />
            <p className="font-semibold">{it.title}</p>
            <p className="text-sm text-indigo-600">{it.sub}{it.period && <span className="text-slate-400"> · {it.period}</span>}</p>
            {it.desc && <p className="text-sm text-slate-500 mt-1">{it.desc}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
