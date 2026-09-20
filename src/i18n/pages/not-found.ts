import type { Locale } from '../config';

/**
 * Une seule adresse est servie pour les deux langues : Astro ne connaît qu'un
 * /404 et l'hébergeur le ressert sans savoir ce qui était demandé. Les deux
 * copies sont donc rendues l'une sous l'autre, chacune avec son lien de retour.
 */
const fr = {
  meta: {
    title: 'Page introuvable — iNOVA BENIN',
    description:
      'Cette adresse ne correspond à aucune page du site iNOVA BENIN. Les entrées réelles : accueil, les trois pôles, le carnet du Lab et le contact.',
  },
  eyebrow: 'Réponse du serveur',
  title: 'Aucune page derrière cette adresse.',
  body: 'La page a pu être déplacée, ou l’adresse a été recopiée avec une faute. Ce qui suit mène à quelque part.',
  home: 'Retour à l’accueil',
  ledger: 'Le carnet du Lab',
  contact: 'Écrire au porteur du projet',
};

const en: typeof fr = {
  meta: {
    title: 'Page not found — iNOVA BENIN',
    description:
      'This address does not match any page of the iNOVA BENIN site. The real entries: home, the three poles, the Lab ledger and contact.',
  },
  eyebrow: 'Server response',
  title: 'No page behind this address.',
  body: 'The page may have moved, or the address was copied with a typo. What follows leads somewhere.',
  home: 'Back to home',
  ledger: 'The Lab ledger',
  contact: 'Write to the founder',
};

export const notFound: Record<Locale, typeof fr> = { fr, en };
