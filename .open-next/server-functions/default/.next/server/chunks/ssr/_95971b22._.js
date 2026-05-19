module.exports = [
  17568,
  65534,
  76681,
  1540,
  (a) => {
    "use strict";
    var b = a.i(63895),
      c = a.i(37067),
      d = a.i(60425);
    function e() {
      return (0, b.jsx)("footer", {
        className: "uc-footer",
        children: (0, b.jsxs)("div", {
          className: "uc-shell uc-footer-grid",
          children: [
            (0, b.jsxs)("div", {
              children: [
                (0, b.jsxs)("div", {
                  className: "uc-footer-brand-row",
                  children: [
                    (0, b.jsx)("img", {
                      src: "/brand/logo-mark.png",
                      width: 28,
                      height: 28,
                      alt: "UpcubeAI",
                      className: "uc-footer-brand-mark",
                    }),
                    (0, b.jsx)("p", {
                      className: "uc-footer-brand-text",
                      children: "UpcubeAI",
                    }),
                  ],
                }),
                (0, b.jsx)("p", {
                  className: "uc-footer-note",
                  children:
                    "Shared portal foundation. Route URLs remain placeholders where not yet implemented.",
                }),
              ],
            }),
            (0, b.jsx)("div", {
              className: "uc-grid uc-card-grid",
              children: d.portalFooterGroups.map((a) =>
                (0, b.jsxs)(
                  "section",
                  {
                    "aria-label": a.title,
                    children: [
                      (0, b.jsx)("p", {
                        className: "uc-eyebrow",
                        children: a.title,
                      }),
                      (0, b.jsx)("ul", {
                        children: a.links.map((a) =>
                          (0, b.jsx)(
                            "li",
                            {
                              children: (0, b.jsxs)(c.default, {
                                className: "uc-nav-link",
                                "data-placeholder": a.placeholder
                                  ? "true"
                                  : void 0,
                                href: a.href,
                                children: [
                                  a.label,
                                  a.placeholder
                                    ? (0, b.jsx)("span", {
                                        className: "uc-nav-note",
                                        "aria-hidden": "true",
                                        children: "Placeholder",
                                      })
                                    : null,
                                ],
                              }),
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
      });
    }
    function f() {
      return (0, b.jsx)("header", {
        className: "uc-header",
        children: (0, b.jsxs)("div", {
          className: "uc-shell uc-header-inner",
          children: [
            (0, b.jsx)(c.default, {
              href: "/",
              className: "uc-brand",
              "aria-label": "UpcubeAI home",
              children: (0, b.jsx)("img", {
                src: "/brand/logo-mark.png",
                width: 36,
                height: 36,
                alt: "UpcubeAI",
                className: "uc-brand-mark",
              }),
            }),
            (0, b.jsx)("nav", {
              className: "uc-header-nav",
              "aria-label": "Portal primary",
              children: (0, b.jsx)("ul", {
                className: "uc-nav-list",
                children: d.portalPrimaryNav.map((a) =>
                  (0, b.jsx)(
                    "li",
                    {
                      children: (0, b.jsxs)(c.default, {
                        className: "uc-nav-link",
                        "data-placeholder": a.placeholder ? "true" : void 0,
                        href: a.href,
                        children: [
                          a.label,
                          a.placeholder
                            ? (0, b.jsx)("span", {
                                className: "uc-nav-note",
                                "aria-hidden": "true",
                                children: "Soon",
                              })
                            : null,
                        ],
                      }),
                    },
                    a.id,
                  ),
                ),
              }),
            }),
            (0, b.jsx)("div", {
              className: "uc-header-actions",
              children: d.portalActionNav.map((a, d) =>
                (0, b.jsx)(
                  c.default,
                  {
                    className: "uc-button",
                    "data-variant": 1 === d ? "solid" : void 0,
                    href: a.href,
                    children: a.label,
                  },
                  a.id,
                ),
              ),
            }),
          ],
        }),
      });
    }
    function g({ children: a, theme: c = "dark", className: d }) {
      return (0, b.jsx)("div", {
        className: ["uc-page", d].filter(Boolean).join(" "),
        "data-theme": "dark" === c ? void 0 : c,
        children: a,
      });
    }
    function h({
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
    a.s(["PortalFooter", () => e], 17568),
      a.s(["PortalHeader", () => f], 65534),
      a.s(["PortalShell", () => g], 76681),
      a.s(["SectionHeading", () => h], 1540);
  },
  19380,
  (a) => {
    "use strict";
    var b = a.i(63895),
      c = a.i(56778),
      d = a.i(17568),
      e = a.i(65534),
      f = a.i(76681),
      g = a.i(1540);
    let h = [
        { id: "offerings", label: "Offerings" },
        { id: "workflow", label: "Build workflow" },
        { id: "governance", label: "Security and governance" },
      ],
      i = {
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
    function j() {
      let [a, j] = (0, c.useState)("offerings"),
        k = i[a];
      return (0, b.jsxs)(f.PortalShell, {
        className: "uc-portal-page",
        children: [
          (0, b.jsx)(e.PortalHeader, {}),
          (0, b.jsxs)("main", {
            className: "uc-main",
            children: [
              (0, b.jsx)("section", {
                className: "uc-section uc-section-rule",
                children: (0, b.jsxs)("div", {
                  className: "uc-shell uc-content-stack",
                  children: [
                    (0, b.jsx)(g.SectionHeading, {
                      eyebrow: "Builders and Developers",
                      title: "UpcubeAI Builders",
                      description:
                        "A practical view of how builders can ship AI features with typed interfaces, evaluation gates, and operational guardrails.",
                    }),
                    (0, b.jsx)("div", {
                      className: "uc-tab-row",
                      role: "tablist",
                      "aria-label": "Builders tabs",
                      children: h.map((c) =>
                        (0, b.jsx)(
                          "button",
                          {
                            type: "button",
                            role: "tab",
                            className: "uc-tab-button",
                            "aria-selected": a === c.id,
                            "data-active": a === c.id ? "true" : void 0,
                            onClick: () => j(c.id),
                            children: c.label,
                          },
                          c.id,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              (0, b.jsx)("section", {
                className: "uc-section uc-section-rule",
                "aria-labelledby": "builders-content-title",
                children: (0, b.jsxs)("div", {
                  className: "uc-shell uc-content-stack",
                  children: [
                    (0, b.jsx)(g.SectionHeading, {
                      title:
                        "offerings" === a
                          ? "Current offering surfaces"
                          : "workflow" === a
                            ? "Implementation workflow"
                            : "Governance posture",
                      description:
                        "This route is static and local to the current repo; production rollout controls are not provided here.",
                      className: "uc-section-heading--compact",
                    }),
                    (0, b.jsx)("div", {
                      className: "uc-grid uc-card-grid",
                      children: k.map((a) =>
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
                                children: a.summary,
                              }),
                              (0, b.jsx)("ul", {
                                className: "uc-bullet-list",
                                children: a.points.map((a) =>
                                  (0, b.jsx)("li", { children: a }, a),
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
              }),
            ],
          }),
          (0, b.jsx)(d.PortalFooter, {}),
        ],
      });
    }
    a.s([], 47081), a.i(47081), a.s(["default", () => j], 19380);
  },
];

//# sourceMappingURL=_95971b22._.js.map
