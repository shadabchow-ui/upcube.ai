import { describe, expect, it } from "vitest";
import {
  portalFooterGroups,
  portalPrimaryNav,
  portalHomepageCards,
  portalMenuGroups,
  portalActionNav,
} from "lib/upcube-portal/content";
import { upcubeProductLinks } from "lib/upcube-universal/product-links";

const resolveFullyQualifiedInternalLink = (href: string): boolean =>
  href.startsWith("/") || href.startsWith("https://") || href.startsWith("#");

describe("internal link validation - header navigation", () => {
  it("portalPrimaryNav links are well-formed", () => {
    expect(portalPrimaryNav.length).toBeGreaterThan(0);
    for (const item of portalPrimaryNav) {
      expect(resolveFullyQualifiedInternalLink(item.href)).toBe(true);
      expect(item.label).toBeTruthy();
      expect(item.id).toBeTruthy();
    }
  });

  it("portalActionNav links are well-formed", () => {
    for (const item of portalActionNav) {
      expect(resolveFullyQualifiedInternalLink(item.href)).toBe(true);
    }
  });

  it("portalMenuGroups have valid item links", () => {
    expect(portalMenuGroups.length).toBeGreaterThan(0);
    for (const group of portalMenuGroups) {
      expect(group.id).toBeTruthy();
      expect(group.title).toBeTruthy();
      for (const item of group.items) {
        expect(resolveFullyQualifiedInternalLink(item.href)).toBe(true);
        expect(item.label).toBeTruthy();
      }
    }
  });
});

describe("internal link validation - footer", () => {
  it("portalFooterGroups have valid link structures", () => {
    expect(portalFooterGroups.length).toBeGreaterThan(0);
    for (const group of portalFooterGroups) {
      expect(group.title).toBeTruthy();
      for (const link of group.links) {
        expect(link.id).toBeTruthy();
        expect(link.label).toBeTruthy();
        expect(resolveFullyQualifiedInternalLink(link.href)).toBe(true);
      }
    }
  });

  it("footer contains privacy and legal links", () => {
    const termsGroup = portalFooterGroups.find(
      (g) => g.id === "terms-policies",
    );
    expect(termsGroup).toBeDefined();
    const hrefs = termsGroup!.links.map((l) => l.href);
    expect(hrefs).toContain("/terms");
    expect(hrefs).toContain("/privacy");
  });

  it("footer contains product links matching product list", () => {
    const appsGroup = portalFooterGroups.find((g) => g.id === "apps");
    expect(appsGroup).toBeDefined();
    expect(appsGroup!.links.length).toBeGreaterThanOrEqual(
      upcubeProductLinks.length,
    );
  });

  it("footer contains safety and trust links", () => {
    const safetyGroup = portalFooterGroups.find((g) => g.id === "safety");
    expect(safetyGroup).toBeDefined();
    const hrefs = safetyGroup!.links.map((l) => l.href);
    expect(hrefs).toContain("/safety");
    expect(hrefs).toContain("/security");
    expect(hrefs).toContain("/trust-transparency");
  });
});

describe("internal link validation - homepage product cards", () => {
  it("portalHomepageCards have valid redirect-destination hrefs", () => {
    expect(portalHomepageCards.length).toBeGreaterThan(0);
    for (const card of portalHomepageCards) {
      expect(card.id).toBeTruthy();
      expect(card.title).toBeTruthy();
      expect(card.description).toBeTruthy();
      expect(resolveFullyQualifiedInternalLink(card.href)).toBe(true);
      if (card.href !== "#") {
        expect(card.href.startsWith("/products/")).toBe(true);
      }
    }
  });
});

describe("product link data", () => {
  it("upcubeProductLinks have valid productHref values", () => {
    expect(upcubeProductLinks.length).toBeGreaterThan(0);
    for (const product of upcubeProductLinks) {
      expect(product.productHref).toBeTruthy();
      expect(product.productHref.startsWith("/products/")).toBe(true);
    }
  });

  it("product links have consistent id/label/description", () => {
    for (const product of upcubeProductLinks) {
      expect(product.id).toBeTruthy();
      expect(product.label).toBeTruthy();
      expect(product.description).toBeTruthy();
    }
  });

  it("external launch hrefs are valid URLs", () => {
    for (const product of upcubeProductLinks) {
      if (product.launchHref) {
        expect(product.launchHref.startsWith("https://")).toBe(true);
      }
    }
  });
});
