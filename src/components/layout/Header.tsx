"use client";

import type { TranslationContent } from "@/data/translations";
import { languages, type Language } from "@/lib/i18n";

type HeaderProps = {
  language: Language;
  labels: TranslationContent;
  onLanguageChange: (language: Language) => void;
};

const navItems = [
  { href: "#about", key: "about" },
  { href: "#skills", key: "skills" },
  { href: "#projects", key: "projects" },
  { href: "#architecture", key: "architecture" },
  { href: "#education", key: "education" },
  { href: "#experience", key: "experience" },
  { href: "#contact", key: "contact" },
] as const;

export function Header({ language, labels, onLanguageChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a className="focus-ring rounded-md font-mono text-sm font-bold text-ink" href="#home">
          AEPV.dev
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a
              className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-ink/72 transition hover:bg-white hover:text-ink"
              href={item.href}
              key={item.href}
            >
              {labels.nav[item.key]}
            </a>
          ))}
        </nav>

        <div
          aria-label="Language selector"
          className="flex rounded-md border border-line bg-white p-1"
          role="group"
        >
          {languages.map((item) => {
            const isActive = item.code === language;

            return (
              <button
                aria-pressed={isActive}
                className={`focus-ring min-h-9 rounded px-3 text-xs font-bold transition ${
                  isActive ? "bg-ink text-white" : "text-ink/62 hover:bg-paper hover:text-ink"
                }`}
                key={item.code}
                onClick={() => onLanguageChange(item.code)}
                title={item.name}
                type="button"
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
