import clsx from "clsx";

export default function LogoSquare({ size }: { size?: "sm" | undefined }) {
  return (
    <div
      className={clsx(
        "flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black",
        {
          "h-[40px] w-[40px] rounded-xl": !size,
          "h-[30px] w-[30px] rounded-lg": size === "sm",
        },
      )}
    >
      <img
        src="/brand/logo-mark.png"
        alt="UpcubeAI"
        className={clsx("object-contain", {
          "h-[18px] w-[18px]": !size,
          "h-[12px] w-[12px]": size === "sm",
        })}
      />
    </div>
  );
}
