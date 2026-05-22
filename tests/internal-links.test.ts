import { describe, expect, it } from "vitest";
import {
  portalFooterGroups,
  portalPrimaryNav,
  portalHomepageCards,
  portalMenuGroups,
  portalActionNav,
  portalRoutePlan,
  portalAppLinks,
  signinSections,
  signupSections,
  accountSections,
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
    expect(portalActionNav.length).toBeGreaterThanOrEqual(2);
    const hrefs = portalActionNav.map((i) => i.href);
    expect(hrefs).toContain("/contact");
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
      if (group.columns) {
        for (const column of group.columns) {
          expect(column.id).toBeTruthy();
          expect(column.label).toBeTruthy();
          for (const item of column.items) {
            expect(resolveFullyQualifiedInternalLink(item.href)).toBe(true);
            expect(item.label).toBeTruthy();
          }
        }
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
    const trustGroup = portalFooterGroups.find((g) => g.id === "trust");
    expect(trustGroup).toBeDefined();
    const hrefs = trustGroup!.links.map((l) => l.href);
    expect(hrefs).toContain("/terms");
    expect(hrefs).toContain("/privacy");
    expect(hrefs).toContain("/safety");
    expect(hrefs).toContain("/security");
  });

  it("footer contains product links across ecosystem groups", () => {
    const ecosystemGroupIds = ["core", "build", "learn", "explore"];
    const allProductLinks = ecosystemGroupIds.flatMap(
      (id) => portalFooterGroups.find((g) => g.id === id)?.links ?? [],
    );
    expect(allProductLinks.length).toBeGreaterThanOrEqual(
      upcubeProductLinks.length,
    );
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

describe("signin and signup content", () => {
  it("signinSections has sign-in status section", () => {
    expect(signinSections.length).toBeGreaterThan(0);
    expect(signinSections[0]!.id).toBe("signin-status");
    expect(signinSections[0]!.title).toContain("Sign-in");
  });

  it("signupSections has sign-up status section", () => {
    expect(signupSections.length).toBeGreaterThan(0);
    expect(signupSections[0]!.id).toBe("signup-status");
    expect(signupSections[0]!.title).toContain("Sign-up");
  });

  it("signin content does not claim auth is implemented", () => {
    const body = signinSections.map((s) => s.paragraphs.join(" ")).join(" ");
    expect(body).toContain("not yet provided");
    expect(body).toContain("not implemented");
  });

  it("signup content does not claim auth is implemented", () => {
    const body = signupSections.map((s) => s.paragraphs.join(" ")).join(" ");
    expect(body).toContain("not yet provided");
    expect(body).toContain("not implemented");
  });
});

describe("account content and navigation", () => {
  it("accountSections has account status section", () => {
    expect(accountSections.length).toBeGreaterThan(0);
    expect(accountSections[0]!.id).toBe("account-status");
    expect(accountSections[0]!.title).toContain("Account");
  });

  it("account content does not claim auth is implemented", () => {
    const body = accountSections.map((s) => s.paragraphs.join(" ")).join(" ");
    expect(body).toContain("not yet provided");
    expect(body).toContain("not implemented");
  });

  it("account appears in portalActionNav", () => {
    const actionIds = portalActionNav.map((i) => i.id);
    expect(actionIds).toContain("account");
    const accountAction = portalActionNav.find((i) => i.id === "account");
    expect(accountAction!.href).toBe("/account");
  });

  it("account appears in portalAppLinks for mobile menu", () => {
    const appIds = portalAppLinks.map((i) => i.id);
    expect(appIds).toContain("app-account");
    const accountApp = portalAppLinks.find((i) => i.id === "app-account");
    expect(accountApp!.href).toBe("/account");
  });

  it("account is in the portalRoutePlan", () => {
    const routeIds = portalRoutePlan.map((r) => r.id);
    expect(routeIds).toContain("account");
    const accountRoute = portalRoutePlan.find((r) => r.id === "account");
    expect(accountRoute!.status).toBe("live");
  });

  it("account appears in footer company section", () => {
    const companyGroup = portalFooterGroups.find((g) => g.id === "company");
    expect(companyGroup).toBeDefined();
    const hrefs = companyGroup!.links.map((l) => l.href);
    expect(hrefs).toContain("/account");
  });

  it("account appears in portalMenuGroups company section", () => {
    const companyGroup = portalMenuGroups.find((g) => g.id === "company");
    expect(companyGroup).toBeDefined();
    const itemHrefs = companyGroup!.items.map((i) => i.href);
    expect(itemHrefs).toContain("/account");
  });
});
