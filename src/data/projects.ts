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
      es: "Sistema orientado a la gestión financiera personal, con foco en organización de cuentas, ingresos, gastos, categorías, transferencias, deudas y metas.",
      pt: "Sistema voltado à gestão financeira pessoal, com foco em organização de contas, receitas, despesas, categorias, transferências, dívidas e metas.",
      en: "System focused on personal financial management, organizing accounts, income, expenses, categories, transfers, debts, and goals.",
    },
    problem: {
      es: "Transformar registros financieros dispersos en una estructura organizada, con reglas de negocio, control de datos y una visión más clara de la vida financiera.",
      pt: "Transformar registros financeiros dispersos em uma estrutura organizada, com regras de negócio, controle de dados e visão mais clara da vida financeira.",
      en: "Turns scattered financial records into an organized structure with business rules, data control, and a clearer view of personal finances.",
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
      es: "Modelado de entidades, autenticación, organización por módulos, backend, bases de datos, reglas de negocio y visión arquitectural del sistema.",
      pt: "Modelagem de entidades, autenticação, organização por módulos, backend, banco de dados, regras de negócio e visão arquitetural do sistema.",
      en: "Entity modeling, authentication, module organization, backend, databases, business rules, and architectural system thinking.",
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
      es: "Aplicación web desarrollada para presentar mi perfil profesional, proyectos, habilidades y forma de pensar sistemas.",
      pt: "Aplicação web desenvolvida para apresentar meu perfil profissional, projetos, habilidades e forma de pensar sistemas.",
      en: "Web application built to present my professional profile, projects, skills, and way of thinking about systems.",
    },
    problem: {
      es: "Crear una presentación más estructurada que un currículum tradicional, mostrando no solo información personal, sino también organización técnica y evolución profesional.",
      pt: "Criar uma apresentação mais estruturada do que um currículo tradicional, mostrando não apenas informações pessoais, mas também organização técnica e evolução profissional.",
      en: "Creates a more structured presentation than a traditional resume, showing not only personal information but also technical organization and professional growth.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    learnings: {
      es: "Estructuración de frontend, organización modular, contenido técnico, presentación profesional e internacionalización de la interfaz.",
      pt: "Estruturação de frontend, organização modular, conteúdo técnico, apresentação profissional e internacionalização da interface.",
      en: "Frontend structure, modular organization, technical content, professional presentation, and interface internationalization.",
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
