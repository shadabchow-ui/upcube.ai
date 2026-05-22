import {
  PortalTextSection,
  PortalTheme,
  legalDraftNotice,
  securitySections,
  statusSections,
  upcubeCompanyIdentity,
} from "lib/upcube-portal/content";
import {
  UPCUBE_CHAT_URL,
  UPCUBE_JOBS_URL,
} from "lib/upcube-universal/product-links";

export type FoundationPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  sections: PortalTextSection[];
  draftNotice?: string;
  ctas?: { label: string; href: string; external?: boolean }[];
  theme?: PortalTheme;
};

const policyIndexNotice =
  "Formal legal policy text, effective dates, legal entity details, and reviewed notice channels were not provided in this repo.";

const foundationStatusNotice =
  "A legally registered foundation, governing board, grant program, and jurisdiction details were not provided in this repo.";

const careersStatusNotice =
  "Open role inventories, compensation ranges, benefits, locations, and detailed hiring steps were not provided in this repo.";

export const aboutPageContent: FoundationPageContent = {
  eyebrow: "Company Overview",
  title: "Building the next generation of intelligent technology.",
  description:
    "Upcube is an AI technology company building a connected family of premium products across AI, commerce, discovery, cloud infrastructure, entertainment, and computing.",
  sections: [
    {
      id: "platform",
      title: "What the company is building",
      paragraphs: [
        upcubeCompanyIdentity.mission,
        "Ethen, Earth, Upcube Commerce, Cloud, Books, Games, Jobs, and the computing roadmap are positioned as connected product lines inside one broader company story.",
      ],
    },
    {
      id: "approach",
      title: "How the work should feel",
      paragraphs: [
        "The product language favors clarity, precision, and continuity across the ecosystem.",
      ],
      bullets: [
        "Useful intelligence over decorative complexity.",
        "Premium product craft across every surface.",
        "Connected systems instead of isolated apps.",
      ],
    },
    {
      id: "public-posture",
      title: "What stays deliberately restrained",
      paragraphs: [
        "Formal company history, offices, legal registrations, partnerships, and other corporate facts were not provided in the repo, so this page keeps its claims focused on product identity and direction.",
      ],
    },
  ],
  ctas: [
    { label: "Try Ethen", href: UPCUBE_CHAT_URL, external: true },
    { label: "Research overview", href: "/research" },
  ],
};

export const charterPageContent: FoundationPageContent = {
  eyebrow: "Product Charter",
  title:
    "Principles for building the next generation of intelligent technology.",
  description:
    "The charter is short on purpose. It defines product principles and public posture, not legal obligations or governance filings.",
  sections: [
    {
      id: "useful-intelligence",
      title: "Useful intelligence",
      paragraphs: [
        "Products should make intelligence easier to use for real work, not bury it under ceremony.",
      ],
      bullets: [
        "Prefer clarity over inflated positioning.",
        "Prefer execution value over novelty theater.",
        "Prefer inspectable workflows over vague magic.",
      ],
    },
    {
      id: "premium-craft",
      title: "Premium product craft",
      paragraphs: [
        "High-end products should feel deliberate, calm, and coherent from the first interaction to the deepest workflow.",
      ],
      bullets: [
        "Make powerful systems feel clear and controlled.",
        "Keep the ecosystem visually and structurally consistent.",
        "Use restraint instead of noise as the default expression of quality.",
      ],
    },
    {
      id: "connected-ecosystem",
      title: "Connected ecosystem",
      paragraphs: [
        "Every product line should feel like part of a broader company system rather than a collection of disconnected apps.",
      ],
    },
    {
      id: "trust-control",
      title: "Trust and control",
      paragraphs: [
        "Where the repo does not prove a fact, the site should say less and keep its promises smaller.",
      ],
      bullets: [
        "No invented legal standing.",
        "No invented security commitments.",
        "No invented research partnerships.",
      ],
    },
    {
      id: "future-computing",
      title: "Future computing",
      paragraphs: [
        "The company direction reaches beyond today’s apps toward the next era of operating systems, infrastructure, and intelligent devices.",
      ],
    },
  ],
  ctas: [
    { label: "Try Ethen", href: UPCUBE_CHAT_URL, external: true },
    { label: "Company Overview", href: "/about" },
  ],
};

