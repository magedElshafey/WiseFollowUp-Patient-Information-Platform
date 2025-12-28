export type ToolCategory =
  | "Symptoms"
  | "Medication"
  | "Safety"
  | "Follow-up"
  | "Vision";

export type PopularTool = {
  id: string;
  title: string;
  description: string;
  slug: string;
  category: ToolCategory;
  updatedAt: string; // ISO
  timeToUse: string; // "1–2 min"
  badge?: "New" | "Updated" | "Popular";
};
