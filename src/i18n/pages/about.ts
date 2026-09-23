import type { Locale } from '../config';

/**
 * À propos : la page de preuve, pas une seconde vitrine.
 *
 * La méthode, les pôles, le réseau de compétences, la progression Afrique et les
 * quatre entrées de collaboration existent déjà sur l'accueil ; le carnet complet
 * existe sur `/lab`. Rien de tout cela n'est rejoué ici : la page ne répond qu'à
 * une question, « comment vérifier ».
 *
 * Statut juridique, immatriculation, effectif et local sont des informations
 * internes : mentions légales et documents institutionnels, pas le storytelling
 * public. Ni formulation défensive, ni rien d'inventé.
 *
 * « Trois choses » et « Onze capacités » sont les seuls nombres écrits en toutes
 * lettres de cette page. Ils ne sont pas vérifiables par le typage : `About.astro`
 * arrête le build si `verify.rows.length` ou la liste de `i18n/skills` change sans
 * que le mot soit réécrit avec lui. Tout autre chiffre est dérivé dans le gabarit.
 */
const fr = {
  meta: {
    title: 'À propos — iNOVA BENIN, venture builder à Cotonou',
    description:
      'Ce que iNOVA construit réellement, où le vérifier, qui porte le projet et quelles compétences le réseau réunit.',
  },

  hero: {
    eyebrow: 'À propos · Cotonou, Bénin',
    title: 'Ce que nous disons se vérifie.',
    lede: (built: number, live: number) =>
      `iNOVA BENIN est un venture builder. Ce qu’il avance tient sur ${built} expérimentations construites, dont ${live} ouvertes en ligne : chacune s’ouvre dans un onglet et se juge sans attendre notre parole.`,
    stripLabel: 'Le carnet, consultable maintenant',
    ledger: 'Ouvrir tout le carnet',
    intention: 'Notre intention',
  },

  declaration: {
    eyebrow: 'Notre intention',
    line1: 'Nous ne voulons pas seulement accompagner',
    line2: 'ceux qui créent des entreprises.',
    line3: 'Nous voulons apprendre à les construire.',
    body:
      'Un cabinet qui conseille garde la distance. Nous avons choisi de la réduire : une partie de ce que nous produisons nous appartient, et chaque produit livré apprend ce qu’aucune mission ne pourrait apprendre.',
  },

  origin: {
    eyebrow: 'D’où nous partons',
    title: 'Repérer. Concevoir. Construire. Faire durer.',
    steps: [
      { name: 'Repérer', note: 'Un problème observable sur le terrain, pas une mode.' },
      { name: 'Concevoir', note: 'Une solution soutenable, pas une démonstration.' },
      { name: 'Construire', note: 'Un produit qui tient, pas une maquette.' },
      { name: 'Faire durer', note: 'Une organisation, pas un projet sans suite.' },
    ],
    body1:
      'Trois métiers travaillent ensemble : le Consulting structure les idées, le Lab les transforme en produits, le Studio donne de la visibilité à ceux qui construisent. Les trois s’appliquent à des problèmes africains.',
    body2:
      'L’ambition ne s’arrête pas au conseil rendu : constituer, à terme, un portefeuille de ventures dont iNOVA détiendra une part — bâties au Bénin et conçues pour dépasser leur marché d’origine.',
  },

  verify: {
    eyebrow: 'À vérifier vous-même',
    title: 'Trois choses que vous n’avez pas besoin de nous croire.',
    intro: 'Tout ce que cette page affirme est publié quelque part. Voici où.',
    rows: [
      {
        field: 'Le code',
        value: (n: number) => `${n} dépôts publics`,
        body:
          'Chaque expérimentation engagée a son dépôt. L’historique des commits est ouvert, et il précède cette page.',
        cta: 'Ouvrir GitHub',
      },
      {
        field: 'Les produits',
        value: (n: number) => `${n} en ligne`,
        body: 'Les adresses s’ouvrent directement. Elles sont revérifiées à chaque mise en ligne du site.',
        cta: 'Ouvrir le carnet',
      },
      {
        field: 'Le porteur',
        value: 'Un profil, un parcours',
        body: 'Le projet a un nom et un historique professionnel consultables par tous.',
        cta: 'Ouvrir LinkedIn',
      },
    ],
  },

  founder: {
    eyebrow: 'Qui porte iNOVA',
    role: 'Founder — Project & Product Management, Digital Transformation & Venture Building',
    body1:
      'Il pilote la vision d’iNOVA, le cadrage des projets et le développement des expérimentations du Lab.',
    body2:
      'Les compétences qui complètent le projet se réunissent au coup par coup, selon ce que le problème exige.',
    proof: 'Le code des expérimentations est publié sous ce même compte.',
    cta: 'Voir le profil LinkedIn',
  },

  network: {
    eyebrow: 'Le réseau',
    title: 'Onze capacités, réunies projet par projet.',
    intro:
      'iNOVA les mobilise là où un projet en a besoin, et les réunit autour de lui plutôt que de tout faire seul.',
    formalised:
      'Ces collaborations se formalisent au rythme de l’activité : prestation, apport en compétence, ou emploi quand le projet le justifie.',
    ask: 'Vous avez une de ces compétences et un projet à construire ?',
    join: 'Rejoindre le réseau iNOVA',
  },

  close: {
    title: 'Décrivez le problème.',
    body:
      'Une ligne suffit. La demande part directement chez le porteur du projet, et nous disons vite si iNOVA n’est pas le bon endroit pour votre besoin.',
    cta: 'Décrire un besoin',
  },
};

