import type { Locale } from '../config';
import { FOUNDER } from '../../social';

/**
 * Structure commune aux deux pages juridiques : une suite de blocs
 * « titre + corps (+ liste) ». Elle est partagée avec `privacy.ts` pour que
 * `LegalPage.astro` n'ait qu'une seule forme à rendre.
 */
export interface LegalBlock {
  label: string;
  body?: string;
  items?: string[];
  link?: { label: string; href: string };
}

export interface LegalContent {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lede: string };
  blocks: LegalBlock[];
}

const VERCEL_LEGAL = 'https://vercel.com/legal';

/**
 * Mentions légales. Le point sensible est traité comme une contrainte, pas
 * comme un détail de style : ni numéro d'immatriculation, ni adresse de
 * domiciliation sur la page, parce que l'un n'existe pas encore et que
 * l'autre est personnelle.
 */
export const legal: Record<Locale, LegalContent> = {
  fr: {
    meta: {
      title: 'Mentions légales — iNOVA BENIN',
      description:
        'Éditeur du site, forme juridique et état de l’immatriculation, hébergement, propriété intellectuelle, responsabilité et accessibilité.',
    },
    hero: {
      eyebrow: 'Mentions légales',
      title: 'Qui publie, qui héberge, et où en est la société.',
      lede: 'Ce site décrit un projet en cours de constitution. Les mentions ci-dessous disent exactement cela : l’éditeur, le statut réel de la société, et ce que le site ne garantit pas.',
    },
    blocks: [
      {
        label: 'Éditeur de la publication',
        body: `La publication de ce site est assurée par ${FOUNDER}, porteur du projet iNOVA BENIN, qui en est aussi le directeur de la publication.`,
      },
      {
        label: 'Forme juridique et état du projet',
        body: 'iNOVA BENIN est en cours de constitution sous la forme d’une Société par Actions Simplifiée Unipersonnelle (SASU), régie par l’Acte uniforme OHADA relatif au droit des sociétés commerciales. À la date de publication, l’immatriculation n’est pas finalisée : les numéros d’identification qui en découleront n’ont donc pas encore été attribués et ne peuvent pas être mentionnés ici.',
      },
      {
        label: 'Adresse',
        body: 'Activité basée à Cotonou, Bénin, sans local dédié à ce jour. La domiciliation provisoire est une adresse personnelle : elle n’est pas publiée et ne sera pas communiquée par messagerie.',
      },
      {
        label: 'Hébergement',
        body: 'Le site est hébergé par Vercel Inc., États-Unis. Les informations légales de l’hébergeur sont publiées sur son propre site.',
        link: { label: 'vercel.com/legal', href: VERCEL_LEGAL },
      },
      {
        label: 'Propriété intellectuelle',
        body: 'Les textes, la structure, l’identité visuelle et les noms de pôles présentés ici sont liés au projet iNOVA BENIN. Leur reproduction à une autre fin que la consultation privée demande une autorisation préalable, qui se sollicite par le formulaire de contact.',
      },
      {
        label: 'Liens externes',
        body: 'Les liens vers les produits du Lab, vers GitHub et vers LinkedIn renvoient vers des contenus dont les plateformes respectives restent responsables. Un lien sortant n’implique aucune validation de leur part sur ce site, ni l’inverse.',
      },
      {
        label: 'Limitation de responsabilité',
        body: 'Les informations publiées décrivent un projet, ses étapes et des travaux déjà construits. Elles ne constituent ni une offre contractuelle de services, ni un conseil juridique ou financier, ni une garantie de résultat. Le porteur du projet ne peut être tenu responsable de dommages indirects liés à l’utilisation du site.',
      },
      {
        label: 'Accessibilité',
        body: 'Le niveau visé est AA. Des non-conformités peuvent subsister. Si vous rencontrez une difficulté pour lire ou atteindre une information, signalez-la par le formulaire : elle est traitée comme une correction à faire, pas comme une remarque accessoire.',
      },
      {
        label: 'Contact et signalement',
        body: 'Le formulaire de contact est le seul canal ouvert par ce site. Aucune adresse électronique n’y est affichée. Les demandes de retrait, de correction et les signalements y passent également.',
      },
    ],
  },

  en: {
    meta: {
      title: 'Legal notice — iNOVA BENIN',
      description:
        'Site publisher, legal form and incorporation status, hosting, intellectual property, liability and accessibility.',
    },
    hero: {
      eyebrow: 'Legal notice',
      title: 'Who publishes, who hosts, and where the company stands.',
      lede: 'This site describes a project being incorporated. The notices below say exactly that: the publisher, the real state of the company, and what the site does not guarantee.',
    },
    blocks: [
      {
        label: 'Publisher',
        body: `This site is published by ${FOUNDER}, founder of the iNOVA BENIN project and its publication director.`,
      },
      {
        label: 'Legal form and state of the project',
        body: 'iNOVA BENIN is being incorporated as a Société par Actions Simplifiée Unipersonnelle (SASU), governed by the OHADA Uniform Act on commercial companies. At the time of publication the registration is not finalised: the identification numbers that follow from it have not been issued and cannot be stated here.',
      },
      {
        label: 'Address',
        body: 'Operating out of Cotonou, Benin, with no dedicated premises so far. The provisional domiciliation is a personal address: it is not published and will not be shared by message.',
      },
      {
        label: 'Hosting',
        body: 'The site is hosted by Vercel Inc., United States. The host’s own legal information is published on its site.',
        link: { label: 'vercel.com/legal', href: VERCEL_LEGAL },
      },
      {
        label: 'Intellectual property',
        body: 'The text, structure, visual identity and pole names presented here belong to the iNOVA BENIN project. Reproducing them for anything beyond private consultation requires prior permission, requested through the contact form.',
      },
      {
        label: 'External links',
        body: 'Links to Lab products, to GitHub and to LinkedIn lead to content each of those platforms remains responsible for. An outgoing link implies no endorsement by them of this site, nor the reverse.',
      },
      {
        label: 'Limitation of liability',
        body: 'The information published describes a project, its steps and work already built. It is not a contractual offer of services, not legal or financial advice, and not a guarantee of outcome. The founder cannot be held liable for indirect damage arising from use of the site.',
      },
      {
        label: 'Accessibility',
        body: 'The target level is AA. Non-conformities may remain. If you find it hard to read or reach a piece of information, report it through the form: it is handled as a fix to make, not as an incidental remark.',
      },
      {
        label: 'Contact and reporting',
        body: 'The contact form is the only channel this site opens. No e-mail address is displayed on it. Withdrawal requests, corrections and reports go through the same form.',
      },
    ],
  },
};
