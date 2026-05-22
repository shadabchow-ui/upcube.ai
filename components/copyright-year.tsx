"use client";

export function CopyrightYear({ start }: { start: number }) {
  const currentYear = new Date().getFullYear();
  const year = start + (currentYear > start ? `-${currentYear}` : "");
  return <>{year}</>;
}