export const foundationPageContent: FoundationPageContent = {
  eyebrow: "Mission",
  title: "A mission page for work that should matter in the long run.",
  description:
    "This route describes an aspirational foundation direction. It does not claim that a legally registered nonprofit or formal foundation entity exists.",
  draftNotice: foundationStatusNotice,
  sections: [
    {
      id: "mission",
      title: "Mission direction",
      paragraphs: [
        "The foundation concept is about widening access to better tools for learning, building, and thoughtful work.",
        "It is meant to describe public intent, not a completed legal structure.",
      ],
    },
    {
      id: "focus",
      title: "Areas a future foundation effort could support",
      paragraphs: [
        "The repo supports a careful, limited description of focus.",
      ],
      bullets: [
        "Learning and research access.",
        "Open educational or public-interest tooling.",
        "Programs that favor clarity, safety, and practical usefulness.",
      ],
    },
    {
      id: "boundaries",
      title: "What is not provided",
      paragraphs: [
        "Registration details, board membership, grantmaking processes, and tax status were not provided in this repo.",
      ],
    },
  ],
  ctas: [
    { label: "Read charter", href: "/charter" },
    { label: "Research overview", href: "/research" },
  ],
};

export const careersPageContent: FoundationPageContent = {
  eyebrow: "Careers",
  title: "We want builders who care about judgment as much as speed.",
  description:
    "The repo supports a culture page and a direct path to the live jobs destination, but not a full recruiting handbook.",
  draftNotice: careersStatusNotice,
  sections: [
    {
      id: "culture",
      title: "How the work should feel",
      paragraphs: [
        "Teams should be able to move quickly without losing clarity about what is real, what is missing, and what still needs review.",
      ],
      bullets: [
        "Careful thinking with a bias toward shipping.",
        "High standards for product language and evidence.",
        "Comfort working across product, design, research, and execution.",
      ],
    },
    {
      id: "builders",
      title: "Who this is for",
      paragraphs: [
        "The strongest fit is someone who likes turning ambiguous work into simple, inspectable outcomes.",
      ],
    },
    {
      id: "hiring",
      title: "Hiring status",
      paragraphs: [
        "For current openings, use the live jobs app. Specific role descriptions inside this repo were not provided.",
      ],
    },
  ],
  ctas: [
    { label: "View jobs", href: UPCUBE_JOBS_URL, external: true },
    { label: "Read charter", href: "/charter" },
  ],
};

export const brandPageContent: FoundationPageContent = {
  eyebrow: "Brand Resources",
  title: "UpcubeAI | AI Technology Company",
  description:
    "This page offers practical guidance for using the UpcubeAI name, company descriptor, and tagline without implying a full downloadable brand kit exists in the repo.",
  sections: [
    {
      id: "naming",
      title: "Naming",
      paragraphs: [
        "Use product names as they appear in the live site so the ecosystem stays coherent.",
      ],
      bullets: [
        "Use UpcubeAI for the AI workspace and product family.",
        "Use AI technology company as the short public descriptor where a company label is needed.",
        'Use "AI for the way you work, discover, build, and imagine what\'s next" as the public-facing tagline.',
        "Use Ethen for the chat workspace destination.",
        "Use Earth, Books, Games, Jobs, Cloud, Upcube Commerce, OS, and Mobile OS as product names when linking to those destinations.",
      ],
    },
    {
      id: "logo",
      title: "Logo and mark",
      paragraphs: [
        "The repo provides one public logo mark at `/public/brand/logo-mark.png`.",
        "Alternative lockups, download packs, and usage templates were not provided.",
      ],
    },
    {
      id: "usage",
      title: "Usage guidance",
      paragraphs: ["Keep brand use straightforward and non-deceptive."],
      bullets: [
        "Do not imply endorsement, partnership, or certification.",
        "Do not invent new logos, seals, or compliance marks.",
        "Keep surrounding language as restrained as the product itself.",
      ],
    },
  ],
  ctas: [
    { label: "Company Overview", href: "/about" },
    { label: "Mission", href: "/foundation" },
  ],
};

