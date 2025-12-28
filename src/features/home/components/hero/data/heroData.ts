export type HeroQuickLink = {
  id: string;
  label: string;
  description: string;
  href: string;
};
export const DEFAULT_QUICK_LINKS: HeroQuickLink[] = [
  {
    id: "eye-conditions",
    label: "Eye conditions",
    description: "Common problems like cataract, glaucoma, and dry eye.",
    href: "/leaflets/eye-conditions",
  },
  {
    id: "procedures",
    label: "Surgery & procedures",
    description: "Information about eye surgery, injections, and aftercare.",
    href: "/leaflets/procedures",
  },
  {
    id: "medications",
    label: "Medications",
    description: "How to use eye drops and other treatments safely.",
    href: "/leaflets/medications",
  },
  {
    id: "tools",
    label: "Tools & calculators",
    description: "Patient-friendly tools to better understand your health.",
    href: "/explore?type=tools",
  },
];
