import "app/styles/upcube-longform.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Assistant Platform Monorepo Case Study | UpcubeAI",
  description:
    "A founder-engineering case study on building a production-style AI assistant platform monorepo with app surfaces, backend services, evaluation assets, governance artifacts, deployment foundations, and platform contracts.",
};

const facts = [
  ["Project type", "Private engineering case study"],
  ["Role", "Founder-engineer / full-stack platform engineer"],
  ["Repository shape", "Monorepo with apps, packages, services, infrastructure, scripts, docs, evaluations, and platform contracts"],
  ["Visible engineering history", "281 commits, 62 branches, 2 pull requests, 2 issues, and 6 deployment records at time of capture"],
  ["Main surfaces", "Assistant UI, backend-for-frontend services, live progress streaming, evaluation assets, governance documentation, and deployment foundations"],
];

const layers = [
  {
    title: "Application layer",
    body: "Built assistant-facing application surfaces, premium UI work, public route indexing, and product-facing flows that connect the assistant experience to deployable web routes.",
  },
  {
    title: "Backend service layer",
    body: "Structured backend-for-frontend service boundaries so user-facing app behavior, streaming workflows, and platform orchestration could evolve without turning the frontend into a service integration dump.",
  },
  {
    title: "Streaming and progress layer",
    body: "Worked on live web-search progress streaming so assistant workflows could expose intermediate progress instead of behaving like opaque request/response calls.",
  },
  {
    title: "Evaluation layer",
    body: "Maintained evaluation assets for readiness checks, assistant behavior review, and agent workflow validation, giving the project a repeatable improvement loop beyond manual UI testing.",
  },
  {
    title: "Governance and contracts",
    body: "Built governance and platform-contract documentation around audit integrity, compliance evidence, service-level gates, rollout readiness, and canary release planning.",
  },
  {
    title: "Infrastructure and deployment",
    body: "Organized CI workflows, infrastructure folders, gateway extension work, staging deployment records, and public route sitemap generation as first-class engineering outputs.",
  },
];

const decisions = [
  {
    title: "Use a monorepo for coordinated platform work",
    body: "The platform needed coordinated changes across app surfaces, shared packages, backend services, evaluation assets, infrastructure, and platform contracts. Keeping those layers together made cross-cutting work easier to review and validate.",
  },
  {
    title: "Separate backend orchestration from the frontend",
    body: "The backend-for-frontend layer creates a clean boundary for streaming workflows, service orchestration, and platform concerns instead of pushing all integration complexity into the UI layer.",
  },
  {
    title: "Treat evaluations as part of the product",
    body: "Assistant quality cannot be managed only through manual testing. Evaluation assets create a repeatable way to review behavior, readiness, and regressions as the platform changes.",
  },
  {
    title: "Add governance before scale",
    body: "Assistant systems need traceability, policy controls, audit integrity, and rollout discipline before they can be trusted in operational workflows.",
  },
  {
    title: "Make deployment readiness visible",
    body: "Staging records, public route indexing, infrastructure work, and rollout plans were treated as engineering outputs rather than afterthoughts.",
  },
];

