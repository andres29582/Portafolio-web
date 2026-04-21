"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { translations } from "@/data/translations";
import {
  DEFAULT_LANGUAGE,
  getBrowserLanguage,
  isLanguage,
  type Language,
} from "@/lib/i18n";

const LANGUAGE_STORAGE_KEY = "portfolio-language-v2";

export function PortfolioHome() {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    setLanguage(isLanguage(savedLanguage) ? savedLanguage : getBrowserLanguage());
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const labels = translations[language];

  return (
    <div className="min-h-screen">
      <Header language={language} labels={labels} onLanguageChange={setLanguage} />
      <main>
        <HeroSection language={language} labels={labels} />
        <AboutSection language={language} labels={labels} />
        <SkillsSection language={language} labels={labels} />
        <ProjectsSection language={language} labels={labels} />
        <ArchitectureSection labels={labels} />
        <EducationSection language={language} labels={labels} />
        <ExperienceSection language={language} labels={labels} />
        <ContactSection language={language} labels={labels} />
      </main>
      <Footer language={language} labels={labels} />
    </div>
  );
}
