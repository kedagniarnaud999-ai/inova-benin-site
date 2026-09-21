import type { Locale } from '../config';

/**
 * Contact. Le formulaire est le seul canal demandé : aucune adresse e-mail
 * n'est affichée, donc aucun délai de réponse, aucun standard et aucune
 * adresse postale ne sont promis ici. Le nom du porteur vient de la
 * section 2.3 du business plan, le statut « en cours de constitution » de
 * la section 2.2.
 */
const fr = {
  meta: {
    title: 'Contact — écrire à iNOVA BENIN (Consulting, Lab, Studio)',
    description:
      'Un seul canal : le formulaire du site. Votre demande part directement chez le porteur du projet, qui y répond lui-même.',
  },

  hero: {
    eyebrow: 'Contact',
    title: 'Un seul canal, et c’est voulu.',
    lede: 'iNOVA BENIN n’affiche pas d’adresse e-mail. Tout passe par ce formulaire, et votre message part directement chez le porteur du projet.',
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
    body: 'C’est Jolidon Arnaud KEDAGNI, porteur du projet, qui lit et traite les demandes. L’entreprise est en cours de constitution : ce n’est ni un standard ni une boîte générique.',
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
      'One channel only: the form on this site. Your request goes straight to the founder, who answers it himself.',
  },

  hero: {
    eyebrow: 'Contact',
    title: 'One channel, and that is deliberate.',
    lede: 'iNOVA BENIN publishes no e-mail address. Everything goes through this form, and your message lands directly with the person running the project.',
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
    body: 'Jolidon Arnaud KEDAGNI, who carries the project, reads and handles the requests himself. The company is still being incorporated: this is neither a switchboard nor a shared inbox.',
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
