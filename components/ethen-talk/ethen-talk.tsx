"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { EthenRobotPreview } from "components/ethen/EthenRobotPreview";
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

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const starters = [
  { label: "Help me choose a product" },
  { label: "I want to build with AI" },
  { label: "I need cloud tools" },
  { label: "I'm a founder" },
  { label: "I'm a student" },
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
  const tavusInitiated = useRef(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);

  const closePanel = useCallback(() => {
    setOpen(false);
    setTimeout(() => {
      setState("idle");
      setConversationUrl(null);
      tavusInitiated.current = false;
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const speakWithEthen = useCallback(async () => {
    if (tavusInitiated.current) return;
    tavusInitiated.current = true;

    trackEvent("ethen_speak_click");
    setState("loading");

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
      tavusInitiated.current = false;
      trackEvent("ethen_conversation_error");
    }
  }, []);

  const sendChatMessage = useCallback(async (text: string) => {
    setChatMessages((prev) => [...prev, { role: "user", content: text }]);
    setChatLoading(true);
    try {
      const res = await fetch("/api/ethen/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = (await res.json()) as { reply?: string };
      setChatMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply ?? "I'm not sure how to answer that.",
        },
      ]);
    } catch {
      setChatMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Ethen is unavailable right now. Please try again later.",
        },
      ]);
    } finally {
      setChatLoading(false);
    }
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const trimmed = chatInput.trim();
      if (!trimmed || chatLoading) return;
      trackEvent("ethen_chat_send", trimmed);
      sendChatMessage(trimmed);
      setChatInput("");
    },
    [chatInput, chatLoading, sendChatMessage],
  );

  const handleStarterClick = useCallback(
    (label: string) => {
      trackEvent("ethen_starter_chat", label);
      sendChatMessage(label);
    },
    [sendChatMessage],
  );

  const openPanel = useCallback(() => {
    trackEvent("ethen_panel_open");
    setOpen(true);
  }, []);

  return (
    <>
      <button
        className="ethen-talk__fab"
        onClick={openPanel}
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
                <p className="ethen-talk__subtitle">Your Upcube AI guide.</p>
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
                <div className="ethen-talk__avatar-section">
                  <div className="ethen-talk__avatar-card">
                    {state === "idle" && <EthenRobotPreview />}

                    {state === "loading" && (
                      <div className="ethen-talk__loading">
                        <div className="ethen-talk__spinner" />
                        <p>Starting Ethen&hellip;</p>
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

                    {state === "error" && (
                      <div className="ethen-talk__error">
                        <p>Ethen is unavailable right now.</p>
                        <button
                          className="ethen-talk__retry-btn"
                          onClick={() => {
                            trackEvent("ethen_retry");
                            tavusInitiated.current = false;
                            speakWithEthen();
                          }}
                        >
                          Try again
                        </button>
                      </div>
                    )}
                  </div>

                  {state === "idle" && chatMessages.length === 0 && (
                    <button
                      className="ethen-talk__cta"
                      onClick={() =>
                        handleStarterClick(
                          "Introduce yourself and explain how you can help me use Upcube.",
                        )
                      }
                    >
                      Speak with Ethen
                    </button>
                  )}
                </div>

                {chatMessages.length > 0 && (
                  <div className="ethen-talk__messages">
                    {chatMessages.map((msg, i) => (
                      <div
                        key={i}
                        className={`ethen-talk__message ethen-talk__message--${msg.role}`}
                      >
                        {msg.content}
                      </div>
                    ))}
                    {chatLoading && (
                      <div className="ethen-talk__message ethen-talk__message--assistant ethen-talk__message--loading">
                        Ethen is thinking&hellip;
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                )}

                <p className="ethen-talk__disclosure">
                  You&rsquo;re speaking with Ethen, an AI guide for Upcube. Do
                  not share sensitive personal information.
                </p>

                {chatMessages.length === 0 && (
                  <div className="ethen-talk__starters">
                    <p className="ethen-talk__starters-label">
                      Try asking about:
                    </p>
                    <div className="ethen-talk__starters-grid">
                      {starters.map((s) => (
                        <button
                          key={s.label}
                          className="ethen-talk__starter"
                          onClick={() => handleStarterClick(s.label)}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="ethen-talk__input-row">
                  <form
                    onSubmit={handleSubmit}
                    className="ethen-talk__input-form"
                  >
                    <input
                      className="ethen-talk__text-input"
                      type="text"
                      placeholder="Ask Ethen about Upcube..."
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      disabled={chatLoading || state !== "idle"}
                    />
                    <button
                      type="submit"
                      className="ethen-talk__send-btn"
                      disabled={
                        !chatInput.trim() || chatLoading || state !== "idle"
                      }
                      aria-label="Send"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
