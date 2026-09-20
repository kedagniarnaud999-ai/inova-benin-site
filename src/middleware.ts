import { defineMiddleware } from 'astro:middleware';

/**
 * Obligatoire sous `i18n.routing: 'manual'` (Astro 7 refuse de couper son
 * middleware sans repreneur) ; jamais exécuté ici, la sortie étant `static`.
 */
export const onRequest = defineMiddleware((_context, next) => next());
