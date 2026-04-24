import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getDiagramShowcase } from "@/data/diagrams";
import type { TranslationContent } from "@/data/translations";
import type { Language } from "@/lib/i18n";

type ArchitectureSectionProps = {
  language: Language;
  labels: TranslationContent;
};

export function ArchitectureSection({ language, labels }: ArchitectureSectionProps) {
  const diagramShowcase = getDiagramShowcase(language);

  return (
    <section className="section-shell" id="architecture">
      <SectionTitle {...labels.sections.architecture} />

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card className="bg-ink text-white">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
            {labels.architecture.flowTitle}
          </p>
          <div className="mt-6 grid gap-3">
            {labels.architecture.items.map((item, index) => (
              <div className="grid grid-cols-[34px_1fr] gap-3" key={item.title}>
                <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/16 bg-white/10 font-mono text-xs text-emerald-100">
                  {index + 1}
                </span>
                <div className="rounded-md border border-white/12 bg-white/8 p-4">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/72">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2">
          {labels.architecture.items.map((item) => (
            <div className="rounded-lg border border-line bg-white/76 p-5" key={item.title}>
              <h3 className="text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/68">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-lg border border-line bg-white/76 p-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-signal">
            {diagramShowcase.eyebrow}
          </p>
          <h3 className="mt-3 text-2xl font-bold text-ink">{diagramShowcase.title}</h3>
          <p className="mt-4 max-w-xl text-sm leading-6 text-ink/70">{diagramShowcase.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {diagramShowcase.items.map((item) => (
              <span
                className="rounded-md border border-signal/20 bg-signal/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-signal"
                key={item.id}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {diagramShowcase.items.map((item) => (
            <div className="rounded-lg border border-line bg-white/76 p-5" key={item.id}>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-signal">
                {item.label}
              </p>
              <h3 className="mt-3 text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/68">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
