"use client";

import { useState } from "react";

import { PortalFooter } from "./portal-footer";
import { PortalHeader } from "./portal-header";
import { PortalShell } from "./portal-shell";
import { SectionHeading } from "./section-heading";

type TeamsTab = "offerings" | "how" | "guardrails";

type TeamsCard = {
  id: string;
  title: string;
  summary: string;
  points: string[];
};

const teamsTabs: Array<{ id: TeamsTab; label: string }> = [
  { id: "offerings", label: "Offerings" },
  { id: "how", label: "How it works" },
  { id: "guardrails", label: "Guardrails" },
];

const teamsCards: Record<TeamsTab, TeamsCard[]> = {
  offerings: [
    {
      id: "ops",
      title: "Ops Copilot",
      summary:
        "Convert weekly priorities, blockers, and handoffs into one repeatable operating rhythm.",
      points: [
        "Weekly brief templates and ownership capture",
        "Handoff summaries with next actions",
        "Decision logs that keep context durable",
      ],
    },
    {
      id: "support",
      title: "Support quality",
      summary:
        "Keep customer response patterns consistent without reducing support to canned macros.",
      points: [
        "Triage and escalation scaffolds",
        "Runbook-linked responses for known issues",
        "Post-incident follow-up checklists",
      ],
    },
    {
      id: "product",
      title: "Execution alignment",
      summary:
        "Structure specs, test plans, and launch checklists so teams can ship with less rework.",
      points: [
        "Clear goals, non-goals, and acceptance checks",
        "Risk and dependency notes before implementation",
        "Release updates tied to actual route changes",
      ],
    },
  ],
  how: [
    {
      id: "capture",
      title: "1. Capture context once",
      summary:
        "Centralize notes, assumptions, and source links before drafting execution output.",
      points: [
        "Use one source of truth per workflow",
        "Mark unknowns as missing instead of implied",
        "Keep plan and implementation boundaries explicit",
      ],
    },
    {
      id: "compose",
      title: "2. Compose with structure",
      summary:
        "Generate taskable outputs that map to ownership, deadlines, and review gates.",
      points: [
        "Summaries with direct action blocks",
        "Reusable templates for recurring processes",
        "Scoped updates without broad rewrites",
      ],
    },
    {
      id: "review",
      title: "3. Review with accountability",
      summary:
        "Validate assumptions, capture blockers, and publish outcomes with conservative claims.",
      points: [
        "Separate local validation from production readiness",
        "Call out unresolved dependencies directly",
        "Track changes and decisions in one place",
      ],
    },
  ],
  guardrails: [
    {
      id: "ownership",
      title: "Human ownership",
      summary:
        "AI output should support decisions, not remove ownership from responsible team members.",
      points: [
        "Approval checkpoints for high-impact actions",
        "Clear owner fields for each deliverable",
        "Review-required paths for sensitive changes",
      ],
    },
    {
      id: "facts",
      title: "Evidence discipline",
      summary:
        "Keep responses grounded in source material and avoid fabricated certainty.",
      points: [
        "Explicit source references in summaries",
        "Unknowns recorded as blockers",
        "No fabricated dates, metrics, or external claims",
      ],
    },
    {
      id: "privacy",
      title: "Privacy boundaries",
      summary:
        "Constrain data handling to the minimum needed for the stated workflow.",
      points: [
        "Minimal retention posture for operational notes",
        "No implied external publishing pipeline",
        "Scoped access by role and task",
      ],
    },
  ],
};

export function TeamsPage() {
  const [activeTab, setActiveTab] = useState<TeamsTab>("offerings");
  const activeCards = teamsCards[activeTab];

  return (
    <PortalShell className="uc-portal-page">
      <PortalHeader />

      <main className="uc-main">
        <section className="uc-section uc-section-rule">
          <div className="uc-shell uc-content-stack">
            <SectionHeading
              eyebrow="Small teams and startups"
              title="UpcubeAI Teams"
              description="A lightweight operating layer for teams that need speed, structure, and clear accountability."
            />
            <div className="uc-tab-row" role="tablist" aria-label="Teams tabs">
              {teamsTabs.map((tab) => (
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
          aria-labelledby="teams-content-title"
        >
          <div className="uc-shell uc-content-stack">
            <SectionHeading
              title={
                activeTab === "offerings"
                  ? "Team-facing offerings"
                  : activeTab === "how"
                    ? "Operating model"
                    : "Guardrail model"
              }
              description="This route intentionally stays static and does not claim backend automation or external workflow orchestration."
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
