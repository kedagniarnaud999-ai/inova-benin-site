import type { Locale } from '../config';
import type { LegalBlock, LegalContent } from './legal';
import { FOUNDER } from '../../social';

const blocks: Record<Locale, LegalBlock[]> = {
  fr: [
    {
      label: 'Responsable du traitement',
      body: `${FOUNDER}, porteur du projet iNOVA BENIN. La société n’étant pas encore immatriculée, c’est lui et non une personne morale qui répond des données traitées ici.`,
    },
    {
      label: 'Données collectées',
      body: 'Une seule voie collectera des données personnelles : le formulaire de contact. Les champs sont les suivants.',
      items: [
        'Votre nom — obligatoire, pour savoir à qui répondre.',
        'Entreprise ou structure — facultatif.',
        'Adresse électronique — obligatoire, c’est le seul point de retour.',
        'Pôle concerné — facultatif, et « je ne sais pas encore » est un choix prévu.',
        'Votre besoin — obligatoire, contexte et échéance.',
      ],
    },
    {
      label: 'Finalité',
      body: 'Répondre à la demande, et rien d’autre. Les informations ne sont ni revendues, ni ajoutées à une liste de diffusion, ni utilisées pour une campagne. Aucun message commercial ne partira depuis cette adresse.',
    },
    {
      label: 'Base légale',
      body: 'Votre envoi du formulaire. Aucun profilage, aucune décision automatisée, aucun traitement secondaire n’est opéré à partir de ces champs.',
    },
    {
      label: 'Sous-traitant',
      body: 'Les demandes sont transmises par Web3Forms, un service tiers qui relaie le message jusqu’à son destinataire. L’identifiant public du formulaire est lisible dans le code source de la page : c’est le fonctionnement normal de ce service. L’adresse de réception, elle, n’apparaît nulle part sur le site — et les origines autorisées à envoyer sont restreintes au domaine du site.',
    },
    {
      label: 'Durée de conservation',
      body: 'Le temps de traiter la demande et de garder la trace des échanges. Passé ce délai, les conversations sont supprimées, ou conservées sur votre demande explicite si nous devons justifier d’un engagement pris. Aucune durée chiffrée n’est publiée tant que la structure n’existe pas encore : préférer une phrase exacte à un chiffre arbitraire.',
    },
    {
      label: 'Cookies et mesure d’audience',
      body: 'Aucun cookie de suivi, aucun outil de mesure d’audience, aucun script tiers n’est chargé par les pages. Le site est statique : il n’a ni compte, ni base de données, ni session. La seule requête sortante est l’envoi du formulaire.',
    },
    {
      label: 'Sécurité',
      body: 'Le formulaire transite en HTTPS. Aucun champ ne reçoit de mot de passe, de pièce d’identité ni de donnée bancaire, et il ne faut pas en envoyer : la description d’un besoin suffit.',
    },
    {
      label: 'Vos droits',
      body: 'Accès, rectification, effacement et opposition s’exercent par le formulaire de contact, en indiquant l’adresse électronique utilisée lors de la demande. La réponse est donnée par le porteur du projet lui-même.',
    },
  ],
  en: [
    {
      label: 'Data controller',
      body: `${FOUNDER}, founder of the iNOVA BENIN project. Since the company is not yet registered, it is he — not a legal entity — answerable for the data processed here.`,
    },
    {
      label: 'Data collected',
      body: 'One single path collects personal data: the contact form. These are the fields.',
      items: [
        'Your name — required, so we know whom to answer.',
        'Company or organisation — optional.',
        'E-mail address — required, the only return channel.',
        'Which pole — optional, and “not sure yet” is an offered choice.',
        'Your need — required, context and deadline.',
      ],
    },
    {
      label: 'Purpose',
      body: 'Answering the request, nothing else. The information is not resold, not added to a mailing list, not used for any campaign. No marketing message will leave from that address.',
    },
    {
      label: 'Lawful basis',
      body: 'You sending the form. No profiling, no automated decision-making, no secondary processing is run on those fields.',
    },
    {
      label: 'Processor',
      body: 'Requests are relayed by Web3Forms, a third-party service that forwards the message to its recipient. The form’s public identifier is readable in the page source: that is how the service works. The receiving address appears nowhere on the site, and the origins allowed to submit are restricted to the site’s own domain.',
    },
    {
      label: 'Retention',
      body: 'For as long as it takes to handle the request and keep track of the exchange. After that the conversation is deleted, or kept at your explicit request if we must evidence a commitment. No fixed number of months is published while the structure does not exist yet: a true sentence beats an arbitrary figure.',
    },
    {
      label: 'Cookies and analytics',
      body: 'No tracking cookie, no analytics tool, no third-party script is loaded by the pages. The site is static: no accounts, no database, no session. The only outgoing request is the form submission.',
    },
    {
      label: 'Security',
      body: 'The form travels over HTTPS. No field expects a password, an identity document or bank details, and none should be sent: a description of the need is enough.',
    },
    {
      label: 'Your rights',
      body: 'Access, rectification, erasure and objection are exercised through the contact form, quoting the e-mail address used in the request. The answer comes from the founder directly.',
    },
  ],
};

/**
 * Politique de confidentialité. Chaque affirmation de cette page est
 * vérifiable dans `dist/` : l'absence de traceur et de script tiers y est
 * contrôlée après build, pas promise.
 */
export const privacy: Record<Locale, LegalContent> = {
  fr: {
    meta: {
      title: 'Confidentialité — iNOVA BENIN',
      description:
        'Ce que le formulaire de contact collecte, pourquoi, qui le relaie, et ce que le site ne fait pas : ni cookie, ni mesure d’audience, ni revente.',
    },
    hero: {
      eyebrow: 'Confidentialité',
      title: 'Le formulaire est le seul endroit où vous donnez quelque chose.',
      lede: 'Le site est statique et ne suit personne. Cette page liste les cinq champs du formulaire, ce qu’ils deviennent, et ce qui n’existe nulle part ici : ni traceur, ni liste de diffusion.',
    },
    blocks: blocks.fr,
  },

  en: {
    meta: {
      title: 'Privacy — iNOVA BENIN',
      description:
        'What the contact form collects, why, who relays it, and what the site does not do: no cookies, no analytics, no resale.',
    },
    hero: {
      eyebrow: 'Privacy',
      title: 'The form is the only place where you give anything.',
      lede: 'The site is static and tracks nobody. This page lists the form’s five fields, what becomes of them, and what exists nowhere here: no tracker, no mailing list.',
    },
    blocks: blocks.en,
  },
};
