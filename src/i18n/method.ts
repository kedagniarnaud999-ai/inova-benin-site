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
