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
  54287,
  (a) => {
    "use strict";
    var b = a.i(63874),
      c = a.i(53338),
      d = a.i(31065),
      e = a.i(72569),
      f = a.i(20134),
      g = a.i(79703),
      h = a.i(27554);
    function i() {
      return (0, b.jsxs)(g.PortalShell, {
        className: "uc-portal-page",
        children: [
          (0, b.jsx)(f.PortalHeader, {}),
          (0, b.jsxs)("main", {
            children: [
              (0, b.jsx)("section", {
                className: "uc-section uc-section-rule",
                children: (0, b.jsxs)("div", {
                  className: "uc-shell uc-content-stack",
                  children: [
                    (0, b.jsx)(h.SectionHeading, {
                      eyebrow: "UpcubeAI product",
                      title: "UpcubeAI Chat",
                      description:
                        "A focused assistant for planning, writing, and execution across commerce and product workflows.",
                    }),
                    (0, b.jsxs)("div", {
                      className: "uc-actions",
                      children: [
                        (0, b.jsx)(c.default, {
                          href: "#chat-use-cases",
                          className: "uc-button",
                          children: "Explore use cases",
                        }),
                        (0, b.jsx)(c.default, {
                          href: "/",
                          className: "uc-nav-link",
                          children: "Return to portal home",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, b.jsx)("section", {
                className: "uc-section uc-section-rule",
                "aria-labelledby": "chat-use-cases-title",
                id: "chat-use-cases",
                children: (0, b.jsxs)("div", {
                  className: "uc-shell uc-content-stack",
                  children: [
                    (0, b.jsx)(h.SectionHeading, {
                      title: "Use-case prompt examples",
                      description:
                        "Example prompts show how the chat workspace can structure launch planning, research synthesis, and validation follow-up.",
                      className: "uc-section-heading--compact",
                    }),
                    (0, b.jsx)("div", {
                      className: "uc-grid uc-card-grid",
                      children: d.chatExamples.map((a) =>
                        (0, b.jsxs)(
                          "article",
                          {
                            className: "uc-card",
                            children: [
                              (0, b.jsx)("h3", {
                                className: "uc-card-title",
                                children: a.title,
                              }),
                              (0, b.jsx)("p", {
                                className: "uc-eyebrow",
                                children: "Prompt",
                              }),
                              (0, b.jsx)("p", {
                                className: "uc-card-copy",
                                children: a.prompt,
                              }),
                              (0, b.jsx)("p", {
                                className: "uc-eyebrow",
                                children: "Result",
                              }),
                              (0, b.jsx)("p", {
                                className: "uc-card-copy",
                                children: a.outcome,
                              }),
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
                className: "uc-section uc-section-rule",
                "aria-labelledby": "chat-capabilities-title",
                children: (0, b.jsxs)("div", {
                  className: "uc-shell uc-content-stack",
                  children: [
                    (0, b.jsx)(h.SectionHeading, {
                      title: "Core capabilities",
                      description:
                        "The current route is a static overview, but it now links cleanly into the live portal surface.",
                      className: "uc-section-heading--compact",
                    }),
                    (0, b.jsx)("div", {
                      className: "uc-grid uc-card-grid",
                      children: d.chatFeatures.map((a) =>
                        (0, b.jsxs)(
                          "article",
                          {
                            className: "uc-card",
                            children: [
                              (0, b.jsx)("h3", {
                                className: "uc-card-title",
                                children: a.title,
                              }),
                              (0, b.jsx)("p", {
                                className: "uc-card-copy",
                                children: a.description,
                              }),
                            ],
                          },
                          a.id,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
            ],
          }),
          (0, b.jsx)(e.PortalFooter, {}),
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
          title: "UpcubeAI Chat",
          description: "UpcubeAI Chat product overview page.",
        },
      ],
      54287,
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ec2b5958._.js.map
