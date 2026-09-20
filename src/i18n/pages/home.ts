import type { Locale } from '../config';

// Contenu issu du seul business plan : aucun client, aucun témoignage, aucun chiffre hors du BP.
const fr = {
  meta: {
    title: 'iNOVA BENIN — Building Africa’s Next Ventures',
    description:
      'Plateforme d’innovation et de création d’entreprises à Cotonou : conseil produit (iNOVA Consulting), construction de produits et de startups (iNOVA Lab), contenus de valorisation entrepreneuriale (iNOVA Studio).',
  },

  hero: {
    eyebrow: 'Cotonou, Bénin',
    line1: 'Problème africain,',
    line2: 'produit,',
    line3: 'entreprise.',
    lede: 'iNOVA BENIN identifie des problèmes et des opportunités, conçoit des solutions, construit des produits — et fait progressivement émerger des startups. Le tout sous une même structure.',
    bandsHint: 'Trois pôles, un seul chantier. Choisissez votre porte d’entrée.',
  },

  statement: {
    eyebrow: 'Le parti pris',
    body: 'Nous ne voulons pas seulement accompagner ceux qui créent des entreprises. Nous voulons aussi apprendre à les construire.',
    note: 'C’est la raison pour laquelle iNOVA Consulting, iNOVA Lab et iNOVA Studio existent ensemble : le conseil finance la structure, le Lab construit le portefeuille, le Studio raconte le travail fait.',
  },

  method: {
    eyebrow: 'Comment le Lab travaille',
    title: 'La méthode 369',
    intro:
      'Chaque opportunité suivie par le Lab passe par trois horizons. Ils ne sont pas trois promesses : ce sont trois points de contrôle, avec ce qu’il faut produire à chacun.',
    link: 'Voir comment le Lab travaille',
  },

  ledger: {
    eyebrow: 'Preuve',
    title: 'Le carnet du Lab',
    intro:
      'Un portefeuille d’expérimentations réellement engagées, à des degrés de maturité différents. Elles sont publiées ici au fur et à mesure qu’elles produisent quelque chose de consultable.',
    countLabel: (n: number) => `${n} expérimentations construites`,
    liveLabel: (n: number) => `dont ${n} accessibles en ligne`,
    link: 'Ouvrir le carnet',
  },

  studio: {
    eyebrow: 'Ce que le Studio produit',
    title: 'Trois formats, une même idée : montrer les modèles qui marchent',
    intro:
      'La visibilité d’iNOVA ne vient pas d’une démarche commerciale. Elle vient des acteurs économiques réels que le Studio met en avant — formels, informels et semi-modernes.',
    formats: [
      {
        name: 'Format court',
        what: 'Interviews à chaud',
        body: 'Tournées en événement et en rencontre, avec des entrepreneurs béninois et des actrices des marchés.',
      },
      {
        name: 'Format long',
        what: 'Podcast',
        body: 'Des expériences réelles, décrites assez précisément pour transmettre des enseignements à la jeune génération.',
      },
      {
        name: 'Format série',
        what: 'Accompagnement documenté',
        body: 'Un acteur économique diagnostiqué, puis suivi à l’écran jusqu’à l’obtention de résultats concrets.',
      },
    ],
    link: 'Découvrir iNOVA Studio',
  },

  partners: {
    eyebrow: 'Partenariats',
    title: 'Le Studio se finance par la collaboration, pas par la publicité display',
    body: 'Partenariats de marque, contenu commandité, sponsoring institutionnel : chaque format peut accueillir une marque ou une institution, à condition de rester aligné avec la mission de promotion d’un entrepreneuriat adapté aux réalités africaines.',
    cta: 'Proposer un partenariat',
  },

  closing: {
    eyebrow: 'Premier contact',
    title: 'Un besoin produit, un projet à structurer, une idée à tester ?',
    body: 'Décrivez le contexte. Le premier échange est un diagnostic, pas une avant-vente.',
    cta: 'Décrire un besoin',
    secondary: 'Qui est derrière iNOVA',
  },
};

const en: typeof fr = {
  meta: {
    title: 'iNOVA BENIN — Building Africa’s Next Ventures',
    description:
      'An innovation and company-building platform in Cotonou: product advisory (iNOVA Consulting), building products and startups (iNOVA Lab), and entrepreneurial storytelling (iNOVA Studio).',
  },

  hero: {
    eyebrow: 'Cotonou, Benin',
    line1: 'African problem,',
    line2: 'product,',
    line3: 'company.',
    lede: 'iNOVA BENIN identifies problems and opportunities, designs solutions, builds products — and gradually brings startups up. All under one structure.',
    bandsHint: 'Three poles, one build site. Pick your door.',
  },

  statement: {
    eyebrow: 'The stance',
    body: 'We do not only want to support the people who create companies. We also want to learn how to build them.',
    note: 'That is why iNOVA Consulting, iNOVA Lab and iNOVA Studio exist together: advisory pays for the structure, the Lab builds the portfolio, the Studio tells the story of the work.',
  },

  method: {
    eyebrow: 'How the Lab works',
    title: 'The 369 method',
    intro:
      'Every opportunity the Lab takes on runs against three horizons. They are not three promises: they are three checkpoints, each with something concrete to deliver.',
    link: 'See how the Lab works',
  },

  ledger: {
    eyebrow: 'Proof',
    title: 'The Lab ledger',
    intro:
      'A portfolio of experiments genuinely under way, at different stages of maturity. They appear here as soon as they produce something worth looking at.',
    countLabel: (n: number) => `${n} experiments built`,
    liveLabel: (n: number) => `${n} of them live online`,
    link: 'Open the ledger',
  },

  studio: {
    eyebrow: 'What the Studio makes',
    title: 'Three formats, one idea: show the models that work',
    intro:
      'iNOVA’s visibility does not come from sales outreach. It comes from the real economic actors the Studio puts forward — formal, informal and semi-modern.',
    formats: [
      {
        name: 'Short format',
        what: 'On-the-spot interviews',
        body: 'Filmed at events and meet-ups, with Beninese entrepreneurs and market traders.',
      },
      {
        name: 'Long format',
        what: 'Podcast',
        body: 'Real experiences, described precisely enough to hand lessons to the next generation.',
      },
      {
        name: 'Series format',
        what: 'Documented support',
        body: 'One economic actor diagnosed, then followed on camera until concrete results land.',
      },
    ],
    link: 'Discover iNOVA Studio',
  },

  partners: {
    eyebrow: 'Partnerships',
    title: 'The Studio is funded by collaboration, not by display advertising',
    body: 'Brand partnerships, commissioned content, institutional sponsorship: any format can carry a brand or an institution, as long as it stays aligned with promoting entrepreneurship suited to African realities.',
    cta: 'Propose a partnership',
  },

  closing: {
    eyebrow: 'First contact',
    title: 'A product need, a project to structure, an idea to test?',
    body: 'Describe the context. The first conversation is a diagnosis, not a sales pitch.',
    cta: 'Describe a need',
    secondary: 'Who is behind iNOVA',
  },
};

export const home: Record<Locale, typeof fr> = { fr, en };