const en: typeof fr = {
  meta: {
    title: 'About — iNOVA BENIN, a venture builder in Cotonou',
    description:
      'What iNOVA actually builds, where to check it, who carries the project and which skills the network holds.',
  },

  hero: {
    eyebrow: 'About · Cotonou, Benin',
    title: 'What we say can be checked.',
    lede: (built: number, live: number) =>
      `iNOVA BENIN is a venture builder. What it claims rests on ${built} experiments built, ${live} of them live right now: each one opens in a tab and judges itself.`,
    stripLabel: 'The ledger, open now',
    ledger: 'Open the full ledger',
    intention: 'Our intention',
  },

  declaration: {
    eyebrow: 'Our intention',
    line1: 'We do not want simply to advise',
    line2: 'those who create businesses.',
    line3: 'We want to learn to build them.',
    body:
      'An advisory keeps its distance. We chose to close ours: part of what we produce belongs to us, and every product shipped teaches what no engagement could.',
  },

  origin: {
    eyebrow: 'Where we start',
    title: 'Spot. Design. Build. Last.',
    steps: [
      { name: 'Spot', note: 'A problem observable on the ground, not a fashion.' },
      { name: 'Design', note: 'A solution that holds, not a demo.' },
      { name: 'Build', note: 'A product that runs, not a mockup.' },
      { name: 'Last', note: 'An organisation, not a project with no follow-on.' },
    ],
    body1:
      'Three trades work together: Consulting structures ideas, the Lab turns them into products, the Studio gives visibility to the people building. All three are pointed at African problems.',
    body2:
      'The ambition does not stop at advice delivered: to build, over time, a portfolio of ventures iNOVA holds a share in — made in Benin, designed to outgrow their home market.',
  },

  verify: {
    eyebrow: 'Check it yourself',
    title: 'Three things you do not need to take on trust.',
    intro: 'Everything this page states is published somewhere. Here is where.',
    rows: [
      {
        field: 'The code',
        value: (n: number) => `${n} public repositories`,
        body:
          'Every experiment engaged has its repository. Commit history is open, and it predates this page.',
        cta: 'Open GitHub',
      },
      {
        field: 'The products',
        value: (n: number) => `${n} live`,
        body: 'The addresses open directly. Each one is re-checked on every publish of this site.',
        cta: 'Open the ledger',
      },
      {
        field: 'The founder',
        value: 'One profile, one record',
        body: 'The project has a name and a professional history anyone can read.',
        cta: 'Open LinkedIn',
      },
    ],
  },

  founder: {
    eyebrow: 'Who carries iNOVA',
    role: 'Founder — Project & Product Management, Digital Transformation & Venture Building',
    body1:
      'He leads iNOVA’s vision, the framing of engagements and the development of the Lab’s experiments.',
    body2: 'The skills that complete a project come together one engagement at a time, as the problem requires.',
    proof: 'The experiment code is published under that same account.',
    cta: 'See the LinkedIn profile',
  },

  network: {
    eyebrow: 'The network',
    title: 'Eleven capabilities, gathered project by project.',
    intro:
      'iNOVA calls on them where a project needs them, and assembles them rather than building alone.',
    formalised:
      'These collaborations are formalised as the activity allows: services, contribution in kind, or employment once a project justifies it.',
    ask: 'Do you hold one of these skills and a project to build?',
    join: 'Join the iNOVA network',
  },

  close: {
    title: 'Describe the problem.',
    body:
      'One line is enough. The request goes straight to the founder, and we say early if iNOVA is not the right place for your need.',
    cta: 'Describe a need',
  },
};

export const about: Record<Locale, typeof fr> = { fr, en };
