import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { markets } from "@/content/markets";
import { serviceRegions } from "@/lib/regions";
import { installations } from "@/content/projects";
import { articles } from "@/content/resources";
import { publishedProducts, publishedCategories, problems, productHref, categoryHref, problemHref } from "@/content/catalog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const u = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly") => ({ url: `${site.url}${path}`, lastModified: now, changeFrequency, priority });
  return [
    u("/", 1, "weekly"),
    u("/becsys5-controls/", 0.9),
    u("/pulsar-precision-feeders/", 0.9),
    u("/water-chemistry-modernization/", 0.8),
    u("/engineering-specification-support/", 0.8),
    u("/service-support/", 0.8),
    u("/products/", 0.9, "weekly"),
    ...publishedCategories.map((c) => u(categoryHref(c.slug), 0.8)),
    ...publishedProducts.map((x) => u(productHref(x), 0.7)),
    u("/pulsar-chlorination/", 0.8),
    u("/solutions/", 0.7),
    ...problems.map((x) => u(problemHref(x.slug), 0.6)),
    u("/contact/", 0.9),
    u("/request-service/", 0.7),
    u("/markets/", 0.7),
    ...markets.map((m) => u(`/markets/${m.slug}/`, 0.7)),
    u("/service-area/", 0.6),
    ...serviceRegions.map((r) => u(`/service-area/${r.slug}/`, 0.6)),
    u("/projects/", 0.6),
    ...installations.map((i) => u(`/projects/${i.slug}/`, 0.5)),
    u("/about/", 0.6),
    u("/resources/", 0.6),
    ...articles.map((a) => u(`/resources/${a.slug}/`, 0.5)),
  ];
}
