import type { ExperienceContent } from "@/content/types";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";

interface ExperienceSectionProps {
  content: ExperienceContent;
}

export function ExperienceSection({ content }: ExperienceSectionProps) {
  return (
    <section id="experiencia" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-3xl mx-auto">
        <SectionTitle title={content.sectionTitle} />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-700 hidden sm:block" />

          <div className="space-y-10">
            {content.items.map((item) => (
              <article key={`${item.company}-${item.period}`} className="sm:pl-12 relative">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full border-2 border-gray-600 bg-gray-800 items-center justify-center hidden sm:flex">
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />
                </div>

                <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                    <div>
                      <h3 className="text-white font-bold text-lg">{item.role}</h3>
                      <p className="text-cyan-400 font-medium">{item.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm">{item.period}</span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {item.responsibilities.map((r, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-300 text-sm"
                      >
                        <span className="text-cyan-500 mt-0.5 shrink-0">▸</span>
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <Badge key={t} label={t} variant="primary" />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
