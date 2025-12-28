export type BodyCondition = {
  id: string;
  label: string;
  slug: string;
};

export type BodySystem = {
  id: string;
  label: string;
  icon: string; // emoji أو icon key
  topicsCount: number;
  slug: string;
  popularConditions: BodyCondition[];
};
