import { TextPage } from "components/upcube-portal/text-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";
import { signupSections } from "lib/upcube-portal/content";

export const metadata = createBasicPageMetadata({
  title: "Sign Up | UpcubeAI",
  description:
    "Sign-up access for Upcube products and services. Account creation is not yet available in this release.",
  path: "/signup",
});

export default function SignUpRoutePage() {
  return (
    <TextPage
      eyebrow="Sign Up"
      title="Create an account"
      description="Sign-up access is not yet provided in this release. Account creation and onboarding are not available."
      sections={signupSections}
      ctas={[
        { label: "Try Ethen", href: "https://ethen.upcube.ai", external: true },
        { label: "Contact", href: "/contact" },
      ]}
    />
  );
}
