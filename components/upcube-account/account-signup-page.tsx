"use client";

import Link from "next/link";
import { useSession, accountSignUpUrl } from "lib/upcube-account/client";

export function AccountSignUpPage() {
  const session = useSession();

  return (
    <div className="uc-page">
      <div className="uc-account-redirect">
        <div className="uc-account-redirect-card">
          <h1 className="uc-account-redirect-title">Create an account</h1>
          <p className="uc-account-redirect-desc">
            Upcube Account is managed through the central account service. You
            will be redirected to create an account.
          </p>
          {session.status === "authenticated" ? (
            <div className="uc-account-redirect-actions">
              <p className="uc-account-redirect-signed-in">
                You are already signed in.
              </p>
              <Link className="uc-account-redirect-btn" href="/account">
                Go to Account
              </Link>
            </div>
          ) : (
            <div className="uc-account-redirect-actions">
              <a
                className="uc-account-redirect-btn"
                href={accountSignUpUrl(
                  typeof window !== "undefined"
                    ? window.location.href
                    : "/account",
                )}
              >
                Create Upcube Account
              </a>
              <p className="uc-account-redirect-note">
                Already have an account? <Link href="/signin">Sign in</Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
