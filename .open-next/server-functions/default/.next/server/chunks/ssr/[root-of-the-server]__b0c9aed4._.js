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
  27554,
  (a) => {
    "use strict";
    var b = a.i(63874);
    function c({
      eyebrow: a,
      title: c,
      description: d,
      actions: e,
      className: f,
    }) {
      return (0, b.jsxs)("header", {
        className: ["uc-section-heading", f].filter(Boolean).join(" "),
        children: [
          a ? (0, b.jsx)("p", { className: "uc-eyebrow", children: a }) : null,
          (0, b.jsx)("h2", { className: "uc-section-title", children: c }),
          d
            ? (0, b.jsx)("p", {
                className: "uc-section-description",
                children: d,
              })
            : null,
          e,
        ],
      });
    }
    a.s(["SectionHeading", () => c]);
  },
  61339,
  (a) => {
    "use strict";
    var b = a.i(63874),
      c = a.i(53338),
      d = a.i(72569),
      e = a.i(20134),
      f = a.i(79703),
      g = a.i(27554);
    function h({
      eyebrow: a,
      title: h,
      description: i,
      sections: j,
      theme: k,
      draftNotice: l,
      ctas: m,
    }) {
      return (0, b.jsxs)(f.PortalShell, {
        theme: k,
        children: [
          (0, b.jsx)(e.PortalHeader, {}),
          (0, b.jsxs)("main", {
            className: "uc-main",
            children: [
              (0, b.jsx)("section", {
                className: "uc-section uc-hero-section",
                children: (0, b.jsx)("div", {
                  className: "uc-shell uc-hero-grid",
                  children: (0, b.jsxs)("div", {
                    className: "uc-hero-copy",
                    children: [
                      (0, b.jsx)("p", { className: "uc-eyebrow", children: a }),
                      (0, b.jsx)("h1", {
                        className: "uc-hero-title",
                        children: h,
                      }),
                      (0, b.jsx)("p", {
                        className: "uc-hero-lead",
                        children: i,
                      }),
                      l
                        ? (0, b.jsx)("p", {
                            className: "uc-draft-notice",
                            children: l,
                          })
                        : null,
                    ],
                  }),
                }),
              }),
              j.map((a) =>
                (0, b.jsx)(
                  "section",
                  {
                    className: "uc-section uc-section-rule",
                    id: a.id,
                    children: (0, b.jsxs)("div", {
                      className: "uc-shell",
                      children: [
                        (0, b.jsx)(g.SectionHeading, { title: a.title }),
                        (0, b.jsxs)("div", {
                          className: "uc-text-stack",
                          children: [
                            a.paragraphs.map((a) =>
                              (0, b.jsx)(
                                "p",
                                { className: "uc-card-copy", children: a },
                                a,
                              ),
                            ),
                            a.bullets
                              ? (0, b.jsx)("ul", {
                                  className: "uc-text-list",
                                  children: a.bullets.map((a) =>
                                    (0, b.jsx)(
                                      "li",
                                      {
                                        className: "uc-card-copy",
                                        children: a,
                                      },
                                      a,
                                    ),
                                  ),
                                })
                              : null,
                          ],
                        }),
                      ],
                    }),
                  },
                  a.id,
                ),
              ),
              m?.length
                ? (0, b.jsx)("section", {
                    className: "uc-section uc-section-rule",
                    children: (0, b.jsx)("div", {
                      className: "uc-shell uc-inline-actions",
                      children: m.map((a, d) =>
                        (0, b.jsx)(
                          c.default,
                          {
                            className: "uc-button",
                            "data-variant": 0 === d ? "solid" : void 0,
                            href: a.href,
                            children: a.label,
                          },
                          a.href,
                        ),
                      ),
                    }),
                  })
                : null,
            ],
          }),
          (0, b.jsx)(d.PortalFooter, {}),
        ],
      });
    }
    a.s(["TextPage", () => h]);
  },
  23473,
  (a) => {
    "use strict";
    var b = a.i(63874),
      c = a.i(31065),
      d = a.i(61339);
    function e() {
      return (0, b.jsx)(d.TextPage, {
        eyebrow: "How UpcubeAI works",
        title: "Intent, response, review, and action",
        description:
          "A high-level product workflow description based on current portal architecture and route behavior.",
        sections: c.howItWorksSections,
        ctas: [
          { label: "Open principles", href: "/principles" },
          { label: "Open trust", href: "/trust" },
        ],
      });
    }
    function f() {
      return (0, b.jsx)(e, {});
    }
    a.s(
      [
        "default",
        () => f,
        "metadata",
        0,
        {
          title: "How It Works | UpcubeAI",
          description:
            "High-level workflow model for current UpcubeAI portal behavior.",
        },
      ],
      23473,
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b0c9aed4._.js.map
