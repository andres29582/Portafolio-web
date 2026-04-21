import type { LocalizedText } from "@/types/localization";

export type ProjectStatus = "planned" | "in-progress" | "completed" | "paused";

export type Project = {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  problem: LocalizedText;
  technologies: string[];
  learnings: LocalizedText;
  status: ProjectStatus;
  statusLabel: LocalizedText;
  githubUrl?: string;
  liveUrl?: string;
};
