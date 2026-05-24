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

export const collections = { carnet };
