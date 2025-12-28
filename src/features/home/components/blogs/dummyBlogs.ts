import type { BlogPost } from "./blog.types";

export const DUMMY_BLOGS: BlogPost[] = [
  {
    id: "b1",
    title: "How to read a leaflet without anxiety",
    excerpt:
      "A simple method to focus on what matters: what to expect, what is normal, and what needs urgent help.",
    slug: "read-leaflets-without-anxiety",
    category: "Patient guidance",
    readTime: "4 min",
    updatedAt: "2025-12-09T10:00:00.000Z",
  },
  {
    id: "b2",
    title: "What “red flags” really mean after surgery",
    excerpt:
      "We explain warning symptoms in plain language, and what the next step should be.",
    slug: "what-red-flags-mean",
    category: "Safety",
    readTime: "5 min",
    updatedAt: "2025-12-02T10:00:00.000Z",
  },
  {
    id: "b3",
    title: "Preparing for follow-up appointments",
    excerpt:
      "A checklist of questions, medication notes, and symptom tracking to bring with you.",
    slug: "prepare-for-follow-up",
    category: "Follow-up",
    readTime: "6 min",
    updatedAt: "2025-11-25T10:00:00.000Z",
  },
];
