import { describe, expect, it } from "vitest";
import { HOME_CHAT_CTA_HREF } from "components/upcube-home/hero-chat-panel";
import {
  portalHomepageCards,
  upcubeCompanyIdentity,
} from "lib/upcube-portal/content";
import {
  featureBands,
  homeCapabilityPoints,
  stories,
} from "lib/upcube-home/content";

describe("homepage company positioning", () => {
  it("has company descriptor", () => {
    expect(upcubeCompanyIdentity.descriptor).toBe("Technology company");
  });

  it("has tagline", () => {
    expect(upcubeCompanyIdentity.tagline.length).toBeGreaterThan(0);
  });

  it("has one-liner containing product story", () => {
    expect(upcubeCompanyIdentity.oneLiner.length).toBeGreaterThan(0);
    expect(upcubeCompanyIdentity.oneLiner.toLowerCase()).toContain(
      "technology company",
    );
  });

  it("has mission statement covering product lines", () => {
    expect(upcubeCompanyIdentity.mission.length).toBeGreaterThan(0);
    expect(upcubeCompanyIdentity.mission).toContain("products");
    expect(upcubeCompanyIdentity.mission).toContain("clear");
  });

  it("has vision statement", () => {
    expect(upcubeCompanyIdentity.vision.length).toBeGreaterThan(0);
  });

  it("has belief statement", () => {
    expect(upcubeCompanyIdentity.belief.length).toBeGreaterThan(0);
  });

  it("has pillars array", () => {
    expect(upcubeCompanyIdentity.pillars.length).toBeGreaterThan(0);
    expect(upcubeCompanyIdentity.pillars).toContain("AI & Intelligence");
    expect(upcubeCompanyIdentity.pillars).toContain("Cloud & Infrastructure");
  });
});

describe("Ethen CTA", () => {
  it("HOME_CHAT_CTA_HREF points to Ethen", () => {
    expect(HOME_CHAT_CTA_HREF).toBe("https://ethen.upcube.ai");
  });

  it("Ethen CTA URL is a valid HTTPS link", () => {
    expect(HOME_CHAT_CTA_HREF).toMatch(/^https:\/\/.+\..+$/);
  });
});

describe("product family section data", () => {
  it("has product cards for homepage", () => {
    expect(portalHomepageCards.length).toBeGreaterThan(0);
  });

  it("includes core products in homepage cards", () => {
    const cardIds = portalHomepageCards.map((c) => c.id);
    expect(cardIds).toContain("chat");
    expect(cardIds).toContain("globe");
    expect(cardIds).toContain("books");
    expect(cardIds).toContain("cloud");
    expect(cardIds).toContain("robotics");
  });

  it("all product cards have required fields", () => {
    for (const card of portalHomepageCards) {
      expect(card.id).toBeTruthy();
      expect(card.title).toBeTruthy();
      expect(card.description).toBeTruthy();
      expect(card.href).toBeTruthy();
    }
  });

  it("each card has a status defined", () => {
    for (const card of portalHomepageCards) {
      expect([
        "live",
        "preview",
        "external",
        "planned",
        "not_provided",
      ]).toContain(card.status);
    }
  });
});

describe("homepage feature bands", () => {
  it("has feature bands defined", () => {
    expect(featureBands.length).toBeGreaterThan(0);
  });

  it("each feature band has title and description", () => {
    for (const band of featureBands) {
      expect(band.title).toBeTruthy();
      expect(band.description).toBeTruthy();
    }
  });
});

describe("homepage proof points", () => {
  it("has proof points defined", () => {
    expect(homeCapabilityPoints.length).toBeGreaterThan(0);
  });
});

describe("homepage stories", () => {
  it("has news stories for homepage", () => {
    expect(stories.length).toBeGreaterThan(0);
    for (const story of stories) {
      expect(story.title).toBeTruthy();
      expect(story.href).toBeTruthy();
    }
  });
});
