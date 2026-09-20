import type { Locale } from '../config';

/**
 * iNOVA Lab. Sections 2.4, 4.1 et 5.2 du business plan. Le total du
 * portefeuille (11) vient du business plan ; ce qui est publié ici est compté
 * dans src/content/experiments.ts, jamais dans ce texte.
 */
const fr = {
  meta: {
    title: 'iNOVA Lab — Construction de produits et de startups à Cotonou',
    description:
      'Le Lab identifie des opportunités, prototype des produits, teste en conditions réelles et fait progressivement émerger des startups. Carnet public des expérimentations réellement engagées.',
  },

  hero: {
    eyebrow: 'iNOVA Lab',
    title: 'Le pôle où l’on construit, pas celui où l’on explique.',
    lede: 'Identification d’opportunités, prototypage, MVP, test de marché, création progressive de startups. Le portefeuille compte onze expérimentations à des degrés de maturité différents. Celles qui ont produit quelque chose de consultable sont publiées ci-dessous.',
    ledger: 'Descendre au carnet',
    method: 'Voir la méthode 369',
  },

  method: {
    eyebrow: 'Le parcours',
    title: 'Trois horizons, trois points de contrôle',
    intro:
      'Chaque opportunité suivie par le Lab est tenue contre ces trois échéances. Ce ne sont pas des promesses de résultat : ce sont les moments où l’on décide si ça continue.',
    out: 'Au-delà de 9 semaines',
    outBody:
      'Une expérimentation qui a passé les trois horizons sans traction est arrêtée ou mise en veille. Le carnet n’affiche que ce qui a été construit.',
  },

  ledger: {
    eyebrow: 'Preuve',
    title: 'Le carnet',
    intro: (n: number, live: number) =>
      `${n} expérimentations construites sur les onze du portefeuille, dont ${live} accessibles en ligne. Les autres sont publiées au fur et à mesure qu’elles produisent quelque chose de consultable.`,
    built: 'construites',
    live: 'en ligne',
  },

  seekers: {
    eyebrow: 'Ce que le Lab cherche',
    title: 'Des preneurs, pas des spectateurs',
    body: 'L’objectif du business plan est explicite : trouver le plus tôt possible des utilisateurs, des clients ou des partenaires pour les produits du portefeuille. Une expérimentation qui trouve ses preneurs peut devenir une startup ; les autres s’arrêtent.',
    cta: 'Proposer un partenariat sur un produit',
  },
};

const en: typeof fr = {
  meta: {
    title: 'iNOVA Lab — Building products and startups in Cotonou',
    description:
      'The Lab identifies opportunities, prototypes, tests under real conditions and gradually brings startups up. Public ledger of the experiments genuinely under way.',
  },

  hero: {
    eyebrow: 'iNOVA Lab',
    title: 'The pole where things get built, not where they get explained.',
    lede: 'Opportunity spotting, prototyping, MVPs, market testing, gradual startup creation. The portfolio holds eleven experiments at different stages of maturity. The ones that produced something worth looking at are published below.',
    ledger: 'Go down to the ledger',
    method: 'See the 369 method',
  },

  method: {
    eyebrow: 'The track',
    title: 'Three horizons, three checkpoints',
    intro:
      'Every opportunity the Lab takes on is held against these three deadlines. They are not promises of a result: they are the moments where we decide whether it continues.',
    out: 'Past week 9',
    outBody:
      'An experiment that clears all three horizons without traction is stopped or shelved. The ledger only shows what was built.',
  },

  ledger: {
    eyebrow: 'Proof',
    title: 'The ledger',
    intro: (n: number, live: number) =>
      `${n} experiments built out of the portfolio’s eleven, ${live} of them live online. The others appear here as soon as they produce something worth looking at.`,
    built: 'built',
    live: 'online',
  },

  seekers: {
    eyebrow: 'What the Lab is after',
    title: 'Takers, not spectators',
    body: 'The business plan states the objective plainly: find users, customers or partners for the portfolio products as early as possible. An experiment that finds its takers may become a startup; the others stop.',
    cta: 'Propose a partnership on a product',
  },
};

export const lab: Record<Locale, typeof fr> = { fr, en };
