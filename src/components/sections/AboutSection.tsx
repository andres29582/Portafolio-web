import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { profile } from "@/data/profile";
import type { TranslationContent } from "@/data/translations";
import type { Language } from "@/lib/i18n";

type AboutSectionProps = {
  language: Language;
  labels: TranslationContent;
};

export function AboutSection({ language, labels }: AboutSectionProps) {
  return (
    <section className="section-shell" id="about">
      <SectionTitle {...labels.sections.about} />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <Card>
          <p className="text-lg leading-8 text-ink/78">{profile.about[language]}</p>
        </Card>

        <div className="grid gap-4">
          {profile.focus.map((item, index) => (
            <div
              className="rounded-lg border border-line bg-white/76 p-5"
              key={`${item[language]}-${index}`}
            >
              <span className="font-mono text-sm font-bold text-amber">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-base leading-7 text-ink/74">{item[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
