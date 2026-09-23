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

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
