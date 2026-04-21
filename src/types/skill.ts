import type { LocalizedText } from "@/types/localization";

export type SkillLevel = "learning" | "practicing" | "applied";

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type SkillGroup = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  items: Skill[];
};
