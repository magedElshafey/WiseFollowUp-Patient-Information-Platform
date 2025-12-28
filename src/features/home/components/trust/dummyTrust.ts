import type { TrustPillar } from "./trust.types";

export const DUMMY_TRUST_PILLARS: TrustPillar[] = [
  {
    id: "plain",
    icon: "🧾",
    title: "Plain language",
    description: "Written for patients—clear, calm and easy to follow.",
  },
  {
    id: "reviewed",
    icon: "🩺",
    title: "Clinically reviewed",
    description: "Content is reviewed and updated to reflect safe practice.",
  },
  {
    id: "privacy",
    icon: "🔒",
    title: "Privacy-first",
    description: "We avoid non-essential tracking unless you consent.",
  },
];
