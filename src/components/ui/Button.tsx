import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border-ink bg-ink text-white hover:-translate-y-0.5 hover:bg-signal",
  secondary: "border-line bg-white text-ink hover:-translate-y-0.5 hover:border-signal",
  ghost: "border-transparent bg-transparent text-ink hover:bg-white/70",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  external,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`focus-ring inline-flex min-h-11 items-center justify-center rounded-md border px-5 py-2.5 text-sm font-semibold transition ${variantClasses[variant]} ${className}`}
      rel={external ? "noreferrer" : props.rel}
      target={external ? "_blank" : props.target}
      {...props}
    >
      {children}
    </a>
  );
}
