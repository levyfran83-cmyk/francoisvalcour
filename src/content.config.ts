// ============================================================
// Configuration des collections de contenu Astro
// Documentation : https://docs.astro.build/en/guides/content-collections/
// ============================================================
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// ----- Collection : Carnet (articles de blog) -----
//
// Chaque article est un fichier .md dans src/content/carnet/
// Le nom du fichier (sans .md) devient le slug d'URL : /carnet/<slug>
//
// Le frontmatter doit respecter ce schéma. Si un champ obligatoire
// manque, Astro plante au build et signale le fichier coupable.
//
const carnet = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/carnet" }),
  schema: z.object({
    titre: z.string(),
    date: z.coerce.date(),
    rubrique: z.enum(["Personnage", "Histoire & fiction", "Le chantier"]),
    extrait: z.string().min(50).max(400),
    image: z.string().optional(),
    imagePos: z.string().optional().default("center"),
    draft: z.boolean().optional().default(false),
  }),
});

// ----- Collection : Personnages (fiches lecteur) -----
//
// Chaque personnage est un fichier .md dans src/content/personnages/
// Les fiches sont des versions "lecteur" volontairement limitées aux
// éléments dévoilés dans le tome publié — pas de spoilers des tomes
// suivants.
//
const personnages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/personnages" }),
  schema: z.object({
    titre: z.string(),
    naissance: z.number(),
    lieuNaissance: z.string(),
    statut: z.string(),
    periode: z.string(),
    portrait: z.string(),
    portraitPos: z.string().optional().default("center"),
    accroche: z.string(),
    ordre: z.number().default(99),
    draft: z.boolean().optional().default(false),
  }),
});

// ----- Collection : Lieux (fiches lecteur) -----
//
// Chaque lieu est un fichier .md dans src/content/lieux/
// Le nom du fichier (sans .md) devient le slug d'URL : /lieux/<slug>
// Comme les fiches personnages, ce sont des versions "lecteur" limitées
// aux éléments dévoilés dans le tome publié — pas de spoilers.
//
const lieux = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/lieux" }),
  schema: z.object({
    titre: z.string(),
    localisation: z.string(),
    statut: z.string(),
    periode: z.string(),
    image: z.string(),
    imagePos: z.string().optional().default("center"),
    accroche: z.string(),
    ordre: z.number().default(99),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { carnet, personnages, lieux };
