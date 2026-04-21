import type { TranslationContent } from "@/data/translations";
import { profile } from "@/data/profile";
import type { Language } from "@/lib/i18n";

type FooterProps = {
  language: Language;
  labels: TranslationContent;
};

export function Footer({ language, labels }: FooterProps) {
  return (
    <footer className="border-t border-line bg-white/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-ink/66 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>{labels.footer}</p>
        <p>{profile.contact.location[language]}</p>
      </div>
    </footer>
  );
}
