// ============================================================
// Flux RSS du Carnet — généré statiquement par Astro
// URL publique : /rss.xml
// ============================================================
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const articles = await getCollection("carnet", ({ data }) => !data.draft);

  return rss({
    title: "Le Carnet · François Valcour",
    description:
      "Coulisses d'écriture du Prix du Nom. Personnages, scènes, archives, et la fabrique du roman.",
    site: context.site ?? "https://francoisvalcour.fr",
    items: articles
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((article) => ({
        title: article.data.titre,
        pubDate: article.data.date,
        description: article.data.extrait,
        link: `/carnet/${article.id.replace(/\.md$/, "")}/`,
        categories: [article.data.rubrique],
      })),
    customData: `<language>fr-fr</language>`,
  });
}
