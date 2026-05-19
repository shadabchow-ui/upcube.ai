import Link from "next/link";

import { chatExamples, chatFeatures } from "lib/upcube-portal/content";
import { PortalFooter } from "./portal-footer";
import { PortalHeader } from "./portal-header";
import { PortalShell } from "./portal-shell";
import { SectionHeading } from "./section-heading";

export function ChatPage() {
  return (
    <PortalShell className="uc-portal-page">
      <PortalHeader />

      <main>
        <section className="uc-section uc-section-rule">
          <div className="uc-shell uc-content-stack">
            <SectionHeading
              eyebrow="UpcubeAI product"
              title="UpcubeAI Chat"
              description="A focused assistant for planning, writing, and execution across commerce and product workflows."
            />
            <div className="uc-actions">
              <Link href="#chat-use-cases" className="uc-button">
                Explore use cases
              </Link>
              <Link href="/" className="uc-nav-link">
                Return to portal home
              </Link>
            </div>
          </div>
        </section>

        <section
          className="uc-section uc-section-rule"
          aria-labelledby="chat-use-cases-title"
          id="chat-use-cases"
        >
          <div className="uc-shell uc-content-stack">
            <SectionHeading
              title="Use-case prompt examples"
              description="Example prompts show how the chat workspace can structure launch planning, research synthesis, and validation follow-up."
              className="uc-section-heading--compact"
            />
            <div className="uc-grid uc-card-grid">
              {chatExamples.map((item) => (
                <article key={item.id} className="uc-card">
                  <h3 className="uc-card-title">{item.title}</h3>
                  <p className="uc-eyebrow">Prompt</p>
                  <p className="uc-card-copy">{item.prompt}</p>
                  <p className="uc-eyebrow">Result</p>
                  <p className="uc-card-copy">{item.outcome}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="uc-section uc-section-rule"
          aria-labelledby="chat-capabilities-title"
        >
          <div className="uc-shell uc-content-stack">
            <SectionHeading
              title="Core capabilities"
              description="The current route is a static overview, but it now links cleanly into the live portal surface."
              className="uc-section-heading--compact"
            />
            <div className="uc-grid uc-card-grid">
              {chatFeatures.map((feature) => (
                <article key={feature.id} className="uc-card">
                  <h3 className="uc-card-title">{feature.title}</h3>
                  <p className="uc-card-copy">{feature.description}</p>
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
