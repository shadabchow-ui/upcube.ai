"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import {
  filterSearchLinks,
  getFirstSearchResult,
  searchGroups,
  type SearchLink,
} from "lib/upcube-portal/search";

type PortalSearchProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function PortalSearch({ isOpen, onClose }: PortalSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchLink[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const panelId = useId();
  const inputId = useId();
  const listId = useId();
  const listboxId = useId();
  const router = useRouter();

  const hasQuery = query.trim().length > 0;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setResults([]);
      setSelectedIndex(-1);
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (hasQuery) {
      setResults(filterSearchLinks(query));
      setSelectedIndex(-1);
    } else {
      setResults([]);
    }
  }, [query, hasQuery]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      onClose();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const currentList = hasQuery ? results : [];
      setSelectedIndex((prev) =>
        prev < currentList.length - 1 ? prev + 1 : prev,
      );
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
      return;
    }

    if (event.key === "Enter") {
      if (hasQuery) {
        const first = getFirstSearchResult(query);
        if (first) {
          onClose();
          router.push(first.href);
        }
      }
    }
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (hasQuery) {
      const first = getFirstSearchResult(query);
      if (first) {
        onClose();
        router.push(first.href);
      }
    }
  }

  const linkClassName =
    "uc-search-link" +
    (selectedIndex >= 0 ? " uc-search-link--highlighted" : "");

  if (!isOpen) {
    return null;
  }

  return (
    <div className="uc-search-panel-wrap" ref={panelRef}>
      <div
        id={panelId}
        className="uc-search-panel"
        role="dialog"
        aria-label="Search Upcube"
      >
        <form
          className="uc-search-form"
          onSubmit={handleSubmit}
          role="search"
          aria-label="Search Upcube products, research, and pages"
        >
          <div className="uc-search-input-shell">
            <MagnifyingGlassIcon
              className="uc-search-input-icon"
              aria-hidden="true"
            />
            <input
              ref={inputRef}
              id={inputId}
              className="uc-search-input"
              type="search"
              placeholder="Search Upcube products, research, news, and trust"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={handleKeyDown}
              aria-controls={hasQuery ? listboxId : listId}
              aria-expanded={hasQuery}
              autoComplete="off"
              spellCheck={false}
            />
            <button
              type="submit"
              className="uc-search-submit"
              aria-label="Search"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4.167 10h11.666M11.667 5.833 15.833 10l-4.166 4.167"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </form>

        <div className="uc-search-body">
          {hasQuery ? (
            <>
              {results.length > 0 ? (
                <ul
                  id={listboxId}
                  className="uc-search-results"
                  role="list"
                  aria-label="Search results"
                >
                  {results.map((link, index) => (
                    <li key={link.id}>
                      <Link
                        className={
                          index === selectedIndex
                            ? "uc-search-result uc-search-result--selected"
                            : "uc-search-result"
                        }
                        href={link.href}
                        onClick={onClose}
                      >
                        <span className="uc-search-result-label">
                          {link.label}
                        </span>
                        {link.detail ? (
                          <span className="uc-search-result-detail">
                            {link.detail}
                          </span>
                        ) : null}
                        <span className="uc-search-result-href">
                          {link.href}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="uc-search-empty">
                  No results found for &ldquo;{query.trim()}&rdquo;
                </p>
              )}
            </>
          ) : (
            <div id={listId} className="uc-search-suggestions">
              {searchGroups.map((group) => (
                <section
                  key={group.id}
                  className="uc-search-group"
                  aria-labelledby={`uc-search-group-${group.id}`}
                >
                  <h3
                    id={`uc-search-group-${group.id}`}
                    className="uc-search-group-title"
                  >
                    {group.title}
                  </h3>
                  <ul
                    className="uc-search-group-list"
                    role="list"
                    aria-label={group.title}
                  >
                    {group.links.slice(0, 8).map((link) => (
                      <li key={link.id}>
                        <Link
                          className="uc-search-link"
                          href={link.href}
                          onClick={onClose}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
