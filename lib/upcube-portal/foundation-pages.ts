import {
  PortalTextSection,
  PortalTheme,
  legalDraftNotice,
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
  eyebrow: "About Us",
  title: "UpcubeAI is building a simpler way to work with intelligence.",
  description:
    "The public site frames one platform story across chat, research, and connected apps. It stays high level where the repo does not provide verified corporate detail.",
  sections: [
    {
      id: "platform",
      title: "What the platform is for",
      paragraphs: [
        "UpcubeAI is presented as a place to move from question to action without turning serious work into noise.",
        "Ethen, research, and connected app surfaces are meant to feel like parts of one system rather than disconnected destinations.",
      ],
    },
    {
      id: "approach",
      title: "How the product should feel",
      paragraphs: [
        "The product language favors clarity, restraint, and continuity across tasks.",
      ],
      bullets: [
        "Simple enough to start quickly.",
        "Structured enough to support real work.",
        "Careful enough to avoid claims the repo cannot prove.",
      ],
    },
    {
      id: "public-posture",
      title: "What this page does not claim",
      paragraphs: [
        "Formal company history, offices, legal registrations, and partnership facts were not provided in the repo, so they are intentionally left out here.",
      ],
    },
  ],
  ctas: [
    { label: "Open chat", href: UPCUBE_CHAT_URL, external: true },
    { label: "Research overview", href: "/research" },
  ],
};

export const charterPageContent: FoundationPageContent = {
  eyebrow: "Our Charter",
  title: "A public charter for how Upcube should build.",
  description:
    "The charter is short on purpose. It describes standards for product judgment, not legal obligations or governance filings.",
  sections: [
    {
      id: "clarity",
      title: "Clarity first",
      paragraphs: [
        "Products should reduce confusion, not add ceremony around it.",
      ],
      bullets: [
        "Prefer plain language over inflated positioning.",
        "Prefer visible review points over hidden automation.",
        "Prefer useful pages over decorative surfaces.",
      ],
    },
    {
      id: "trust",
      title: "Trust through boundaries",
      paragraphs: [
        "Where the repo does not prove a fact, the site should say less.",
      ],
      bullets: [
        "No invented legal standing.",
        "No invented security commitments.",
        "No invented research partnerships.",
      ],
    },
    {
      id: "craft",
      title: "Craft with restraint",
      paragraphs: [
        "The experience should feel deliberate, premium, and easy to read without falling into hype.",
      ],
    },
  ],
  ctas: [
    { label: "Open chat", href: UPCUBE_CHAT_URL, external: true },
    { label: "About Us", href: "/about" },
  ],
};

export const foundationPageContent: FoundationPageContent = {
  eyebrow: "Foundation",
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
  eyebrow: "Brand Help Center",
  title: "A simple guide for using the Upcube name and mark with care.",
  description:
    "This page offers practical brand-use guidance without implying a full downloadable brand kit exists in the repo.",
  sections: [
    {
      id: "naming",
      title: "Naming",
      paragraphs: [
        "Use product names as they appear in the live site so the ecosystem stays coherent.",
      ],
      bullets: [
        "Use UpcubeAI for the platform story.",
        "Use Ethen for the chat workspace destination.",
        "Use Planet, Books, Games, Jobs, and Cloud as app names when linking to those products.",
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
    { label: "About Us", href: "/about" },
    { label: "Foundation", href: "/foundation" },
  ],
};

export const policiesPageContent: FoundationPageContent = {
  eyebrow: "Other Policies",
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
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Security & Privacy", href: "/security-privacy" },
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
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Other Policies", href: "/policies" },
  ],
};

export const trustTransparencyPageContent: FoundationPageContent = {
  eyebrow: "Trust & Transparency",
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
    { label: "Safety Approach", href: "/safety" },
    { label: "Security & Privacy", href: "/security-privacy" },
  ],
};

export const researchResidencyPageContent: FoundationPageContent = {
  eyebrow: "Research Residency",
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
    { label: "Open chat", href: UPCUBE_CHAT_URL, external: true },
  ],
};

export const researchEconomicPageContent: FoundationPageContent = {
  eyebrow: "Economic Research",
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
    { label: "Open chat", href: UPCUBE_CHAT_URL, external: true },
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
] as const;
