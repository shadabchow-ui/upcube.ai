export type AccountNavItem = {
  id: string;
  label: string;
  href: string;
};

export type AccountOverviewCard = {
  id: string;
  title: string;
  description: string;
  href: string;
  status?: string;
};

export const accountDashboardTitle = "Account";
export const accountDashboardDescription =
  "Control panel for your Upcube products and settings.";

export const accountNavItems: AccountNavItem[] = [
  { id: "overview", label: "Overview", href: "/account" },
  { id: "profile", label: "Profile", href: "/account/profile" },
  { id: "security", label: "Security", href: "/account/security" },
  { id: "apps", label: "Connected Apps", href: "/account/apps" },
  { id: "privacy", label: "Privacy & Data", href: "/account/privacy" },
  { id: "billing", label: "Billing & Plans", href: "/account/billing" },
  { id: "storage", label: "Storage & Usage", href: "/account/storage" },
  { id: "help", label: "Help & Support", href: "/account/help" },
];

export const accountOverviewCards: AccountOverviewCard[] = [
  {
    id: "status",
    title: "Account Status",
    description:
      "Account management and profile settings are not yet available. Sign-in and user sessions are not provided in this release.",
    href: "/account/profile",
    status: "Not available",
  },
  {
    id: "apps",
    title: "Your Upcube Apps",
    description:
      "Browse all Upcube products and launch destinations. Connected app status requires an account system not yet provided.",
    href: "/account/apps",
    status: "Browse products",
  },
  {
    id: "security",
    title: "Security Checkup",
    description:
      "Security settings, devices, and session management are not available. Authentication backend is not provided in this release.",
    href: "/account/security",
    status: "Not available",
  },
  {
    id: "billing",
    title: "Plan & Billing",
    description:
      "Billing and subscription management are not provided. Pricing plans and payment processing are not implemented in this release.",
    href: "/account/billing",
    status: "Not available",
  },
  {
    id: "privacy",
    title: "Privacy & Data",
    description:
      "Privacy controls and data management are not available. Policy details for data handling are on the Privacy page.",
    href: "/account/privacy",
    status: "See Privacy",
  },
  {
    id: "storage",
    title: "Storage & Usage",
    description:
      "Storage tracking and usage management are not provided. Backend infrastructure for storage quotas is not implemented.",
    href: "/account/storage",
    status: "Not available",
  },
  {
    id: "help",
    title: "Help & Support",
    description:
      "Get help with Upcube products. Contact the team for questions, feedback, and support requests.",
    href: "/account/help",
    status: "Get help",
  },
];

export const profileSections = [
  {
    id: "profile-status",
    title: "Profile settings are not yet available.",
    description:
      "User profile management, name changes, avatar uploads, and personal details require an account backend that is not provided in this release.",
  },
  {
    id: "profile-info",
    title: "What would be here",
    description:
      "A completed profile page would include your name, email address, profile photo, display preferences, language selection, and notification settings. These features will become available when account infrastructure is implemented.",
  },
  {
    id: "profile-cta",
    title: "In the meantime",
    description:
      "Use the Contact page to reach the Upcube team, or explore product pages and launch destinations without an account.",
  },
];

export const securitySections = [
  {
    id: "security-status",
    title: "Security settings are not yet available.",
    description:
      "Password management, two-factor authentication, passkeys, active sessions, and device management require an authentication backend that is not provided in this release.",
  },
  {
    id: "security-info",
    title: "Security principles",
    description:
      "Upcube is designed with security awareness from the start. Products use scoped permissions, clear approval workflows, and privacy-aware interfaces. Specific security controls and certifications are documented on the Security and Trust pages.",
  },
  {
    id: "security-cta",
    title: "Related pages",
    description:
      "Visit the Security, Privacy, and Trust pages for current information about how Upcube approaches security and data protection.",
  },
];

export const appsSections = [
  {
    id: "apps-status",
    title: "Connected app management is not yet available.",
    description:
      "OAuth connections, API token management, and third-party app access require an account backend that is not provided in this release.",
  },
  {
    id: "apps-live",
    title: "Your Upcube products",
    description:
      "All Upcube products can be launched directly from the product pages or app launcher. No account is required to explore or use available product destinations.",
  },
  {
    id: "apps-cta",
    title: "Explore products",
    description:
      "Browse the full Upcube product family from the Products page. Each product can be accessed without signing in.",
  },
];

export const privacySections = [
  {
    id: "privacy-status",
    title: "Privacy controls are not yet available.",
    description:
      "Data download, account deletion, ad preferences, and privacy dashboard features require an account backend that is not provided in this release.",
  },
  {
    id: "privacy-info",
    title: "Privacy approach",
    description:
      "Upcube products are designed with privacy awareness. Data collection, retention, and user control details are outlined on the Privacy and Trust pages.",
  },
  {
    id: "privacy-cta",
    title: "Related pages",
    description:
      "Visit the Privacy, Trust, and Legal pages for current information about data handling and privacy practices.",
  },
];

export const billingSections = [
  {
    id: "billing-status",
    title: "Billing and subscription management are not yet available.",
    description:
      "Payment methods, invoices, subscription plans, and billing history require a billing backend that is not provided in this release.",
  },
  {
    id: "billing-info",
    title: "Current availability",
    description:
      "Pricing plans and commercial terms are not provided in this repository. Product availability can vary by product and release stage. Use product pages to review the current public surface for each product.",
  },
  {
    id: "billing-cta",
    title: "In the meantime",
    description:
      "Use the Contact page for sales and partnership inquiries. Product pages show current availability for each product.",
  },
];

export const storageSections = [
  {
    id: "storage-status",
    title: "Storage tracking is not yet available.",
    description:
      "Usage quotas, file storage, data consumption, and upgrade options require a storage backend that is not provided in this release.",
  },
  {
    id: "storage-info",
    title: "Storage direction",
    description:
      "Upcube Cloud and Compute point toward infrastructure services that may include storage capabilities. Current storage details are not provided.",
  },
  {
    id: "storage-cta",
    title: "Related products",
    description:
      "Explore Cloud and Compute product pages for current infrastructure direction.",
  },
];

export const helpSections = [
  {
    id: "help-status",
    title: "Get help with Upcube products.",
    description:
      "Use the Contact page to reach the team. Browse product pages for specific product information. Visit the FAQ for common questions.",
  },
  {
    id: "help-links",
    title: "Support resources",
    description:
      "Contact page for inquiries. FAQ for common questions about current scope and route intent. Product pages for specific product information and launch destinations.",
  },
  {
    id: "help-note",
    title: "Support availability",
    description:
      "Response SLAs and support hours are not provided in current source material. The Contact page prepares your request for review.",
  },
];
