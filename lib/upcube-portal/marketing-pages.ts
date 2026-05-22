import {
  UPCUBE_BOOKS_URL,
  UPCUBE_CHAT_URL,
  UPCUBE_CLOUD_URL,
  UPCUBE_GAMES_URL,
  UPCUBE_JOBS_URL,
  UPCUBE_PLANET_URL,
} from "lib/upcube-portal/content";

export type MarketingCard = {
  title: string;
  body: string;
  href?: string;
  external?: boolean;
};

export type MarketingSection = {
  eyebrow?: string;
  title: string;
  description?: string;
  cards: MarketingCard[];
};

export type MarketingPageContent = {
  eyebrow: string;
  title: string;
  lead: string;
  chips: string[];
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
  sections: MarketingSection[];
};

const appLinks = [
  { title: "UpcubeAI", href: UPCUBE_CHAT_URL },
  { title: "Upcube Earth", href: UPCUBE_PLANET_URL },
  { title: "Upcube Books", href: UPCUBE_BOOKS_URL },
  { title: "Upcube Jobs", href: UPCUBE_JOBS_URL },
  { title: "Upcube Games", href: UPCUBE_GAMES_URL },
  { title: "Upcube Cloud", href: UPCUBE_CLOUD_URL },
];

export const explorePageContent: MarketingPageContent = {
  eyebrow: "UpcubeAI ecosystem",
  title: "Explore the UpcubeAI portal",
  lead: "Move from question to execution with one workspace across chat, research, spatial tools, publishing, hiring, and developer surfaces.",
  chips: ["Portal-first", "Black editorial UI", "App-linked experiences"],
  primaryCta: { label: "Try Ethen", href: UPCUBE_CHAT_URL, external: true },
  secondaryCta: { label: "View capabilities", href: "/capabilities" },
  sections: [
    {
      eyebrow: "App entry points",
      title: "Connected Upcube destinations",
      cards: appLinks.map((item) => ({
        title: item.title,
        body: "Launch the dedicated surface for this workflow.",
        href: item.href,
        external: true,
      })),
    },
    {
      eyebrow: "What to do here",
      title: "Common portal starting paths",
      cards: [
        {
          title: "Start in chat",
          body: "Draft ideas, summarize inputs, and route work into the right app.",
          href: UPCUBE_CHAT_URL,
          external: true,
        },
        {
          title: "Research with structure",
          body: "Use the research page for evidence-oriented planning and decision artifacts.",
          href: "/research",
        },
        {
          title: "Review enterprise lane",
          body: "See how teams can adopt UpcubeAI workflows with governance and review gates.",
          href: "/enterprise",
        },
      ],
    },
  ],
};

export const platformPageContent: MarketingPageContent = {
  eyebrow: "Platform overview",
  title: "One platform for AI workspace operations",
  lead: "UpcubeAI unifies interaction, planning, and delivery across product, research, and creator workflows.",
  chips: ["Shared shell", "App Router pages", "Scoped portal styles"],
  primaryCta: {
    label: "Try Ethen",
    href: UPCUBE_CHAT_URL,
    external: true,
  },
  secondaryCta: { label: "Explore apps", href: "/explore" },
  sections: [
    {
      eyebrow: "Core layers",
      title: "How the platform is organized",
      cards: [
        {
          title: "Workspace layer",
          body: "Chat-driven planning and execution from a single prompt surface.",
          href: UPCUBE_CHAT_URL,
          external: true,
        },
        {
          title: "Domain apps",
          body: "Upcube Earth, Upcube Books, Upcube Jobs, Upcube Games, and Upcube Cloud are connected through one navigation model.",
          href: "/explore",
        },
        {
          title: "Portal layer",
          body: "Shared header, footer, and dark editorial layout across core marketing routes.",
        },
      ],
    },
    {
      eyebrow: "Build paths",
      title: "Teams can use UpcubeAI for",
      cards: [
        {
          title: "Product planning",
          body: "Spec drafts, tradeoff notes, and launch checklists.",
        },
        {
          title: "Research synthesis",
          body: "Evidence mapping and decision-ready summaries.",
        },
        {
          title: "Creative production",
          body: "Cross-format ideation for writing and media workflows.",
        },
      ],
    },
  ],
};

