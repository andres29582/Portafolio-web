import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { skills } from "@/data/skills";
import type { TranslationContent } from "@/data/translations";
import type { Language } from "@/lib/i18n";
import type { SkillLevel } from "@/types/skill";

type SkillsSectionProps = {
  language: Language;
  labels: TranslationContent;
};

const levelClasses: Record<SkillLevel, string> = {
  learning: "border-amber/30 bg-amber/10 text-amber",
  practicing: "border-signal/30 bg-signal/10 text-signal",
  applied: "border-berry/30 bg-berry/10 text-berry",
};

export function SkillsSection({ language, labels }: SkillsSectionProps) {
  return (
    <section className="section-shell" id="skills">
      <SectionTitle {...labels.sections.skills} />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {skills.map((group) => (
          <Card key={group.id}>
            <h3 className="text-xl font-bold text-ink">{group.title[language]}</h3>
            <p className="mt-2 text-sm leading-6 text-ink/66">{group.description[language]}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  className={`rounded-md border px-3 py-2 text-sm font-semibold ${levelClasses[skill.level]}`}
                  key={skill.name}
                  title={labels.skillLevels[skill.level]}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
