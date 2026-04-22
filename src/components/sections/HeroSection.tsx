import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import type { TranslationContent } from "@/data/translations";
import type { Language } from "@/lib/i18n";

type HeroSectionProps = {
  language: Language;
  labels: TranslationContent;
};

export function HeroSection({ language, labels }: HeroSectionProps) {
  return (
    <section
      className="section-shell grid min-h-[calc(100vh-68px)] items-center gap-12 pt-16 lg:grid-cols-[1.05fr_0.95fr]"
      id="home"
    >
      <div>
        <p className="inline-flex rounded-md border border-line bg-white px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-signal">
          {labels.hero.eyebrow}
        </p>
        <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] text-ink sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl font-semibold text-ink/82">{profile.role[language]}</p>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">{profile.tagline[language]}</p>
        <p className="mt-5 max-w-2xl text-base leading-7 text-ink/66">{profile.summary[language]}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="#projects">{labels.actions.viewProjects}</Button>
          <Button
            download="cv-andres-pignoloni.docx"
            href="/cv-andres-pignoloni.docx"
            variant="secondary"
          >
            {labels.actions.downloadCv}
          </Button>
          <Button href="#contact" variant="ghost">
            {labels.actions.contact}
          </Button>
        </div>

        <p className="mt-7 font-mono text-sm text-ink/62">{labels.hero.availability}</p>
      </div>

      <div className="rounded-lg border border-ink bg-ink p-4 text-white shadow-soft">
        <div className="rounded-md border border-white/14 bg-white/7 p-5">
          <div className="flex items-start justify-between gap-4 border-b border-white/14 pb-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-200">
                {labels.hero.systemTitle}
              </p>
              <h2 className="mt-2 text-2xl font-bold">{labels.hero.systemSubtitle}</h2>
            </div>
            <span className="rounded border border-emerald-200/40 px-2 py-1 font-mono text-xs text-emerald-100">
              MVP
            </span>
          </div>

          <div className="mt-6 grid gap-3">
            {labels.hero.systemModules.map((module, index) => (
              <div
                className="grid grid-cols-[40px_1fr_auto] items-center gap-3 rounded-md border border-white/12 bg-white/8 px-3 py-3"
                key={module}
              >
                <span className="font-mono text-xs text-emerald-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold">{module}</span>
                <span className="h-2 w-2 rounded-full bg-amber-300" />
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {["Next.js", "TS", "i18n"].map((item) => (
              <div className="rounded-md border border-white/12 bg-white/8 px-3 py-4" key={item}>
                <p className="font-mono text-sm font-bold text-emerald-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
