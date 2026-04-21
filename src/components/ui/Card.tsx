import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-line bg-white/86 p-6 shadow-soft backdrop-blur ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
