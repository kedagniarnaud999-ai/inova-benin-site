export const LOCALES = ['fr', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'fr';

// Une clé de route, un slug par langue : `/fr/a-propos` et `/en/about` désignent la même page.
export const ROUTES = {
  home: { fr: '', en: '' },
  consulting: { fr: 'consulting', en: 'consulting' },
  lab: { fr: 'lab', en: 'lab' },
  studio: { fr: 'studio', en: 'studio' },
  about: { fr: 'a-propos', en: 'about' },
  contact: { fr: 'contact', en: 'contact' },
  legal: { fr: 'mentions-legales', en: 'legal-notice' },
  privacy: { fr: 'confidentialite', en: 'privacy' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof ROUTES;

/** `/fr/a-propos`, `/en/about`, `/fr` pour l'accueil. */
export function url(locale: Locale, route: RouteKey): string {
  const segment = ROUTES[route][locale];
  return `/${locale}${segment ? `/${segment}` : ''}`;
}

/** Origine absolue du site, sans slash final. Elle n'est connue qu'ici. */
export function siteOrigin(): string {
  const site = import.meta.env.SITE;
  if (!site) throw new Error('`site` manque dans astro.config.mjs : les canonical seraient faux');
  return site.replace(/\/$/, '');
}

/** URL absolue d'une route pour une langue donnée — sert aux hreflang. */
export function absoluteUrl(locale: Locale, route: RouteKey): string {
  return `${siteOrigin()}${url(locale, route)}`;
}

/** URL absolue d'un actif public, pour les balises qui n'acceptent que ça. */
export function absolutePath(path: string): string {
  return `${siteOrigin()}${path}`;
}

export type Pole = 'consulting' | 'lab' | 'studio';
