# francoisvalcour.fr

Site officiel de **François Valcour**, auteur du _Prix du Nom_.
Saga romanesque française de 1793 à 1870, en douze tomes, aux Éditions du Quai.

🌐 **Live :** https://francoisvalcour.vercel.app

## Stack

- [Astro](https://astro.build/) — site statique multi-pages
- [EB Garamond](https://fonts.google.com/specimen/EB+Garamond) + [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) — typographie classique
- [Vercel](https://vercel.com/) — hébergement, HTTPS, CDN mondial
- Content Collections Astro — articles du Carnet en Markdown
- Flux RSS auto-généré

## Structure

```
src/
├── content/carnet/      # Articles du Carnet (.md)
├── content.config.ts    # Schéma de la collection
├── layouts/             # BaseLayout (commun à toutes les pages)
├── components/          # Nav, Footer, Hero, ArticleCard, etc.
├── pages/               # Routes du site
│   ├── index.astro      # Accueil
│   ├── saga.astro       # La saga
│   ├── tomes/           # Les tomes (liste + Tome I dédié)
│   ├── carnet.astro     # Liste des articles
│   ├── carnet/[slug].astro  # Article individuel (généré)
│   ├── chantier.astro   # État d'avancement
│   ├── auteur.astro     # Bio de l'auteur
│   ├── newsletter.astro # Inscription Lettre de l'écritoire
│   ├── contact.astro    # Contacts
│   ├── mentions-legales.astro
│   ├── confidentialite.astro
│   └── rss.xml.ts       # Flux RSS du Carnet
├── styles/global.css    # Palette, typo, classes utilitaires
public/
├── assets/              # Images (couvertures, photos, portraits)
└── favicon.svg
```

## Écrire un nouvel article du Carnet

1. Créer un fichier `src/content/carnet/mon-slug.md`
2. Renseigner le frontmatter :

```yaml
---
titre: "Titre de l'article"
date: 2026-06-01
rubrique: "Personnage"   # ou "Histoire & fiction" / "Le chantier"
extrait: "Une accroche de 50 à 400 caractères pour la grille et le RSS."
image: "/assets/une_image.png"
imagePos: "center 18%"   # facultatif
---
```

3. Écrire le corps en Markdown
4. Sauvegarder, commiter, pousser → Vercel rebuild et publie tout seul

## Commandes locales

| Commande              | Action                                      |
| :-------------------- | :------------------------------------------ |
| `npm install`         | Installer les dépendances                   |
| `npm run dev`         | Serveur local sur `localhost:4321`          |
| `npm run build`       | Construire le site statique dans `./dist/`  |
| `npm run preview`     | Prévisualiser le build local                |
| `npx vercel --prod`   | Déploiement manuel sur Vercel (si pas Git)  |

## Auteur

François Valcour — _Le Prix du Nom_ — Éditions du Quai (MMXXVI)
