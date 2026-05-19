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
  18294,
  (a) => {
    "use strict";
    var b = a.i(63874),
      c = a.i(53338),
      d = a.i(72569),
      e = a.i(20134),
      f = a.i(79703),
      g = a.i(27554),
      h = a.i(31065);
    function i() {
      return (0, b.jsxs)(f.PortalShell, {
        children: [
          (0, b.jsx)(e.PortalHeader, {}),
          (0, b.jsxs)("main", {
            className: "uc-main",
            children: [
              (0, b.jsx)("section", {
                className: "uc-section uc-hero-section",
                children: (0, b.jsxs)("div", {
                  className: "uc-shell uc-hero-grid",
                  children: [
                    (0, b.jsxs)("div", {
                      className: "uc-hero-copy",
                      children: [
                        (0, b.jsx)("p", {
                          className: "uc-eyebrow",
                          children: "Privacy placeholder",
                        }),
                        (0, b.jsx)("h1", {
                          className: "uc-hero-title",
                          children:
                            "A policy-shaped page without invented legal commitments.",
                        }),
                        (0, b.jsx)("p", {
                          className: "uc-hero-lead",
                          children:
                            "Reviewed privacy text, dates, contact channels, and legal entity details were not provided in this repo. This route exists so the portal can link to a truthful placeholder instead of implying a finalized policy.",
                        }),
                      ],
                    }),
                    (0, b.jsxs)("aside", {
                      className: "uc-note-panel",
                      "aria-label": "Privacy placeholder status",
                      children: [
                        (0, b.jsx)("p", {
                          className: "uc-eyebrow",
                          children: "Not a binding policy",
                        }),
                        (0, b.jsx)("p", {
                          children:
                            "Replace this content only when reviewed legal copy and operational details are checked into the repo.",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, b.jsx)("section", {
                className: "uc-section uc-section-rule",
                children: (0, b.jsxs)("div", {
                  className: "uc-shell",
                  children: [
                    (0, b.jsx)(g.SectionHeading, {
                      eyebrow: "Current structure",
                      title:
                        "Sections prepared for future reviewed legal copy.",
                      description:
                        "The structure is intentionally simple so legal text can replace it later without reworking the shared portal shell.",
                    }),
                    (0, b.jsx)("div", {
                      className: "uc-grid uc-privacy-grid",
                      children: h.privacySections.map((a) =>
                        (0, b.jsxs)(
                          "article",
                          {
                            className: "uc-feature-card",
                            children: [
                              (0, b.jsx)("h2", {
                                className: "uc-card-title",
                                children: a.title,
                              }),
                              a.body.map((a) =>
                                (0, b.jsx)("p", { children: a }, a),
                              ),
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
                className: "uc-section uc-section-rule",
                children: (0, b.jsxs)("div", {
                  className: "uc-shell uc-cta-band",
                  children: [
                    (0, b.jsxs)("div", {
                      children: [
                        (0, b.jsx)("p", {
                          className: "uc-eyebrow",
                          children: "Related context",
                        }),
                        (0, b.jsx)("h2", {
                          className: "uc-section-title",
                          children:
                            "See the FAQ and safety pages for the current implementation boundaries.",
                        }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      className: "uc-inline-actions",
                      children: [
                        (0, b.jsx)(c.default, {
                          className: "uc-button",
                          "data-variant": "solid",
                          href: "/faq",
                          children: "View FAQ",
                        }),
                        (0, b.jsx)(c.default, {
                          className: "uc-button",
                          href: "/safety",
                          children: "View Safety",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          (0, b.jsx)(d.PortalFooter, {}),
        ],
      });
    }
    function j() {
      return (0, b.jsx)(i, {});
    }
    a.s(
      [
        "default",
        () => j,
        "metadata",
        0,
        {
          title: "UpcubeAI Privacy",
          description:
            "Placeholder privacy page for UpcubeAI pending reviewed legal copy and confirmed operational details.",
        },
      ],
      18294,
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__35a36ef4._.js.map
