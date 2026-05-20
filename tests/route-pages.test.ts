import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const APP_DIR = resolve(__dirname, "..", "app");

function routePageExists(route: string): boolean {
  const pagePath = resolve(APP_DIR, `.${route}`, "page.tsx");
  return existsSync(pagePath);
}

const smokeRoutes = ["/", "/news", "/contact"] as const;

const job5Routes = [
  "/pricing",
  "/developers",
  "/docs",
  "/apps",
  "/security",
  "/status",
  "/legal",
] as const;

const corePortalRoutes = [
  "/about",
  "/company",
  "/research",
  "/trust",
  "/safety",
  "/privacy",
  "/terms",
  "/careers",
  "/brand",
  "/charter",
  "/foundation",
  "/security-privacy",
  "/trust-transparency",
  "/platform",
  "/how-it-works",
  "/enterprise",
  "/builders",
  "/business",
  "/capabilities",
  "/explore",
  "/faq",
  "/policies",
  "/vision",
  "/privacy-policy",
  "/terms-of-service",
  "/principles",
] as const;

describe("route page file coverage - smoke routes", () => {
  it("has homepage page.tsx", () => {
    expect(routePageExists("/")).toBe(true);
  });

  it("has /news page.tsx", () => {
    expect(routePageExists("/news")).toBe(true);
  });

  it("has /contact page.tsx", () => {
    expect(routePageExists("/contact")).toBe(true);
  });
});

describe("route page file coverage - Job 5 routes", () => {
  for (const route of job5Routes) {
    it(`has ${route} page.tsx`, () => {
      expect(routePageExists(route)).toBe(true);
    });
  }
});

describe("route page file coverage - core portal routes", () => {
  for (const route of corePortalRoutes) {
    it(`has ${route} page.tsx`, () => {
      expect(routePageExists(route)).toBe(true);
    });
  }
});

describe("route page file coverage - product pages", () => {
  const productSlugs = [
    "upcube-ai",
    "books",
    "earth",
    "games",
    "jobs",
    "cloud",
    "ventari",
    "vm",
    "upcube-os",
    "upcube-mobile-os",
    "voice",
    "university",
  ];

  for (const slug of productSlugs) {
    it(`has products/${slug} page.tsx`, () => {
      expect(routePageExists(`/products/${slug}`)).toBe(true);
    });
  }
});

describe("dynamic route pattern coverage", () => {
  it("has [page] catchall for generic pages", () => {
    expect(existsSync(resolve(APP_DIR, "[page]", "page.tsx"))).toBe(true);
  });

  it("has product/[handle] dynamic route", () => {
    expect(
      existsSync(resolve(APP_DIR, "product", "[handle]", "page.tsx")),
    ).toBe(true);
  });

  it("has news/[slug] dynamic route", () => {
    expect(existsSync(resolve(APP_DIR, "news", "[slug]", "page.tsx"))).toBe(
      true,
    );
  });
});
