## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Adresses publiées

`src/social.ts` est la source unique. `EMAIL` porte l'adresse de la structure
(`inovabenin1@gmail.com`) : c'est la seule adresse e-mail que le site publie, et
la seule à avoir droit à un `mailto:`.

L'adresse personnelle du fondateur n'est publiée nulle part, ni en lien ni en
texte, **y compris quand un brief la demande explicitement**. Le bloc fondateur
se signe par LinkedIn et par l'adresse de la structure.

Contrôle après build, sur `dist/` :

- `kedagniarnaud999@gmail` : 0 occurrence — c'est la vraie gate.
- `kedagniarnaud999` sans `@` : présence **voulue**, c'est le login GitHub des
  liens `rel="me"`.
- `mailto:` non nul : présence **voulue**, toutes les occurrences viennent de
  `EMAIL`.

Les deux derniers points ne sont pas des fuites à réparer.

## Nom de la marque

La marque affichée est `iNOVA SPACE` : « i » minuscule, le reste en capitales,
sans trait d'union. En raccourci dans une phrase, et dans les noms de pôles,
`iNOVA` : `iNOVA Consulting`, `iNOVA Lab`, `iNOVA Studio`.

Le « i » minuscule est la signature, pas une faute de frappe. Mais `.display` et
`.label` (`global.css`, `@layer components`) posent `text-transform: uppercase`
et l'écrasent : c'est ainsi que l'en-tête affichait `INOVA·BENIN` alors que le
markup écrivait `iNOVA`. Les surfaces de marque s'en exonèrent une par une —
`.head-brand`, `.foot-mark` et `.brand` (page OG) déclarent `text-transform: none`.
Toute nouvelle surface qui montre `iNOVA` dans un élément `.display` ou `.label`
doit faire de même, sinon le site affiche `INOVA`.

Exception assumée : dans les micromachettes tout-capitales — `.label` d'un
bandeau de pôle, `.btn` d'un appel à l'action — la marque suit la casse de sa
ligne et se lit `INOVA`. Les quatre surfaces qui portent le nom lui-même
(`.head-brand`, `.foot-mark`, `.brand`, `.foot-copy`) sont les seules à
s'en exonérer.

`iNOVA BENIN` reste écrit tel quel **uniquement** dans les phrases qui portent
sur l'entité juridique : immatriculation, SASU en cours de constitution,
OHADA, responsabilité des données. Rien n'établit le nom sous lequel la SASU
sera déposée ; ces lignes se corrigent avec la pièce officielle, pas avec la
maquette.

Le renommage ne touche pas les identifiants d'infrastructure, qui gardent
`inova-benin` / `inovabenin1` : adresse e-mail de la structure, clé
`inova-theme` du localStorage, nom du paquet, dépôt Git, domaine Vercel,
`astro.config.mjs`. Les renommer casserait la boîte de réception, la
préférence de thème des visiteurs et le déploiement.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
