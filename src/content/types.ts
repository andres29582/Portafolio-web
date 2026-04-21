export interface NavItem {
  label: string;
  href: string;
}

export interface HeroContent {
  greeting: string;
  name: string;
  role: string;
  tagline: string;
  ctaProjects: string;
  ctaContact: string;
}

export interface AboutContent {
  sectionTitle: string;
  paragraphs: string[];
  highlightLabel: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: string;
}

export interface SkillsContent {
  sectionTitle: string;
  categories: {
    [key: string]: Skill[];
  };
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  highlights: string[];
  status: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface ProjectsContent {
  sectionTitle: string;
  projects: Project[];
  statusLabels: {
    completed: string;
    inProgress: string;
    concept: string;
  };
}

export interface ArchitecturePattern {
  title: string;
  description: string;
  icon: string;
}

export interface ArchitectureContent {
  sectionTitle: string;
  subtitle: string;
  description: string;
  patterns: ArchitecturePattern[];
  philosophyTitle: string;
  philosophy: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description: string;
  highlights: string[];
  current: boolean;
}

export interface EducationContent {
  sectionTitle: string;
  items: EducationItem[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  tech: string[];
}

export interface ExperienceContent {
  sectionTitle: string;
  items: ExperienceItem[];
}

export interface ContactContent {
  sectionTitle: string;
  subtitle: string;
  description: string;
  emailLabel: string;
  email: string;
  githubLabel: string;
  github: string;
  linkedinLabel: string;
  linkedin: string;
  availability: string;
}

export interface FooterContent {
  rights: string;
  builtWith: string;
}

export interface PortfolioContent {
  nav: NavItem[];
  hero: HeroContent;
  about: AboutContent;
  skills: SkillsContent;
  projects: ProjectsContent;
  architecture: ArchitectureContent;
  education: EducationContent;
  experience: ExperienceContent;
  contact: ContactContent;
  footer: FooterContent;
}
