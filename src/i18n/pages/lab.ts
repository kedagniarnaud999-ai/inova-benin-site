import type { Locale } from '../config';

/**
 * iNOVA Lab. Sections 2.4, 4.1 et 5.2 du business plan pour la provenance. Les
 * seuls chiffres publiés ici sont comptés dans src/content/experiments.ts : le
 * total interne du plan (11) reste une donnée de pilotage, pas une promesse.
 */
const fr = {
  meta: {
    title: 'iNOVA Lab — Construction de produits et de startups à Cotonou',
    description:
      'Nous identifions des opportunités, nous prototypons, nous testons en conditions réelles et nous faisons émerger des startups. Le carnet public de nos expérimentations.',
  },

  hero: {
    eyebrow: 'iNOVA Lab',
    title: 'Nous transformons un problème observable en produit consultable.',
    lede: 'Nous identifions des opportunités, nous prototypons, nous testons en conditions réelles, puis nous faisons émerger des startups. Nous menons plusieurs expérimentations en parallèle, à des degrés de maturité différents, et nous publions celles qui ont produit quelque chose à examiner.',
    ledger: 'Descendre au carnet',
    method: 'Voir la méthode 369',
  },

  method: {
    eyebrow: 'Le parcours',
    title: 'Trois horizons, trois points de décision',
    intro:
      'Nous tenons chaque opportunité que nous suivons contre ces trois échéances. Chacune marque le moment où nous décidons, sur pièces, de continuer ou d’arrêter.',
    out: 'Au-delà de 9 semaines',
    outBody:
      'Quand une expérimentation a traversé les trois horizons sans traction, nous l’arrêtons ou nous la mettons en veille. Le carnet publie ce que nous avons construit.',
  },

  ledger: {
    eyebrow: 'Preuve',
    title: 'Le carnet',
    intro: (n: number, live: number) =>
      `Nous avons construit ${n} expérimentations à ce jour, dont ${live} accessibles en ligne. Nous publions les autres dès qu’elles donnent quelque chose à examiner.`,
  },

  seekers: {
    eyebrow: 'Ce que nous cherchons',
    title: 'Des utilisateurs, des clients, des partenaires.',
    body: 'Nous cherchons le plus tôt possible des utilisateurs, des clients ou des partenaires pour nos produits. Une expérimentation qui trouve ses preneurs peut devenir une startup ; nous arrêtons les autres.',
    cta: 'Proposer un partenariat sur un produit',
  },
};

const en: typeof fr = {
  meta: {
    title: 'iNOVA Lab — Building products and startups in Cotonou',
    description:
      'We spot opportunities, prototype, test under real conditions and bring startups up. The public ledger of our experiments.',
  },

  hero: {
    eyebrow: 'iNOVA Lab',
    title: 'We turn an observable problem into a product you can look at.',
    lede: 'We identify opportunities, prototype, test under real conditions, then bring startups up. We run several experiments in parallel, at different stages of maturity, and we publish the ones that produced something worth examining.',
    ledger: 'Go down to the ledger',
    method: 'See the 369 method',
  },

  method: {
    eyebrow: 'The track',
    title: 'Three horizons, three decision points',
    intro:
      'We hold every opportunity we take on against these three deadlines. Each one marks the moment where we decide, on evidence, whether to continue or stop.',
    out: 'Past week 9',
    outBody:
      'When an experiment crosses all three horizons without traction, we stop it or shelve it. The ledger publishes what we have built.',
  },

  ledger: {
    eyebrow: 'Proof',
    title: 'The ledger',
    intro: (n: number, live: number) =>
      `We have built ${n} experiments so far, ${live} of them live online. The others appear as soon as they produce something worth examining.`,
  },

  seekers: {
    eyebrow: 'What we are after',
    title: 'Users, customers, partners.',
    body: 'We look for users, customers or partners for our products as early as possible. An experiment that finds its takers may become a startup; we stop the others.',
    cta: 'Propose a partnership on a product',
  },
};

export const lab: Record<Locale, typeof fr> = { fr, en };
