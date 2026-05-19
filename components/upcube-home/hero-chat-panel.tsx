import Link from "next/link";

export const HOME_CHAT_CTA_HREF = "https://ethen.upcube.ai";

const suggestions = [
  { label: "UpcubeAI", href: "https://ethen.upcube.ai" },
  { label: "Upcube Earth", href: "https://planet.upcube.ai" },
  { label: "Upcube Books", href: "https://books.upcube.ai" },
  { label: "Upcube Games", href: "https://games.upcube.ai" },
  { label: "Upcube Cloud", href: "https://cloud.upcube.ai" },
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
            placeholder="Message UpcubeAI"
            autoComplete="off"
          />
        </div>
        <div className="uc-home__chat-composer-bar">
          <p>
            UpcubeAI, research, Upcube Earth, and developer tools from one
            prompt.
          </p>
          <button type="submit" aria-label="Open chat">
            <span>Open chat</span>
            <span className="uc-home__chat-arrow" aria-hidden="true">
              ↑
            </span>
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
