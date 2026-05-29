import { UPCUBE_QUANTUM_URL } from "lib/upcube-universal/product-links";

export type UpcubeProductSlug =
  | "upcube-ai"
  | "avatar"
  | "books"
  | "earth"
  | "games"
  | "news"
  | "jobs"
  | "cloud"
  | "quantum"
  | "research"
  | "robotics"
  | "ventari"
  | "vm"
  | "upcube-os"
  | "upcube-mobile-os"
  | "voice"
  | "university";

export type ProductAction = {
  label: string;
  href: string;
};

export type ProductCard = {
  title: string;
  body: string;
};

export type ProductLinkCard = ProductCard & {
  href: string;
};

export type UpcubeProduct = {
  slug: UpcubeProductSlug;
  name: string;
  eyebrow: string;
  headline: string;
  summary: string;
  seoTitle?: string;
  seoDescription?: string;
  primaryAction: ProductAction;
  secondaryAction: ProductAction;
  heroHighlights: string[];
  heroImage?: { src: string; alt: string };
  availabilityNote?: string;
  signatureTitle: string;
  signatureBody: string;
  signatureCards: ProductCard[];
  featureStories: ProductCard[];
  techCards: ProductCard[];
  useCases: ProductCard[];
  ecosystemLinks: ProductLinkCard[];
  finalCtaTitle: string;
  finalCtaBody: string;
  finalPrimaryAction: ProductAction;
  finalSecondaryAction: ProductAction;
};

