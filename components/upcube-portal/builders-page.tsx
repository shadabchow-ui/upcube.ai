"use client";

import { useState } from "react";

import { PortalFooter } from "./portal-footer";
import { PortalHeader } from "./portal-header";
import { PortalShell } from "./portal-shell";
import { SectionHeading } from "./section-heading";

type BuildersTab = "offerings" | "workflow" | "governance";

type BuildersCard = {
  id: string;
  title: string;
  summary: string;
  points: string[];
};

const buildersTabs: Array<{ id: BuildersTab; label: string }> = [
  { id: "offerings", label: "Offerings" },
  { id: "workflow", label: "Build workflow" },
  { id: "governance", label: "Security and governance" },
];

const buildersCards: Record<BuildersTab, BuildersCard[]> = {
  offerings: [
    {
      id: "sdk",
      title: "Product AI SDK",
      summary:
        "Typed endpoints and structured outputs for chat, tools, and retrieval flows.",
      points: [
        "Streaming responses and tool-calling boundaries",
        "Schema validation and retry-safe output handling",
        "Workspace-aware delivery without runtime guesswork",
      ],
    },
    {
      id: "evals",
      title: "Evaluation harness",
      summary:
        "Regression checks for prompts, retrieval behavior, and tool chains before release.",
      points: [
        "Golden-set comparisons and rubric scoring",
        "Release gating for quality and cost drift",
        "Clear pass/fail framing for launch readiness",
      ],
    },
    {
      id: "observability",
      title: "Run observability",
      summary:
        "Trace-first run records to inspect latency, cost, and failure patterns.",
      points: [
        "Deterministic run replay for debugging",
        "Error taxonomy and incident triage signals",
        "Operator-friendly summaries for release review",
      ],
    },
  ],
  workflow: [
    {
      id: "plan",
      title: "1. Plan and scope",
      summary:
        "Define goals, non-goals, and route/component boundaries before implementation.",
      points: [
        "Declare where static placeholders are intentional",
        "Separate implementation proof from production claims",
        "Keep app links and route ownership explicit",
      ],
    },
    {
      id: "build",
      title: "2. Implement with gates",
      summary:
        "Build in small slices with local checks and explicit claim boundaries.",
      points: [
        "Use typed interfaces and stable class families",
        "Keep styles scoped to portal surfaces",
        "Avoid hidden runtime dependencies",
      ],
    },
    {
      id: "review",
      title: "3. Review and ship",
      summary:
        "Run validations, capture blockers, and document unresolved constraints.",
      points: [
        "Flag environment blockers separately from code defects",
        "Report missing prerequisites instead of fabricating success",
        "Publish clear next actions for follow-up",
      ],
    },
  ],
  governance: [
    {
      id: "policy",
      title: "Policy controls",
      summary:
        "Runtime controls should be explicit and reviewable before enabling broad automation.",
      points: [
        "Role-based access and approval checkpoints",
        "Tool allowlists with constrained parameters",
        "Boundary-first defaults for risky operations",
      ],
    },
    {
      id: "data",
      title: "Data handling",
      summary:
        "Keep handling rules narrow, trackable, and tied to concrete product flows.",
      points: [
        "Minimal data collection and retention posture",
        "Clear source attribution and evidence boundaries",
        "No hidden persistence assumptions",
      ],
    },
    {
      id: "audit",
      title: "Auditability",
      summary:
        "Operational visibility should capture what changed, why, and by whom.",
      points: [
        "Run-level logs with timestamps and ownership",
        "Release notes for policy and workflow changes",
        "Deterministic rollback planning for critical paths",
      ],
    },
  ],
};

export function BuildersPage() {
  const [activeTab, setActiveTab] = useState<BuildersTab>("offerings");
  const activeCards = buildersCards[activeTab];

  return (
    <PortalShell className="uc-portal-page">
      <PortalHeader />

      <main className="uc-main">
        <section className="uc-section uc-section-rule">
          <div className="uc-shell uc-content-stack">
            <SectionHeading
              eyebrow="Builders and Developers"
              title="UpcubeAI Builders"
              description="A practical view of how builders can ship AI features with typed interfaces, evaluation gates, and operational guardrails."
            />
            <div
              className="uc-tab-row"
              role="tablist"
              aria-label="Builders tabs"
            >
              {buildersTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  className="uc-tab-button"
                  aria-selected={activeTab === tab.id}
                  data-active={activeTab === tab.id ? "true" : undefined}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section
          className="uc-section uc-section-rule"
          aria-labelledby="builders-content-title"
        >
          <div className="uc-shell uc-content-stack">
            <SectionHeading
              title={
                activeTab === "offerings"
                  ? "Current offering surfaces"
                  : activeTab === "workflow"
                    ? "Implementation workflow"
                    : "Governance posture"
              }
              description="This route is static and local to the current repo; production rollout controls are not provided here."
              className="uc-section-heading--compact"
            />
            <div className="uc-grid uc-card-grid">
              {activeCards.map((card) => (
                <article key={card.id} className="uc-card">
                  <h3 className="uc-card-title">{card.title}</h3>
                  <p className="uc-card-copy">{card.summary}</p>
                  <ul className="uc-bullet-list">
                    {card.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <PortalFooter />
    </PortalShell>
  );
}