export const policiesPageContent: FoundationPageContent = {
  eyebrow: "Policy",
  title: "A quiet index for policy-shaped pages on the site.",
  description:
    "This page gathers the current placeholder routes without presenting them as reviewed legal policy.",
  draftNotice: policyIndexNotice,
  sections: [
    {
      id: "status",
      title: "Current status",
      paragraphs: [
        "These routes exist so the site can link to something honest while formal policy text is still missing from source control.",
      ],
    },
    {
      id: "index",
      title: "Pages currently available",
      paragraphs: [
        "Each destination is intentionally narrow and should be updated only when reviewed source material exists.",
      ],
      bullets: [
        "Terms of Use.",
        "Privacy Policy placeholder.",
        "Safety Approach.",
        "Security & Privacy.",
        "Trust & Transparency.",
      ],
    },
    {
      id: "limits",
      title: "What is not implied",
      paragraphs: [
        "No page in this set should be read as a certification, legal guarantee, or final public policy unless the repo later provides approved text.",
      ],
    },
  ],
  ctas: [
    { label: "Terms of Use", href: "/terms" },
    { label: "Privacy Notice", href: "/privacy" },
    { label: "Privacy", href: "/security-privacy" },
  ],
};

export const termsPageContent: FoundationPageContent = {
  eyebrow: "Terms of Use",
  title: "A placeholder route for future reviewed terms.",
  description:
    "This page gives the site a truthful destination now and leaves room for lawyer-reviewed terms later.",
  draftNotice: legalDraftNotice,
  sections: [
    {
      id: "draft",
      title: "Draft status",
      paragraphs: [
        "This route is informational only and should not be interpreted as binding legal terms.",
      ],
    },
    {
      id: "topics",
      title: "Topics likely to appear later",
      paragraphs: ["The repo supports a simple outline, not final wording."],
      bullets: [
        "Eligibility and acceptable use.",
        "Service changes and availability.",
        "Account handling and termination.",
        "Liability limits and dispute process.",
      ],
    },
  ],
  ctas: [
    { label: "Privacy Notice", href: "/privacy" },
    { label: "Policy", href: "/policies" },
  ],
};

export const trustTransparencyPageContent: FoundationPageContent = {
  eyebrow: "Trust",
  title: "Trust should come from clarity, not from oversized promises.",
  description:
    "This page explains how the public site handles missing facts, placeholder policy routes, and evidence-bound language.",
  sections: [
    {
      id: "principles",
      title: "Transparency principles",
      paragraphs: [
        "The site should describe what exists, name what is missing, and avoid smoothing over unresolved facts.",
      ],
      bullets: [
        "Mark placeholder policy pages clearly.",
        "Keep claims tied to implemented routes and repo-owned copy.",
        "Avoid legal, security, or partnership language that lacks proof.",
      ],
    },
    {
      id: "reading",
      title: "How to read the site",
      paragraphs: [
        "Foundation, policy, trust, and research pages are intentionally conservative where the repo provides only directional material.",
      ],
    },
    {
      id: "limits",
      title: "What is not claimed",
      paragraphs: [
        "This page does not claim audits, certifications, transparency reports, or regulator-reviewed disclosures.",
      ],
    },
  ],
  ctas: [
    { label: "Safety", href: "/safety" },
    { label: "Privacy", href: "/security-privacy" },
  ],
};

export const researchResidencyPageContent: FoundationPageContent = {
  eyebrow: "Research Fellowship",
  title: "A possible residency model, described carefully.",
  description:
    "An active residency program was not provided in the repo. This page describes what such a program could value without implying it exists today.",
  sections: [
    {
      id: "status",
      title: "Program status",
      paragraphs: [
        "This is a directional page, not a live call for applications.",
      ],
    },
    {
      id: "shape",
      title: "What a residency could emphasize",
      paragraphs: [
        "The strongest fit would be practical work that connects research to clear output.",
      ],
      bullets: [
        "Readable briefs and grounded analysis.",
        "Prototype thinking tied to product decisions.",
        "Careful writing about trust, systems, and workflow design.",
      ],
    },
    {
      id: "outputs",
      title: "Expected outputs",
      paragraphs: [
        "If this direction becomes real, outputs should feel useful, reviewable, and easy to share.",
      ],
    },
  ],
  ctas: [
    { label: "Research overview", href: "/research" },
    { label: "Try Ethen", href: UPCUBE_CHAT_URL, external: true },
  ],
};

