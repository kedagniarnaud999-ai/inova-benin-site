import type { Locale } from './config';

// Chaînes d'interface partagées. Le français fait foi, l'anglais est typé dessus.
const fr = {
  brand: 'iNOVA BENIN',
  tagline: 'Building Africa’s Next Ventures',
  status: 'SASU en cours de constitution · Cotonou, Bénin',

  nav: {
    consulting: 'Consulting',
    lab: 'Lab',
    studio: 'Studio',
    about: 'À propos',
    contact: 'Contact',
    menu: 'Ouvrir le menu',
    main: 'Navigation principale',
    language: 'Changer de langue',
    current: 'page actuelle',
    skip: 'Aller au contenu',
  },

  cta: {
    contact: 'Décrire un besoin',
    discover: 'Découvrir',
    read: 'Lire la page',
    back: 'Retour à l’accueil',
    seeProduct: 'Voir le produit',
    allExperiments: 'Tout le portefeuille',
  },

  footer: {
    legalTitle: 'Informations légales',
    privacy: 'Confidentialité',
    legal: 'Mentions légales',
    poles: 'Les trois pôles',
    company: 'L’entreprise',
    rights: 'Tous droits réservés.',
    built: 'Construit à Cotonou.',
  },

  form: {
    name: 'Votre nom',
    org: 'Entreprise ou structure',
    orgHint: 'Facultatif',
    email: 'E-mail',
    pole: 'De quel pôle avez-vous besoin ?',
    message: 'Votre besoin',
    messageHint: 'Le contexte, l’échéance, ce que vous cherchez.',
    send: 'Envoyer la demande',
    sending: 'Envoi…',
    sentTitle: 'Demande envoyée',
    // Pas de délai chiffré ici : rien ne le garantit tant que l'entreprise n'existe pas.
    sentBody: 'Elle part directement chez le porteur du projet, qui répond lui-même.',
    errorTitle: 'Envoi impossible',
    errorBody:
      'Le service d’envoi n’a pas répondu. Réessayez, ou passez par le lien LinkedIn indiqué en bas de page.',
    consent:
      'Vos informations servent uniquement à répondre à cette demande. Elles ne sont ni revendues ni ajoutées à une liste.',
    optional: 'facultatif',
    required: 'obligatoire',
  },

  labels: {
    method: 'Méthode 369',
    portfolio: 'Carnet du Lab',
    file: 'Dossier',
    experiment: 'Expérimentation',
    experiments: 'expérimentations',
    access: 'Accès',
    status_live: 'En ligne',
    status_built: 'Construit',
    status_private: 'Privé',
    status_concept: 'Concept',
    year: 'Année',
    sector: 'Secteur',
    stage: 'Étape',
    editor: 'Éditeur du site',
    host: 'Hébergeur',
    updated: 'Dernière mise à jour',
  },
};

const en: typeof fr = {
  brand: 'iNOVA BENIN',
  tagline: 'Building Africa’s Next Ventures',
  status: 'SASU being incorporated · Cotonou, Benin',

  nav: {
    consulting: 'Consulting',
    lab: 'Lab',
    studio: 'Studio',
    about: 'About',
    contact: 'Contact',
    menu: 'Open menu',
    main: 'Main navigation',
    language: 'Change language',
    current: 'current page',
    skip: 'Skip to content',
  },

  cta: {
    contact: 'Describe a need',
    discover: 'Discover',
    read: 'Read the page',
    back: 'Back to home',
    seeProduct: 'See the product',
    allExperiments: 'Full portfolio',
  },

  footer: {
    legalTitle: 'Legal information',
    privacy: 'Privacy',
    legal: 'Legal notice',
    poles: 'The three poles',
    company: 'The company',
    rights: 'All rights reserved.',
    built: 'Built in Cotonou.',
  },

  form: {
    name: 'Your name',
    org: 'Company or organisation',
    orgHint: 'Optional',
    email: 'Email',
    pole: 'Which pole do you need?',
    message: 'Your need',
    messageHint: 'Context, deadline, what you are looking for.',
    send: 'Send request',
    sending: 'Sending…',
    sentTitle: 'Request sent',
    sentBody: 'It goes straight to the founder, who answers personally.',
    errorTitle: 'Could not send',
    errorBody:
      'The sending service did not respond. Try again, or use the LinkedIn link at the bottom of the page.',
    consent:
      'Your details are used only to answer this request. They are not resold or added to any list.',
    optional: 'optional',
    required: 'required',
  },

  labels: {
    method: 'The 369 Method',
    portfolio: 'Lab ledger',
    file: 'File',
    experiment: 'Experiment',
    experiments: 'experiments',
    access: 'Access',
    status_live: 'Live',
    status_built: 'Built',
    status_private: 'Private',
    status_concept: 'Concept',
    year: 'Year',
    sector: 'Sector',
    stage: 'Stage',
    editor: 'Site publisher',
    host: 'Hosting provider',
    updated: 'Last updated',
  },
};

export const ui: Record<Locale, typeof fr> = { fr, en };

export function t(locale: Locale): typeof fr {
  return ui[locale];
}
