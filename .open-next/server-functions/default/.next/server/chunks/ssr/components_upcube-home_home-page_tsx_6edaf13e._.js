module.exports = [
  93415,
  (a) => {
    "use strict";
    var b = a.i(63895),
      c = a.i(37067),
      d = a.i(56778);
    let e = "https://ethen.upcube.ai",
      f = [
        { label: "Open chat", href: "https://ethen.upcube.ai" },
        { label: "Open globe", href: "https://planet.upcube.ai" },
        { label: "Books", href: "https://books.upcube.ai" },
        { label: "Games", href: "https://games.upcube.ai" },
        { label: "Cloud tools", href: "https://cloud.upcube.ai" },
      ];
    function g() {
      return (0, b.jsxs)("section", {
        className: "uc-home__chat-panel",
        "aria-label": "UpcubeAI chat entry",
        children: [
          (0, b.jsxs)("form", {
            className: "uc-home__chat-composer",
            action: e,
            children: [
              (0, b.jsxs)("div", {
                className: "uc-home__chat-composer-field",
                children: [
                  (0, b.jsx)("label", {
                    className: "uc-home__sr-only",
                    htmlFor: "upcube-home-prompt",
                    children: "Prompt",
                  }),
                  (0, b.jsx)("textarea", {
                    id: "upcube-home-prompt",
                    name: "prompt",
                    rows: 2,
                    placeholder: "Message UpcubeAI",
                    autoComplete: "off",
                  }),
                ],
              }),
              (0, b.jsxs)("div", {
                className: "uc-home__chat-composer-bar",
                children: [
                  (0, b.jsx)("p", {
                    children:
                      "Chat, research, globe, and developer tools from one prompt.",
                  }),
                  (0, b.jsxs)("button", {
                    type: "submit",
                    "aria-label": "Open chat",
                    children: [
                      (0, b.jsx)("span", { children: "Open chat" }),
                      (0, b.jsx)("span", {
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
          (0, b.jsx)("div", {
            className: "uc-home__chat-suggestions",
            "aria-label": "Prompt suggestions",
            children: f.map((a) =>
              (0, b.jsx)(
                c.default,
                { href: a.href, children: a.label },
                a.label,
              ),
            ),
          }),
        ],
      });
    }
    let h = [
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
      i = [
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
    var j = a.i(60425);
    function k({ placeholder: a }) {
      return a
        ? (0, b.jsx)("small", { children: "Placeholder destination" })
        : null;
    }
    function l() {
      let [a, f] = (0, d.useState)(null),
        g = (0, d.useRef)(null),
        h = (0, d.useRef)(null),
        i = j.portalMenuGroups.find((b) => b.id === a) ?? null;
      function k() {
        null !== h.current &&
          (window.clearTimeout(h.current), (h.current = null));
      }
      function l() {
        k(),
          (h.current = window.setTimeout(() => {
            f(null), (h.current = null);
          }, 120));
      }
      return (
        (0, d.useEffect)(() => {
          if (a)
            return (
              document.addEventListener("pointerdown", b),
              document.addEventListener("keydown", c),
              () => {
                document.removeEventListener("pointerdown", b),
                  document.removeEventListener("keydown", c);
              }
            );
          function b(a) {
            g.current && !g.current.contains(a.target) && (k(), f(null));
          }
          function c(a) {
            "Escape" === a.key && (k(), f(null));
          }
        }, [a]),
        (0, d.useEffect)(
          () => () => {
            k();
          },
          [],
        ),
        (0, b.jsx)("header", {
          className: "uc-home__header",
          "aria-label": "UpcubeAI portal header",
          children: (0, b.jsxs)("div", {
            className: "uc-home__container uc-home__header-inner",
            children: [
              (0, b.jsx)(c.default, {
                href: "/",
                className: "uc-home__brand",
                children: (0, b.jsx)("img", {
                  src: "/brand/logo-mark.png",
                  width: 36,
                  height: 36,
                  alt: "UpcubeAI",
                  className: "uc-home__brand-mark",
                }),
              }),
              (0, b.jsxs)("div", {
                className: "uc-home__nav-shell",
                ref: g,
                onMouseEnter: k,
                onMouseLeave: l,
                onBlur: (a) => {
                  let b = a.relatedTarget;
                  (b && a.currentTarget.contains(b)) || (k(), f(null));
                },
                children: [
                  (0, b.jsx)("nav", {
                    className: "uc-home__nav",
                    "aria-label": "Primary navigation",
                    children: j.portalMenuGroups.map((a) =>
                      (0, b.jsx)(
                        "div",
                        {
                          className: "uc-home__nav-group",
                          children: (0, b.jsx)("button", {
                            type: "button",
                            className: "uc-home__nav-trigger",
                            "aria-expanded": i?.id === a.id,
                            "aria-controls": `uc-home-mega-${a.id}`,
                            onMouseEnter: () => {
                              k(), f(a.id);
                            },
                            onFocus: () => {
                              k(), f(a.id);
                            },
                            onClick: () => {
                              k(), f(a.id);
                            },
                            children: a.title,
                          }),
                        },
                        a.id,
                      ),
                    ),
                  }),
                  i
                    ? (0, b.jsx)("div", {
                        className: "uc-home__mega-wrap",
                        onMouseEnter: k,
                        onMouseLeave: l,
                        children: (0, b.jsxs)("div", {
                          id: `uc-home-mega-${i.id}`,
                          className: "uc-home__mega",
                          role: "group",
                          "aria-label": `${i.title} menu`,
                          children: [
                            (0, b.jsx)("p", {
                              className: "uc-home__mega-label",
                              children: i.title,
                            }),
                            (0, b.jsx)("div", {
                              className: "uc-home__mega-grid",
                              children: i.items.map((a) =>
                                (0, b.jsxs)(
                                  c.default,
                                  {
                                    className: "uc-home__mega-item",
                                    href: a.href,
                                    children: [
                                      (0, b.jsx)("span", { children: a.label }),
                                      (0, b.jsx)("small", {
                                        children:
                                          a.description ??
                                          (a.placeholder
                                            ? "Destination not yet provided."
                                            : ""),
                                      }),
                                    ],
                                  },
                                  a.id,
                                ),
                              ),
                            }),
                          ],
                        }),
                      })
                    : null,
                ],
              }),
              (0, b.jsxs)("details", {
                className: "uc-home__mobile-menu",
                children: [
                  (0, b.jsx)("summary", { children: "Menu" }),
                  (0, b.jsx)("div", {
                    className: "uc-home__mobile-panel",
                    children: j.portalMenuGroups.map((a) =>
                      (0, b.jsxs)(
                        "section",
                        {
                          "aria-label": `${a.title} mobile menu`,
                          children: [
                            (0, b.jsx)("p", {
                              className: "uc-home__mobile-title",
                              children: a.title,
                            }),
                            (0, b.jsx)("div", {
                              className: "uc-home__mobile-links",
                              children: a.items.map((a) =>
                                (0, b.jsxs)(
                                  c.default,
                                  {
                                    className: "uc-home__mobile-link",
                                    href: a.href,
                                    children: [
                                      (0, b.jsx)("span", { children: a.label }),
                                      (0, b.jsx)("small", {
                                        children:
                                          a.description ??
                                          (a.placeholder
                                            ? "Destination not yet provided."
                                            : ""),
                                      }),
                                    ],
                                  },
                                  a.id,
                                ),
                              ),
                            }),
                          ],
                        },
                        a.id,
                      ),
                    ),
                  }),
                ],
              }),
              (0, b.jsxs)("div", {
                className: "uc-home__actions",
                children: [
                  (0, b.jsx)(c.default, {
                    href: "/research",
                    className: "uc-home__link-btn",
                    children: "Research",
                  }),
                  (0, b.jsx)(c.default, {
                    href: e,
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
    function m() {
      return (0, b.jsx)("section", {
        className: "uc-home__hero",
        children: (0, b.jsx)("div", {
          className: "uc-home__container uc-home__hero-inner",
          children: (0, b.jsxs)("div", {
            className: "uc-home__hero-stack",
            children: [
              (0, b.jsx)("h1", { children: "What can I help with?" }),
              (0, b.jsx)(g, {}),
            ],
          }),
        }),
      });
    }
    function n() {
      return (0, b.jsxs)("div", {
        className: "uc-home",
        children: [
          (0, b.jsx)(l, {}),
          (0, b.jsxs)("main", {
            children: [
              (0, b.jsx)(m, {}),
              (0, b.jsx)("section", {
                className: "uc-home__section",
                "aria-labelledby": "portal-title",
                children: (0, b.jsxs)("div", {
                  className: "uc-home__container",
                  children: [
                    (0, b.jsx)("h2", {
                      id: "portal-title",
                      children: "Portal products",
                    }),
                    (0, b.jsx)("div", {
                      className: "uc-home__portal-grid",
                      children: j.portalHomepageCards.map((a) =>
                        (0, b.jsxs)(
                          c.default,
                          {
                            className: "uc-home__portal-card",
                            href: a.href,
                            children: [
                              a.tag
                                ? (0, b.jsx)("span", {
                                    className: "uc-home__chip",
                                    children: a.tag,
                                  })
                                : null,
                              (0, b.jsx)("h3", { children: a.title }),
                              (0, b.jsx)("p", { children: a.description }),
                              (0, b.jsx)(k, { placeholder: "#" === a.href }),
                            ],
                          },
                          a.id,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              (0, b.jsx)("section", {
                className: "uc-home__section",
                "aria-labelledby": "feature-title",
                children: (0, b.jsxs)("div", {
                  className: "uc-home__container",
                  children: [
                    (0, b.jsx)("h2", {
                      id: "feature-title",
                      children: "Built for every Upcube lane",
                    }),
                    (0, b.jsx)("div", {
                      className: "uc-home__feature-grid",
                      children: h.map((a) =>
                        (0, b.jsxs)(
                          "article",
                          {
                            className: `uc-home__feature uc-home__feature--${a.tone}`,
                            children: [
                              (0, b.jsx)("h3", { children: a.title }),
                              (0, b.jsx)("p", { children: a.description }),
                              (0, b.jsx)(c.default, {
                                href: a.href,
                                children: a.cta,
                              }),
                              (0, b.jsx)(k, { placeholder: "#" === a.href }),
                            ],
                          },
                          a.title,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              (0, b.jsx)("section", {
                className: "uc-home__section",
                "aria-labelledby": "updates-title",
                children: (0, b.jsxs)("div", {
                  className: "uc-home__container",
                  children: [
                    (0, b.jsxs)("div", {
                      className: "uc-home__section-head-row",
                      children: [
                        (0, b.jsx)("h2", {
                          id: "updates-title",
                          children: "Recent developments",
                        }),
                        (0, b.jsx)(c.default, {
                          href: "/news",
                          className: "uc-home__news-link",
                          children: "View all news",
                        }),
                      ],
                    }),
                    (0, b.jsx)("div", {
                      className: "uc-home__story-grid",
                      children: i.map((a) =>
                        (0, b.jsxs)(
                          c.default,
                          {
                            className: "uc-home__story",
                            href: a.href,
                            children: [
                              (0, b.jsx)("h3", { children: a.title }),
                              (0, b.jsx)("p", { children: a.description }),
                              (0, b.jsx)(k, { placeholder: "#" === a.href }),
                            ],
                          },
                          a.title,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              (0, b.jsx)("section", {
                className: "uc-home__section uc-home__section--cta",
                "aria-labelledby": "cta-title",
                children: (0, b.jsxs)("div", {
                  className: "uc-home__container",
                  children: [
                    (0, b.jsx)("h2", {
                      id: "cta-title",
                      children: "Build your next system with UpcubeAI.",
                    }),
                    (0, b.jsxs)("div", {
                      className: "uc-home__cta-row",
                      children: [
                        (0, b.jsx)(c.default, {
                          href: e,
                          className: "uc-home__primary-btn",
                          children: "Start building",
                        }),
                        (0, b.jsx)(c.default, {
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
          (0, b.jsx)("footer", {
            className: "uc-home__footer",
            children: (0, b.jsxs)("div", {
              className: "uc-home__container uc-home__footer-grid",
              children: [
                (0, b.jsxs)("div", {
                  children: [
                    (0, b.jsx)("p", {
                      className: "uc-home__brand-text",
                      children: "UpcubeAI",
                    }),
                    (0, b.jsx)("p", {
                      className: "uc-home__footer-copy",
                      children:
                        "Main ecosystem portal for chat, globe, games, books, jobs, repos, and commerce.",
                    }),
                  ],
                }),
                j.portalFooterGroups.map((a) =>
                  (0, b.jsxs)(
                    "nav",
                    {
                      "aria-label": `${a.title} links`,
                      children: [
                        (0, b.jsx)("h3", { children: a.title }),
                        a.links.map((a) =>
                          (0, b.jsxs)(
                            c.default,
                            {
                              href: a.href,
                              children: [
                                (0, b.jsx)("span", { children: a.label }),
                                a.placeholder
                                  ? (0, b.jsx)("small", {
                                      children: "Placeholder",
                                    })
                                  : null,
                              ],
                            },
                            a.id,
                          ),
                        ),
                      ],
                    },
                    a.id,
                  ),
                ),
              ],
            }),
          }),
        ],
      });
    }
    a.s(["default", () => n], 93415);
  },
];

//# sourceMappingURL=components_upcube-home_home-page_tsx_6edaf13e._.js.map
