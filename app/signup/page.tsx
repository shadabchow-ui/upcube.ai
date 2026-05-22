import type { Metadata } from "next";
import { AccountSignUpPage } from "components/upcube-account/account-signup-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Sign Up | UpcubeAI",
  description:
    "Create an Upcube account to access products and manage your settings.",
  path: "/signup",
});

export default function SignUpRoutePage() {
  return <AccountSignUpPage />;
}
