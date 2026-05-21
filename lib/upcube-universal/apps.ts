import { upcubeLauncherApps } from "./product-links";

export type UpcubeAppId =
  | "ai"
  | "chat"
  | "globe"
  | "books"
  | "games"
  | "jobs"
  | "cloud"
  | "quantum"
  | "shopping"
  | "compute"
  | "os"
  | "mobile-os"
  | "voice"
  | "education";

export type UpcubeApp = {
  id: UpcubeAppId;
  label: string;
  href: string;
  iconSrc: string;
};

export const upcubeApps: UpcubeApp[] = upcubeLauncherApps;