export const researchEconomicPageContent: FoundationPageContent = {
  eyebrow: "Economy & Markets",
  title: "Research on cost, tradeoffs, and practical system economics.",
  description:
    "This page describes an economic research lane without claiming a formal institute, published series, or external partnership.",
  sections: [
    {
      id: "focus",
      title: "Focus areas",
      paragraphs: [
        "Economic research here means understanding how systems become more useful, more affordable, and easier to sustain.",
      ],
      bullets: [
        "Cost discipline and operating tradeoffs.",
        "Tooling and workflow efficiency.",
        "The economics of clarity, review, and reuse.",
      ],
    },
    {
      id: "methods",
      title: "Working style",
      paragraphs: [
        "The work should stay concrete: tie reasoning to observable systems, real decisions, and legible output.",
      ],
    },
    {
      id: "boundaries",
      title: "Boundaries",
      paragraphs: [
        "No published dataset, paper program, or partner-backed lab structure was provided in the repo, so none is implied here.",
      ],
    },
  ],
  ctas: [
    { label: "Research overview", href: "/research" },
    { label: "Try Ethen", href: UPCUBE_CHAT_URL, external: true },
  ],
};

export const workingTogetherPageContent: FoundationPageContent = {
  eyebrow: "Building With Communities",
  title: "Building AI for everyone through diverse perspectives.",
  description:
    "How UpcubeAI approaches collaboration, inclusion, and shared progress across the AI community.",
  sections: [
    {
      id: "approach",
      title: "Approach to collaboration",
      paragraphs: [
        "UpcubeAI is built around the belief that the strongest AI products come from broad perspectives, careful collaboration, and willingness to learn from many voices.",
        "This page describes the direction for working together. It does not claim that formal partnership programs, diversity certifications, or published workforce reports exist today.",
      ],
    },
    {
      id: "diverse-perspectives",
      title: "Why diverse perspectives matter",
      paragraphs: [
        "AI products affect people in different ways. Teams that reflect a wider range of backgrounds, experiences, and viewpoints are better positioned to build tools that work well for more people.",
      ],
      bullets: [
        "Seek broad input across product, research, and community channels.",
        "Create accessible product surfaces that work for diverse users.",
        "Keep product language clear and respectful across audiences.",
        "Encourage participation from underrepresented communities.",
      ],
    },
    {
      id: "what-is-missing",
      title: "What is not yet provided",
      paragraphs: [
        "Formal diversity reports, partnership agreements, workforce statistics, and community program details were not provided in this repo.",
        "This page describes public intent, not a completed operational program.",
      ],
    },
  ],
  ctas: [
    { label: "Careers", href: "/careers" },
    { label: "Company Overview", href: "/about" },
  ],
};

export const societalImpactPageContent: FoundationPageContent = {
  eyebrow: "Public Impact",
  title: "AI and the next era of discovery.",
  description:
    "How UpcubeAI thinks about the broader effects of AI on learning, access, discovery, and meaningful progress.",
  sections: [
    {
      id: "opportunity",
      title: "The opportunity for AI to create broad benefit",
      paragraphs: [
        "AI can help more people access better tools for learning, discovery, research, and creative work. UpcubeAI focuses on practical products that improve how people work with information.",
      ],
    },
    {
      id: "areas",
      title: "Areas of potential societal contribution",
      paragraphs: [
        "The current product family touches several areas where AI can have a meaningful impact.",
      ],
      bullets: [
        "Learning and education through Upcube Education.",
        "Spatial discovery and public understanding through Upcube Earth AI.",
        "Health-adjacent research support through Upcube Health AI.",
        "Scientific research acceleration through Upcube Science AI.",
      ],
    },
    {
      id: "caution",
      title: "What stays measured",
      paragraphs: [
        "This page does not claim that UpcubeAI has solved large societal challenges, published independent impact studies, or established formal public-benefit programs beyond what is visible in the repo.",
        "Claims about societal outcomes should be conservative and backed by real product evidence.",
      ],
    },
  ],
  ctas: [
    { label: "Research overview", href: "/research" },
    { label: "Company Overview", href: "/about" },
  ],
};

