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
    es: "Estudiante de Análisis y Desarrollo de Sistemas con foco en desarrollo, sistemas y bases de datos",
    pt: "Estudante de Análise e Desenvolvimento de Sistemas com foco em desenvolvimento, sistemas e banco de dados",
    en: "Systems Analysis and Development student focused on development, systems, and databases",
  },
  tagline: {
    es: "Estoy construyendo mi transición hacia el área de tecnología por medio de proyectos, estudio continuo y visión de sistema.",
    pt: "Estou construindo minha transição para a área de tecnologia por meio de projetos, estudo contínuo e visão de sistema.",
    en: "I am building my transition into technology through projects, continuous study, and a systems mindset.",
  },
  summary: {
    es: "Busco oportunidades en desarrollo y TI donde pueda aplicar lo que vengo construyendo en proyectos, ampliar mi experiencia práctica y evolucionar profesionalmente con base técnica y visión estructurada de sistemas.",
    pt: "Busco oportunidades em desenvolvimento e TI nas quais eu possa aplicar o que venho construindo em projetos, ampliar minha experiência prática e evoluir profissionalmente com base técnica e visão estruturada de sistemas.",
    en: "I am looking for development and IT opportunities where I can apply what I have been building in projects, expand my practical experience, and grow professionally with technical foundations and structured systems thinking.",
  },
  about: {
    es: "Soy estudiante de Análisis y Desarrollo de Sistemas en UniCesumar y estoy en transición hacia el área de tecnología. Vengo desarrollando proyectos para transformar aprendizaje en práctica, con interés en backend, bases de datos, arquitectura de sistemas y construcción de soluciones organizadas, útiles y evolutivas.",
    pt: "Sou estudante de Análise e Desenvolvimento de Sistemas na UniCesumar e estou em transição para a área de tecnologia. Venho desenvolvendo projetos para transformar aprendizado em prática, com interesse em backend, banco de dados, arquitetura de sistemas e construção de soluções organizadas, úteis e evolutivas.",
    en: "I study Systems Analysis and Development at UniCesumar and I am transitioning into technology. I have been developing projects to turn learning into practice, with interest in backend, databases, system architecture, and building organized, useful, and evolutive solutions.",
  },
  focus: [
    {
      es: "Backend, bases de datos y reglas de negocio como base para sistemas organizados.",
      pt: "Backend, banco de dados e regras de negócio como base para sistemas organizados.",
      en: "Backend, databases, and business rules as the foundation for organized systems.",
    },
    {
      es: "Proyectos prácticos para conectar estudio, arquitectura y resolución de problemas.",
      pt: "Projetos práticos para conectar estudo, arquitetura e resolução de problemas.",
      en: "Practical projects to connect study, architecture, and problem solving.",
    },
    {
      es: "Visión estructurada de sistemas, desde el modelado de datos hasta la interfaz.",
      pt: "Visão estruturada de sistemas, da modelagem de dados até a interface.",
      en: "Structured systems thinking, from data modeling to the interface.",
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
      { label: "LinkedIn", href: undefined },
      { label: "GitHub", href: undefined },
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
        es: "Experiencia profesional en Michelin / Sascar",
        pt: "Experiência profissional em Michelin / Sascar",
        en: "Professional experience at Michelin / Sascar",
      },
      organization: {
        es: "Soporte operacional, contexto corporativo y atención",
        pt: "Suporte operacional, contexto corporativo e atendimento",
        en: "Operational support, corporate environment, and service",
      },
      period: {
        es: "Experiencia profesional",
        pt: "Experiência profissional",
        en: "Professional experience",
      },
      description: {
        es: "Vivencia en soporte operacional, contexto corporativo y contacto con procesos, atención y problemas reales dentro de un entorno de tecnología y servicios.",
        pt: "Vivência em suporte operacional, contexto corporativo e contato com processos, atendimento e problemas reais dentro de um ambiente de tecnologia e serviços.",
        en: "Experience in operational support, corporate environment, and contact with processes, service, and real problems within a technology and services context.",
      },
      highlights: [
        {
          es: "Organización y seguimiento de información dentro de procesos operativos.",
          pt: "Organização e acompanhamento de informações dentro de processos operacionais.",
          en: "Organizing and tracking information within operational processes.",
        },
        {
          es: "Comunicación con usuarios, áreas internas y rutinas de atención.",
          pt: "Comunicação com usuários, áreas internas e rotinas de atendimento.",
          en: "Communication with users, internal areas, and service routines.",
        },
        {
          es: "Comprensión de problemas reales antes de estructurar una solución.",
          pt: "Compreensão de problemas reais antes de estruturar uma solução.",
          en: "Understanding real problems before structuring a solution.",
        },
      ],
    },
  ] satisfies TimelineItem[],
};