export const businessPageContent: MarketingPageContent = {
  eyebrow: "Business model",
  title: "UpcubeAI for builders and operating teams",
  lead: "UpcubeAI is positioned as a practical AI workspace that supports build, launch, and iteration cycles across multiple Upcube apps.",
  chips: ["Builder workflows", "Execution support", "Neutral claims only"],
  primaryCta: { label: "See enterprise page", href: "/enterprise" },
  secondaryCta: {
    label: "Open cloud tools",
    href: UPCUBE_CLOUD_URL,
    external: true,
  },
  sections: [
    {
      eyebrow: "Operating model",
      title: "What this portal supports",
      cards: [
        {
          title: "Workflow acceleration",
          body: "Use shared prompts and templates to move faster from intent to deliverable.",
        },
        {
          title: "Cross-app navigation",
          body: "Route from one portal page into the right specialized Upcube app quickly.",
        },
        {
          title: "Team alignment",
          body: "Keep language, planning context, and rollout direction consistent across roles.",
        },
      ],
    },
    {
      eyebrow: "Application lanes",
      title: "Business-facing destinations",
      cards: [
        {
          title: "Hiring pipeline",
          body: "Route hiring workflows to Upcube Jobs.",
          href: UPCUBE_JOBS_URL,
          external: true,
        },
        {
          title: "Knowledge publishing",
          body: "Route editorial and learning workflows to Upcube Books.",
          href: UPCUBE_BOOKS_URL,
          external: true,
        },
        {
          title: "Developer delivery",
          body: "Route implementation workflows to Upcube Cloud.",
          href: UPCUBE_CLOUD_URL,
          external: true,
        },
      ],
    },
  ],
};

export const capabilitiesPageContent: MarketingPageContent = {
  eyebrow: "Capabilities",
  title: "What UpcubeAI is designed to help with",
  lead: "The portal emphasizes practical AI workflows: writing, analysis, planning, and cross-app routing for execution.",
  chips: ["Chat-first", "Research-aware", "App-connected"],
  primaryCta: {
    label: "Try Ethen",
    href: UPCUBE_CHAT_URL,
    external: true,
  },
  secondaryCta: { label: "Platform overview", href: "/platform" },
  sections: [
    {
      eyebrow: "Core capability groups",
      title: "Primary interaction modes",
      cards: [
        {
          title: "Prompted planning",
          body: "Generate structured plans, checklists, and execution drafts.",
        },
        {
          title: "Research summarization",
          body: "Convert source inputs into concise decision-oriented outputs.",
        },
        {
          title: "Cross-app routing",
          body: "Move from portal context into Upcube Earth, Upcube Books, Upcube Jobs, Upcube Games, or Upcube Cloud.",
        },
      ],
    },
    {
      eyebrow: "Use in practice",
      title: "Examples of capability-driven flow",
      cards: [
        {
          title: "Research to memo",
          body: "Start in chat, validate on /research, ship an internal summary.",
        },
        {
          title: "Idea to launch plan",
          body: "Draft launch tracks, owners, and review points in one workspace.",
        },
        {
          title: "Builder support",
          body: "Route coding and developer preparation into Upcube Cloud.",
          href: UPCUBE_CLOUD_URL,
          external: true,
        },
      ],
    },
  ],
};

