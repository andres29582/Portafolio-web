import type { SkillGroup } from "@/types/skill";

export const skills: SkillGroup[] = [
  {
    id: "languages-and-fundamentals",
    title: {
      es: "Lenguajes y fundamentos",
      pt: "Linguagens e fundamentos",
      en: "Languages and fundamentals",
    },
    description: {
      es: "Base de programación, lógica, estructura web y consulta de datos.",
      pt: "Base de programação, lógica, estrutura web e consulta de dados.",
      en: "Foundation for programming, logic, web structure, and data querying.",
    },
    items: [
      { name: "Java", level: "learning" },
      { name: "Python", level: "learning" },
      { name: "SQL", level: "learning" },
      { name: "TypeScript", level: "learning" },
      { name: "JavaScript", level: "learning" },
      { name: "HTML", level: "learning" },
      { name: "CSS", level: "learning" },
    ],
  },
  {
    id: "development-and-structure",
    title: {
      es: "Desarrollo y estructura",
      pt: "Desenvolvimento e estrutura",
      en: "Development and structure",
    },
    description: {
      es: "Tecnologías y conceptos para construir aplicaciones organizadas.",
      pt: "Tecnologias e conceitos para construir aplicações organizadas.",
      en: "Technologies and concepts for building organized applications.",
    },
    items: [
      { name: "React", level: "learning" },
      { name: "Next.js", level: "learning" },
      { name: "Tailwind CSS", level: "learning" },
      { name: "NestJS", level: "learning" },
      { name: "APIs REST", level: "learning" },
      { name: "JWT", level: "learning" },
      { name: "Modelagem de dados", level: "learning" },
      { name: "Regras de negócio", level: "learning" },
    ],
  },
  {
    id: "database-and-tools",
    title: {
      es: "Bases de datos y herramientas",
      pt: "Banco de dados e ferramentas",
      en: "Databases and tools",
    },
    description: {
      es: "Herramientas para desarrollo, versionado, despliegue y práctica con datos.",
      pt: "Ferramentas para desenvolvimento, versionamento, deploy e prática com dados.",
      en: "Tools for development, versioning, deployment, and data practice.",
    },
    items: [
      { name: "PostgreSQL", level: "learning" },
      { name: "Git", level: "learning" },
      { name: "GitHub", level: "learning" },
      { name: "Vercel", level: "learning" },
      { name: "VS Code", level: "learning" },
      { name: "Expo", level: "learning" },
    ],
  },
  {
    id: "methodologies-and-processes",
    title: {
      es: "Metodologias y procesos",
      pt: "Metodologias e processos",
      en: "Methodologies and processes",
    },
    description: {
      es: "Conocimiento de formas de trabajo para organizar entregas, prioridades y acompanamiento de proyectos.",
      pt: "Conhecimento de formas de trabalho para organizar entregas, prioridades e acompanhamento de projetos.",
      en: "Knowledge of work methods to organize delivery, priorities, and project follow-through.",
    },
    items: [
      { name: "Metodologias ageis", level: "learning" },
      { name: "Scrum", level: "learning" },
      { name: "Kanban", level: "learning" },
    ],
  },
];
