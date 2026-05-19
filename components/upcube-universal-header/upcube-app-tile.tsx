import Link from "next/link";

import type { UpcubeApp, UpcubeAppId } from "lib/upcube-universal/apps";

type UpcubeAppTileProps = {
  app: UpcubeApp;
  currentAppId?: UpcubeAppId | null;
  onSelect?: () => void;
};

export function UpcubeAppTile({
  app,
  currentAppId,
  onSelect,
}: UpcubeAppTileProps) {
  const isActive = currentAppId === app.id;

  return (
    <Link
      href={app.href}
      className="uuh-app-tile"
      data-active={isActive ? "true" : undefined}
      onClick={onSelect}
      prefetch={false}
    >
      <span className="uuh-app-tile-icon-wrap">
        <img
          src={app.iconSrc}
          alt=""
          className="uuh-app-tile-icon"
          width={40}
          height={40}
        />
      </span>
      <span className="uuh-app-tile-label">{app.label}</span>
    </Link>
  );
}
