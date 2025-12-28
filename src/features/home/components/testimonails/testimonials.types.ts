export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role?: string;
  location?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
};
