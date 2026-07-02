import type { Language } from "@/lib/i18n";
import type { LocalizedText } from "@/types/localization";

type SectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

type ArchitectureItem = {
  title: string;
  description: string;
};

export type TranslationContent = {
  languageName: string;
  nav: {
    about: string;
    skills: string;
    projects: string;
    architecture: string;
    education: string;
    experience: string;
    contact: string;
  };
  actions: {
    viewProjects: string;
    downloadCv: string;
    contact: string;
    viewGithub: string;
    viewLive: string;
    sendMessage: string;
    viewDetails: string;
  };
  hero: {
    eyebrow: string;
    availability: string;
    systemTitle: string;
    systemSubtitle: string;
    systemModules: string[];
  };
  sections: {
    about: SectionCopy;
    skills: SectionCopy;
    projects: SectionCopy;
    architecture: SectionCopy;
    education: SectionCopy;
    experience: SectionCopy;
    contact: SectionCopy;
  };
  architecture: {
    flowTitle: string;
    items: ArchitectureItem[];
  };
  labels: {
    technologies: string;
    problem: string;
    learned: string;
    status: string;
    location: string;
    availability: string;
    email: string;
    pendingLink: string;
  };
  skillLevels: Record<"learning" | "practicing" | "applied", string>;
  footer: string;
};

