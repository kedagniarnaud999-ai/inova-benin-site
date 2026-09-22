import type { Locale } from '../config';

/**
 * Contact. Deux voies, un seul destinataire : le formulaire et l'adresse
 * officielle publiée par la section 12 du brief aboutissent à la même boîte.
 * Aucun délai de réponse, aucun standard et aucune adresse postale ne sont
 * promis ici. Le nom du porteur vient de la section 2.3 du business plan, le
 * statut « en cours de constitution » de la section 2.2.
 */
const fr = {
  meta: {
    title: 'Contact — écrire à iNOVA BENIN (Consulting, Lab, Studio)',
    description:
      'Le formulaire du site ou l’e-mail officiel : les deux demandes arrivent au même endroit, chez le porteur du projet.',
  },

  hero: {
    eyebrow: 'Contact',
    title: 'Écrivez-nous, par la voie que vous préférez.',
    lede: 'Le formulaire ou l’e-mail officiel : les deux aboutissent à la même adresse, lue par le porteur du projet en personne.',
  },

  direct: {
    eyebrow: 'Adresse officielle',
    body: 'Ouvert dans votre messagerie, sans intermédiaire.',
    cta: 'Écrire à iNOVA',
  },

  form: {
    eyebrow: 'La demande',
    title: 'Dites ce dont vous avez besoin',
    intro:
      'Le nom et l’e-mail servent à vous répondre. Le pôle est une indication, pas un engagement.',
    unknown: 'Je ne sais pas encore',
    subject: 'Demande depuis le site iNOVA BENIN',
  },

  destination: {
    eyebrow: 'À qui ça va',
    body: 'Le formulaire et l’e-mail officiel tapent dans la même adresse, celle d’iNOVA BENIN. C’est Jolidon Arnaud KEDAGNI, porteur du projet, qui la lit et traite les demandes. La société est encore en cours de constitution.',
  },

  data: {
    eyebrow: 'Ce que devient votre message',
    body: 'Nom, e-mail, structure, pôle et besoin servent à répondre à cette demande. Ils ne sont ni revendus, ni ajoutés à une liste, ni réutilisés ailleurs.',
    more: 'Lire la page Confidentialité',
  },

  limits: {
    eyebrow: 'Une limite',
    body: 'Le formulaire n’accepte que du texte : n’envoyez pas de document, demandez-le en réponse.',
  },

  elsewhere: {
    eyebrow: 'Autre part',
    body: 'Les profils LinkedIn et GitHub sont rappelés en bas de chaque page.',
  },
};

const en: typeof fr = {
  meta: {
    title: 'Contact — write to iNOVA BENIN (Consulting, Lab, Studio)',
    description:
      'The form on this site or the official e-mail address: either way the request lands with the founder, in the same inbox.',
  },

  hero: {
    eyebrow: 'Contact',
    title: 'Write to us, the way you prefer.',
    lede: 'The form or the official address: both reach the same inbox, read by the person running the project.',
  },

  direct: {
    eyebrow: 'Official address',
    body: 'Opens in your mail client, with no intermediary.',
    cta: 'Write to iNOVA',
  },

  form: {
    eyebrow: 'The request',
    title: 'Say what you need',
    intro: 'Name and e-mail are there so we can answer. The pole is a hint, not a commitment.',
    unknown: 'Not sure yet',
    subject: 'Request from the iNOVA BENIN website',
  },

  destination: {
    eyebrow: 'Where it goes',
    body: 'The form and the official address feed the same inbox — iNOVA BENIN’s. Jolidon Arnaud KEDAGNI, who carries the project, reads it and handles the requests himself. The company is still being incorporated.',
  },

  data: {
    eyebrow: 'What becomes of your message',
    body: 'Name, e-mail, organisation, pole and need are used to answer this request. They are not resold, not added to a list, not reused elsewhere.',
    more: 'Read the Privacy page',
  },

  limits: {
    eyebrow: 'One limit',
    body: 'The form takes text only: don’t send a document, ask for it in reply.',
  },

  elsewhere: {
    eyebrow: 'Elsewhere',
    body: 'The LinkedIn and GitHub profiles are repeated at the foot of every page.',
  },
};

export const contact: Record<Locale, typeof fr> = { fr, en };
