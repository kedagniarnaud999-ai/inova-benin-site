# iNOVA BENIN — site

Vitrine statique deux langues (français, anglais) des trois pôles d'iNOVA BENIN : Consulting, Lab, Studio. Le contenu vient du business plan et de la fiche de projet ; rien n'est écrit en dur dans un composant, tout passe par `src/i18n/` et `src/content/`.

## Stack

Astro 7 en `output: 'static'`, Tailwind 4 via `@tailwindcss/vite`, TypeScript. Aucune interface côté client : le formulaire de contact est un POST direct vers Web3Forms, le menu mobile est un `<details>` natif. Les polices sont auto-hébergées (`@fontsource`).

## Commandes

| Commande | Effet |
| --- | --- |
| `npm install` | Installe les dépendances (Node >= 22.12) |
| `npm run dev` | Sert le site en local |
| `npm run build` | Génère `dist/` |
| `npm run preview` | Sert le `dist/` construit |
| `npx astro check` | Types + parité FR/EN |

## Configuration

`astro.config.mjs` porte deux réglages non évidents :

- `trailingSlash: 'never'` — les URLs publiées n'ont pas de slash final.
- `i18n.routing: 'manual'` — les pages vivent déjà dans `src/pages/fr` et `src/pages/en`. Laisser Astro préfixer produirait `/fr/fr`, et ce régime coupe son middleware : d'où `src/middleware.ts`.

La constante `SITE` doit recevoir le nom de domaine définitif : elle alimente l'URL canonique, les hreflang et le sitemap.

`vercel.json` renvoie `/` vers `/fr` en 301. Le sitemap déclare les pages indexables, hors racine, `/404` et `/og/*` (les trois sont `noindex`).

## Environnement

| Variable | Rôle |
| --- | --- |
| `PUBLIC_WEB3FORMS_ACCESS_KEY` | Clé du formulaire. Publique par construction : elle est embarquée dans le HTML servi. |

Copier `.env.example` en `.env` et renseigner la clé. Le build est rouge sans elle (`src/components/ContactForm.astro:20`). Côté Vercel, la variable est à recréer à la main : elle ne transite pas par Git.

## Contenu

- `src/content/experiments.ts` — le carnet du Lab. Les URL `live` sont vérifiées accessibles avant d'être ajoutées. Tous les comptages affichés sur le site sont dérivés de ce tableau, jamais écrits en dur dans un texte.
- `src/i18n/pages/*.ts` — un fichier par page, avec `fr` et `en` dans le même module. Le typage `typeof fr` rend obligatoire toute suppression de clé des deux côtés.
- `src/styles/global.css` — la loi de contraste : petit texte sur fond clair en `*-ink`, texte sur aplat en `--accent-on`, jamais de texte couleur accent sur fond `ink`.

## Vérification

Pas de suite de tests automatisée. Les vérifications sont jouées sur le `dist/` construit, dans un Chrome headless piloté en CDP brut : rendu réel en 375 et 1440 px sans débordement horizontal, balayage de contraste calculé, Lighthouse accessibility, passe clavier mobile, formulaire (dont « deux Entrées = une seule requête partante »), et contrôle anti-fuite sur les HTML produits.

Après toute retouche de contenu ou de composant, rejouer au minimum l'anti-fuite, la passe clavier et le balayage de contraste.

## Ce qui ne doit jamais revenir sur le site

- L'adresse personnelle du fondateur (`kedagniarnaud999@gmail.com`) : seule l'adresse de la structure, dans `src/social.ts`, est publiée.
- Le RCCM ou l'IFU : la société est en cours de constitution, ces identifiants n'existent pas encore.
- L'adresse de domiciliation du porteur.
- Un nom de client, un témoignage, une statistique non sourcée, ou le tableau comparatif concurrentiel interne du business plan.
