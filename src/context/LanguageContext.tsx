"use client";

import React, { createContext, useContext, useState } from "react";
import type { PortfolioContent } from "@/content/types";
import ptBR from "@/content/pt-BR";
import en from "@/content/en";

type Language = "pt-BR" | "en";

interface LanguageContextValue {
  language: Language;
  content: PortfolioContent;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt-BR");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt-BR" ? "en" : "pt-BR"));
  };

  const content = language === "pt-BR" ? ptBR : en;

  return (
    <LanguageContext.Provider value={{ language, content, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
