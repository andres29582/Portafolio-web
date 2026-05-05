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
      es: "Base de programación, lógica, estructura web y consulta de datos aplicada en proyectos.",
      pt: "Base de programação, lógica, estrutura web e consulta de dados aplicada em projetos.",
      en: "Programming, logic, web structure, and data querying foundation applied in projects.",
    },
    items: [
      { name: "Java", level: "practicing" },
      { name: "Python", level: "learning" },
      { name: "SQL", level: "practicing" },
      { name: "TypeScript", level: "applied" },
      { name: "JavaScript", level: "practicing" },
      { name: "HTML", level: "applied" },
      { name: "CSS", level: "applied" },
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
      es: "Tecnologías y conceptos usados para construir aplicaciones organizadas y APIs.",
      pt: "Tecnologias e conceitos usados para construir aplicações organizadas e APIs.",
      en: "Technologies and concepts used to build organized applications and APIs.",
    },
    items: [
      { name: "React", level: "practicing" },
      { name: "Next.js", level: "applied" },
      { name: "Tailwind CSS", level: "applied" },
      { name: "NestJS", level: "applied" },
      { name: "APIs REST", level: "applied" },
      { name: "JWT", level: "practicing" },
      { name: "Modelagem de dados", level: "practicing" },
      { name: "Regras de negócio", level: "practicing" },
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
      es: "Herramientas usadas para desarrollo, versionado, despliegue y práctica con datos.",
      pt: "Ferramentas usadas para desenvolvimento, versionamento, deploy e prática com dados.",
      en: "Tools used for development, versioning, deployment, and data practice.",
    },
    items: [
      { name: "PostgreSQL", level: "applied" },
      { name: "Git", level: "applied" },
      { name: "GitHub", level: "applied" },
      { name: "Vercel", level: "applied" },
      { name: "VS Code", level: "applied" },
      { name: "Expo", level: "practicing" },
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
      es: "Formas de trabajo para organizar entregas, prioridades y acompañamiento de proyectos.",
      pt: "Formas de trabalho para organizar entregas, prioridades e acompanhamento de projetos.",
      en: "Work methods to organize delivery, priorities, and project follow-through.",
    },
    items: [
      { name: "Metodologias ágeis", level: "learning" },
      { name: "Scrum", level: "learning" },
      { name: "Kanban", level: "practicing" },
    ],
  },
];
