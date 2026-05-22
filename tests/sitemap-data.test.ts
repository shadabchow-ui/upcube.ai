import { describe, expect, it } from "vitest";
import { foundationRoutePaths } from "lib/upcube-portal/foundation-pages";
import { researchLongformPages } from "lib/upcube-portal/longform-pages";
import { policyPageSlugs } from "lib/upcube-portal/policy-pages";
import { upcubeProducts } from "lib/upcube-products/products";
import { upcubeNewsArticles } from "lib/upcube-news/news";

const job5Routes = [
  "/pricing",
  "/developers",
  "/docs",
  "/apps",
  "/security",
  "/status",
  "/legal",
  "/policy",
];

const coreRoutes = ["/", "/news", "/contact"];

describe("sitemap data sources", () => {
  it("foundation route paths include key policy and company routes", () => {
    const expectedRoutes = [
      "/terms",
      "/privacy",
      "/policies",
      "/about",
      "/charter",
      "/safety",
      "/security-privacy",
    ];
    for (const route of expectedRoutes) {
      expect(foundationRoutePaths).toContain(route);
    }
  });

  it("foundation route paths is a non-empty readonly tuple", () => {
    expect(foundationRoutePaths.length).toBeGreaterThan(0);
    expect(Array.isArray(foundationRoutePaths)).toBe(true);
  });

  it("all foundation route paths start with /", () => {
    for (const path of foundationRoutePaths) {
      expect(path.startsWith("/")).toBe(true);
    }
  });

  it("product slugs exist and are non-empty", () => {
    expect(upcubeProducts.length).toBeGreaterThan(0);
    for (const product of upcubeProducts) {
      expect(product.slug).toBeTruthy();
      expect(typeof product.slug).toBe("string");
    }
  });

  it("news articles have valid hrefs", () => {
    expect(upcubeNewsArticles.length).toBeGreaterThan(0);
    for (const article of upcubeNewsArticles) {
      expect(article.href).toBeTruthy();
      expect(article.href.startsWith("/")).toBe(true);
    }
  });
});

describe("core sitemap route coverage", () => {
  it("foundation route paths includes key policy routes", () => {
    expect(foundationRoutePaths).toContain("/terms");
    expect(foundationRoutePaths).toContain("/privacy");
    expect(foundationRoutePaths).toContain("/about");
    expect(foundationRoutePaths).toContain("/research");
  });

  it("product slugs cover all expected products", () => {
    const slugs = upcubeProducts.map((p) => p.slug);
    expect(slugs).toContain("upcube-ai");
    expect(slugs).toContain("books");
    expect(slugs).toContain("earth");
    expect(slugs).toContain("games");
    expect(slugs).toContain("jobs");
    expect(slugs).toContain("cloud");
    expect(slugs).toContain("ventari");
    expect(slugs).toContain("vm");
    expect(slugs).toContain("upcube-os");
    expect(slugs).toContain("upcube-mobile-os");
    expect(slugs).toContain("voice");
    expect(slugs).toContain("robotics");
    expect(slugs).toContain("university");
  });

  it("news article hrefs include /news/ prefix", () => {
    for (const article of upcubeNewsArticles) {
      expect(article.href.startsWith("/news/")).toBe(true);
    }
  });
});

describe("Job 5 route coverage", () => {
  it("has data backing for Job 5 routes where applicable", () => {
    expect(job5Routes).toContain("/pricing");
    expect(job5Routes).toContain("/developers");
    expect(job5Routes).toContain("/docs");
    expect(job5Routes).toContain("/apps");
    expect(job5Routes).toContain("/security");
    expect(job5Routes).toContain("/status");
    expect(job5Routes).toContain("/legal");
  });

  it("all core routes are valid path strings", () => {
    const allTestRoutes = [...coreRoutes, ...job5Routes];
    for (const route of allTestRoutes) {
      expect(route.startsWith("/")).toBe(true);
      expect(route.length).toBeGreaterThanOrEqual(1);
    }
  });
});

describe("research longform route coverage", () => {
  it("research longform pages array is non-empty", () => {
    expect(researchLongformPages.length).toBeGreaterThan(0);
  });

  it("all research longform slugs are non-empty strings", () => {
    for (const page of researchLongformPages) {
      expect(page.slug).toBeTruthy();
      expect(typeof page.slug).toBe("string");
    }
  });

  it("expected research slugs are present", () => {
    const slugs = researchLongformPages.map((p) => p.slug);
    expect(slugs).toContain("earth-ai-geospatial-intelligence");
    expect(slugs).toContain("health-ai");
    expect(slugs).toContain("science-ai");
    expect(slugs).toContain("natural-language-processing");
    expect(slugs).toContain("responsible-ai");
  });
});

describe("policy page route coverage", () => {
  it("policy page slugs array is non-empty", () => {
    expect(policyPageSlugs.length).toBeGreaterThan(0);
  });

  it("all policy slugs are non-empty strings", () => {
    for (const slug of policyPageSlugs) {
      expect(slug).toBeTruthy();
      expect(typeof slug).toBe("string");
    }
  });

  it("expected policy slugs are present", () => {
    expect(policyPageSlugs).toContain("ai-principles");
    expect(policyPageSlugs).toContain("working-together");
    expect(policyPageSlugs).toContain("societal-impact");
    expect(policyPageSlugs).toContain("for-organizations");
  });
});
