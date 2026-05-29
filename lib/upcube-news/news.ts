export type UpcubeNewsCategory = "Product Launch" | "Product Preview";

export type UpcubeNewsSection = {
  eyebrow: string;
  title: string;
  body: string;
};

export type UpcubeNewsRelatedProduct = {
  name: string;
  href: string;
};

export type UpcubeNewsArticle = {
  slug: string;
  href: string;
  productName: string;
  category: UpcubeNewsCategory;
  dateLabel: "Recent update";
  headline: string;
  excerpt: string;
  heroSummary: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  productPageUrl: string;
  launchUrl?: string;
  seoTitle: string;
  seoDescription: string;
  featured?: boolean;
  finalCtaTitle: string;
  finalCtaBody: string;
  sections: UpcubeNewsSection[];
  relatedProducts: UpcubeNewsRelatedProduct[];
};

export const upcubeNewsArticles: UpcubeNewsArticle[] = [
  {
    slug: "upcube-ai-launch",
    href: "/news/upcube-ai-launch",
    productName: "UpcubeAI",
    category: "Product Launch",
    dateLabel: "Recent update",
    headline:
      "UpcubeAI launches a connected workspace for Ethen, research, artifacts, and tools.",
    excerpt:
      "UpcubeAI brings assistant work, research, saved outputs, approvals, and tool workflows into one public product experience.",
    heroSummary:
      "UpcubeAI is designed around Ethen, a structured AI workspace where conversations can become artifacts, research can stay organized, and tool use can remain visible and intentional.",
    primaryCtaLabel: "Open UpcubeAI",
    primaryCtaHref: "https://ethen.upcube.ai",
    productPageUrl: "/products/upcube-ai",
    launchUrl: "https://ethen.upcube.ai",
    seoTitle: "UpcubeAI Launch | Ethen, Research, Artifacts, and Tools",
    seoDescription:
      "Read the UpcubeAI launch story for Ethen, chat, research, artifacts, approvals, and connected workspace continuity.",
    featured: true,
    finalCtaTitle: "Start in the workspace, then keep the work moving.",
    finalCtaBody:
      "UpcubeAI is built to make serious AI work feel calm, connected, and ready for the next useful action.",
    sections: [
      {
        eyebrow: "The launch",
        title: "A workspace built around the assistant",
        body: "UpcubeAI gives Ethen a focused home for chat, research, artifacts, and tool-assisted work. The experience is meant to feel less like a loose chat feed and more like a place where ideas, outputs, and next steps stay connected.",
      },
      {
        eyebrow: "Research",
        title: "From questions to organized findings",
        body: "The product direction includes research flows, retrieved context, and structured outputs that help people move from a prompt to something they can review, refine, and use.",
      },
      {
        eyebrow: "Artifacts",
        title: "Work that does not disappear after the answer",
        body: "Artifacts give important outputs a clearer place in the workspace, separating durable work from the flow of conversation while keeping the assistant close.",
      },
      {
        eyebrow: "Control",
        title: "Approvals and tools with visible intent",
        body: "UpcubeAI is planned around governed tool actions and approval-aware flows, so higher-impact work can be presented clearly before it moves forward.",
      },
      {
        eyebrow: "Continuity",
        title: "A product surface for ongoing work",
        body: "The workspace model supports continuity across tasks, making UpcubeAI a place to return to instead of a single-use answer box.",
      },
    ],
    relatedProducts: [
      { name: "Upcube Cloud", href: "/products/cloud" },
      { name: "Cloud VM", href: "/products/vm" },
      { name: "Upcube OS", href: "/products/upcube-os" },
    ],
  },
  {
    slug: "upcube-news-launch",
    href: "/news/upcube-news-launch",
    productName: "Upcube News",
    category: "Product Launch",
    dateLabel: "Recent update",
    headline:
      "Upcube News launches live news intelligence with AI-powered discovery and briefing-style reading.",
    excerpt:
      "Upcube News brings live news intelligence, AI summaries, topic discovery, source-linked stories, and briefing-style layouts into a focused editorial app.",
    heroSummary:
      "Upcube News is designed for people who want to stay informed across AI, technology, and global topics. It combines live discovery, AI summaries, topic navigation, and source-linked briefing surfaces into a clean editorial reading experience.",
    primaryCtaLabel: "Launch Upcube News",
    primaryCtaHref: "https://news.upcube.ai",
    productPageUrl: "/products/news",
    launchUrl: "https://news.upcube.ai",
    seoTitle:
      "Upcube News Launch | Live News Intelligence and AI-Powered Discovery",
    seoDescription:
      "Read the Upcube News launch story for live news intelligence, AI summaries, topic discovery, source-linked stories, and briefing-style layouts.",
    finalCtaTitle: "Stay informed with clarity, not clutter.",
    finalCtaBody:
      "Upcube News is built for live news intelligence discovery, AI-powered summaries, topic navigation, and briefing-style reading — positioned as news discovery and aggregation, not original reporting.",
    sections: [
      {
        eyebrow: "The launch",
        title: "A briefing surface for staying informed",
        body: "Upcube News gives readers a focused editorial app for live news discovery, AI-powered summaries, and topic navigation. The experience is designed around staying informed efficiently rather than scrolling endlessly.",
      },
      {
        eyebrow: "Discovery",
        title: "Live news discovery with topic control",
        body: "The product surfaces stories from live feeds organized by topic and category, helping readers focus on the areas most relevant to them without losing the broader news context.",
      },
      {
        eyebrow: "Summaries",
        title: "AI-powered summaries for faster scanning",
        body: "Stories include AI-generated summaries that help readers understand the key points quickly. Summaries are generated from source content as discovery assistance, not original editorial.",
      },
      {
        eyebrow: "Sources",
        title: "Source-linked stories with transparency",
        body: "Every story links back to its original source, keeping discovery transparent and allowing readers to dive deeper into stories that deserve their full attention.",
      },
      {
        eyebrow: "Briefings",
        title: "Briefing-style layouts for efficient reading",
        body: "The homepage and category surfaces are organized as daily briefing layouts — scannable, structured, and built for people who want to stay informed without drowning in noise.",
      },
    ],
    relatedProducts: [
      { name: "UpcubeAI", href: "/products/upcube-ai" },
      { name: "Upcube Books", href: "/products/books" },
      { name: "Upcube Earth", href: "/products/earth" },
    ],
  },
  {
    slug: "upcube-quantum-launch",
    href: "/news/upcube-quantum-launch",
    productName: "Upcube Quantum",
    category: "Product Launch",
    dateLabel: "Recent update",
    headline: "Introducing Upcube Quantum",
    excerpt:
      "Upcube Quantum is a beginner-friendly quantum computing workspace for guided experiments, templates, visual runs, and clear result charts.",
    heroSummary:
      "Upcube Quantum brings guided experiments, visual runs, and structured templates into one calm workspace designed to make quantum ideas easier to explore.",
    primaryCtaLabel: "Explore Upcube Quantum",
    primaryCtaHref: "/products/quantum",
    productPageUrl: "/products/quantum",
    launchUrl: "https://quantum.upcube.ai",
    seoTitle: "Introducing Upcube Quantum | Guided Quantum Exploration",
    seoDescription:
      "Read the launch update for Upcube Quantum, a beginner-friendly workspace for guided experiments, templates, visual runs, and clear result charts.",
    finalCtaTitle: "Start exploring quantum ideas with clarity.",
    finalCtaBody:
      "Upcube Quantum is built to make future-computing concepts approachable through guided discovery and visual results.",
    sections: [
      {
        eyebrow: "The launch",
        title: "Quantum exploration in a clearer workspace",
        body: "Upcube Quantum is designed for people who want to learn by doing. Guided experiments, structured templates, and a focused console make the first step feel approachable.",
      },
      {
        eyebrow: "Visual results",
        title: "See what changed after every run",
        body: "Result views are designed to stay readable, so abstract outcomes are easier to compare, discuss, and build on.",
      },
      {
        eyebrow: "Learning path",
        title: "Start simple, then go deeper",
        body: "The product direction supports a calm path from guided examples to more advanced exploration without overwhelming the first experience.",
      },
    ],
    relatedProducts: [
      { name: "UpcubeAI", href: "/products/upcube-ai" },
      { name: "Education", href: "/products/university" },
      { name: "Cloud VM", href: "/products/vm" },
    ],
  },
  {
    slug: "ventari-launch",
    href: "/news/ventari-launch",
    productName: "Upcube Commerce",
    category: "Product Launch",
    dateLabel: "Recent update",
    headline:
      "Upcube Commerce launches commerce technology for marketplace-scale product discovery.",
    excerpt:
      "Upcube Commerce brings AI-powered search, product pages, reviews, recommendations, category systems, and brand storefront infrastructure into a commerce technology layer designed to support up to 1 billion products.",
    heroSummary:
      "Upcube Commerce is the commerce technology layer for marketplace-scale product discovery: AI-powered catalog search, product detail pages, reviews, recommendations, category systems, and brand storefront infrastructure built for billion-product scale.",
    primaryCtaLabel: "Explore Upcube Commerce",
    primaryCtaHref: "https://ventari.net",
    productPageUrl: "/products/shopping",
    launchUrl: "https://ventari.net",
    seoTitle:
      "Upcube Commerce Launch | Commerce Technology for Billion-Product Scale",
    seoDescription:
      "Read the Upcube Commerce launch story for commerce technology, AI-powered product discovery, catalog search, PDPs, reviews, recommendations, and brand storefront infrastructure designed for marketplace-scale.",
    finalCtaTitle:
      "Commerce infrastructure that stays clear, even at massive catalog scale.",
    finalCtaBody:
      "Upcube Commerce is positioned as commerce technology built for search, comparison, and momentum across very large product catalogs and brand storefronts.",
    sections: [
      {
        eyebrow: "The launch",
        title: "Commerce technology built for billion-product scale",
        body: "Upcube Commerce is designed for marketplace-scale product discovery. AI-powered search, categories, product detail pages, reviews, and recommendations work together to turn browsing into a guided commerce experience. Designed to support up to 1 billion products.",
      },
      {
        eyebrow: "Search",
        title: "AI-powered catalog search at billion-product scale",
        body: "The product direction supports large-catalog search and browsing patterns, with a catalog architecture designed to support up to 1 billion products without presenting that scale as a burden to the shopper.",
      },
      {
        eyebrow: "Product pages",
        title: "Details that make decisions easier",
        body: "Upcube Commerce product pages are planned around the information people need to compare, evaluate, and move forward: images, descriptions, categories, reviews, recommendations, and clear actions.",
      },
      {
        eyebrow: "Discovery",
        title: "Categories and recommendations that keep browsing moving",
        body: "Category paths and recommendation surfaces help shoppers keep momentum when they do not know the exact product they want yet.",
      },
      {
        eyebrow: "Commerce system",
        title: "A storefront infrastructure designed for scale",
        body: "Upcube Commerce is positioned as commerce technology, with public pages, catalog systems, and discovery flows designed to grow with broad product coverage across brand storefronts.",
      },
    ],
    relatedProducts: [
      { name: "UpcubeAI", href: "/products/upcube-ai" },
      { name: "Upcube Cloud", href: "/products/cloud" },
      { name: "Cloud VM", href: "/products/vm" },
    ],
  },
  {
    slug: "upcube-books-launch",
    href: "/news/upcube-books-launch",
    productName: "Upcube Books",
    category: "Product Launch",
    dateLabel: "Recent update",
    headline:
      "Upcube Books launches a cleaner way to discover, preview, and save books.",
    excerpt:
      "Upcube Books brings discovery, previews, saved books, public-domain lanes, and AI-assisted reading direction into a calm reading product.",
    heroSummary:
      "Upcube Books is designed for discovery first: finding books, previewing them safely, saving what matters, and building toward reading assistance that respects the source material.",
    primaryCtaLabel: "Open Upcube Books",
    primaryCtaHref: "https://books.upcube.ai",
    productPageUrl: "/products/books",
    launchUrl: "https://books.upcube.ai",
    seoTitle: "Upcube Books Launch | Discover, Preview, and Save Books",
    seoDescription:
      "Read the Upcube Books launch story for book discovery, previews, saved books, public-domain lanes, and AI-assisted reading direction.",
    finalCtaTitle:
      "Make reading discovery feel calm, useful, and worth returning to.",
    finalCtaBody:
      "Upcube Books is built to help readers browse, preview, save, and continue into deeper reading paths without losing sight of rights boundaries.",
    sections: [
      {
        eyebrow: "The launch",
        title: "A book product centered on discovery",
        body: "Upcube Books gives readers a focused place to browse, search, and keep track of books that catch their attention. The product emphasizes clean discovery and useful previews before deeper reading workflows.",
      },
      {
        eyebrow: "Previews",
        title: "A safer way to look before reading",
        body: "Preview and detail pages should help readers understand a title without treating copyrighted books as free hosted content.",
      },
      {
        eyebrow: "Saved books",
        title: "Keep a personal reading lane",
        body: "Saved-book flows help readers return to titles later, making discovery feel less temporary and more personal.",
      },
      {
        eyebrow: "Public-domain reading",
        title: "Clear lanes for open reading material",
        body: "Public-domain lanes can support richer reading access where rights allow, while keeping the broader catalog experience focused on discovery and previews.",
      },
      {
        eyebrow: "Reading assistance",
        title: "AI-assisted reading, handled carefully",
        body: "The product direction includes AI-assisted reading features that can help explain, organize, or navigate reading work without overstating content rights or source availability.",
      },
    ],
    relatedProducts: [
      { name: "UpcubeAI", href: "/products/upcube-ai" },
      { name: "Upcube Mobile OS", href: "/products/upcube-mobile-os" },
      { name: "Upcube Cloud", href: "/products/cloud" },
    ],
  },
  {
    slug: "upcube-earth-launch",
    href: "/news/upcube-earth-launch",
    productName: "Upcube Earth",
    category: "Product Launch",
    dateLabel: "Recent update",
    headline: "Upcube Earth launches a 3D way to explore the planet.",
    excerpt:
      "Upcube Earth brings globe exploration, terrain, cities, search, overlays, elevation tools, and shareable views into a spatial discovery product.",
    heroSummary:
      "Upcube Earth turns maps into an immersive exploration surface, combining 3D globe navigation with search, layers, terrain, cities, overlays, and shareable perspectives.",
    primaryCtaLabel: "Open Upcube Earth",
    primaryCtaHref: "https://planet.upcube.ai",
    productPageUrl: "/products/earth",
    launchUrl: "https://planet.upcube.ai",
    seoTitle:
      "Upcube Earth Launch | 3D Globe, Terrain, Cities, and Spatial Discovery",
    seoDescription:
      "Read the Upcube Earth launch story for 3D globe exploration, terrain, city layers, search, overlays, elevation tools, and shareable views.",
    finalCtaTitle: "Explore places with more shape, context, and perspective.",
    finalCtaBody:
      "Upcube Earth is positioned as a planet-scale product for moving through maps, terrain, layers, and place search with a stronger sense of space.",
    sections: [
      {
        eyebrow: "The launch",
        title: "A planet-scale surface for exploration",
        body: "Upcube Earth is built around the feeling of moving through the world, not just reading a flat map. The product brings terrain, city layers, overlays, and search into one spatial interface.",
      },
      {
        eyebrow: "3D exploration",
        title: "Terrain, cities, and globe movement",
        body: "The experience supports globe navigation, terrain, and 3D city layers so places can be understood through shape, distance, and context.",
      },
      {
        eyebrow: "Search",
        title: "Find places and keep exploring",
        body: "Search helps users jump to places quickly, then continue exploring through nearby context, layers, and views.",
      },
      {
        eyebrow: "Overlays",
        title: "Layers for richer spatial understanding",
        body: "Overlay and elevation tools can add meaning to the map, helping people inspect geography with more than a single visual layer.",
      },
      {
        eyebrow: "Sharing",
        title: "Views worth sending",
        body: "Shareable views and screenshot-oriented workflows make exploration easier to capture, return to, and communicate.",
      },
    ],
    relatedProducts: [
      { name: "UpcubeAI", href: "/products/upcube-ai" },
      { name: "Upcube Cloud", href: "/products/cloud" },
      { name: "Upcube Mobile OS", href: "/products/upcube-mobile-os" },
    ],
  },
  {
    slug: "upcube-games-launch",
    href: "/news/upcube-games-launch",
    productName: "Upcube Games",
    category: "Product Launch",
    dateLabel: "Recent update",
    headline:
      "Upcube Games launches cleaner game discovery for what to play next.",
    excerpt:
      "Upcube Games helps players browse by platform, genre, studio, franchise, release timing, and recommendation paths without feeling like an internal directory.",
    heroSummary:
      "Upcube Games is a polished discovery product for players who want to find what to play next through cleaner browsing, stronger detail pages, and recommendation surfaces that keep momentum.",
    primaryCtaLabel: "Open Upcube Games",
    primaryCtaHref: "https://games.upcube.ai",
    productPageUrl: "/products/games",
    launchUrl: "https://games.upcube.ai",
    seoTitle: "Upcube Games Launch | Find What to Play Next",
    seoDescription:
      "Read the Upcube Games launch story for game discovery, platforms, genres, studios, franchises, release timing, detail pages, and recommendations.",
    finalCtaTitle: "Move from curiosity to the next game worth your time.",
    finalCtaBody:
      "Upcube Games is built to make browsing, deciding, and continuing through a game catalog feel more direct and more enjoyable.",
    sections: [
      {
        eyebrow: "The launch",
        title: "Find what to play next",
        body: "Upcube Games turns game browsing into a focused product experience for discovery, giving players a cleaner way to move between top games, new releases, upcoming launches, and detailed game pages.",
      },
      {
        eyebrow: "Browse",
        title: "Browse by platform, genre, studio, and franchise",
        body: "Players can move through games by the signals they already care about: platform, genre, companies and studios, franchises, and release timing.",
      },
      {
        eyebrow: "Detail pages",
        title: "A better path from interest to decision",
        body: "Game pages should bring together the context people need to decide whether a title belongs on their list.",
      },
      {
        eyebrow: "Recommendations",
        title: "Recommendations that help you keep moving",
        body: "Rule-based recommendation paths can help players continue from one game to the next without forcing discovery back to a blank search box.",
      },
      {
        eyebrow: "Experience",
        title: "Launch into cleaner game discovery",
        body: "The public experience should feel like a consumer product, with confident categories, clear CTAs, and discovery paths that make the catalog easier to enjoy.",
      },
    ],
    relatedProducts: [
      { name: "UpcubeAI", href: "/products/upcube-ai" },
      { name: "Upcube Cloud", href: "/products/cloud" },
      { name: "Upcube Mobile OS", href: "/products/upcube-mobile-os" },
    ],
  },
  {
    slug: "upcube-jobs-launch",
    href: "/news/upcube-jobs-launch",
    productName: "Upcube Jobs",
    category: "Product Launch",
    dateLabel: "Recent update",
    headline: "Upcube Jobs launches a clearer way to explore opportunities.",
    excerpt:
      "Upcube Jobs is positioned as a focused job discovery product with clear browsing, role detail, and application-oriented paths.",
    heroSummary:
      "Upcube Jobs gives the ecosystem a dedicated destination for opportunity discovery, designed around clarity, search, role context, and practical next steps.",
    primaryCtaLabel: "Open Upcube Jobs",
    primaryCtaHref: "https://jobs.upcube.ai",
    productPageUrl: "/products/jobs",
    launchUrl: "https://jobs.upcube.ai",
    seoTitle: "Upcube Jobs Launch | Explore Opportunities with Clarity",
    seoDescription:
      "Read the Upcube Jobs launch story for a focused job discovery product with clear browsing, role context, and practical next steps.",
    finalCtaTitle:
      "Explore opportunities with clearer context and less friction.",
    finalCtaBody:
      "Upcube Jobs is presented as a focused destination for browsing roles, understanding the surrounding work, and moving toward the next step with more confidence.",
    sections: [
      {
        eyebrow: "The launch",
        title: "A focused destination for opportunity discovery",
        body: "Upcube Jobs is planned as a public product for exploring roles with less friction and clearer next steps.",
      },
      {
        eyebrow: "Search",
        title: "Find roles with practical context",
        body: "The product should help people move from broad interest to relevant roles through direct browsing and clear information design.",
      },
      {
        eyebrow: "Role pages",
        title: "Details that support a decision",
        body: "Role pages should make the core context easy to scan before someone decides whether to continue.",
      },
      {
        eyebrow: "Ecosystem",
        title: "Connected to the broader Upcube experience",
        body: "Jobs can sit alongside UpcubeAI, Cloud, and the wider product ecosystem as a clear destination for work and opportunity.",
      },
    ],
    relatedProducts: [
      { name: "UpcubeAI", href: "/products/upcube-ai" },
      { name: "Upcube Cloud", href: "/products/cloud" },
      { name: "Upcube OS", href: "/products/upcube-os" },
    ],
  },
  {
    slug: "upcube-cloud-launch",
    href: "/news/upcube-cloud-launch",
    productName: "Upcube Cloud",
    category: "Product Launch",
    dateLabel: "Recent update",
    headline:
      "Upcube Cloud launches as the cloud home for Upcube systems and services.",
    excerpt:
      "Upcube Cloud brings infrastructure, cloud product access, and scalable systems direction into a single public destination.",
    heroSummary:
      "Upcube Cloud is the cloud-facing product in the ecosystem, connecting infrastructure direction, compute access, and product services through a public cloud destination.",
    primaryCtaLabel: "Open Upcube Cloud",
    primaryCtaHref: "https://cloud.upcube.ai",
    productPageUrl: "/products/cloud",
    launchUrl: "https://cloud.upcube.ai",
    seoTitle: "Upcube Cloud Launch | Infrastructure and Scalable Systems",
    seoDescription:
      "Read the Upcube Cloud launch story for the public cloud destination behind Upcube infrastructure, services, and compute direction.",
    finalCtaTitle: "Follow the cloud layer behind the Upcube product family.",
    finalCtaBody:
      "Upcube Cloud acts as the public destination for infrastructure, connected systems, and the services that support the wider ecosystem.",
    sections: [
      {
        eyebrow: "The launch",
        title: "A cloud home for the ecosystem",
        body: "Upcube Cloud gives the product family a public cloud destination for infrastructure-oriented services and scalable systems.",
      },
      {
        eyebrow: "Systems",
        title: "Cloud concepts made easier to approach",
        body: "The public product story should explain compute, storage, networking, and infrastructure in direct language that works for builders and business users.",
      },
      {
        eyebrow: "VM path",
        title: "Connected to Cloud VM",
        body: "Cloud VM should carry the deeper virtual-machine story, while Upcube Cloud remains the broader entry point for cloud services.",
      },
      {
        eyebrow: "Ecosystem",
        title: "Infrastructure behind connected products",
        body: "Cloud sits naturally alongside UpcubeAI and Upcube Commerce as the scalable systems layer of the product ecosystem.",
      },
    ],
    relatedProducts: [
      { name: "Cloud VM", href: "/products/vm" },
      { name: "UpcubeAI", href: "/products/upcube-ai" },
      { name: "Upcube Commerce", href: "/products/shopping" },
    ],
  },
  {
    slug: "vm-compute-launch",
    href: "/news/vm-compute-launch",
    productName: "Cloud VM",
    category: "Product Launch",
    dateLabel: "Recent update",
    headline:
      "Cloud VM launches a clearer path to virtual machines and scalable infrastructure inside Upcube Cloud.",
    excerpt:
      "Cloud VM brings virtual machines, lifecycle control, scheduling, networking, storage, images, host coordination, and repair flows into the Upcube Cloud experience.",
    heroSummary:
      "Cloud VM is the virtual machine product inside Upcube Cloud with a clearer public story around infrastructure, lifecycle, networking, storage, and scalable operations.",
    primaryCtaLabel: "Open Upcube Cloud",
    primaryCtaHref: "https://cloud.upcube.ai",
    productPageUrl: "/products/vm",
    launchUrl: "https://cloud.upcube.ai",
    seoTitle: "Cloud VM Launch | Virtual Machines inside Upcube Cloud",
    seoDescription:
      "Read the Cloud VM launch story for virtual machines, lifecycle control, scheduling, networking, storage, images, and repair-oriented infrastructure workflows inside Upcube Cloud.",
    finalCtaTitle:
      "Bring cloud compute into the product story with less jargon and more clarity.",
    finalCtaBody:
      "Cloud VM is positioned as the practical infrastructure lane inside Upcube Cloud, connecting lifecycle, storage, networking, and repair-oriented operations.",
    sections: [
      {
        eyebrow: "The launch",
        title: "Cloud VMs without unnecessary complexity",
        body: "Cloud VM presents virtual machines as a practical product surface inside Upcube Cloud, connecting instance lifecycle, scheduling, host coordination, networking, storage, and images.",
      },
      {
        eyebrow: "Lifecycle",
        title: "From instance identity to operation",
        body: "The source direction includes durable instance identity and lifecycle workflows that can make cloud compute easier to reason about.",
      },
      {
        eyebrow: "Infrastructure",
        title: "Networking, storage, and images in one story",
        body: "Cloud VM should explain the infrastructure pieces people expect from a virtual-machine product without turning the article into an engineering changelog.",
      },
      {
        eyebrow: "Reliability direction",
        title: "Repair and reconciliation flows",
        body: "The platform direction includes repair and reconciliation concepts, which should be described as operational product direction rather than unsupported guarantees.",
      },
      {
        eyebrow: "Cloud connection",
        title: "Part of Upcube Cloud",
        body: "Cloud VM launches through Upcube Cloud, giving cloud visitors a direct path from product exploration into virtual machines.",
      },
    ],
    relatedProducts: [
      { name: "Upcube Cloud", href: "/products/cloud" },
      { name: "UpcubeAI", href: "/products/upcube-ai" },
      { name: "Upcube OS", href: "/products/upcube-os" },
    ],
  },
  {
    slug: "upcube-os-preview",
    href: "/news/upcube-os-preview",
    productName: "Upcube OS",
    category: "Product Preview",
    dateLabel: "Recent update",
    headline:
      "Upcube OS previews an AI-first desktop experience planned for public consumer release in 2028.",
    excerpt:
      "Upcube OS is built and improving, with public consumer release planned for 2028 and a product direction centered on AI help, permissions, approvals, activity history, and workspace memory.",
    heroSummary:
      "Upcube OS previews a desktop operating-system direction where visible AI assistance, semantic search, permissions, approvals, and activity context can become part of the everyday system experience.",
    primaryCtaLabel: "Explore Upcube OS",
    primaryCtaHref: "/products/upcube-os",
    productPageUrl: "/products/upcube-os",
    seoTitle:
      "Upcube OS Preview | AI-First Desktop Experience Planned for 2028",
    seoDescription:
      "Read the Upcube OS preview for an AI-first desktop product direction with public consumer release planned for 2028.",
    finalCtaTitle:
      "Follow the desktop release path without losing sight of the product vision.",
    finalCtaBody:
      "Upcube OS uses 2028 public consumer release language while showing how visible assistance, system context, and user control shape the product direction.",
    sections: [
      {
        eyebrow: "The preview",
        title: "An AI-first desktop direction",
        body: "Upcube OS is built and improving, with public consumer release planned for 2028. The product direction centers on AI assistance that is visible, contextual, and connected to system-level work.",
      },
      {
        eyebrow: "Assistance",
        title: "Help that can understand system context",
        body: "The source direction includes system-level help, semantic search, and workspace-aware assistance designed to make everyday computing feel more direct.",
      },
      {
        eyebrow: "Control",
        title: "Permissions and approvals in the experience",
        body: "Upcube OS should present higher-impact actions with clear user control, including permission and approval concepts where appropriate.",
      },
      {
        eyebrow: "Memory",
        title: "Activity history and workspace continuity",
        body: "Activity history and workspace memory direction can help the system feel continuous across tasks without overstating what is final in public release terms.",
      },
      {
        eyebrow: "Release path",
        title: "Planned for public consumer release in 2028",
        body: "The product page and preview article should use 2028 public consumer release language and avoid replacing that with exact dates or unsupported availability claims.",
      },
    ],
    relatedProducts: [
      { name: "UpcubeAI", href: "/products/upcube-ai" },
      { name: "Cloud VM", href: "/products/vm" },
      { name: "Upcube Mobile OS", href: "/products/upcube-mobile-os" },
    ],
  },
  {
    slug: "upcube-mobile-os-preview",
    href: "/news/upcube-mobile-os-preview",
    productName: "Upcube Mobile OS",
    category: "Product Preview",
    dateLabel: "Recent update",
    headline:
      "Upcube Mobile OS previews an AI-first mobile experience planned for public consumer release in 2028.",
    excerpt:
      "Upcube Mobile OS is built and improving, with public consumer release planned for 2028 and a product direction centered on trusted intelligence across everyday mobile surfaces.",
    heroSummary:
      "Upcube Mobile OS previews a mobile operating-system direction where AI assistance can work across settings, search, notifications, files, photos, privacy, battery, storage, and accessibility with clear trust boundaries.",
    primaryCtaLabel: "Explore Upcube Mobile OS",
    primaryCtaHref: "/products/upcube-mobile-os",
    productPageUrl: "/products/upcube-mobile-os",
    seoTitle:
      "Upcube Mobile OS Preview | AI-First Mobile Experience Planned for 2028",
    seoDescription:
      "Read the Upcube Mobile OS preview for an AI-first mobile product direction with public consumer release planned for 2028.",
    finalCtaTitle:
      "Preview the mobile release path with trust, privacy, and system clarity at the center.",
    finalCtaBody:
      "Upcube Mobile OS uses 2028 public consumer release language while showing how intelligence across everyday phone surfaces can stay visible and controlled.",
    sections: [
      {
        eyebrow: "The preview",
        title: "A mobile OS built around useful intelligence",
        body: "Upcube Mobile OS is built and improving, with public consumer release planned for 2028. The product direction focuses on system intelligence that supports everyday mobile tasks.",
      },
      {
        eyebrow: "Everyday surfaces",
        title: "Help across settings, search, notifications, files, and photos",
        body: "The source direction includes intelligence across core phone surfaces, making the preview story practical instead of abstract.",
      },
      {
        eyebrow: "Trust",
        title: "Trusted boundaries for personal devices",
        body: "Mobile assistance should be described with care around privacy, permissions, and user control, without making unsupported security or legal claims.",
      },
      {
        eyebrow: "System care",
        title: "Battery, storage, accessibility, and privacy context",
        body: "The product direction includes system areas that affect daily device confidence, including battery, storage, accessibility, and privacy settings.",
      },
      {
        eyebrow: "Release path",
        title: "Planned for public consumer release in 2028",
        body: "The preview should consistently use 2028 public consumer release language and avoid exact availability details unless they are supplied later.",
      },
    ],
    relatedProducts: [
      { name: "UpcubeAI", href: "/products/upcube-ai" },
      { name: "Upcube OS", href: "/products/upcube-os" },
      { name: "Upcube Books", href: "/products/books" },
    ],
  },
  {
    slug: "upcube-voice-preview",
    href: "/news/upcube-voice-preview",
    productName: "Upcube Voice",
    category: "Product Preview",
    dateLabel: "Recent update",
    headline:
      "Previewing Upcube Voice: the voice platform for future Upcube devices",
    excerpt:
      "Upcube Voice is a preview of the AI voice platform for future Upcube-manufactured devices, centered on private push-to-talk interaction, real-time assistance, ephemeral sessions, and no raw audio persistence.",
    heroSummary:
      "Upcube Voice is presented as the voice platform for future Upcube headphones, earbuds, home audio, car audio, and companion devices, with hardware not launched yet and no public Voice site in this repo.",
    primaryCtaLabel: "Explore Voice",
    primaryCtaHref: "/products/voice",
    productPageUrl: "/products/voice",
    seoTitle: "Previewing Upcube Voice | Future Upcube Devices",
    seoDescription:
      "Read the Upcube Voice preview for future Upcube devices, private push-to-talk interaction, backend-issued ephemeral sessions, and no raw audio persistence.",
    finalCtaTitle:
      "Follow the voice direction through the product preview, not a launch claim.",
    finalCtaBody:
      "Upcube Voice stays framed as a future-device preview with claim discipline around hardware readiness, public availability, and service URLs.",
    sections: [
      {
        eyebrow: "The preview",
        title: "The voice platform for future Upcube devices",
        body: "Upcube Voice is described as the AI voice platform for future Upcube-manufactured devices. The page avoids claiming that hardware is launched or that a public Voice site exists today.",
      },
      {
        eyebrow: "Control",
        title: "Voice assistance built around control",
        body: "The public story centers on deliberate push-to-talk activation and real-time assistance, while explicitly avoiding an always-listening mode claim.",
      },
      {
        eyebrow: "Realtime conversation",
        title: "Realtime conversation without always-listening",
        body: "The platform direction is framed around real-time voice help with clear session boundaries, keeping user control visible instead of implying ambient listening.",
      },
      {
        eyebrow: "Device direction",
        title:
          "Built for future Upcube headphones, earbuds, home audio, car audio, and companion devices",
        body: "The preview names the future device categories directly without drifting into generic any-headphones positioning or current retail availability claims.",
      },
      {
        eyebrow: "Ecosystem",
        title: "How Voice fits the Upcube ecosystem",
        body: "Upcube Voice is positioned as the future device layer that brings Ethen into broader Upcube experiences, while staying grounded that the hardware is not launched yet and the public destination remains the product preview page.",
      },
    ],
    relatedProducts: [
      { name: "UpcubeAI", href: "/products/upcube-ai" },
      { name: "Upcube Mobile OS", href: "/products/upcube-mobile-os" },
      { name: "Upcube OS", href: "/products/upcube-os" },
    ],
  },
  {
    slug: "upcube-university-preview",
    href: "/news/upcube-university-preview",
    productName: "Upcube Education",
    category: "Product Preview",
    dateLabel: "Recent update",
    headline: "Previewing Upcube Education: learning paths for the AI age",
    excerpt:
      "Upcube Education is a preview of the learning platform for the Upcube ecosystem, focused on AI education, product training, technical courses, guided learning paths, and future credential-style programs.",
    heroSummary:
      "Upcube Education is presented as the learning platform for the Upcube ecosystem, with a live app domain, no accreditation claim, and no open enrollment flow in this repo.",
    primaryCtaLabel: "Open Education",
    primaryCtaHref: "https://university.upcube.ai",
    productPageUrl: "/products/university",
    launchUrl: "https://university.upcube.ai",
    seoTitle: "Previewing Upcube Education | Learning Paths for the AI Age",
    seoDescription:
      "Preview Upcube Education, the learning platform for the Upcube ecosystem built for AI education, product training, technical courses, and guided learning paths.",
    finalCtaTitle:
      "Follow the learning direction through the product preview, not an institutional claim.",
    finalCtaBody:
      "Upcube Education stays framed as an ecosystem learning platform with careful boundaries around accreditation, degrees, certifications, and public enrollment.",
    sections: [
      {
        eyebrow: "The preview",
        title: "A learning platform for the Upcube ecosystem",
        body: "Upcube Education is described as the learning platform for the Upcube ecosystem, with a public app domain at university.upcube.ai. The page still avoids accredited status, legal school status, degrees, or open enrollment claims.",
      },
      {
        eyebrow: "Learning paths",
        title: "Learning paths for the AI age",
        body: "The platform direction focuses on guided learning paths that help people understand AI products, technical workflows, and ecosystem-level product context.",
      },
      {
        eyebrow: "Training",
        title: "AI education and product training",
        body: "The public story centers on AI education and product training that can help people use Upcube products more clearly without implying formal degrees or current certifications.",
      },
      {
        eyebrow: "Technical courses",
        title: "Technical courses across the Upcube ecosystem",
        body: "Education is positioned to cover technical courses spanning AI, voice, discovery, cloud, and computing surfaces across the broader ecosystem.",
      },
      {
        eyebrow: "Future direction",
        title: "Future credential-style programs",
        body: "Credential-style programs are described as future direction only, keeping the preview honest about what is not publicly available in this repo today.",
      },
    ],
    relatedProducts: [
      { name: "UpcubeAI", href: "/products/upcube-ai" },
      { name: "Upcube Voice", href: "/products/voice" },
      { name: "Upcube Books", href: "/products/books" },
    ],
  },
  {
    slug: "upcube-avatar-preview",
    href: "/news/upcube-avatar-preview",
    productName: "Upcube Avatar Cloud",
    category: "Product Preview",
    dateLabel: "Recent update",
    headline: "Upcube Avatar Cloud preview joins the Upcube ecosystem.",
    excerpt:
      "Live AI avatars, Studio, Interactive Pages, and Avatar API are being added as a preview product for websites, demos, training, sales, support, and creator workflows.",
    heroSummary:
      "Upcube Avatar Cloud is presented as a preview product for AI avatar creation and avatar-led video experiences, with the Avatar Studio, Interactive Pages, and Avatar API shaping the product direction.",
    primaryCtaLabel: "Explore Avatar Cloud",
    primaryCtaHref: "/products/avatar",
    productPageUrl: "/products/avatar",
    seoTitle: "Upcube Avatar Cloud Preview | Live AI Avatars",
    seoDescription:
      "Preview Upcube Avatar Cloud, an AI avatar platform with Studio, Interactive Pages, and Avatar API for websites, demos, training, sales, support, and creator workflows.",
    finalCtaTitle: "Follow the avatar direction through the product preview.",
    finalCtaBody:
      "Upcube Avatar Cloud stays framed as a preview product with claim discipline around feature availability, commercial terms, and production guarantees.",
    sections: [
      {
        eyebrow: "The preview",
        title: "AI avatars entering the Upcube ecosystem",
        body: "Upcube Avatar Cloud is described as a preview product for creating live AI avatars and avatar-led video experiences. The page avoids claiming that all features are publicly available or that commercial terms are finalized.",
      },
      {
        eyebrow: "Studio",
        title: "Avatar Studio for creation and editing",
        body: "The product direction includes an Avatar Studio workspace where avatars can be created, customized, and prepared for interactive deployment.",
      },
      {
        eyebrow: "Interactive Pages",
        title: "Avatar-led interactive experiences",
        body: "Interactive Pages are positioned as a preview surface for embedding AI avatars into websites, demos, training materials, and support flows.",
      },
      {
        eyebrow: "API",
        title: "Avatar API for developer integration",
        body: "The Avatar API direction supports programmatic avatar creation, management, and deployment, described as a future-facing capability in preview.",
      },
      {
        eyebrow: "Ecosystem",
        title: "How Avatar fits the Upcube ecosystem",
        body: "Upcube Avatar Cloud is positioned alongside UpcubeAI and the broader product family as a future communication and interaction surface.",
      },
    ],
    relatedProducts: [
      { name: "UpcubeAI", href: "/products/upcube-ai" },
      { name: "Upcube Voice", href: "/products/voice" },
      { name: "Upcube OS", href: "/products/upcube-os" },
    ],
  },
  {
    slug: "upcube-research-preview",
    href: "/news/upcube-research-preview",
    productName: "Upcube Research",
    category: "Product Preview",
    dateLabel: "Recent update",
    headline:
      "Upcube Research — search, synthesize, and export web intelligence.",
    excerpt:
      "An AI-native research console for searching the web, extracting sources, synthesizing evidence, monitoring topics, and exporting structured outputs across the Upcube ecosystem.",
    heroSummary:
      "Upcube Research is an AI-native research console for AI-assisted web research, with source collection, content extraction, deep research runs, and exportable outputs as the core product direction.",
    primaryCtaLabel: "Open Research",
    primaryCtaHref: "/products/research",
    productPageUrl: "/products/research",
    seoTitle: "Upcube Research Preview | AI-Native Research Console",
    seoDescription:
      "Preview Upcube Research, an AI-native research console for searching the web, extracting clean content, organizing evidence, synthesizing findings, and exporting briefs, reports, and datasets.",
    finalCtaTitle: "Research that leaves behind something useful.",
    finalCtaBody:
      "Upcube Research is in preview — built for searching the web, collecting sources, extracting content, synthesizing findings, and turning research into outputs that carry weight.",
    sections: [
      {
        eyebrow: "The preview",
        title: "An AI-native research console",
        body: "Upcube Research helps you search across the web, collect trusted sources, extract clean content, synthesize findings, and export research into briefs, reports, datasets, and projects.",
      },
      {
        eyebrow: "Collection",
        title: "Source collection and content extraction",
        body: "Search the web with research intent, collect relevant sources, and extract clean page content, summaries, and citations into organized projects.",
      },
      {
        eyebrow: "Synthesis",
        title: "From evidence to structured output",
        body: "Compare findings across sources, synthesize the key points, and build coherent briefs, reports, and summaries that preserve the supporting evidence.",
      },
      {
        eyebrow: "Outputs",
        title: "Exportable research assets",
        body: "Turn research sessions into briefs, reports, tables, and datasets — structured outputs that can be shared, presented, or routed into the next stage of work.",
      },
      {
        eyebrow: "Ecosystem",
        title: "Research connected to execution",
        body: "A research finding can become a project note, a workflow input, an AI assistant instruction, or a product decision. Upcube Research is designed to connect web intelligence with the rest of your work.",
      },
    ],
    relatedProducts: [
      { name: "UpcubeAI", href: "/products/upcube-ai" },
      { name: "Upcube Avatar Cloud", href: "/products/avatar" },
      { name: "Upcube Books", href: "/products/books" },
    ],
  },
];

export const featuredUpcubeNewsArticle: UpcubeNewsArticle =
  upcubeNewsArticles.find((article) => article.featured) ??
  upcubeNewsArticles[0]!;

export const upcubeNewsLaunchArticles = upcubeNewsArticles.filter(
  (article) => article.category === "Product Launch",
);

export const upcubeNewsPreviewArticles = upcubeNewsArticles.filter(
  (article) => article.category === "Product Preview",
);

export function getRelatedUpcubeNewsArticles(slug: string, limit = 3) {
  const current = getUpcubeNewsArticleBySlug(slug);

  if (!current) {
    return upcubeNewsArticles.slice(0, limit);
  }

  const sameCategory = upcubeNewsArticles.filter(
    (article) => article.slug !== slug && article.category === current.category,
  );
  const fallback = upcubeNewsArticles.filter(
    (article) =>
      article.slug !== slug &&
      !sameCategory.some((candidate) => candidate.slug === article.slug),
  );

  return [...sameCategory, ...fallback].slice(0, limit);
}

export function getUpcubeNewsArticleBySlug(slug: string) {
  return upcubeNewsArticles.find((article) => article.slug === slug);
}
