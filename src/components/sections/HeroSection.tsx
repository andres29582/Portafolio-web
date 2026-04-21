import type { HeroContent } from "@/content/types";

interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-cyan-400 text-lg font-medium mb-3 tracking-wide">
          {content.greeting}
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
          {content.name}
        </h1>

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-cyan-500/60" />
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            {content.role}
          </p>
          <div className="h-px w-12 bg-cyan-500/60" />
        </div>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {content.tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projetos"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            {content.ctaProjects}
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            {content.ctaContact}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
        <span className="text-xs tracking-widest uppercase">scroll</span>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
