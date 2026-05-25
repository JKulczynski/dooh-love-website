import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dooh-love.pl";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/polityka-prywatnosci`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/regulamin`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
