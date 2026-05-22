import type { Metadata } from "next";
import { AccountSignInPage } from "components/upcube-account/account-signin-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Sign In | UpcubeAI",
  description:
    "Sign in to your Upcube account to access products and manage your settings.",
  path: "/signin",
});

export default function SignInRoutePage() {
  return <AccountSignInPage />;
}
