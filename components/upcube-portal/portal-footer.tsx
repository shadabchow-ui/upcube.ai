"use client";

import Link from "next/link";
import { useState } from "react";
import {
  portalFooterGroups,
  portalSocialLinks,
} from "lib/upcube-portal/content";

function SocialIcon({ label }: { label: string }) {
  switch (label) {
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M13.5 21v-7.2h2.4l.36-2.8H13.5V9.2c0-.82.22-1.38 1.4-1.38H16.4V5.3c-.26-.04-1.14-.1-2.16-.1-2.14 0-3.6 1.3-3.6 3.7V11H8.2v2.8h2.44V21h2.86Z"
            fill="currentColor"
          />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M6.44 8.28a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM5 19V9.56h2.88V19H5Zm4.68 0V9.56h2.76v1.3h.04c.38-.72 1.32-1.48 2.72-1.48 2.92 0 3.46 1.92 3.46 4.42V19h-2.88v-4.6c0-1.1-.02-2.5-1.52-2.5-1.52 0-1.76 1.2-1.76 2.42V19H9.68Z"
            fill="currentColor"
          />
        </svg>
      );
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.92A3.12 3.12 0 1 1 12 8.88a3.12 3.12 0 0 1 0 6.24Zm6.12-8.12a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0ZM21 8.14c-.04-.86-.24-1.64-.88-2.28-.64-.64-1.42-.84-2.28-.88C16.96 4.94 16.7 4.92 12 4.92c-4.7 0-4.96.02-5.84.06-.86.04-1.64.24-2.28.88-.64.64-.84 1.42-.88 2.28C2.96 9.02 2.94 9.28 2.94 14c0 4.72.02 4.98.06 5.86.04.86.24 1.64.88 2.28.64.64 1.42.84 2.28.88.88.04 1.14.06 5.84.06 4.7 0 4.96-.02 5.84-.06.86-.04 1.64-.24 2.28-.88.64-.64.84-1.42.88-2.28.04-.88.06-1.14.06-5.86 0-4.72-.02-4.98-.06-5.86Zm-1.98 7.76c-.02.72-.16 1.12-.34 1.42-.24.4-.52.68-.92.92-.3.18-.7.32-1.42.34-.78.04-1.02.06-4.34.06s-3.56-.02-4.34-.06c-.72-.02-1.12-.16-1.42-.34a2.52 2.52 0 0 1-.92-.92c-.18-.3-.32-.7-.34-1.42-.04-.78-.06-1.02-.06-4.34s.02-3.56.06-4.34c.02-.72.16-1.12.34-1.42.24-.4.52-.68.92-.92.3-.18.7-.32 1.42-.34.78-.04 1.02-.06 4.34-.06s3.56.02 4.34.06c.72.02 1.12.16 1.42.34.4.24.68.52.92.92.18.3.32.7.34 1.42.04.78.06 1.02.06 4.34s-.02 3.56-.06 4.34Z"
            fill="currentColor"
          />
        </svg>
      );
    case "X":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M18.9 4H21l-4.58 5.22L21.8 20h-4.2l-3.3-4.58L10.2 20H8.1l4.9-5.6L2.4 4h4.3l2.98 4.16L13.3 4h2.1l-4.42 5.06L18.9 4Zm-1.46 14.4h1.16L6.06 5.52H4.82L17.44 18.4Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M21.2 7.2a2.7 2.7 0 0 0-1.9-1.9c-1.68-.46-8.42-.46-8.42-.46s-6.74 0-8.42.46A2.7 2.7 0 0 0 .56 7.2 28.3 28.3 0 0 0 0 12a28.3 28.3 0 0 0 .56 4.8 2.7 2.7 0 0 0 1.9 1.9c1.68.46 8.42.46 8.42.46s6.74 0 8.42-.46a2.7 2.7 0 0 0 1.9-1.9 28.3 28.3 0 0 0 .56-4.8 28.3 28.3 0 0 0-.56-4.8ZM8.8 15.18V8.82L14.6 12 8.8 15.18Z"
            fill="currentColor"
          />
        </svg>
      );
  }
}