export const founderLetterPageContent: FoundationPageContent = {
  eyebrow: "Founder Note",
  title: "Why we focus on AI and to what end.",
  description:
    "A letter from the founding perspective on why UpcubeAI exists and what it aims to build.",
  sections: [
    {
      id: "why",
      title: "Why we started",
      paragraphs: [
        "Modern AI tools should feel like an extension of clear thinking, not a replacement for it. We started UpcubeAI to build intelligent products that help people work, discover, and build with clarity, speed, and confidence.",
      ],
    },
    {
      id: "focus",
      title: "What we focus on",
      paragraphs: [
        "We focus on practical AI that turns questions into structured work, complex information into understandable context, and scattered tools into connected product experiences.",
      ],
    },
    {
      id: "principles",
      title: "What guides the work",
      bullets: [
        "Build products that earn trust through clarity, not through overselling.",
        "Keep claims honest and tied to what is actually built.",
        "Design for the long run, with every surface feeling deliberate and premium.",
        "Treat AI as a tool for human judgment, not a substitute for it.",
      ],
      paragraphs: [
        "This letter is directional. Formal founder statements, detailed founding history, and biographical details were not provided in this repo.",
      ],
    },
  ],
  ctas: [
    { label: "Company Overview", href: "/about" },
    { label: "Mission", href: "/foundation" },
  ],
};

export const forOrganizationsPageContent: FoundationPageContent = {
  eyebrow: "For Teams & Builders",
  title: "Unlock more capability with AI.",
  description:
    "How organizations can use UpcubeAI across teams, research, and operational workflows.",
  sections: [
    {
      id: "overview",
      title: "Organizational adoption overview",
      paragraphs: [
        "UpcubeAI provides a shared AI workspace that teams can use for planning, research, analysis, content creation, and cross-functional coordination.",
        "This page describes organizational use without claiming enterprise certifications, compliance programs, admin controls, or contractual guarantees.",
      ],
    },
    {
      id: "use-cases",
      title: "Common organizational use cases",
      bullets: [
        "Strategic planning and briefing preparation.",
        "Cross-team research synthesis and decision support.",
        "Content and documentation workflows with review gates.",
        "Discovery and analysis across the Upcube product ecosystem.",
        "Learning and skill development through Upcube Education.",
      ],
      paragraphs: [
        "These use cases describe product direction, not claims of deployed enterprise infrastructure.",
      ],
    },
    {
      id: "whats-next",
      title: "What is not provided",
      paragraphs: [
        "Enterprise pricing, organizational admin controls, data governance tools, procurement workflows, compliance certifications, and dedicated support agreements were not provided in this repo.",
      ],
    },
  ],
  ctas: [
    { label: "Enterprise overview", href: "/enterprise" },
    { label: "Try Ethen", href: UPCUBE_CHAT_URL, external: true },
  ],
};

export const securityPageContent: FoundationPageContent = {
  eyebrow: "Security",
  title: "Security overview for the Upcube portal.",
  description:
    "A canonical security entry point that sets expectations without unsupported claims.",
  sections: securitySections,
  ctas: [
    { label: "Safety", href: "/safety" },
    { label: "Trust", href: "/trust-transparency" },
  ],
};

export const statusPageContent: FoundationPageContent = {
  eyebrow: "Status",
  title: "Public status and operational expectations.",
  description:
    "A status landing route that sets expectations and points to trust and contact surfaces.",
  sections: statusSections,
  ctas: [
    { label: "Contact us", href: "/contact" },
    { label: "Trust", href: "/trust-transparency" },
  ],
};

export const foundationRoutePaths = [
  "/terms",
  "/privacy",
  "/policies",
  "/about",
  "/charter",
  "/foundation",
  "/careers",
  "/brand",
  "/safety",
  "/security-privacy",
  "/trust-transparency",
  "/research",
  "/research/residency",
  "/research/economic",
  "/working-together",
  "/societal-impact",
  "/founder-letter",
  "/for-organizations",
  "/security",
  "/status",
] as const;
