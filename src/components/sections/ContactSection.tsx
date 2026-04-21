import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { profile } from "@/data/profile";
import type { TranslationContent } from "@/data/translations";
import type { Language } from "@/lib/i18n";

type ContactSectionProps = {
  language: Language;
  labels: TranslationContent;
};

export function ContactSection({ language, labels }: ContactSectionProps) {
  const mailtoHref = `mailto:${profile.contact.email}`;

  return (
    <section className="section-shell" id="contact">
      <SectionTitle {...labels.sections.contact} />

      <Card className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="grid gap-4">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-signal">
              {labels.labels.email}
            </p>
            <a
              className="mt-2 inline-flex text-lg font-bold text-ink hover:text-signal"
              href={mailtoHref}
            >
              {profile.contact.email}
            </a>
          </div>
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-amber">
              {labels.labels.location}
            </p>
            <p className="mt-2 text-ink/72">{profile.contact.location[language]}</p>
          </div>
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-berry">
              {labels.labels.availability}
            </p>
            <p className="mt-2 text-ink/72">{profile.contact.availability[language]}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {profile.contact.links.map((link) =>
              link.href ? (
                <Button external href={link.href} key={link.label} variant="secondary">
                  {link.label}
                </Button>
              ) : (
                <span
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-line bg-paper px-5 py-2.5 text-sm font-semibold text-ink/50"
                  key={link.label}
                  title={labels.labels.pendingLink}
                >
                  {link.label}
                </span>
              ),
            )}
          </div>
        </div>

        <Button className="w-full sm:w-auto" href={mailtoHref}>
          {labels.actions.sendMessage}
        </Button>
      </Card>
    </section>
  );
}
