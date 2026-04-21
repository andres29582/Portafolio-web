import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";
import type { TranslationContent } from "@/data/translations";
import type { Language } from "@/lib/i18n";

type ProjectsSectionProps = {
  language: Language;
  labels: TranslationContent;
};

export function ProjectsSection({ language, labels }: ProjectsSectionProps) {
  return (
    <section className="section-shell" id="projects">
      <SectionTitle {...labels.sections.projects} />

      <div className="mt-10 grid gap-6">
        {projects.map((project) => {
          const projectHref = project.githubUrl ?? project.liveUrl;

          return (
            <Card
              className={`relative grid gap-6 transition lg:grid-cols-[0.9fr_1.1fr] ${
                projectHref
                  ? "group hover:-translate-y-1 hover:border-signal hover:shadow-[0_22px_70px_rgba(21,127,98,0.18)]"
                  : ""
              }`}
              key={project.id}
            >
              {projectHref ? (
                <a
                  aria-label={`${labels.actions.viewGithub}: ${project.name[language]}`}
                  className="focus-ring absolute inset-0 z-10 rounded-lg"
                  href={projectHref}
                  rel="noreferrer"
                  target="_blank"
                />
              ) : null}

            <div className="relative z-0">
              <div className="flex flex-wrap items-center gap-3">
                <h3
                  className={`text-2xl font-bold text-ink ${
                    projectHref ? "transition group-hover:text-signal" : ""
                  }`}
                >
                  {project.name[language]}
                </h3>
                <span className="rounded-md border border-signal/30 bg-signal/10 px-3 py-1 text-xs font-bold text-signal">
                  {project.statusLabel[language]}
                </span>
              </div>
              <p className="mt-4 leading-7 text-ink/72">{project.description[language]}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    className="rounded-md border border-line bg-paper px-3 py-1.5 font-mono text-xs font-semibold text-ink/74"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-0 grid gap-4">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-amber">
                  {labels.labels.problem}
                </p>
                <p className="mt-2 leading-7 text-ink/72">{project.problem[language]}</p>
              </div>
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-berry">
                  {labels.labels.learned}
                </p>
                <p className="mt-2 leading-7 text-ink/72">{project.learnings[language]}</p>
              </div>
              <div className="relative z-20 flex flex-wrap gap-3">
                {project.githubUrl ? (
                  <Button external href={project.githubUrl} variant="secondary">
                    {labels.actions.viewGithub}
                  </Button>
                ) : null}
                {project.liveUrl ? (
                  <Button external href={project.liveUrl} variant="ghost">
                    {labels.actions.viewLive}
                  </Button>
                ) : null}
              </div>
            </div>
          </Card>
          );
        })}
      </div>
    </section>
  );
}