export default function AIAssistantPlatformCaseStudyPage() {
  return (
    <div className="uc-longform-page">
      <section className="uc-longform-hero">
        <div className="uc-container uc-longform-hero-copy">
          <p className="uc-eyebrow">Founder engineering case study</p>
          <h1 className="uc-longform-hero-title">
            AI Assistant Platform Monorepo: building a governed assistant system from UI to infrastructure.
          </h1>
          <p className="uc-longform-hero-subtitle">
            A private full-stack AI platform with assistant UI, backend services, evaluation workflows, governance artifacts, audit integrity, deployment foundations, and platform contracts.
          </p>
          <p className="uc-longform-hero-desc">
            This case study documents a production-style assistant platform build. It is not presented as a finished enterprise product; it is an engineering case study showing how the project was structured beyond a simple chat interface.
          </p>
        </div>
      </section>

      <article className="uc-longform-body">
        <Link className="uc-longform__back" href="/">
          ← Back to home
        </Link>

        <h2>Project facts</h2>
        <ul>
          {facts.map(([label, value]) => (
            <li key={label}>
              <strong>{label}:</strong> {value}
            </li>
          ))}
        </ul>

        <h2>Problem</h2>
        <p>
          Most assistant prototypes stop at a chat interface. This project explored what it takes to build an assistant platform that can become operational: user-facing UI, backend service boundaries, live progress streaming, evaluation assets, governance documentation, audit integrity, rollout readiness, and deployment workflows.
        </p>
        <p>
          The goal was to prove that an assistant system needs more than prompt handling. It needs repeatable engineering layers that make behavior easier to evaluate, deploy, audit, and improve.
        </p>

        <h2>Architecture overview</h2>
        <p>
          The repository was structured as a platform monorepo rather than a one-off app. The core layers were organized around app surfaces, backend services, shared packages, platform contracts, evaluation assets, governance documents, and infrastructure.
        </p>
        <pre>{`User-facing app surfaces
  ↓
Assistant UI + public routes
  ↓
Backend-for-frontend services
  ↓
Shared packages + platform contracts
  ↓
Evaluation assets + governance docs
  ↓
Infrastructure + CI/CD + deployment workflows`}</pre>

        <h2>What I built</h2>
        {layers.map((layer) => (
          <section key={layer.title}>
            <h3>{layer.title}</h3>
            <p>{layer.body}</p>
          </section>
        ))}

        <h2>Technical decisions</h2>
        {decisions.map((decision) => (
          <section key={decision.title}>
            <h3>{decision.title}</h3>
            <p>{decision.body}</p>
          </section>
        ))}

        <h2>Evidence</h2>
        <ul>
          <li>281 commits and 62 branches at time of capture.</li>
          <li>Two pull requests, two issues, and six deployment records.</li>
          <li>Repository layers for apps, packages, backend services, infrastructure, scripts, documentation, evaluations, and platform contracts.</li>
          <li>Recent work across assistant UI, live search progress streaming, staging deployment foundations, route indexing, audit integrity, compliance evidence, service-level gates, and rollout readiness.</li>
        </ul>

        <h2>Challenges</h2>
        <p>
          The hardest part was keeping the project from becoming only a chat UI. The platform needed separate layers for app experience, backend services, evaluation, governance, infrastructure, and deployment. Another challenge was maintaining credibility: the system needed real engineering artifacts such as CI workflows, platform contracts, evaluations, staging deployment records, and audit-readiness documentation.
        </p>
        <p>
          At the time of capture, the staging deployment required follow-up repair. I kept that visible because real deployment workflows include failures, fixes, rollback planning, and validation, not only polished screenshots.
        </p>

        <h2>Result</h2>
        <p>
          The project became a structured assistant-platform codebase rather than a standalone chat demo. It connected product UI, backend service boundaries, evaluation assets, governance documentation, infrastructure foundations, deployment records, and rollout planning into one engineering system.
        </p>

        <h2>What I learned</h2>
        <p>
          This project strengthened my understanding of AI platform engineering beyond prompt interfaces. Service boundaries, streaming UX, evaluation loops, governance artifacts, CI/CD, route indexing, staging environments, and rollout readiness all matter when building assistant systems that feel operational.
        </p>

        <h2>Resume-ready summary</h2>
        <ul>
          <li>Built a private AI assistant platform monorepo with app surfaces, shared packages, backend-for-frontend services, infrastructure, documentation, evaluation assets, scripts, and platform contracts.</li>
          <li>Implemented assistant UI, live web-search progress streaming, public route indexing, staging deployment foundations, governance documentation, audit-integrity hardening, and rollout-readiness workflows.</li>
          <li>Maintained 281 commits across 62 branches with CI/CD workflows, deployment records, evaluation assets, platform contracts, and backend service boundaries.</li>
        </ul>
      </article>
    </div>
  );
}
