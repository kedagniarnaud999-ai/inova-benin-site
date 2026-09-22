import type { Locale } from '../i18n/config';

/**
 * `live` : l'application répond et se parcourt.
 * `preview` : la façade est servie, une partie du service ne répond pas encore.
 * `built` : construit, mais consultable hors ligne.
 */
export type ExperimentStatus = 'live' | 'preview' | 'built';

/** Figure tracée par LabVisual : une géométrie par produit, jamais une capture. */
export type ExperimentVisual = 'path' | 'graticule' | 'routes' | 'dialogue' | 'modules' | 'cycle';

export interface Experiment {
  /** Identifiant court, affiché en mono : c'est le numéro de dossier du Lab. */
  id: string;
  name: string;
  /** La phrase d'adresse, courte : elle porte la carte du showcase. */
  promise: Record<Locale, string>;
  tagline: Record<Locale, string>;
  sector: Record<Locale, string>;
  /** Trois étiquettes maximum, affichées en pastilles sur la carte. */
  tags: Record<Locale, string[]>;
  status: ExperimentStatus;
  year: number;
  live?: string;
  repo?: string;
  /** Figure tracée en SVG pour la carte du showcase. Ce n'est pas l'écran du produit. */
  visual: ExperimentVisual;
}

/**
 * Le carnet du Lab. Chaque entrée correspond à un dépôt réellement engagé.
 * Les URL `live` sont vérifiées en HTTP : le serveur renvoie bien le titre du
 * produit. Les visuels sont des figures tracées, pas des captures : le produit
 * se juge en cliquant. Le nombre affiché dans l'interface est dérivé de ce
 * tableau — jamais écrit en dur dans un texte.
 */
export const EXPERIMENTS: Experiment[] = [
  {
    id: 'LAB-01',
    name: 'AliTché',
    promise: {
      fr: 'De l’admission à l’insertion : construis ta voie.',
      en: 'From admission to employment: build your path.',
    },
    tagline: {
      fr: 'Une plateforme pensée pour aider les jeunes à mieux comprendre leur profil, explorer leurs possibilités et construire progressivement leur parcours.',
      en: 'A platform built to help young people understand their profile, explore their options and shape their path step by step.',
    },
    sector: { fr: 'Éducation · Emploi', en: 'Education · Employment' },
    tags: {
      fr: ['Éducation', 'Orientation', 'Employabilité'],
      en: ['Education', 'Guidance', 'Employability'],
    },
    status: 'live',
    year: 2026,
    live: 'https://ali-ce-i6it.vercel.app/',
    repo: 'https://github.com/kedagniarnaud999-ai/alice',
    visual: 'path',
  },
  {
    id: 'LAB-02',
    name: 'La Vibe Map',
    promise: {
      fr: 'Découvrir le Bénin autrement, lieu par lieu.',
      en: 'Discovering Benin differently, place by place.',
    },
    tagline: {
      fr: 'Une expérience numérique pour découvrir autrement les lieux, expériences et territoires du Bénin, avec une information contextuelle et vérifiée.',
      en: 'A digital experience for exploring the places, activities and territories of Benin, with contextual and verified information.',
    },
    sector: { fr: 'Tourisme · Culture', en: 'Tourism · Culture' },
    tags: {
      fr: ['Tourisme', 'Culture', 'Territoires'],
      en: ['Tourism', 'Culture', 'Territories'],
    },
    status: 'live',
    year: 2026,
    live: 'https://la-vibe-map-cultural-tourism-benin.ai.studio/',
    repo: 'https://github.com/kedagniarnaud999-ai/Vibe-Map',
    visual: 'graticule',
  },
  {
    id: 'LAB-03',
    name: 'Nyì mì',
    promise: {
      fr: 'La mobilité partagée, version terrain.',
      en: 'Shared mobility, built for the field.',
    },
    tagline: {
      fr: 'Une expérimentation autour de la mobilité et de la mise en relation entre utilisateurs sur les trajets interurbains.',
      en: 'An experiment around mobility and matching users on intercity routes.',
    },
    sector: { fr: 'Mobilité · Services', en: 'Mobility · Services' },
    tags: {
      fr: ['Mobilité', 'Services', 'Économie collaborative'],
      en: ['Mobility', 'Services', 'Sharing economy'],
    },
    status: 'live',
    year: 2026,
    live: 'https://nyimi.vercel.app/',
    repo: 'https://github.com/kedagniarnaud999-ai/nyimi',
    visual: 'routes',
  },
  {
    id: 'LAB-04',
    name: 'LearnIS',
    promise: {
      fr: 'Faire trouver la réponse, pas la donner.',
      en: 'Leading the learner to the answer.',
    },
    tagline: {
      fr: 'Tuteur intelligent socratique : l’apprenant construit la réponse avec lui plutôt que de la recevoir.',
      en: 'A Socratic AI tutor: the learner works the answer out rather than being handed it.',
    },
    sector: { fr: 'Éducation · IA', en: 'Education · AI' },
    tags: {
      fr: ['Éducation', 'IA', 'Tutorat'],
      en: ['Education', 'AI', 'Tutoring'],
    },
    status: 'live',
    year: 2026,
    live: 'https://learnis.ai.studio/',
    repo: 'https://github.com/kedagniarnaud999-ai/LearnIS',
    visual: 'dialogue',
  },
  {
    id: 'LAB-05',
    name: 'AZOTCHE',
    promise: {
      fr: 'Un savoir-faire artisanal qui se trouve et se contacte.',
      en: 'Artisan skill you can find and call.',
    },
    tagline: {
      fr: 'Profils, portfolios et recherche géolocalisée pour les artisans béninois, avec mise en relation directe par WhatsApp.',
      en: 'Profiles, portfolios and geo-located search for Beninese artisans, with direct WhatsApp contact.',
    },
    sector: { fr: 'Artisanat', en: 'Trades and crafts' },
    tags: {
      fr: ['Artisanat', 'Géolocalisation', 'Mise en relation'],
      en: ['Crafts', 'Geo-search', 'Direct contact'],
    },
    status: 'live',
    year: 2026,
    live: 'https://azotche-one.vercel.app/',
    visual: 'modules',
  },
  {
    id: 'LAB-06',
    name: 'Chronos',
    promise: {
      fr: 'Habitudes, tâches et agenda dans une seule application.',
      en: 'Habits, tasks and calendar in one app.',
    },
    tagline: {
      fr: 'Gestion du temps : habitudes, tâches, agenda et rappels en temps réel, construite pour être tenue sur la durée.',
      en: 'Time management: habits, tasks, calendar and real-time reminders, built to be kept.',
    },
    sector: { fr: 'Productivité', en: 'Productivity' },
    tags: {
      fr: ['Productivité', 'Habitudes', 'Agenda'],
      en: ['Productivity', 'Habits', 'Calendar'],
    },
    // La façade est servie en production ; l'API attend encore sa base.
    status: 'preview',
    year: 2026,
    live: 'https://chronos-time-manager-phi.vercel.app/',
    visual: 'cycle',
  },
];

export const LIVE_COUNT = EXPERIMENTS.filter((e) => e.status === 'live').length;
