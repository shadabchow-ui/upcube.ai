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
    const robots =
      typeof meta.robots === "object" ? meta.robots : undefined;
    expect(robots?.index).toBe(true);
    expect(robots?.follow).toBe(true);
  });

  it("respects noIndex flag", () => {
    const meta = createBasicPageMetadata({ noIndex: true });
    const robots =
      typeof meta.robots === "object" ? meta.robots : undefined;
    expect(robots?.index).toBe(false);
    expect(robots?.follow).toBe(false);
  });

  it("sets openGraph fields", () => {
    const meta = createBasicPageMetadata({
      title: "OG Title",
      description: "OG desc.",
      path: "/og",
    });
    const og =
      typeof meta.openGraph === "object" && meta.openGraph !== null
        ? (meta.openGraph as Record<string, unknown>)
        : undefined;
    expect(og?.title).toBe("OG Title");
    expect(og?.url).toBe("https://upcube.ai/og");
    expect(og?.siteName).toBe(upcubeSiteName);
    expect(og?.type).toBe("website");
    expect(og?.images).toEqual([{ url: "/opengraph-image" }]);
  });

  it("sets twitter card fields", () => {
    const meta = createBasicPageMetadata({
      title: "Tweet Title",
      description: "Tweet desc.",
    });
    const tw =
      typeof meta.twitter === "object" && meta.twitter !== null
        ? (meta.twitter as Record<string, unknown>)
        : undefined;
    expect(tw?.card).toBe("summary_large_image");
    expect(tw?.title).toBe("Tweet Title");
    expect(tw?.description).toBe("Tweet desc.");
    expect(tw?.images).toEqual(["/opengraph-image"]);
  });

  it("supports article type", () => {
    const meta = createBasicPageMetadata({ type: "article", path: "/post" });
    const og =
      typeof meta.openGraph === "object" && meta.openGraph !== null
        ? (meta.openGraph as Record<string, unknown>)
        : undefined;
    expect(og?.type).toBe("article");
  });
});

describe("constants", () => {
  it("has correct canonical base URL", () => {
    expect(CANONICAL_BASE_URL).toBe("https://upcube.ai");
  });

  it("has correct default site title", () => {
    expect(DEFAULT_SITE_TITLE).toContain("Upcube");
    expect(DEFAULT_SITE_TITLE).toContain("Technology");
  });

  it("has correct default site description", () => {
    expect(DEFAULT_SITE_DESCRIPTION).toContain("technology ecosystem");
    expect(DEFAULT_SITE_DESCRIPTION).toContain("robotics");
  });
});
