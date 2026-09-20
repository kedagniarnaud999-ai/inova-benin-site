// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// À remplacer par le nom de domaine définitif dès qu'il est acheté :
// `site` alimente l'URL canonique, les hreflang et le sitemap.
const SITE = 'https://inova-benin.vercel.app';

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
      // La racine n'est qu'un repli de redirection et le 404 n'a pas de sens
      // à être indexé : l'un et l'autre sont `noindex` dans leur balisage.
      filter: (page) => {
        const path = new URL(page).pathname;
        return path !== '/' && !path.endsWith('/404');
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
