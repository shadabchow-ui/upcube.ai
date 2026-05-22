import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import {
  getBodyForRoute,
  getPageContentByRoute,
} from "lib/upcube-portal/page-content";

const APP_DIR = resolve(__dirname, "..", "app");

function routePageExists(route: string): boolean {
  const pagePath = resolve(APP_DIR, `.${route}`, "page.tsx");
  return existsSync(pagePath);
}

function routeFileContent(route: string): string {
  const pagePath = resolve(APP_DIR, `.${route}`, "page.tsx");
  try {
    return readFileSync(pagePath, "utf-8");
  } catch {
    return "";
  }
}

const smokeRoutes = [
  "/",
  "/news",
  "/contact",
  "/signin",
  "/signup",
  "/account",
] as const;

const job5Routes = [
  "/pricing",
  "/developers",
  "/docs",
  "/apps",
  "/security",
  "/status",
  "/legal",
  "/policy",
] as const;

const ecosystemRoutes = [
  "/products",
  "/core",
  "/build",
  "/learn",
  "/explore",
] as const;

const accountRoutes = [
  "/account",
  "/account/profile",
  "/account/security",
  "/account/apps",
  "/account/privacy",
  "/account/billing",
  "/account/storage",
  "/account/help",
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

  it("has /signin page.tsx", () => {
    expect(routePageExists("/signin")).toBe(true);
  });

  it("has /signup page.tsx", () => {
    expect(routePageExists("/signup")).toBe(true);
  });

  it("has /account page.tsx", () => {
    expect(routePageExists("/account")).toBe(true);
  });
});

describe("route page file coverage - Job 5 routes", () => {
  for (const route of job5Routes) {
    it(`has ${route} page.tsx`, () => {
      expect(routePageExists(route)).toBe(true);
    });
  }
});

describe("route page file coverage - ecosystem routes", () => {
  for (const route of ecosystemRoutes) {
    it(`has ${route} page.tsx`, () => {
      expect(routePageExists(route)).toBe(true);
    });
  }
});

describe("route page file coverage - account routes", () => {
  for (const route of accountRoutes) {
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
    "quantum",
    "robotics",
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

  it("has research/[slug] dynamic route", () => {
    expect(existsSync(resolve(APP_DIR, "research", "[slug]", "page.tsx"))).toBe(
      true,
    );
  });

  it("has policy/[slug] dynamic route", () => {
    expect(existsSync(resolve(APP_DIR, "policy", "[slug]", "page.tsx"))).toBe(
      true,
    );
  });
});

describe("page-content registry returns real imported content", () => {
  const contentPairs: [string, string][] = [
    ["/company/about", "What Upcube builds"],
    ["/company/charter", "Charter"],
    ["/company/foundation", "product family"],
    ["/company/careers", "Careers"],
    ["/organizations", "organizations"],
    ["/company/founder-letter", "Why We Focus on AI"],
    ["/legal", "Legal"],
    ["/legal/terms", "Terms of Use"],
    ["/legal/privacy", "Privacy Policy"],
    ["/legal/other-policies", "Acceptable use"],
    ["/policy/ai-principles", "Our AI Principles"],
    ["/policy/working-together", "communities"],
    ["/policy/societal-impact", "discovery"],
    ["/safety", "Safety starts with product truth"],
    ["/security", "Security as a foundation"],
    ["/security-privacy", "Security and privacy"],
    ["/status", "status"],
    ["/research/earth-ai-geospatial-intelligence", "Upcube Earth AI"],
    ["/research/health-ai", "Health Knowledge"],
    ["/research/software-systems", "systems"],
  ];

  for (const [route, snippet] of contentPairs) {
    it(`returns body content for ${route} containing "${snippet}"`, () => {
      const body = getBodyForRoute(route);
      expect(body.length).toBeGreaterThan(50);
      expect(body).toContain(snippet);
    });
  }
});

describe("public route files call getBodyForRoute with valid registry route", () => {
  const publicRoutes: [string, string][] = [
    ["/about", "/company/about"],
    ["/policies", "/legal/other-policies"],
    ["/terms", "/legal/terms"],
    ["/privacy", "/legal/privacy"],
    ["/principles", "/policy/ai-principles"],
    ["/working-together", "/policy/working-together"],
    ["/safety", "/safety"],
    ["/security", "/security"],
    ["/security-privacy", "/security-privacy"],
    ["/trust-transparency", "/trust-transparency"],
    ["/status", "/status"],
    ["/founder-letter", "/company/founder-letter"],
    ["/societal-impact", "/policy/societal-impact"],
    ["/foundation", "/company/foundation"],
    ["/charter", "/company/charter"],
    ["/careers", "/company/careers"],
    ["/brand", "/company/brand-help-center"],
    ["/organizations", "/organizations"],
  ];

  for (const [publicRoute, registryRoute] of publicRoutes) {
    it(`route ${publicRoute} page.tsx calls getBodyForRoute("${registryRoute}")`, () => {
      const content = routeFileContent(publicRoute);
      expect(content).toContain("LongformPage");
      expect(content).toContain(`getBodyForRoute("${registryRoute}")`);
    });
  }
});
