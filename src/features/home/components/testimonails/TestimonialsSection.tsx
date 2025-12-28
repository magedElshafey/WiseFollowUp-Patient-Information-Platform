import React from "react";
import SectionHeader from "@/common/components/section-header/SectionHeader";
import TestimonialsSlider from "./TestimonialsSlider";
import type { Testimonial } from "./testimonials.types";

type Props = { items: Testimonial[] };

const TestimonialsSection: React.FC<Props> = ({ items }) => {
  return (
    <section aria-labelledby="testimonials-heading" className="section-shell">
      <div className="containerr">
        <SectionHeader
          title="Testimonials"
          titleId="testimonials-heading"
          description="Reassurance from patients and clinicians"
        />
        <TestimonialsSlider items={items} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
