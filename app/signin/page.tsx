import { TextPage } from "components/upcube-portal/text-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";
import { signinSections } from "lib/upcube-portal/content";

export const metadata = createBasicPageMetadata({
  title: "Sign In | UpcubeAI",
  description:
    "Sign-in access for Upcube products and services. Authentication is not yet available in this release.",
  path: "/signin",
});

export default function SignInRoutePage() {
  return (
    <TextPage
      eyebrow="Sign In"
      title="Sign in to Upcube"
      description="Sign-in access is not yet provided in this release. Account-based features are not available."
      sections={signinSections}
      ctas={[
        { label: "Try Ethen", href: "https://ethen.upcube.ai", external: true },
        { label: "Contact", href: "/contact" },
      ]}
    />
  );
}
