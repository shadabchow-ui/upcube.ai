module.exports = [
  60425,
  (a) => {
    "use strict";
    let b = "https://ethen.upcube.ai",
      c = "https://books.upcube.ai",
      d = "https://planet.upcube.ai",
      e = "https://jobs.upcube.ai",
      f = "https://games.upcube.ai",
      g = "https://cloud.upcube.ai",
      h = [
        { id: "explore", label: "Explore", href: "/explore" },
        { id: "platform", label: "Platform", href: "/platform" },
        { id: "business", label: "Business", href: "/business" },
        { id: "capabilities", label: "Capabilities", href: "/capabilities" },
        { id: "news", label: "News", href: "/news" },
        { id: "builders", label: "Builders", href: "/builders" },
        { id: "teams", label: "Teams", href: "/teams" },
        { id: "enterprise", label: "Enterprise", href: "/enterprise" },
      ],
      i = [
        { id: "research", label: "Research", href: "/research" },
        { id: "chat", label: "Open chat", href: b },
      ];
    [...h];
    let j = [
        {
          id: "chat",
          title: "UpcubeAI Chat",
          description:
            "Assistant workspace for writing, analysis, and execution.",
          href: b,
          tag: "Workspace",
        },
        {
          id: "globe",
          title: "Upcube Globe",
          description:
            "Spatial exploration and geospatial intelligence surfaces.",
          href: d,
          tag: "3D Earth",
        },
        {
          id: "games",
          title: "Upcube Games",
          description:
            "Game discovery, featured titles, and launch-ready highlights.",
          href: f,
          tag: "Discovery",
        },
        {
          id: "books",
          title: "Upcube Books",
          description:
            "Book storefront and reading-focused editorial experiences.",
          href: c,
          tag: "Commerce",
        },
        {
          id: "jobs",
          title: "Upcube Jobs",
          description: "Hiring, role discovery, and team-building workflows.",
          href: e,
          tag: "Hiring",
        },
        {
          id: "repos",
          title: "Upcube Repos",
          description:
            "Templates, developer tools, and implementation starter kits.",
          href: g,
          tag: "Developers",
        },
      ],
      k = [
        {
          id: "explore",
          title: "Explore",
          links: [
            { id: "explore-footer", label: "Explore", href: "/explore" },
            { id: "platform-footer", label: "Platform", href: "/platform" },
            { id: "business-footer", label: "Business", href: "/business" },
            {
              id: "capabilities-footer",
              label: "Capabilities",
              href: "/capabilities",
            },
            { id: "news-footer", label: "News", href: "/news" },
            { id: "builders-footer", label: "Builders", href: "/builders" },
            { id: "teams-footer", label: "Teams", href: "/teams" },
            {
              id: "enterprise-footer",
              label: "Enterprise",
              href: "/enterprise",
            },
            { id: "research-footer", label: "Research", href: "/research" },
          ],
        },
        {
          id: "routes",
          title: "Company",
          links: [
            { id: "home-footer", label: "Portal home", href: "/" },
            { id: "company-footer", label: "Company", href: "/company" },
            { id: "careers-footer", label: "Careers", href: e },
          ],
        },
      ],
      l = [
        {
          id: "products",
          title: "Products",
          items: [
            {
              id: "chat-menu",
              label: "Chat",
              href: b,
              description:
                "Assistant workflows, planning, and execution surfaces.",
            },
            {
              id: "planet-menu",
              label: "Planet",
              href: d,
              description: "3D globe exploration and geospatial views.",
            },
            {
              id: "books-menu",
              label: "Books",
              href: c,
              description: "Reading and bookstore experiences.",
            },
            {
              id: "games-menu",
              label: "Games",
              href: f,
              description: "Games directory and launch highlights.",
            },
            {
              id: "jobs-menu",
              label: "Jobs",
              href: e,
              description: "Hiring and career destinations.",
            },
            {
              id: "cloud-menu",
              label: "Cloud",
              href: g,
              description: "Developer tools and cloud workspace surfaces.",
            },
            {
              id: "builders-menu",
              label: "Builders",
              href: "/builders",
              description:
                "Developer-facing implementation workflows and governance framing.",
            },
            {
              id: "teams-menu",
              label: "Teams",
              href: "/teams",
              description:
                "Operating model guidance for startup and small team execution.",
            },
            {
              id: "research-menu",
              label: "Research",
              href: "/research",
              description:
                "Research notes, architecture themes, and evaluation context.",
            },
            {
              id: "enterprise-menu",
              label: "Enterprise",
              href: "/enterprise",
              description:
                "Conservative enterprise positioning and readiness notes.",
            },
          ],
        },
        {
          id: "news",
          title: "News",
          items: [
            {
              id: "news-latest-menu",
              label: "Recent developments",
              href: "/news",
              description: "Latest platform and ecosystem updates.",
            },
            {
              id: "news-portal-refresh-menu",
              label: "Portal visual system refresh",
              href: "/news",
              description: "Design and shell improvements across the portal.",
            },
            {
              id: "news-globe-menu",
              label: "Globe interface updates",
              href: "/news",
              description: "Spatial UI and exploration improvements.",
            },
          ],
        },
        {
          id: "trust",
          title: "Trust",
          items: [
            {
              id: "safety-menu",
              label: "Safety",
              href: "/safety",
              description: "Trust and responsible product framing.",
            },
            {
              id: "faq-menu",
              label: "FAQ",
              href: "/faq",
              description: "Current answers based on repo state.",
            },
            {
              id: "privacy-menu",
              label: "Privacy",
              href: "/privacy",
              description:
                "Placeholder policy structure pending reviewed legal text.",
            },
          ],
        },
        {
          id: "company",
          title: "Company",
          items: [
            {
              id: "company-page-menu",
              label: "Company",
              href: "/company",
              description: "Mission and ecosystem overview.",
              placeholder: !0,
            },
            {
              id: "careers-menu",
              label: "Careers",
              href: e,
              description: "Jobs and hiring destination.",
            },
            {
              id: "updates-menu",
              label: "Updates",
              href: "/updates/platform-iteration-placeholder",
              description: "Portal article template route.",
              placeholder: !0,
            },
          ],
        },
      ];
    a.s([
      "portalActionNav",
      0,
      i,
      "portalFooterGroups",
      0,
      k,
      "portalHomepageCards",
      0,
      j,
      "portalMenuGroups",
      0,
      l,
      "portalPrimaryNav",
      0,
      h,
    ]);
  },
];

//# sourceMappingURL=lib_upcube-portal_content_ts_a2c844ef._.js.map
