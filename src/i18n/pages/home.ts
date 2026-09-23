import type { Locale } from '../config';

// Contenu de la vitrine : le brief de refonte fait foi. Ni mécaniques de
// financement interne, ni justifications administratives — elles appartiennent
// aux pages de pôle. Aucun client, aucun témoignage, aucun chiffre non sourcé.
const fr = {
  meta: {
    title: 'iNOVA BENIN — Building Africa’s Next Ventures',
    description:
      'iNOVA BENIN est une venture-building company : nous transformons des problèmes et opportunités africains en produits, projets et entreprises.',
  },

  hero: {
    eyebrow: 'Cotonou, Bénin · Venture building',
    line1: 'Building',
    line2: 'Africa’s Next',
    line3: 'Ventures.',
    lede: 'Nous transformons des problèmes et opportunités africains en produits, projets et entreprises.',
    cta: 'Construire avec iNOVA',
    secondary: 'Découvrir nos projets',
    scroll: 'Défiler',
  },

  conviction: {
    eyebrow: 'Notre conviction',
    title: 'Les prochaines grandes ventures africaines peuvent naître de problèmes africains.',
    body: [
      'L’Afrique ne manque pas seulement d’idées. Elle a besoin de davantage de personnes capables de transformer ces idées en solutions concrètes, puis ces solutions en organisations durables.',
      'C’est là que nous voulons intervenir.',
    ],
    claim:
      'iNOVA connecte exploration, conception, technologie, gestion de projet et entrepreneuriat pour construire des solutions ancrées dans les réalités africaines.',
    close: 'Nous voulons expérimenter rapidement, apprendre du terrain et construire avec les bonnes compétences.',
    flow: [
      { label: 'Problems', note: 'Un problème observable' },
      { label: 'Products', note: 'Une solution qui tient' },
      { label: 'Ventures', note: 'Une organisation durable' },
    ],
  },

  ways: {
    eyebrow: 'Ce que nous faisons',
    title: 'Trois façons de construire.',
    intro:
      'Trois expressions d’un même écosystème : structurer une idée, la transformer en produit, lui donner de la visibilité.',
    link: 'Ouvrir la page',
  },

  method: {
    eyebrow: 'Notre méthode',
    title: 'Construire. Tester. Apprendre. Grandir.',
    intro: 'C’est notre manière de transformer une idée en solution.',
    rail: 'Progression',
    link: 'Voir comment le Lab travaille',
  },

  projects: {
    eyebrow: 'Ce que nous construisons',
    title: 'From ideas to products.',
    intro:
      'Des problèmes identifiés sur le terrain deviennent des expériences, des prototypes et parfois des produits.',
    statExperiments: 'Expérimentations',
    statLive: 'En ligne',
    statCapabilities: 'Capacités',
    link: 'Ouvrir le carnet',
  },

  principles: {
    eyebrow: 'Pourquoi iNOVA',
    title: 'Nous ne voulons pas seulement parler d’innovation. Nous voulons construire.',
    intro: 'Trois principes, appliqués à chaque projet — pas un discours.',
    items: [
      {
        name: 'Ancrage',
        body: 'Nous partons de problèmes et de réalités observables sur le terrain.',
      },
      {
        name: 'Expérimentation',
        body: 'Nous privilégions les prototypes et les cycles d’apprentissage rapides.',
      },
      {
        name: 'Collaboration',
        body: 'Nous réunissons les compétences nécessaires autour du projet, plutôt que de tout faire seuls.',
      },
    ],
  },

  team: {
    eyebrow: 'Équipe et réseau',
    title: 'Une équipe cœur. Un réseau de compétences.',
    body: 'iNOVA est porté par une équipe cœur et s’appuie sur un réseau de compétences mobilisables selon les projets.',
    founderRole: 'Founder — Project & Product Management, Digital Transformation & Venture Building',
    founderBody:
      'Il pilote la vision d’iNOVA, la structuration des projets et le développement des initiatives du Lab.',
    founderName: 'Arnaud KEDAGNI',
    networkTitle: 'Compétences mobilisables',
    networkNote:
      'Ces compétences ne sont pas toutes salariées : elles sont mobilisées là où un projet en a besoin.',
    join: 'Rejoindre le réseau iNOVA',
  },

  ambition: {
    eyebrow: 'Afrique et ambition',
    title: 'Built in Africa. Designed to scale.',
    body: [
      'Nous croyons au potentiel de la prochaine génération d’entrepreneurs, de créateurs et de bâtisseurs africains.',
      'iNOVA commence au Bénin, mais notre ambition dépasse un seul marché.',
      'Nous voulons contribuer à construire des produits et des ventures capables de répondre aux réalités africaines tout en ayant le potentiel de se développer au-delà de leurs frontières.',
    ],
    rings: ['Bénin', 'Afrique de l’Ouest', 'Afrique', 'Au-delà'],
    anchor: 'Cotonou',
  },

  collaborate: {
    eyebrow: 'Collaborations',
    title: 'Construisons ensemble.',
    intro:
      'Une idée à explorer, un problème à résoudre, un produit à construire ou une expertise à mettre au service d’un projet ?',
    lead: 'Parlons-en.',
    cta: 'Démarrer une conversation',
    modes: [
      { name: 'Projet', body: 'Vous souhaitez structurer et développer une initiative.' },
      { name: 'Produit', body: 'Vous avez une idée ou un problème à transformer en solution.' },
      { name: 'Partenariat', body: 'Vous souhaitez construire une initiative avec iNOVA.' },
      { name: 'Expertise', body: 'Vous souhaitez mettre vos compétences au service de projets innovants.' },
    ],
  },

  writing: {
    eyebrow: 'Contact',
    title: 'Écrire à iNOVA',
    body: 'Le formulaire arrive directement chez le porteur du projet. En attendant, une adresse suffit.',
    cta: 'Écrire à iNOVA',
    or: 'ou',
  },
};

