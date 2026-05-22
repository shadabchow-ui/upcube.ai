"use client";

import Link from "next/link";
import { useSession, accountSignInUrl } from "lib/upcube-account/client";

export function AccountSignInPage() {
  const session = useSession();

  return (
    <div className="uc-page">
      <div className="uc-account-redirect">
        <div className="uc-account-redirect-card">
          <h1 className="uc-account-redirect-title">Sign in to Upcube</h1>
          <p className="uc-account-redirect-desc">
            Upcube Account is managed through the central account service. You
            will be redirected to sign in.
          </p>
          {session.status === "authenticated" ? (
            <div className="uc-account-redirect-actions">
              <p className="uc-account-redirect-signed-in">
                You are signed in.
              </p>
              <Link className="uc-account-redirect-btn" href="/account">
                Go to Account
              </Link>
            </div>
          ) : (
            <div className="uc-account-redirect-actions">
              <a
                className="uc-account-redirect-btn"
                href={accountSignInUrl(
                  typeof window !== "undefined"
                    ? window.location.href
                    : "/account",
                )}
              >
                Sign in with Upcube Account
              </a>
              <p className="uc-account-redirect-note">
                New to Upcube? <Link href="/signup">Create an account</Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