export const translations: Record<Language, TranslationContent> = {
  es: {
    languageName: "Español",
    nav: {
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      architecture: "Arquitectura",
      education: "Formación",
      experience: "Experiencia",
      contact: "Contacto",
    },
    actions: {
      viewProjects: "Ver proyectos",
      downloadCv: "Descargar CV",
      contact: "Contacto",
      viewGithub: "GitHub",
      viewLive: "Demo",
      sendMessage: "Enviar mensaje",
      viewDetails: "Ver detalles",
    },
    hero: {
      eyebrow: "Perfil técnico para oportunidades en backend y tecnología",
      availability: "Disponible para oportunidades presenciales, híbridas, remotas e internacionales.",
      systemTitle: "Sistema de presentación",
      systemSubtitle: "Backend, datos y experiencia práctica conectados en proyectos.",
      systemModules: ["Perfil", "Habilidades", "Proyectos", "Arquitectura", "Experiencia"],
    },
    sections: {
      about: {
        eyebrow: "Quién soy",
        title: "Backend con base técnica, visión de proceso y experiencia corporativa",
        description:
          "Mi base combina desarrollo de software con experiencia real en soporte técnico, operaciones, atención a usuarios y seguimiento de procesos.",
      },
      skills: {
        eyebrow: "Stack y fundamentos",
        title: "Habilidades técnicas aplicadas en proyectos y experiencia práctica",
        description:
          "Organizo mis habilidades por bloques para mostrar tecnologías, fundamentos y herramientas que ya utilicé en proyectos, práctica académica y experiencia profesional.",
      },
      projects: {
        eyebrow: "Proyectos destacados",
        title: "Backend, datos y construcción práctica de soluciones",
        description:
          "Cada proyecto representa una parte importante de mi desarrollo técnico: backend, modelado de datos, autenticación, organización de módulos, documentación y presentación de soluciones.",
      },
      architecture: {
        eyebrow: "Arquitectura",
        title: "Cómo organizo un sistema",
        description:
          "Me interesa entender y organizar un sistema como un conjunto de partes conectadas: backend, datos, reglas de negocio, APIs, interfaz, deploy y evolución continua.",
      },
      education: {
        eyebrow: "Formación",
        title: "Formación y aprendizaje continuo",
        description:
          "Base académica en Análisis y Desarrollo de Sistemas, complementada con práctica, proyectos propios y cursos técnicos.",
      },
      experience: {
        eyebrow: "Experiencia profesional",
        title: "Soporte técnico, operación y contacto con problemas reales",
        description:
          "Mi experiencia profesional fortalece mi visión de tecnología, análisis de contexto, comunicación y resolución de problemas.",
      },
      contact: {
        eyebrow: "Contacto",
        title: "Hablemos de una oportunidad",
        description:
          "Estoy disponible para oportunidades presenciales, híbridas, remotas e internacionales en desarrollo y tecnología.",
      },
    },
    architecture: {
      flowTitle: "Mi flujo de construcción",
      items: [
        {
          title: "Backend",
          description: "Definición de módulos, entidades, APIs REST, autenticación, validaciones y reglas de negocio.",
        },
        {
          title: "Base de datos",
          description: "Modelado de entidades, relaciones, persistencia y consistencia de datos.",
        },
        {
          title: "Interfaz y consumo",
          description: "Construcción de la interfaz, consumo de API y organización de la experiencia del usuario.",
        },
        {
          title: "Deploy y evolución",
          description: "Versionado, documentación, publicación y mejora continua de la solución.",
        },
      ],
    },
    labels: {
      technologies: "Tecnologías",
      problem: "Objetivo",
      learned: "Implementado",
      status: "Estado",
      location: "Localización",
      availability: "Disponibilidad",
      email: "Email",
      pendingLink: "Link pendiente",
    },
    skillLevels: {
      learning: "Fortaleciendo",
      practicing: "Practicando",
      applied: "Aplicado",
    },
    footer: "Portafolio modular construido con Next.js, TypeScript y Tailwind CSS.",
  },
  pt: {
    languageName: "Português",
    nav: {
      about: "Sobre mim",
      skills: "Habilidades",
      projects: "Projetos",
      architecture: "Arquitetura",
      education: "Formação",
      experience: "Experiência",
      contact: "Contato",
    },
    actions: {
      viewProjects: "Ver projetos",
      downloadCv: "Baixar CV",
      contact: "Contato",
      viewGithub: "GitHub",
      viewLive: "Demo",
      sendMessage: "Enviar mensagem",
      viewDetails: "Ver detalhes",
    },
    hero: {
      eyebrow: "Perfil técnico para oportunidades em backend e tecnologia",
      availability: "Disponível para oportunidades presenciais, híbridas, remotas e internacionais.",
      systemTitle: "Sistema de apresentação",
      systemSubtitle: "Backend, dados e experiência prática conectados em projetos.",
      systemModules: ["Perfil", "Habilidades", "Projetos", "Arquitetura", "Experiência"],
    },
    sections: {
      about: {
        eyebrow: "Quem sou",
        title: "Backend com base técnica, visão de processo e experiência corporativa",
        description:
          "Minha base combina desenvolvimento de software com experiência real em suporte técnico, operações, atendimento a usuários e acompanhamento de processos.",
      },
      skills: {
        eyebrow: "Stack e fundamentos",
        title: "Habilidades técnicas aplicadas em projetos e experiência prática",
        description:
          "Organizo minhas habilidades por blocos para mostrar tecnologias, fundamentos e ferramentas que já utilizei em projetos, prática acadêmica e experiência profissional.",
      },
      projects: {
        eyebrow: "Projetos em destaque",
        title: "Backend, dados e construção prática de soluções",
        description:
          "Cada projeto representa uma parte importante do meu desenvolvimento técnico: backend, modelagem de dados, autenticação, organização de módulos, documentação e apresentação de soluções.",
      },
      architecture: {
        eyebrow: "Arquitetura",
        title: "Como organizo um sistema",
        description:
          "Tenho interesse em entender e organizar um sistema como um conjunto de partes conectadas: backend, dados, regras de negócio, APIs, interface, deploy e evolução contínua.",
      },
      education: {
        eyebrow: "Formação",
        title: "Formação e aprendizado contínuo",
        description:
          "Base acadêmica em Análise e Desenvolvimento de Sistemas, complementada por prática, projetos próprios e cursos técnicos.",
      },
      experience: {
        eyebrow: "Experiência profissional",
        title: "Suporte técnico, operação e contato com problemas reais",
        description:
          "Minha experiência profissional fortalece minha visão de tecnologia, análise de contexto, comunicação e resolução de problemas.",
      },
      contact: {
        eyebrow: "Contato",
        title: "Vamos conversar sobre uma oportunidade",
        description:
          "Estou disponível para oportunidades presenciais, híbridas, remotas e internacionais em desenvolvimento e tecnologia.",
      },
    },
    architecture: {
      flowTitle: "Meu fluxo de construção",
      items: [
        {
          title: "Backend",
          description: "Definição de módulos, entidades, APIs REST, autenticação, validações e regras de negócio.",
        },
        {
          title: "Banco de dados",
          description: "Modelagem de entidades, relacionamentos, persistência e consistência de dados.",
        },
        {
          title: "Interface e consumo",
          description: "Construção da interface, consumo de API e organização da experiência do usuário.",
        },
        {
          title: "Deploy e evolução",
          description: "Versionamento, documentação, publicação e melhoria contínua da solução.",
        },
      ],
    },
    labels: {
      technologies: "Tecnologias",
      problem: "Objetivo",
      learned: "Implementado",
      status: "Estado",
      location: "Localização",
      availability: "Disponibilidade",
      email: "Email",
      pendingLink: "Link pendente",
    },
    skillLevels: {
      learning: "Fortalecendo",
      practicing: "Praticando",
      applied: "Aplicado",
    },
    footer: "Portfólio modular construído com Next.js, TypeScript e Tailwind CSS.",
  },
  en: {
    languageName: "English",
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      architecture: "Architecture",
      education: "Education",
      experience: "Experience",
      contact: "Contact",
    },
    actions: {
      viewProjects: "View projects",
      downloadCv: "Download CV",
      contact: "Contact",
      viewGithub: "GitHub",
      viewLive: "Demo",
      sendMessage: "Send message",
      viewDetails: "View details",
    },
    hero: {
      eyebrow: "Technical profile for backend and technology opportunities",
      availability: "Available for on-site, hybrid, remote, and international opportunities",
      systemTitle: "Presentation system",
      systemSubtitle: "Backend, data, and practical experience connected through projects.",
      systemModules: ["Profile", "Skills", "Projects", "Architecture", "Experience"],
    },
    sections: {
      about: {
        eyebrow: "Who I am",
        title: "Backend with technical foundations, process vision, and corporate experience",
        description:
          "My foundation combines software development with real experience in technical support, operations, user service, and process follow-up.",
      },
      skills: {
        eyebrow: "Stack and fundamentals",
        title: "Technical skills applied in projects and practical experience",
        description:
          "I organize my skills by blocks to show technologies, fundamentals, and tools I have used in projects, academic practice, and professional experience.",
      },
      projects: {
        eyebrow: "Featured projects",
        title: "Backend, data, and practical solution building",
        description:
          "Each project represents an important part of my technical development: backend, data modeling, authentication, module organization, documentation, and solution presentation.",
      },
      architecture: {
        eyebrow: "Architecture",
        title: "How I organize a system",
        description:
          "I care about understanding and organizing a system as connected parts: backend, data, business rules, APIs, interface, deployment, and continuous evolution.",
      },
      education: {
        eyebrow: "Education",
        title: "Education and continuous learning",
        description:
          "Academic foundation in Systems Analysis and Development, complemented by practice, personal projects, and technical courses.",
      },
      experience: {
        eyebrow: "Professional experience",
        title: "Technical support, operations, and contact with real problems",
        description:
          "My professional experience strengthens my technology perspective, context analysis, communication, and problem solving.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Let us talk about an opportunity",
        description:
          "I am available for on-site, hybrid, remote, and international opportunities in development and technology.",
      },
    },
    architecture: {
      flowTitle: "My building flow",
      items: [
        {
          title: "Backend",
          description: "Definition of modules, entities, REST APIs, authentication, validations, and business rules.",
        },
        {
          title: "Database",
          description: "Entity modeling, relationships, persistence, and data consistency.",
        },
        {
          title: "Interface and consumption",
          description: "Interface building, API consumption, and organization of the user experience.",
        },
        {
          title: "Deploy and evolution",
          description: "Versioning, documentation, publishing, and continuous solution improvement.",
        },
      ],
    },
    labels: {
      technologies: "Technologies",
      problem: "Objective",
      learned: "Implemented",
      status: "Status",
      location: "Location",
      availability: "Availability",
      email: "Email",
      pendingLink: "Pending link",
    },
    skillLevels: {
      learning: "Strengthening",
      practicing: "Practicing",
      applied: "Applied",
    },
    footer: "Modular portfolio built with Next.js, TypeScript, and Tailwind CSS.",
  },
};

export const cvDownloadLabels: LocalizedText = {
  es: "Descargar CV",
  pt: "Baixar CV",
  en: "Download CV",
};
