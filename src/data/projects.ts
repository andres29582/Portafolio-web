import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "personal-management-system",
    name: {
      es: "Sistema de Gestión Personal",
      pt: "Sistema de Gestão Pessoal",
      en: "Personal Management System",
    },
    description: {
      es: "Aplicación full stack de gestión financiera personal con backend modular, API REST, autenticación JWT, PostgreSQL y frontend mobile en React Native/Expo.",
      pt: "Aplicação full stack de gestão financeira pessoal com backend modular, API REST, autenticação JWT, PostgreSQL e frontend mobile em React Native/Expo.",
      en: "Full-stack personal finance management application with modular backend, REST API, JWT authentication, PostgreSQL, and mobile frontend in React Native/Expo.",
    },
    problem: {
      es: "Centralizar cuentas, ingresos, gastos, categorías, transferencias, deudas y metas en una estructura con reglas de negocio, control de datos y base para reportes.",
      pt: "Centralizar contas, receitas, despesas, categorias, transferências, dívidas e metas em uma estrutura com regras de negócio, controle de dados e base para relatórios.",
      en: "Centralizes accounts, income, expenses, categories, transfers, debts, and goals in a structure with business rules, data control, and a foundation for reports.",
    },
    technologies: [
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "JWT",
      "Modelagem de dados",
      "APIs REST",
      "React Native",
      "Expo",
    ],
    learnings: {
      es: "Implementación de módulos, entidades, DTOs, autenticación, persistencia, relaciones en base de datos y separación de responsabilidades en el backend.",
      pt: "Implementação de módulos, entidades, DTOs, autenticação, persistência, relações em banco de dados e separação de responsabilidades no backend.",
      en: "Implemented modules, entities, DTOs, authentication, persistence, database relationships, and separation of backend responsibilities.",
    },
    status: "in-progress",
    statusLabel: {
      es: "MVP funcional en evolución",
      pt: "MVP funcional em evolução",
      en: "Functional MVP evolving",
    },
    githubUrl: "https://github.com/andres29582/personal-finance-management-system.git",
  },
  {
    id: "portfolio-web",
    name: {
      es: "Portafolio Web",
      pt: "Portfólio Web",
      en: "Web Portfolio",
    },
    description: {
      es: "Aplicación web multilingüe creada con Next.js, TypeScript y Tailwind CSS para presentar perfil, proyectos, habilidades y contacto profesional.",
      pt: "Aplicação web multilíngue criada com Next.js, TypeScript e Tailwind CSS para apresentar perfil, projetos, habilidades e contato profissional.",
      en: "Multilingual web application built with Next.js, TypeScript, and Tailwind CSS to present my profile, projects, skills, and professional contact.",
    },
    problem: {
      es: "Convertir el CV tradicional en una experiencia pública, navegable y clara, con foco en reclutadores que necesitan entender rápido el encaje técnico.",
      pt: "Converter o currículo tradicional em uma experiência pública, navegável e clara, com foco em recrutadores que precisam entender rapidamente o encaixe técnico.",
      en: "Turns a traditional resume into a public, navigable, and clear experience for recruiters who need to quickly understand technical fit.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    learnings: {
      es: "Componentización, datos tipados, contenido localizado en tres idiomas, responsive design, despliegue en Vercel y cuidado de presentación profesional.",
      pt: "Componentização, dados tipados, conteúdo localizado em três idiomas, design responsivo, deploy na Vercel e cuidado com apresentação profissional.",
      en: "Componentization, typed data, localized content in three languages, responsive design, Vercel deployment, and professional presentation polish.",
    },
    status: "in-progress",
    statusLabel: {
      es: "Versión inicial publicada",
      pt: "Versão inicial publicada",
      en: "Initial version published",
    },
  },
  {
    id: "java-tetris",
    name: {
      es: "Tetris en Java",
      pt: "Tetris em Java",
      en: "Tetris in Java",
    },
    description: {
      es: "Proyecto académico desarrollado en Java con foco en lógica, estructura y funcionamiento de un juego clásico.",
      pt: "Projeto acadêmico desenvolvido em Java com foco em lógica, estrutura e funcionamento de um jogo clássico.",
      en: "Academic project developed in Java focused on the logic, structure, and behavior of a classic game.",
    },
    problem: {
      es: "Practicar fundamentos de programación, control de flujo, organización del código y razonamiento lógico.",
      pt: "Praticar fundamentos de programação, controle de fluxo, organização do código e raciocínio lógico.",
      en: "Practices programming fundamentals, flow control, code organization, and logical reasoning.",
    },
    technologies: ["Java"],
    learnings: {
      es: "Lógica de programación, estructura de proyecto, comportamiento de sistema e implementación orientada a la práctica.",
      pt: "Lógica de programação, estrutura de projeto, comportamento de sistema e implementação orientada à prática.",
      en: "Programming logic, project structure, system behavior, and practice-oriented implementation.",
    },
    status: "completed",
    statusLabel: {
      es: "Concluido",
      pt: "Concluído",
      en: "Completed",
    },
    githubUrl: "https://github.com/andres29582/Tetris.git",
  },
];