function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", label: "English (US)" },
    { code: "en-GB", label: "English (UK)" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
    { code: "ja", label: "日本語" },
    { code: "zh", label: "中文" },
  ];

  const currentLang = languages[0]!;

  return (
    <div style={{ position: "relative" }}>
      <button
        type="button"
        className="uc-footer-bottom-lang"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Language — English (US). Translation UI is conceptual only."
        onClick={() => setIsOpen((v) => !v)}
      >
        {currentLang.label}
        <svg
          className="uc-footer-bottom-lang-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {isOpen ? (
        <div
          role="listbox"
          aria-label="Select language"
          style={{
            position: "absolute",
            bottom: "calc(100% + 0.5rem)",
            right: 0,
            minWidth: "12rem",
            border: "1px solid var(--uc-border-soft)",
            borderRadius: "0.75rem",
            background: "#0a0a0a",
            padding: "0.35rem",
            zIndex: 50,
            boxShadow: "0 12px 36px rgba(0,0,0,0.5)",
          }}
          onMouseLeave={() => setIsOpen(false)}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              role="option"
              aria-selected={lang.code === currentLang.code}
              style={{
                display: "block",
                width: "100%",
                padding: "0.4rem 0.65rem",
                border: 0,
                borderRadius: "0.5rem",
                background:
                  lang.code === currentLang.code
                    ? "rgba(255,255,255,0.08)"
                    : "transparent",
                color: "var(--uc-text)",
                font: "inherit",
                fontSize: "0.84375rem",
                lineHeight: "1.4",
                textAlign: "left",
                cursor: "pointer",
              }}
              onClick={() => setIsOpen(false)}
            >
              {lang.label}
            </button>
          ))}
          <p
            style={{
              margin: "0.4rem 0.65rem 0",
              fontSize: "0.6875rem",
              lineHeight: "1.3",
              color: "var(--up-color-primary-50)",
            }}
          >
            Translation UI is conceptual. Full i18n is not implemented.
          </p>
        </div>
      ) : null}
    </div>
  );
}

export function PortalFooter() {
  return (
    <footer className="uc-footer">
      <div className="uc-shell uc-footer-grid">
        <div className="uc-footer-brand-stack">
          <div className="uc-footer-brand-row">
            <img
              src="/brand/logo-mark.png"
              width={44}
              height={44}
              alt="UpcubeAI"
              className="uc-footer-brand-mark"
            />
            <div>
              <p className="uc-footer-brand-tagline">The Next Frontier</p>
            </div>
          </div>
        </div>
        <div className="uc-grid uc-card-grid">
          {portalFooterGroups.map((group) => (
            <section
              key={group.id}
              aria-label={group.title}
              data-group-id={group.id}
            >
              <p className="uc-footer-heading">{group.title}</p>
              <ul className="uc-footer-list">
                {group.links.map((item) => (
                  <li key={item.id}>
                    <Link
                      className="uc-footer-link"
                      data-placeholder={item.placeholder ? "true" : undefined}
                      href={item.href}
                    >
                      {item.label}
                      {item.placeholder ? (
                        <span className="uc-nav-note" aria-hidden="true">
                          Placeholder
                        </span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <div className="uc-footer-bottom">
        <div className="uc-footer-bottom-inner">
          <div
            className="uc-footer-bottom-social"
            aria-label="Upcube social links"
          >
            {portalSocialLinks.map((item) => (
              <a
                key={item.id}
                className="uc-footer-social-icon"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
              >
                <SocialIcon label={item.label} />
              </a>
            ))}
          </div>
          <div className="uc-footer-bottom-center">
            <p className="uc-footer-bottom-copy">UpCube inc &copy; 2026</p>
            <span className="uc-footer-bottom-sep" aria-hidden="true">
              &middot;
            </span>
            <Link className="uc-footer-bottom-link" href="/legal/privacy">
              Your privacy choices
            </Link>
          </div>
          <div className="uc-footer-bottom-right">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </footer>
  );
}
