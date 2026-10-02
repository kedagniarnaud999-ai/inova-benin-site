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
      'Nous concevons des produits numériques, nous accompagnons la transformation numérique, nous pilotons des projets et nous formons les équipes. Chaque mission est cadrée au besoin et chiffrée à la mission.',
  },

  hero: {
    eyebrow: 'iNOVA Consulting',
    title: 'Votre besoin. Notre méthode. Un produit livré.',
    lede: 'Consulting, c’est iNOVA SPACE au travail pour d’autres : conception produit, transformation numérique, gestion de projet, formation. Nous puisons nos méthodes dans les produits que le Lab construit et que le Studio fait connaître.',
    primary: 'Décrire un besoin',
    secondary: 'Voir les trois pôles',
  },

  offers: {
    eyebrow: 'Ce que nous prenons en charge',
    title: 'Six terrains, tous liés à la construction d’un produit',
    items: [
      {
        name: 'Conception de produits numériques',
        body: 'Pour le compte d’un tiers : nous cadrons le besoin, nous dessinons la solution et nous la tenons jusqu’à ce qu’elle tienne debout.',
      },
      {
        name: 'Accompagnement à la transformation numérique',
        body: 'Nous outillons les processus existants pendant que nous les reprenons : l’outil et le fonctionnement changent ensemble.',
      },
      {
        name: 'Gestion de projets',
        body: 'Nous pilotons le périmètre, les échéances et les arbitrages, avec un point de contact unique.',
      },
      {
        name: 'Product Management',
        body: 'Nous décidons ce qui est construit et dans quel ordre, à partir de ce que les utilisateurs font réellement.',
      },
      {
        name: 'Formation',
        body: 'Nous transmettons les méthodes utilisées sur les missions aux équipes qui doivent les poursuivre.',
      },
      {
        name: 'Accompagnement de PME et d’entrepreneurs',
        body: 'Un appui produit et entrepreneurial pour les structures qui nous confient ce rôle.',
      },
    ],
  },

  audiences: {
    eyebrow: 'À qui ça s’adresse',
    title: 'PME, entrepreneurs et institutions',
    body: 'Nous visons une demande précise : conception produit, transformation numérique ou accompagnement en gestion de projet. Nous travaillons avec tous les secteurs et toutes les tailles de structure.',
  },

  process: {
    eyebrow: 'Comment une mission se déroule',
    title: 'Cinq étapes, dans cet ordre',
    intro:
      'Nous conduisons toutes les missions du pôle sur ce déroulé. Il fixe l’ordre des étapes ; le délai et l’équipe se déterminent à la proposition.',
    steps: [
      { title: 'Prise de contact', body: 'Celui qui a le besoin décrit le contexte ; nous partons de sa description.' },
      { title: 'Diagnostic des besoins', body: 'Premier échange : nous identifions ce qui bloque réellement.' },
      { title: 'Proposition de mission', body: 'Nous écrivons le périmètre, les livrables attendus et les conditions avant de démarrer.' },
      { title: 'Réalisation', body: 'Nous conduisons la mission avec les méthodes utilisées au Lab.' },
      { title: 'Livrables et suivi', body: 'Nous remettons ce que nous produisons : cela reste compréhensible et modifiable après la mission.' },
    ],
  },

  pricing: {
    eyebrow: 'Tarification',
    title: 'Fixée à la mission',
    body: 'Nous chiffrons chaque mission selon la valeur produite et la nature de l’accompagnement demandé. Le premier échange sert à établir ces deux éléments.',
    note: 'À ce stade, iNOVA SPACE est en cours de constitution : les conditions sont établies au cas par cas, contrat par contrat.',
  },
};

const en: typeof fr = {
  meta: {
    title: 'iNOVA Consulting — Product advisory and support in Cotonou',
    description:
      'We design digital products, we support digital transformation, we run projects and we train teams. Each mission is scoped to the need and priced per mission.',
  },

  hero: {
    eyebrow: 'iNOVA Consulting',
    title: 'Your need. Our method. A delivered product.',
    lede: 'Consulting is iNOVA SPACE working for others: product design, digital transformation, project management, training. We draw our methods from the products the Lab builds and the Studio makes known.',
    primary: 'Describe a need',
    secondary: 'See the three poles',
  },

  offers: {
    eyebrow: 'What we take on',
    title: 'Six grounds, all of them about building a product',
    items: [
      {
        name: 'Digital product design',
        body: 'On behalf of a third party: we frame the need, we design the solution and we stay with it until it stands up.',
      },
      {
        name: 'Digital transformation support',
        body: 'We tool the existing processes while we rethink them: the software and the way of working change together.',
      },
      {
        name: 'Project management',
        body: 'We steer scope, deadlines and trade-offs, with a single point of contact.',
      },
      {
        name: 'Product Management',
        body: 'We decide what gets built and in which order, from what users actually do.',
      },
      {
        name: 'Training',
        body: 'We hand over the methods used on the missions to the teams that have to carry them on.',
      },
      {
        name: 'Support for SMEs and entrepreneurs',
        body: 'Product and entrepreneurial support for organisations that hand this role to us.',
      },
    ],
  },

  audiences: {
    eyebrow: 'Who it is for',
    title: 'SMEs, entrepreneurs and institutions',
    body: 'We aim at a specific demand: product design, digital transformation or project management support. We work with every sector and every size of organisation.',
  },

  process: {
    eyebrow: 'How a mission runs',
    title: 'Five stages, in that order',
    intro:
      'We run every mission of the pole on this sequence. It fixes the order of the stages; the deadline and the team are settled at the proposal.',
    steps: [
      { title: 'First contact', body: 'The person who has the need describes the context; we start from their description.' },
      { title: 'Needs diagnosis', body: 'A first conversation: we identify what genuinely blocks.' },
      { title: 'Mission proposal', body: 'We write down scope, expected deliverables and terms before starting.' },
      { title: 'Delivery', body: 'We run the mission on the methods used at the Lab.' },
      { title: 'Deliverables and follow-up', body: 'We hand over what we produce: it stays understandable and editable after the mission.' },
    ],
  },

  pricing: {
    eyebrow: 'Pricing',
    title: 'Set per mission',
    body: 'We price each mission on the value produced and the kind of support requested. The first conversation establishes those two things.',
    note: 'At this stage iNOVA SPACE is still being incorporated: terms are set case by case, contract by contract.',
  },
};

export const consulting: Record<Locale, typeof fr> = { fr, en };
