import type { Locale } from '../config';

/**
 * iNOVA Studio. Page d'offre au sponsor : les trois formes de la section 3.4 du
 * business plan (partenariat de marque, contenu commandité, sponsoring
 * institutionnel) et la chaîne de production de la section 4.2, reprise du point
 * de vue du partenaire. Aucun épisode, aucune audience, aucun sponsor et aucun
 * chiffre de diffusion inventés.
 */
const fr = {
  meta: {
    title: 'iNOVA Studio — Sponsoring et partenariat de contenu au Bénin',
    description:
      'Nous produisons des contenus sur des acteurs économiques béninois réels et nous ouvrons ces formats à une marque ou à une institution : ce que le partenaire reçoit, sur quels formats, comment le partenariat se déroule.',
  },

  hero: {
    eyebrow: 'iNOVA Studio · Offre sponsor',
    title: 'Nous associons votre marque à des entrepreneurs qui construisent.',
    lede: 'Le Studio produit des interviews à chaud, un podcast et une série documentée sur des acteurs économiques béninois réels — formels, informels et semi-modernes. Une marque ou une institution peut financer l’un de ces formats : nous produisons le contenu, il est publié avec votre nom, et nous livrons le montage pour vos propres canaux.',
    primary: 'Proposer un partenariat',
    secondary: 'Voir les trois formats',
  },

  formats: {
    eyebrow: 'Les trois formats ouverts au sponsoring',
    title: 'Ce que votre marque peut porter',
    intro:
      'Les trois formats ci-dessous sont ceux que nous produisons et ceux que nous ouvrons aux premiers partenariats. Le sujet ou l’acteur se choisit avec vous au brief.',
    items: [
      {
        name: 'Format court',
        what: 'Interviews à chaud',
        where: 'Tourné en événement, diffusé sur les réseaux',
        body: 'Nous interrogeons des entrepreneurs béninois et des actrices des marchés sur ce qui marche dans leur activité, au moment où ils y travaillent.',
      },
      {
        name: 'Format long',
        what: 'Podcast',
        where: 'Destiné à la jeune génération d’entrepreneurs',
        body: 'Nous recueillons des expériences réelles, décrites assez précisément pour transmettre un enseignement.',
      },
      {
        name: 'Format série',
        what: 'Accompagnement documenté',
        where: 'Un acteur, du diagnostic aux résultats',
        body: 'Nous diagnostiquons un acteur économique, formel ou informel, sur le problème qui limite son activité, puis nous le suivons à l’écran jusqu’à des résultats concrets.',
      },
    ],
  },

  pipeline: {
    eyebrow: 'Déroulé d’un partenariat',
    title: 'Du brief commun au bilan écrit',
    intro:
      'Le brief pose le format, l’acteur ou le sujet et les mentions du partenaire. À partir de là, la production nous revient, diagnostic compris sur le format série.',
    steps: [
      'Brief commun : format, acteur ou sujet',
      'Cadrage écrit : périmètre, durée, mentions, livrables',
      'Captation',
      'Montage',
      'Publication',
      'Bilan : ce qui a été produit, où c’est publié',
    ],
    note: 'La production s’appuie sur un partenaire disposant d’une agence de communication et sur du matériel audio-vidéo déjà budgété. Le choix des acteurs nous reste propre : un partenariat finance un contenu, il n’achète pas le propos de l’invité.',
  },

  offer: {
    eyebrow: 'Offre',
    title: 'Nous ouvrons les premiers partenariats du Studio.',
    body: 'Partenariat de marque, contenu commandité, sponsoring institutionnel : les trois formes tiennent sur nos formats, à condition de rester alignées avec la promotion d’un entrepreneuriat adapté aux réalités africaines.',
    gives: [
      'Un contenu produit par notre chaîne, du brief à la publication.',
      'Votre nom associé au contenu, à l’écran comme à la publication.',
      'Le montage livré, réutilisable sur vos propres canaux.',
      'Un bilan écrit : ce qui a été produit, ce qui a été publié.',
    ],
    terms:
      'Un partenariat se chiffre au format, à la durée et au nombre de contenus. Le premier échange pose ces trois éléments, puis nous écrivons le cadrage.',
    cta: 'Proposer un partenariat',
  },
};

const en: typeof fr = {
  meta: {
    title: 'iNOVA Studio — Sponsorship and content partnership in Benin',
    description:
      'We produce content about real Beninese economic actors and we open those formats to a brand or an institution: what the partner receives, on which formats, how the partnership runs.',
  },

  hero: {
    eyebrow: 'iNOVA Studio · Sponsor offer',
    title: 'We put your brand beside entrepreneurs who are building.',
    lede: 'The Studio produces on-the-spot interviews, a podcast and a documented series about real Beninese economic actors — formal, informal and semi-modern. A brand or an institution can fund one of these formats: we produce the content, it is published with your name on it, and we hand you the edit for your own channels.',
    primary: 'Propose a partnership',
    secondary: 'See the three formats',
  },

  formats: {
    eyebrow: 'The three formats open to sponsorship',
    title: 'What your brand can carry',
    intro:
      'The three formats below are the ones we produce and the ones we open to the first partnerships. The subject or the actor is chosen with you at the brief.',
    items: [
      {
        name: 'Short format',
        what: 'On-the-spot interviews',
        where: 'Filmed at events, published on social channels',
        body: 'We ask Beninese entrepreneurs and market traders what works in their business, while they are working in it.',
      },
      {
        name: 'Long format',
        what: 'Podcast',
        where: 'For the next generation of entrepreneurs',
        body: 'We collect real experiences, described precisely enough to hand over a lesson.',
      },
      {
        name: 'Series format',
        what: 'Documented support',
        where: 'One actor, from diagnosis to results',
        body: 'We diagnose a formal or informal economic actor on the problem limiting their business, then follow them on camera until concrete results land.',
      },
    ],
  },

  pipeline: {
    eyebrow: 'How a partnership runs',
    title: 'From a shared brief to a written recap',
    intro:
      'The brief sets the format, the actor or subject and the partner mentions. From there, production is ours, diagnosis included on the series format.',
    steps: [
      'Shared brief: format, actor or subject',
      'Written scope: coverage, duration, mentions, deliverables',
      'Filming',
      'Editing',
      'Publishing',
      'Recap: what was produced, where it was published',
    ],
    note: 'Production relies on a partner running a communications agency and on audio-video equipment already budgeted. The choice of actors stays with us: a partnership funds a piece of content, it does not buy the guest’s words.',
  },

  offer: {
    eyebrow: 'The offer',
    title: 'We are opening the Studio’s first partnerships.',
    body: 'Brand partnership, commissioned content, institutional sponsorship: the three forms fit our formats, as long as they stay aligned with promoting entrepreneurship suited to African realities.',
    gives: [
      'A piece of content produced by our chain, from brief to publication.',
      'Your name tied to the content, on screen and at publication.',
      'The edit delivered, reusable on your own channels.',
      'A written recap: what was produced, what was published.',
    ],
    terms:
      'A partnership is priced on the format, the duration and the number of pieces. The first conversation settles those three, then we write the scope.',
    cta: 'Propose a partnership',
  },
};

export const studio: Record<Locale, typeof fr> = { fr, en };