export const upcubeProducts: UpcubeProduct[] = [
  {
    slug: "upcube-ai",
    name: "UpcubeAI",
    eyebrow: "Ethen workspace",
    headline: "The AI workspace for clear, connected work.",
    summary:
      "UpcubeAI keeps powerful work focused, visible, and moving forward. It brings Ethen, chat, research, artifacts, governed tools, approvals, and workspace continuity into one calm, capable product experience.",
    seoTitle: "UpcubeAI | AI Workspace and Assistant Platform",
    seoDescription:
      "UpcubeAI is an AI workspace and assistant platform for chat, research, artifacts, approvals, and connected work across the Upcube ecosystem.",
    primaryAction: {
      label: "Launch UpcubeAI",
      href: "https://ethen.upcube.ai",
    },
    secondaryAction: {
      label: "See research",
      href: "/research",
    },
    heroHighlights: [
      "Ethen is built for daily work, deep questions, and multi-step tasks.",
      "Artifacts turn answers into reusable output.",
      "Approvals and tool controls keep every important action visible.",
    ],
    heroImage: {
      src: "/product-art/050b0e5fb4bd48bbb2c6a91baa3afc40_sw-2962_sh-2191.webp",
      alt: "Abstract modern composition representing AI-powered work.",
    },
    signatureTitle:
      "One workspace for thinking through the work — and moving it forward.",
    signatureBody:
      "UpcubeAI is for people who need more than a chat transcript. It gives every conversation a real workspace around it, keeping context, sources, tools, and outputs together instead of scattered across tabs.",
    signatureCards: [
      {
        title: "Chat with continuity",
        body: "Start with a question, refine the work, and return to the same thread without losing the shape of the task.",
      },
      {
        title: "Artifacts that last",
        body: "Turn live conversation into plans, documents, structured outputs, and deliverables you can keep using.",
      },
      {
        title: "Clear approvals",
        body: "When a workflow needs review, UpcubeAI makes the decision point visible, deliberate, and easy to understand.",
      },
    ],
    featureStories: [
      {
        title: "Research that stays with the answer",
        body: "UpcubeAI is built for grounded work, keeping research, sources, and context close to the response instead of turning them into a separate step.",
      },
      {
        title: "Tools that feel governed, not chaotic",
        body: "Tool use is designed with visibility, policies, and approvals, so automation stays useful, controlled, and understandable.",
      },
      {
        title: "A workspace that reaches beyond one surface",
        body: "UpcubeAI points beyond the browser, with continuity across web, CLI, desktop, mobile, and IDE workflows shaping the broader product direction.",
      },
    ],
    techCards: [
      {
        title: "Streaming answers",
        body: "Responses arrive as the work unfolds, making the experience feel immediate while still leaving room for careful review.",
      },
      {
        title: "Artifacts and memory of work",
        body: "Outputs become useful objects you can return to, not answers that disappear into a chat log.",
      },
      {
        title: "Approvals where they matter",
        body: "Sensitive actions are designed around clear checkpoints, keeping powerful workflows inspectable and trusted.",
      },
    ],
    useCases: [
      {
        title: "Turn a rough idea into a plan",
        body: "Use Ethen to shape an unclear task into milestones, open questions, and next actions while preserving the original context.",
      },
      {
        title: "Move from research to output",
        body: "Gather grounded context, synthesize what matters, and turn it into something ready to share, ship, or build from.",
      },
      {
        title: "Keep teams aligned on the work",
        body: "Bring prompts, artifacts, approvals, and follow-through into one workspace instead of spreading the task across disconnected tools.",
      },
    ],
    ecosystemLinks: [
      {
        title: "Upcube Books",
        body: "Carry reading, previews, and saved discovery paths into the same connected ecosystem.",
        href: "/products/books",
      },
      {
        title: "Upcube Earth",
        body: "Continue into 3D exploration, place search, and map-driven context.",
        href: "/products/earth",
      },
      {
        title: "Upcube Cloud",
        body: "Move from product work into developer tools, cloud workflows, and compute paths.",
        href: "/products/cloud",
      },
    ],
    finalCtaTitle: "Start with a prompt. Leave with something you can use.",
    finalCtaBody:
      "UpcubeAI is built to make serious AI work feel calm, visible, and ready to move forward.",
    finalPrimaryAction: {
      label: "Open UpcubeAI",
      href: "https://ethen.upcube.ai",
    },
    finalSecondaryAction: {
      label: "Explore products",
      href: "/explore",
    },
  },
  {
    slug: "avatar",
    name: "Upcube Avatar Cloud",
    eyebrow: "AI Avatars",
    headline: "AI avatars that speak, listen, and guide.",
    summary:
      "Upcube Avatar Cloud is a platform for creating and deploying AI avatars for websites, training, sales, education, support, and creators. Live avatars, studio video, interactive pages, and a developer API — fully managed.",
    seoTitle: "Upcube Avatar Cloud | AI Avatar Platform",
    seoDescription:
      "Upcube Avatar Cloud is an AI avatar platform for deploying conversational avatars, studio-generated avatar videos, interactive pages, and avatar API integrations.",
    primaryAction: {
      label: "Try Avatar",
      href: "https://avatar.upcube.ai",
    },
    secondaryAction: {
      label: "Explore UpcubeAI",
      href: "/products/upcube-ai",
    },
    heroHighlights: [
      "Deploy real-time conversational avatars on your website in minutes.",
      "Turn scripts, docs, and URLs into avatar-led videos with Studio.",
      "Interactive pages, embed SDK, and Avatar API for custom integrations.",
    ],
    heroImage: {
      src: "/product-art/050b0e5fb4bd48bbb2c6a91baa3afc40_sw-2962_sh-2191.webp",
      alt: "Abstract composition representing AI avatar interaction.",
    },
    availabilityNote:
      "Upcube Avatar Cloud is in active development. Live Avatar (Ethen) is functional with chat and TTS. Studio, Interactive Pages, and the full platform are in preview.",
    signatureTitle: "One platform for deploying AI avatars anywhere.",
    signatureBody:
      "Upcube Avatar Cloud brings live conversational avatars, studio-generated video, interactive pages, and a developer API into one managed platform. Deploy avatars that talk, listen, and guide — on your website, in training, for sales, and in support.",
    signatureCards: [
      {
        title: "Live Avatar",
        body: "Deploy real-time conversational avatars on your website. Visitors can talk to an AI avatar that answers questions, qualifies leads, books meetings, and hands off to your team.",
      },
      {
        title: "Studio",
        body: "Turn scripts, PDFs, URLs, and blog posts into avatar-led videos. Script-to-scene editor, captions, transcript, and hosted video pages — no recording required.",
      },
      {
        title: "Interactive Pages",
        body: "Each video becomes an interactive page with transcript, quiz, live avatar Q&A, lead capture, and analytics. Passive viewing becomes active engagement.",
      },
    ],
    featureStories: [
      {
        title: "Avatar API for custom integrations",
        body: "Personas, sessions, streaming, webhooks, and an embed SDK let you integrate AI avatars into your own products and platforms.",
      },
      {
        title: "Responsible by design",
        body: "Consent records, identity verification, data retention controls, and audit logs are built into the platform from the start. Moderation and governance are part of the architecture.",
      },
      {
        title: "Preview-first development",
        body: "The platform is in active development with a clear preview status. Ethen is functional today; Studio, Interactive Pages, and the full API surface are evolving toward production readiness.",
      },
    ],
    techCards: [
      {
        title: "Real-time conversational avatars",
        body: "Deploy avatars that use text chat and TTS voice. Visitors interact naturally without needing to install or configure anything.",
      },
      {
        title: "Studio video generation pipeline",
        body: "Script-to-scene, document-to-video, and URL-to-video workflows turn existing content into avatar-led video assets.",
      },
      {
        title: "Embed SDK and API",
        body: "Session tokens, webhooks, persona configuration, and streaming support give developers full control over avatar deployment and behavior.",
      },
    ],
    useCases: [
      {
        title: "Website Concierge",
        body: "Greet visitors, answer questions, qualify leads, and book meetings with a live AI avatar on your site.",
      },
      {
        title: "AI Sales Agent",
        body: "Engage prospects, explain products, handle objections, and route hot leads to your team.",
      },
      {
        title: "Training Coach",
        body: "Deliver interactive training, quiz learners, and track completion through avatar-led sessions.",
      },
      {
        title: "Product Demos",
        body: "Showcase your product with a live avatar that answers buyer questions in real time.",
      },
      {
        title: "Support Agent",
        body: "Resolve common issues, guide users through troubleshooting, and escalate to humans.",
      },
      {
        title: "Ecommerce Assistant",
        body: "Recommend products, compare options, and help shoppers find what they need.",
      },
    ],
    ecosystemLinks: [
      {
        title: "UpcubeAI",
        body: "Connect avatar interactions to the broader AI workspace and assistant platform.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Voice",
        body: "Explore the voice platform direction that powers avatar speech and real-time conversation.",
        href: "/products/voice",
      },
      {
        title: "Upcube Research",
        body: "See how research, synthesis, and briefs feed into avatar knowledge and responses.",
        href: "/products/research",
      },
    ],
    finalCtaTitle:
      "Deploy AI avatars that feel alive from the first interaction.",
    finalCtaBody:
      "Upcube Avatar Cloud is in active development. Live Ethen avatars are functional today. Studio, Interactive Pages, and the full platform are evolving toward production readiness.",
    finalPrimaryAction: {
      label: "Try Avatar",
      href: "https://avatar.upcube.ai",
    },
    finalSecondaryAction: {
      label: "Explore the ecosystem",
      href: "/explore",
    },
  },
  {
    slug: "books",
    name: "Upcube Books",
    eyebrow: "Reading and discovery",
    headline: "Explore 50M books with a calmer path to discovery.",
    summary:
      "Upcube Books makes book discovery feel focused, trusted, and worth returning to. Search across 50M titles with cleaner book pages, trusted previews, saved books, public-domain reading lanes, and an AI-assisted reading direction designed around lawful access and reader trust.",
    seoTitle: "Upcube Books | 50M Books — Discovery and AI Reading Platform",
    seoDescription:
      "Upcube Books is a book discovery platform across 50M titles for previews, saved reading paths, lawful access, and future reading guidance.",
    primaryAction: {
      label: "Launch Upcube Books",
      href: "https://books.upcube.ai",
    },
    secondaryAction: {
      label: "Browse the ecosystem",
      href: "/explore",
    },
    heroHighlights: [
      "Explore 50M books with fast search and cleaner detail pages.",
      "Open trusted previews instead of dead-end metadata.",
      "Save books locally so discovery feels persistent without requiring an account.",
    ],
    heroImage: {
      src: "/product-art/1998-Despues-de-Montanas-y-Mar-.webp",
      alt: "Color-rich abstract painting for Upcube Books discovery.",
    },
    signatureTitle: "Book discovery that feels curated, not crowded.",
    signatureBody:
      "Upcube Books is built for the moment before commitment — when you are comparing titles, opening previews, saving possibilities, and finding something worth coming back to.",
    signatureCards: [
      {
        title: "Discovery with momentum",
        body: "Browse titles, covers, descriptions, and metadata in a way that keeps the next useful action close.",
      },
      {
        title: "Trusted previews",
        body: "Preview paths lead readers to legal, provider-backed destinations, keeping discovery useful without blurring copyright boundaries.",
      },
      {
        title: "Saved books that stay close",
        body: "Browser-local saves make it easy to build a shortlist, return to titles, and keep reading intent alive.",
      },
    ],
    featureStories: [
      {
        title: "Rich book pages built for real comparison",
        body: "Upcube Books brings together metadata, covers, descriptions, and preview links so readers can decide whether a book deserves more time.",
      },
      {
        title: "Public-domain lanes with clearer rights boundaries",
        body: "When public-domain access is available, Upcube Books can create a more direct reading path while keeping copyrighted works preview- and provider-linked.",
      },
      {
        title: "AI-assisted reading, introduced carefully",
        body: "The long-term direction includes reading guidance, summaries, study help, and research workflows — but the foundation begins with strong discovery, lawful access, and trust.",
      },
    ],
    techCards: [
      {
        title: "Provider-aware metadata",
        body: "Book pages are designed to stay useful whether provider keys are configured or the experience needs graceful fallback states.",
      },
      {
        title: "Fast public storefront behavior",
        body: "The reading experience is meant to feel open, lightweight, and accessible before any account system enters the story.",
      },
      {
        title: "Local saves, simple by design",
        body: "Saved books can stay in the browser, giving readers continuity without turning discovery into account management.",
      },
    ],
    useCases: [
      {
        title: "Find a title worth opening tonight",
        body: "Search for a book, scan what matters, and move into a trusted preview path in just a few steps.",
      },
      {
        title: "Build a reading list as you browse",
        body: "Save promising titles without interrupting discovery or forcing an early sign-up wall.",
      },
      {
        title: "Move from discovery to deeper reading",
        body: "Use public-domain lanes and trusted preview links to make the path from browsing to reading feel straightforward.",
      },
    ],
    ecosystemLinks: [
      {
        title: "UpcubeAI",
        body: "Carry research, summaries, notes, and reading-related work into a broader AI workspace.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Jobs",
        body: "Connect publishing, hiring, and content workflows across the same ecosystem.",
        href: "/products/jobs",
      },
      {
        title: "Upcube Commerce",
        body: "See how discovery patterns translate into large-scale commerce and product search.",
        href: "/products/ventari",
      },
    ],
    finalCtaTitle: "Make discovering books feel worth the time again.",
    finalCtaBody:
      "Upcube Books is built for readers who want clearer search, trusted previews, saved titles, and a smoother path back to what caught their attention.",
    finalPrimaryAction: {
      label: "Open Upcube Books",
      href: "https://books.upcube.ai",
    },
    finalSecondaryAction: {
      label: "View all products",
      href: "/explore",
    },
  },
  {
    slug: "earth",
    name: "Upcube Earth",
    eyebrow: "3D Earth and spatial intelligence",
    headline: "Explore the planet in deeper detail.",
    summary:
      "Upcube Earth turns the map into an immersive discovery experience. Explore terrain, cities, overlays, search, and shareable views through a spatial product built to make the world feel clearer, richer, and easier to understand.",
    seoTitle: "Upcube Earth | 3D Globe and Spatial Intelligence Platform",
    seoDescription:
      "Upcube Earth is a 3D globe and spatial intelligence platform for exploration, terrain, city context, search, overlays, and shareable views.",
    primaryAction: {
      label: "Launch Upcube Earth",
      href: "https://planet.upcube.ai",
    },
    secondaryAction: {
      label: "See the ecosystem",
      href: "/explore",
    },
    heroHighlights: [
      "Move from a place name to a mapped view in seconds.",
      "See terrain, cities, and layers with greater visual depth.",
      "Use overlays and shareable views to preserve geographic context.",
    ],
    heroImage: {
      src: "/product-art/FAA_starrry_night.jpg",
      alt: "Starry abstract landscape representing global exploration.",
    },
    signatureTitle:
      "Spatial exploration that feels immersive from the first movement.",
    signatureBody:
      "Upcube Earth is designed to make the world feel explorable, not flat. The experience centers on a high-clarity 3D globe that helps people move between search, terrain, overlays, and visual context without losing orientation.",
    signatureCards: [
      {
        title: "3D Earth at the center",
        body: "The globe becomes the interface, creating a more natural way to move through cities, regions, landscapes, and terrain.",
      },
      {
        title: "Search that lands with context",
        body: "Location search does more than move the camera. It brings you into a view that feels worth staying in.",
      },
      {
        title: "Overlays that add meaning",
        body: "Layered context helps people understand what they are seeing, turning maps from a static background into a living surface for discovery.",
      },
    ],
    featureStories: [
      {
        title: "Terrain and elevation that change how a place feels",
        body: "Richer topography makes mountains, coastlines, valleys, city edges, and natural boundaries feel more legible in motion.",
      },
      {
        title: "Cities, layers, and spatial detail in one view",
        body: "Upcube Earth brings imagery, 3D context, and map layers together in one experience instead of forcing each mode into a separate tool.",
      },
      {
        title: "Spatial intelligence with visual calm",
        body: "Search, overlays, and provider-backed data deepen exploration while keeping the interface clean, focused, and inviting.",
      },
    ],
    techCards: [
      {
        title: "Provider-backed map layers",
        body: "Earth is designed around configurable map providers while keeping attribution and data boundaries visible.",
      },
      {
        title: "3D terrain and city context",
        body: "Elevation, terrain, and urban detail help places feel real instead of abstract.",
      },
      {
        title: "Shareable views",
        body: "Meaningful perspectives can be saved and shared, turning exploration into something others can understand instantly.",
      },
    ],
    useCases: [
      {
        title: "Search a city and settle into the view",
        body: "Move from a quick search into a perspective that gives you a stronger sense of the surrounding place.",
      },
      {
        title: "Compare terrain, neighborhoods, and layers",
        body: "Use the 3D view to understand how elevation, geography, and overlays shape a region.",
      },
      {
        title: "Share a location with more context",
        body: "Pass along a view that captures why a place matters, not just where it is.",
      },
    ],
    ecosystemLinks: [
      {
        title: "UpcubeAI",
        body: "Bring place-based exploration into research, writing, planning, and decision-making workflows.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Cloud",
        body: "Extend spatial products with developer tools, cloud workflows, and infrastructure support.",
        href: "/products/cloud",
      },
      {
        title: "Cloud VM",
        body: "Explore the cloud compute layer behind scalable geospatial services and spatial workloads.",
        href: "/products/vm",
      },
    ],
    finalCtaTitle: "Step into a more immersive view of the world.",
    finalCtaBody:
      "Upcube Earth is built for people who want richer spatial context, cleaner exploration, and a map experience that rewards curiosity.",
    finalPrimaryAction: {
      label: "Open Upcube Earth",
      href: "https://planet.upcube.ai",
    },
    finalSecondaryAction: {
      label: "Explore related products",
      href: "/explore",
    },
  },
  {
    slug: "games",
    name: "Upcube Games",
    eyebrow: "Game discovery",
    headline: "Discover across 400K games with clarity and momentum.",
    summary:
      "Upcube Games makes finding what to play next feel faster, cleaner, and more intentional. Explore 400K games across releases, genres, platforms, studios, franchises, search, and recommendations — all shaped into a polished discovery product for players who want less noise and better direction.",
    seoTitle: "Upcube Games | 400K Games — Video Game Discovery Platform",
    seoDescription:
      "Upcube Games is a video game discovery platform across 400K games for releases, genres, platforms, studios, franchises, and recommendation paths.",
    primaryAction: {
      label: "Launch Upcube Games",
      href: "https://games.upcube.ai",
    },
    secondaryAction: {
      label: "Browse the ecosystem",
      href: "/explore",
    },
    heroHighlights: [
      "Discover across 400K games without digging through clutter.",
      "Browse by platform, genre, studio, and franchise.",
      "Use recommendations to keep moving instead of starting over.",
    ],
    heroImage: {
      src: "/product-art/C-1-2016-024-Alien-Copy.jpeg",
      alt: "Surreal alien-inspired artwork for Upcube Games.",
    },
    signatureTitle:
      "Game discovery organized around how players actually choose.",
    signatureBody:
      "Upcube Games is built to make searching, browsing, and comparing games feel calmer and more useful. The product starts with the question every player knows: what should I play next?",
    signatureCards: [
      {
        title: "Find what to play next",
        body: "Move between top games, new releases, and upcoming launches without losing the thread of what caught your interest.",
      },
      {
        title: "Browse by platform, genre, studio, and franchise",
        body: "Explore the catalog through the categories players already use to make decisions.",
      },
      {
        title: "Launch into cleaner game discovery",
        body: "A focused layout makes the directory feel like a product you want to use — not a database you have to fight through.",
      },
    ],
    featureStories: [
      {
        title: "Search that understands how games are described",
        body: "Upcube Games is designed around titles, platforms, genres, studios, and franchises, so discovery starts with the language players already use.",
      },
      {
        title: "Game pages with the right context nearby",
        body: "Summaries, release details, ratings, platforms, and related titles help each page feel useful, decisive, and worth exploring.",
      },
      {
        title: "Recommendations that keep discovery moving",
        body: "Rule-based recommendation paths create momentum even before deeper personalization enters the experience.",
      },
    ],
    techCards: [
      {
        title: "Live metadata, server-side access",
        body: "Upcube Games is built around live game data while keeping provider credentials and upstream logic protected on the server side.",
      },
      {
        title: "Genre, platform, and franchise structure",
        body: "Strong directory organization makes it easier to browse broadly, narrow quickly, and follow the path that fits your taste.",
      },
      {
        title: "Graceful fallback behavior",
        body: "When upstream configuration is missing, the product direction favors clear fallback states over empty or confusing surfaces.",
      },
    ],
    useCases: [
      {
        title: "Jump from curiosity to a shortlist",
        body: "Compare top games, upcoming releases, and similar titles until the next play session feels obvious.",
      },
      {
        title: "Browse the way players think",
        body: "Start with a platform, genre, studio, or franchise, then follow the trail from there.",
      },
      {
        title: "Use recommendations as momentum, not distraction",
        body: "Keep moving through related games without losing the shape of what you were looking for.",
      },
    ],
    ecosystemLinks: [
      {
        title: "UpcubeAI",
        body: "Bring discovery notes, comparisons, lists, and game research into a broader AI workspace.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Cloud",
        body: "Connect product, content, and developer workflows across the same ecosystem.",
        href: "/products/cloud",
      },
      {
        title: "Upcube Jobs",
        body: "Explore how product, hiring, publishing, and entertainment discovery meet inside Upcube.",
        href: "/products/jobs",
      },
    ],
    finalCtaTitle: "Your next game should be easier to find.",
    finalCtaBody:
      "Upcube Games is built to make discovery feel timely, organized, and surprisingly smooth.",
    finalPrimaryAction: {
      label: "Open Upcube Games",
      href: "https://games.upcube.ai",
    },
    finalSecondaryAction: {
      label: "Explore more products",
      href: "/explore",
    },
  },
  {
    slug: "news",
    name: "Upcube News",
    eyebrow: "News intelligence",
    headline: "A live editorial app for AI-era news discovery.",
    summary:
      "Upcube News brings live news intelligence, AI-powered summaries, topic discovery, source-linked stories, and briefing-style layouts into a focused editorial app. Designed for people who want to stay informed across AI, technology, and global topics through discovery, aggregation, and clear briefing navigation.",
    seoTitle: "Upcube News | Live News Intelligence and AI-Powered Discovery",
    seoDescription:
      "Upcube News is a live news intelligence app for AI-powered summaries, topic discovery, source-linked stories, briefing-style layouts, and category-based navigation.",
    primaryAction: {
      label: "Launch Upcube News",
      href: "https://news.upcube.ai",
    },
    secondaryAction: {
      label: "Read launch story",
      href: "/news/upcube-news-launch",
    },
    heroHighlights: [
      "Live news discovery with AI-powered summaries and source-linked stories.",
      "Topic and category navigation for focused browsing across technology, science, business, and global news.",
      "Briefing-style layouts designed for staying informed efficiently.",
    ],
    heroImage: {
      src: "/product-art/COMPOSITION-VII.jpg",
      alt: "Abstract composition representing news intelligence and information flow.",
    },
    signatureTitle: "News discovery organized around what matters.",
    signatureBody:
      "Upcube News is built for people who want to stay informed without drowning in noise. It combines live news discovery, AI-generated summaries, topic navigation, and a briefing-style layout into a clean reading experience.",
    signatureCards: [
      {
        title: "Live news discovery",
        body: "Stay current with source-linked stories across AI, technology, science, business, and global topics — updated from live feeds.",
      },
      {
        title: "AI-powered summaries",
        body: "Quickly understand key points through concise, AI-generated summaries that surface what matters in each story.",
      },
      {
        title: "Topic and category navigation",
        body: "Browse by topic, category, or source type so you can focus on the areas most relevant to you.",
      },
    ],
    featureStories: [
      {
        title: "Briefing-style homepage",
        body: "The homepage is designed as a daily briefing surface — organized, scannable, and built for people who want to stay informed quickly.",
      },
      {
        title: "Source-linked stories with transparency",
        body: "Every story links back to the original source, keeping discovery transparent and grounded in its origins.",
      },
      {
        title: "AI and technology focus",
        body: "Upcube News prioritizes AI, technology, and science coverage, with categories that make it easy to follow the topics shaping the next decade.",
      },
    ],
    techCards: [
      {
        title: "Live feed aggregation",
        body: "News content is aggregated from live provider feeds using discovery and aggregation patterns — not original reporting.",
      },
      {
        title: "AI summary generation",
        body: "Stories are summarized to help readers decide what to read next. Summaries are generated from source content, not original editorial.",
      },
      {
        title: "Category and topic systems",
        body: "Structured navigation helps readers move through categories and topics without losing the broader news context.",
      },
    ],
    useCases: [
      {
        title: "Stay informed on AI and technology",
        body: "Follow AI, technology, and science stories from multiple sources in one focused briefing surface.",
      },
      {
        title: "Scan quickly, read what matters",
        body: "Use summaries and headlines to move through the day's news efficiently, then dive deeper into the stories that deserve your attention.",
      },
      {
        title: "Explore topics across disciplines",
        body: "Browse categories from business to science to global news, following the topics that intersect with your work and interests.",
      },
    ],
    ecosystemLinks: [
      {
        title: "UpcubeAI",
        body: "Carry news research, summaries, and topic context into the broader AI workspace.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Books",
        body: "Move from news discovery into deeper reading and knowledge exploration.",
        href: "/products/books",
      },
      {
        title: "Upcube Earth",
        body: "Connect news stories to geographic context and spatial exploration.",
        href: "/products/earth",
      },
    ],
    finalCtaTitle: "Stay informed with clarity, not clutter.",
    finalCtaBody:
      "Upcube News is built for live news discovery, AI summaries, and briefing-style reading — positioned as discovery and aggregation, not original reporting.",
    finalPrimaryAction: {
      label: "Launch Upcube News",
      href: "https://news.upcube.ai",
    },
    finalSecondaryAction: {
      label: "Read the launch story",
      href: "/news/upcube-news-launch",
    },
  },
  {
    slug: "jobs",
    name: "Upcube Jobs",
    eyebrow: "Hiring and role discovery",
    headline: "Browse 8M jobs with a clearer path to opportunity.",
    summary:
      "Upcube Jobs makes career discovery feel organized, direct, and worth returning to. Explore an 8M-job discovery surface designed to help people move from role discovery to the next meaningful step in their career.",
    seoTitle: "Upcube Jobs | 8M Jobs — AI Job Discovery and Career Platform",
    seoDescription:
      "Upcube Jobs is an AI job discovery and career platform with an 8M-job discovery surface for clearer opportunity browsing, role context, and connected ecosystem workflows.",
    primaryAction: {
      label: "Launch Upcube Jobs",
      href: "https://jobs.upcube.ai",
    },
    secondaryAction: {
      label: "Explore the ecosystem",
      href: "/explore",
    },
    heroHighlights: [
      "Browse 8M jobs with focused role discovery.",
      "Explore opportunities with product and company context nearby.",
      "Move through a direct hiring destination already connected across the Upcube portal.",
    ],
    heroImage: {
      src: "/product-art/065d0e64a3514880bf2398126d0bcdca_sw-3815_sh-2501.webp",
      alt: "Dynamic geometric artwork representing career motion.",
    },
    signatureTitle: "Opportunity discovery, made clearer.",
    signatureBody:
      "Upcube Jobs is built as a polished hiring destination for exploring roles across the broader Upcube ecosystem — direct, focused, and easy to return to.",
    signatureCards: [
      {
        title: "Discover roles with less friction",
        body: "Move from curiosity to a role worth opening without unnecessary clutter or dead ends.",
      },
      {
        title: "Stay close to the broader ecosystem",
        body: "Jobs lives beside the rest of the Upcube product family, making company direction, product context, and platform ambition easier to understand.",
      },
      {
        title: "Built to feel direct",
        body: "A strong hiring destination gets out of the way and helps people decide whether a role deserves more attention.",
      },
    ],
    featureStories: [
      {
        title: "Role discovery that feels intentional",
        body: "Upcube Jobs gives hiring its own dedicated destination instead of hiding opportunities behind generic company pages.",
      },
      {
        title: "Cleaner pathways into openings",
        body: "The product direction favors clear navigation from discovery into role detail, context, and next-step evaluation.",
      },
      {
        title: "Part of a connected product story",
        body: "Hiring stays visibly connected to the products, research, and execution surfaces that define the Upcube ecosystem.",
      },
    ],
    techCards: [
      {
        title: "Dedicated jobs destination",
        body: "The live jobs surface gives hiring a clearer home than a single careers page buried inside a broader company site.",
      },
      {
        title: "Connected navigation",
        body: "Jobs can stay linked to company, product, and trust surfaces without diluting the hiring experience itself.",
      },
      {
        title: "Neutral public positioning",
        body: "The public story stays practical: role discovery, company context, and next-step confidence.",
      },
    ],
    useCases: [
      {
        title: "Scan for roles that fit the moment",
        body: "Start broad, move quickly, and narrow attention to roles aligned with your next step.",
      },
      {
        title: "Understand the company through the products",
        body: "Use the surrounding ecosystem pages to connect a role with the work behind it.",
      },
      {
        title: "Return to openings with less context loss",
        body: "A dedicated destination makes it easier to come back when timing, priorities, or focus changes.",
      },
    ],
    ecosystemLinks: [
      {
        title: "UpcubeAI",
        body: "Explore the core AI workspace behind the ecosystem.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Cloud",
        body: "Follow the developer, infrastructure, and platform stories connected to the product family.",
        href: "/products/cloud",
      },
      {
        title: "Upcube OS",
        body: "See the longer-range computing vision shaping where the ecosystem can go next.",
        href: "/products/upcube-os",
      },
    ],
    finalCtaTitle: "Make the next opportunity easier to spot.",
    finalCtaBody:
      "Upcube Jobs is positioned as a cleaner, more direct way to explore roles across the Upcube ecosystem.",
    finalPrimaryAction: {
      label: "Open Upcube Jobs",
      href: "https://jobs.upcube.ai",
    },
    finalSecondaryAction: {
      label: "Read about Upcube",
      href: "/company",
    },
  },
  {
    slug: "cloud",
    name: "Upcube Cloud",
    eyebrow: "Compute and developer infrastructure",
    headline: "Cloud infrastructure, made easier to understand.",
    summary:
      "Upcube Cloud gives compute, storage, networking, and developer workflows a clearer front door. It is the cloud and infrastructure destination for the Upcube ecosystem — built to make serious systems feel more approachable, connected, and ready to scale.",
    seoTitle: "Upcube Cloud | AI Cloud Infrastructure Platform",
    seoDescription:
      "Upcube Cloud is an AI cloud infrastructure platform for developer tools, cloud workflows, compute access, and scalable systems across Upcube.",
    primaryAction: {
      label: "Launch Upcube Cloud",
      href: "https://cloud.upcube.ai",
    },
    secondaryAction: {
      label: "Explore Cloud VMs",
      href: "/products/vm",
    },
    heroHighlights: [
      "A clearer entry point for developer and cloud workflows.",
      "A product story that makes infrastructure easier to grasp.",
      "Direct paths into compute-heavy products like Cloud VMs.",
    ],
    heroImage: {
      src: "/product-art/42333816071_33313e0909_b.jpg",
      alt: "Layered abstract forms representing cloud infrastructure.",
    },
    signatureTitle: "A cleaner front door to the Upcube infrastructure story.",
    signatureBody:
      "Upcube Cloud brings developer tools, cloud workflows, compute, storage, networking, and infrastructure products into one focused destination. It is designed to feel approachable without hiding the complexity that real systems need underneath.",
    signatureCards: [
      {
        title: "Compute with clearer language",
        body: "Infrastructure should feel understandable from the first page — explained in product terms people can follow, not only in operator shorthand.",
      },
      {
        title: "Storage and networking in context",
        body: "The building blocks of modern systems are presented as connected parts of one experience, not a scattered list of acronyms.",
      },
      {
        title: "A destination for scalable systems",
        body: "Upcube Cloud is positioned as the place where developer workflows, infrastructure paths, and the broader product ecosystem meet.",
      },
    ],
    featureStories: [
      {
        title: "Compute that feels usable from the outside",
        body: "The public product story starts with clear entry points for virtual machines, runtime workflows, and cloud operations.",
      },
      {
        title: "Storage, networking, and systems that belong together",
        body: "A serious cloud product connects disk, network, identity, workload movement, and deployment into one coherent platform story.",
      },
      {
        title: "Built for teams moving from product to infrastructure",
        body: "Upcube Cloud is designed to sit naturally beside UpcubeAI and Upcube Commerce as the systems layer behind the ecosystem.",
      },
    ],
    techCards: [
      {
        title: "Compute systems",
        body: "Virtual machines, runtime workflows, and control-plane direction shape the deeper compute story without turning the public page into internal architecture notes.",
      },
      {
        title: "Networking and storage, made legible",
        body: "Core infrastructure concepts are presented clearly enough to follow without oversimplifying what they do.",
      },
      {
        title: "Scalable systems language",
        body: "The page speaks to both technical and business audiences — helping them understand what the platform supports today and where it can grow next.",
      },
    ],
    useCases: [
      {
        title: "Launch a new system with less friction",
        body: "Move from product idea into compute, storage, and network decisions without leaving the Upcube ecosystem.",
      },
      {
        title: "Give teams a clearer cloud entry point",
        body: "Use one destination to explain the infrastructure story behind the products they already know.",
      },
      {
        title: "Connect build work to runtime reality",
        body: "Keep developer momentum while showing where scalable systems actually live, operate, and grow.",
      },
    ],
    ecosystemLinks: [
      {
        title: "Cloud VM",
        body: "Go deeper into virtual machines, networking, storage, and compute workflows.",
        href: "/products/vm",
      },
      {
        title: "UpcubeAI",
        body: "Connect infrastructure to the AI workspace and execution layer of the ecosystem.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Commerce",
        body: "See how cloud infrastructure supports large-scale commerce search, catalog systems, and product discovery.",
        href: "/products/ventari",
      },
    ],
    finalCtaTitle: "Build on a clearer foundation.",
    finalCtaBody:
      "Upcube Cloud is designed to make infrastructure feel more understandable, more connected, and more useful across the entire Upcube ecosystem.",
    finalPrimaryAction: {
      label: "Open Upcube Cloud",
      href: "https://cloud.upcube.ai",
    },
    finalSecondaryAction: {
      label: "Explore Cloud VMs",
      href: "/products/vm",
    },
  },
  {
    slug: "quantum",
    name: "Upcube Quantum",
    eyebrow: "Future Computing",
    headline: "Quantum computing, made simple.",
    summary:
      "Upcube Quantum makes quantum computing easier to understand, explore, and use. Run guided experiments, see results visually, and learn complex ideas through a clear workspace built for discovery.",
    seoTitle: "Upcube Quantum | Quantum Computing Made Simple",
    seoDescription:
      "Upcube Quantum is a beginner-friendly quantum computing workspace for guided experiments, visual runs, templates, and clear result charts.",
    primaryAction: {
      label: "Launch Quantum",
      href: UPCUBE_QUANTUM_URL,
    },
    secondaryAction: {
      label: "See research",
      href: "/research",
    },
    heroHighlights: [
      "Explore quantum ideas without complex setup.",
      "Run guided experiments and see results clearly.",
      "Built for learning, research, and future computing workflows.",
    ],
    heroImage: {
      src: "/product-art/19487.webp",
      alt: "Abstract light composition representing premium quantum exploration.",
    },
    signatureTitle: "A clearer way to explore quantum systems.",
    signatureBody:
      "Quantum computing can feel distant and difficult to approach. Upcube Quantum turns it into a guided workspace where experiments, templates, visual results, and learning paths come together in one calm experience.",
    signatureCards: [
      {
        title: "Guided from the first step",
        body: "Start with structured examples that help make quantum concepts easier to see, test, and understand.",
      },
      {
        title: "Results that feel readable",
        body: "Visual outputs and clear result views help turn abstract ideas into something easier to compare.",
      },
      {
        title: "Built for learning by doing",
        body: "Templates and guided runs help people build intuition without starting from a blank console.",
      },
    ],
    featureStories: [
      {
        title: "Experiments without the heavy setup",
        body: "Upcube Quantum keeps the experience focused on exploration, so people can start learning before they become experts.",
      },
      {
        title: "Templates that make ideas approachable",
        body: "Prepared workflows give learners and builders a practical starting point for common quantum concepts.",
      },
      {
        title: "A console for future computing",
        body: "The product direction brings quantum exploration into a clearer workspace for research, learning, and experimentation.",
      },
    ],
    techCards: [
      {
        title: "Simulator-first exploration",
        body: "Start with accessible experiments designed to help people understand behavior before moving into deeper technical workflows.",
      },
      {
        title: "Visual result views",
        body: "Charts and structured outputs make runs easier to read, compare, and explain.",
      },
      {
        title: "Clear paths into deeper work",
        body: "Docs, templates, and console flows keep advanced ideas available without overwhelming the first experience.",
      },
    ],
    useCases: [
      {
        title: "Learn quantum by doing",
        body: "Use guided examples to build intuition through action instead of passive reading.",
      },
      {
        title: "Explore before building",
        body: "Test ideas visually before moving into more complex workflows.",
      },
      {
        title: "Support research and education",
        body: "Use Quantum as a starting point for teaching, experimentation, and early-stage discovery.",
      },
    ],
    ecosystemLinks: [
      {
        title: "UpcubeAI",
        body: "Connect exploration with the assistant workspace for broader research workflows.",
        href: "/products/upcube-ai",
      },
      {
        title: "Education",
        body: "Explore learning pathways connected to guided coursework and applied study.",
        href: "/products/university",
      },
      {
        title: "Cloud VM",
        body: "Follow the infrastructure lane that supports deeper compute thinking.",
        href: "/products/vm",
      },
    ],
    finalCtaTitle: "Start exploring the next layer of computing.",
    finalCtaBody:
      "Upcube Quantum is built to make complex ideas feel clearer, calmer, and easier to explore.",
    finalPrimaryAction: {
      label: "Launch Quantum",
      href: UPCUBE_QUANTUM_URL,
    },
    finalSecondaryAction: {
      label: "Try a template",
      href: "https://quantum.upcube.ai/console/templates",
    },
  },
  {
    slug: "research",
    name: "Upcube Research",
    eyebrow: "Research & web intelligence",
    headline:
      "Turn the open web into structured research, cited answers, and reusable intelligence.",
    summary:
      "Upcube Research helps you search across the web, collect trusted sources, synthesize findings, monitor changing topics, and export research into briefs, reports, datasets, workflows, and projects.",
    seoTitle: "Upcube Research | AI-Native Research Console",
    seoDescription:
      "Upcube Research is an AI-native research console for searching the web, extracting sources, organizing evidence, synthesizing findings, monitoring topics, and exporting briefs, reports, and datasets across the Upcube ecosystem.",
    primaryAction: {
      label: "Open Research",
      href: "https://research.upcube.ai",
    },
    secondaryAction: {
      label: "Explore Upcube AI",
      href: "/products/upcube-ai",
    },
    heroHighlights: [
      "Search and gather sources from across the web.",
      "Extract clean page content, summaries, and citations.",
      "Run deeper research workflows across topics, companies, markets, and questions.",
    ],
    heroImage: {
      src: "/product-art/050b0e5fb4bd48bbb2c6a91baa3afc40_sw-2962_sh-2191.webp",
      alt: "Abstract composition representing research and web intelligence.",
    },
    availabilityNote:
      "Upcube Research is in product preview. The platform direction is under active development.",
    signatureTitle: "Built for research that does not stop at search.",
    signatureBody:
      "Search gives you links. Upcube Research gives you a working research system. It helps you discover sources, extract clean content, compare evidence, and build structured outputs that can be checked, shared, and reused.",
    signatureCards: [
      {
        title: "Discover relevant sources",
        body: "Search the web with research intent and collect the sources that matter most to your question, topic, or project.",
      },
      {
        title: "Understand and compare evidence",
        body: "Extract clean content, compare what each source says, and build a clear picture from multiple perspectives and data points.",
      },
      {
        title: "Turn research into reusable output",
        body: "Synthesize findings into briefs, reports, tables, and datasets — structured work you can export, share, and build on.",
      },
    ],
    featureStories: [
      {
        title: "AI web search with research intent",
        body: "Search across web sources designed around research, not just keywords. Find relevant pages, articles, and public documents more efficiently.",
      },
      {
        title: "Source collection and content extraction",
        body: "Save links, extract clean page content, and keep citations and evidence organized in projects that preserve the shape of your inquiry.",
      },
      {
        title: "Exportable outputs for real decisions",
        body: "Turn findings into briefs, reports, tables, datasets, and workflow inputs — outputs that carry weight and move your work forward.",
      },
    ],
    techCards: [
      {
        title: "Project-based research workspace",
        body: "Every research question becomes a project where sources, notes, extracted content, briefs, and citations stay organized and accessible.",
      },
      {
        title: "Monitor-ready research workflows",
        body: "Designed to help track topics, companies, competitors, and market signals over time — so research surfaces what changed when it matters.",
      },
      {
        title: "Export and ecosystem pipeline",
        body: "Briefs, reports, and curated findings can be exported or routed into other Upcube products for further synthesis, publishing, or execution.",
      },
    ],
    useCases: [
      {
        title: "Market and competitive research",
        body: "Track companies, competitors, and market shifts with source-backed evidence and structured briefs that make the landscape easier to understand.",
      },
      {
        title: "Product and content research",
        body: "Research features, positioning, trends, and audience needs — then turn findings into reports, specs, and content briefs.",
      },
      {
        title: "Knowledge building and synthesis",
        body: "Collect sources across topics, compare findings, and build a growing knowledge base of evidence-backed briefs and reusable research assets.",
      },
    ],
    ecosystemLinks: [
      {
        title: "UpcubeAI",
        body: "Carry research findings into Ethen conversations, artifacts, and workspace workflows.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Avatar Cloud",
        body: "Route research briefs and synthesized knowledge into Avatar knowledge bases and intelligent responses.",
        href: "/products/avatar",
      },
      {
        title: "Upcube Books",
        body: "Connect research discovery with book previews, reading paths, and deeper source exploration.",
        href: "/products/books",
      },
    ],
    finalCtaTitle: "Start with a question. Leave with a research asset.",
    finalCtaBody:
      "Open a research workspace, gather sources, synthesize the evidence, and turn what you learn into something you can save, share, export, or build on.",
    finalPrimaryAction: {
      label: "Open Research",
      href: "https://research.upcube.ai",
    },
    finalSecondaryAction: {
      label: "Explore Upcube AI",
      href: "/products/upcube-ai",
    },
  },
  {
    slug: "robotics",
    name: "Upcube Robotics",
    eyebrow: "Future Platforms",
    headline: "Understand every mission.",
    summary:
      "Upcube Robotics gives teams a clearer way to operate robot fleets, replay missions, investigate incidents, and turn robot activity into reviewable evidence.",
    seoTitle: "Robotics | UpcubeAI",
    seoDescription:
      "Upcube Robotics helps teams replay robot missions, observe fleets, investigate incidents, and create audit-ready evidence.",
    primaryAction: {
      label: "Explore Robotics",
      href: "#overview",
    },
    secondaryAction: {
      label: "View product overview",
      href: "#features",
    },
    heroHighlights: [
      "Replay robot missions as clear timelines.",
      "Turn incidents into reviewable evidence.",
      "Observe fleet status from one focused view.",
    ],
    signatureTitle: "Built for robot operations.",
    signatureBody:
      "Robots generate a stream of commands, sensor events, pauses, handoffs, errors, policy checks, and operator decisions. Robotics turns that activity into a clear mission timeline your team can understand.",
    signatureCards: [
      {
        title: "See every mission as a timeline",
        body: "Commands, sensor events, pauses, handoffs, blocked actions, and operator decisions come together in one clear replayable view.",
      },
      {
        title: "When something goes wrong, keep the evidence",
        body: "Turn failures, stops, safety blocks, and handoff issues into structured evidence your team can review, share, and trust.",
      },
      {
        title: "A clearer view across the fleet",
        body: "Track robot status, mission progress, exceptions, and operational patterns from one focused interface.",
      },
    ],
    featureStories: [
      {
        title: "See every mission as a timeline",
        body: "Commands, sensor events, pauses, handoffs, blocked actions, and operator decisions come together in one clear replayable view.",
      },
      {
        title: "Incident evidence that stays organized",
        body: "Turn failures, stops, safety blocks, and handoff issues into structured evidence your team can review, share, and trust.",
      },
      {
        title: "Fleet observability across the operation",
        body: "Track robot status, mission progress, exceptions, and operational patterns from one focused interface.",
      },
    ],
    techCards: [
      {
        title: "Mission timeline engine",
        body: "Commands, sensor events, pauses, handoffs, errors, policy checks, and operator decisions reconstructed as one coherent replayable sequence.",
      },
      {
        title: "Structured incident bundles",
        body: "Failures, stops, safety blocks, and handoff issues captured as reviewable evidence packages for post-incident analysis.",
      },
      {
        title: "Fleet state aggregation",
        body: "Robot status, mission progress, exceptions, and operational patterns surfaced from one focused observability view.",
      },
    ],
    useCases: [
      {
        title: "Operators",
        body: "See mission status at a glance and replay incidents without digging through logs.",
      },
      {
        title: "Engineers",
        body: "Trace command sequences, sensor data, and policy decisions across missions.",
      },
      {
        title: "Compliance",
        body: "Export reviewable evidence bundles for audits and post-incident reviews.",
      },
    ],
    ecosystemLinks: [
      {
        title: "Upcube Cloud",
        body: "Infrastructure and compute layer for robotics data pipelines and fleet operations.",
        href: "/products/cloud",
      },
      {
        title: "UpcubeAI",
        body: "Connect robotics analysis with the assistant workspace for broader operational workflows.",
        href: "/products/upcube-ai",
      },
      {
        title: "Cloud VM",
        body: "Virtual machines and storage for robotics data processing and simulation workloads.",
        href: "/products/vm",
      },
    ],
    finalCtaTitle: "Start with mission replay. Scale with confidence.",
    finalCtaBody:
      "Robotics begins with mission replay and fleet observability, then grows toward policy-governed control, handoff records, adapter SDKs, and enterprise robot operations.",
    finalPrimaryAction: {
      label: "Explore Robotics",
      href: "/products/robotics",
    },
    finalSecondaryAction: {
      label: "View product direction",
      href: "#features",
    },
  },
  {
    slug: "ventari",
    name: "Upcube Commerce",
    eyebrow: "Marketplace-scale commerce technology",
    headline: "Commerce technology built for billion-product scale.",
    summary:
      "Upcube Commerce is the commerce technology layer for marketplace-scale product discovery. Designed to support up to 1 billion products, it brings AI-powered search, product pages, recommendations, reviews, category systems, and brand storefront infrastructure together so large catalogs can feel clear, fast, and easier to explore.",
    seoTitle: "Upcube Commerce | Commerce Technology for Billion-Product Scale",
    seoDescription:
      "Upcube Commerce is the commerce technology layer for marketplace-scale product discovery and brand storefronts, designed to support up to 1 billion products with AI-powered search and recommendations.",
    primaryAction: {
      label: "Explore Upcube Commerce",
      href: "https://ventari.net",
    },
    secondaryAction: {
      label: "Explore the ecosystem",
      href: "/explore",
    },
    heroHighlights: [
      "Designed to support up to 1 billion products.",
      "AI-powered catalog search and product discovery.",
      "Reviews, recommendations, and brand storefront infrastructure.",
    ],
    heroImage: {
      src: "/product-art/piet_mondrian_2_tableau_i.jpg",
      alt: "Structured geometric composition for Upcube Commerce.",
    },
    signatureTitle:
      "Commerce technology that stays clear, even when the catalog gets massive.",
    signatureBody:
      "Upcube Commerce is designed for brands and marketplaces that want fast search, rich product pages, smart categories, and product discovery that still feels refined at scale.",
    signatureCards: [
      {
        title: "Search designed for billion-product catalogs",
        body: "Upcube Commerce is built around large-catalog readiness, so discovery stays useful as product choice expands.",
      },
      {
        title: "Product pages that make decisions easier",
        body: "Clean PDP composition, clear details, strong imagery, options, pricing, reviews, and related items help customers move with more confidence.",
      },
      {
        title: "Categories, reviews, and recommendations working together",
        body: "Upcube Commerce brings each part of the commerce journey into one connected flow, keeping momentum alive from search to product detail.",
      },
    ],
    featureStories: [
      {
        title: "Discovery that starts before the product page",
        body: "Search and categories are first-class parts of the experience, helping customers reach the right product faster.",
      },
      {
        title: "Rich PDPs that feel considered",
        body: "Product pages are designed to present images, pricing, options, reviews, and related products in a way that makes the next decision clearer.",
      },
      {
        title: "Recommendations that turn browsing into discovery",
        body: "Recommendation flows help people keep exploring without making the storefront feel noisy, crowded, or directionless.",
      },
    ],
    techCards: [
      {
        title: "Catalog architecture built for scale",
        body: "Upcube Commerce is built with large-catalog growth in mind — from taxonomy and search to image quality, metadata, and product structure.",
      },
      {
        title: "Search and category depth",
        body: "Discovery stays central whether someone starts with a broad category, a precise query, or a single product page.",
      },
      {
        title: "Deferred storefront composition",
        body: "The product direction emphasizes strong PDPs and related sections without letting secondary content slow down the main commerce experience.",
      },
    ],
    useCases: [
      {
        title: "Move quickly through massive product choice",
        body: "Search, categories, and related products help customers find the right item without feeling lost in the catalog.",
      },
      {
        title: "Make product pages do more of the work",
        body: "Stronger PDPs reduce hesitation and make comparison easier before the customer reaches the cart.",
      },
      {
        title: "Keep discovery alive after the first click",
        body: "Recommendations and reviews help people continue exploring instead of restarting from search.",
      },
    ],
    ecosystemLinks: [
      {
        title: "Upcube Cloud",
        body: "Explore the infrastructure and systems story behind scalable commerce.",
        href: "/products/cloud",
      },
      {
        title: "Cloud VM",
        body: "Follow the compute layer behind large-catalog and storefront workloads.",
        href: "/products/vm",
      },
      {
        title: "UpcubeAI",
        body: "Connect commerce, research, product workflows, and decision-making inside the broader ecosystem.",
        href: "/products/upcube-ai",
      },
    ],
    finalCtaTitle: "Commerce infrastructure designed for real catalog scale.",
    finalCtaBody:
      "Upcube Commerce is built to make search, categories, reviews, recommendations, and PDP quality feel like one premium commerce experience.",
    finalPrimaryAction: {
      label: "Explore Upcube Commerce",
      href: "https://ventari.net",
    },
    finalSecondaryAction: {
      label: "Read about Upcube Cloud",
      href: "/products/cloud",
    },
  },
  {
    slug: "vm",
    name: "Cloud VM",
    eyebrow: "Virtual machines inside Upcube Cloud",
    headline:
      "Cloud Virtual Machines with networking, storage, and operations in the Cloud console.",
    summary:
      "Cloud VM is the virtual machine product inside Upcube Cloud, built around instance lifecycle, storage, networking, jobs, repair loops, and scalable systems language that still reads clearly in public.",
    seoTitle: "Cloud VM | Virtual Machine Platform inside Upcube Cloud",
    seoDescription:
      "Cloud VM is the virtual machine platform inside Upcube Cloud for lifecycle control, networking, storage, jobs, and repair-oriented infrastructure.",
    primaryAction: {
      label: "Open Upcube Cloud",
      href: "https://cloud.upcube.ai",
    },
    secondaryAction: {
      label: "Explore Upcube Cloud",
      href: "/products/cloud",
    },
    heroHighlights: [
      "Virtual machines with durable lifecycle thinking behind them.",
      "Storage, networking, and async operations presented as one system story.",
      "Scalable systems language without disappearing into control-plane jargon.",
    ],
    heroImage: {
      src: "/product-art/COMPOSITION-VII.jpg",
      alt: "Expressive abstract composition representing cloud compute scale.",
    },
    availabilityNote:
      "Cloud VM launches through Upcube Cloud, giving the broader cloud experience a direct path into virtual machines.",
    signatureTitle:
      "Cloud VMs that treat infrastructure like a real system, not a demo.",
    signatureBody:
      "Cloud VM is built around the hard parts that make cloud platforms serious: lifecycle control, durable state, storage, networking, scheduling, repair, and the long-running jobs that tie them together.",
    signatureCards: [
      {
        title: "Virtual machines with durable identity",
        body: "The product story emphasizes instances that are treated as persistent resources with real lifecycle logic behind them.",
      },
      {
        title: "Storage and networking as first-class parts of the experience",
        body: "Disks, IPs, networks, and routing belong inside the same product narrative as cloud compute instead of feeling bolted on after the fact.",
      },
      {
        title: "Async operations that match how infrastructure really behaves",
        body: "Long-running actions are part of the platform design, which makes the public story more honest and more useful.",
      },
    ],
    featureStories: [
      {
        title: "Compute that keeps pace with real control-plane work",
        body: "Cloud VM is shaped around instance lifecycle admission, scheduling, host coordination, and repair instead of a shallow create-delete demo story.",
      },
      {
        title: "Storage and snapshots that belong in the conversation",
        body: "Volume attach, detach, snapshot, and restore ideas are part of the way the product explains compute readiness and operational depth.",
      },
      {
        title: "Networking that matters to the final outcome",
        body: "Public IP lifecycle, VPC-style structure, and route-aware networking make the product feel like infrastructure, not just branding around instances.",
      },
    ],
    techCards: [
      {
        title: "Instance lifecycle",
        body: "Create, start, stop, reboot, and delete flows are part of a broader system that tracks ownership and operation state carefully.",
      },
      {
        title: "Jobs, reconciliation, and repair",
        body: "The platform is designed around work that can take time, fail, recover, and still move toward a safe state.",
      },
      {
        title: "Scalable systems seams",
        body: "Scheduler, host agent, network controller, and repository boundaries keep the story anchored in real cloud architecture.",
      },
    ],
    useCases: [
      {
        title: "Launch cloud VMs with more confidence",
        body: "Use a product built around instance durability, job tracking, and operational visibility instead of fragile one-shot actions.",
      },
      {
        title: "Explain infrastructure to more than one audience",
        body: "The product page is written so operators, builders, and business teams can follow the system story together.",
      },
      {
        title: "Scale toward more complex systems",
        body: "Storage, networking, and repair loops help the platform story grow beyond one isolated workload.",
      },
    ],
    ecosystemLinks: [
      {
        title: "Upcube Cloud",
        body: "See the broader cloud entry point that Cloud VM operates inside.",
        href: "/products/cloud",
      },
      {
        title: "Upcube Commerce",
        body: "Follow how scalable commerce can depend on stronger cloud compute systems.",
        href: "/products/shopping",
      },
      {
        title: "Upcube Earth",
        body: "Connect compute-heavy infrastructure thinking to spatial and map-centric products.",
        href: "/products/earth",
      },
    ],
    finalCtaTitle:
      "Bring clearer thinking to cloud compute, storage, and networking.",
    finalCtaBody:
      "Cloud VM is designed for teams that want infrastructure products to feel serious, coherent, and ready to scale.",
    finalPrimaryAction: {
      label: "Open Upcube Cloud",
      href: "https://cloud.upcube.ai",
    },
    finalSecondaryAction: {
      label: "Explore more infrastructure",
      href: "/products/cloud",
    },
  },
  {
    slug: "upcube-os",
    name: "Upcube OS",
    eyebrow: "Desktop operating system",
    headline: "A consumer operating system for the AI era.",
    summary:
      "Upcube OS is designed to make AI feel built in, visible, and firmly under your control. It is the public operating-system vision inside the Upcube ecosystem — built around trustworthy AI help, clear permissions, visible actions, readable history, and a planned public consumer release in 2028 while improvements continue.",
    seoTitle: "Upcube OS | AI Operating System",
    seoDescription:
      "Upcube OS is an AI operating system built around visible help, system context, permissions, and trust-first computing direction.",
    primaryAction: {
      label: "Read the vision",
      href: "/vision",
    },
    secondaryAction: {
      label: "Explore trust",
      href: "/trust",
    },
    heroHighlights: [
      "AI help that feels built into the computer, not added on.",
      "Clear permissions, approvals, and visible activity history.",
      "Public consumer release planned for 2028 while the product continues to improve.",
    ],
    heroImage: {
      src: "/product-art/Composition.jpg",
      alt: "Painterly composition representing operating system clarity.",
    },
    availabilityNote:
      "Public consumer release is planned for 2028 while improvements continue across the product and system experience.",
    signatureTitle: "An operating system that explains itself as it helps.",
    signatureBody:
      "Upcube OS is built around a simple idea: your computer should become more helpful without becoming more hidden. AI assistance should stay visible, understandable, and connected to real system work.",
    signatureCards: [
      {
        title: "AI that feels built in",
        body: "Help can live across files, documents, email, browser, settings, and workspaces — not behind a single app icon.",
      },
      {
        title: "Visible action, not silent automation",
        body: "The system is designed to show what AI is doing, what it can access, and when your approval is needed.",
      },
      {
        title: "Trust through understandable control",
        body: "Permissions, history, and approvals are presented in plain language, so control feels clear instead of technical.",
      },
    ],
    featureStories: [
      {
        title: "AI that helps across the whole system",
        body: "Upcube OS imagines a computer where summarizing a PDF, organizing files, restoring a workspace, or explaining battery drain feels like a natural request.",
      },
      {
        title: "An activity history you can actually read",
        body: "The system direction emphasizes showing what changed, which files were involved, what you approved, and what can be undone.",
      },
      {
        title: "Approvals for the moments that matter",
        body: "Deleting files, sending messages, changing settings, and other meaningful actions are designed to stay visible, intentional, and reviewable.",
      },
    ],
    techCards: [
      {
        title: "System-level intelligence",
        body: "Upcube OS is framed around AI as part of the computer itself — not a separate novelty layer.",
      },
      {
        title: "Permission design that makes sense",
        body: "Access requests are meant to be specific to the task, time-bounded where possible, and easy to understand.",
      },
      {
        title: "A trust-first operating model",
        body: "Visibility, control, and reversibility stay at the center of the experience.",
      },
    ],
    useCases: [
      {
        title: "Organize real work without losing sight of the changes",
        body: "Ask the system for help, see the scope of access clearly, and understand the result afterward.",
      },
      {
        title: "Get explanations instead of mystery",
        body: "Battery, files, workspaces, and settings should feel more explainable through built-in intelligence.",
      },
      {
        title: "Move faster without surrendering control",
        body: "The long-term goal is a computer that helps more often while keeping important decisions reviewable.",
      },
    ],
    ecosystemLinks: [
      {
        title: "Upcube Mobile OS",
        body: "See how the same trust-first product story carries into a phone experience.",
        href: "/products/upcube-mobile-os",
      },
      {
        title: "UpcubeAI",
        body: "Follow the workspace and assistant story shaping the broader ecosystem.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Cloud",
        body: "Connect the operating-system vision to the infrastructure and developer side of the platform.",
        href: "/products/cloud",
      },
    ],
    finalCtaTitle: "A more helpful computer should still feel like yours.",
    finalCtaBody:
      "Upcube OS presents a public consumer vision for AI-native computing — designed around help, trust, visibility, and control, with public release planned for 2028.",
    finalPrimaryAction: {
      label: "Read the Upcube OS vision",
      href: "/vision",
    },
    finalSecondaryAction: {
      label: "Read trust",
      href: "/trust",
    },
  },
  {
    slug: "upcube-mobile-os",
    name: "Upcube Mobile OS",
    eyebrow: "Mobile operating system",
    headline: "A mobile operating system for trusted AI.",
    summary:
      "Upcube Mobile OS is designed around privacy, trust, and AI help that stays visible every step of the way. It is the public mobile operating-system vision inside the Upcube ecosystem — built around trusted launch, privacy-aware intelligence, clear system boundaries, visible control, and a planned public consumer release in 2028 while improvements continue.",
    seoTitle: "Upcube Mobile OS | AI Mobile Operating System",
    seoDescription:
      "Upcube Mobile OS is an AI mobile operating system focused on trusted assistance, privacy, system clarity, and future phone computing.",
    primaryAction: {
      label: "Read the vision",
      href: "/vision",
    },
    secondaryAction: {
      label: "Explore trust",
      href: "/trust",
    },
    heroHighlights: [
      "AI as a system layer, not just an assistant icon.",
      "Privacy-aware intelligence with clearer user control.",
      "Public consumer release planned for 2028 while the product continues to improve.",
    ],
    heroImage: {
      src: "/product-art/a32ca26a50a12c330df049b8b402b6a8.jpg",
      alt: "Textured abstract artwork for Upcube Mobile OS.",
    },
    availabilityNote:
      "Public consumer release is planned for 2028 while improvements continue across the product and mobile system direction.",
    signatureTitle:
      "A mobile OS where trust and intelligence are designed together.",
    signatureBody:
      "Upcube Mobile OS is positioned as an original AI-native phone platform — one that helps with everyday tasks while keeping privacy, system boundaries, and user control visible from the start.",
    signatureCards: [
      {
        title: "AI across the system",
        body: "Search, settings, files, photos, notifications, privacy, and diagnostics become part of the intelligence layer instead of staying disconnected from it.",
      },
      {
        title: "Privacy you can understand",
        body: "The product direction emphasizes showing when AI runs locally, when cloud AI is involved, and what information was touched.",
      },
      {
        title: "Trust built into the phone experience",
        body: "Trusted launch, app boundaries, services, and user approvals shape the foundation of the mobile platform story.",
      },
    ],
    featureStories: [
      {
        title: "Ask for what you need in plain language",
        body: "The mobile vision supports requests like cleaning up storage, improving privacy, finding the right setting, or understanding what changed.",
      },
      {
        title: "System intelligence with visible boundaries",
        body: "Apps, services, frameworks, and background processes are treated as clear system layers, so AI can be powerful without becoming blurry.",
      },
      {
        title: "A phone that explains itself better",
        body: "Diagnostics, settings, privacy, accessibility, storage, and everyday help are designed to feel easier to inspect, understand, and control.",
      },
    ],
    techCards: [
      {
        title: "Trusted app launch and boundaries",
        body: "The product story begins with secure launch, process separation, and clear ownership of system services.",
      },
      {
        title: "System-owned intelligence",
        body: "AI help is framed as part of the operating system itself — not a bolt-on assistant competing for attention.",
      },
      {
        title: "Original and IP-safe direction",
        body: "Upcube Mobile OS is presented as an independent platform vision with its own trust model, interaction language, and system design direction.",
      },
    ],
    useCases: [
      {
        title: "Find the right setting faster",
        body: "Ask in plain language and move toward the right answer without digging through layers of menus.",
      },
      {
        title: "Understand what the phone is doing",
        body: "Battery, storage, privacy, diagnostics, and background activity should feel easier to inspect and explain.",
      },
      {
        title: "Get help without surrendering privacy",
        body: "The mobile vision is built around useful intelligence with visible, bounded data access.",
      },
    ],
    ecosystemLinks: [
      {
        title: "Upcube OS",
        body: "Explore the desktop operating-system vision that shares the same trust-first philosophy.",
        href: "/products/upcube-os",
      },
      {
        title: "UpcubeAI",
        body: "Connect the mobile experience to the wider AI assistant and workspace story.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Cloud",
        body: "Follow the infrastructure and platform story behind connected product surfaces.",
        href: "/products/cloud",
      },
    ],
    finalCtaTitle: "A phone should help more — and explain more.",
    finalCtaBody:
      "Upcube Mobile OS presents a public consumer vision for AI-native mobile computing, designed around trust, privacy, visibility, and control, with public release planned for 2028.",
    finalPrimaryAction: {
      label: "Read the Upcube Mobile OS vision",
      href: "/vision",
    },
    finalSecondaryAction: {
      label: "Read trust",
      href: "/trust",
    },
  },
  {
    slug: "voice",
    name: "Upcube Voice",
    eyebrow: "AI & Voice",
    headline: "The voice platform for future Upcube devices.",
    summary:
      "Upcube Voice brings Ethen into the devices around you — privately, intentionally, and in real time. It is the AI voice platform direction for future Upcube headphones, earbuds, home audio, car audio, and companion devices, designed around user control from the first interaction.",
    seoTitle: "Upcube Voice | AI Voice Platform for Future Upcube Devices",
    seoDescription:
      "Upcube Voice is the AI voice platform for future Upcube devices, built around private push-to-talk, real-time assistance, and clear user control.",
    primaryAction: {
      label: "Explore Voice",
      href: "/news/upcube-voice-preview",
    },
    secondaryAction: {
      label: "Explore UpcubeAI",
      href: "/products/upcube-ai",
    },
    heroHighlights: [
      "AI voice platform for future Upcube-manufactured devices — not a hardware launch claim.",
      "Private push-to-talk with real-time assistance and no always-listening mode.",
      "Backend-issued ephemeral sessions with no raw audio persisted.",
    ],
    heroImage: {
      src: "/product-art/FAA_Rhythm.jpg",
      alt: "Rhythmic abstract art reflecting real-time voice flow.",
    },
    availabilityNote:
      "Hardware is not launched yet, and no public Voice site is available in this repo.",
    signatureTitle:
      "A voice platform built to feel private, intentional, and grounded.",
    signatureBody:
      "Upcube Voice is presented as the AI voice foundation for future Upcube devices. The public story focuses on real-time assistance, deliberate activation, and clear product limits instead of overstating availability.",
    signatureCards: [
      {
        title: "Talk to Ethen naturally",
        body: "Upcube Voice brings natural, real-time conversation into future device experiences, extending Ethen beyond the workspace without turning the preview into a launch claim.",
      },
      {
        title: "Push-to-talk by design",
        body: "Voice interaction is built around deliberate activation, not always-on listening, so control stays clear.",
      },
      {
        title: "Built for future Upcube headphones and earbuds",
        body: "The preview covers future Upcube-manufactured headphones and earbuds while staying honest that public hardware availability has not launched yet.",
      },
    ],
    featureStories: [
      {
        title: "Home audio and car audio direction",
        body: "Upcube Voice extends beyond wearables into future home audio, car audio, and companion-device experiences, while remaining clear that hardware has not launched yet.",
      },
      {
        title: "Real-time conversation architecture",
        body: "The platform direction is built around real-time voice assistance backed by ephemeral sessions, giving the product a serious software foundation without inventing a public service endpoint.",
      },
      {
        title: "Privacy-first voice controls",
        body: "Public copy stays focused on private push-to-talk, no always-listening mode, and no raw audio persistence.",
      },
    ],
    techCards: [
      {
        title: "Private push-to-talk sessions",
        body: "Voice sessions are backend-issued and ephemeral, supporting real-time interaction without claiming a public Voice service endpoint.",
      },
      {
        title: "No always-listening mode",
        body: "Activation stays user-driven, avoiding ambient listening or passive device monitoring claims.",
      },
      {
        title: "No raw audio persisted",
        body: "The public privacy boundary stays simple and clear: raw audio is not persisted.",
      },
    ],
    useCases: [
      {
        title: "Voice across the Upcube ecosystem",
        body: "Future headphones, earbuds, home audio, car audio, and companion devices can connect back to Ethen and the wider Upcube product family.",
      },
      {
        title: "Ask for help on the move",
        body: "Future device experiences can make quick answers and assistance easier while staying inside a deliberate push-to-talk model.",
      },
      {
        title: "Keep privacy expectations clear",
        body: "The preview sets expectations around explicit activation, ephemeral sessions, and no raw audio persistence instead of overstating readiness or hardware availability.",
      },
    ],
    ecosystemLinks: [
      {
        title: "UpcubeAI",
        body: "Explore the assistant and workspace platform behind the Voice direction.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Mobile OS",
        body: "Connect the voice preview to the broader mobile and device computing direction.",
        href: "/products/upcube-mobile-os",
      },
      {
        title: "Upcube OS",
        body: "Follow the trust-first operating-system direction for future device experiences.",
        href: "/products/upcube-os",
      },
    ],
    finalCtaTitle: "Preview voice without overstating launch status.",
    finalCtaBody:
      "Upcube Voice is the platform direction for future Upcube devices — built around private push-to-talk, real-time assistance, and user control, with hardware not launched yet.",
    finalPrimaryAction: {
      label: "Explore Voice",
      href: "/news/upcube-voice-preview",
    },
    finalSecondaryAction: {
      label: "Explore UpcubeAI",
      href: "/products/upcube-ai",
    },
  },
  {
    slug: "university",
    name: "Upcube Education",
    eyebrow: "Education & Learning",
    headline: "100K courses at $5 each — learning paths for the AI age.",
    summary:
      "Upcube Education brings structured learning into the Upcube ecosystem. Explore 100K courses with simple $5 course pricing, built around AI education, product training, technical courses, guided learning paths, and future credential-style programs.",
    seoTitle:
      "Upcube Education | 100K Courses — AI Education and Learning Platform",
    seoDescription:
      "Upcube Education is the AI education and learning platform with 100K courses at $5 course pricing for the Upcube ecosystem, built for training, technical courses, and guided paths.",
    primaryAction: {
      label: "Open Education",
      href: "https://university.upcube.ai",
    },
    secondaryAction: {
      label: "Read the preview",
      href: "/news/upcube-university-preview",
    },
    heroHighlights: [
      "100K courses with simple $5 course pricing across the Upcube ecosystem.",
      "AI education, product training, technical courses, and guided learning paths.",
      "Not a legal university, accredited institution, or degree program.",
    ],
    heroImage: {
      src: "/product-art/Senecio.jpeg",
      alt: "Classic abstract composition representing structured learning.",
    },
    availabilityNote:
      "The public app domain is https://university.upcube.ai, while accreditation, degrees, and public enrollment are not claimed on this page.",
    signatureTitle: "Serious learning, structured for the AI era.",
    signatureBody:
      "Upcube Education is the learning platform direction for the broader ecosystem — focused on AI education, product training, guided technical learning, and future credential-style pathways without overstating legal school status or program availability.",
    signatureCards: [
      {
        title: "Learning paths for the AI age",
        body: "Build a stronger working understanding of AI concepts, workflows, product systems, and practical use.",
      },
      {
        title: "AI education and product training",
        body: "Learn how UpcubeAI, Voice, Cloud, commerce, and future computing products connect without scattering training across disconnected materials.",
      },
      {
        title: "Guided learning paths",
        body: "Move from fundamentals into deeper product and technical context through structured paths designed to build confidence over time.",
      },
    ],
    featureStories: [
      {
        title: "Technical courses across the Upcube ecosystem",
        body: "Upcube Education brings technical learning closer to real software, infrastructure, AI workflows, and product surfaces.",
      },
      {
        title: "Learning across the ecosystem",
        body: "The product direction spans AI, commerce, cloud infrastructure, voice, and future computing, helping learners understand how the broader Upcube platform fits together.",
      },
      {
        title: "Future credential-style programs",
        body: "The long-term direction may include credential-style learning programs, while the public page avoids unsupported claims around accreditation, degrees, certifications, or open enrollment status.",
      },
    ],
    techCards: [
      {
        title: "Structured learning architecture",
        body: "Guided paths, course modules, and product-based sequencing create the foundation for a more coherent learning experience.",
      },
      {
        title: "Product-aware training direction",
        body: "Courses can teach through the actual Upcube product family, keeping education close to real systems, workflows, and interfaces.",
      },
      {
        title: "Clear boundaries on what is live",
        body: "Public positioning stays disciplined around future program direction, without making unsupported claims about legal status, accreditation, degrees, or credentials.",
      },
    ],
    useCases: [
      {
        title: "Learn AI through real product workflows",
        body: "Use guided material to understand how AI tools, product systems, and interface decisions connect in practice.",
      },
      {
        title: "Train across the Upcube platform",
        body: "Follow learning paths across UpcubeAI, Voice, Cloud, commerce, and computing products as one connected ecosystem.",
      },
      {
        title: "Prepare for deeper technical study",
        body: "Use course-style material and structured paths to build toward advanced product, cloud, systems, and future computing topics over time.",
      },
    ],
    ecosystemLinks: [
      {
        title: "UpcubeAI",
        body: "Connect learning paths back to the AI workspace and assistant surface at the center of the ecosystem.",
        href: "/products/upcube-ai",
      },
      {
        title: "Upcube Cloud",
        body: "Follow technical learning into cloud workflows, infrastructure systems, and developer-facing product direction.",
        href: "/products/cloud",
      },
      {
        title: "Upcube Voice",
        body: "See how training and guided learning can extend into voice, device, and future interaction surfaces.",
        href: "/products/voice",
      },
    ],
    finalCtaTitle:
      "Learning for the ecosystem, without overstating what is live.",
    finalCtaBody:
      "Upcube Education presents the learning platform direction for Upcube — with 100K courses, simple $5 course pricing, a live app destination, and future program ambition kept clear, grounded, and responsibly framed.",
    finalPrimaryAction: {
      label: "Open Education",
      href: "https://university.upcube.ai",
    },
    finalSecondaryAction: {
      label: "Read the preview",
      href: "/news/upcube-university-preview",
    },
  },
];

export const upcubeProductsBySlug: Record<UpcubeProductSlug, UpcubeProduct> =
  upcubeProducts.reduce(
    (acc, product) => {
      acc[product.slug] = product;
      return acc;
    },
    {} as Record<UpcubeProductSlug, UpcubeProduct>,
  );

export function getUpcubeProductBySlug(slug: UpcubeProductSlug) {
  return upcubeProductsBySlug[slug];
}
