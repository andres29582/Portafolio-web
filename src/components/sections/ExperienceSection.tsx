import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { profile } from "@/data/profile";
import type { TranslationContent } from "@/data/translations";
import type { Language } from "@/lib/i18n";

type ExperienceSectionProps = {
  language: Language;
  labels: TranslationContent;
};

export function ExperienceSection({ language, labels }: ExperienceSectionProps) {
  return (
    <section className="section-shell" id="experience">
      <SectionTitle {...labels.sections.experience} />

      <div className="mt-10 grid gap-5">
        {profile.experience.map((item) => (
          <Card key={item.title[language]}>
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-amber">
                  {item.period[language]}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-ink">{item.title[language]}</h3>
                <p className="mt-1 font-semibold text-ink/64">{item.organization[language]}</p>
              </div>
              <div>
                <p className="leading-7 text-ink/72">{item.description[language]}</p>
                {item.highlights ? (
                  <ul className="mt-5 grid gap-3">
                    {item.highlights.map((highlight) => (
                      <li
                        className="flex gap-3 text-sm leading-6 text-ink/70"
                        key={highlight[language]}
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-signal" />
                        <span>{highlight[language]}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
