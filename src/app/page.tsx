"use client";

import { useLanguage } from "@/context/LanguageContext";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeaderWrapper } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const { content } = useLanguage();

  return (
    <>
      <HeaderWrapper />
      <main className="pt-16">
        <HeroSection content={content.hero} />
        <AboutSection content={content.about} />
        <SkillsSection content={content.skills} />
        <ProjectsSection content={content.projects} />
        <ArchitectureSection content={content.architecture} />
        <EducationSection content={content.education} />
        <ExperienceSection content={content.experience} />
        <ContactSection content={content.contact} />
      </main>
      <Footer content={content.footer} name={content.hero.name} />
    </>
  );
}
