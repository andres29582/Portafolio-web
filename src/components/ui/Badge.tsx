interface BadgeProps {
  label: string;
  variant?: "default" | "primary" | "success" | "warning";
}

const variantClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-gray-700 text-gray-300",
  primary: "bg-cyan-900/50 text-cyan-300 border border-cyan-700/50",
  success: "bg-green-900/50 text-green-300 border border-green-700/50",
  warning: "bg-yellow-900/50 text-yellow-300 border border-yellow-700/50",
};

export function Badge({ label, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${variantClasses[variant]}`}
    >
      {label}
    </span>
  );
}
