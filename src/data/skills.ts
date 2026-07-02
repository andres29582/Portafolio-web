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
      es: "Base de programación, lógica, estructura web y consulta de datos aplicada en desarrollo de sistemas.",
      pt: "Base de programação, lógica, estrutura web e consulta de dados aplicada em desenvolvimento de sistemas.",
      en: "Programming, logic, web structure, and data querying foundation applied in systems development.",
    },
    items: [
      { name: "TypeScript", level: "applied" },
      { name: "JavaScript", level: "practicing" },
      { name: "SQL", level: "practicing" },
      { name: "Java", level: "practicing" },
      { name: "Python", level: "learning" },
      { name: "HTML", level: "applied" },
      { name: "CSS", level: "applied" },
    ],
  },
  {
    id: "backend-and-development",
    title: {
      es: "Backend y desarrollo",
      pt: "Backend e desenvolvimento",
      en: "Backend and development",
    },
    description: {
      es: "Tecnologías y conceptos usados para construir aplicaciones, APIs y flujos de negocio.",
      pt: "Tecnologias e conceitos usados para construir aplicações, APIs e fluxos de negócio.",
      en: "Technologies and concepts used to build applications, APIs, and business flows.",
    },
    items: [
      { name: "NestJS", level: "applied" },
      { name: "Node.js", level: "practicing" },
      { name: "APIs REST", level: "applied" },
      { name: "JWT", level: "practicing" },
      { name: "DTOs e validação", level: "practicing" },
      { name: "Regras de negócio", level: "practicing" },
      { name: "Arquitetura modular", level: "practicing" },
      { name: "Integração entre camadas", level: "practicing" },
    ],
  },
  {
    id: "frontend-and-interface",
    title: {
      es: "Frontend e interfaz",
      pt: "Frontend e interface",
      en: "Frontend and interface",
    },
    description: {
      es: "Tecnologías usadas para construir interfaces, consumir APIs y crear aplicaciones web/mobile.",
      pt: "Tecnologias usadas para construir interfaces, consumo de APIs e aplicações web/mobile.",
      en: "Technologies used to build interfaces, consume APIs, and create web/mobile applications.",
    },
    items: [
      { name: "React", level: "practicing" },
      { name: "React Native", level: "practicing" },
      { name: "Expo", level: "practicing" },
      { name: "Next.js", level: "applied" },
      { name: "Tailwind CSS", level: "applied" },
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
      es: "Herramientas de desarrollo, versionado, deploy y práctica con datos.",
      pt: "Ferramentas de desenvolvimento, versionamento, deploy e prática com dados.",
      en: "Tools for development, versioning, deployment, and data practice.",
    },
    items: [
      { name: "PostgreSQL", level: "applied" },
      { name: "Git", level: "applied" },
      { name: "GitHub", level: "applied" },
      { name: "Swagger", level: "practicing" },
      { name: "Vercel", level: "applied" },
      { name: "VS Code", level: "applied" },
    ],
  },
  {
    id: "methodologies-and-processes",
    title: {
      es: "Metodologías y procesos",
      pt: "Metodologias e processo",
      en: "Methodologies and process",
    },
    description: {
      es: "Formas de trabajo para organizar demandas, prioridades y evolución de soluciones.",
      pt: "Formas de trabalho para organizar demandas, prioridades e evolução de soluções.",
      en: "Ways of working to organize demands, priorities, and solution evolution.",
    },
    items: [
      { name: "Scrum", level: "learning" },
      { name: "Kanban", level: "practicing" },
      { name: "Metodologias ágeis", level: "learning" },
      { name: "Documentação técnica", level: "practicing" },
      { name: "Organização por etapas e prioridades", level: "practicing" },
    ],
  },
];
