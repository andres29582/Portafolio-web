import type { PortfolioContent } from "../types";

const content: PortfolioContent = {
  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Projetos", href: "#projetos" },
    { label: "Arquitetura", href: "#arquitetura" },
    { label: "Formação", href: "#formacao" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Contato", href: "#contato" },
  ],

  hero: {
    greeting: "Olá, eu sou",
    name: "Andres Oliveira",
    role: "Desenvolvedor Full Stack em formação",
    tagline:
      "Estudante de Análise e Desenvolvimento de Sistemas apaixonado por construir soluções escaláveis, código limpo e arquiteturas bem pensadas.",
    ctaProjects: "Ver Projetos",
    ctaContact: "Entrar em Contato",
  },

  about: {
    sectionTitle: "Sobre Mim",
    paragraphs: [
      "Sou estudante de Análise e Desenvolvimento de Sistemas, movido pela curiosidade e pelo desejo de entender como as tecnologias funcionam por baixo dos panos. Acredito que bom código não é apenas aquele que funciona, mas aquele que é legível, testável e sustentável ao longo do tempo.",
      "Além do desenvolvimento, tenho interesse em arquitetura de sistemas, boas práticas de engenharia de software e como decisões técnicas impactam o produto final. Estou sempre buscando aprender novas ferramentas e padrões que me tornem um profissional mais completo.",
      "Quando não estou programando, gosto de estudar arquiteturas de sistemas reais, ler sobre engenharia de software e contribuir com a comunidade de desenvolvedores.",
    ],
    highlightLabel: "O que me define:",
    highlights: [
      "Pensamento analítico e atenção aos detalhes",
      "Comprometimento com qualidade e boas práticas",
      "Aprendizado contínuo e adaptação rápida",
      "Comunicação clara e trabalho em equipe",
    ],
  },

  skills: {
    sectionTitle: "Habilidades Técnicas",
    categories: {
      Frontend: [
        { name: "React", level: 4, category: "Frontend" },
        { name: "Next.js", level: 4, category: "Frontend" },
        { name: "TypeScript", level: 4, category: "Frontend" },
        { name: "JavaScript", level: 5, category: "Frontend" },
        { name: "HTML/CSS", level: 5, category: "Frontend" },
        { name: "Tailwind CSS", level: 4, category: "Frontend" },
      ],
      Backend: [
        { name: "Node.js", level: 4, category: "Backend" },
        { name: "Python", level: 3, category: "Backend" },
        { name: "REST APIs", level: 4, category: "Backend" },
        { name: "Express.js", level: 4, category: "Backend" },
      ],
      Banco_de_Dados: [
        { name: "PostgreSQL", level: 3, category: "Banco de Dados" },
        { name: "MySQL", level: 3, category: "Banco de Dados" },
        { name: "MongoDB", level: 3, category: "Banco de Dados" },
        { name: "SQL", level: 4, category: "Banco de Dados" },
      ],
      DevOps_Ferramentas: [
        { name: "Git", level: 4, category: "DevOps & Ferramentas" },
        { name: "Docker", level: 3, category: "DevOps & Ferramentas" },
        { name: "GitHub Actions", level: 3, category: "DevOps & Ferramentas" },
        { name: "Linux", level: 3, category: "DevOps & Ferramentas" },
      ],
    },
  },

  projects: {
    sectionTitle: "Projetos",
    statusLabels: {
      completed: "Concluído",
      inProgress: "Em Desenvolvimento",
      concept: "Conceito",
    },
    projects: [
      {
        title: "SysTask — Gerenciador de Tarefas Corporativo",
        description:
          "Sistema de gerenciamento de tarefas e projetos para equipes, com controle de permissões, dashboards em tempo real e integração com Slack.",
        longDescription:
          "Plataforma completa de gestão de projetos desenvolvida como projeto final de módulo. Permite criação de times, atribuição de tarefas com prioridade e prazo, acompanhamento de progresso com gráficos Kanban e burndown, e notificações via webhook.",
        tech: [
          "Next.js",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Prisma",
          "NextAuth",
          "TailwindCSS",
          "Docker",
        ],
        highlights: [
          "Autenticação com JWT e controle de papéis (RBAC)",
          "Dashboard com métricas em tempo real via WebSockets",
          "Testes unitários com Jest e cobertura >80%",
          "Deploy automatizado com GitHub Actions",
        ],
        status: "completed",
        githubUrl: "https://github.com/andres29582/systask",
      },
      {
        title: "DevBlog — Plataforma de Conteúdo Técnico",
        description:
          "Blog técnico com editor Markdown, sistema de tags, busca full-text e painel de administração para publicação de artigos.",
        longDescription:
          "Plataforma de conteúdo voltada para desenvolvedores, com suporte a escrita em Markdown, syntax highlighting, sistema de comentários, RSS feed e otimização de SEO com geração de meta tags dinâmicas.",
        tech: [
          "Next.js",
          "TypeScript",
          "MongoDB",
          "Mongoose",
          "TailwindCSS",
          "MDX",
          "Vercel",
        ],
        highlights: [
          "SSG e SSR híbrido para máxima performance (Lighthouse 98+)",
          "Editor Markdown com preview em tempo real",
          "Sistema de busca full-text com MongoDB Atlas Search",
          "SEO otimizado com meta tags dinâmicas e sitemap",
        ],
        status: "completed",
        githubUrl: "https://github.com/andres29582/devblog",
        liveUrl: "https://devblog-andres.vercel.app",
      },
      {
        title: "InventorAPI — API de Controle de Estoque",
        description:
          "API RESTful robusta para controle de estoque empresarial, com autenticação, auditoria de operações e documentação Swagger interativa.",
        longDescription:
          "API desenvolvida seguindo princípios REST e clean architecture, com camadas bem definidas de controller, service e repository. Inclui sistema de auditoria que registra todas as operações de entrada e saída, relatórios em PDF e exportação para CSV.",
        tech: [
          "Node.js",
          "Express.js",
          "TypeScript",
          "PostgreSQL",
          "Prisma",
          "JWT",
          "Swagger",
          "Docker",
        ],
        highlights: [
          "Arquitetura em camadas com injeção de dependências",
          "Documentação interativa com Swagger/OpenAPI 3.0",
          "Rate limiting, validação com Zod e tratamento de erros centralizado",
          "Containerização com Docker Compose para ambiente local",
        ],
        status: "inProgress",
        githubUrl: "https://github.com/andres29582/inventorapi",
      },
    ],
  },

  architecture: {
    sectionTitle: "Pensamento Técnico",
    subtitle: "Como eu penso sobre sistemas",
    description:
      "Acredito que boas decisões de arquitetura são aquelas que equilibram simplicidade, manutenibilidade e capacidade de evolução. Não existe bala de prata — cada contexto exige uma análise cuidadosa dos trade-offs.",
    patterns: [
      {
        title: "Separação de Responsabilidades",
        description:
          "Cada módulo deve ter uma razão clara para existir. Separo lógica de negócio, acesso a dados e apresentação em camadas distintas, facilitando testes e evolução independente.",
        icon: "🏛️",
      },
      {
        title: "API-First Design",
        description:
          "Projeto APIs pensando primeiro no contrato e na experiência do consumidor. Documentação clara, versionamento e tratamento de erros consistente são não-negociáveis.",
        icon: "🔌",
      },
      {
        title: "Qualidade e Testabilidade",
        description:
          "Código testável é código bem estruturado. Escrevo testes unitários e de integração como parte do processo de desenvolvimento, não como uma etapa posterior.",
        icon: "🧪",
      },
      {
        title: "Observabilidade",
        description:
          "Sistemas em produção precisam ser compreensíveis. Logs estruturados, métricas e rastreamento são essenciais para entender o comportamento real da aplicação.",
        icon: "📊",
      },
      {
        title: "Segurança por Design",
        description:
          "Segurança não é uma feature adicional. Autenticação, autorização, validação de inputs e proteção contra vulnerabilidades comuns fazem parte do design desde o início.",
        icon: "🔒",
      },
      {
        title: "Performance Consciente",
        description:
          "Otimizo onde importa, com dados. Cache estratégico, queries eficientes e lazy loading são aplicados após identificar gargalos reais, não por suposição.",
        icon: "⚡",
      },
    ],
    philosophyTitle: "Minha Filosofia de Desenvolvimento",
    philosophy: [
      "Prefiro soluções simples que funcionam a soluções complexas que impressionam",
      "Código é lido muito mais do que é escrito — clareza é uma feature",
      "Entender o problema profundamente vale mais do que escolher a tecnologia mais nova",
      "Feedback rápido (testes, CI/CD) permite evoluir com confiança",
    ],
  },

  education: {
    sectionTitle: "Formação",
    items: [
      {
        institution: "Universidade Anhanguera",
        degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        period: "2022 — 2024",
        description:
          "Curso tecnólogo focado no desenvolvimento de sistemas web e mobile, banco de dados, estruturas de dados, engenharia de software e gerenciamento de projetos de TI.",
        highlights: [
          "Desenvolvimento de sistemas com Java, Python e JavaScript",
          "Modelagem de banco de dados relacional e não-relacional",
          "Metodologias ágeis: Scrum e Kanban",
          "Redes de computadores e segurança da informação",
          "Projeto integrador: sistema de gestão para pequenas empresas",
        ],
        current: true,
      },
      {
        institution: "Alura & Rocketseat",
        degree: "Formações em Desenvolvimento Web Full Stack",
        period: "2021 — presente",
        description:
          "Trilhas de aprendizado complementares com foco em tecnologias modernas do ecossistema JavaScript e boas práticas de desenvolvimento.",
        highlights: [
          "React, Next.js e ecossistema frontend moderno",
          "Node.js, APIs REST e microsserviços",
          "DevOps básico com Docker e CI/CD",
          "Clean Code e Design Patterns",
        ],
        current: false,
      },
    ],
  },

  experience: {
    sectionTitle: "Experiência",
    items: [
      {
        company: "TechSolutions LTDA",
        role: "Desenvolvedor Full Stack Júnior (Estágio)",
        period: "Mar 2023 — Presente",
        description:
          "Desenvolvimento e manutenção de sistemas web internos para automação de processos administrativos e financeiros da empresa, atuando em todo o ciclo de desenvolvimento.",
        responsibilities: [
          "Desenvolvimento de novas funcionalidades no sistema ERP interno usando React e Node.js",
          "Refatoração de módulos legados, reduzindo a dívida técnica e melhorando performance em 40%",
          "Implementação de testes unitários e de integração com Jest, elevando cobertura de 20% para 75%",
          "Participação em code reviews e contribuição ativa nas cerimônias Scrum da equipe",
          "Criação de documentação técnica e de processos para onboarding de novos desenvolvedores",
        ],
        tech: [
          "React",
          "Node.js",
          "TypeScript",
          "PostgreSQL",
          "Docker",
          "Jest",
          "Git",
        ],
      },
      {
        company: "Freelance",
        role: "Desenvolvedor Web Freelancer",
        period: "Jan 2022 — Fev 2023",
        description:
          "Desenvolvimento de sites e sistemas web para pequenas e médias empresas, desde o levantamento de requisitos até o deploy e treinamento de usuários.",
        responsibilities: [
          "Desenvolvimento de 6 sites institucionais e landing pages para clientes de diferentes segmentos",
          "Criação de um sistema de agendamento online para clínica odontológica",
          "Integração de sistemas de pagamento (PagSeguro e Stripe)",
          "Suporte técnico pós-entrega e treinamento de usuários finais",
        ],
        tech: [
          "Next.js",
          "React",
          "JavaScript",
          "MySQL",
          "Vercel",
          "TailwindCSS",
        ],
      },
    ],
  },

  contact: {
    sectionTitle: "Contato",
    subtitle: "Vamos conversar?",
    description:
      "Estou aberto a oportunidades de estágio, posições júnior e projetos freelance. Se você tem um projeto interessante ou quer trocar uma ideia sobre tecnologia, fique à vontade para entrar em contato.",
    emailLabel: "Email",
    email: "andres.oliveira.dev@gmail.com",
    githubLabel: "GitHub",
    github: "github.com/andres29582",
    linkedinLabel: "LinkedIn",
    linkedin: "linkedin.com/in/andres-oliveira-dev",
    availability:
      "✅ Disponível para novas oportunidades",
  },

  footer: {
    rights: "Todos os direitos reservados",
    builtWith: "Construído com Next.js, TypeScript e Tailwind CSS",
  },
};

export default content;
