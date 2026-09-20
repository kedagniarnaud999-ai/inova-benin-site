import type { Locale } from '../config';

/**
 * iNOVA Studio. Sections 2.4 (formats), 3.2 (audience), 3.4 (visibilité et
 * monétisation), 4.2 (chaîne de production) et 6 (facteur de risque) du
 * business plan. Aucun épisode, aucune audience, aucun partenaire inventés.
 */
const fr = {
  meta: {
    title: 'iNOVA Studio — Contenus de valorisation entrepreneuriale au Bénin',
    description:
      'Interviews à chaud, podcast et série documentée sur les modèles économiques béninois réels, formels, informels et semi-modernes. Le Studio se finance par partenariats, pas par publicité display.',
  },

  hero: {
    eyebrow: 'iNOVA Studio',
    title: 'Montrer les modèles qui marchent, pas ceux qui se vendent bien.',
    lede: 'Le Studio produit des contenus sur des acteurs économiques béninois réels — formels, informels et semi-modernes. Sa visibilité ne vient pas d’une démarche commerciale : elle vient des personnes qu’il met en avant, et c’est ce qui rend iNOVA Consulting crédible sans avoir à le dire.',
    primary: 'Proposer un partenariat',
    secondary: 'Voir les trois formats',
  },

  formats: {
    eyebrow: 'Ce que le Studio produit',
    title: 'Trois formats, déjà définis',
    intro:
      'Le Studio n’a pas encore de catalogue publié. Les trois formats ci-dessous sont ceux que le business plan a fixés, et ceux pour lesquels les premiers partenariats sont ouverts.',
    items: [
      {
        name: 'Format court',
        what: 'Interviews à chaud',
        where: 'En événement et en rencontre',
        body: 'Des entrepreneurs béninois et des actrices des marchés, interrogés sur ce qui marche dans leur activité, au moment où ils y travaillent.',
      },
      {
        name: 'Format long',
        what: 'Podcast',
        where: 'Destiné à la jeune génération d’entrepreneurs',
        body: 'Des expériences réelles, décrites assez précisément pour transmettre des enseignements et pas seulement une anecdote.',
      },
      {
        name: 'Format série',
        what: 'Accompagnement documenté',
        where: 'Un acteur, du diagnostic aux résultats',
        body: 'Un acteur économique formel ou informel est diagnostiqué sur le problème qui limite son activité, puis suivi à l’écran jusqu’à l’obtention de résultats concrets.',
      },
    ],
  },

  pipeline: {
    eyebrow: 'Chaîne de production',
    title: 'De l’identification du sujet à l’accompagnement des résultats',
    intro:
      'La série est le seul format où le diagnostic intervient : un interview à chaud n’attend pas qu’un problème soit posé.',
    steps: [
      'Identification du sujet ou de l’acteur',
      'Diagnostic du problème qui limite son activité',
      'Captation',
      'Montage',
      'Publication',
      'Accompagnement des résultats',
    ],
    note: 'La production s’appuie sur un partenaire disposant d’une agence de communication, et sur du matériel audio-vidéo identifié dans le budget de démarrage.',
  },

  funding: {
    eyebrow: 'Financement',
    title: 'Des partenariats, pas de la publicité display',
    body: 'Partenariats de marque, contenu commandité, sponsoring institutionnel : chaque format peut accueillir une marque ou une institution, à condition de rester aligné avec la promotion d’un entrepreneuriat adapté aux réalités africaines.',
    risk: 'Le business plan le dit aussi : cette monétisation dépend de l’adhésion effective de sponsors, et n’a pas encore été testée sur le marché béninois.',
    cta: 'Proposer un partenariat',
  },
};

const en: typeof fr = {
  meta: {
    title: 'iNOVA Studio — Entrepreneurial storytelling content in Benin',
    description:
      'On-the-spot interviews, a podcast and a documented series on real Beninese economic models — formal, informal and semi-modern. The Studio is funded by partnerships, not display advertising.',
  },

  hero: {
    eyebrow: 'iNOVA Studio',
    title: 'Show the models that work, not the ones that sell themselves well.',
    lede: 'The Studio produces content about real Beninese economic actors — formal, informal and semi-modern. Its visibility does not come from sales outreach: it comes from the people it puts forward, which is what makes iNOVA Consulting credible without having to say so.',
    primary: 'Propose a partnership',
    secondary: 'See the three formats',
  },

  formats: {
    eyebrow: 'What the Studio makes',
    title: 'Three formats, already defined',
    intro:
      'The Studio has no published catalogue yet. The three formats below are the ones the business plan set, and the ones its first partnerships are opened for.',
    items: [
      {
        name: 'Short format',
        what: 'On-the-spot interviews',
        where: 'At events and meet-ups',
        body: 'Beninese entrepreneurs and market traders, asked about what works in their business while they are working in it.',
      },
      {
        name: 'Long format',
        what: 'Podcast',
        where: 'For the next generation of entrepreneurs',
        body: 'Real experiences, described precisely enough to hand over a lesson and not just an anecdote.',
      },
      {
        name: 'Series format',
        what: 'Documented support',
        where: 'One actor, from diagnosis to results',
        body: 'A formal or informal economic actor is diagnosed on the problem limiting their business, then followed on camera until concrete results land.',
      },
    ],
  },

  pipeline: {
    eyebrow: 'Production chain',
    title: 'From spotting the subject to following up on results',
    intro: 'The series is the only format where the diagnosis comes in: an on-the-spot interview does not wait for a problem to be framed.',
    steps: [
      'Spotting the subject or the actor',
      'Diagnosing the problem that limits their business',
      'Filming',
      'Editing',
      'Publishing',
      'Following up on results',
    ],
    note: 'Production relies on a partner running a communications agency, and on the audio-video equipment listed in the start-up budget.',
  },

  funding: {
    eyebrow: 'Funding',
    title: 'Partnerships, not display advertising',
    body: 'Brand partnerships, commissioned content, institutional sponsorship: any format can carry a brand or an institution, as long as it stays aligned with promoting entrepreneurship suited to African realities.',
    risk: 'The business plan also says this: that monetisation depends on sponsors actually showing up, and has not been tested on the Beninese market yet.',
    cta: 'Propose a partnership',
  },
};

export const studio: Record<Locale, typeof fr> = { fr, en };
