import { describe, expect, it } from "vitest";
import {
  buildCanonicalUrl,
  CANONICAL_BASE_URL,
  createBasicPageMetadata,
  DEFAULT_SITE_DESCRIPTION,
  DEFAULT_SITE_TITLE,
  upcubeSiteName,
} from "lib/upcube-seo/metadata";

describe("buildCanonicalUrl", () => {
  it("returns base URL for root path", () => {
    expect(buildCanonicalUrl("/")).toBe("https://upcube.ai/");
  });

  it("returns full canonical URL for a path", () => {
    expect(buildCanonicalUrl("/news")).toBe("https://upcube.ai/news");
  });

  it("prefixes missing leading slash", () => {
    expect(buildCanonicalUrl("news")).toBe("https://upcube.ai/news");
  });

  it("defaults to root path when no argument given", () => {
    expect(buildCanonicalUrl()).toBe("https://upcube.ai/");
  });
});

describe("createBasicPageMetadata", () => {
  it("returns default metadata when no input provided", () => {
    const meta = createBasicPageMetadata({});
    expect(meta.title).toBe(DEFAULT_SITE_TITLE);
    expect(meta.description).toBe(DEFAULT_SITE_DESCRIPTION);
    expect(meta.alternates?.canonical).toBe("https://upcube.ai/");
    expect(meta.robots).toEqual({ index: true, follow: true });
  });

  it("sets custom title and description", () => {
    const meta = createBasicPageMetadata({
      title: "Test Title",
      description: "Test description.",
      path: "/test",
    });
    expect(meta.title).toBe("Test Title");
    expect(meta.description).toBe("Test description.");
    expect(meta.alternates?.canonical).toBe("https://upcube.ai/test");
  });

  it("sets noIndex to false by default", () => {
    const meta = createBasicPageMetadata({});
    expect(meta.robots?.index).toBe(true);
    expect(meta.robots?.follow).toBe(true);
  });

  it("respects noIndex flag", () => {
    const meta = createBasicPageMetadata({ noIndex: true });
    expect(meta.robots?.index).toBe(false);
    expect(meta.robots?.follow).toBe(false);
  });

  it("sets openGraph fields", () => {
    const meta = createBasicPageMetadata({
      title: "OG Title",
      description: "OG desc.",
      path: "/og",
    });
    expect(meta.openGraph?.title).toBe("OG Title");
    expect(meta.openGraph?.url).toBe("https://upcube.ai/og");
    expect(meta.openGraph?.siteName).toBe(upcubeSiteName);
    expect(meta.openGraph?.type).toBe("website");
    expect(meta.openGraph?.images).toEqual([{ url: "/opengraph-image" }]);
  });

  it("sets twitter card fields", () => {
    const meta = createBasicPageMetadata({
      title: "Tweet Title",
      description: "Tweet desc.",
    });
    expect(meta.twitter?.card).toBe("summary_large_image");
    expect(meta.twitter?.title).toBe("Tweet Title");
    expect(meta.twitter?.description).toBe("Tweet desc.");
    expect(meta.twitter?.images).toEqual(["/opengraph-image"]);
  });

  it("supports article type", () => {
    const meta = createBasicPageMetadata({ type: "article", path: "/post" });
    expect(meta.openGraph?.type).toBe("article");
  });
});

describe("constants", () => {
  it("has correct canonical base URL", () => {
    expect(CANONICAL_BASE_URL).toBe("https://upcube.ai");
  });

  it("has correct default site title", () => {
    expect(DEFAULT_SITE_TITLE).toContain("UpcubeAI");
  });

  it("has correct default site description", () => {
    expect(DEFAULT_SITE_DESCRIPTION).toContain("Ethen");
    expect(DEFAULT_SITE_DESCRIPTION).toContain("UpcubeAI");
  });
});
