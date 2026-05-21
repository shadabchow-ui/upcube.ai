import Link from "next/link";
import {
  UPCUBE_BOOKS_URL,
  UPCUBE_CHAT_URL,
  UPCUBE_CLOUD_URL,
  UPCUBE_GAMES_URL,
  UPCUBE_JOBS_URL,
  UPCUBE_PLANET_URL,
  UPCUBE_QUANTUM_URL,
  UPCUBE_VENTARI_URL,
  UPCUBE_UNIVERSITY_URL,
} from "lib/upcube-universal/product-links";

export const HOME_CHAT_CTA_HREF = UPCUBE_CHAT_URL;

const suggestions = [
  { label: "Ethen", href: UPCUBE_CHAT_URL },
  { label: "Earth", href: UPCUBE_PLANET_URL },
  { label: "Books", href: UPCUBE_BOOKS_URL },
  { label: "Games", href: UPCUBE_GAMES_URL },
  { label: "Jobs", href: UPCUBE_JOBS_URL },
  { label: "Cloud", href: UPCUBE_CLOUD_URL },
  { label: "Quantum", href: UPCUBE_QUANTUM_URL },
  { label: "Shopping", href: UPCUBE_VENTARI_URL },
  { label: "Education", href: UPCUBE_UNIVERSITY_URL },
];

export function HeroChatPanel() {
  return (
    <section className="uc-home__chat-panel" aria-label="UpcubeAI chat entry">
      <form className="uc-home__chat-composer" action={HOME_CHAT_CTA_HREF}>
        <div className="uc-home__chat-composer-field">
          <label className="uc-home__sr-only" htmlFor="upcube-home-prompt">
            Prompt
          </label>
          <textarea
            id="upcube-home-prompt"
            name="prompt"
            rows={2}
            placeholder="Ask anything. Start with one prompt."
            autoComplete="off"
          />
        </div>
        <div className="uc-home__chat-composer-bar">
          <button type="submit" aria-label="Send to Ethen">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 8h10M8 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </form>

      <div
        className="uc-home__chat-suggestions"
        aria-label="Prompt suggestions"
      >
        {suggestions.map((suggestion) => (
          <Link href={suggestion.href} key={suggestion.label}>
            {suggestion.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
