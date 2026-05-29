# Upcube Research Product Page Rebuild Plan

## Goal

Update `https://upcube.ai/products/research/` into a premium AI research console page inspired by Exa’s product positioning, while keeping the language original to Upcube.

The page should communicate:

> Upcube Research is the research layer of the Upcube ecosystem. It helps users search, extract, organize, monitor, synthesize, and reuse web knowledge so research becomes a durable asset, not a temporary chat answer or forgotten browser session.

## Current issue

The current page has a clean base, but it is too thin. It explains the product in a simple way, but it does not yet show enough depth, capability, trust, workflow, or ecosystem value.

Current positioning:

> Research that turns scattered sources into organized decisions.

This is clear, but it feels closer to a note-taking tool than a serious AI-native research console.

## Recommended positioning

Position Upcube Research as:

> An AI-native research console for finding, collecting, monitoring, synthesizing, and exporting trusted web knowledge.

This lets the page speak to people who need research for decisions, products, companies, markets, content, reports, and workflows.

## Exa-inspired feature translation

Use Exa as a feature reference, not as copy to duplicate.

| Exa-style concept             | Upcube Research version                                   |
| ----------------------------- | --------------------------------------------------------- |
| Search API / AI search engine | Research console for AI-assisted discovery                |
| Websets / crawling / contents | Source gathering, page extraction, saved evidence         |
| Deep Search                   | Multi-step research runs                                  |
| Monitors                      | Watchlists and recurring source monitoring                |
| Agent                         | Research assistant that plans, searches, and summarizes   |
| Contents API                  | Extracted pages, citations, summaries, reusable knowledge |

## Tone guide

The page should sound premium, clear, confident, and useful.

Use:

- Strong product marketing language
- Clear explanatory paragraphs
- Apple-style simplicity without becoming vague
- Original Upcube wording
- Human language regular users can understand
- Enough detail to make the product feel real

Avoid:

- Too many one-line slogans
- Generic SaaS phrases
- Unsupported technical claims
- Copying Exa headlines or wording directly
- API-only language unless the product actually supports it
- Claims like “real-time web index” unless implemented

## Recommended page structure

### 1. Hero section

Purpose: make the product feel bigger, sharper, and more premium.

Recommended eyebrow:

> Research & web intelligence

Recommended headline options:

> Research the web like an operating system for knowledge.

Alternative:

> Turn the open web into structured research, cited answers, and reusable intelligence.

Recommended body copy:

> Upcube Research helps you search across the web, collect trusted sources, synthesize findings, monitor changing topics, and export research into briefs, reports, datasets, workflows, and projects.

Recommended CTAs:

- Open Research
- Explore Upcube AI

Recommended hero bullets:

- Search and gather sources from across the web.
- Extract clean page content, summaries, and citations.
- Run deeper research workflows across topics, companies, markets, and questions.

### 2. Research system section

Section idea:

> Built for research that does not stop at search.

Core message:

> Search gives you links. Upcube Research gives you a working research system.

This section should explain that Upcube Research helps users move from question to evidence to decision.

It should cover:

- Finding relevant sources
- Understanding what each source says
- Saving evidence into projects
- Comparing sources side by side
- Tracking changes over time
- Turning research into usable outputs

Suggested copy:

> Upcube Research is built for work that requires more than a quick answer. It helps you discover sources, extract clean content, compare evidence, and build structured outputs that can be checked, shared, and reused.

### 3. Core capability grid

Recommended feature cards:

| Feature            | Description                                                                            |
| ------------------ | -------------------------------------------------------------------------------------- |
| AI web search      | Search across web sources with research intent, not just keywords.                     |
| Source collection  | Save links, notes, snippets, citations, and evidence into organized projects.          |
| Content extraction | Pull clean page content from articles, websites, documents, and public pages.          |
| Deep research runs | Break big questions into smaller searches and synthesize the findings.                 |
| Research monitors  | Track topics, companies, competitors, regulations, market shifts, and product changes. |
| Exportable outputs | Turn findings into briefs, reports, tables, datasets, and workflow inputs.             |

Suggested supporting copy:

> Move from scattered tabs to a research workspace where every source, note, summary, and citation has a place.

### 4. Workflow section

Recommended section title:

> From question to source-backed output.

Recommended steps:

1. Ask a research question.
2. Gather and extract sources.
3. Synthesize findings into a structured brief.
4. Save, monitor, export, and reuse the work.

