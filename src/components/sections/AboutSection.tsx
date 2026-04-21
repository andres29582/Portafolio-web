import type { AboutContent } from "@/content/types";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface AboutSectionProps {
  content: AboutContent;
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={content.sectionTitle} />

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-5">
            {content.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-gray-400 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 h-fit">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider text-cyan-400">
              {content.highlightLabel}
            </h3>
            <ul className="space-y-3">
              {content.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-cyan-500 mt-1 shrink-0">▸</span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
