"use client";

import { useRef, useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="sticky top-0 z-50 border-b border-line bg-paper/92 backdrop-blur-xl"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isMenuOpen) {
          setIsMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >
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

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? labels.labels.closeNavigation : labels.labels.openNavigation}
          className="focus-ring ml-auto flex min-h-9 min-w-9 items-center justify-center rounded-md text-ink lg:hidden"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          ref={menuButtonRef}
          type="button"
        >
          <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </button>

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

      <nav
        aria-label={labels.labels.mobileNavigation}
        className="mx-auto max-w-7xl px-4 pb-3 sm:px-6 lg:hidden"
        hidden={!isMenuOpen}
        id="mobile-navigation"
      >
        <div className="flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-ink/72 transition hover:bg-white hover:text-ink"
              href={item.href}
              key={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {labels.nav[item.key]}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
