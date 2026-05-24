import { upcubeLauncherApps } from "./product-links";

export type UpcubeAppId =
  | "ai"
  | "chat"
  | "globe"
  | "books"
  | "news"
  | "games"
  | "jobs"
  | "cloud"
  | "quantum"
  | "shopping"
  | "compute"
  | "robotics"
  | "os"
  | "mobile-os"
  | "voice"
  | "education"
  | "research"
  | "avatar";

export type UpcubeApp = {
  id: UpcubeAppId;
  label: string;
  href: string;
  iconSrc: string;
};

export const upcubeApps: UpcubeApp[] = upcubeLauncherApps;
