module.exports = [
  72569,
  31065,
  20134,
  79703,
  (a) => {
    "use strict";
    var b = a.i(63874),
      c = a.i(53338);
    let d = "https://ethen.upcube.ai",
      e = "https://jobs.upcube.ai",
      f = [
        { id: "explore", label: "Explore", href: "/explore" },
        { id: "platform", label: "Platform", href: "/platform" },
        { id: "business", label: "Business", href: "/business" },
        { id: "capabilities", label: "Capabilities", href: "/capabilities" },
        { id: "news", label: "News", href: "/news" },
        { id: "builders", label: "Builders", href: "/builders" },
        { id: "teams", label: "Teams", href: "/teams" },
        { id: "enterprise", label: "Enterprise", href: "/enterprise" },
      ],
      g = [
        { id: "research", label: "Research", href: "/research" },
        { id: "chat", label: "Open chat", href: d },
      ];
    [...f];
    let h = [
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
            { id: "careers-footer", label: "Careers", href: e },
          ],
        },
      ],
      i = [
        {
          id: "eco-chat",
          title: "Chat",
          description:
            "Assistant workspace for planning, writing, and execution.",
          href: d,
          tag: "Live app",
        },
        {
          id: "eco-research",
          title: "Research",
          description:
            "Editorial overview for research themes and future publishing.",
          href: "/research",
          tag: "Live route",
        },
        {
          id: "eco-enterprise",
          title: "Enterprise",
          description:
            "Conservative enterprise narrative tied to current repo scope.",
          href: "/enterprise",
          tag: "Live route",
        },
      ],
      j = [
        {
          slug: "platform-iteration-placeholder",
          category: "Update",
          title: "Platform iteration placeholder",
          summary:
            "A sample update route used to keep the portal article template wired while future editorial content is still placeholder-only.",
          author: "UpcubeAI team",
          publishedLabel: "Placeholder date",
          readTime: "3 min",
          heroNote:
            "Replace this article only when reviewed editorial copy is available in the repo.",
          sections: [
            {
              id: "status",
              heading: "Current status",
              body: [
                "This article exists to keep the updates template functional inside the shared portal system.",
                "It should not be treated as a published news or policy artifact.",
              ],
            },
            {
              id: "next",
              heading: "Next step",
              body: [
                "Future updates can reuse this route shape once titles, summaries, and reviewed body copy are available.",
              ],
            },
          ],
          related: [
            {
              id: "related-research",
              label: "Research overview",
              href: "/research",
            },
            {
              id: "related-enterprise",
              label: "Enterprise page",
              href: "/enterprise",
            },
          ],
        },
      ];
    function k(a) {
      return j.find((b) => b.slug === a);
    }
    let l =
        "Draft placeholder: reviewed legal copy, legal entity details, effective dates, and policy contacts were not provided in this repo.",
      m = [
        {
          id: "draft",
          title: "Draft privacy policy status",
          paragraphs: [
            l,
            "This page provides structure only and should not be interpreted as final legal policy text.",
          ],
        },
        {
          id: "categories",
          title: "Policy sections pending source text",
          bullets: [
            "Data collection categories and purposes.",
            "Retention and deletion handling.",
            "Data subject requests and contact process.",
            "Third-party processors and transfer disclosures.",
          ],
          paragraphs: [
            "None of these sections are finalized in the current repo.",
          ],
        },
      ],
      n = [
        {
          id: "draft",
          title: "Draft terms status",
          paragraphs: [
            l,
            "This page is a non-binding placeholder route for future reviewed terms-of-service content.",
          ],
        },
        {
          id: "topics",
          title: "Terms topics pending legal review",
          bullets: [
            "Eligibility and acceptable use.",
            "Service availability and modifications.",
            "Liability limits and dispute process.",
            "Termination and account controls.",
          ],
          paragraphs: [
            "Final wording and jurisdictional terms are not provided in this repository.",
          ],
        },
      ];
    function o() {
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
              children: h.map((a) =>
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
    function p() {
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
                children: f.map((a) =>
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
              children: g.map((a, d) =>
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
    function q({ children: a, theme: c = "dark", className: d }) {
      return (0, b.jsx)("div", {
        className: ["uc-page", d].filter(Boolean).join(" "),
        "data-theme": "dark" === c ? void 0 : c,
        children: a,
      });
    }
    a.s(
      [
        "UPCUBE_BOOKS_URL",
        0,
        "https://books.upcube.ai",
        "UPCUBE_CHAT_URL",
        0,
        d,
        "UPCUBE_CLOUD_URL",
        0,
        "https://cloud.upcube.ai",
        "UPCUBE_GAMES_URL",
        0,
        "https://games.upcube.ai",
        "UPCUBE_JOBS_URL",
        0,
        e,
        "UPCUBE_PLANET_URL",
        0,
        "https://planet.upcube.ai",
        "careersBenefitsPlaceholders",
        0,
        [
          {
            id: "benefits-status",
            label: "Benefits",
            detail: "Not provided. Replace only with reviewed hiring material.",
          },
          {
            id: "location-status",
            label: "Location",
            detail:
              "Not provided. Work mode, geography, and visa details remain placeholders.",
          },
        ],
        "careersCulture",
        0,
        [
          {
            id: "culture-product",
            label: "Product-minded",
            detail:
              "Work connects design, implementation, and validation rather than separating them artificially.",
          },
          {
            id: "culture-review",
            label: "Review oriented",
            detail:
              "Changes are expected to stay testable and grounded in the live repo.",
          },
          {
            id: "culture-honesty",
            label: "Honest reporting",
            detail:
              "Unknown facts stay unknown until they are actually provided.",
          },
        ],
        "careersHero",
        0,
        {
          eyebrow: "Careers",
          title:
            "Careers content remains placeholder-only until hiring details are provided.",
          description:
            "This route is structured for future use but intentionally avoids role, benefit, location, and compensation claims not present in the repo.",
        },
        "careersOpenRoles",
        0,
        [
          {
            id: "role-placeholder-1",
            team: "Future team",
            title: "Role placeholder",
            summary:
              "Use this card structure when real open roles are approved for publication.",
            mode: "Hiring details not provided.",
          },
          {
            id: "role-placeholder-2",
            team: "Future team",
            title: "Another placeholder",
            summary: "Static route only. This is not a live jobs board.",
            mode: "Location and employment type not provided.",
          },
        ],
        "careersValues",
        0,
        [
          {
            id: "careers-rigor",
            label: "Rigor",
            detail:
              "Prefer factual implementation details over aspirational claims.",
          },
          {
            id: "careers-clarity",
            label: "Clarity",
            detail: "Communicate boundaries, scope, and evidence directly.",
          },
          {
            id: "careers-speed",
            label: "Pragmatic speed",
            detail:
              "Ship focused improvements without widening scope unnecessarily.",
          },
        ],
        "chatExamples",
        0,
        [
          {
            id: "launch-plan",
            title: "Launch planning",
            prompt:
              "Draft a launch plan with milestone checkpoints and validation steps.",
            outcome:
              "Produces a structured rollout plan with review gates and follow-ups.",
          },
          {
            id: "research-synthesis",
            title: "Research synthesis",
            prompt:
              "Summarize source notes into decisions, open questions, and next experiments.",
            outcome:
              "Turns fragmented notes into a concise synthesis for product and research teams.",
          },
          {
            id: "ops-review",
            title: "Ops review",
            prompt:
              "Review workflow risks, blockers, and dependencies before a release cut.",
            outcome:
              "Highlights unresolved risks without overstating readiness or coverage.",
          },
        ],
        "chatFeatures",
        0,
        [
          {
            id: "structured-work",
            title: "Structured work sessions",
            description:
              "Keep prompts, answers, and next actions in one workspace for repeatable execution.",
          },
          {
            id: "cross-team-context",
            title: "Cross-team context",
            description:
              "Support product, research, and commerce workflows with one shared assistant surface.",
          },
          {
            id: "reviewable-output",
            title: "Reviewable output",
            description:
              "Present plans and summaries in a format that can be reviewed before decisions are made.",
          },
        ],
        "companyEcosystem",
        0,
        i,
        "companyMission",
        0,
        {
          eyebrow: "Company",
          title: "UpcubeAI is building a connected product ecosystem.",
          description:
            "This company page stays high level and focuses on product direction because broader corporate details were not provided in the repo.",
        },
        "companyVisionBullets",
        0,
        [
          {
            id: "vision-products",
            label: "Connected products",
            detail:
              "One portal for chat, research, enterprise, and commerce-adjacent workflows.",
          },
          {
            id: "vision-execution",
            label: "Execution oriented",
            detail:
              "Product narratives should stay close to what the repo and routes actually implement.",
          },
          {
            id: "vision-trust",
            label: "Trust by restraint",
            detail:
              "Public-facing language should avoid legal, security, or compliance commitments without proof.",
          },
        ],
        "companyWorkAreas",
        0,
        [
          {
            id: "work-ai",
            label: "AI workspaces",
            detail: "Assistant-led planning, synthesis, and execution support.",
          },
          {
            id: "work-commerce",
            label: "Commerce operations",
            detail:
              "Merchandising and launch workflows that complement the existing storefront.",
          },
          {
            id: "work-research",
            label: "Research and publishing",
            detail:
              "Research overviews and update templates for product-facing knowledge work.",
          },
        ],
        "contactSections",
        0,
        [
          {
            id: "status",
            title: "Contact status",
            paragraphs: [
              "A verified public support inbox, legal notice address, and media contact channel are not provided in this repo.",
              "Use this page as a placeholder contact surface until approved contact details are available.",
            ],
          },
          {
            id: "requests",
            title: "Request categories",
            bullets: [
              "Enterprise and partnership inquiries.",
              "Product feedback and issue reports.",
              "Trust, safety, and policy questions.",
            ],
            paragraphs: [
              "Routing and response SLAs are not provided in current source material.",
            ],
          },
        ],
        "faqItems",
        0,
        [
          {
            question: "What does this FAQ cover today?",
            answer:
              "It covers the current portal implementation, route intent, and areas where legal, compliance, or enterprise details were not provided in the repo.",
          },
          {
            question: "Does the repo provide enterprise compliance claims?",
            answer:
              "No. Certifications, security standards, contractual terms, and admin-control claims were not provided, so this implementation leaves them out.",
          },
          {
            question: "Is there a final privacy policy in this repo?",
            answer:
              "No. The privacy page is a placeholder structure only and should not be treated as binding legal text.",
          },
          {
            question: "Why are some links and promises intentionally limited?",
            answer:
              "The implementation follows a no-guessing rule: unsupported claims, unconfirmed links, and future capabilities remain clearly marked instead of being implied.",
          },
          {
            question: "How do these routes interact with the storefront?",
            answer:
              "They are static App Router pages that sit alongside the commerce storefront. Product, catalog, cart, and checkout behavior remain untouched.",
          },
        ],
        "getPortalArticleBySlug",
        () => k,
        "howItWorksSections",
        0,
        [
          {
            id: "flow",
            title: "Workflow loop",
            paragraphs: [
              "A typical UpcubeAI workflow starts from intent capture, continues through structured response generation, and ends with operator review and action.",
            ],
            bullets: [
              "Interpret task intent and required constraints.",
              "Generate structured output with traceable reasoning context.",
              "Route to review, follow-up, or linked portal destinations.",
            ],
          },
          {
            id: "trust",
            title: "Trust boundary",
            paragraphs: [
              "Where certainty is limited, pages and responses should explicitly state what is not provided rather than imply unresolved facts.",
            ],
          },
          {
            id: "delivery",
            title: "Delivery stance",
            paragraphs: [
              "The current implementation is static-route oriented and optimized for clear product communication around real repository state.",
            ],
          },
        ],
        "legalDraftNotice",
        0,
        l,
        "portalActionNav",
        0,
        g,
        "portalArticles",
        0,
        j,
        "portalFooterGroups",
        0,
        h,
        "portalNewsItems",
        0,
        [
          {
            id: "news-portal-refresh",
            title: "UpcubeAI portal visual system refresh",
            summary:
              "Homepage and inner-shell updates focused on consistent dark styling, navigation clarity, and cleaner interaction patterns.",
            statusLabel: "Recent update",
            href: "/news",
          },
          {
            id: "news-globe-updates",
            title: "Upcube Globe spatial interface updates",
            summary:
              "Ongoing interface adjustments to improve map context, navigation flow, and discovery surfaces in the globe experience.",
            statusLabel: "Recent update",
            href: "/news",
          },
          {
            id: "news-games-updates",
            title: "Upcube Games directory improvements",
            summary:
              "Directory structure and browsing updates for faster access to featured games and launch highlights.",
            statusLabel: "Recent update",
            href: "https://games.upcube.ai",
          },
          {
            id: "news-books-updates",
            title: "Upcube Books storefront updates",
            summary:
              "Storefront refinements for reading-focused discovery and better surface consistency across book collections.",
            statusLabel: "Recent update",
            href: "https://books.upcube.ai",
          },
          {
            id: "news-cloud-update",
            title: "Upcube Cloud developer tools update",
            summary:
              "Developer tool and cloud workspace improvements centered on clearer entry points and workflow readiness.",
            statusLabel: "Recent update",
            href: "https://cloud.upcube.ai",
          },
          {
            id: "news-jobs-planning",
            title: "Upcube Jobs workflow planning",
            summary:
              "Planning pass for hiring workflow surfacing and clearer pathway alignment to the jobs destination.",
            statusLabel: "Recent update",
            href: "https://jobs.upcube.ai",
          },
        ],
        "portalPrimaryNav",
        0,
        f,
        "principlesSections",
        0,
        [
          {
            id: "mission",
            title: "Mission",
            paragraphs: [
              "UpcubeAI builds practical intelligence tools for planning, analysis, and execution while keeping human judgment central.",
              "This principles page is directional and product-focused, not a legal commitment document.",
            ],
          },
          {
            id: "benefits",
            title: "Broadly useful outcomes",
            paragraphs: [
              "We prioritize workflows that improve clarity, speed, and operator control across teams.",
            ],
            bullets: [
              "Prefer inspectable outputs over opaque automation.",
              "Favor grounded, reviewable responses for high-stakes tasks.",
              "Keep user trust ahead of short-term growth claims.",
            ],
          },
          {
            id: "safety",
            title: "Safety and reliability",
            paragraphs: [
              "Risk-sensitive capabilities should ship with scoped permissions, review paths, and clear failure handling.",
            ],
            bullets: [
              "Introduce high-risk behaviors with explicit gating.",
              "Treat unknown facts as unknown and report limits directly.",
              "Iterate safeguards continuously as capabilities evolve.",
            ],
          },
          {
            id: "cooperation",
            title: "Interoperability and collaboration",
            paragraphs: [
              "UpcubeAI should integrate cleanly with the systems teams already operate.",
            ],
            bullets: [
              "Use transparent contracts between product surfaces and supporting services.",
              "Support review workflows that can be audited by operators.",
              "Publish capability boundaries clearly in product copy.",
            ],
          },
        ],
        "privacyPolicySections",
        0,
        m,
        "privacySections",
        0,
        [
          {
            title: "Placeholder status",
            body: [
              "This page is a placeholder policy-style surface for UpcubeAI. Reviewed legal text, effective dates, company details, and contact channels were not provided in this repo.",
              "Until approved copy exists in source control, this page should be treated as informational structure only and not as a binding privacy policy.",
            ],
          },
          {
            title: "Data handling notes",
            body: [
              "The repo does not provide a finalized statement for what data is collected, how it is retained, or whether content is used for model training.",
              "Those topics should be filled only from reviewed legal or product documentation, not inferred from design references.",
            ],
          },
          {
            title: "Access and controls",
            body: [
              "User rights workflows, administrative controls, deletion processes, and retention schedules are not documented here.",
              "Any public commitments in these areas require confirmed operational and legal backing before publication.",
            ],
          },
        ],
        "safetyPrinciples",
        0,
        [
          {
            title: "Truthful capability framing",
            description:
              "Describe current product behavior conservatively and leave unsupported claims marked as pending or not provided.",
          },
          {
            title: "Human review where needed",
            description:
              "Position UpcubeAI as a tool for assisted work, with responsibility for domain-specific review remaining with the operating team.",
          },
          {
            title: "Continuous improvement",
            description:
              "Evaluation, feedback, and operational safeguards should evolve with the product rather than being treated as one-time guarantees.",
          },
        ],
        "safetyQualityNotes",
        0,
        [
          {
            title: "Evaluation and quality",
            description:
              "This repo does not include a public benchmark suite or formal safety report, so quality claims are limited to process-oriented language.",
          },
          {
            title: "Security and privacy",
            description:
              "Security controls, data handling rules, and retention policies require confirmed documentation before they can be represented as commitments.",
          },
          {
            title: "Product change management",
            description:
              "Trust-sensitive copy should be updated only when the underlying implementation or reviewed policy text exists in the repo.",
          },
        ],
        "termsSections",
        0,
        n,
        "trustLinks",
        0,
        [
          {
            title: "Read the FAQ",
            description:
              "Common questions about current scope, placeholders, and route intent.",
            href: "/faq",
          },
          {
            title: "Review privacy placeholder",
            description:
              "Current privacy page status and the legal text still missing from the repo.",
            href: "/privacy",
          },
          {
            title: "Enterprise overview",
            description:
              "Conservative enterprise positioning without unsupported platform guarantees.",
            href: "/enterprise",
          },
        ],
        "trustSections",
        0,
        [
          {
            id: "overview",
            title: "Trust and security overview",
            paragraphs: [
              "This page summarizes current trust posture at a high level and links to implemented safety, FAQ, and privacy routes.",
              "It does not assert certifications, compliance frameworks, or audited controls.",
            ],
          },
          {
            id: "principles",
            title: "Trust principles",
            bullets: [
              "Conservative, evidence-bound product claims.",
              "Explicit placeholder status for missing legal or policy details.",
              "Continuous review of capability and risk language.",
            ],
            paragraphs: [
              "Operational and legal commitments should be added only from approved source material.",
            ],
          },
        ],
        "visionSections",
        0,
        [
          {
            id: "direction",
            title: "Product direction",
            paragraphs: [
              "UpcubeAI is evolving into a unified work surface across assistant interactions, research synthesis, and operational decision support.",
              "The near-term vision is practical: reduce context switching and increase execution quality with reliable, inspectable workflows.",
            ],
          },
          {
            id: "model",
            title: "Operating model",
            paragraphs: [
              "The current repo positions UpcubeAI as a portal linking product surfaces such as chat, research, and trust pages.",
            ],
            bullets: [
              "Use shared design and content primitives.",
              "Keep claims tied to implemented routes and behaviors.",
              "Expand only when underlying capability and evidence are available.",
            ],
          },
          {
            id: "boundaries",
            title: "Boundaries",
            paragraphs: [
              "This vision page does not define pricing, legal terms, compliance guarantees, or contractual commitments because those facts are not provided here.",
            ],
          },
        ],
      ],
      31065,
    ),
      a.s(["PortalFooter", () => o], 72569),
      a.s(["PortalHeader", () => p], 20134),
      a.s(["PortalShell", () => q], 79703);
  },
];

//# sourceMappingURL=components_upcube-portal_portal-footer_tsx_22884f8d._.js.map