const en: typeof fr = {
  meta: {
    title: 'iNOVA BENIN — Building Africa’s Next Ventures',
    description:
      'iNOVA BENIN is a venture-building company: we turn African problems and opportunities into products, projects and companies.',
  },

  hero: {
    eyebrow: 'Cotonou, Benin · Venture building',
    line1: 'Building',
    line2: 'Africa’s Next',
    line3: 'Ventures.',
    lede: 'We turn African problems and opportunities into products, projects and companies.',
    cta: 'Build with iNOVA',
    secondary: 'See what we’ve built',
    scroll: 'Scroll',
  },

  conviction: {
    eyebrow: 'What we believe',
    title: 'Africa’s next great ventures can start from African problems.',
    body: [
      'Africa does not lack ideas. It needs more people able to turn those ideas into working solutions, and those solutions into lasting organisations.',
      'That is where we want to be.',
    ],
    claim:
      'iNOVA connects exploration, design, technology, project management and entrepreneurship to build solutions grounded in African realities.',
    close: 'We want to experiment fast, learn from the field, and build with the right skills.',
    flow: [
      { label: 'Problems', note: 'An observable problem' },
      { label: 'Products', note: 'A solution that holds' },
      { label: 'Ventures', note: 'A lasting organisation' },
    ],
  },

  ways: {
    eyebrow: 'What we do',
    title: 'Three ways to build.',
    intro:
      'Three expressions of one ecosystem: structure an idea, turn it into a product, give it visibility.',
    link: 'Open the page',
  },

  method: {
    eyebrow: 'How we work',
    title: 'Build. Test. Learn. Grow.',
    intro: 'This is how we turn an idea into a solution.',
    rail: 'Progress',
    link: 'See how the Lab works',
  },

  projects: {
    eyebrow: 'What we are building',
    title: 'From ideas to products.',
    intro: 'Problems spotted on the ground become experiments, prototypes and, sometimes, products.',
    statExperiments: 'Experiments',
    statLive: 'Live products',
    statCapabilities: 'Capabilities',
    link: 'Open the ledger',
  },

  principles: {
    eyebrow: 'Why iNOVA',
    title: 'We do not want to talk about innovation. We want to build.',
    intro: 'Three principles, applied to every project — not a speech.',
    items: [
      {
        name: 'Grounding',
        body: 'We start from problems and realities that can be observed on the ground.',
      },
      {
        name: 'Experimentation',
        body: 'We favour prototypes and fast learning cycles.',
      },
      {
        name: 'Collaboration',
        body: 'We bring the needed skills around the project, instead of doing everything alone.',
      },
    ],
  },

  team: {
    eyebrow: 'Team and network',
    title: 'A core team. A network of skills.',
    body: 'iNOVA is run by a core team and draws on a network of skills mobilised project by project.',
    founderRole: 'Founder — Project & Product Management, Digital Transformation & Venture Building',
    founderBody:
      'He sets the vision for iNOVA, structures the projects and develops the Lab’s initiatives.',
    founderName: 'Arnaud KEDAGNI',
    networkTitle: 'Skills we can mobilise',
    networkNote:
      'Not all of these skills are in-house: they are brought in where a project needs them.',
    join: 'Join the iNOVA network',
  },

  ambition: {
    eyebrow: 'Africa and ambition',
    title: 'Built in Africa. Designed to scale.',
    body: [
      'We believe in the potential of the next generation of African entrepreneurs, makers and builders.',
      'iNOVA starts in Benin, but our ambition is not one market.',
      'We want to help build products and ventures that answer African realities and can grow beyond their borders.',
    ],
    rings: ['Benin', 'West Africa', 'Africa', 'Beyond'],
    anchor: 'Cotonou',
  },

  collaborate: {
    eyebrow: 'Collaborations',
    title: 'Let’s build together.',
    intro:
      'An idea to explore, a problem to solve, a product to build, or expertise to put at the service of a project?',
    lead: 'Let’s talk.',
    cta: 'Start a conversation',
    modes: [
      { name: 'Project', body: 'You want to structure and grow an initiative.' },
      { name: 'Product', body: 'You have an idea or a problem to turn into a solution.' },
      { name: 'Partnership', body: 'You want to build an initiative with iNOVA.' },
      { name: 'Expertise', body: 'You want to put your skills behind innovative projects.' },
    ],
  },

  writing: {
    eyebrow: 'Contact',
    title: 'Write to iNOVA',
    body: 'The form lands with the founder directly. Meanwhile, one address is enough.',
    cta: 'Write to iNOVA',
    or: 'or',
  },
};

export const home: Record<Locale, typeof fr> = { fr, en };
