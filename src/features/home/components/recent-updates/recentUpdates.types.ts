export type RecentUpdateType = "Leaflet" | "Tool";

export type RecentUpdateItem = {
  id: string;
  type: RecentUpdateType;
  title: string;
  slug: string;
  updatedAt: string; // ISO
  summary: string; // what changed / why updated
};
