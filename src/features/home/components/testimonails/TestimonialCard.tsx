import React from "react";
import { Reviews } from "../../types/reviews.types";

const Stars: React.FC<{ rating?: number }> = ({ rating = 5 }) => (
  <div className="flex gap-0.5" aria-label={`${rating} out of 5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={i < rating ? "text-primary" : "text-border-subtle"}
        aria-hidden
      >
        ★
      </span>
    ))}
  </div>
);

const TestimonialCard: React.FC<{ item: Reviews }> = ({ item }) => {
  return (
    <article
      className="
        card-base
        h-full
        flex flex-col
        justify-between
      "
      aria-label={`Testimonial from ${item.reviewer_name}`}
    >
      <div className="space-y-3">
        <Stars rating={item.rating} />

        <blockquote className="text-sm text-text-main leading-relaxed">
          <span className="text-primary font-bold">“</span>
          {item.comment}
          <span className="text-primary font-bold">”</span>
        </blockquote>
      </div>

      <footer className="mt-6 flex items-center justify-between">
        <p className="font-semibold text-text-main truncate">
          {item.reviewer_name}
        </p>

        <span className="rounded-pill bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
          Verified
        </span>
      </footer>
    </article>
  );
};

export default TestimonialCard;
