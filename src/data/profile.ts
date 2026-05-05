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
    es: "Desarrollador Backend Junior / Soporte TI Junior | TypeScript, NestJS, PostgreSQL y APIs REST",
    pt: "Desenvolvedor Backend Junior / Suporte TI Junior | TypeScript, NestJS, PostgreSQL e APIs REST",
    en: "Junior Backend Developer / Junior IT Support | TypeScript, NestJS, PostgreSQL, and REST APIs",
  },
  tagline: {
    es: "Construyo proyectos prácticos con backend, bases de datos, autenticación y organización modular para estar listo para una oportunidad junior.",
    pt: "Construo projetos práticos com backend, banco de dados, autenticação e organização modular para estar pronto para uma oportunidade junior.",
    en: "I build practical projects with backend, databases, authentication, and modular organization to be ready for a junior opportunity.",
  },
  summary: {
    es: "Estudiante de Análisis y Desarrollo de Sistemas con proyectos en APIs REST, JWT, PostgreSQL, React Native y Next.js. Busco una oportunidad junior en desarrollo o TI para aplicar lógica, modelado de datos, organización de procesos y resolución de problemas reales.",
    pt: "Estudante de Análise e Desenvolvimento de Sistemas com projetos em APIs REST, JWT, PostgreSQL, React Native e Next.js. Busco uma oportunidade junior em desenvolvimento ou TI para aplicar lógica, modelagem de dados, organização de processos e resolução de problemas reais.",
    en: "Systems Analysis and Development student with projects in REST APIs, JWT, PostgreSQL, React Native, and Next.js. I am looking for a junior development or IT opportunity to apply logic, data modeling, process organization, and real problem solving.",
  },
  about: {
    es: "Soy estudiante de Análisis y Desarrollo de Sistemas en UniCesumar y estoy orientando mi carrera hacia desarrollo backend y soporte TI. Ya construyo proyectos con NestJS, PostgreSQL, JWT, TypeScript, React Native y Next.js, conectando estudio, lógica, datos y experiencia corporativa en soporte operacional.",
    pt: "Sou estudante de Análise e Desenvolvimento de Sistemas na UniCesumar e estou direcionando minha carreira para desenvolvimento backend e suporte TI. Já construo projetos com NestJS, PostgreSQL, JWT, TypeScript, React Native e Next.js, conectando estudo, lógica, dados e experiência corporativa em suporte operacional.",
    en: "I study Systems Analysis and Development at UniCesumar and I am directing my career toward backend development and IT support. I already build projects with NestJS, PostgreSQL, JWT, TypeScript, React Native, and Next.js, connecting study, logic, data, and corporate operational support experience.",
  },
  focus: [
    {
      es: "Backend con NestJS, APIs REST, autenticación JWT y reglas de negocio organizadas.",
      pt: "Backend com NestJS, APIs REST, autenticação JWT e regras de negócio organizadas.",
      en: "Backend with NestJS, REST APIs, JWT authentication, and organized business rules.",
    },
    {
      es: "PostgreSQL, SQL y modelado de datos para estructurar información de forma clara.",
      pt: "PostgreSQL, SQL e modelagem de dados para estruturar informações de forma clara.",
      en: "PostgreSQL, SQL, and data modeling to structure information clearly.",
    },
    {
      es: "Experiencia en soporte operacional, atención a usuarios y seguimiento de procesos reales.",
      pt: "Experiência em suporte operacional, atendimento a usuários e acompanhamento de processos reais.",
      en: "Experience in operational support, user service, and tracking real processes.",
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
      { label: "LinkedIn", href: "https://www.linkedin.com/in/andres-pignoloni-857462312" },
      { label: "GitHub", href: "https://github.com/andres29582" },
    ] satisfies ProfileLink[],
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
        es: "2023 - actual",
        pt: "2023 - atual",
        en: "2023 - present",
      },
      description: {
        es: "Formación principal enfocada en desarrollo, sistemas, lógica, bases de datos, ingeniería de software y construcción de soluciones tecnológicas.",
        pt: "Formação principal focada em desenvolvimento, sistemas, lógica, banco de dados, engenharia de software e construção de soluções tecnológicas.",
        en: "Main education focused on development, systems, logic, databases, software engineering, and building technology solutions.",
      },
    },
    {
      title: {
        es: "Curso de Python con certificado",
        pt: "Curso de Python com certificado",
        en: "Certified Python course",
      },
      organization: {
        es: "Formación complementaria",
        pt: "Formação complementar",
        en: "Complementary education",
      },
      period: {
        es: "Formación complementaria",
        pt: "Formação complementar",
        en: "Complementary learning",
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
        es: "Soporte de Operaciones en Telemarketing",
        pt: "Suporte de Operações em Telemarketing",
        en: "Telemarketing Operations Support",
      },
      organization: {
        es: "Michelin / Sascar",
        pt: "Michelin / Sascar",
        en: "Michelin / Sascar",
      },
      period: {
        es: "2020 - 2025",
        pt: "2020 - 2025",
        en: "2020 - 2025",
      },
      description: {
        es: "Experiencia en soporte, organización de procesos y seguimiento operacional en ambiente corporativo, con contacto directo con usuarios, rutinas de atención, información sensible al proceso y problemas reales de servicio.",
        pt: "Experiência em suporte, organização de processos e acompanhamento operacional em ambiente corporativo, com contato direto com usuários, rotinas de atendimento, informações sensíveis ao processo e problemas reais de serviço.",
        en: "Experience in support, process organization, and operational follow-up in a corporate environment, with direct contact with users, service routines, process-sensitive information, and real service problems.",
      },
      highlights: [
        {
          es: "Organización, actualización y seguimiento de información dentro de procesos operativos.",
          pt: "Organização, atualização e acompanhamento de informações dentro de processos operacionais.",
          en: "Organized, updated, and tracked information within operational processes.",
        },
        {
          es: "Comunicación con usuarios y áreas internas para entender solicitudes y acompañar soluciones.",
          pt: "Comunicação com usuários e áreas internas para entender solicitações e acompanhar soluções.",
          en: "Communicated with users and internal areas to understand requests and follow up on solutions.",
        },
        {
          es: "Base práctica en atención, procesos y resolución de problemas que hoy conecto con desarrollo de sistemas.",
          pt: "Base prática em atendimento, processos e resolução de problemas que hoje conecto com desenvolvimento de sistemas.",
          en: "Practical foundation in service, processes, and problem solving that I now connect with systems development.",
        },
      ],
    },
  ] satisfies TimelineItem[],
};
