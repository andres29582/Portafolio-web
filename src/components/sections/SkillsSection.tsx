import type { SkillsContent } from "@/content/types";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";

interface SkillsSectionProps {
  content: SkillsContent;
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-gray-300 text-sm w-28 shrink-0">{name}</span>
      <div className="flex gap-1 flex-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-all duration-300 ${
              i < level ? "bg-cyan-500" : "bg-gray-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const categoryDisplayNames: Record<string, string> = {
  Frontend: "Frontend",
  Backend: "Backend",
  Banco_de_Dados: "Banco de Dados",
  Database: "Database",
  DevOps_Ferramentas: "DevOps & Ferramentas",
  DevOps_Tools: "DevOps & Tools",
};

export function SkillsSection({ content }: SkillsSectionProps) {
  return (
    <section id="habilidades" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={content.sectionTitle} />

        <div className="grid sm:grid-cols-2 gap-6">
          {Object.entries(content.categories).map(([key, skills]) => (
            <Card key={key}>
              <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-5">
                {categoryDisplayNames[key] ?? skills[0]?.category ?? key}
              </h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