export const enterprisePageContent: MarketingPageContent = {
  eyebrow: "Enterprise",
  title: "Enterprise workflows with clear operational boundaries",
  lead: "Use UpcubeAI to support team operations, research workflows, and delivery planning while keeping human review in the loop.",
  chips: ["Team workflows", "Review gates", "Claim-limited positioning"],
  primaryCta: { label: "Read research lane", href: "/research" },
  secondaryCta: { label: "Try Ethen", href: UPCUBE_CHAT_URL, external: true },
  sections: [
    {
      eyebrow: "Enterprise lanes",
      title: "Where teams use this surface",
      cards: [
        {
          title: "Operations planning",
          body: "Draft process docs, rollout plans, and issue triage summaries.",
        },
        {
          title: "Knowledge enablement",
          body: "Prepare internal briefs and orientation material for teams.",
        },
        {
          title: "Execution coordination",
          body: "Route actionable tracks to the right Upcube app by function.",
        },
      ],
    },
    {
      eyebrow: "Related apps",
      title: "External app routes",
      cards: [
        {
          title: "UpcubeAI",
          body: "Primary workspace for task planning and synthesis.",
          href: UPCUBE_CHAT_URL,
          external: true,
        },
        {
          title: "Upcube Cloud",
          body: "Developer and implementation support entry.",
          href: UPCUBE_CLOUD_URL,
          external: true,
        },
        {
          title: "Upcube Jobs",
          body: "Hiring and role workflow destination.",
          href: UPCUBE_JOBS_URL,
          external: true,
        },
      ],
    },
  ],
};

export const corePageContent: MarketingPageContent = {
  eyebrow: "Upcube Core",
  title: "The shared intelligence and platform layer",
  lead: "Upcube Core brings together AI, workspace, identity, search, and project orchestration as the foundational platform across every Upcube product.",
  chips: ["AI workspace", "Platform layer", "Ecosystem foundation"],
  primaryCta: { label: "Explore UpcubeAI", href: "/products/upcube-ai" },
  secondaryCta: { label: "View all products", href: "/products" },
  sections: [
    {
      eyebrow: "Core capabilities",
      title: "What the platform layer provides",
      cards: [
        {
          title: "AI workspace",
          body: "Ethen anchors the ecosystem with AI-led planning, writing, research, and execution workflows.",
          href: "/products/upcube-ai",
        },
        {
          title: "Identity and access",
          body: "Account, authentication, and permission boundaries that connect products without scattering user data.",
        },
        {
          title: "Search and discovery",
          body: "Cross-product search that helps people find content, products, and information across the ecosystem.",
        },
        {
          title: "Project orchestration",
          body: "Organize work across products, track execution, and keep team context connected.",
        },
      ],
    },
    {
      eyebrow: "Platform foundation",
      title: "How Core connects the ecosystem",
      cards: [
        {
          title: "Unified navigation",
          body: "A shared shell — header, footer, menus — that makes every Upcube product feel like part of one family.",
        },
        {
          title: "Shared design system",
          body: "Consistent editorial styling, typography, and interaction patterns across every portal page.",
        },
      ],
    },
  ],
};

export const buildPageContent: MarketingPageContent = {
  eyebrow: "Upcube Build",
  title: "Cloud, compute, and platform tools for builders",
  lead: "Upcube Build covers the infrastructure and systems layer — cloud workflows, virtual machines, operating systems, and voice platform for teams building on the Upcube ecosystem.",
  chips: ["Cloud infrastructure", "Cloud VM", "Platform tools"],
  primaryCta: { label: "Explore Cloud", href: "/products/cloud" },
  secondaryCta: { label: "View all products", href: "/products" },
  sections: [
    {
      eyebrow: "Build products",
      title: "Infrastructure and systems",
      cards: [
        {
          title: "Cloud",
          body: "Developer tools, cloud workflows, and compute access — the infrastructure front door for the ecosystem.",
          href: "/products/cloud",
        },
        {
          title: "Cloud VM",
          body: "Virtual machines, networking, storage, and operations inside Upcube Cloud.",
          href: "/products/vm",
        },
        {
          title: "Upcube OS",
          body: "AI-first desktop operating system designed around visible help, permissions, and trust.",
          href: "/products/upcube-os",
        },
        {
          title: "Upcube Mobile OS",
          body: "AI-native mobile computing direction focused on privacy, trust, and clear interaction.",
          href: "/products/upcube-mobile-os",
        },
        {
          title: "Voice",
          body: "AI voice platform for future Upcube devices — headphones, earbuds, home audio, and car audio.",
          href: "/products/voice",
        },
      ],
    },
    {
      eyebrow: "Who builds on Upcube",
      title: "Platform roles",
      cards: [
        {
          title: "Developers",
          body: "Cloud APIs, compute resources, and tooling for building on the Upcube platform.",
        },
        {
          title: "Platform teams",
          body: "Infrastructure operations, system architecture, and the compute layer behind scalable products.",
        },
      ],
    },
  ],
};

