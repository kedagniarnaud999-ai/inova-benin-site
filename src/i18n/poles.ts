import type { Locale, Pole } from './config';

// Ce que le chrome du site dit d'un pôle : nom et fonction. Le reste appartient à sa page.
const fr = {
  consulting: { name: 'iNOVA Consulting', role: 'Conseil et accompagnement produit' },
  lab: { name: 'iNOVA Lab', role: 'Construction de produits et de startups' },
  studio: { name: 'iNOVA Studio', role: 'Contenus et valorisation entrepreneuriale' },
} satisfies Record<Pole, { name: string; role: string }>;

const en: typeof fr = {
  consulting: { name: 'iNOVA Consulting', role: 'Product and business advisory' },
  lab: { name: 'iNOVA Lab', role: 'Building products and startups' },
  studio: { name: 'iNOVA Studio', role: 'Content and entrepreneurial storytelling' },
};

export const poles: Record<Locale, typeof fr> = { fr, en };
