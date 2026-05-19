module.exports = [
  93695,
  (a, b, c) => {
    b.exports = a.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
      require("next/dist/shared/lib/no-fallback-error.external.js"),
    );
  },
  39236,
  (a) => {
    a.n(a.i(86895));
  },
  70864,
  (a) => {
    a.n(a.i(33290));
  },
  65897,
  (a) => {
    a.n(a.i(96647));
  },
  82532,
  (a) => {
    a.n(a.i(98340));
  },
  77201,
  (a) => {
    a.n(a.i(96351));
  },
  74608,
  (a) => {
    a.n(a.i(94166));
  },
  97903,
  (a) => {
    a.n(a.i(5722));
  },
  88456,
  (a) => {
    "use strict";
    var b = a.i(63874);
    a.i(98347);
    var c = a.i(59120),
      d = a.i(53338),
      e = a.i(72569),
      f = a.i(20134),
      g = a.i(79703);
    function h({ article: a }) {
      return (0, b.jsxs)(g.PortalShell, {
        children: [
          (0, b.jsx)(f.PortalHeader, {}),
          (0, b.jsx)("main", {
            children: (0, b.jsxs)("article", {
              className: "uc-section uc-article",
              children: [
                (0, b.jsxs)("div", {
                  className: "uc-shell uc-article-hero",
                  children: [
                    (0, b.jsx)("p", {
                      className: "uc-eyebrow",
                      children: a.category,
                    }),
                    (0, b.jsx)("h1", {
                      className: "uc-article-title",
                      children: a.title,
                    }),
                    (0, b.jsx)("p", {
                      className: "uc-section-description",
                      children: a.summary,
                    }),
                    (0, b.jsxs)("dl", {
                      className: "uc-article-meta",
                      "aria-label": "Article metadata",
                      children: [
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("dt", { children: "Author" }),
                            (0, b.jsx)("dd", { children: a.author }),
                          ],
                        }),
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("dt", { children: "Published" }),
                            (0, b.jsx)("dd", { children: a.publishedLabel }),
                          ],
                        }),
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("dt", { children: "Reading time" }),
                            (0, b.jsx)("dd", { children: a.readTime }),
                          ],
                        }),
                      ],
                    }),
                    (0, b.jsx)("p", {
                      className: "uc-article-note",
                      children: a.heroNote,
                    }),
                  ],
                }),
                (0, b.jsx)("div", {
                  className: "uc-shell uc-article-body",
                  children: a.sections.map((a) =>
                    (0, b.jsxs)(
                      "section",
                      {
                        children: [
                          (0, b.jsx)("h2", {
                            className: "uc-section-title",
                            children: a.heading,
                          }),
                          a.body.map((c, d) =>
                            (0, b.jsx)(
                              "p",
                              { className: "uc-card-copy", children: c },
                              `${a.id}-${d}`,
                            ),
                          ),
                        ],
                      },
                      a.id,
                    ),
                  ),
                }),
                (0, b.jsxs)("div", {
                  className: "uc-shell uc-section-rule uc-article-links",
                  children: [
                    (0, b.jsx)("p", {
                      className: "uc-eyebrow",
                      children: "Related",
                    }),
                    (0, b.jsx)("ul", {
                      children: a.related.map((a) =>
                        (0, b.jsx)(
                          "li",
                          {
                            children: (0, b.jsx)(d.default, {
                              href: a.href,
                              className: "uc-nav-link",
                              children: a.label,
                            }),
                          },
                          a.id,
                        ),
                      ),
                    }),
                    (0, b.jsx)("p", {
                      children: (0, b.jsx)(d.default, {
                        href: "/updates/platform-iteration-placeholder",
                        className: "uc-nav-link",
                        children: "Back to updates template",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, b.jsx)(e.PortalFooter, {}),
        ],
      });
    }
    var i = a.i(31065);
    function j() {
      return i.portalArticles.map((a) => ({ slug: a.slug }));
    }
    async function k(a) {
      let b = await a.params,
        c = (0, i.getPortalArticleBySlug)(b.slug);
      return c
        ? { title: `${c.title} | UpcubeAI`, description: c.summary }
        : { title: "Update not found | UpcubeAI" };
    }
    async function l(a) {
      let d = await a.params,
        e = (0, i.getPortalArticleBySlug)(d.slug);
      return e || (0, c.notFound)(), (0, b.jsx)(h, { article: e });
    }
    a.s(
      [
        "default",
        () => l,
        "generateMetadata",
        () => k,
        "generateStaticParams",
        () => j,
      ],
      88456,
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0064b9e5._.js.map
