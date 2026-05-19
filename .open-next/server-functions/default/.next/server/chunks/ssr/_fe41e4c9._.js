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
  58611,
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
        { id: "how", label: "How it works" },
        { id: "guardrails", label: "Guardrails" },
      ],
      i = {
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
                      eyebrow: "Small teams and startups",
                      title: "UpcubeAI Teams",
                      description:
                        "A lightweight operating layer for teams that need speed, structure, and clear accountability.",
                    }),
                    (0, b.jsx)("div", {
                      className: "uc-tab-row",
                      role: "tablist",
                      "aria-label": "Teams tabs",
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
                "aria-labelledby": "teams-content-title",
                children: (0, b.jsxs)("div", {
                  className: "uc-shell uc-content-stack",
                  children: [
                    (0, b.jsx)(g.SectionHeading, {
                      title:
                        "offerings" === a
                          ? "Team-facing offerings"
                          : "how" === a
                            ? "Operating model"
                            : "Guardrail model",
                      description:
                        "This route intentionally stays static and does not claim backend automation or external workflow orchestration.",
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
    a.s([], 63768), a.i(63768), a.s(["default", () => j], 58611);
  },
];

//# sourceMappingURL=_fe41e4c9._.js.map
