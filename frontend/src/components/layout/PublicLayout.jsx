import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AnnouncementBar from './AnnouncementBar';
import ScrollToTop from '../ui/ScrollToTop';
import PageTransition from '../ui/PageTransition';

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-16 sm:pt-[68px] safe-bottom min-w-0">
        <AnnouncementBar />
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}
