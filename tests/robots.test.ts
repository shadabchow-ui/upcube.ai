import { describe, expect, it } from "vitest";
import robots from "app/robots";

const rulesArray = () => {
  const result = robots();
  return Array.isArray(result.rules) ? result.rules : [result.rules];
};

describe("robots.txt", () => {
  it("allows / for all user agents", () => {
    const rules = rulesArray();
    expect(rules.length).toBeGreaterThan(0);

    const topRule = rules[0]!;
    expect(topRule.userAgent).toBe("*");
    expect(typeof topRule.allow).toBe("string");
    expect(topRule.allow).toBe("/");
  });

  it("disallows /api/ and /_next/", () => {
    const rules = rulesArray();
    const topRule = rules[0]!;
    expect(topRule.disallow).toContain("/api/");
    expect(topRule.disallow).toContain("/_next/");
  });

  it("references sitemap.xml", () => {
    const result = robots();
    expect(result.sitemap).toBe("https://upcube.ai/sitemap.xml");
  });

  it("sets host to canonical base", () => {
    const result = robots();
    expect(result.host).toBe("https://upcube.ai");
  });
});
