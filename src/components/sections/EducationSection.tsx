import type { EducationContent } from "@/content/types";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface EducationSectionProps {
  content: EducationContent;
}

export function EducationSection({ content }: EducationSectionProps) {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionTitle title={content.sectionTitle} />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-700 hidden sm:block" />

          <div className="space-y-10">
            {content.items.map((item) => (
              <article key={item.institution} className="sm:pl-12 relative">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1.5 w-8 h-8 rounded-full border-2 items-center justify-center hidden sm:flex ${
                    item.current
                      ? "border-cyan-500 bg-cyan-500/20"
                      : "border-gray-600 bg-gray-800"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      item.current ? "bg-cyan-500" : "bg-gray-500"
                    }`}
                  />
                </div>

                <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {item.degree}
                      </h3>
                      <p className="text-cyan-400 font-medium">
                        {item.institution}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-400 text-sm">{item.period}</span>
                      {item.current && (
                        <p className="text-cyan-400 text-xs mt-1">● {content.currentLabel}</p>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-1.5">
                    {item.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-300 text-sm"
                      >
                        <span className="text-cyan-500 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
