import type { Locale } from '../config';

/**
 * À propos. Sections 2.1, 2.2, 2.3 et 7 du business plan. Ni RCCM ni IFU ne sont
 * nommés : ils n'existent pas encore, et les citer laisserait croire à une
 * immatriculation déjà obtenue.
 */
const fr = {
  meta: {
    title: 'À propos — iNOVA BENIN, SASU en cours de constitution à Cotonou',
    description:
      'Le porteur du projet, la forme juridique retenue, le réseau réellement mobilisé et les étapes qui restent avant l’immatriculation. Ce qui n’existe pas encore est dit comme tel.',
  },

  hero: {
    eyebrow: 'À propos',
    title: 'Une entreprise pas encore immatriculée, des produits déjà consultables.',
    lede: (built: number, live: number) =>
      `iNOVA BENIN est en cours de constitution sous la forme d’une SASU. Le carnet du Lab, lui, n’a pas attendu l’immatriculation : ${built} expérimentations y sont construites, dont ${live} accessibles en ligne.`,
    steps: 'Les étapes restantes',
    network: 'Le réseau',
  },

  intent: {
    eyebrow: 'L’intention',
    title: 'Apprendre à construire, pas seulement accompagner',
    quote:
      'Nous ne voulons pas seulement accompagner ceux qui créent des entreprises. Nous voulons aussi apprendre à les construire.',
    body: 'L’ambition inscrite dans le projet : être capable d’identifier des problèmes et des opportunités, de concevoir des solutions, de construire des produits, de créer des startups et, à terme, de contribuer à un portefeuille de ventures africaines. C’est ce qui distingue iNOVA d’un cabinet de conseil classique : une partie de ce que la structure produit lui appartient.',
  },

  founder: {
    eyebrow: 'Le porteur',
    role: 'PMO — gestion de projet digital, entrepreneuriat',
    body: 'Le projet est porté par une seule personne, nommément. Tout le reste est un réseau mobilisé au coup par coup : aucun associé, aucun salarié à ce jour.',
  },

  legal: {
    eyebrow: 'Statut',
    title: 'SASU, en cours de constitution',
    intro:
      'La forme juridique est retenue et motivée, les statuts sont en cours de finalisation. Rien sur ce site ne laisse entendre que la société est déjà immatriculée.',
    rows: [
      {
        label: 'Forme',
        body: 'Société par Actions Simplifiée Unipersonnelle, régie par l’Acte uniforme OHADA relatif au droit des sociétés commerciales.',
      },
      {
        label: 'Pourquoi cette forme',
        body: 'Elle permet, sans transformation juridique ultérieure, d’accueillir de nouveaux associés — en numéraire comme en industrie — et des investisseurs, et elle reste le véhicule privilégié des opérations d’investissement dans l’espace OHADA. Sa constitution requiert un acte notarié.',
      },
      {
        label: 'État',
        body: 'Immatriculation non finalisée à la date de publication. Les numéros d’identification qui en découleront ne sont donc pas publiés.',
      },
      {
        label: 'Base',
        body: 'Activité basée à Cotonou, sans local dédié à ce jour. La domiciliation provisoire est une adresse personnelle : elle n’est pas publiée.',
      },
    ],
  },

  network: {
    eyebrow: 'Le réseau',
    title: 'Des compétences réunies, pas un effectif',
    intro:
      'À ce stade, iNOVA BENIN s’appuie sur un réseau de collaborateurs mobilisés ponctuellement, et sur un partenaire disposant d’une agence de communication pour la production du Studio. Aucun effectif salarié n’est revendiqué.',
    skillsTitle: 'Compétences couvertes',
    skills: [
      'Développement',
      'Design',
      'Gestion de projet',
      'Marketing et communication',
      'Data et digitalisation',
      'Comptabilité',
      'Production de contenu',
    ],
    formalisation:
      'Ces collaborations seront progressivement formalisées — prestation, association ou salariat — à mesure que l’activité, notamment celle du Consulting, générera un chiffre d’affaires régulier.',
  },

  steps: {
    eyebrow: 'Prochaines étapes',
    title: 'Ce qui reste à faire avant l’amorçage',
    intro:
      'iNOVA BENIN se construit à partir d’un premier portefeuille d’expérimentations concret et d’une activité de conseil immédiatement mobilisable. La demande d’accompagnement à la création vise à sécuriser la structuration juridique du projet.',
    items: [
      'Finaliser l’immatriculation de la société, statuts notariés compris.',
      'Ouvrir le compte bancaire de la société et libérer le capital social.',
      'Déployer le budget de démarrage.',
      'Lancer les premières missions de Consulting pour amorcer la trésorerie.',
      'Produire les premiers contenus du Studio et démarrer le format série avec un premier acteur accompagné.',
      'Structurer l’ouverture du capital à de futurs associés, en numéraire et en apports en industrie.',
      'Préparer, une fois ces jalons franchis, une demande de financement pour la phase d’amorçage.',
    ],
  },

  elsewhere: {
    eyebrow: 'Vérifier par vous-même',
    title: 'Les deux profils qui engagent réellement',
    body: 'Plutôt qu’un discours sur la crédibilité, les travaux sont consultables là où ils sont publiés : le code des expérimentations et le profil professionnel du porteur.',
    cta: 'Décrire un besoin',
  },
};

