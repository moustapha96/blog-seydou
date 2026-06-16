import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';

const prisma = new PrismaClient();
const slug = (s) => slugify(s, { lower: true, strict: true, locale: 'fr' });

async function main() {
  console.log('Seed en cours...');

  // ---- Admin (le professeur) ----
  const adminEmail = 'admin@blog-ucad.sn';
  const password = await bcrypt.hash('Admin@2026', 12);
  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      name: 'Pr. Seydou Diop',
      email: adminEmail,
      password,
      role: 'ADMIN',
      bio: "Professeur titulaire a l'Universite Cheikh Anta Diop de Dakar (UCAD). Chercheur en sciences humaines et sociales.",
    },
  });
  console.log('Admin :', adminEmail, '/ mot de passe : Admin@2026');

  // ---- Profil / Portfolio ----
  const existingProfile = await prisma.profile.findFirst();
  if (!existingProfile) {
    await prisma.profile.create({
      data: {
        fullName: 'Pr. Seydou Diop',
        title: 'Professeur titulaire des Universites',
        institution: 'Universite Cheikh Anta Diop de Dakar (UCAD)',
        bio: "Enseignant-chercheur a l'UCAD depuis plus de quinze ans, mes travaux portent sur les dynamiques sociales et culturelles en Afrique de l'Ouest. J'ai dirige plusieurs projets de recherche internationaux et publie de nombreux ouvrages et articles scientifiques.",
        email: 'contact@blog-ucad.sn',
        phone: '+221 33 000 00 00',
        address: 'Faculte des Lettres et Sciences Humaines, UCAD, Dakar, Senegal',
        photo: null,
        education: [
          { degree: 'Doctorat (PhD) en Sciences Humaines', school: 'Universite Cheikh Anta Diop', year: '2005' },
          { degree: 'DEA / Master de Recherche', school: 'Universite Paris-Sorbonne', year: '2000' },
          { degree: 'Maitrise', school: 'Universite Cheikh Anta Diop', year: '1998' },
        ],
        experience: [
          { role: 'Professeur titulaire', place: 'UCAD - FLSH', period: '2015 - present', description: "Enseignement, direction de theses et coordination de l'unite de recherche." },
          { role: 'Maitre de conferences', place: 'UCAD', period: '2008 - 2015', description: 'Enseignement et encadrement de masters.' },
          { role: 'Chercheur associe', place: 'CNRS (France)', period: '2006 - 2008', description: 'Programme de recherche internationale.' },
        ],
        skills: ['Sociologie', 'Anthropologie', 'Methodologie de la recherche', 'Histoire culturelle', 'Analyse de donnees qualitatives'],
        research: [
          { title: 'Dynamiques urbaines et migrations en Afrique de l\'Ouest', description: 'Etude pluriannuelle sur les transformations des villes africaines.', partners: 'CNRS, IRD', funding: 'AUF' },
          { title: 'Patrimoine immateriel et transmission', description: 'Documentation et valorisation des savoirs traditionnels.', partners: 'UNESCO', funding: 'UNESCO' },
        ],
        publications: [
          { title: 'Villes africaines en mutation', journal: 'Revue Africaine de Sociologie', year: '2023', link: '' },
          { title: 'Memoire et transmission culturelle', journal: 'Cahiers d\'Etudes Africaines', year: '2021', link: '' },
        ],
        socialLinks: {
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com',
          researchgate: 'https://researchgate.net',
          googleScholar: 'https://scholar.google.com',
        },
        awards: [
          { title: 'Prix de la recherche UCAD', year: '2022' },
          { title: 'Bourse d\'excellence AUF', year: '2006' },
        ],
      },
    });
    console.log('Profil cree');
  }

  // ---- Categories ----
  const categoriesData = [
    { name: 'Recherche', description: 'Travaux et resultats de recherche', color: '#1e40af' },
    { name: 'Pedagogie', description: 'Enseignement et innovations pedagogiques', color: '#0891b2' },
    { name: 'Actualite', description: 'Actualites academiques et de l\'UCAD', color: '#f97316' },
    { name: 'Publications', description: 'Articles et ouvrages scientifiques', color: '#7c3aed' },
  ];
  const categories = {};
  for (const c of categoriesData) {
    const cat = await prisma.category.upsert({
      where: { slug: slug(c.name) },
      update: {},
      create: { ...c, slug: slug(c.name) },
    });
    categories[c.name] = cat;
  }
  console.log('Categories creees');

  // ---- Articles (5) ----
  const articlesData = [
    {
      title: 'Les dynamiques urbaines en Afrique de l\'Ouest : enjeux et perspectives',
      category: 'Recherche',
      tags: ['urbanisation', 'Afrique', 'sociologie'],
      excerpt: "Une analyse des transformations rapides des villes ouest-africaines et de leurs implications sociales.",
      content: `<p>Les villes d'Afrique de l'Ouest connaissent une croissance sans precedent. Cette mutation rapide soulve des questions majeures en matiere d'amenagement, de cohesion sociale et de developpement durable.</p>
<h2>Une urbanisation acceleree</h2>
<p>Selon les projections, plus de la moitie de la population de la region vivra en milieu urbain d'ici 2035. Cette dynamique transforme profondement les modes de vie.</p>
<blockquote>L'avenir de l'Afrique se jouera en grande partie dans ses villes.</blockquote>
<h2>Enjeux de gouvernance</h2>
<p>La gestion de ces espaces necessite des politiques publiques innovantes et une participation citoyenne accrue.</p>`,
      featured: true,
    },
    {
      title: 'Repenser la pedagogie universitaire a l\'ere du numerique',
      category: 'Pedagogie',
      tags: ['numerique', 'enseignement', 'innovation'],
      excerpt: "Comment les outils numeriques transforment l'enseignement superieur et l'experience etudiante.",
      content: `<p>Le numerique bouleverse les pratiques pedagogiques dans l'enseignement superieur. Entre cours en ligne, classes inversees et ressources ouvertes, de nouvelles opportunites s'offrent aux enseignants.</p>
<h2>Vers un apprentissage hybride</h2>
<p>La combinaison du presentiel et du distanciel permet une plus grande flexibilite et une meilleure adaptation aux besoins des etudiants.</p>
<ul><li>Plateformes d'apprentissage en ligne</li><li>Ressources educatives libres</li><li>Evaluation continue numerique</li></ul>`,
      featured: true,
    },
    {
      title: 'Patrimoine immateriel : preserver la memoire collective',
      category: 'Recherche',
      tags: ['patrimoine', 'culture', 'transmission'],
      excerpt: "L'importance de documenter et transmettre les savoirs traditionnels face a la mondialisation.",
      content: `<p>Le patrimoine immateriel constitue un pilier de l'identite culturelle. Sa preservation est un enjeu crucial pour les generations futures.</p>
<h2>Documenter pour transmettre</h2>
<p>Les recherches de terrain permettent de recueillir et de valoriser des savoirs menaces de disparition.</p>`,
      featured: false,
    },
    {
      title: 'Methodologie de la recherche en sciences sociales : guide pour les etudiants',
      category: 'Pedagogie',
      tags: ['methodologie', 'recherche', 'etudiants'],
      excerpt: "Les etapes essentielles pour mener une recherche rigoureuse en sciences humaines et sociales.",
      content: `<p>Mener une recherche scientifique exige rigueur et methode. Ce guide presente les etapes cles pour les etudiants de master et de doctorat.</p>
<h2>De la question de recherche au terrain</h2>
<p>Formuler une problematique claire est la premiere etape d'un travail de qualite.</p>
<ol><li>Definir l'objet d'etude</li><li>Construire un cadre theorique</li><li>Choisir une methode</li><li>Collecter et analyser les donnees</li></ol>`,
      featured: false,
    },
    {
      title: 'Migrations et developpement : un regard renouvele',
      category: 'Publications',
      tags: ['migrations', 'developpement', 'Afrique'],
      excerpt: "Les migrations comme moteur de developpement plutot que comme probleme a resoudre.",
      content: `<p>Loin des discours alarmistes, les migrations representent une ressource pour le developpement des territoires d'origine et d'accueil.</p>
<h2>Les transferts de competences</h2>
<p>La diaspora joue un role essentiel dans le transfert de savoirs et de capitaux.</p>`,
      featured: true,
    },
  ];

  let idx = 0;
  for (const a of articlesData) {
    const exists = await prisma.article.findUnique({ where: { slug: slug(a.title) } });
    if (exists) continue;
    idx += 1;
    await prisma.article.create({
      data: {
        title: a.title,
        slug: slug(a.title),
        excerpt: a.excerpt,
        content: a.content,
        status: 'PUBLISHED',
        featured: a.featured,
        readingTime: 4,
        views: Math.floor(Math.random() * 400) + 50,
        publishedAt: new Date(Date.now() - idx * 86400000 * 3),
        authorId: admin.id,
        categoryId: categories[a.category].id,
        tags: {
          connectOrCreate: a.tags.map((t) => ({ where: { name: t }, create: { name: t, slug: slug(t) } })),
        },
      },
    });
  }
  console.log('Articles crees');

  // ---- Commentaires d'exemple ----
  const firstArticle = await prisma.article.findFirst({ where: { status: 'PUBLISHED' } });
  if (firstArticle) {
    const c = await prisma.comment.count({ where: { articleId: firstArticle.id } });
    if (c === 0) {
      await prisma.comment.create({
        data: {
          articleId: firstArticle.id,
          authorName: 'Aminata Sow',
          authorEmail: 'aminata@example.com',
          content: 'Article tres eclairant, merci professeur pour ce partage !',
          approved: true,
        },
      });
      await prisma.comment.create({
        data: {
          articleId: firstArticle.id,
          authorName: 'Moussa Ba',
          content: 'Pourriez-vous developper la partie sur la gouvernance urbaine ?',
          approved: false,
        },
      });
    }
  }

  // ---- Livres (3) ----
  const booksData = [
    {
      title: 'Villes africaines en mutation',
      author: 'Seydou Diop',
      publisher: 'Presses Universitaires de Dakar',
      isbn: '978-2-123456-78-9',
      year: 2023,
      category: 'Sociologie',
      description: "Un ouvrage de reference sur les transformations urbaines en Afrique de l'Ouest, fruit de plusieurs annees de recherche de terrain.",
      purchaseUrl: 'https://www.amazon.fr',
      citationApa: 'Diop, S. (2023). Villes africaines en mutation. Dakar : Presses Universitaires de Dakar.',
      citationMla: 'Diop, Seydou. Villes africaines en mutation. Presses Universitaires de Dakar, 2023.',
      featured: true,
    },
    {
      title: 'Memoire et transmission culturelle',
      author: 'Seydou Diop',
      publisher: 'Karthala',
      isbn: '978-2-987654-32-1',
      year: 2021,
      category: 'Anthropologie',
      description: "Une reflexion sur les mecanismes de transmission du patrimoine immateriel dans les societes ouest-africaines.",
      purchaseUrl: 'https://www.karthala.com',
      citationApa: 'Diop, S. (2021). Memoire et transmission culturelle. Paris : Karthala.',
      featured: true,
    },
    {
      title: 'Introduction a la sociologie africaine',
      author: 'Seydou Diop',
      publisher: 'L\'Harmattan',
      isbn: '978-2-111222-33-4',
      year: 2018,
      category: 'Manuel',
      description: "Un manuel pedagogique destine aux etudiants de licence et de master en sciences sociales.",
      purchaseUrl: 'https://www.editions-harmattan.fr',
      featured: false,
    },
  ];
  for (const b of booksData) {
    const s = slug(b.title);
    const exists = await prisma.book.findUnique({ where: { slug: s } });
    if (!exists) await prisma.book.create({ data: { ...b, slug: s } });
  }
  console.log('Livres crees');

  // ---- Categories publications scientifiques ----
  const pubCatData = [
    { name: 'Article de revue', description: 'Articles parus dans des revues a comite de lecture', color: '#7c3aed', sortOrder: 1 },
    { name: 'Chapitre de livre', description: 'Contributions dans des ouvrages collectifs', color: '#6366f1', sortOrder: 2 },
    { name: 'Communication', description: 'Actes de colloque et communications', color: '#0891b2', sortOrder: 3 },
    { name: 'Rapport de recherche', description: 'Rapports techniques et de recherche', color: '#059669', sortOrder: 4 },
  ];
  const pubCats = {};
  for (const c of pubCatData) {
    const s = slug(c.name);
    const cat = await prisma.publicationCategory.upsert({
      where: { slug: s },
      update: {},
      create: { ...c, slug: s },
    });
    pubCats[c.name] = cat.id;
  }
  console.log('Categories publications creees');

  // ---- Publications scientifiques ----
  const pubsData = [
    {
      title: 'Villes africaines en mutation : enjeux et perspectives',
      authors: 'Seydou Diop',
      journal: 'Revue Africaine de Sociologie',
      year: 2023,
      volume: '12',
      pages: '45-72',
      doi: '10.1234/ras.2023.012',
      abstract: 'Cette etude analyse les transformations urbaines en Afrique de l\'Ouest depuis les annees 2000.',
      citationApa: 'Diop, S. (2023). Villes africaines en mutation : enjeux et perspectives. Revue Africaine de Sociologie, 12, 45-72.',
      citationMla: 'Diop, Seydou. "Villes africaines en mutation : enjeux et perspectives." Revue Africaine de Sociologie, vol. 12, 2023, pp. 45-72.',
      featured: true,
      categoryId: pubCats['Article de revue'],
    },
    {
      title: 'Memoire collective et transmission intergenerationnelle',
      authors: 'Seydou Diop, Aminata Sow',
      journal: 'Cahiers d\'Etudes Africaines',
      year: 2021,
      pages: '112-138',
      abstract: 'Analyse des pratiques de transmission du patrimoine immateriel au Senegal.',
      citationApa: 'Diop, S., & Sow, A. (2021). Memoire collective et transmission intergenerationnelle. Cahiers d\'Etudes Africaines, 112-138.',
      featured: true,
      categoryId: pubCats['Article de revue'],
    },
  ];
  for (const p of pubsData) {
    const s = slug(p.title);
    const exists = await prisma.publication.findUnique({ where: { slug: s } });
    if (!exists) await prisma.publication.create({ data: { ...p, slug: s, status: 'PUBLISHED' } });
  }
  console.log('Publications scientifiques creees');

  // ---- Categories encadrements ----
  const supCatData = [
    { name: 'Doctorat', description: 'Theses de doctorat', color: '#1e40af', sortOrder: 1 },
    { name: 'Master', description: 'Memoires de master et DEA', color: '#0891b2', sortOrder: 2 },
    { name: 'Licence', description: 'Memoires de licence et projets de fin d\'etudes', color: '#059669', sortOrder: 3 },
    { name: 'Stage', description: 'Encadrement de stages et projets professionnels', color: '#f97316', sortOrder: 4 },
  ];
  const supCats = {};
  for (const c of supCatData) {
    const s = slug(c.name);
    const cat = await prisma.supervisionCategory.upsert({
      where: { slug: s },
      update: {},
      create: { ...c, slug: s },
    });
    supCats[c.name] = cat.id;
  }
  console.log('Categories encadrements creees');

  // ---- Encadrements ----
  const supCount = await prisma.supervision.count();
  if (supCount === 0) {
    await prisma.supervision.createMany({
      data: [
        {
          title: 'Les dynamiques migratoires dans la banlieue dakaroise',
          studentName: 'Fatou Ndiaye',
          institution: 'UCAD - FLSH',
          year: 2025,
          status: 'DEFENDED',
          description: 'These de doctorat en sociologie sur les migrations urbaines.',
          categoryId: supCats.Doctorat,
          featured: true,
        },
        {
          title: 'Patrimoine immateriel et pratiques rituelles au Senegal',
          studentName: 'Moussa Ba',
          institution: 'UCAD - FLSH',
          year: 2024,
          status: 'DEFENDED',
          categoryId: supCats.Master,
        },
        {
          title: 'Representation sociale de l\'urbanisation chez les jeunes',
          studentName: 'Awa Diallo',
          institution: 'UCAD - FLSH',
          startYear: 2024,
          endYear: 2026,
          status: 'IN_PROGRESS',
          coSupervisor: 'Dr. Marie Fall',
          categoryId: supCats.Doctorat,
        },
        {
          title: 'Stage de recherche : enquete de terrain a Pikine',
          studentName: 'Ibrahima Sarr',
          institution: 'UCAD',
          year: 2026,
          status: 'IN_PROGRESS',
          categoryId: supCats.Stage,
        },
      ],
    });
    console.log('Encadrements crees');
  }

  // ---- Actualites (3) ----
  const newsData = [
    { title: 'Conference internationale sur l\'urbanisation a Dakar', content: '<p>Le professeur participera a la conference internationale sur les dynamiques urbaines, organisee a l\'UCAD du 15 au 17 juillet 2026.</p>' },
    { title: 'Lancement d\'un nouveau projet de recherche', content: '<p>Un nouveau programme de recherche sur le patrimoine immateriel vient d\'etre lance en partenariat avec l\'UNESCO.</p>' },
    { title: 'Soutenance de these dirigee par le professeur', content: '<p>Felicitations a Mme Fatou Ndiaye pour sa brillante soutenance de these en sociologie.</p>' },
  ];
  for (const n of newsData) {
    const s = slug(n.title);
    const exists = await prisma.news.findUnique({ where: { slug: s } });
    if (!exists) {
      await prisma.news.create({
        data: { title: n.title, slug: s, content: n.content, excerpt: n.content.replace(/<[^>]*>/g, '').slice(0, 150), status: 'PUBLISHED', authorId: admin.id },
      });
    }
  }
  console.log('Actualites creees');

  // ---- Evenements ----
  const eventsCount = await prisma.event.count();
  if (eventsCount === 0) {
    await prisma.event.createMany({
      data: [
        { title: 'Conference : Villes et migrations', description: 'Conference publique a l\'amphitheatre UCAD2.', location: 'UCAD, Dakar', startDate: new Date('2026-07-15T09:00:00Z'), endDate: new Date('2026-07-17T17:00:00Z') },
        { title: 'Seminaire de methodologie', description: 'Seminaire destine aux doctorants.', location: 'FLSH, UCAD', startDate: new Date('2026-09-05T14:00:00Z') },
        { title: 'Table ronde : Patrimoine et numerique', description: 'Echanges autour de la numerisation du patrimoine.', location: 'En ligne', startDate: new Date('2026-10-20T10:00:00Z') },
      ],
    });
    console.log('Evenements crees');
  }

  // ---- Newsletter (exemples) ----
  await prisma.newsletter.upsert({ where: { email: 'lecteur@example.com' }, update: {}, create: { email: 'lecteur@example.com' } });

  console.log('\nSeed termine avec succes !');
  console.log('-> Connexion admin : admin@blog-ucad.sn / Admin@2026');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
