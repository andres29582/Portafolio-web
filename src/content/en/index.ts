import type { PortfolioContent } from "../types";

const content: PortfolioContent = {
  nav: [
    { label: "About", href: "#sobre" },
    { label: "Skills", href: "#habilidades" },
    { label: "Projects", href: "#projetos" },
    { label: "Architecture", href: "#arquitetura" },
    { label: "Education", href: "#formacao" },
    { label: "Experience", href: "#experiencia" },
    { label: "Contact", href: "#contato" },
  ],

  hero: {
    greeting: "Hi, I'm",
    name: "Andres Oliveira",
    role: "Full Stack Developer in Training",
    tagline:
      "Systems Analysis and Development student passionate about building scalable solutions, clean code, and well-thought-out architectures.",
    ctaProjects: "View Projects",
    ctaContact: "Get in Touch",
  },

  about: {
    sectionTitle: "About Me",
    paragraphs: [
      "I'm a Systems Analysis and Development student, driven by curiosity and the desire to understand how technologies work under the hood. I believe good code isn't just code that works, but code that is readable, testable, and sustainable over time.",
      "Beyond development, I'm interested in system architecture, software engineering best practices, and how technical decisions impact the final product. I'm always looking to learn new tools and patterns that make me a more well-rounded professional.",
      "When I'm not coding, I enjoy studying real-world system architectures, reading about software engineering, and contributing to the developer community.",
    ],
    highlightLabel: "What defines me:",
    highlights: [
      "Analytical thinking and attention to detail",
      "Commitment to quality and best practices",
      "Continuous learning and quick adaptation",
      "Clear communication and teamwork",
    ],
  },

  skills: {
    sectionTitle: "Technical Skills",
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
      Database: [
        { name: "PostgreSQL", level: 3, category: "Database" },
        { name: "MySQL", level: 3, category: "Database" },
        { name: "MongoDB", level: 3, category: "Database" },
        { name: "SQL", level: 4, category: "Database" },
      ],
      DevOps_Tools: [
        { name: "Git", level: 4, category: "DevOps & Tools" },
        { name: "Docker", level: 3, category: "DevOps & Tools" },
        { name: "GitHub Actions", level: 3, category: "DevOps & Tools" },
        { name: "Linux", level: 3, category: "DevOps & Tools" },
      ],
    },
  },

  projects: {
    sectionTitle: "Projects",
    statusLabels: {
      completed: "Completed",
      inProgress: "In Progress",
      concept: "Concept",
    },
    projects: [
      {
        title: "SysTask — Corporate Task Manager",
        description:
          "Task and project management system for teams, featuring permission controls, real-time dashboards, and Slack integration.",
        longDescription:
          "Complete project management platform developed as a module final project. Allows team creation, task assignment with priority and deadlines, progress tracking with Kanban and burndown charts, and webhook notifications.",
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
          "JWT authentication with role-based access control (RBAC)",
          "Real-time metrics dashboard via WebSockets",
          "Unit tests with Jest and >80% coverage",
          "Automated deployment with GitHub Actions",
        ],
        status: "completed",
        githubUrl: "https://github.com/andres29582/systask",
      },
      {
        title: "DevBlog — Technical Content Platform",
        description:
          "Technical blog with Markdown editor, tag system, full-text search, and admin panel for article publishing.",
        longDescription:
          "Content platform aimed at developers, with Markdown writing support, syntax highlighting, comment system, RSS feed, and SEO optimization with dynamic meta tag generation.",
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
          "Hybrid SSG and SSR for maximum performance (Lighthouse 98+)",
          "Markdown editor with real-time preview",
          "Full-text search system with MongoDB Atlas Search",
          "SEO-optimized with dynamic meta tags and sitemap",
        ],
        status: "completed",
        githubUrl: "https://github.com/andres29582/devblog",
        liveUrl: "https://devblog-andres.vercel.app",
      },
      {
        title: "InventorAPI — Inventory Control API",
        description:
          "Robust RESTful API for enterprise inventory control, with authentication, operation auditing, and interactive Swagger documentation.",
        longDescription:
          "API developed following REST principles and clean architecture, with well-defined controller, service, and repository layers. Includes an audit system that logs all entry and exit operations, PDF reports, and CSV export.",
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
          "Layered architecture with dependency injection",
          "Interactive documentation with Swagger/OpenAPI 3.0",
          "Rate limiting, Zod validation, and centralized error handling",
          "Containerization with Docker Compose for local environment",
        ],
        status: "inProgress",
        githubUrl: "https://github.com/andres29582/inventorapi",
      },
    ],
  },

  architecture: {
    sectionTitle: "Technical Thinking",
    subtitle: "How I think about systems",
    description:
      "I believe good architectural decisions are those that balance simplicity, maintainability, and the ability to evolve. There's no silver bullet — each context requires careful analysis of trade-offs.",
    patterns: [
      {
        title: "Separation of Concerns",
        description:
          "Each module should have a clear reason to exist. I separate business logic, data access, and presentation into distinct layers, making testing and independent evolution easier.",
        icon: "🏛️",
      },
      {
        title: "API-First Design",
        description:
          "I design APIs thinking first about the contract and consumer experience. Clear documentation, versioning, and consistent error handling are non-negotiable.",
        icon: "🔌",
      },
      {
        title: "Quality and Testability",
        description:
          "Testable code is well-structured code. I write unit and integration tests as part of the development process, not as an afterthought.",
        icon: "🧪",
      },
      {
        title: "Observability",
        description:
          "Systems in production need to be understandable. Structured logs, metrics, and tracing are essential for understanding the real behavior of the application.",
        icon: "📊",
      },
      {
        title: "Security by Design",
        description:
          "Security isn't an additional feature. Authentication, authorization, input validation, and protection against common vulnerabilities are part of the design from the start.",
        icon: "🔒",
      },
      {
        title: "Conscious Performance",
        description:
          "I optimize where it matters, with data. Strategic caching, efficient queries, and lazy loading are applied after identifying real bottlenecks, not by assumption.",
        icon: "⚡",
      },
    ],
    philosophyTitle: "My Development Philosophy",
    philosophy: [
      "I prefer simple solutions that work over complex solutions that impress",
      "Code is read much more than it is written — clarity is a feature",
      "Understanding the problem deeply is worth more than choosing the newest technology",
      "Fast feedback (tests, CI/CD) allows you to evolve with confidence",
    ],
  },

  education: {
    sectionTitle: "Education",
    items: [
      {
        institution: "Universidade Anhanguera",
        degree: "Associate Degree in Systems Analysis and Development",
        period: "2022 — 2024",
        description:
          "Technology degree focused on web and mobile systems development, databases, data structures, software engineering, and IT project management.",
        highlights: [
          "Systems development with Java, Python, and JavaScript",
          "Relational and non-relational database modeling",
          "Agile methodologies: Scrum and Kanban",
          "Computer networks and information security",
          "Integrative project: management system for small businesses",
        ],
        current: true,
      },
      {
        institution: "Alura & Rocketseat",
        degree: "Full Stack Web Development Programs",
        period: "2021 — present",
        description:
          "Complementary learning tracks focused on modern JavaScript ecosystem technologies and development best practices.",
        highlights: [
          "React, Next.js, and modern frontend ecosystem",
          "Node.js, REST APIs, and microservices",
          "Basic DevOps with Docker and CI/CD",
          "Clean Code and Design Patterns",
        ],
        current: false,
      },
    ],
  },

  experience: {
    sectionTitle: "Experience",
    items: [
      {
        company: "TechSolutions LTDA",
        role: "Junior Full Stack Developer (Internship)",
        period: "Mar 2023 — Present",
        description:
          "Development and maintenance of internal web systems for automating administrative and financial processes, working throughout the full development cycle.",
        responsibilities: [
          "Development of new features in the internal ERP system using React and Node.js",
          "Refactoring legacy modules, reducing technical debt and improving performance by 40%",
          "Implementation of unit and integration tests with Jest, raising coverage from 20% to 75%",
          "Participation in code reviews and active contribution to team Scrum ceremonies",
          "Creation of technical and process documentation for onboarding new developers",
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
        role: "Freelance Web Developer",
        period: "Jan 2022 — Feb 2023",
        description:
          "Development of websites and web systems for small and medium-sized businesses, from requirements gathering to deployment and user training.",
        responsibilities: [
          "Development of 6 institutional websites and landing pages for clients in different segments",
          "Creation of an online scheduling system for a dental clinic",
          "Integration of payment systems (PagSeguro and Stripe)",
          "Post-delivery technical support and end-user training",
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
    sectionTitle: "Contact",
    subtitle: "Let's talk?",
    description:
      "I'm open to internship opportunities, junior positions, and freelance projects. If you have an interesting project or want to chat about technology, feel free to reach out.",
    emailLabel: "Email",
    email: "andres.oliveira.dev@gmail.com",
    githubLabel: "GitHub",
    github: "github.com/andres29582",
    linkedinLabel: "LinkedIn",
    linkedin: "linkedin.com/in/andres-oliveira-dev",
    availability: "✅ Available for new opportunities",
  },

  footer: {
    rights: "All rights reserved",
    builtWith: "Built with Next.js, TypeScript and Tailwind CSS",
  },
};

export default content;
