import type { ArchitectureContent } from "@/content/types";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";

interface ArchitectureSectionProps {
  content: ArchitectureContent;
}

export function ArchitectureSection({ content }: ArchitectureSectionProps) {
  return (
    <section id="architecture" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={content.sectionTitle} />

        <div className="mb-10">
          <h3 className="text-xl text-gray-200 font-medium mb-3">
            {content.subtitle}
          </h3>
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            {content.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {content.patterns.map((pattern) => (
            <Card key={pattern.title} hover>
              <div className="text-3xl mb-3">{pattern.icon}</div>
              <h4 className="text-white font-semibold mb-2">{pattern.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {pattern.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-8">
          <h4 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-5">
            {content.philosophyTitle}
          </h4>
          <ul className="grid sm:grid-cols-2 gap-3">
            {content.philosophy.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <span className="text-cyan-500 font-bold shrink-0">0{i + 1}</span>
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
