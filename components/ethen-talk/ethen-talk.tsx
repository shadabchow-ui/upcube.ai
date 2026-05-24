"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { EthenRobotPreview } from "components/ethen/EthenRobotPreview";
import "app/styles/ethen-talk.css";

type VoiceState =
  | "idle"
  | "starting"
  | "requestingMicrophone"
  | "connecting"
  | "connected"
  | "stopping"
  | "error";

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

type RealtimeSessionResponse = {
  clientSecret?: string;
  expiresAt?: number | null;
  session?: {
    id?: string | null;
    model?: string | null;
    voice?: string | null;
  };
  error?:
    | string
    | {
        code?: string;
        message?: string;
        details?: {
          status?: number;
          requestId?: string | null;
        };
      };
};

type VoiceSessionMeta = {
  expiresAt?: number | null;
  session?: {
    id?: string | null;
    model?: string | null;
    voice?: string | null;
  };
};

const starters = [
  { label: "Help me choose a product" },
  { label: "I want to build with AI" },
  { label: "I need cloud tools" },
  { label: "I'm a founder" },
  { label: "I'm a student" },
];

const ETHEN_REALTIME_SESSION_ROUTE = "/api/ethen/realtime-session" as string;

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

function debugVoiceLog(event: string, details?: Record<string, unknown>) {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  console.info("[EthenVoice]", event, details ?? {});
}

function getRealtimeSessionErrorMessage(
  status: number,
  error: RealtimeSessionResponse["error"],
) {
  if (status === 405) {
    return "Voice route rejected the request method. The deployed client must call the session route with POST.";
  }

  if (typeof error === "string") {
    return error;
  }

  if (typeof error === "object" && error) {
    return (
      error.message ??
      "Voice mode is unavailable right now. Please try again later."
    );
  }

  return "Voice mode is unavailable right now. Please try again later.";
}

