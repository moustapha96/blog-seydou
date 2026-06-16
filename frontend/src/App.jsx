import { Routes, Route } from 'react-router-dom';
import useScrollReveal from './hooks/useScrollReveal';

// Layouts
import PublicLayout from './components/layout/PublicLayout';
import AdminLayout from './components/admin/AdminLayout';
import RequireAuth from './components/admin/RequireAuth';

// Pages publiques
import Home from './pages/public/Home';
import Articles from './pages/public/Articles';
import ArticleDetail from './pages/public/ArticleDetail';
import Books from './pages/public/Books';
import BookDetail from './pages/public/BookDetail';
import News from './pages/public/News';
import NewsDetail from './pages/public/NewsDetail';
import Events from './pages/public/Events';
import About from './pages/public/About';
import Contact from './pages/public/Contact';
import Publications from './pages/public/Publications';
import PublicationDetail from './pages/public/PublicationDetail';
import Supervisions from './pages/public/Supervisions';
import Search from './pages/public/Search';
import { Privacy, Legal, NotFound } from './pages/public/StaticPage';

// Pages admin
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ManageArticles from './pages/admin/ManageArticles';
import ManageComments from './pages/admin/ManageComments';
import ManageBooks from './pages/admin/ManageBooks';
import ManageNews from './pages/admin/ManageNews';
import ManageEvents from './pages/admin/ManageEvents';
import ManageCategories from './pages/admin/ManageCategories';
import ManageMessages from './pages/admin/ManageMessages';
import ManageSubscribers from './pages/admin/ManageSubscribers';
import ManageProfile from './pages/admin/ManageProfile';
import ManageUsers from './pages/admin/ManageUsers';
import ManageAudit from './pages/admin/ManageAudit';
import ManageBanners from './pages/admin/ManageBanners';
import ManageAnnouncements from './pages/admin/ManageAnnouncements';
import ManagePublications from './pages/admin/ManagePublications';
import ManageSupervisions from './pages/admin/ManageSupervisions';

export default function App() {
  useScrollReveal(); // anime les elements .reveal a leur entree dans le viewport
  return (
    <Routes>
      {/* Site public */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticleDetail />} />
        <Route path="/livres" element={<Books />} />
        <Route path="/livres/:slug" element={<BookDetail />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/publications/:slug" element={<PublicationDetail />} />
        <Route path="/encadrements" element={<Supervisions />} />
        <Route path="/actualites" element={<News />} />
        <Route path="/actualites/:slug" element={<NewsDetail />} />
        <Route path="/evenements" element={<Events />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recherche" element={<Search />} />
        <Route path="/confidentialite" element={<Privacy />} />
        <Route path="/mentions-legales" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Authentification admin */}
      <Route path="/admin/login" element={<Login />} />

      {/* Espace admin protege */}
      <Route
        path="/admin"
        element={
          <RequireAuth>
            <AdminLayout />
          </RequireAuth>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="articles" element={<ManageArticles />} />
        <Route path="commentaires" element={<ManageComments />} />
        <Route path="livres" element={<ManageBooks />} />
        <Route path="publications" element={<ManagePublications />} />
        <Route path="encadrements" element={<ManageSupervisions />} />
        <Route path="actualites" element={<ManageNews />} />
        <Route path="evenements" element={<ManageEvents />} />
        <Route path="categories" element={<ManageCategories />} />
        <Route path="messages" element={<ManageMessages />} />
        <Route path="abonnes" element={<ManageSubscribers />} />
        <Route path="bannieres" element={<ManageBanners />} />
        <Route path="annonces" element={<ManageAnnouncements />} />
        <Route path="profil" element={<ManageProfile />} />
        <Route path="utilisateurs" element={<ManageUsers />} />
        <Route path="audit" element={<ManageAudit />} />
      </Route>
    </Routes>
  );
}
