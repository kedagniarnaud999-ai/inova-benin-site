import type { Locale, Pole } from '../i18n/config';

// Ce que le chrome du site dit d'un pôle : nom, fonction, et la façon dont il
// se présente dans les trois blocs de l'accueil (§5 du brief). Le détail
// opérationnel appartient à la page de chaque pôle.
const fr = {
  consulting: {
    name: 'iNOVA Consulting',
    role: 'Conseil et accompagnement produit',
    promise: 'Transformer les idées en projets structurés.',
    body: 'Nous accompagnons organisations, entrepreneurs et porteurs de projets dans la conception, la structuration et la mise en œuvre de solutions adaptées à leurs enjeux.',
    skills: ['Product Strategy', 'Project Management', 'Digital Transformation', 'Innovation'],
    glyph: 'grid' as const,
  },
  lab: {
    name: 'iNOVA Lab',
    role: 'Construction de produits et de startups',
    promise: 'Transformer les problèmes en produits.',
    body: 'Le Lab explore des opportunités, prototype des solutions et développe de nouveaux produits, avec une approche orientée terrain, expérimentation et validation.',
    skills: ['Product Discovery', 'Prototyping', 'MVP', 'Validation', 'Venture Building'],
    glyph: 'network' as const,
  },
  studio: {
    name: 'iNOVA Studio',
    role: 'Contenus et valorisation entrepreneuriale',
    promise: 'Donner de la visibilité à ceux qui construisent.',
    body: 'Le Studio produit des contenus, documente des parcours et crée des collaborations autour de l’innovation, de l’entrepreneuriat et des réalités économiques africaines.',
    skills: ['Content', 'Storytelling', 'Media', 'Partnerships'],
    glyph: 'signal' as const,
  },
} satisfies Record<
  Pole,
  {
    name: string;
    role: string;
    promise: string;
    body: string;
    skills: string[];
    glyph: 'grid' | 'network' | 'signal';
  }
>;

const en: typeof fr = {
  consulting: {
    name: 'iNOVA Consulting',
    role: 'Product and business advisory',
    promise: 'Turning ideas into structured projects.',
    body: 'We work with organisations, entrepreneurs and project owners on designing, structuring and delivering solutions that fit their context.',
    skills: ['Product Strategy', 'Project Management', 'Digital Transformation', 'Innovation'],
    glyph: 'grid',
  },
  lab: {
    name: 'iNOVA Lab',
    role: 'Building products and startups',
    promise: 'Turning problems into products.',
    body: 'The Lab explores opportunities, prototypes solutions and builds new products, with an approach grounded in the field, experimentation and validation.',
    skills: ['Product Discovery', 'Prototyping', 'MVP', 'Validation', 'Venture Building'],
    glyph: 'network',
  },
  studio: {
    name: 'iNOVA Studio',
    role: 'Content and entrepreneurial storytelling',
    promise: 'Giving visibility to the people who build.',
    body: 'The Studio produces content, documents journeys and builds collaborations around innovation, entrepreneurship and African economic realities.',
    skills: ['Content', 'Storytelling', 'Media', 'Partnerships'],
    glyph: 'signal',
  },
};

export const poles: Record<Locale, typeof fr> = { fr, en };
