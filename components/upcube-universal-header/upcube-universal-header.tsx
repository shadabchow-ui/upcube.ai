import Link from "next/link";

import { type UpcubeAppId } from "lib/upcube-universal/apps";
import { UpcubeAppLauncher } from "./upcube-app-launcher";

type UpcubeUniversalHeaderProps = {
  currentAppId?: UpcubeAppId | null;
  className?: string;
};

const defaultLinks = [
  { id: "products", label: "Products", href: "/products/upcube-ai" },
  { id: "news", label: "News", href: "/news" },
  { id: "research", label: "Research", href: "/research" },
  { id: "trust", label: "Trust", href: "/trust" },
  { id: "company", label: "Company", href: "/company" },
];

export function UpcubeUniversalHeader({
  currentAppId,
  className,
}: UpcubeUniversalHeaderProps) {
  return (
    <header className={["uuh-header", className].filter(Boolean).join(" ")}>
      <div className="uuh-shell">
        <Link
          href="/"
          className="uuh-brand"
          aria-label="Upcube home"
          prefetch={false}
        >
          <div className="uuh-brand-mark" role="img" aria-label="Upcube" />
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
            Try Ethen
          </Link>
        </div>
      </div>
    </header>
  );
}
