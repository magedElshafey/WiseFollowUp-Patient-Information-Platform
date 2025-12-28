import type { Testimonial } from "./testimonials.types";

export const DUMMY_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Finally a site where I can find the leaflet I need without feeling overwhelmed.",
    name: "Sarah",
    role: "Patient",
    location: "Norwich",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "The wording is calm and clear. The ‘red flags’ sections are especially helpful.",
    name: "James",
    role: "Patient",
    location: "London",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "I used the tools to prepare for my appointment—saved me time and reduced anxiety.",
    name: "Amina",
    role: "Patient",
    location: "Manchester",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "Simple, modern, and easy to navigate. Exactly what patient information should feel like.",
    name: "Omar",
    role: "Clinician",
    location: "UK",
    rating: 5,
  },
];
