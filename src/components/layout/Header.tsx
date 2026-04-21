"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { NavItem } from "@/content/types";
import { useState } from "react";

interface HeaderProps {
  nav: NavItem[];
  language: string;
  onToggleLanguage: () => void;
}

export function Header({ nav, language, onToggleLanguage }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="text-white font-bold text-lg hover:text-cyan-400 transition-colors"
        >
          <span className="text-cyan-400">&lt;</span>
          Andres
          <span className="text-cyan-400"> /&gt;</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-700 hover:border-cyan-500 text-gray-400 hover:text-white text-sm transition-all"
            aria-label="Toggle language"
          >
            <span className={language === "pt-BR" ? "text-white font-semibold" : ""}>PT</span>
            <span className="text-gray-600">|</span>
            <span className={language === "en" ? "text-white font-semibold" : ""}>EN</span>
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-400 hover:text-white p-1.5"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-gray-950 border-t border-gray-800 px-6 py-4 flex flex-col gap-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export function HeaderWrapper() {
  const { content, language, toggleLanguage } = useLanguage();
  return (
    <Header
      nav={content.nav}
      language={language}
      onToggleLanguage={toggleLanguage}
    />
  );
}
