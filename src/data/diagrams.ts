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
    es: "Documentacion visual",
    pt: "Documentacao visual",
    en: "Visual documentation",
  },
  title: {
    es: "Diagramas que uso para pensar y explicar sistemas",
    pt: "Diagramas que uso para pensar e explicar sistemas",
    en: "Diagrams I use to design and explain systems",
  },
  description: {
    es: "Trabajo con recursos visuales para modelar estructuras, describir flujos y comunicar requisitos de forma clara.",
    pt: "Trabalho com recursos visuais para modelar estruturas, descrever fluxos e comunicar requisitos com clareza.",
    en: "I work with visual artifacts to model structures, describe flows, and communicate requirements clearly.",
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
        pt: "Modelagem de estrutura e relacoes",
        en: "Structure and relationship modeling",
      },
      description: {
        es: "Lo uso para representar clases, entidades, modulos y relaciones entre las partes del sistema.",
        pt: "Uso para representar classes, entidades, modulos e relacoes entre as partes do sistema.",
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
        pt: "Fluxogramas para processos e decisoes",
        en: "Flowcharts for process and decision paths",
      },
      description: {
        es: "Me ayudan a mapear etapas, validaciones, bifurcaciones y comportamiento esperado antes de implementar.",
        pt: "Ajudam a mapear etapas, validacoes, bifurcacoes e comportamento esperado antes da implementacao.",
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
        es: "Los uso para identificar interacciones clave, necesidades del usuario y limites de una solucion.",
        pt: "Uso para identificar interacoes principais, necessidades do usuario e limites de uma solucao.",
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
