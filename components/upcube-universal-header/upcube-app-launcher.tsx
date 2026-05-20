"use client";

import { useEffect, useId, useRef, useState } from "react";

import {
  upcubeApps,
  type UpcubeApp,
  type UpcubeAppId,
} from "lib/upcube-universal/apps";
import { UpcubeAppTile } from "./upcube-app-tile";

type UpcubeAppLauncherProps = {
  apps?: UpcubeApp[];
  currentAppId?: UpcubeAppId | null;
  launcherLabel?: string;
};

export function UpcubeAppLauncher({
  apps = upcubeApps,
  currentAppId,
  launcherLabel = "Open app launcher",
}: UpcubeAppLauncherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const panelId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="uuh-launcher" ref={rootRef}>
      <button
        type="button"
        className="uuh-launcher-trigger"
        aria-label={launcherLabel}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="uuh-launcher-dots" aria-hidden="true">
          {Array.from({ length: 9 }).map((_, index) => (
            <span className="uuh-launcher-dot" key={index} />
          ))}
        </span>
      </button>

      {isOpen ? (
        <div
          id={panelId}
          className="uuh-launcher-panel"
          role="navigation"
          aria-label="App launcher"
        >
          <p className="uuh-launcher-panel-title">Apps</p>
          <div className="uuh-launcher-grid">
            {apps.map((app) => (
              <UpcubeAppTile
                key={app.id}
                app={app}
                currentAppId={currentAppId}
                onSelect={() => setIsOpen(false)}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
