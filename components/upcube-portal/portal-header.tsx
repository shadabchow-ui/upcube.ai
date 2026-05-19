"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { UpcubeAppLauncher } from "components/upcube-universal-header/upcube-app-launcher";
import {
  portalActionNav,
  portalAppLinks,
  portalMenuGroups,
  portalPrimaryNav,
} from "lib/upcube-portal/content";

export function PortalHeader() {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const menuShellRef = useRef<HTMLDivElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const activeMenu =
    portalMenuGroups.find((group) => group.id === activeMenuId) ?? null;
  const menuGroupIds = new Set(portalMenuGroups.map((group) => group.id));
  const directNavItems = portalPrimaryNav.filter(
    (item) => !menuGroupIds.has(item.id),
  );

  function clearCloseTimer() {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function queueClose() {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setActiveMenuId(null);
      closeTimerRef.current = null;
    }, 120);
  }

  useEffect(() => {
    if (!activeMenuId) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        menuShellRef.current &&
        !menuShellRef.current.contains(event.target as Node)
      ) {
        clearCloseTimer();
        setActiveMenuId(null);
      }

      if (
        isMobileMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        clearCloseTimer();
        setActiveMenuId(null);
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeMenuId, isMobileMenuOpen]);

  useEffect(() => {
    function handleViewportChange() {
      if (window.innerWidth >= 900) {
        setIsMobileMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleViewportChange);
    return () => {
      window.removeEventListener("resize", handleViewportChange);
    };
  }, []);

  useEffect(
    () => () => {
      clearCloseTimer();
    },
    [],
  );

  return (
    <header className="uc-header" ref={headerRef}>
      <div className="uc-shell uc-header-inner">
        <Link href="/" className="uc-brand" aria-label="UpcubeAI home">
          <img
            src="/brand/logo-mark.png"
            width={36}
            height={36}
            alt="UpcubeAI"
            className="uc-brand-mark"
          />
        </Link>

        <div
          className="uc-header-menu-shell"
          ref={menuShellRef}
          onMouseEnter={clearCloseTimer}
          onMouseLeave={queueClose}
          onBlur={(event) => {
            const nextTarget = event.relatedTarget as Node | null;
            if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
              clearCloseTimer();
              setActiveMenuId(null);
            }
          }}
        >
          <nav className="uc-header-nav" aria-label="Portal primary">
            <ul className="uc-nav-list">
              {portalMenuGroups.map((group) => (
                <li className="uc-nav-item" key={group.id}>
                  <button
                    type="button"
                    className="uc-nav-trigger"
                    aria-expanded={activeMenu?.id === group.id}
                    aria-controls={`uc-header-mega-${group.id}`}
                    onMouseEnter={() => {
                      clearCloseTimer();
                      setActiveMenuId(group.id);
                    }}
                    onFocus={() => {
                      clearCloseTimer();
                      setActiveMenuId(group.id);
                    }}
                    onClick={() => {
                      clearCloseTimer();
                      setActiveMenuId(group.id);
                    }}
                  >
                    {group.title}
                  </button>
                </li>
              ))}
              {directNavItems.map((item) => (
                <li className="uc-nav-item" key={item.id}>
                  <Link className="uc-nav-link" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {activeMenu ? (
            <div
              className="uc-header-mega-wrap"
              onMouseEnter={clearCloseTimer}
              onMouseLeave={queueClose}
            >
              <div
                id={`uc-header-mega-${activeMenu.id}`}
                className="uc-header-mega-panel"
                role="group"
                aria-label={`${activeMenu.title} menu`}
              >
                <p className="uc-header-mega-label">{activeMenu.title}</p>
                <div className="uc-header-mega-grid">
                  {activeMenu.items.map((item) => (
                    <Link
                      key={item.id}
                      className="uc-header-mega-link"
                      href={item.href}
                      onClick={() => {
                        clearCloseTimer();
                        setActiveMenuId(null);
                      }}
                    >
                      <span>{item.label}</span>
                      <small>{item.description ?? ""}</small>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="uc-header-actions">
          <UpcubeAppLauncher />
          {portalActionNav.map((item, index) => (
            <Link
              key={item.id}
              className="uc-button"
              data-variant={item.id === "chat" ? "solid" : undefined}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="uc-mobile-menu-shell">
          <button
            type="button"
            className="uc-mobile-menu-button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="uc-mobile-menu-panel"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>

          {isMobileMenuOpen ? (
            <div
              id="uc-mobile-menu-panel"
              className="uc-mobile-menu-panel"
              aria-label="Portal mobile menu"
            >
              <nav
                className="uc-mobile-menu-nav"
                aria-label="Portal mobile primary"
              >
                {portalPrimaryNav.map((item) => (
                  <Link
                    key={item.id}
                    className="uc-mobile-menu-link"
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="uc-mobile-menu-apps">
                <p className="uc-mobile-menu-label">Apps</p>
                <div className="uc-mobile-menu-app-grid">
                  {portalAppLinks.map((item) => (
                    <Link
                      key={item.id}
                      className="uc-mobile-menu-app-link"
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {portalActionNav.map((item) => (
                <Link
                  key={item.id}
                  className="uc-mobile-menu-cta"
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
