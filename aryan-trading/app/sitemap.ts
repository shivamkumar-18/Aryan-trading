import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static"; // required for static export

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/privacy/", "/terms/", "/risk-disclosure/"];
  return pages.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : 0.3,
  }));
}
