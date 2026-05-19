(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  55672,
  (e) => {
    "use strict";
    let a = "https://ethen.upcube.ai",
      s = "https://books.upcube.ai",
      r = "https://planet.upcube.ai",
      i = "https://jobs.upcube.ai",
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
          href: s,
          tag: "Commerce",
        },
        {
          id: "jobs",
          title: "Upcube Jobs",
          description: "Hiring, role discovery, and team-building workflows.",
          href: i,
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
            { id: "careers-footer", label: "Careers", href: i },
          ],
        },
      ],
      h = [
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
              href: s,
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
              href: i,
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
              href: i,
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
      h,
      "portalPrimaryNav",
      0,
      o,
    ]);
  },
  17965,
  (e) => {
    "use strict";
    var a = e.i(44237),
      s = e.i(15168),
      r = e.i(5515);
    let i = "https://ethen.upcube.ai",
      t = [
        { label: "Open chat", href: "https://ethen.upcube.ai" },
        { label: "Open globe", href: "https://planet.upcube.ai" },
        { label: "Books", href: "https://books.upcube.ai" },
        { label: "Games", href: "https://games.upcube.ai" },
        { label: "Cloud tools", href: "https://cloud.upcube.ai" },
      ];
    function l() {
      return (0, a.jsxs)("section", {
        className: "uc-home__chat-panel",
        "aria-label": "UpcubeAI chat entry",
        children: [
          (0, a.jsxs)("form", {
            className: "uc-home__chat-composer",
            action: i,
            children: [
              (0, a.jsxs)("div", {
                className: "uc-home__chat-composer-field",
                children: [
                  (0, a.jsx)("label", {
                    className: "uc-home__sr-only",
                    htmlFor: "upcube-home-prompt",
                    children: "Prompt",
                  }),
                  (0, a.jsx)("textarea", {
                    id: "upcube-home-prompt",
                    name: "prompt",
                    rows: 2,
                    placeholder: "Message UpcubeAI",
                    autoComplete: "off",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "uc-home__chat-composer-bar",
                children: [
                  (0, a.jsx)("p", {
                    children:
                      "Chat, research, globe, and developer tools from one prompt.",
                  }),
                  (0, a.jsxs)("button", {
                    type: "submit",
                    "aria-label": "Open chat",
                    children: [
                      (0, a.jsx)("span", { children: "Open chat" }),
                      (0, a.jsx)("span", {
                        className: "uc-home__chat-arrow",
                        "aria-hidden": "true",
                        children: "↑",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, a.jsx)("div", {
            className: "uc-home__chat-suggestions",
            "aria-label": "Prompt suggestions",
            children: t.map((e) =>
              (0, a.jsx)(
                s.default,
                { href: e.href, children: e.label },
                e.label,
              ),
            ),
          }),
        ],
      });
    }
    let o = [
        {
          title: "Explore the world in 3D",
          description:
            "Upcube Globe combines geospatial context with AI-native queries for teams building location-aware products.",
          href: "https://planet.upcube.ai",
          cta: "Explore Globe",
          tone: "teal",
        },
        {
          title: "Launch smarter commerce systems",
          description:
            "Use Upcube Commerce workflows to streamline catalog updates, merchandising, and storefront experimentation.",
          href: "#",
          cta: "Explore Commerce",
          tone: "amber",
        },
        {
          title: "Build with open developer rails",
          description:
            "Upcube Repos provides docs, templates, and integrations for teams shipping quickly across the ecosystem.",
          href: "https://cloud.upcube.ai",
          cta: "Open Repos",
          tone: "blue",
        },
        {
          title: "Create, learn, and publish faster",
          description:
            "From AI chat to books and research, one workspace helps teams ideate, refine, and ship faster.",
          href: "https://ethen.upcube.ai",
          cta: "Open Workspace",
          tone: "green",
        },
      ],
      n = [
        {
          title: "Upcube Globe dashboard rebuild",
          description:
            "A faster map shell with clearer overlays and search state.",
          href: "https://planet.upcube.ai",
        },
        {
          title: "Games directory launch",
          description: "A new index for curated games, creators, and releases.",
          href: "https://games.upcube.ai",
        },
        {
          title: "Upcube Books storefront",
          description:
            "Editorial shelves and smart collections now live in preview.",
          href: "https://books.upcube.ai",
        },
        {
          title: "UpcubeAI workspace update",
          description:
            "Unified chat, planning, and execution panels for builders.",
          href: "https://ethen.upcube.ai",
        },
        {
          title: "Developer template pack",
          description:
            "Starter repos for internal tools, APIs, and commerce apps.",
          href: "https://cloud.upcube.ai",
        },
        {
          title: "Research notes refresh",
          description:
            "Editorial summaries for architecture, evaluation, and workflow experiments.",
          href: "/research",
        },
      ];
    var c = e.i(55672);
    function d({ placeholder: e }) {
      return e
        ? (0, a.jsx)("small", { children: "Placeholder destination" })
        : null;
    }
    function h() {
      let [e, t] = (0, r.useState)(null),
        l = (0, r.useRef)(null),
        o = (0, r.useRef)(null),
        n = c.portalMenuGroups.find((a) => a.id === e) ?? null;
      function d() {
        null !== o.current &&
          (window.clearTimeout(o.current), (o.current = null));
      }
      function h() {
        d(),
          (o.current = window.setTimeout(() => {
            t(null), (o.current = null);
          }, 120));
      }
      return (
        (0, r.useEffect)(() => {
          if (e)
            return (
              document.addEventListener("pointerdown", a),
              document.addEventListener("keydown", s),
              () => {
                document.removeEventListener("pointerdown", a),
                  document.removeEventListener("keydown", s);
              }
            );
          function a(e) {
            l.current && !l.current.contains(e.target) && (d(), t(null));
          }
          function s(e) {
            "Escape" === e.key && (d(), t(null));
          }
        }, [e]),
        (0, r.useEffect)(
          () => () => {
            d();
          },
          [],
        ),
        (0, a.jsx)("header", {
          className: "uc-home__header",
          "aria-label": "UpcubeAI portal header",
          children: (0, a.jsxs)("div", {
            className: "uc-home__container uc-home__header-inner",
            children: [
              (0, a.jsx)(s.default, {
                href: "/",
                className: "uc-home__brand",
                children: (0, a.jsx)("img", {
                  src: "/brand/logo-mark.png",
                  width: 36,
                  height: 36,
                  alt: "UpcubeAI",
                  className: "uc-home__brand-mark",
                }),
              }),
              (0, a.jsxs)("div", {
                className: "uc-home__nav-shell",
                ref: l,
                onMouseEnter: d,
                onMouseLeave: h,
                onBlur: (e) => {
                  let a = e.relatedTarget;
                  (a && e.currentTarget.contains(a)) || (d(), t(null));
                },
                children: [
                  (0, a.jsx)("nav", {
                    className: "uc-home__nav",
                    "aria-label": "Primary navigation",
                    children: c.portalMenuGroups.map((e) =>
                      (0, a.jsx)(
                        "div",
                        {
                          className: "uc-home__nav-group",
                          children: (0, a.jsx)("button", {
                            type: "button",
                            className: "uc-home__nav-trigger",
                            "aria-expanded": n?.id === e.id,
                            "aria-controls": `uc-home-mega-${e.id}`,
                            onMouseEnter: () => {
                              d(), t(e.id);
                            },
                            onFocus: () => {
                              d(), t(e.id);
                            },
                            onClick: () => {
                              d(), t(e.id);
                            },
                            children: e.title,
                          }),
                        },
                        e.id,
                      ),
                    ),
                  }),
                  n
                    ? (0, a.jsx)("div", {
                        className: "uc-home__mega-wrap",
                        onMouseEnter: d,
                        onMouseLeave: h,
                        children: (0, a.jsxs)("div", {
                          id: `uc-home-mega-${n.id}`,
                          className: "uc-home__mega",
                          role: "group",
                          "aria-label": `${n.title} menu`,
                          children: [
                            (0, a.jsx)("p", {
                              className: "uc-home__mega-label",
                              children: n.title,
                            }),
                            (0, a.jsx)("div", {
                              className: "uc-home__mega-grid",
                              children: n.items.map((e) =>
                                (0, a.jsxs)(
                                  s.default,
                                  {
                                    className: "uc-home__mega-item",
                                    href: e.href,
                                    children: [
                                      (0, a.jsx)("span", { children: e.label }),
                                      (0, a.jsx)("small", {
                                        children:
                                          e.description ??
                                          (e.placeholder
                                            ? "Destination not yet provided."
                                            : ""),
                                      }),
                                    ],
                                  },
                                  e.id,
                                ),
                              ),
                            }),
                          ],
                        }),
                      })
                    : null,
                ],
              }),
              (0, a.jsxs)("details", {
                className: "uc-home__mobile-menu",
                children: [
                  (0, a.jsx)("summary", { children: "Menu" }),
                  (0, a.jsx)("div", {
                    className: "uc-home__mobile-panel",
                    children: c.portalMenuGroups.map((e) =>
                      (0, a.jsxs)(
                        "section",
                        {
                          "aria-label": `${e.title} mobile menu`,
                          children: [
                            (0, a.jsx)("p", {
                              className: "uc-home__mobile-title",
                              children: e.title,
                            }),
                            (0, a.jsx)("div", {
                              className: "uc-home__mobile-links",
                              children: e.items.map((e) =>
                                (0, a.jsxs)(
                                  s.default,
                                  {
                                    className: "uc-home__mobile-link",
                                    href: e.href,
                                    children: [
                                      (0, a.jsx)("span", { children: e.label }),
                                      (0, a.jsx)("small", {
                                        children:
                                          e.description ??
                                          (e.placeholder
                                            ? "Destination not yet provided."
                                            : ""),
                                      }),
                                    ],
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
              (0, a.jsxs)("div", {
                className: "uc-home__actions",
                children: [
                  (0, a.jsx)(s.default, {
                    href: "/research",
                    className: "uc-home__link-btn",
                    children: "Research",
                  }),
                  (0, a.jsx)(s.default, {
                    href: i,
                    className: "uc-home__primary-btn",
                    children: "Open chat",
                  }),
                ],
              }),
            ],
          }),
        })
      );
    }
    function p() {
      return (0, a.jsx)("section", {
        className: "uc-home__hero",
        children: (0, a.jsx)("div", {
          className: "uc-home__container uc-home__hero-inner",
          children: (0, a.jsxs)("div", {
            className: "uc-home__hero-stack",
            children: [
              (0, a.jsx)("h1", { children: "What can I help with?" }),
              (0, a.jsx)(l, {}),
            ],
          }),
        }),
      });
    }
    function u() {
      return (0, a.jsxs)("div", {
        className: "uc-home",
        children: [
          (0, a.jsx)(h, {}),
          (0, a.jsxs)("main", {
            children: [
              (0, a.jsx)(p, {}),
              (0, a.jsx)("section", {
                className: "uc-home__section",
                "aria-labelledby": "portal-title",
                children: (0, a.jsxs)("div", {
                  className: "uc-home__container",
                  children: [
                    (0, a.jsx)("h2", {
                      id: "portal-title",
                      children: "Portal products",
                    }),
                    (0, a.jsx)("div", {
                      className: "uc-home__portal-grid",
                      children: c.portalHomepageCards.map((e) =>
                        (0, a.jsxs)(
                          s.default,
                          {
                            className: "uc-home__portal-card",
                            href: e.href,
                            children: [
                              e.tag
                                ? (0, a.jsx)("span", {
                                    className: "uc-home__chip",
                                    children: e.tag,
                                  })
                                : null,
                              (0, a.jsx)("h3", { children: e.title }),
                              (0, a.jsx)("p", { children: e.description }),
                              (0, a.jsx)(d, { placeholder: "#" === e.href }),
                            ],
                          },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("section", {
                className: "uc-home__section",
                "aria-labelledby": "feature-title",
                children: (0, a.jsxs)("div", {
                  className: "uc-home__container",
                  children: [
                    (0, a.jsx)("h2", {
                      id: "feature-title",
                      children: "Built for every Upcube lane",
                    }),
                    (0, a.jsx)("div", {
                      className: "uc-home__feature-grid",
                      children: o.map((e) =>
                        (0, a.jsxs)(
                          "article",
                          {
                            className: `uc-home__feature uc-home__feature--${e.tone}`,
                            children: [
                              (0, a.jsx)("h3", { children: e.title }),
                              (0, a.jsx)("p", { children: e.description }),
                              (0, a.jsx)(s.default, {
                                href: e.href,
                                children: e.cta,
                              }),
                              (0, a.jsx)(d, { placeholder: "#" === e.href }),
                            ],
                          },
                          e.title,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("section", {
                className: "uc-home__section",
                "aria-labelledby": "updates-title",
                children: (0, a.jsxs)("div", {
                  className: "uc-home__container",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "uc-home__section-head-row",
                      children: [
                        (0, a.jsx)("h2", {
                          id: "updates-title",
                          children: "Recent developments",
                        }),
                        (0, a.jsx)(s.default, {
                          href: "/news",
                          className: "uc-home__news-link",
                          children: "View all news",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "uc-home__story-grid",
                      children: n.map((e) =>
                        (0, a.jsxs)(
                          s.default,
                          {
                            className: "uc-home__story",
                            href: e.href,
                            children: [
                              (0, a.jsx)("h3", { children: e.title }),
                              (0, a.jsx)("p", { children: e.description }),
                              (0, a.jsx)(d, { placeholder: "#" === e.href }),
                            ],
                          },
                          e.title,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("section", {
                className: "uc-home__section uc-home__section--cta",
                "aria-labelledby": "cta-title",
                children: (0, a.jsxs)("div", {
                  className: "uc-home__container",
                  children: [
                    (0, a.jsx)("h2", {
                      id: "cta-title",
                      children: "Build your next system with UpcubeAI.",
                    }),
                    (0, a.jsxs)("div", {
                      className: "uc-home__cta-row",
                      children: [
                        (0, a.jsx)(s.default, {
                          href: i,
                          className: "uc-home__primary-btn",
                          children: "Start building",
                        }),
                        (0, a.jsx)(s.default, {
                          href: "#portal-title",
                          className: "uc-home__ghost-btn",
                          children: "View ecosystem",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          (0, a.jsx)("footer", {
            className: "uc-home__footer",
            children: (0, a.jsxs)("div", {
              className: "uc-home__container uc-home__footer-grid",
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("p", {
                      className: "uc-home__brand-text",
                      children: "UpcubeAI",
                    }),
                    (0, a.jsx)("p", {
                      className: "uc-home__footer-copy",
                      children:
                        "Main ecosystem portal for chat, globe, games, books, jobs, repos, and commerce.",
                    }),
                  ],
                }),
                c.portalFooterGroups.map((e) =>
                  (0, a.jsxs)(
                    "nav",
                    {
                      "aria-label": `${e.title} links`,
                      children: [
                        (0, a.jsx)("h3", { children: e.title }),
                        e.links.map((e) =>
                          (0, a.jsxs)(
                            s.default,
                            {
                              href: e.href,
                              children: [
                                (0, a.jsx)("span", { children: e.label }),
                                e.placeholder
                                  ? (0, a.jsx)("small", {
                                      children: "Placeholder",
                                    })
                                  : null,
                              ],
                            },
                            e.id,
                          ),
                        ),
                      ],
                    },
                    e.id,
                  ),
                ),
              ],
            }),
          }),
        ],
      });
    }
    e.s(["default", () => u], 17965);
  },
]);