Suggested copy:

> Every research run should leave behind something useful. Upcube Research helps turn a question into saved evidence, a structured answer, and an output that can move into the rest of your work.

### 5. Use case section

Recommended use cases:

- Market research
- Competitive intelligence
- Product research
- Academic-style source gathering
- Content and SEO research
- Company and investment research
- Policy and regulatory tracking
- Internal knowledge building

Suggested section copy:

> Use Upcube Research when the answer needs sources, context, structure, and a place to live after the first search is done.

### 6. Monitor section

Recommended section title:

> Monitor what changes.

Suggested copy:

> Research is not finished when the first answer is written. Track companies, topics, competitors, technologies, markets, and policies over time, then surface what changed when it matters.

This can be framed carefully if live monitoring is not fully implemented yet. If needed, use softer language such as “designed to support” or “built around monitor-ready research workflows.”

### 7. Upcube ecosystem section

Recommended section title:

> Research connected to execution.

Suggested copy:

> A research finding can become a project note, a workflow input, a data object, a marketplace asset, a course outline, a product decision, or an AI assistant instruction. Upcube Research is designed to connect discovery with execution.

This section should connect Research to:

- Upcube AI Console
- Avatar / assistant surfaces
- Projects
- Workflow
- Data
- Commerce
- Marketplace
- Jobs or Academy where relevant

### 8. Final CTA section

Recommended headline:

> Start with a question. Leave with a research asset.

Recommended body:

> Open a research workspace, gather sources, synthesize the evidence, and turn what you learn into something you can save, share, export, or build on.

Recommended CTAs:

- Open Research
- Explore Upcube AI

## Visual direction

The current abstract image is clean but generic. A stronger visual would show product-like research cards instead of only artwork.

Recommended hero visual content:

Card title:

> Research run: AI search platforms

Card details:

- 42 sources scanned
- 12 sources saved
- 6 high-confidence citations
- 3 market signals detected
- Export: Brief, Table, Workflow

Additional visual cards could include:

- Source extraction card
- Citation list card
- Research monitor card
- Export options card
- Saved evidence library card

The design should stay premium, mostly black, white, and gray, with restrained accents only if already part of the brand system.

## Implementation audit paths

Before editing, inspect the repo to find the actual route and component structure.

Likely paths to check:

```txt
app/products/research/page.tsx
app/(marketing)/products/research/page.tsx
app/products/page.tsx
components/
lib/
content/
public/
```

Do not assume the route until inspection confirms it.

## Safe implementation phases

### Phase 1 — Audit current page

Find:

- Exact research page file
- Shared product page components
- Existing design system classes
- Existing CTA components
- Existing nav/footer wrappers
- Product data files feeding the page

Output:

- File map
- Current page structure
- Recommended edit paths
- Any blockers

### Phase 2 — Rewrite page content

Replace thin copy with:

- Stronger hero
- Research system explanation
- Capability grid
- Workflow section
- Use case section
- Ecosystem CTA

Keep all copy original to Upcube.

### Phase 3 — Improve visual cards

Replace or supplement the generic visual with product-style cards showing:

- Research run summary
- Source extraction
- Citation evidence
- Monitoring
- Export options

### Phase 4 — QA and validation

Run:

```bash
npm run lint
npm run build
```

If the repo uses a different package manager, inspect `package.json` first and use the correct commands.

Manual checks:

- `/products/research/` loads successfully
- Mobile layout works
- Header and footer remain intact
- CTAs link correctly
- No placeholder text remains
- No Exa branding remains
- No copied Exa wording appears
- No unsupported claims are introduced
- Page still matches Upcube’s black/white/gray premium style

## Claims and safety rules

Do not claim features that are not implemented unless phrased as product direction or capability design.

Avoid unsupported claims such as:

- Real-time web index
- Fully autonomous agent
- Live crawling at scale
- Production API endpoints
- Guaranteed source accuracy
- Enterprise compliance certifications

Safe language examples:

- “Designed to help...”
- “Built around...”
- “Helps users...”
- “Can support workflows such as...”
- “Research-ready workspace for...”

## Final page thesis

> Upcube Research is a source-backed research workspace for the Upcube ecosystem. It helps users search the web, extract useful content, organize evidence, synthesize findings, monitor important topics, and turn research into reusable outputs for projects, workflows, reports, and decisions.
