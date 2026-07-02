import type { ReactNode } from "react";

type DetailsToggleProps = {
  children: ReactNode;
  label: string;
  className?: string;
};

export function DetailsToggle({ children, label, className = "" }: DetailsToggleProps) {
  return (
    <details className={`group ${className}`}>
      <summary className="focus-ring inline-flex min-h-10 cursor-pointer list-none items-center rounded-md border border-line bg-white px-4 py-2 text-sm font-bold text-ink transition hover:border-signal hover:text-signal">
        <span>{label}</span>
        <span className="ml-2 text-xs transition group-open:rotate-180">v</span>
      </summary>
      <div className="mt-4 border-t border-line pt-4">{children}</div>
    </details>
  );
}
