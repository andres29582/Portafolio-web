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
      eyebrow: "Portafolio técnico profesional",
      availability: "Disponible para oportunidades presenciales, híbridas, remotas e internacionales",
      systemTitle: "Sistema de presentación",
      systemSubtitle: "Perfil organizado como arquitectura de producto.",
      systemModules: ["Perfil", "Habilidades", "Proyectos", "Arquitectura", "Contacto"],
    },
    sections: {
      about: {
        eyebrow: "Quién soy",
        title: "Transición hacia tecnología con base técnica",
        description:
          "Mi perfil conecta formación en ADS, proyectos prácticos y una visión estructurada para construir sistemas útiles.",
      },
      skills: {
        eyebrow: "Stack y fundamentos",
        title: "Habilidades técnicas en aprendizaje",
        description:
          "Organizo mis conocimientos por bloques para mostrar una evolución honesta: fundamentos, desarrollo, estructura, datos y herramientas.",
      },
      projects: {
        eyebrow: "Evidencia práctica",
        title: "Proyectos con objetivo, tecnología y aprendizaje",
        description:
          "Cada proyecto muestra el problema trabajado, las decisiones técnicas y lo que aprendí durante la implementación.",
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
        title: "Vivencia corporativa y soporte operacional",
        description:
          "La experiencia profesional aporta criterio para entender procesos, atención, organización de información y problemas reales.",
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
      learned: "Aprendizaje",
      status: "Estado",
      location: "Localización",
      availability: "Disponibilidad",
      email: "Email",
      pendingLink: "Link pendiente",
    },
    skillLevels: {
      learning: "En aprendizaje",
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
      eyebrow: "Portfólio técnico profissional",
      availability: "Disponível para oportunidades presenciais, híbridas, remotas e internacionais",
      systemTitle: "Sistema de apresentação",
      systemSubtitle: "Perfil organizado como arquitetura de produto.",
      systemModules: ["Perfil", "Habilidades", "Projetos", "Arquitetura", "Contato"],
    },
    sections: {
      about: {
        eyebrow: "Quem sou",
        title: "Transição para tecnologia com base técnica",
        description:
          "Meu perfil conecta formação em ADS, projetos práticos e uma visão estruturada para construir sistemas úteis.",
      },
      skills: {
        eyebrow: "Stack e fundamentos",
        title: "Habilidades técnicas em aprendizado",
        description:
          "Organizo meus conhecimentos por blocos para mostrar uma evolução honesta: fundamentos, desenvolvimento, estrutura, dados e ferramentas.",
      },
      projects: {
        eyebrow: "Evidência prática",
        title: "Projetos com objetivo, tecnologia e aprendizado",
        description:
          "Cada projeto mostra o problema trabalhado, as decisões técnicas e o aprendizado construído durante a implementação.",
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
        title: "Vivência corporativa e suporte operacional",
        description:
          "A experiência profissional traz critério para entender processos, atendimento, organização de informações e problemas reais.",
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
      learned: "Aprendizados",
      status: "Estado",
      location: "Localização",
      availability: "Disponibilidade",
      email: "Email",
      pendingLink: "Link pendente",
    },
    skillLevels: {
      learning: "Em aprendizado",
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
      eyebrow: "Professional technical portfolio",
      availability: "Available for on-site, hybrid, remote, and international opportunities",
      systemTitle: "Presentation system",
      systemSubtitle: "Profile organized as product architecture.",
      systemModules: ["Profile", "Skills", "Projects", "Architecture", "Contact"],
    },
    sections: {
      about: {
        eyebrow: "Who I am",
        title: "Transitioning into technology with technical foundations",
        description:
          "My profile connects ADS education, practical projects, and a structured mindset for building useful systems.",
      },
      skills: {
        eyebrow: "Stack and fundamentals",
        title: "Technical skills in learning",
        description:
          "I organize my knowledge by blocks to show honest progress: fundamentals, development, structure, data, and tools.",
      },
      projects: {
        eyebrow: "Practical evidence",
        title: "Projects with objective, technology, and learning",
        description:
          "Each project shows the problem worked on, technical decisions, and learning built during implementation.",
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
        title: "Corporate background and operational support",
        description:
          "Professional experience builds judgment for understanding processes, service, information organization, and real problems.",
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
      learned: "Learning",
      status: "Status",
      location: "Location",
      availability: "Availability",
      email: "Email",
      pendingLink: "Pending link",
    },
    skillLevels: {
      learning: "Learning",
      practicing: "Practicing",
      applied: "Applied",
    },
    footer: "Modular portfolio built with Next.js, TypeScript, and Tailwind CSS.",
  },
};

export const cvDownloadLabels: LocalizedText = {
  es: "CV disponible próximamente",
  pt: "CV disponível em breve",
  en: "CV available soon",
};
