import type { Locale } from './config';

// Méthode 369 expliquée une seule fois : l'accueil et la page du Lab la lisent ici.
const fr = [
  {
    weeks: '3',
    unit: 'semaines',
    title: 'Produire et tester',
    body: 'Un prototype assez abouti pour être testé par de vraies personnes, pas une maquette pour une présentation.',
  },
  {
    weeks: '6',
    unit: 'semaines',
    title: 'Gagner en visibilité',
    body: 'Le produit sort du cercle interne : il est montré, utilisé, discuté. Le récit suit la construction.',
  },
  {
    weeks: '9',
    unit: 'semaines',
    title: 'Démontrer la valeur',
    body: 'Des utilisateurs, des clients ou un partenaire. Sans cela, l’expérimentation s’arrête là et le Lab passe à la suivante.',
  },
];

const en: typeof fr = [
  {
    weeks: '3',
    unit: 'weeks',
    title: 'Build and test',
    body: 'A prototype good enough to be tested by real people, not a mock-up for a slide deck.',
  },
  {
    weeks: '6',
    unit: 'weeks',
    title: 'Gain visibility',
    body: 'The product leaves the inner circle: it is shown, used, argued about. The story follows the build.',
  },
  {
    weeks: '9',
    unit: 'weeks',
    title: 'Prove the value',
    body: 'Users, customers or a partner. Without it, the experiment stops there and the Lab moves to the next one.',
  },
];

export const METHOD_STEPS: Record<Locale, typeof fr> = { fr, en };
export type MethodStep = (typeof fr)[number];

// Les quatre temps de l'accueil (§6 du brief). `mark` reste en anglais dans les
// deux langues : c'est le motif de la timeline, pas un libellé à traduire.
const buildFr = [
  {
    mark: 'BUILD',
    title: 'Construire',
    body: 'Nous partons d’un problème ou d’une opportunité et construisons rapidement une première solution.',
  },
  {
    mark: 'TEST',
    title: 'Tester',
    body: 'Nous confrontons nos hypothèses au terrain, aux utilisateurs et au marché.',
  },
  {
    mark: 'LEARN',
    title: 'Apprendre',
    body: 'Chaque expérimentation nous permet de comprendre ce qui fonctionne, ce qui doit évoluer et ce qui mérite d’être abandonné.',
  },
  {
    mark: 'GROW',
    title: 'Grandir',
    body: 'Lorsque le potentiel est confirmé, nous développons progressivement le produit, le projet ou la venture.',
  },
];

const buildEn: typeof buildFr = [
  {
    mark: 'BUILD',
    title: 'Build',
    body: 'We start from a problem or an opportunity and quickly build a first solution.',
  },
  {
    mark: 'TEST',
    title: 'Test',
    body: 'We put our hypotheses up against the field, real users and the market.',
  },
  {
    mark: 'LEARN',
    title: 'Learn',
    body: 'Each experiment shows what works, what has to change and what deserves to be dropped.',
  },
  {
    mark: 'GROW',
    title: 'Grow',
    body: 'Once the potential is confirmed, we grow the product, the project or the venture.',
  },
];

export const BUILD_STEPS: Record<Locale, typeof buildFr> = { fr: buildFr, en: buildEn };
