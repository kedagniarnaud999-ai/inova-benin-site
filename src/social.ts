/** Le seul nom publié sur le site, tel qu'il figure au business plan. */
export const FOUNDER = 'Jolidon Arnaud KEDAGNI';

/**
 * L'adresse de la structure, publiée par la section 12 du brief. Ce n'est pas
 * celle du fondateur : les deux ne sont jamais interchangeables.
 */
export const EMAIL = 'inovabenin1@gmail.com';

export interface Profile {
  label: string;
  href: string;
  /** Le profil d'une personne, tel que le brief demande de le signer ; absent pour un profil sans titulaire nommé. */
  person?: string;
}

/** Les deux seuls profils réels rattachés à l'entreprise ; servis au pied de page et à la page « À propos ». */
export const SOCIAL: Profile[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arnaud-kedagni-a236932ab',
    person: 'Arnaud KEDAGNI',
  },
  { label: 'GitHub', href: 'https://github.com/kedagniarnaud999-ai' },
];
