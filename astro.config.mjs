// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { readdirSync, readFileSync } from "node:fs";

// Dates de derniere modif pour le <lastmod> du sitemap.
// Les billets du Carnet portent leur vraie date (frontmatter `date:`),
// le reste prend la date de build (le site est regenere a chaque deploiement).
const carnetDates = {};
try {
  const dir = new URL("./src/content/carnet/", import.meta.url);
  for (const file of readdirSync(dir)) {
    if (!file.endsWith(".md")) continue;
    const raw = readFileSync(new URL(file, dir), "utf-8");
    const m = raw.match(/^date:\s*(.+)$/m);
    if (!m) continue;
    const d = new Date(m[1].trim().replace(/['"]/g, ""));
    if (!Number.isNaN(d.valueOf())) {
      carnetDates[`/carnet/${file.replace(/\.md$/, "")}/`] = d.toISOString();
    }
  }
} catch {
  /* dossier absent : on retombe sur la date de build */
}
const buildDate = new Date().toISOString();

// https://astro.build/config
export default defineConfig({
  // URL publique du site, utilisée pour les URLs canoniques, le RSS, OpenGraph.
  // À mettre à jour quand le domaine sera connecté (mouvement 5).
  site: "https://francoisvalcour.fr",
  // Génère /sitemap-index.xml (toutes les pages sauf /merci, qui est en noindex).
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/merci"),
      serialize(item) {
        const { pathname } = new URL(item.url);
        item.lastmod = carnetDates[pathname] ?? buildDate;
        return item;
      },
    }),
  ],
});