export const learnPageContent: MarketingPageContent = {
  eyebrow: "Upcube Learn",
  title: "Learning paths for the AI age",
  lead: "Upcube Learn brings together education, books, and quantum computing — structured learning, discovery, and exploration for the next era of computing.",
  chips: ["Education", "Discovery", "Future computing"],
  primaryCta: { label: "Explore Education", href: "/products/university" },
  secondaryCta: { label: "View all products", href: "/products" },
  sections: [
    {
      eyebrow: "Learn products",
      title: "Knowledge and exploration",
      cards: [
        {
          title: "Education",
          body: "100K courses with simple $5 course pricing for AI education, product training, and guided learning paths.",
          href: "/products/university",
        },
        {
          title: "Books",
          body: "Explore 50M books with previews, saved titles, and a calmer path to discovery.",
          href: "/products/books",
        },
        {
          title: "Quantum",
          body: "A beginner-friendly quantum workspace for guided experiments, visual runs, and clear result charts.",
          href: "/products/quantum",
        },
      ],
    },
    {
      eyebrow: "Learning approach",
      title: "How Learn works",
      cards: [
        {
          title: "Guided paths",
          body: "Structured learning sequences help build confidence from fundamentals into advanced topics.",
        },
        {
          title: "Hands-on exploration",
          body: "Quantum experiments, book previews, and course material let learning happen by doing.",
        },
      ],
    },
  ],
};

export const researchPageContent: MarketingPageContent = {
  eyebrow: "Research",
  title: "Research-to-decision workflows for UpcubeAI",
  lead: "Use the research lane for grounded analysis, summary artifacts, and practical planning outputs tied to execution.",
  chips: ["Evidence mapping", "Decision support", "Action-oriented briefs"],
  primaryCta: {
    label: "Try Ethen",
    href: UPCUBE_CHAT_URL,
    external: true,
  },
  secondaryCta: { label: "View platform", href: "/platform" },
  sections: [
    {
      eyebrow: "Research outputs",
      title: "Common artifact types",
      cards: [
        {
          title: "Research briefs",
          body: "Concise summaries with assumptions and open questions.",
        },
        {
          title: "Comparative notes",
          body: "Option-by-option comparisons to support decision meetings.",
        },
        {
          title: "Execution prompts",
          body: "Action-ready next-step tracks for product and operations teams.",
        },
      ],
    },
    {
      eyebrow: "Research index",
      title: "Pages for longer-form work",
      cards: [
        {
          title: "Research overview",
          body: "Start from the main route when you want the broad public framing.",
          href: "/research",
        },
        {
          title: "Research residency",
          body: "Read the placeholder direction for a possible residency model.",
          href: "/research/residency",
        },
        {
          title: "Economic research",
          body: "Read the current direction for cost, tradeoffs, and system economics.",
          href: "/research/economic",
        },
      ],
    },
    {
      eyebrow: "Connected lanes",
      title: "Route results into the right app",
      cards: [
        {
          title: "Spatial research",
          body: "Continue location and mapping exploration in Upcube Earth.",
          href: UPCUBE_PLANET_URL,
          external: true,
        },
        {
          title: "Publishing flow",
          body: "Move editorial research outputs toward Upcube Books.",
          href: UPCUBE_BOOKS_URL,
          external: true,
        },
        {
          title: "Developer follow-through",
          body: "Move technical implementation tracks into Upcube Cloud.",
          href: UPCUBE_CLOUD_URL,
          external: true,
        },
      ],
    },
  ],
};
