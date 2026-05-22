import type { Metadata } from "next";

import { CompanyPage } from "components/upcube-portal/company-page";

export const metadata: Metadata = {
  title: "Company | Upcube Technology Ecosystem",
  description:
    "Learn how Upcube builds connected products across AI, cloud infrastructure, compute, robotics, commerce, education, spatial exploration, entertainment, and future operating systems.",
};

export default function CompanyRoutePage() {
  return <CompanyPage />;
}
