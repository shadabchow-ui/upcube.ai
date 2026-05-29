export type StatusComponentState = "operational" | "degraded" | "maintenance";

export type StatusComponent = {
  name: string;
  statusLabel: string;
  state: StatusComponentState;
};

export type StatusGroup = {
  name: string;
  summary: string;
  components: StatusComponent[];
};

export const statusGroups: StatusGroup[] = [
  {
    name: "UpcubeAI",
    summary:
      "AI workspace, chat, research, artifact, and workflow surfaces in the current product direction.",
    components: [
      {
        name: "Ethen Chat Workspace",
        statusLabel: "Public direction",
        state: "operational",
      },
      {
        name: "Research & Answers",
        statusLabel: "Public direction",
        state: "operational",
      },
      {
        name: "Artifacts",
        statusLabel: "Public direction",
        state: "operational",
      },
      {
        name: "Tool Flows",
        statusLabel: "In development",
        state: "maintenance",
      },
      {
        name: "Approvals",
        statusLabel: "In development",
        state: "maintenance",
      },
      {
        name: "Workspace Continuity",
        statusLabel: "Built to support",
        state: "operational",
      },
    ],
  },
  {
    name: "Product Apps",
    summary:
      "Discovery, education, entertainment, and opportunity surfaces across the ecosystem.",
    components: [
      { name: "Books", statusLabel: "Live route", state: "operational" },
      { name: "Earth", statusLabel: "Live route", state: "operational" },
      { name: "Games", statusLabel: "Live route", state: "operational" },
      { name: "Jobs", statusLabel: "Live route", state: "operational" },
      { name: "Education", statusLabel: "Live route", state: "operational" },
      { name: "Voice", statusLabel: "Preview", state: "maintenance" },
    ],
  },
  {
    name: "Commerce",
    summary:
      "Commerce and product surfaces designed around large-scale catalogs and discovery.",
    components: [
      {
        name: "Upcube Commerce",
        statusLabel: "External destination",
        state: "operational",
      },
      {
        name: "Product Search",
        statusLabel: "Live route",
        state: "operational",
      },
      {
        name: "Product Detail Pages",
        statusLabel: "Live route",
        state: "operational",
      },
      {
        name: "Reviews & Recommendations",
        statusLabel: "In development",
        state: "maintenance",
      },
    ],
  },
  {
    name: "Cloud & Infrastructure",
    summary: "Cloud platform, compute, storage, networking, and file services.",
    components: [
      { name: "Upcube Cloud", statusLabel: "Live route", state: "operational" },
      {
        name: "Cloud VM",
        statusLabel: "Current direction",
        state: "maintenance",
      },
      {
        name: "Storage",
        statusLabel: "Built to support",
        state: "operational",
      },
      {
        name: "Networking",
        statusLabel: "Built to support",
        state: "operational",
      },
      { name: "Files", statusLabel: "Built to support", state: "operational" },
    ],
  },
  {
    name: "Company & Trust",
    summary:
      "Public company surfaces, news, research pages, and trust destinations.",
    components: [
      { name: "Website", statusLabel: "Live route", state: "operational" },
      { name: "News", statusLabel: "Live route", state: "operational" },
      {
        name: "Research Pages",
        statusLabel: "Live route",
        state: "operational",
      },
      {
        name: "Trust & Policy Pages",
        statusLabel: "Live route",
        state: "operational",
      },
      {
        name: "Status Page",
        statusLabel: "Public overview",
        state: "operational",
      },
    ],
  },
];

export const statusDisclaimer =
  "This page is a public product-surface overview and does not represent audited uptime, SLA commitments, or real-time incident telemetry.";

export const statusMonitoringNotice =
  "Automated incident history and live operational monitoring are not connected in this repository yet. For questions, use the Contact page.";
