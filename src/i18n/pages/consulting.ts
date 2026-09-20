import type { Locale } from '../config';

/**
 * iNOVA Consulting. Tout vient des sections 2.4 (offre), 3.2 (à qui), 3.4
 * (tarification) et 4.2 (déroulé) du business plan. Aucun client, aucun
 * secteur revendiqué, aucun tarif qui n'y figure pas.
 */
const fr = {
  meta: {
    title: 'iNOVA Consulting — Conseil et accompagnement produit à Cotonou',
    description:
      'Conception de produits numériques, accompagnement à la transformation numérique, gestion de projets, Product Management et formation. Missions cadrées au besoin, facturées à la mission.',
  },

  hero: {
    eyebrow: 'iNOVA Consulting',
    title: 'Le pôle qui paie la structure, pas celui qui la raconte.',
    lede: 'Consulting est le premier moteur de trésorerie d’iNOVA BENIN : des missions pour des tiers — conception produit, transformation numérique, gestion de projet, formation — pendant que le Lab construit son portefeuille et que le Studio porte la visibilité.',
    primary: 'Décrire un besoin',
    secondary: 'Voir les trois pôles',
  },

  offers: {
    eyebrow: 'Ce que Consulting prend en charge',
    title: 'Six terrains, tous liés à la construction d’un produit',
    items: [
      {
        name: 'Conception de produits numériques',
        body: 'Pour des tiers : cadrer le besoin, dessiner la solution, la tenir jusqu’à ce qu’elle tienne debout.',
      },
      {
        name: 'Accompagnement à la transformation numérique',
        body: 'Reprendre des processus existants et les outiller, plutôt que de superposer un logiciel à un fonctionnement inchangé.',
      },
      {
        name: 'Gestion de projets',
        body: 'Piloter le périmètre, les échéances et les arbitrages, avec un point de contact unique.',
      },
      {
        name: 'Product Management',
        body: 'Décider ce qui est construit et dans quel ordre, à partir de ce que les utilisateurs font réellement.',
      },
      {
        name: 'Formation',
        body: 'Transmettre les méthodes utilisées sur les missions, aux équipes qui devront les poursuivre.',
      },
      {
        name: 'Accompagnement de PME et d’entrepreneurs',
        body: 'Un appui produit et entrepreneurial pour des structures qui n’ont pas de chef de produit en interne.',
      },
    ],
  },

  audiences: {
    eyebrow: 'À qui ça s’adresse',
    title: 'PME, entrepreneurs et institutions',
    body: 'Le business plan cible une demande précise : la conception produit, la transformation numérique ou l’accompagnement en gestion de projet. Pas de secteur privilégié, pas de taille minimale.',
  },

  process: {
    eyebrow: 'Comment une mission se déroule',
    title: 'Cinq étapes, dans cet ordre',
    intro:
      'Le déroulé est celui que le business plan a fixé pour le pôle. Il ne promet ni un délai ni une équipe dédiée : il dit dans quel ordre les choses se passent.',
    steps: [
      { title: 'Prise de contact', body: 'Le contexte est décrit par celui qui a le besoin, pas deviné par celui qui va le traiter.' },
      { title: 'Diagnostic des besoins', body: 'Premier échange : ce qui bloque réellement, et ce qui ne l’est pas.' },
      { title: 'Proposition de mission', body: 'Périmètre, livrables attendus et conditions, écrits avant de démarrer.' },
      { title: 'Réalisation', body: 'La mission est conduite avec les méthodes utilisées au Lab, pas une méthode de présentation.' },
      { title: 'Livrables et suivi', body: 'Ce qui est produit est remis, et reste compréhensible sans nous.' },
    ],
  },

  pricing: {
    eyebrow: 'Tarification',
    title: 'Fixée à la mission',
    body: 'Le business plan écarte la grille tarifaire : chaque mission est chiffrée en fonction de la valeur produite et de la nature de l’accompagnement demandé. Le premier échange sert à établir ces deux éléments, pas à établir une facture.',
    note: 'À ce stade, iNOVA BENIN est en cours de constitution : les conditions sont établies au cas par cas, contrat par contrat.',
  },
};

const en: typeof fr = {
  meta: {
    title: 'iNOVA Consulting — Product advisory and support in Cotonou',
    description:
      'Digital product design, digital transformation support, project management, Product Management and training. Missions scoped to the need, priced per mission.',
  },

  hero: {
    eyebrow: 'iNOVA Consulting',
    title: 'The pole that pays for the structure, not the one that talks about it.',
    lede: 'Consulting is iNOVA BENIN’s first cash engine: missions for third parties — product design, digital transformation, project management, training — while the Lab builds its portfolio and the Studio carries the visibility.',
    primary: 'Describe a need',
    secondary: 'See the three poles',
  },

  offers: {
    eyebrow: 'What Consulting takes on',
    title: 'Six grounds, all of them about building a product',
    items: [
      {
        name: 'Digital product design',
        body: 'For third parties: frame the need, design the solution, and stay with it until it stands up.',
      },
      {
        name: 'Digital transformation support',
        body: 'Taking existing processes and tooling them, rather than laying software over an unchanged way of working.',
      },
      {
        name: 'Project management',
        body: 'Steering scope, deadlines and trade-offs, with a single point of contact.',
      },
      {
        name: 'Product Management',
        body: 'Deciding what gets built and in which order, from what users actually do.',
      },
      {
        name: 'Training',
        body: 'Handing over the methods used on the missions, to the teams that have to carry them on.',
      },
      {
        name: 'Support for SMEs and entrepreneurs',
        body: 'Product and entrepreneurial support for organisations without an in-house product owner.',
      },
    ],
  },

  audiences: {
    eyebrow: 'Who it is for',
    title: 'SMEs, entrepreneurs and institutions',
    body: 'The business plan aims at a specific demand: product design, digital transformation or project management support. No favoured sector, no minimum size.',
  },

  process: {
    eyebrow: 'How a mission runs',
    title: 'Five stages, in that order',
    intro:
      'This is the sequence the business plan set for the pole. It promises neither a deadline nor a dedicated team: it says in which order things happen.',
    steps: [
      { title: 'First contact', body: 'The context is described by the person who has the need, not guessed by the one who will handle it.' },
      { title: 'Needs diagnosis', body: 'A first conversation: what genuinely blocks, and what does not.' },
      { title: 'Mission proposal', body: 'Scope, expected deliverables and terms, written down before starting.' },
      { title: 'Delivery', body: 'The mission runs on the methods used at the Lab, not on presentation methods.' },
      { title: 'Deliverables and follow-up', body: 'What is produced is handed over, and stays understandable without us.' },
    ],
  },

  pricing: {
    eyebrow: 'Pricing',
    title: 'Set per mission',
    body: 'The business plan rules out a price list: each mission is priced on the value produced and the kind of support requested. The first conversation establishes those two things, not an invoice.',
    note: 'At this stage iNOVA BENIN is still being incorporated: terms are set case by case, contract by contract.',
  },
};

export const consulting: Record<Locale, typeof fr> = { fr, en };
