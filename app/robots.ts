import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const canonicalBaseUrl = "https://upcube.ai";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${canonicalBaseUrl}/sitemap.xml`,
    host: canonicalBaseUrl,
  };
}
