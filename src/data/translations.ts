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
    },
    hero: {
      eyebrow: "Perfil técnico para oportunidades junior",
      availability: "Disponible para oportunidades presenciales, híbridas, remotas e internacionales",
      systemTitle: "Sistema de presentación",
      systemSubtitle: "Backend, datos y soporte conectados en proyectos.",
      systemModules: ["Perfil", "Habilidades", "Proyectos", "Arquitectura", "Contacto"],
    },
    sections: {
      about: {
        eyebrow: "Quién soy",
        title: "Backend junior con base técnica y experiencia corporativa",
        description:
          "Mi perfil conecta formación en ADS, proyectos con backend y bases de datos, y experiencia real en soporte operacional.",
      },
      skills: {
        eyebrow: "Stack y fundamentos",
        title: "Habilidades técnicas aplicadas en proyectos",
        description:
          "Organizo mis conocimientos por bloques para mostrar qué ya apliqué, qué practico y qué sigo fortaleciendo.",
      },
      projects: {
        eyebrow: "Evidencia práctica",
        title: "Proyectos con backend, datos y entrega visible",
        description:
          "Cada proyecto muestra el problema trabajado, las decisiones técnicas y lo que implementé durante la construcción.",
      },
      architecture: {
        eyebrow: "Pensamiento técnico",
        title: "Cómo organizo un sistema",
        description:
          "Me interesa entender responsabilidades, datos, backend, reglas de negocio, APIs, interfaz y despliegue como partes conectadas.",
      },
      education: {
        eyebrow: "Formación",
        title: "Estudios y aprendizaje continuo",
        description:
          "Base académica en Análisis y Desarrollo de Sistemas, complementada con práctica y cursos técnicos.",
      },
      experience: {
        eyebrow: "Experiencia",
        title: "Soporte operacional en ambiente corporativo",
        description:
          "La experiencia profesional aporta criterio para entender usuarios, procesos, información y problemas reales antes de construir soluciones.",
      },
      contact: {
        eyebrow: "Contacto",
        title: "Hablemos de una oportunidad",
        description:
          "Estoy disponible para oportunidades presenciales, híbridas, remotas e internacionales en desarrollo y TI.",
      },
    },
    architecture: {
      flowTitle: "Flujo mental de construcción",
      items: [
        {
          title: "Backend",
          description: "Módulos, APIs REST, autenticación, reglas de negocio y responsabilidades claras.",
        },
        {
          title: "Base de datos",
          description: "Modelado de entidades, relaciones, persistencia y control de datos.",
        },
        {
          title: "Frontend",
          description: "Interfaz, componentes, experiencia de usuario y consumo de datos.",
        },
        {
          title: "Deploy",
          description: "Versionado, publicación, ambientes y evolución continua del proyecto.",
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
    },
    hero: {
      eyebrow: "Perfil técnico para oportunidades junior",
      availability: "Disponível para oportunidades presenciais, híbridas, remotas e internacionais",
      systemTitle: "Sistema de apresentação",
      systemSubtitle: "Backend, dados e suporte conectados em projetos.",
      systemModules: ["Perfil", "Habilidades", "Projetos", "Arquitetura", "Contato"],
    },
    sections: {
      about: {
        eyebrow: "Quem sou",
        title: "Backend junior com base técnica e experiência corporativa",
        description:
          "Meu perfil conecta formação em ADS, projetos com backend e banco de dados, e experiência real em suporte operacional.",
      },
      skills: {
        eyebrow: "Stack e fundamentos",
        title: "Habilidades técnicas aplicadas em projetos",
        description:
          "Organizo meus conhecimentos por blocos para mostrar o que já apliquei, o que pratico e o que sigo fortalecendo.",
      },
      projects: {
        eyebrow: "Evidência prática",
        title: "Projetos com backend, dados e entrega visível",
        description:
          "Cada projeto mostra o problema trabalhado, as decisões técnicas e o que implementei durante a construção.",
      },
      architecture: {
        eyebrow: "Pensamento técnico",
        title: "Como organizo um sistema",
        description:
          "Tenho interesse em entender responsabilidades, dados, backend, regras de negócio, APIs, interface e deploy como partes conectadas.",
      },
      education: {
        eyebrow: "Formação",
        title: "Estudos e aprendizado contínuo",
        description:
          "Base acadêmica em Análise e Desenvolvimento de Sistemas, complementada por prática e cursos técnicos.",
      },
      experience: {
        eyebrow: "Experiência",
        title: "Suporte operacional em ambiente corporativo",
        description:
          "A experiência profissional traz critério para entender usuários, processos, informações e problemas reais antes de construir soluções.",
      },
      contact: {
        eyebrow: "Contato",
        title: "Vamos conversar sobre uma oportunidade",
        description:
          "Estou disponível para oportunidades presenciais, híbridas, remotas e internacionais em desenvolvimento e TI.",
      },
    },
    architecture: {
      flowTitle: "Fluxo mental de construção",
      items: [
        {
          title: "Backend",
          description: "Módulos, APIs REST, autenticação, regras de negócio e responsabilidades claras.",
        },
        {
          title: "Banco de dados",
          description: "Modelagem de entidades, relações, persistência e controle de dados.",
        },
        {
          title: "Frontend",
          description: "Interface, componentes, experiência do usuário e consumo de dados.",
        },
        {
          title: "Deploy",
          description: "Versionamento, publicação, ambientes e evolução contínua do projeto.",
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
    },
    hero: {
      eyebrow: "Technical profile for junior opportunities",
      availability: "Available for on-site, hybrid, remote, and international opportunities",
      systemTitle: "Presentation system",
      systemSubtitle: "Backend, data, and support connected through projects.",
      systemModules: ["Profile", "Skills", "Projects", "Architecture", "Contact"],
    },
    sections: {
      about: {
        eyebrow: "Who I am",
        title: "Junior backend profile with technical foundations and corporate experience",
        description:
          "My profile connects ADS education, backend and database projects, and real experience in operational support.",
      },
      skills: {
        eyebrow: "Stack and fundamentals",
        title: "Technical skills applied in projects",
        description:
          "I organize my knowledge by blocks to show what I have applied, what I practice, and what I keep strengthening.",
      },
      projects: {
        eyebrow: "Practical evidence",
        title: "Projects with backend, data, and visible delivery",
        description:
          "Each project shows the problem worked on, technical decisions, and what I implemented during the build.",
      },
      architecture: {
        eyebrow: "Technical thinking",
        title: "How I organize a system",
        description:
          "I care about understanding responsibilities, data, backend, business rules, APIs, interface, and deployment as connected parts.",
      },
      education: {
        eyebrow: "Education",
        title: "Studies and continuous learning",
        description:
          "Academic foundation in Systems Analysis and Development, complemented by practice and technical courses.",
      },
      experience: {
        eyebrow: "Experience",
        title: "Operational support in a corporate environment",
        description:
          "Professional experience builds judgment for understanding users, processes, information, and real problems before building solutions.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Let us talk about an opportunity",
        description:
          "I am available for on-site, hybrid, remote, and international opportunities in development and IT.",
      },
    },
    architecture: {
      flowTitle: "System building thought flow",
      items: [
        {
          title: "Backend",
          description: "Modules, REST APIs, authentication, business rules, and clear responsibilities.",
        },
        {
          title: "Database",
          description: "Entity modeling, relationships, persistence, and data control.",
        },
        {
          title: "Frontend",
          description: "Interface, components, user experience, and data consumption.",
        },
        {
          title: "Deploy",
          description: "Versioning, publishing, environments, and continuous project evolution.",
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
