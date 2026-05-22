export type StatusComponentState = "operational" | "degraded" | "maintenance";

export type StatusComponent = {
  name: string;
  uptime: string;
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
    summary: "AI workspace, chat, research, artifacts, and tool workflows.",
    components: [
      { name: "Ethen Chat Workspace", uptime: "100%", state: "operational" },
      { name: "Research & Answers", uptime: "99.98%", state: "operational" },
      { name: "Artifacts", uptime: "100%", state: "operational" },
      { name: "Tool Flows", uptime: "100%", state: "operational" },
      { name: "Approvals", uptime: "100%", state: "operational" },
      { name: "Workspace Continuity", uptime: "99.98%", state: "operational" },
    ],
  },
  {
    name: "Product Apps",
    summary: "Discovery, education, entertainment, and opportunity surfaces.",
    components: [
      { name: "Books", uptime: "100%", state: "operational" },
      { name: "Earth", uptime: "99.98%", state: "operational" },
      { name: "Games", uptime: "100%", state: "operational" },
      { name: "Jobs", uptime: "99.96%", state: "operational" },
      { name: "Education", uptime: "100%", state: "operational" },
      { name: "Voice Preview", uptime: "100%", state: "operational" },
    ],
  },
  {
    name: "Commerce",
    summary:
      "Premium commerce platform for large-scale product search, detail, and recommendations.",
    components: [
      { name: "Upcube Commerce", uptime: "100%", state: "operational" },
      { name: "Product Search", uptime: "99.98%", state: "operational" },
      { name: "Product Detail Pages", uptime: "100%", state: "operational" },
      {
        name: "Reviews & Recommendations",
        uptime: "99.96%",
        state: "operational",
      },
    ],
  },
  {
    name: "Cloud & Infrastructure",
    summary: "Cloud platform, compute, storage, networking, and file services.",
    components: [
      { name: "Upcube Cloud", uptime: "99.98%", state: "operational" },
      { name: "Cloud VM", uptime: "100%", state: "operational" },
      { name: "Storage", uptime: "100%", state: "operational" },
      { name: "Networking", uptime: "99.98%", state: "operational" },
      { name: "Files", uptime: "100%", state: "operational" },
    ],
  },
  {
    name: "Company & Trust",
    summary:
      "Public company surfaces, news, research pages, and trust destinations.",
    components: [
      { name: "Website", uptime: "100%", state: "operational" },
      { name: "News", uptime: "100%", state: "operational" },
      { name: "Research Pages", uptime: "100%", state: "operational" },
      {
        name: "Trust & Policy Pages",
        uptime: "100%",
        state: "operational",
      },
      { name: "Status Page", uptime: "100%", state: "operational" },
    ],
  },
];

export const statusDisclaimer =
  "Availability metrics are shown as public-facing aggregate status indicators for the Upcube product family. Individual experience may vary by product, region, provider availability, and preview status.";

export const statusMonitoringNotice =
  "This page is currently a public status overview. Automated incident history and live component monitoring are not connected in this repository yet.";
