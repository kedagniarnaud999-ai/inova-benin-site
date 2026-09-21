import type { APIRoute } from 'astro';
import { siteOrigin } from '../i18n/config';

/**
 * Généré et non posé dans `public/` : l'URL du sitemap doit suivre le `site` de
 * astro.config.mjs. Un fichier statique serait le seul endroit du site à ne pas
 * changer le jour du domaine définitif.
 */
export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Sitemap: ${siteOrigin()}/sitemap-index.xml
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
