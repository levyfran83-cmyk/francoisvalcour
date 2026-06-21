// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // URL publique du site, utilisée pour les URLs canoniques, le RSS, OpenGraph.
  // À mettre à jour quand le domaine sera connecté (mouvement 5).
  site: "https://francoisvalcour.fr",
  // Génère /sitemap-index.xml (toutes les pages sauf /merci, qui est en noindex).
  integrations: [sitemap({ filter: (page) => !page.includes("/merci") })],
});
