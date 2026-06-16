import { useEffect, useState } from 'react';
import { FiMapPin, FiCalendar, FiClock, FiExternalLink } from 'react-icons/fi';
import { eventApi } from '../../api';
import { fileUrl } from '../../api/client';
import { formatDate } from '../../utils/format';
import PageBanner from '../../components/blog/PageBanner';
import Spinner from '../../components/ui/Spinner';
import EmptyState from '../../components/ui/EmptyState';
import useBanner from '../../hooks/useBanner';
import { usePageTitle } from '../../context/SiteContext';

export default function Events() {
  const banner = useBanner('evenements');
  usePageTitle('Evenements');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('upcoming');

  useEffect(() => {
    setLoading(true);
    eventApi
      .list(filter === 'upcoming' ? { upcoming: 'true' } : {})
      .then((r) => setEvents(r.data))
      .finally(() => setLoading(false));
  }, [filter]);

  const isPast = (d) => new Date(d) < new Date();

  return (
    <div>
      <PageBanner title="Evenements" subtitle="Conferences, seminaires et rencontres academiques." breadcrumb={[{ label: 'Evenements' }]} banner={banner} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="reveal flex justify-center gap-2 mb-10">
          {[['upcoming', 'A venir'], ['all', 'Tous']].map(([v, l]) => (
            <button
              key={v}
              onClick={() => setFilter(v)}
              className={`filter-pill px-5 py-2 rounded-full text-sm font-medium ${
                filter === v ? 'filter-pill-active bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        {loading ? (
          <Spinner className="size-10" />
        ) : events.length === 0 ? (
          <EmptyState icon={FiCalendar} title="Aucun evenement" message="Aucun evenement programme pour le moment." />
        ) : (
          <div className="stagger relative border-l-2 border-indigo-100 dark:border-slate-700 ml-3 space-y-8">
            {events.map((ev) => (
              <div key={ev.id} className="reveal relative pl-8">
                <span className={`timeline-dot absolute -left-[9px] top-1.5 size-4 rounded-full border-2 border-white dark:border-slate-900 ${isPast(ev.startDate) ? 'bg-slate-300' : 'bg-indigo-600'}`} />
                <div className="hover-lift bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 overflow-hidden transition-shadow duration-300 img-hover">
                  {ev.image && <img src={fileUrl(ev.image)} alt="" className="w-full aspect-[21/9] object-cover" />}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${isPast(ev.startDate) ? 'bg-slate-100 text-slate-500 dark:bg-slate-700' : 'bg-emerald-500/15 text-emerald-600'}`}>
                        {isPast(ev.startDate) ? 'Termine' : 'A venir'}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{ev.title}</h3>
                    {ev.description && <p className="text-sm text-slate-500 mb-3">{ev.description}</p>}
                    <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5"><FiCalendar className="size-4 text-indigo-600" /> {formatDate(ev.startDate)}{ev.endDate && ` - ${formatDate(ev.endDate)}`}</span>
                      <span className="flex items-center gap-1.5"><FiClock className="size-4 text-indigo-600" /> {formatDate(ev.startDate, 'HH:mm')}</span>
                      {ev.location && <span className="flex items-center gap-1.5"><FiMapPin className="size-4 text-indigo-600" /> {ev.location}</span>}
                    </div>
                    {ev.link && (
                      <a href={ev.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-sm text-indigo-600 font-medium hover:underline">
                        Plus d'informations <FiExternalLink className="size-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
