interface SectionTitleProps {
  title: string;
  className?: string;
}

export function SectionTitle({ title, className = "" }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-3xl font-bold text-white mb-3">{title}</h2>
      <div className="w-16 h-1 bg-cyan-500 rounded-full" />
    </div>
  );
}
