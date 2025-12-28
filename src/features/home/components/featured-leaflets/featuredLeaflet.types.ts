import { Tags } from "@/types/tag.types";

export type FeaturedLeaflet = {
  id: string;
  title: string;
  description: string;
  slug: string;
  tags: Tags[];
  updatedAt: string; // ISO
};
