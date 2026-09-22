// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// L'URL de production réelle, sinon chaque canonical, og:url et entrée de sitemap
// pointerait sur un hôte mort. Le nom court est celui à publier : l'alias long
// suffixé par l'équipe sert le même contenu, et sans canonical qui tranche les
// deux sont des doublons aux yeux d'un crawler.
// Décision du 2026-09-22 : c'est l'URL définitive, aucun domaine n'est prévu.
// Si un domaine personnalisé était ajouté plus tard, `site` alimente canonical,
// hreflang, sitemap et og:url : le changer ici, vérifier que Vercel garde le nom
// court actif, et redéployer.
const SITE = 'https://inova-benin-site.vercel.app';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'never',
  // Astro 7 a changé ce défaut à 'jsx', qui colle les éléments inline adjacents.
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      // La racine n'est qu'un repli de redirection, le 404 n'a pas de sens à
      // être indexé, et `/og/*` ne sert qu'à capturer les cartes sociales :
      // les trois sont `noindex` dans leur balisage.
      filter: (page) => {
        const path = new URL(page).pathname;
        return path !== '/' && !path.endsWith('/404') && !path.startsWith('/og/');
      },
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr', en: 'en' },
      },
    }),
  ],

  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    // 'manual' : les pages vivent déjà dans src/pages/fr et src/pages/en, et
    // les URLs sont fabriquées par src/i18n/config.ts. Laisser Astro préfixer
    // lui-même produirait /fr/fr. Ce régime coupe son middleware, qu'Astro 7
    // refuse de laisser sans repreneur : d'où src/middleware.ts.
    routing: 'manual',
  },
});
