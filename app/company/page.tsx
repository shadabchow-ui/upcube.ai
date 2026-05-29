import type { Metadata } from "next";

import { CompanyPage } from "components/upcube-portal/company-page";
import { createBasicPageMetadata } from "lib/upcube-seo/metadata";

export const metadata: Metadata = createBasicPageMetadata({
  title: "Company | Upcube Technology Ecosystem",
  description:
    "Learn how Upcube builds connected products across AI, cloud infrastructure, compute, robotics, commerce, education, spatial exploration, entertainment, and future operating systems.",
  path: "/company",
});

export default function CompanyRoutePage() {
  return <CompanyPage />;
}
