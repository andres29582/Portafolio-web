interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 ${
        hover
          ? "transition-all duration-300 hover:border-cyan-500/50 hover:bg-gray-800/80 hover:-translate-y-1"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
