export type PageContentEntry = {
  slug: string;
  route: string;
  filename: string;
  title: string;
  body: string;
};

function parseTitle(markdown: string): string {
  const match = markdown.match(/^#\s+(.+)/m);
  return match ? match[1]!.trim() : "";
}

const CONTENT_DIR = "content/upcube-page-imports-flat";

function loadFile(filename: string): string {
  try {
    const fs = require("node:fs") as typeof import("node:fs");
    const path = require("node:path") as typeof import("node:path");
    return fs.readFileSync(
      path.join(process.cwd(), CONTENT_DIR, filename),
      "utf-8",
    );
  } catch {
    return "";
  }
}

let registry: Record<string, PageContentEntry> | null = null;

function getRegistry(): Record<string, PageContentEntry> {
  if (registry) return registry;
  registry = {};
  const entries: [string, string][] = [
    ["upcubeai-about-us-page.md", "/company/about"],
    ["upcubeai-our-charter-page.md", "/company/charter"],
    ["upcubeai-foundation-page.md", "/company/foundation"],
    ["upcubeai-careers-page.md", "/company/careers"],
    ["upcubeai-brand-help-center-page.md", "/company/brand-help-center"],
    ["upcubeai-for-organizations-page.md", "/organizations"],
    [
      "upcubeai-why-we-focus-on-ai-founder-letter.md",
      "/company/founder-letter",
    ],
    ["upcubeai-legal-and-policy-index-page.md", "/legal"],
    ["upcubeai-terms-of-use-page.md", "/legal/terms"],
    ["upcubeai-privacy-policy-page.md", "/legal/privacy"],
    ["upcubeai-other-policies-page.md", "/legal/other-policies"],
    ["upcubeai-ai-principles-page.md", "/policy/ai-principles"],
    [
      "upcubeai-working-together-ai-for-everyone-page.md",
      "/policy/working-together",
    ],
    ["upcubeai-societal-impact-page.md", "/policy/societal-impact"],
    ["upcubeai-safety-approach-page.md", "/safety"],
    ["upcubeai-security-page.md", "/security"],
    ["upcubeai-security-and-privacy-page.md", "/security-privacy"],
    ["upcubeai-trust-and-transparency-page.md", "/trust-transparency"],
    ["upcubeai-status-page.md", "/status"],
    [
      "upcubeai-research-01-earth-ai-geospatial-intelligence.md",
      "/research/earth-ai-geospatial-intelligence",
    ],
    ["upcubeai-research-02-health-ai.md", "/research/health-ai"],
    ["upcubeai-research-03-science-ai.md", "/research/science-ai"],
    [
      "upcubeai-research-04-sustainability-crisis-resilience.md",
      "/research/sustainability-crisis-resilience",
    ],
    [
      "upcubeai-research-05-algorithms-and-theory.md",
      "/research/algorithms-and-theory",
    ],
    [
      "upcubeai-research-06-information-retrieval.md",
      "/research/information-retrieval",
    ],
    [
      "upcubeai-research-07-machine-intelligence.md",
      "/research/machine-intelligence",
    ],
    [
      "upcubeai-research-08-machine-perception.md",
      "/research/machine-perception",
    ],
    [
      "upcubeai-research-09-natural-language-processing.md",
      "/research/natural-language-processing",
    ],
    [
      "upcubeai-research-10-human-computer-interaction-visualization.md",
      "/research/human-computer-interaction-visualization",
    ],
    ["upcubeai-research-11-networking.md", "/research/networking"],
    ["upcubeai-research-12-responsible-ai.md", "/research/responsible-ai"],
    [
      "upcubeai-research-13-anti-abuse-security-privacy.md",
      "/research/anti-abuse-security-privacy",
    ],
    [
      "upcubeai-research-14-software-engineering.md",
      "/research/software-engineering",
    ],
    ["upcubeai-research-15-software-systems.md", "/research/software-systems"],
  ];
  for (const [filename, route] of entries) {
    const body = loadFile(filename);
    registry[filename] = {
      slug: filename.replace(/\.md$/, ""),
      route,
      filename,
      title: parseTitle(body),
      body,
    };
  }
  return registry;
}

export function getPageContentByRoute(
  route: string,
): PageContentEntry | undefined {
  return Object.values(getRegistry()).find((entry) => entry.route === route);
}

export function getBodyForRoute(route: string): string {
  return getPageContentByRoute(route)?.body ?? "";
}

export function getAllResearchRoutes(): string[] {
  return Object.values(getRegistry())
    .filter((entry) => entry.route.startsWith("/research/"))
    .map((entry) => entry.route);
}
