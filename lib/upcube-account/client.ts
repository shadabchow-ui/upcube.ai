"use client";

import { useEffect, useState } from "react";

export const ACCOUNT_URL =
  process.env.NEXT_PUBLIC_ACCOUNT_URL || "https://account.upcube.ai";

export function accountSignInUrl(returnTo?: string): string {
  const url = new URL("/signin", ACCOUNT_URL);
  if (returnTo) {
    url.searchParams.set("return_to", returnTo);
  }
  return url.toString();
}

export function accountSignUpUrl(returnTo?: string): string {
  const url = new URL("/signup", ACCOUNT_URL);
  if (returnTo) {
    url.searchParams.set("return_to", returnTo);
  }
  return url.toString();
}

export function accountLogoutUrl(returnTo?: string): string {
  const url = new URL("/logout", ACCOUNT_URL);
  if (returnTo) {
    url.searchParams.set("return_to", returnTo);
  }
  return url.toString();
}

export function accountSessionUrl(): string {
  return `${ACCOUNT_URL}/api/session`;
}

export type SessionUser = {
  id: string;
  email?: string;
  name?: string;
  picture?: string;
};

export type SessionState =
  | { status: "loading" }
  | { status: "authenticated"; user: SessionUser }
  | { status: "unauthenticated" }
  | { status: "error"; error: string };

export function useSession(): SessionState & {
  refetch: () => void;
} {
  const [state, setState] = useState<SessionState>({ status: "loading" });

  function fetchSession() {
    if (!process.env.NEXT_PUBLIC_ACCOUNT_URL) {
      setState({ status: "unauthenticated" });
      return;
    }

    setState({ status: "loading" });

    fetch(accountSessionUrl(), {
      credentials: "include",
      cache: "no-store",
    })
      .then((res) => {
        if (res.status === 401 || res.status === 404) {
          setState({ status: "unauthenticated" });
          return null;
        }
        if (!res.ok) {
          throw new Error(`Session request failed: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.user) {
          setState({ status: "authenticated", user: data.user });
        } else if (data && (data.id || data.email)) {
          setState({
            status: "authenticated",
            user: data as SessionUser,
          });
        } else {
          setState({ status: "unauthenticated" });
        }
      })
      .catch((err: Error) => {
        setState({ status: "error", error: err.message });
      });
  }

  useEffect(() => {
    fetchSession();
  }, []);

  return { ...state, refetch: fetchSession };
}
