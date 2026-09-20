import type { Locale } from '../i18n/config';

export type ExperimentStatus = 'live' | 'built';

export interface Experiment {
  /** Identifiant court, affiché en mono : c'est le numéro de dossier du Lab. */
  id: string;
  name: string;
  tagline: Record<Locale, string>;
  sector: Record<Locale, string>;
  /** `live` = accessible en ligne, `built` = construit mais non public. */
  status: ExperimentStatus;
  year: number;
  live?: string;
  repo?: string;
}

/**
 * Le carnet du Lab. Chaque entrée correspond à un dépôt réellement engagé.
 * Seules les expérimentations ayant produit quelque chose y figurent :
 * les concepts encore non construits sont tenus à l'écart du site public.
 *
 * Les URL `live` ont toutes été vérifiées comme répondant en 200 et affichant
 * le titre du produit. Le nombre affiché dans l'interface est dérivé de ce
 * tableau — il n'est jamais écrit en dur dans un texte.
 */
export const EXPERIMENTS: Experiment[] = [
  {
    id: 'LAB-01',
    name: 'AliTché',
    tagline: {
      fr: 'Orientation, formation et emploi pour les jeunes d’Afrique francophone : test psychométrique en six dimensions et parcours d’apprentissage personnalisés.',
      en: 'Guidance, training and jobs for young people in francophone Africa: a six-dimension psychometric assessment and personalised learning pathways.',
    },
    sector: { fr: 'Éducation et emploi', en: 'Education and employment' },
    status: 'live',
    year: 2026,
    live: 'https://ali-ce-i6it.vercel.app/',
    repo: 'https://github.com/kedagniarnaud999-ai/alice',
  },
  {
    id: 'LAB-02',
    name: 'La Vibe Map',
    tagline: {
      fr: 'Découverte du Bénin par la culture : lieux, activités et expériences locales, avec une information contextuelle et vérifiée.',
      en: 'Discovering Benin through culture: places, activities and local experiences, with contextual and verified information.',
    },
    sector: { fr: 'Tourisme et culture', en: 'Tourism and culture' },
    status: 'live',
    year: 2026,
    live: 'https://la-vibe-map-cultural-tourism-benin.ai.studio/',
    repo: 'https://github.com/kedagniarnaud999-ai/Vibe-Map',
  },
  {
    id: 'LAB-03',
    name: 'Nyì mì',
    tagline: {
      fr: 'Covoiturage solidaire au Bénin : mettre en relation conducteurs et passagers sur les trajets interurbains.',
      en: 'Solidarity carpooling in Benin: connecting drivers and passengers on intercity routes.',
    },
    sector: { fr: 'Mobilité', en: 'Mobility' },
    status: 'live',
    year: 2026,
    live: 'https://nyimi.vercel.app/',
    repo: 'https://github.com/kedagniarnaud999-ai/nyimi',
  },
  {
    id: 'LAB-04',
    name: 'LearnIS',
    tagline: {
      fr: 'Tuteur intelligent socratique : faire trouver la réponse par l’apprenant plutôt que de la lui donner.',
      en: 'A Socratic AI tutor: leading the learner to find the answer rather than handing it over.',
    },
    sector: { fr: 'Éducation et IA', en: 'Education and AI' },
    status: 'live',
    year: 2026,
    live: 'https://learnis.ai.studio/',
    repo: 'https://github.com/kedagniarnaud999-ai/LearnIS',
  },
  {
    id: 'LAB-05',
    name: 'AZOTCHE',
    tagline: {
      fr: 'Profils, portfolios et recherche géolocalisée pour les artisans béninois, avec mise en relation directe par WhatsApp.',
      en: 'Profiles, portfolios and geo-located search for Beninese artisans, with direct WhatsApp contact.',
    },
    sector: { fr: 'Artisanat', en: 'Trades and crafts' },
    status: 'built',
    year: 2026,
  },
  {
    id: 'LAB-06',
    name: 'Chronos',
    tagline: {
      fr: 'Gestion du temps : habitudes, tâches, agenda et rappels en temps réel dans une seule application.',
      en: 'Time management: habits, tasks, calendar and real-time reminders in a single app.',
    },
    sector: { fr: 'Productivité', en: 'Productivity' },
    status: 'built',
    year: 2026,
  },
];

export const LIVE_COUNT = EXPERIMENTS.filter((e) => e.status === 'live').length;
