import { ACCOUNT_URL } from "lib/upcube-account/client";

export function AccountCentralLink({ settingPath }: { settingPath?: string }) {
  const href = settingPath
    ? `${ACCOUNT_URL}/settings/${settingPath}`
    : ACCOUNT_URL;

  return (
    <div className="uc-account-central-notice">
      <p className="uc-account-central-text">
        Account settings are managed through the{" "}
        <a
          className="uc-account-central-link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          central Upcube Account
        </a>
        .
      </p>
    </div>
  );
}
