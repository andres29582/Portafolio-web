import type { Language } from "@/lib/i18n";
import type { LocalizedText } from "@/types/localization";

type DiagramCapability = {
  id: string;
  label: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
};

type DiagramShowcase = {
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  items: DiagramCapability[];
};

export const diagramShowcase: DiagramShowcase = {
  eyebrow: {
    es: "Documentación y apoyo visual",
    pt: "Documentação e apoio visual",
    en: "Visual documentation",
  },
  title: {
    es: "Diagramas que uso para pensar y explicar sistemas",
    pt: "Diagramas que uso para pensar e explicar sistemas",
    en: "Diagrams I use to design and explain systems",
  },
  description: {
    es: "Uso recursos visuales y documentación para organizar mejor ideas, flujos y estructura de sistemas.",
    pt: "Utilizo recursos visuais e documentação para organizar melhor ideias, fluxos e estrutura de sistemas.",
    en: "I use visual resources and documentation to better organize ideas, flows, and system structure.",
  },
  items: [
    {
      id: "uml",
      label: {
        es: "UML",
        pt: "UML",
        en: "UML",
      },
      title: {
        es: "Modelado de estructura y relaciones",
        pt: "Modelagem de estrutura e relações",
        en: "Structure and relationship modeling",
      },
      description: {
        es: "Lo uso para representar entidades, módulos y relaciones entre las partes del sistema.",
        pt: "Uso para representar entidades, módulos e relações entre as partes do sistema.",
        en: "I use it to represent classes, entities, modules, and relationships between system parts.",
      },
    },
    {
      id: "flowcharts",
      label: {
        es: "Flujo",
        pt: "Fluxo",
        en: "Flow",
      },
      title: {
        es: "Fluxogramas para procesos y decisiones",
        pt: "Fluxogramas para processos e decisões",
        en: "Flowcharts for process and decision paths",
      },
      description: {
        es: "Me ayudan a mapear procesos, decisiones, validaciones y comportamiento esperado antes de implementar.",
        pt: "Ajudam a mapear processos, decisões, validações e comportamento esperado antes da implementação.",
        en: "They help me map steps, validations, branches, and expected behavior before implementation.",
      },
    },
    {
      id: "use-cases",
      label: {
        es: "Casos de uso",
        pt: "Casos de uso",
        en: "Use cases",
      },
      title: {
        es: "Actores, objetivos y alcance funcional",
        pt: "Atores, objetivos e escopo funcional",
        en: "Actors, goals, and functional scope",
      },
      description: {
        es: "Los uso para identificar actores, objetivos y alcance funcional de una solución.",
        pt: "Uso para identificar atores, objetivos e escopo funcional de uma solução.",
        en: "I use them to identify key interactions, user needs, and solution boundaries.",
      },
    },
  ],
};

export function getDiagramShowcase(language: Language) {
  return {
    eyebrow: diagramShowcase.eyebrow[language],
    title: diagramShowcase.title[language],
    description: diagramShowcase.description[language],
    items: diagramShowcase.items.map((item) => ({
      id: item.id,
      label: item.label[language],
      title: item.title[language],
      description: item.description[language],
    })),
  };
}
