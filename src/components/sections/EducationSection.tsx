import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { profile } from "@/data/profile";
import type { TranslationContent } from "@/data/translations";
import type { Language } from "@/lib/i18n";

type EducationSectionProps = {
  language: Language;
  labels: TranslationContent;
};

export function EducationSection({ language, labels }: EducationSectionProps) {
  return (
    <section className="section-shell" id="education">
      <SectionTitle {...labels.sections.education} />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {profile.education.map((item) => (
          <Card key={item.title[language]}>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-signal">
              {item.period[language]}
            </p>
            <h3 className="mt-3 text-xl font-bold text-ink">{item.title[language]}</h3>
            <p className="mt-1 font-semibold text-ink/64">{item.organization[language]}</p>
            <p className="mt-4 leading-7 text-ink/72">{item.description[language]}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
