import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "personal-management-system",
    name: {
      es: "Sistema de Gestión Financiera Personal",
      pt: "Sistema de Gestão Financeira Pessoal",
      en: "Personal Finance Management System",
    },
    description: {
      es: "Aplicación full stack desarrollada para centralizar cuentas, ingresos, gastos, categorías, transferencias, deudas, metas y reportes en una arquitectura organizada por módulos.",
      pt: "Aplicação full stack desenvolvida para centralizar contas, receitas, despesas, categorias, transferências, dívidas, metas e relatórios em uma arquitetura organizada por módulos.",
      en: "Full-stack application built to centralize accounts, income, expenses, categories, transfers, debts, goals, and reports in a module-oriented architecture.",
    },
    problem: {
      es: "Organiza la gestión financiera personal en una estructura única para registrar movimientos, acompañar cuentas, controlar deudas, definir metas y crear base para reportes y previsiones.",
      pt: "Organiza a gestão financeira pessoal em uma estrutura única, permitindo registrar movimentações, acompanhar contas, controlar dívidas, definir metas e criar base para relatórios e previsões.",
      en: "Organizes personal finance management in a single structure to register movements, track accounts, control debts, define goals, and create a foundation for reports and forecasts.",
    },
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "JWT",
      "APIs REST",
      "React Native",
      "Expo",
    ],
    learnings: {
      es: "Implementé autenticación JWT, módulos de cuentas, transacciones, transferencias, deudas y metas, entidades, DTOs, validaciones, reglas de negocio, modelado relacional con PostgreSQL, API REST por dominio, frontend mobile y documentación incremental.",
      pt: "Implementei autenticação JWT, módulos de contas, transações, transferências, dívidas e metas, entidades, DTOs, validações, regras de negócio, modelagem relacional com PostgreSQL, API REST por domínio, frontend mobile e documentação incremental.",
      en: "Implemented JWT authentication, modules for accounts, transactions, transfers, debts, and goals, entities, DTOs, validations, business rules, relational modeling with PostgreSQL, domain-oriented REST APIs, mobile frontend, and incremental documentation.",
    },
    status: "in-progress",
    statusLabel: {
      es: "Proyecto principal en evolución",
      pt: "Projeto principal em evolução",
      en: "Main project evolving",
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
      es: "Aplicación web multilingüe creada con Next.js, TypeScript y Tailwind CSS para presentar mi perfil profesional, proyectos, habilidades y experiencia de forma pública, navegable y organizada.",
      pt: "Aplicação web multilíngue criada com Next.js, TypeScript e Tailwind CSS para apresentar meu perfil profissional, projetos, habilidades e experiência de forma pública, navegável e organizada.",
      en: "Multilingual web application built with Next.js, TypeScript, and Tailwind CSS to present my professional profile, projects, skills, and experience in a public, navigable, and organized way.",
    },
    problem: {
      es: "Transformar el currículo tradicional en una experiencia digital clara, accesible y profesional para reclutadores y empresas.",
      pt: "Transformar o currículo tradicional em uma experiência digital clara, acessível e profissional para recrutadores e empresas.",
      en: "Turns a traditional resume into a clear, accessible, and professional digital experience for recruiters and companies.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    learnings: {
      es: "Implementé componentización de la interfaz, organización de contenido por secciones, datos tipados, soporte a tres idiomas, diseño responsivo y deploy en producción con Vercel.",
      pt: "Implementei componentização da interface, organização de conteúdo por seções, dados tipados, suporte a três idiomas, design responsivo e deploy em produção com Vercel.",
      en: "Implemented interface componentization, section-based content organization, typed data, support for three languages, responsive design, and production deployment with Vercel.",
    },
    status: "in-progress",
    statusLabel: {
      es: "Versión publicada",
      pt: "Versão publicada",
      en: "Published version",
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
      es: "Proyecto académico desarrollado en Java con foco en lógica, estructura de código e implementación de un juego clásico como ejercicio de fundamentos de programación.",
      pt: "Projeto acadêmico desenvolvido em Java com foco em lógica, estrutura de código e implementação de um jogo clássico como exercício de fundamentos de programação.",
      en: "Academic project developed in Java, focused on logic, code structure, and implementation of a classic game as a programming fundamentals exercise.",
    },
    problem: {
      es: "Practicar lógica de programación, control de flujo, organización de código y razonamiento para construir comportamiento de sistema.",
      pt: "Praticar lógica de programação, controle de fluxo, organização de código e raciocínio para construção de comportamento de sistema.",
      en: "Practices programming logic, flow control, code organization, and reasoning to build system behavior.",
    },
    technologies: ["Java"],
    learnings: {
      es: "Implementé la estructura base del juego, reglas, movimiento y práctica de lógica y organización de código.",
      pt: "Implementei a estrutura base do jogo, regras, movimentação e prática de lógica e organização de código.",
      en: "Implemented the base game structure, rules, movement, and practice with logic and code organization.",
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
