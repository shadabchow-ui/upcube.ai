import type { Metadata } from "next";

import { ContactPage } from "components/upcube-portal/contact-page";

export const metadata: Metadata = {
  title: "Contact | UpcubeAI",
  description:
    "Contact route placeholder for UpcubeAI pending verified channels.",
};

export default function ContactRoutePage() {
  return <ContactPage />;
}
