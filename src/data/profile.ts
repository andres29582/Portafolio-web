import type { LocalizedText } from "@/types/localization";

type ProfileLink = {
  label: string;
  href?: string;
};

type TimelineItem = {
  title: LocalizedText;
  organization: LocalizedText;
  period: LocalizedText;
  description: LocalizedText;
  highlights?: LocalizedText[];
};

export const profile = {
  name: "Andrés Eduardo Pignoloni Vasquez",
  role: {
    es: "Desarrollador Backend | TypeScript, NestJS, PostgreSQL y APIs REST",
    pt: "Desenvolvedor Backend | TypeScript, NestJS, PostgreSQL e APIs REST",
    en: "Backend Developer | TypeScript, NestJS, PostgreSQL, and REST APIs",
  },
  tagline: {
    es: "Profesional de tecnología formado en Análisis y Desarrollo de Sistemas, con experiencia corporativa en soporte técnico, operaciones y atención a usuarios.",
    pt: "Profissional de tecnologia formado em Análise e Desenvolvimento de Sistemas, com experiência corporativa em suporte técnico, operações e atendimento a usuários.",
    en: "Technology professional graduated in Systems Analysis and Development, with corporate experience in technical support, operations, and user service.",
  },
  summary: {
    es: "Desarrollo proyectos propios con foco en backend, bases de datos, autenticación y organización modular de sistemas. Busco una oportunidad en desarrollo backend o tecnología para contribuir con APIs, reglas de negocio, modelado de datos, análisis de procesos y resolución de problemas reales.",
    pt: "Desenvolvo projetos próprios com foco em backend, banco de dados, autenticação e organização modular de sistemas. Busco uma oportunidade em desenvolvimento backend ou tecnologia para contribuir com APIs, regras de negócio, modelagem de dados, análise de processos e resolução de problemas reais.",
    en: "I build personal projects focused on backend, databases, authentication, and modular system organization. I am looking for an opportunity in backend development or technology to contribute with APIs, business rules, data modeling, process analysis, and real problem solving.",
  },
  about: {
    es: "Soy formado en Análisis y Desarrollo de Sistemas y vengo construyendo proyectos propios con foco en backend, bases de datos, autenticación y organización de sistemas. Mi base combina desarrollo de software con experiencia real en soporte técnico, operaciones, atención a usuarios y seguimiento de procesos en ambiente corporativo.",
    pt: "Sou formado em Análise e Desenvolvimento de Sistemas e venho construindo projetos próprios com foco em backend, banco de dados, autenticação e organização de sistemas. Minha base combina desenvolvimento de software com experiência real em suporte técnico, operações, atendimento a usuários e acompanhamento de processos em ambiente corporativo.",
    en: "I am graduated in Systems Analysis and Development and have been building personal projects focused on backend, databases, authentication, and system organization. My foundation combines software development with real experience in technical support, operations, user service, and process follow-up in corporate environments.",
  },
  focus: [
    {
      es: "Construcción de backends modulares con NestJS, APIs REST, autenticación JWT, DTOs, validaciones y reglas de negocio organizadas.",
      pt: "Construção de backends modulares com NestJS, APIs REST, autenticação JWT, DTOs, validações e regras de negócio organizadas.",
      en: "Building modular backends with NestJS, REST APIs, JWT authentication, DTOs, validations, and organized business rules.",
    },
    {
      es: "Uso de PostgreSQL, SQL y modelado relacional para estructurar entidades, relaciones y persistencia de forma clara.",
      pt: "Uso de PostgreSQL, SQL e modelagem relacional para estruturar entidades, relacionamentos e persistência de forma clara.",
      en: "Using PostgreSQL, SQL, and relational modeling to structure entities, relationships, and persistence clearly.",
    },
    {
      es: "Experiencia en soporte operacional y atención técnica, con contacto con usuarios, análisis de solicitudes, seguimiento de incidentes y organización de procesos.",
      pt: "Experiência em suporte operacional e atendimento técnico, com contato com usuários, análise de solicitações, acompanhamento de incidentes e organização de processos.",
      en: "Experience in operational support and technical service, with user contact, request analysis, incident follow-up, and process organization.",
    },
  ] satisfies LocalizedText[],
  contact: {
    email: "andres-omega@hotmail.com",
    location: {
      es: "Curitiba, Paraná, Brasil",
      pt: "Curitiba, Paraná, Brasil",
      en: "Curitiba, Paraná, Brazil",
    },
    availability: {
      es: "Disponible para oportunidades presenciales, híbridas, remotas e internacionales",
      pt: "Disponível para oportunidades presenciais, híbridas, remotas e internacionais",
      en: "Available for on-site, hybrid, remote, and international opportunities",
    },
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/andres-pignoloni" },
      { label: "GitHub", href: "https://github.com/andres29582" },
    ] satisfies ProfileLink[],
  },
  opportunities: {
    title: {
      es: "Dónde puedo contribuir",
      pt: "Onde posso contribuir",
      en: "Where I can contribute",
    },
    description: {
      es: "Busco oportunidades donde pueda actuar principalmente con backend, tecnología y resolución de problemas.",
      pt: "Busco oportunidades em que eu possa atuar principalmente com backend, tecnologia e resolução de problemas.",
      en: "I am looking for opportunities where I can work mainly with backend, technology, and problem solving.",
    },
    roles: [
      {
        es: "Desarrollador Backend",
        pt: "Desenvolvedor Backend",
        en: "Backend Developer",
      },
      {
        es: "Desarrollador de Software Junior",
        pt: "Desenvolvedor de Software Júnior",
        en: "Junior Software Developer",
      },
      {
        es: "Analista de Sistemas Junior",
        pt: "Analista de Sistemas Júnior",
        en: "Junior Systems Analyst",
      },
      {
        es: "Soporte Técnico / Soporte TI",
        pt: "Suporte Técnico / Suporte TI",
        en: "Technical Support / IT Support",
      },
      {
        es: "Funciones técnicas que combinen desarrollo, operación y análisis de procesos",
        pt: "Funções técnicas que combinem desenvolvimento, operação e análise de processos",
        en: "Technical roles combining development, operations, and process analysis",
      },
    ] satisfies LocalizedText[],
  },
  education: [
    {
      title: {
        es: "Análisis y Desarrollo de Sistemas",
        pt: "Análise e Desenvolvimento de Sistemas",
        en: "Systems Analysis and Development",
      },
      organization: {
        es: "UniCesumar",
        pt: "UniCesumar",
        en: "UniCesumar",
      },
      period: {
        es: "2023 - 2026",
        pt: "2023 - 2026",
        en: "2023 - 2026",
      },
      description: {
        es: "Graduación concluida en julio de 2026, con foco en desarrollo de software, lógica, bases de datos, ingeniería de software, modelado de sistemas y construcción de soluciones tecnológicas.",
        pt: "Graduação concluída em julho de 2026, com foco em desenvolvimento de software, lógica, banco de dados, engenharia de software, modelagem de sistemas e construção de soluções tecnológicas.",
        en: "Degree completed in July 2026, focused on software development, logic, databases, software engineering, systems modeling, and building technology solutions.",
      },
    },
    {
      title: {
        es: "Curso de Python con certificado",
        pt: "Curso de Python com certificado",
        en: "Certified Python course",
      },
      organization: {
        es: "Udemy",
        pt: "Udemy",
        en: "Udemy",
      },
      period: {
        es: "Concluido en 2025",
        pt: "Concluído em 2025",
        en: "Completed in 2025",
      },
      description: {
        es: "Estudio complementario para fortalecer fundamentos de programación, lógica y práctica con Python.",
        pt: "Estudo complementar para fortalecer fundamentos de programação, lógica e prática com Python.",
        en: "Complementary study to strengthen programming fundamentals, logic, and hands-on practice with Python.",
      },
    },
  ] satisfies TimelineItem[],
  experience: [
    {
      title: {
        es: "Analista de Operaciones de TI / Soporte Técnico",
        pt: "Analista de Operações de TI / Suporte Técnico",
        en: "IT Operations Analyst / Technical Support",
      },
      organization: {
        es: "Michelin Connected Fleet / Sascar",
        pt: "Michelin Connected Fleet / Sascar",
        en: "Michelin Connected Fleet / Sascar",
      },
      period: {
        es: "2020 - 2026",
        pt: "2020 - 2026",
        en: "2020 - 2026",
      },
      description: {
        es: "Actuación en ambiente corporativo con soporte operacional y técnico, seguimiento de demandas, atención a usuarios, análisis de solicitudes y organización de procesos vinculados a la operación y al servicio.",
        pt: "Atuação em ambiente corporativo com suporte operacional e técnico, acompanhamento de demandas, atendimento a usuários, análise de solicitações e organização de processos ligados à operação e ao serviço.",
        en: "Work in a corporate environment with operational and technical support, demand follow-up, user service, request analysis, and organization of processes related to operations and service.",
      },
      highlights: [
        {
          es: "Soporte a usuarios y seguimiento de solicitudes operacionales y técnicas.",
          pt: "Suporte a usuários e acompanhamento de solicitações operacionais e técnicas.",
          en: "User support and follow-up of operational and technical requests.",
        },
        {
          es: "Análisis de información y validación de datos dentro de procesos de atención y operación.",
          pt: "Análise de informações e validação de dados dentro de processos de atendimento e operação.",
          en: "Information analysis and data validation within service and operations processes.",
        },
        {
          es: "Contacto con clientes y áreas internas para entender demandas, tratativas y seguimiento hasta la resolución.",
          pt: "Contato com clientes e áreas internas para entendimento de demandas, tratativas e acompanhamento até a resolução.",
          en: "Contact with clients and internal teams to understand requests, handle cases, and follow up through resolution.",
        },
        {
          es: "Apoyo a la continuidad del servicio mediante organización, actualización y seguimiento de procesos.",
          pt: "Apoio à continuidade do serviço por meio de organização, atualização e acompanhamento de processos.",
          en: "Support for service continuity through organization, updates, and process follow-up.",
        },
        {
          es: "Experiencia práctica con rutina corporativa, comunicación, priorización, resolución de problemas y seguimiento de incidentes.",
          pt: "Experiência prática com rotina corporativa, comunicação, priorização, resolução de problemas e acompanhamento de incidentes.",
          en: "Practical experience with corporate routines, communication, prioritization, problem solving, and incident follow-up.",
        },
      ],
    },
  ] satisfies TimelineItem[],
};