export function EthenTalk() {
  const [open, setOpen] = useState(false);
  const [voiceState, setVoiceState] = useState<VoiceState>("idle");
  const [voiceMessage, setVoiceMessage] = useState<string | null>(null);
  const [voiceSession, setVoiceSession] = useState<VoiceSessionMeta | null>(
    null,
  );
  const voiceRequestInFlight = useRef(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const remoteAudioRef = useRef<HTMLAudioElement | null>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const dataChannelRef = useRef<RTCDataChannel | null>(null);
  const microphoneStreamRef = useRef<MediaStream | null>(null);
  const remoteStreamRef = useRef<MediaStream | null>(null);

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);

  const teardownVoiceResources = useCallback(() => {
    dataChannelRef.current?.close();
    dataChannelRef.current = null;

    peerConnectionRef.current?.getSenders().forEach((sender) => {
      sender.track?.stop();
    });
    peerConnectionRef.current?.close();
    peerConnectionRef.current = null;

    microphoneStreamRef.current?.getTracks().forEach((track) => track.stop());
    microphoneStreamRef.current = null;

    remoteStreamRef.current?.getTracks().forEach((track) => track.stop());
    remoteStreamRef.current = null;

    if (remoteAudioRef.current) {
      remoteAudioRef.current.pause();
      remoteAudioRef.current.srcObject = null;
    }
  }, []);

  const stopVoiceSession = useCallback(
    (nextState: VoiceState = "idle") => {
      debugVoiceLog("stop.voice.begin", { nextState });

      teardownVoiceResources();

      if (nextState === "idle") {
        setVoiceMessage(null);
        setVoiceSession(null);
      }

      setVoiceState(nextState);
      voiceRequestInFlight.current = false;
    },
    [teardownVoiceResources],
  );

  const closePanel = useCallback(() => {
    setOpen(false);
    setTimeout(() => {
      stopVoiceSession("idle");
    }, 300);
  }, [stopVoiceSession]);

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

  useEffect(() => () => stopVoiceSession("idle"), [stopVoiceSession]);

  const speakWithEthen = useCallback(async () => {
    if (voiceRequestInFlight.current) return;
    voiceRequestInFlight.current = true;

    teardownVoiceResources();
    trackEvent("ethen_speak_click");
    setVoiceState("starting");
    setVoiceMessage("Starting voice...");
    setVoiceSession(null);

    try {
      const res = await fetch(ETHEN_REALTIME_SESSION_ROUTE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      const data = (await res.json()) as RealtimeSessionResponse;
      const errorCode =
        typeof data.error === "object" && data.error
          ? data.error.code
          : undefined;
      debugVoiceLog("session.bootstrap.response", {
        status: res.status,
        ok: res.ok,
        errorCode,
      });

      if (!res.ok || !data.clientSecret) {
        const message = getRealtimeSessionErrorMessage(res.status, data.error);
        setVoiceState("error");
        setVoiceMessage(message);
        setVoiceSession(null);
        trackEvent(
          "ethen_conversation_error",
          errorCode ?? `http_${res.status}`,
        );
        return;
      }

      setVoiceSession({
        expiresAt: data.expiresAt ?? null,
        session: data.session ?? undefined,
      });

      setVoiceState("requestingMicrophone");
      setVoiceMessage("Requesting microphone...");
      debugVoiceLog("microphone.requested");

      let microphoneStream: MediaStream;
      try {
        microphoneStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
      } catch (error) {
        console.error("Ethen microphone request failed:", error);
        setVoiceState("error");
        setVoiceMessage(
          "Microphone access was blocked. Allow microphone access to use Ethen voice.",
        );
        trackEvent("ethen_conversation_error", "microphone_denied");
        return;
      }

      microphoneStreamRef.current = microphoneStream;
      setVoiceState("connecting");
      setVoiceMessage("Connecting voice...");

      const peerConnection = new RTCPeerConnection();
      peerConnectionRef.current = peerConnection;

      const remoteStream = new MediaStream();
      remoteStreamRef.current = remoteStream;

      if (remoteAudioRef.current) {
        remoteAudioRef.current.srcObject = remoteStream;
        void remoteAudioRef.current.play().catch(() => {});
      }

      peerConnection.onconnectionstatechange = () => {
        if (peerConnectionRef.current !== peerConnection) {
          return;
        }

        debugVoiceLog("peer.connection.state", {
          connectionState: peerConnection.connectionState,
        });

        if (peerConnection.connectionState === "connected") {
          setVoiceState("connected");
          setVoiceMessage("Voice mode connected. Ethen is listening.");
        } else if (peerConnection.connectionState === "failed") {
          stopVoiceSession("error");
          setVoiceMessage("Voice connection failed. Please try again.");
        } else if (peerConnection.connectionState === "disconnected") {
          setVoiceState("error");
          setVoiceMessage("Voice connection failed. Please try again.");
        }
      };

      peerConnection.oniceconnectionstatechange = () => {
        debugVoiceLog("peer.ice.state", {
          iceConnectionState: peerConnection.iceConnectionState,
        });
      };

      peerConnection.ontrack = (event) => {
        debugVoiceLog("remote.audio.track", {
          streamCount: event.streams.length,
        });
        event.streams.forEach((stream) => {
          stream
            .getAudioTracks()
            .forEach((track) => remoteStream.addTrack(track));
        });

        if (remoteAudioRef.current) {
          remoteAudioRef.current.srcObject = remoteStream;
          void remoteAudioRef.current.play().catch(() => {});
        }
      };

      microphoneStream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, microphoneStream);
      });

      const dataChannel = peerConnection.createDataChannel("oai-events");
      dataChannelRef.current = dataChannel;

      dataChannel.onopen = () => {
        debugVoiceLog("datachannel.open");
      };

      dataChannel.onclose = () => {
        debugVoiceLog("datachannel.close");
      };

      dataChannel.onerror = (event) => {
        debugVoiceLog("datachannel.error", {
          type: event.type,
        });
      };

      dataChannel.onmessage = (event) => {
        try {
          const payload = JSON.parse(event.data) as { type?: string };
          debugVoiceLog("datachannel.message", {
            type: payload.type ?? "unknown",
          });
        } catch {
          debugVoiceLog("datachannel.message.invalid_json");
        }
      };

      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);

      const sdpResponse = await fetch(
        "https://api.openai.com/v1/realtime/calls",
        {
          method: "POST",
          body: offer.sdp,
          headers: {
            Authorization: `Bearer ${data.clientSecret}`,
            "Content-Type": "application/sdp",
          },
        },
      );

      if (!sdpResponse.ok) {
        const errorText = await sdpResponse.text();
        debugVoiceLog("webrtc.sdp.failed", {
          status: sdpResponse.status,
        });
        console.error(
          "Ethen SDP exchange failed:",
          sdpResponse.status,
          errorText,
        );
        stopVoiceSession("error");
        setVoiceMessage("Voice connection failed. Please try again.");
        trackEvent("ethen_conversation_error", "webrtc_sdp_failed");
        return;
      }

      const answerSdp = await sdpResponse.text();
      await peerConnection.setRemoteDescription({
        type: "answer",
        sdp: answerSdp,
      });

      debugVoiceLog("webrtc.sdp.connected", {
        sessionId: data.session?.id ?? null,
      });
      setVoiceMessage("Voice mode connected. Ethen is listening.");
      trackEvent("ethen_conversation_ready");
    } catch (error) {
      console.error("Ethen voice startup failed:", error);
      stopVoiceSession("error");
      setVoiceMessage("Voice connection failed. Please try again.");
      setVoiceSession(null);
      trackEvent("ethen_conversation_error", "voice_start_failed");
    } finally {
      voiceRequestInFlight.current = false;
    }
  }, [stopVoiceSession, teardownVoiceResources]);

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
                    <EthenRobotPreview />
                  </div>

                  {voiceState === "connected" ||
                  voiceState === "connecting" ||
                  voiceState === "requestingMicrophone" ||
                  voiceState === "starting" ||
                  voiceState === "stopping" ? (
                    <button
                      className="ethen-talk__cta ethen-talk__cta--secondary"
                      onClick={() => {
                        setVoiceState("stopping");
                        setVoiceMessage("Stopping voice...");
                        stopVoiceSession("idle");
                      }}
                      disabled={voiceState === "stopping"}
                    >
                      {voiceState === "stopping" ? "Stopping..." : "Stop voice"}
                    </button>
                  ) : (
                    <button
                      className="ethen-talk__cta"
                      onClick={speakWithEthen}
                    >
                      Speak with Ethen
                    </button>
                  )}

                  {voiceMessage && (
                    <p
                      className={`ethen-talk__voice-status ethen-talk__voice-status--${voiceState}`}
                    >
                      {voiceMessage}
                    </p>
                  )}

                  {voiceState === "error" && (
                    <button
                      className="ethen-talk__retry-btn"
                      onClick={() => {
                        trackEvent("ethen_retry");
                        speakWithEthen();
                      }}
                    >
                      Try again
                    </button>
                  )}

                  {voiceSession?.expiresAt && voiceState !== "idle" && (
                    <p className="ethen-talk__voice-meta">
                      Temporary session prepared. Expires at{" "}
                      {new Date(
                        voiceSession.expiresAt * 1000,
                      ).toLocaleTimeString([], {
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                      .
                    </p>
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
                      disabled={chatLoading}
                    />
                    <button
                      type="submit"
                      className="ethen-talk__send-btn"
                      disabled={!chatInput.trim() || chatLoading}
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
      <audio ref={remoteAudioRef} autoPlay playsInline hidden />
    </>
  );
}
