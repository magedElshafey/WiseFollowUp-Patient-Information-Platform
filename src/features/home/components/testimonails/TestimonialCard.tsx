import React from "react";
import type { Testimonial } from "./testimonials.types";

const Stars: React.FC<{ rating?: number }> = ({ rating = 5 }) => (
  <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        aria-hidden="true"
        className={i < rating ? "text-primary" : "text-border-subtle"}
      >
        ★
      </span>
    ))}
  </div>
);

const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => {
  return (
    <article
      className="
        snap-center shrink-0
        w-[min(92vw,26rem)]
        rounded-card border border-border-subtle bg-bg-surface shadow-soft
        p-5 md:p-6
      "
      aria-label={`Testimonial from ${item.name}`}
    >
      <Stars rating={item.rating} />

      <blockquote className="mt-3 text-sm text-text-main leading-relaxed">
        <span aria-hidden="true" className="text-primary font-bold">
          “
        </span>
        {item.quote}
        <span aria-hidden="true" className="text-primary font-bold">
          ”
        </span>
      </blockquote>

      <footer className="mt-4 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-text-main truncate">
            {item.name}
          </p>
          <p className="text-xs text-text-muted truncate">
            {[item.role, item.location].filter(Boolean).join(" • ")}
          </p>
        </div>

        <span className="rounded-pill bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
          Verified
        </span>
      </footer>
    </article>
  );
};

export default TestimonialCard;
