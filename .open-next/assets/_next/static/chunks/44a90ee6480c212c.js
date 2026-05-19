(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  55672,
  (e) => {
    "use strict";
    let a = "https://ethen.upcube.ai",
      i = "https://books.upcube.ai",
      s = "https://planet.upcube.ai",
      r = "https://jobs.upcube.ai",
      t = "https://games.upcube.ai",
      l = "https://cloud.upcube.ai",
      o = [
        { id: "explore", label: "Explore", href: "/explore" },
        { id: "platform", label: "Platform", href: "/platform" },
        { id: "business", label: "Business", href: "/business" },
        { id: "capabilities", label: "Capabilities", href: "/capabilities" },
        { id: "news", label: "News", href: "/news" },
        { id: "builders", label: "Builders", href: "/builders" },
        { id: "teams", label: "Teams", href: "/teams" },
        { id: "enterprise", label: "Enterprise", href: "/enterprise" },
      ],
      n = [
        { id: "research", label: "Research", href: "/research" },
        { id: "chat", label: "Open chat", href: a },
      ];
    [...o];
    let c = [
        {
          id: "chat",
          title: "UpcubeAI Chat",
          description:
            "Assistant workspace for writing, analysis, and execution.",
          href: a,
          tag: "Workspace",
        },
        {
          id: "globe",
          title: "Upcube Globe",
          description:
            "Spatial exploration and geospatial intelligence surfaces.",
          href: s,
          tag: "3D Earth",
        },
        {
          id: "games",
          title: "Upcube Games",
          description:
            "Game discovery, featured titles, and launch-ready highlights.",
          href: t,
          tag: "Discovery",
        },
        {
          id: "books",
          title: "Upcube Books",
          description:
            "Book storefront and reading-focused editorial experiences.",
          href: i,
          tag: "Commerce",
        },
        {
          id: "jobs",
          title: "Upcube Jobs",
          description: "Hiring, role discovery, and team-building workflows.",
          href: r,
          tag: "Hiring",
        },
        {
          id: "repos",
          title: "Upcube Repos",
          description:
            "Templates, developer tools, and implementation starter kits.",
          href: l,
          tag: "Developers",
        },
      ],
      d = [
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
            { id: "careers-footer", label: "Careers", href: r },
          ],
        },
      ],
      p = [
        {
          id: "products",
          title: "Products",
          items: [
            {
              id: "chat-menu",
              label: "Chat",
              href: a,
              description:
                "Assistant workflows, planning, and execution surfaces.",
            },
            {
              id: "planet-menu",
              label: "Planet",
              href: s,
              description: "3D globe exploration and geospatial views.",
            },
            {
              id: "books-menu",
              label: "Books",
              href: i,
              description: "Reading and bookstore experiences.",
            },
            {
              id: "games-menu",
              label: "Games",
              href: t,
              description: "Games directory and launch highlights.",
            },
            {
              id: "jobs-menu",
              label: "Jobs",
              href: r,
              description: "Hiring and career destinations.",
            },
            {
              id: "cloud-menu",
              label: "Cloud",
              href: l,
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
              href: r,
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
    e.s([
      "portalActionNav",
      0,
      n,
      "portalFooterGroups",
      0,
      d,
      "portalHomepageCards",
      0,
      c,
      "portalMenuGroups",
      0,
      p,
      "portalPrimaryNav",
      0,
      o,
    ]);
  },
  26277,
  98234,
  12045,
  53363,
  (e) => {
    "use strict";
    var a = e.i(44237),
      i = e.i(15168),
      s = e.i(55672);
    function r() {
      return (0, a.jsx)("footer", {
        className: "uc-footer",
        children: (0, a.jsxs)("div", {
          className: "uc-shell uc-footer-grid",
          children: [
            (0, a.jsxs)("div", {
              children: [
                (0, a.jsxs)("div", {
                  className: "uc-footer-brand-row",
                  children: [
                    (0, a.jsx)("img", {
                      src: "/brand/logo-mark.png",
                      width: 28,
                      height: 28,
                      alt: "UpcubeAI",
                      className: "uc-footer-brand-mark",
                    }),
                    (0, a.jsx)("p", {
                      className: "uc-footer-brand-text",
                      children: "UpcubeAI",
                    }),
                  ],
                }),
                (0, a.jsx)("p", {
                  className: "uc-footer-note",
                  children:
                    "Shared portal foundation. Route URLs remain placeholders where not yet implemented.",
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "uc-grid uc-card-grid",
              children: s.portalFooterGroups.map((e) =>
                (0, a.jsxs)(
                  "section",
                  {
                    "aria-label": e.title,
                    children: [
                      (0, a.jsx)("p", {
                        className: "uc-eyebrow",
                        children: e.title,
                      }),
                      (0, a.jsx)("ul", {
                        children: e.links.map((e) =>
                          (0, a.jsx)(
                            "li",
                            {
                              children: (0, a.jsxs)(i.default, {
                                className: "uc-nav-link",
                                "data-placeholder": e.placeholder
                                  ? "true"
                                  : void 0,
                                href: e.href,
                                children: [
                                  e.label,
                                  e.placeholder
                                    ? (0, a.jsx)("span", {
                                        className: "uc-nav-note",
                                        "aria-hidden": "true",
                                        children: "Placeholder",
                                      })
                                    : null,
                                ],
                              }),
                            },
                            e.id,
                          ),
                        ),
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
          ],
        }),
      });
    }
    function t() {
      return (0, a.jsx)("header", {
        className: "uc-header",
        children: (0, a.jsxs)("div", {
          className: "uc-shell uc-header-inner",
          children: [
            (0, a.jsx)(i.default, {
              href: "/",
              className: "uc-brand",
              "aria-label": "UpcubeAI home",
              children: (0, a.jsx)("img", {
                src: "/brand/logo-mark.png",
                width: 36,
                height: 36,
                alt: "UpcubeAI",
                className: "uc-brand-mark",
              }),
            }),
            (0, a.jsx)("nav", {
              className: "uc-header-nav",
              "aria-label": "Portal primary",
              children: (0, a.jsx)("ul", {
                className: "uc-nav-list",
                children: s.portalPrimaryNav.map((e) =>
                  (0, a.jsx)(
                    "li",
                    {
                      children: (0, a.jsxs)(i.default, {
                        className: "uc-nav-link",
                        "data-placeholder": e.placeholder ? "true" : void 0,
                        href: e.href,
                        children: [
                          e.label,
                          e.placeholder
                            ? (0, a.jsx)("span", {
                                className: "uc-nav-note",
                                "aria-hidden": "true",
                                children: "Soon",
                              })
                            : null,
                        ],
                      }),
                    },
                    e.id,
                  ),
                ),
              }),
            }),
            (0, a.jsx)("div", {
              className: "uc-header-actions",
              children: s.portalActionNav.map((e, s) =>
                (0, a.jsx)(
                  i.default,
                  {
                    className: "uc-button",
                    "data-variant": 1 === s ? "solid" : void 0,
                    href: e.href,
                    children: e.label,
                  },
                  e.id,
                ),
              ),
            }),
          ],
        }),
      });
    }
    function l({ children: e, theme: i = "dark", className: s }) {
      return (0, a.jsx)("div", {
        className: ["uc-page", s].filter(Boolean).join(" "),
        "data-theme": "dark" === i ? void 0 : i,
        children: e,
      });
    }
    function o({
      eyebrow: e,
      title: i,
      description: s,
      actions: r,
      className: t,
    }) {
      return (0, a.jsxs)("header", {
        className: ["uc-section-heading", t].filter(Boolean).join(" "),
        children: [
          e ? (0, a.jsx)("p", { className: "uc-eyebrow", children: e }) : null,
          (0, a.jsx)("h2", { className: "uc-section-title", children: i }),
          s
            ? (0, a.jsx)("p", {
                className: "uc-section-description",
                children: s,
              })
            : null,
          r,
        ],
      });
    }
    e.s(["PortalFooter", () => r], 26277),
      e.s(["PortalHeader", () => t], 98234),
      e.s(["PortalShell", () => l], 12045),
      e.s(["SectionHeading", () => o], 53363);
  },
  21931,
  (e) => {
    "use strict";
    var a = e.i(44237),
      i = e.i(5515),
      s = e.i(26277),
      r = e.i(98234),
      t = e.i(12045),
      l = e.i(53363);
    let o = [
        { id: "offerings", label: "Offerings" },
        { id: "how", label: "How it works" },
        { id: "guardrails", label: "Guardrails" },
      ],
      n = {
        offerings: [
          {
            id: "ops",
            title: "Ops Copilot",
            summary:
              "Convert weekly priorities, blockers, and handoffs into one repeatable operating rhythm.",
            points: [
              "Weekly brief templates and ownership capture",
              "Handoff summaries with next actions",
              "Decision logs that keep context durable",
            ],
          },
          {
            id: "support",
            title: "Support quality",
            summary:
              "Keep customer response patterns consistent without reducing support to canned macros.",
            points: [
              "Triage and escalation scaffolds",
              "Runbook-linked responses for known issues",
              "Post-incident follow-up checklists",
            ],
          },
          {
            id: "product",
            title: "Execution alignment",
            summary:
              "Structure specs, test plans, and launch checklists so teams can ship with less rework.",
            points: [
              "Clear goals, non-goals, and acceptance checks",
              "Risk and dependency notes before implementation",
              "Release updates tied to actual route changes",
            ],
          },
        ],
        how: [
          {
            id: "capture",
            title: "1. Capture context once",
            summary:
              "Centralize notes, assumptions, and source links before drafting execution output.",
            points: [
              "Use one source of truth per workflow",
              "Mark unknowns as missing instead of implied",
              "Keep plan and implementation boundaries explicit",
            ],
          },
          {
            id: "compose",
            title: "2. Compose with structure",
            summary:
              "Generate taskable outputs that map to ownership, deadlines, and review gates.",
            points: [
              "Summaries with direct action blocks",
              "Reusable templates for recurring processes",
              "Scoped updates without broad rewrites",
            ],
          },
          {
            id: "review",
            title: "3. Review with accountability",
            summary:
              "Validate assumptions, capture blockers, and publish outcomes with conservative claims.",
            points: [
              "Separate local validation from production readiness",
              "Call out unresolved dependencies directly",
              "Track changes and decisions in one place",
            ],
          },
        ],
        guardrails: [
          {
            id: "ownership",
            title: "Human ownership",
            summary:
              "AI output should support decisions, not remove ownership from responsible team members.",
            points: [
              "Approval checkpoints for high-impact actions",
              "Clear owner fields for each deliverable",
              "Review-required paths for sensitive changes",
            ],
          },
          {
            id: "facts",
            title: "Evidence discipline",
            summary:
              "Keep responses grounded in source material and avoid fabricated certainty.",
            points: [
              "Explicit source references in summaries",
              "Unknowns recorded as blockers",
              "No fabricated dates, metrics, or external claims",
            ],
          },
          {
            id: "privacy",
            title: "Privacy boundaries",
            summary:
              "Constrain data handling to the minimum needed for the stated workflow.",
            points: [
              "Minimal retention posture for operational notes",
              "No implied external publishing pipeline",
              "Scoped access by role and task",
            ],
          },
        ],
      };
    function c() {
      let [e, c] = (0, i.useState)("offerings"),
        d = n[e];
      return (0, a.jsxs)(t.PortalShell, {
        className: "uc-portal-page",
        children: [
          (0, a.jsx)(r.PortalHeader, {}),
          (0, a.jsxs)("main", {
            className: "uc-main",
            children: [
              (0, a.jsx)("section", {
                className: "uc-section uc-section-rule",
                children: (0, a.jsxs)("div", {
                  className: "uc-shell uc-content-stack",
                  children: [
                    (0, a.jsx)(l.SectionHeading, {
                      eyebrow: "Small teams and startups",
                      title: "UpcubeAI Teams",
                      description:
                        "A lightweight operating layer for teams that need speed, structure, and clear accountability.",
                    }),
                    (0, a.jsx)("div", {
                      className: "uc-tab-row",
                      role: "tablist",
                      "aria-label": "Teams tabs",
                      children: o.map((i) =>
                        (0, a.jsx)(
                          "button",
                          {
                            type: "button",
                            role: "tab",
                            className: "uc-tab-button",
                            "aria-selected": e === i.id,
                            "data-active": e === i.id ? "true" : void 0,
                            onClick: () => c(i.id),
                            children: i.label,
                          },
                          i.id,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("section", {
                className: "uc-section uc-section-rule",
                "aria-labelledby": "teams-content-title",
                children: (0, a.jsxs)("div", {
                  className: "uc-shell uc-content-stack",
                  children: [
                    (0, a.jsx)(l.SectionHeading, {
                      title:
                        "offerings" === e
                          ? "Team-facing offerings"
                          : "how" === e
                            ? "Operating model"
                            : "Guardrail model",
                      description:
                        "This route intentionally stays static and does not claim backend automation or external workflow orchestration.",
                      className: "uc-section-heading--compact",
                    }),
                    (0, a.jsx)("div", {
                      className: "uc-grid uc-card-grid",
                      children: d.map((e) =>
                        (0, a.jsxs)(
                          "article",
                          {
                            className: "uc-card",
                            children: [
                              (0, a.jsx)("h3", {
                                className: "uc-card-title",
                                children: e.title,
                              }),
                              (0, a.jsx)("p", {
                                className: "uc-card-copy",
                                children: e.summary,
                              }),
                              (0, a.jsx)("ul", {
                                className: "uc-bullet-list",
                                children: e.points.map((e) =>
                                  (0, a.jsx)("li", { children: e }, e),
                                ),
                              }),
                            ],
                          },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
            ],
          }),
          (0, a.jsx)(s.PortalFooter, {}),
        ],
      });
    }
    e.s([], 22060), e.i(22060), e.s(["default", () => c], 21931);
  },
]);
