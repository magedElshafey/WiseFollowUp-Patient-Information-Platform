import type { FeaturedLeaflet } from "./featuredLeaflet.types";

export const DUMMY_FEATURED_LEAFLETS: FeaturedLeaflet[] = [
  {
    id: "1",
    title: "Cataract Surgery: What to Expect",
    description:
      "A clear, step-by-step leaflet explaining cataracts, the operation, recovery timeline, and common questions.",
    slug: "cataract-surgery-what-to-expect",
    tags: [
      { id: "t1", label: "Procedure" },
      { id: "t2", label: "Cataract" },
    ],
    updatedAt: "2025-11-20T10:00:00.000Z",
  },
  {
    id: "2",
    title: "Dry Eye: Symptoms, Causes & Home Care",
    description:
      "Understand dry eye symptoms, triggers, safe self-care, and when to seek urgent advice.",
    slug: "dry-eye-symptoms-causes-home-care",
    tags: [
      { id: "t3", label: "Condition" },
      { id: "t4", label: "Dry eye" },
    ],
    updatedAt: "2025-10-15T10:00:00.000Z",
  },
  {
    id: "3",
    title: "Glaucoma: Monitoring & Follow-up",
    description:
      "A patient-friendly overview of glaucoma, follow-up appointments, tests, and why monitoring matters.",
    slug: "glaucoma-monitoring-follow-up",
    tags: [
      { id: "t5", label: "Condition" },
      { id: "t6", label: "Glaucoma" },
    ],
    updatedAt: "2025-12-01T10:00:00.000Z",
  },
  {
    id: "4",
    title: "After Eye Surgery: Red Flags & When to Call",
    description:
      "Learn which symptoms are normal after surgery and which warning signs need urgent medical attention.",
    slug: "after-eye-surgery-red-flags-when-to-call",
    tags: [
      { id: "t7", label: "Safety" },
      { id: "t8", label: "Aftercare" },
    ],
    updatedAt: "2025-11-05T10:00:00.000Z",
  },
  {
    id: "5",
    title: "Using Eye Drops Correctly",
    description:
      "A simple guide on how to apply eye drops safely, avoid contamination, and manage multiple drop schedules.",
    slug: "using-eye-drops-correctly",
    tags: [
      { id: "t9", label: "Medication" },
      { id: "t10", label: "Eye drops" },
    ],
    updatedAt: "2025-09-28T10:00:00.000Z",
  },
  {
    id: "6",
    title: "Floaters & Flashes: When It’s Urgent",
    description:
      "Explains floaters and flashes, when they are harmless, and when you should seek urgent help.",
    slug: "floaters-flashes-when-urgent",
    tags: [
      { id: "t11", label: "Urgent" },
      { id: "t12", label: "Symptoms" },
    ],
    updatedAt: "2025-12-06T10:00:00.000Z",
  },
];
