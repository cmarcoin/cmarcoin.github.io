# Le Bon Modele - site statique

Site vitrine statique publie sur GitHub Pages.

## Stack

- HTML, CSS, JavaScript vanilla
- Tailwind CSS (genere dans `dist/output.css`)
- Serveur local Python pour preview

## Prerequis

- Node.js 18+ (ou version LTS recente)
- npm
- Python 3

## Installation

```bash
npm install
```

## Developpement local

### Option recommandee (tout en un)

```bash
npm run dev
```

Cette commande lance en parallele :

- le watcher Tailwind (`build:css`)
- le serveur local (`serve`)

Puis ouvrir :

- [http://localhost:5500/index.html](http://localhost:5500/index.html)


## Structure utile

- `index.html` : page d'accueil
- `header.html` / `footer.html` : fragments injectes dynamiquement
- `header.js` / `footer.js` : chargement des fragments via `fetch`
- `css/styles.css` : source Tailwind/custom CSS
- `dist/output.css` : CSS compile a versionner
- `assets/` : images, icones, media

## Attention importante

N'ouvrez pas le site directement en `file://`.

Le header et le footer sont charges via `fetch`, donc ils apparaissent seulement quand le site est servi en HTTP local (`npm run serve` ou `npm run dev`).

## Workflow de contribution

1. Creer une branche
2. Faire les modifications
3. Lancer `npm run dev` pour tester
4. Committer les changements (inclure `dist/output.css` si le CSS a change)
5. Pousser puis merger sur `main`

## Deploiement GitHub Pages

Le deploiement se fait depuis la branche `main` du repo `cmarcoin/cmarcoin.github.io`.

Une fois les commits pushes sur `main`, GitHub Pages publie automatiquement le site.
