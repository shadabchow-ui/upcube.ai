import type { FoundationPageContent } from "lib/upcube-portal/foundation-pages";

export type PolicySlug =
  | "ai-principles"
  | "working-together"
  | "societal-impact"
  | "why-we-focus-on-ai"
  | "for-organizations";

export const policyPageContentBySlug: Record<
  PolicySlug,
  FoundationPageContent
> = {
  "ai-principles": {
    eyebrow: "Commitments",
    title: "Bold innovation. Responsible development. Progress together.",
    description:
      "UpcubeAI's approach to developing and using AI is grounded in a simple founding belief: technology should help people understand more, build faster, and move through complexity with greater clarity.",
    sections: [
      {
        id: "approach",
        title: "AI should be useful, understandable, and worthy of trust",
        paragraphs: [
          "UpcubeAI is building a connected product family across AI workspaces, voice, education, commerce, discovery, cloud infrastructure, entertainment, and future computing.",
          "UpcubeAI's AI principles are built around three commitments: 1. Bold innovation, 2. Responsible development and deployment, 3. Collaborative progress, together.",
        ],
      },
      {
        id: "bold-innovation",
        title: "1. Bold innovation",
        paragraphs: [
          "AI should expand what people can do. It should help students learn, workers produce, creators explore, teams build, researchers organize, businesses operate, and communities access useful information with less friction.",
          "The strongest AI products should make everyday work easier and complex work more manageable.",
        ],
        bullets: [
          "Develop AI where benefits can outweigh foreseeable risks.",
          "Advance useful AI through research and iteration.",
          "Create products that solve real problems.",
          "Make breakthroughs broadly useful, not only for a few.",
        ],
      },
      {
        id: "responsible-development",
        title: "2. Responsible development and deployment",
        paragraphs: [
          "AI is still an emerging and rapidly changing technology. Its capabilities are growing. Its uses are expanding. Its risks are evolving.",
          "Responsibility cannot be treated as a final review step. It must be part of the full product lifecycle.",
        ],
        bullets: [
          "Keep human oversight where it matters.",
          "Design for safety and security.",
          "Test before claiming.",
          "Reduce harmful and unintended outcomes.",
          "Respect privacy and security.",
          "Respect intellectual property.",
          "Learn as the technology changes.",
        ],
      },
      {
        id: "collaborative-progress",
        title: "3. Collaborative progress, together",
        paragraphs: [
          "AI is a foundational technology. Its benefits should not be limited to one company, one community, one type of user, or one kind of institution.",
          "No single company has all the answers. The future of AI should be shaped through collaboration, practical standards, user feedback, and shared responsibility.",
        ],
        bullets: [
          "Empower others to create and build.",
          "Support a stronger ecosystem with education, infrastructure, and accessible product experiences.",
          "Work with researchers and domain experts.",
          "Engage with governments and civil society.",
          "Share what we learn where appropriate.",
        ],
      },
      {
        id: "what-we-wont-do",
        title: "What we will not do",
        paragraphs: [
          "Clear boundaries are part of responsible AI. UpcubeAI's principles also define what the company should avoid.",
        ],
        bullets: [
          "We will not let hype outrun proof.",
          "We will not hide important actions from users.",
          "We will not treat privacy as decoration.",
          "We will not present AI as infallible.",
          "We will not ignore people affected by the product.",
        ],
      },
    ],
    ctas: [
      { label: "Safety", href: "/safety" },
      { label: "Building With Communities", href: "/policy/working-together" },
      { label: "Public Impact", href: "/policy/societal-impact" },
    ],
  },

  "working-together": {
    eyebrow: "Building With Communities",
    title: "Working Together to Build AI for Everyone",
    description:
      "AI should work for more people. Because it is built with more people. UpcubeAI is being designed for a future where artificial intelligence is not reserved for a narrow group of users, companies, devices, languages, or workflows.",
    sections: [
      {
        id: "perspectives",
        title: "Building with more perspectives",
        paragraphs: [
          "The people who design AI systems shape what those systems notice, what they miss, and how they respond. That makes collaboration one of the most important parts of responsible product development.",
          "To build across a product family that spans AI workspaces, voice, books, spatial exploration, games, jobs, commerce, cloud infrastructure, education, and future computing, the product process has to make room for different perspectives early.",
        ],
        bullets: [
          "Collaboration from the start, before decisions harden into interfaces, policies, and defaults.",
          "Practical feedback loops that shape navigation, language, accessibility, safety, privacy controls, onboarding, and how AI explains itself.",
          "A broader view of usefulness that reaches beyond the most technical users, the fastest readers, the most common devices, or the easiest environments.",
        ],
      },
      {
        id: "accessibility",
        title: "Designing for accessibility",
        paragraphs: [
          "Accessibility is not a special mode. It is a product quality standard. AI products should be easier to use for people with different visual, auditory, motor, cognitive, language, and situational needs.",
          "That means accessibility cannot live only in compliance checklists. It has to be part of how the interface is designed, how the copy is written, how actions are confirmed, and how users recover when something goes wrong.",
        ],
        bullets: [
          "Clear visual structure with hierarchy that helps people understand where they are and what action matters next.",
          "Plain-language controls for settings, permissions, privacy choices, approvals, and tool actions.",
          "Multiple ways to act, supporting keyboard, touch, voice, screen reader, and responsive design patterns.",
          "Reduce cognitive load so AI products help organize complexity rather than adding to it.",
        ],
      },
      {
        id: "community",
        title: "Community-informed product development",
        paragraphs: [
          "AI products become stronger when the people affected by them help shape them. The goal is not to claim that every community is already represented or every gap is solved. The goal is to create a product culture that keeps looking for what is missing.",
        ],
        bullets: [
          "Build with affected users so their lived experience informs the work.",
          "Treat gaps as product signals, not only as support issues.",
          "Keep improving after launch through feedback, testing, analytics, and user research.",
        ],
      },
      {
        id: "fairness",
        title: "Fairness through the product lifecycle",
        paragraphs: [
          "There is no single setting that makes AI fair in every situation. Different products create different risks. Different users need different protections.",
          "AI can support decisions, but teams should remain responsible for the systems they ship, the claims they make, and the ways users are affected.",
        ],
        bullets: [
          "Define what fairness means for each product feature in context.",
          "Test with representative scenarios, including difficult cases and edge conditions.",
          "Look for uneven outcomes: who benefits, who struggles, who is misunderstood.",
          "Keep the human accountable for the systems and decisions.",
        ],
      },
      {
        id: "responsible-inclusion",
        title: "Responsible inclusion",
        paragraphs: [
          "Build for everyone does not mean claim everything is solved. A serious page should be ambitious, but honest.",
          "UpcubeAI should not overclaim that every community is represented, every dataset is complete, every product works perfectly for every user, or every fairness challenge is solved. That would weaken trust, not strengthen it.",
        ],
        bullets: [
          "Keep inclusion as a product direction, not a one-time launch statement.",
          "Connect public language to real product behavior, user research, testing, and implementation maturity.",
          "No AI product gets everything right from the start. The better companies learn, correct, and improve.",
        ],
      },
    ],
    ctas: [
      { label: "Commitments", href: "/policy/ai-principles" },
      { label: "Safety", href: "/safety" },
      { label: "Public Impact", href: "/policy/societal-impact" },
    ],
  },

  "societal-impact": {
    eyebrow: "Public Impact",
    title: "A new era of discovery",
    description:
      "AI has the potential to help people see patterns sooner, learn faster, build more confidently, and respond to problems with better information. UpcubeAI's societal impact direction starts with that possibility.",
    sections: [
      {
        id: "meaningful-challenges",
        title: "Applying AI to meaningful challenges",
        paragraphs: [
          "The most important AI products will not only answer questions. They will help people make better decisions, understand complex systems, and work through problems that are too large for any single interface, team, or dataset to handle alone.",
          "The societal impact goal is simple: make intelligence more useful in the real world, while keeping people in control of the decisions that matter.",
        ],
      },
      {
        id: "health",
        title: "Health and human wellbeing",
        paragraphs: [
          "Health is one of the areas where AI's promise is most meaningful and where responsible framing matters most.",
          "UpcubeAI should not claim to diagnose, treat, or replace medical professionals. But AI can still support the broader health and wellbeing ecosystem in careful, practical ways: helping people understand complex information, supporting researchers, and preparing better questions for qualified professionals.",
        ],
        bullets: [
          "Research support for organizing papers and comparing evidence.",
          "Health education with clear boundaries around professional medical advice.",
          "Administrative clarity for forms, policies, and documentation workflows.",
          "Human oversight first, with professional review in sensitive domains.",
        ],
      },
      {
        id: "resilience",
        title: "Resilience and crisis understanding",
        paragraphs: [
          "AI can help people explore large volumes of data, detect changes, summarize signals, and connect geography with context. But resilience-focused AI requires humility, careful sourcing, and clear limits.",
          "Forecasting, emergency response, and public safety decisions should remain in the hands of qualified organizations and experts.",
        ],
        bullets: [
          "Spatial context through Upcube Earth for terrain, cities, and geographic understanding.",
          "Research and reporting through Ethen for summarization and clearer briefings.",
          "Infrastructure awareness through Cloud and VM Compute for more advanced workflows.",
          "Responsible limits: no implied emergency authority or guaranteed safety outcomes.",
        ],
      },
      {
        id: "education",
        title: "Education and learning",
        paragraphs: [
          "Education may be one of AI's most powerful opportunities. People need to learn faster than ever, but learning can feel scattered, expensive, and overwhelming.",
          "The goal is not to replace teachers, schools, or institutions. The goal is to make practical learning more accessible, organized, and connected to real tools.",
        ],
        bullets: [
          "Guided learning paths from fundamentals to deeper technical understanding.",
          "Product-based education connected to real systems.",
          "Support for builders, creators, entrepreneurs, and students.",
          "Clear education boundaries: Upcube Education is not presented as an accredited institution, degree program, or legal university unless that status is formally established.",
        ],
      },
      {
        id: "economic",
        title: "Economic opportunity",
        paragraphs: [
          "AI will change how people work. The question is whether that change expands opportunity or concentrates it. Useful AI should help more people build, learn, sell, search, hire, create, and operate.",
        ],
        bullets: [
          "Tools for small teams to draft plans, research markets, and execute faster.",
          "Skills for the AI economy through practical education and training.",
          "Career discovery through Upcube Jobs.",
          "Commerce at scale through Upcube Commerce for large-catalog discovery.",
        ],
      },
      {
        id: "responsible-impact",
        title: "Responsible impact",
        paragraphs: [
          "Societal impact language can easily become too broad. UpcubeAI should avoid that.",
          "The page should not claim medical breakthroughs, disaster prediction, government deployment, public-sector partnerships, workforce programs, or scientific discoveries unless those efforts are real, documented, and ready to be represented publicly.",
        ],
        bullets: [
          "No unsupported public-health claims.",
          "No invented partnerships with governments, hospitals, agencies, or schools.",
          "No overstated outcomes without measured and documented evidence.",
          "Clear product maturity distinctions between live, preview, and long-range direction.",
        ],
      },
    ],
    ctas: [
      { label: "Building With Communities", href: "/policy/working-together" },
      { label: "Safety", href: "/safety" },
      { label: "Upcube Education", href: "/products/university" },
    ],
  },

  "why-we-focus-on-ai": {
    eyebrow: "Founder Note",
    title: "Why We Focus on AI — and to What End",
    description:
      "A founder letter from Shadab, Founder of UpcubeAI. AI is one of the most important technologies of our time. It can change how people work, learn, build, discover, create, and make decisions.",
    sections: [
      {
        id: "letter",
        title: "A letter from Shadab, Founder of UpcubeAI",
        paragraphs: [
          "We are living through a defining moment in technology. AI is no longer only a research topic or a feature hidden inside software. It is becoming a new layer for work, learning, discovery, commerce, voice, infrastructure, and computing itself.",
          "That possibility is exciting. It is also serious. As AI becomes more capable, the responsibility around it becomes more important. A powerful system should not feel mysterious. A helpful assistant should not silently take control.",
          "Our belief is simple: AI should assist, complement, empower, and inspire people without taking away the clarity and control they need to trust the work.",
          "Ethen is designed to be more than a chat box. It is an AI workspace where research, artifacts, tools, approvals, and execution can stay connected. Upcube Books, Earth, Upcube Commerce, Education, Cloud, Voice, OS, and Mobile OS each carry that same standard.",
          "The goal is not to make AI feel magical. The goal is to make it useful enough, clear enough, and trustworthy enough that people can rely on it for serious work.",
        ],
      },
      {
        id: "why-ai",
        title: "Why we are developing AI",
        paragraphs: [
          "AI is a foundational technology because it can improve many kinds of systems at once. The real promise is not only automation. The real promise is assistance.",
        ],
        bullets: [
          "Make information more useful by turning scattered inputs into clearer answers, summaries, and plans.",
          "Help people work with more confidence across drafting, research, organizing, and execution.",
          "Unlock new product experiences: workspaces, voice, discovery surfaces, and explainable operating systems.",
          "Expand access by helping people overcome barriers of language, complexity, disability, or cost.",
        ],
      },
      {
        id: "to-what-end",
        title: "To what end?",
        paragraphs: [
          "The purpose of UpcubeAI is not to chase every AI trend. It is to build a connected product ecosystem where AI makes real work, learning, discovery, and computing better.",
          "The end goal is not simply intelligence. The end goal is usefulness.",
        ],
        bullets: [
          "Build a serious AI workspace for turning questions into durable work.",
          "Bring AI into discovery across Books, Earth, Games, Jobs, and Upcube Commerce.",
          "Make learning more practical through structured AI education and product training.",
          "Support builders with infrastructure through Cloud and VM Compute.",
          "Shape future computing around trust with visible controls from the beginning.",
        ],
      },
      {
        id: "complexities",
        title: "Complexities and risks",
        paragraphs: [
          "AI creates powerful opportunities. It also creates real risks. A system can be wrong. It can sound confident when it is uncertain. It can be misused. It can amplify unfair patterns.",
          "UpcubeAI's public product language should never pretend that AI is risk-free.",
        ],
        bullets: [
          "Accuracy and groundedness: output should be reviewed, especially in important domains.",
          "Privacy and data use: products should explain what information they use and what controls users have.",
          "Misuse and harmful automation: tools and workflows should be governed.",
          "Overstated capability: AI should not be described as human, conscious, or guaranteed correct.",
        ],
      },
      {
        id: "responsible-ai",
        title: "Responsible AI",
        paragraphs: [
          "Responsible AI is not a slogan. It is an operating model. For UpcubeAI, it means building useful products while keeping important decisions visible, reviewable, and grounded in evidence.",
        ],
        bullets: [
          "Focus on useful AI that helps people do real work.",
          "Keep humans in control for sensitive, state-changing, or high-impact actions.",
          "Use evidence and evaluation, not assumed quality from design polish.",
          "Build with safety in mind through policy checks, tool governance, and safer defaults.",
          "Update as we learn, because models, products, users, risks, and regulations change.",
        ],
      },
    ],
    ctas: [
      { label: "Commitments", href: "/policy/ai-principles" },
      { label: "Safety", href: "/safety" },
      { label: "Building With Communities", href: "/policy/working-together" },
    ],
  },

  "for-organizations": {
    eyebrow: "For Teams & Builders",
    title: "Unlock more capability with AI",
    description:
      "AI can help organizations move with more clarity, speed, and confidence. UpcubeAI is building a product family for that future.",
    sections: [
      {
        id: "every-organization",
        title: "Built for every kind of organization",
        paragraphs: [
          "Every organization has a different reason to use AI. A nonprofit may need to stretch limited resources. A professional may need to research faster. An educator may need better ways to guide learning. A startup may need to move from idea to product faster. A business may need better discovery, operations, training, and decisions.",
          "The goal is not to make every organization use AI the same way. The goal is to give each one a clearer path to use AI well.",
        ],
        bullets: [
          "For nonprofits: organize research, draft program materials, support grant workflows.",
          "For professionals: move through research, documents, planning, and client-facing work with more structure.",
          "For education: support learning paths, product training, and clearer explanations.",
          "For startups: move faster across product planning, market research, and technical documentation.",
          "For businesses: improve productivity, customer experience, internal knowledge, and decision support.",
        ],
      },
      {
        id: "workspace",
        title: "UpcubeAI workspace for organizations",
        paragraphs: [
          "Ethen is the center of the UpcubeAI workspace experience. It is designed for chat, research, artifacts, governed tools, approvals, and execution.",
          "For organizations, that means continuity, reusable output, review points, and context close to the work.",
        ],
        bullets: [
          "Chat with continuity: keep context across threads and sessions.",
          "Research that stays connected with sources and grounded information.",
          "Artifacts for real output: plans, documents, code, summaries, and structured deliverables.",
          "Approvals for sensitive actions with clear checkpoints.",
        ],
      },
      {
        id: "university",
        title: "Upcube Education — upskill teams for the AI era",
        paragraphs: [
          "Organizations do not only need AI tools. They need AI fluency. Upcube Education is designed to support that learning direction.",
        ],
        bullets: [
          "AI education for understanding concepts, safe workflows, and responsible product thinking.",
          "Product training across the Upcube ecosystem.",
          "Technical courses for developers and technical teams.",
          "Guided learning paths from basics to deeper practical use.",
        ],
      },
      {
        id: "infrastructure",
        title: "Upcube Cloud and VM Compute",
        paragraphs: [
          "AI products need systems behind them. Upcube Cloud is the infrastructure destination. VM Compute extends that direction into virtual machines, networking, storage, and operations.",
        ],
        bullets: [
          "Compute workflows for systems that need more control and flexibility.",
          "Developer tools for a clearer path from product idea to infrastructure decisions.",
          "Scalable systems direction for understanding how product work connects to runtime infrastructure.",
        ],
      },
      {
        id: "commerce",
        title: "Upcube Commerce for commerce",
        paragraphs: [
          "Commerce teams face a simple but difficult problem: the more products they offer, the harder discovery becomes. Upcube Commerce is built for large-scale search, rich product pages, reviews, recommendations, and catalog architecture.",
        ],
        bullets: [
          "Search that keeps pace with large catalogs.",
          "Rich product pages for better decisions before the cart step.",
          "Recommendations with momentum to turn browsing into discovery.",
          "Catalog architecture for large-scale product structure and taxonomy.",
        ],
      },
      {
        id: "responsible",
        title: "Responsible organization-wide AI",
        paragraphs: [
          "As organizations use AI more deeply, trust becomes more important. People need to understand how AI is being used, what information may be involved, where human review is required, and what the system is allowed to do.",
        ],
        bullets: [
          "Visible actions: AI workflows should show what is happening.",
          "Scoped access: AI should request access based on the task, not assume broad permission.",
          "Review where it matters for sensitive or high-impact actions.",
          "Honest maturity: no enterprise certifications or compliance guarantees unless documented and reviewed.",
        ],
      },
    ],
    ctas: [
      { label: "Commitments", href: "/policy/ai-principles" },
      { label: "Building With Communities", href: "/policy/working-together" },
      { label: "Enterprise Overview", href: "/enterprise" },
    ],
  },
};

export const policyPageSlugs = Object.keys(
  policyPageContentBySlug,
) as PolicySlug[];

export function getPolicyPageBySlug(slug: string) {
  return policyPageContentBySlug[slug as PolicySlug] ?? null;
}
