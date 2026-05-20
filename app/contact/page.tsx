import type { Metadata } from "next";

import { ContactPage } from "components/upcube-portal/contact-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Contact | UpcubeAI",
  description:
    "Get in touch with the Upcube team about sales, product interest, partnerships, press, or general inquiries.",
  path: "/contact",
});

export default function ContactRoutePage() {
  return <ContactPage />;
}
