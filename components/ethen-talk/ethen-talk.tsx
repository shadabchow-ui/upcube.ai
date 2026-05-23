"use client";

import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import "app/styles/ethen-talk.css";

type PanelState = "idle" | "loading" | "ready" | "error";

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, string | undefined>,
    ) => void;
  }
}

const starters = [
  { label: "Help me choose a product", href: "/products" },
  { label: "I want to build with AI", href: "/products/upcube-ai" },
  { label: "I need cloud tools", href: "/products/cloud" },
  { label: "I'm a founder", href: "/products" },
  { label: "I'm a student", href: "/products/university" },
  { label: "I want to explore Upcube", href: "/products" },
];

const fallbackCtas = [
  { label: "Explore all products", href: "/products" },
  { label: "Try Upcube AI", href: "/products/upcube-ai" },
  { label: "Open the product console", href: "/products" },
];

function trackEvent(action: string, label?: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, label ? { event_label: label } : undefined);
  }
}

export function EthenTalk() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<PanelState>("idle");
  const [conversationUrl, setConversationUrl] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const closePanel = useCallback(() => {
    setOpen(false);
    setTimeout(() => {
      setState("idle");
      setConversationUrl(null);
    }, 300);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        closePanel();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, closePanel]);

  const startConversation = useCallback(async () => {
    trackEvent("ethen_talk_open");
    setState("loading");
    setOpen(true);

    try {
      const res = await fetch("https://upcube-tavus.shadabchow.workers.dev", {
        method: "POST",
      });
      if (!res.ok) {
        throw new Error("Failed to create conversation");
      }
      const data = (await res.json()) as {
        conversation_url?: string;
        conversation_id?: string;
      };

      if (!data.conversation_url) {
        throw new Error("No conversation URL returned");
      }

      setConversationUrl(data.conversation_url);
      setState("ready");
      trackEvent("ethen_conversation_ready");
    } catch {
      setState("error");
      trackEvent("ethen_conversation_error");
    }
  }, []);

  const showStarters = state === "loading" || state === "idle";

  return (
    <>
      <button
        className="ethen-talk__fab"
        onClick={startConversation}
        aria-label="Talk to Ethen"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12c0 1.88.54 3.63 1.46 5.12L2 22l4.88-1.46C8.37 21.46 10.12 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
            fill="currentColor"
          />
        </svg>
        Talk to Ethen
      </button>

      <Transition show={open} as={Fragment}>
        <Dialog onClose={closePanel} className="ethen-talk__dialog">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="ethen-talk__backdrop" aria-hidden="true" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="ethen-talk__panel">
              <div className="ethen-talk__header">
                <Dialog.Title className="ethen-talk__title">
                  Meet Ethen
                </Dialog.Title>
                <p className="ethen-talk__subtitle">
                  Tell Ethen what you want to do. He&rsquo;ll guide you to the
                  right Upcube product.
                </p>
                <p className="ethen-talk__disclosure">
                  You&rsquo;re speaking with Ethen, an AI guide for Upcube. Do
                  not share sensitive personal information.
                </p>
                <button
                  className="ethen-talk__close"
                  onClick={closePanel}
                  aria-label="Close"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M18 6L6 18M6 6l12 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="ethen-talk__body">
                {showStarters && (
                  <div className="ethen-talk__starters">
                    <p className="ethen-talk__starters-label">
                      Try asking about:
                    </p>
                    <div className="ethen-talk__starters-grid">
                      {starters.map((s) => (
                        <Link
                          href={s.href}
                          key={s.label}
                          className="ethen-talk__starter"
                          onClick={() =>
                            trackEvent("ethen_starter_click", s.label)
                          }
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {state === "loading" && (
                  <div className="ethen-talk__loading">
                    <div className="ethen-talk__spinner" />
                    <p>Starting Ethen&hellip;</p>
                  </div>
                )}

                {state === "error" && (
                  <div className="ethen-talk__error">
                    <p>Ethen is unavailable right now.</p>
                    <button
                      className="ethen-talk__retry-btn"
                      onClick={() => {
                        trackEvent("ethen_retry");
                        startConversation();
                      }}
                    >
                      Try again
                    </button>
                    <div className="ethen-talk__fallback-links">
                      {fallbackCtas.map((cta) => (
                        <Link
                          href={cta.href}
                          key={cta.label}
                          className="ethen-talk__fallback-link"
                          onClick={() =>
                            trackEvent("ethen_fallback_cta", cta.label)
                          }
                        >
                          {cta.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {state === "ready" && conversationUrl && (
                  <iframe
                    ref={iframeRef}
                    src={conversationUrl}
                    className="ethen-talk__iframe"
                    allow="camera; microphone; autoplay; display-capture"
                    allowFullScreen
                    title="Ethen conversation"
                  />
                )}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
