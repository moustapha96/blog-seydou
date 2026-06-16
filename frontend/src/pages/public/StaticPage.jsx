import PageBanner from '../../components/blog/PageBanner';
import { usePageTitle } from '../../context/SiteContext';

export function Privacy() {
  usePageTitle('Politique de confidentialite');
  return (
    <div>
      <PageBanner title="Politique de confidentialite" breadcrumb={[{ label: 'Confidentialite' }]} />
      <div className="container mx-auto px-4 py-12 max-w-3xl article-content">
        <p>Le present site respecte la confidentialite des donnees personnelles de ses visiteurs.</p>
        <h2>Donnees collectees</h2>
        <p>Lors de l'inscription a la newsletter ou de l'envoi d'un commentaire, nous collectons uniquement les informations strictement necessaires (nom, email). Votre email n'est jamais affiche publiquement ni transmis a des tiers.</p>
        <h2>Cookies</h2>
        <p>Le site peut utiliser des cookies techniques pour ameliorer votre experience de navigation.</p>
        <h2>Vos droits</h2>
        <p>Conformement a la reglementation, vous disposez d'un droit d'acces, de rectification et de suppression de vos donnees. Pour l'exercer, contactez-nous via la page Contact.</p>
      </div>
    </div>
  );
}

export function Legal() {
  usePageTitle('Mentions legales');
  return (
    <div>
      <PageBanner title="Mentions legales" breadcrumb={[{ label: 'Mentions legales' }]} />
      <div className="container mx-auto px-4 py-12 max-w-3xl article-content">
        <h2>Editeur</h2>
        <p>Ce blog est edite par le Pr. Seydou KHOUMA, Universite Cheikh Anta Diop de Dakar (UCAD).</p>
        <h2>Hebergement</h2>
        <p>Le site est heberge sur un serveur dedie. Contact disponible via la page Contact.</p>
        <h2>Propriete intellectuelle</h2>
        <p>L'ensemble des contenus (articles, images, publications) est protege par le droit d'auteur. Toute reproduction sans autorisation est interdite.</p>
      </div>
    </div>
  );
}

export function NotFound() {
  usePageTitle('Page introuvable');
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-7xl font-bold text-indigo-600">404</h1>
      <h2 className="text-2xl font-bold mt-4 mb-2">Page introuvable</h2>
      <p className="text-slate-500 mb-8">La page que vous recherchez n'existe pas ou a ete deplacee.</p>
      <a href="/" className="inline-flex px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium">Retour a l'accueil</a>
    </div>
  );
}