const en: typeof fr = {
  meta: {
    title: 'About — iNOVA BENIN, a SASU being incorporated in Cotonou',
    description:
      'The founder, the legal form chosen, the network genuinely in place and the steps left before incorporation. What does not exist yet is stated as such.',
  },

  hero: {
    eyebrow: 'About',
    title: 'A company not yet registered, products you can already open.',
    lede: (built: number, live: number) =>
      `iNOVA BENIN is being incorporated as a SASU. The Lab’s ledger did not wait for that: ${built} experiments are built, ${live} of them live online.`,
    steps: 'Remaining steps',
    network: 'The network',
  },

  intent: {
    eyebrow: 'The intention',
    title: 'Learning to build, not only advising',
    quote:
      'We do not want simply to support those who create businesses. We want to learn to build them too.',
    body: 'The ambition written into the project: to be able to spot problems and opportunities, design solutions, build products, create startups and, in time, contribute to an African venture portfolio. That is what separates iNOVA from a conventional consultancy — part of what the structure produces belongs to it.',
  },

  founder: {
    eyebrow: 'The founder',
    role: 'PMO — digital project management, entrepreneurship',
    body: 'One person carries the project, by name. Everything else is a network engaged case by case: no co-founder, no employee so far.',
  },

  legal: {
    eyebrow: 'Status',
    title: 'SASU, being incorporated',
    intro:
      'The legal form is chosen and reasoned; the articles are still being finalised. Nothing on this site suggests the company is already registered.',
    rows: [
      {
        label: 'Form',
        body: 'Société par Actions Simplifiée Unipersonnelle, governed by the OHADA Uniform Act on commercial companies.',
      },
      {
        label: 'Why this form',
        body: 'It allows new shareholders — in cash or in skills — and investors to join without a later legal transformation, and it remains the preferred vehicle for investment deals across OHADA. Its formation requires a notarial deed.',
      },
      {
        label: 'State',
        body: 'Incorporation was not finalised at the time of publication, so the identification numbers that follow from it are not published.',
      },
      {
        label: 'Base',
        body: 'Operating out of Cotonou, with no dedicated premises so far. The provisional domiciliation is a personal address: it is not published.',
      },
    ],
  },

  network: {
    eyebrow: 'The network',
    title: 'A set of skills, not a headcount',
    intro:
      'At this stage iNOVA BENIN relies on a network of collaborators engaged case by case, plus a partner running a communications agency for Studio production. No salaried headcount is claimed.',
    skillsTitle: 'Skills covered',
    skills: [
      'Development',
      'Design',
      'Project management',
      'Marketing and communication',
      'Data and digitalisation',
      'Accounting',
      'Content production',
    ],
    formalisation:
      'These collaborations will be formalised in turn — services, equity or employment — as the activity, Consulting above all, starts generating steady revenue.',
  },

  steps: {
    eyebrow: 'Next steps',
    title: 'What is left before the seed round',
    intro:
      'iNOVA BENIN is being built from a concrete first portfolio of experiments and a consulting practice that can be mobilised immediately. The support sought is aimed at securing the project’s legal structuring.',
    items: [
      'Finish registering the company, notarial articles included.',
      'Open the company bank account and release the share capital.',
      'Deploy the start-up budget.',
      'Run the first Consulting engagements to start generating cash.',
      'Produce the first Studio content and open the series format with one accompanied operator.',
      'Structure the opening of capital to future shareholders, in cash and in skills.',
      'Prepare a seed-stage funding application once those milestones are cleared.',
    ],
  },

  elsewhere: {
    eyebrow: 'Check for yourself',
    title: 'The two profiles that actually carry this',
    body: 'Rather than a speech about credibility, the work is open where it is published: the experiment code and the founder’s professional profile.',
    cta: 'Describe a need',
  },
};

export const about: Record<Locale, typeof fr> = { fr, en };
