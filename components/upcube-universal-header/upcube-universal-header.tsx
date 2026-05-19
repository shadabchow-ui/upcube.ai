import Link from "next/link";

import { type UpcubeAppId } from "lib/upcube-universal/apps";
import { UpcubeAppLauncher } from "./upcube-app-launcher";

type UpcubeUniversalHeaderProps = {
  currentAppId?: UpcubeAppId | null;
  className?: string;
};

const defaultLinks = [
  { id: "news", label: "News", href: "https://upcube.ai/news" },
  { id: "research", label: "Research", href: "https://upcube.ai/research" },
  {
    id: "enterprise",
    label: "Enterprise",
    href: "https://upcube.ai/enterprise",
  },
  { id: "trust", label: "Trust", href: "https://upcube.ai/trust" },
];

export function UpcubeUniversalHeader({
  currentAppId,
  className,
}: UpcubeUniversalHeaderProps) {
  return (
    <header className={["uuh-header", className].filter(Boolean).join(" ")}>
      <div className="uuh-shell">
        <Link
          href="https://upcube.ai"
          className="uuh-brand"
          aria-label="Upcube home"
          prefetch={false}
        >
          <img
            src="/brand/logo-mark.png"
            alt=""
            width={30}
            height={30}
            className="uuh-brand-mark"
          />
          <span className="uuh-brand-label">Upcube</span>
        </Link>

        <nav className="uuh-nav" aria-label="Universal navigation">
          {defaultLinks.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="uuh-nav-link"
              prefetch={false}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="uuh-actions">
          <UpcubeAppLauncher currentAppId={currentAppId} />
          <Link
            href="https://ethen.upcube.ai"
            className="uuh-open-chat"
            prefetch={false}
          >
            Open chat
          </Link>
        </div>
      </div>
    </header>
  );
}
