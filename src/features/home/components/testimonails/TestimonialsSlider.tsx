import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import type { Testimonial } from "./testimonials.types";

type Props = { items: Testimonial[] };

const TestimonialsSlider: React.FC<Props> = ({ items }) => {
  const sliderId = useId();
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const cards = useMemo(() => items ?? [], [items]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      const mid = el.scrollLeft + el.clientWidth / 2;

      let best = 0;
      let bestDist = Infinity;
      children.forEach((c, i) => {
        const cx = c.offsetLeft + c.clientWidth / 2;
        const d = Math.abs(cx - mid);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });

      setActive(best);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, [cards.length]);

  const scrollToIndex = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    child?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const prev = () => scrollToIndex(Math.max(0, active - 1));
  const next = () => scrollToIndex(Math.min(cards.length - 1, active + 1));

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
          What patients say
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            disabled={active === 0}
            className="
              rounded-pill border border-border-subtle bg-bg-surface px-3 py-1.5
              text-sm font-semibold text-text-main disabled:opacity-50
              hover:bg-bg-page
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
              focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page
            "
            aria-controls={sliderId}
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            disabled={active === cards.length - 1}
            className="
              rounded-pill border border-border-subtle bg-bg-surface px-3 py-1.5
              text-sm font-semibold text-text-main disabled:opacity-50
              hover:bg-bg-page
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
              focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page
            "
            aria-controls={sliderId}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>

      <div
        id={sliderId}
        ref={scrollerRef}
        tabIndex={0}
        role="region"
        aria-label="Testimonials carousel"
        className="
          flex gap-4 overflow-x-auto pb-2
          snap-x snap-mandatory
          scroll-smooth
          no-scrollbar
          outline-none
        "
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") prev();
          if (e.key === "ArrowRight") next();
        }}
      >
        {cards.map((t) => (
          <TestimonialCard key={t.id} item={t} />
        ))}
      </div>

      {/* Dots */}
      <div
        className="flex items-center justify-center gap-1.5"
        role="tablist"
        aria-label="Testimonials pages"
      >
        {cards.map((_, i) => {
          const isOn = i === active;
          return (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={isOn}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`
                h-2.5 w-2.5 rounded-full
                ${isOn ? "bg-primary" : "bg-border-subtle"}
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page
              `}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
