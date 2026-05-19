(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  55672,
  (e) => {
    "use strict";
    let a = "https://ethen.upcube.ai",
      i = "https://books.upcube.ai",
      r = "https://planet.upcube.ai",
      s = "https://jobs.upcube.ai",
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
          href: r,
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
          href: s,
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
            { id: "careers-footer", label: "Careers", href: s },
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
              href: r,
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
              href: s,
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
              href: s,
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
      r = e.i(55672);
    function s() {
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
              children: r.portalFooterGroups.map((e) =>
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
                children: r.portalPrimaryNav.map((e) =>
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
              children: r.portalActionNav.map((e, r) =>
                (0, a.jsx)(
                  i.default,
                  {
                    className: "uc-button",
                    "data-variant": 1 === r ? "solid" : void 0,
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
    function l({ children: e, theme: i = "dark", className: r }) {
      return (0, a.jsx)("div", {
        className: ["uc-page", r].filter(Boolean).join(" "),
        "data-theme": "dark" === i ? void 0 : i,
        children: e,
      });
    }
    function o({
      eyebrow: e,
      title: i,
      description: r,
      actions: s,
      className: t,
    }) {
      return (0, a.jsxs)("header", {
        className: ["uc-section-heading", t].filter(Boolean).join(" "),
        children: [
          e ? (0, a.jsx)("p", { className: "uc-eyebrow", children: e }) : null,
          (0, a.jsx)("h2", { className: "uc-section-title", children: i }),
          r
            ? (0, a.jsx)("p", {
                className: "uc-section-description",
                children: r,
              })
            : null,
          s,
        ],
      });
    }
    e.s(["PortalFooter", () => s], 26277),
      e.s(["PortalHeader", () => t], 98234),
      e.s(["PortalShell", () => l], 12045),
      e.s(["SectionHeading", () => o], 53363);
  },
  51838,
  (e) => {
    "use strict";
    var a = e.i(44237),
      i = e.i(5515),
      r = e.i(26277),
      s = e.i(98234),
      t = e.i(12045),
      l = e.i(53363);
    let o = [
        { id: "offerings", label: "Offerings" },
        { id: "workflow", label: "Build workflow" },
        { id: "governance", label: "Security and governance" },
      ],
      n = {
        offerings: [
          {
            id: "sdk",
            title: "Product AI SDK",
            summary:
              "Typed endpoints and structured outputs for chat, tools, and retrieval flows.",
            points: [
              "Streaming responses and tool-calling boundaries",
              "Schema validation and retry-safe output handling",
              "Workspace-aware delivery without runtime guesswork",
            ],
          },
          {
            id: "evals",
            title: "Evaluation harness",
            summary:
              "Regression checks for prompts, retrieval behavior, and tool chains before release.",
            points: [
              "Golden-set comparisons and rubric scoring",
              "Release gating for quality and cost drift",
              "Clear pass/fail framing for launch readiness",
            ],
          },
          {
            id: "observability",
            title: "Run observability",
            summary:
              "Trace-first run records to inspect latency, cost, and failure patterns.",
            points: [
              "Deterministic run replay for debugging",
              "Error taxonomy and incident triage signals",
              "Operator-friendly summaries for release review",
            ],
          },
        ],
        workflow: [
          {
            id: "plan",
            title: "1. Plan and scope",
            summary:
              "Define goals, non-goals, and route/component boundaries before implementation.",
            points: [
              "Declare where static placeholders are intentional",
              "Separate implementation proof from production claims",
              "Keep app links and route ownership explicit",
            ],
          },
          {
            id: "build",
            title: "2. Implement with gates",
            summary:
              "Build in small slices with local checks and explicit claim boundaries.",
            points: [
              "Use typed interfaces and stable class families",
              "Keep styles scoped to portal surfaces",
              "Avoid hidden runtime dependencies",
            ],
          },
          {
            id: "review",
            title: "3. Review and ship",
            summary:
              "Run validations, capture blockers, and document unresolved constraints.",
            points: [
              "Flag environment blockers separately from code defects",
              "Report missing prerequisites instead of fabricating success",
              "Publish clear next actions for follow-up",
            ],
          },
        ],
        governance: [
          {
            id: "policy",
            title: "Policy controls",
            summary:
              "Runtime controls should be explicit and reviewable before enabling broad automation.",
            points: [
              "Role-based access and approval checkpoints",
              "Tool allowlists with constrained parameters",
              "Boundary-first defaults for risky operations",
            ],
          },
          {
            id: "data",
            title: "Data handling",
            summary:
              "Keep handling rules narrow, trackable, and tied to concrete product flows.",
            points: [
              "Minimal data collection and retention posture",
              "Clear source attribution and evidence boundaries",
              "No hidden persistence assumptions",
            ],
          },
          {
            id: "audit",
            title: "Auditability",
            summary:
              "Operational visibility should capture what changed, why, and by whom.",
            points: [
              "Run-level logs with timestamps and ownership",
              "Release notes for policy and workflow changes",
              "Deterministic rollback planning for critical paths",
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
          (0, a.jsx)(s.PortalHeader, {}),
          (0, a.jsxs)("main", {
            className: "uc-main",
            children: [
              (0, a.jsx)("section", {
                className: "uc-section uc-section-rule",
                children: (0, a.jsxs)("div", {
                  className: "uc-shell uc-content-stack",
                  children: [
                    (0, a.jsx)(l.SectionHeading, {
                      eyebrow: "Builders and Developers",
                      title: "UpcubeAI Builders",
                      description:
                        "A practical view of how builders can ship AI features with typed interfaces, evaluation gates, and operational guardrails.",
                    }),
                    (0, a.jsx)("div", {
                      className: "uc-tab-row",
                      role: "tablist",
                      "aria-label": "Builders tabs",
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
                "aria-labelledby": "builders-content-title",
                children: (0, a.jsxs)("div", {
                  className: "uc-shell uc-content-stack",
                  children: [
                    (0, a.jsx)(l.SectionHeading, {
                      title:
                        "offerings" === e
                          ? "Current offering surfaces"
                          : "workflow" === e
                            ? "Implementation workflow"
                            : "Governance posture",
                      description:
                        "This route is static and local to the current repo; production rollout controls are not provided here.",
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
          (0, a.jsx)(r.PortalFooter, {}),
        ],
      });
    }
    e.s([], 11134), e.i(11134), e.s(["default", () => c], 51838);
  },
]);
