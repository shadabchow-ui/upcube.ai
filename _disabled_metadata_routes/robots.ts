const canonicalBaseUrl = "https://upcube.ai";

export default function robots() {
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
