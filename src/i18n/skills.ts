import type { Locale } from './config';

/**
 * Le réseau de compétences : la source unique. Le nombre que le site affiche
 * (« 11 Capabilities ») se dérive d'ici, et les libellés anglais restent
 * anglais dans les deux langues — c'est ainsi que le brief les écrit.
 */
export const SKILLS = [
  'Product',
  'Technology',
  'Design',
  'Data',
  'Project Management',
  'Digital Transformation',
  'Marketing',
  'Business Development',
  'Finance',
  'Legal',
  'Communication',
] as const;

/** Les équivalents français, dans le même ordre, pour les pages qui nomment. */
export const SKILLS_FR = [
  'Produit',
  'Technologie',
  'Design',
  'Data',
  'Gestion de projet',
  'Transformation digitale',
  'Marketing',
  'Business development',
  'Finance',
  'Juridique',
  'Communication',
] as const;

export function skillNames(locale: Locale): readonly string[] {
  return locale === 'fr' ? SKILLS_FR : SKILLS;
}
