import React from "react";
import SectionHeader from "@/common/components/section-header/SectionHeader";
import type { RecentUpdateItem } from "./recentUpdates.types";

type Props = {
  items: RecentUpdateItem[];
  isLoading?: boolean;
};

const typeStyles: Record<string, string> = {
  Leaflet: "bg-primary-soft text-primary",
  Tool: "bg-bg-page text-text-main border border-border-subtle",
};

const RecentlyUpdatedSection: React.FC<Props> = ({
  items,
  isLoading = false,
}) => {
  return (
    <section
      aria-labelledby="recently-updated-heading"
      className="section-shell"
    >
      <div className="containerr">
        <SectionHeader
          title="Recently updated"
          titleId="recently-updated-heading"
          description="Latest changes to leaflets and tools"
          hasViewAll
          path="/search?sort=updated"
        />

        {isLoading ? (
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="card-base h-24 animate-pulse" />
            ))}
          </div>
        ) : (
          <ol className="relative space-y-3">
            {/* timeline line */}
            <div
              aria-hidden="true"
              className="
                absolute left-3 top-2 bottom-2 w-px
                bg-border-subtle
              "
            />
            {items.map((item) => (
              <li key={item.id} className="relative pl-10">
                {/* dot */}
                <span
                  aria-hidden="true"
                  className="
                    absolute left-[10px] top-5 h-2.5 w-2.5 rounded-full
                    bg-primary
                  "
                />

                <a
                  href={item.slug}
                  className="
                    block rounded-card border border-border-subtle
                    bg-bg-surface shadow-soft
                    px-4 py-3
                    transition-transform transition-shadow
                    hover:-translate-y-0.5 hover:shadow-soft
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                    focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page
                  "
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className={`
                          rounded-pill px-2 py-0.5 text-[11px] font-semibold
                          ${typeStyles[item.type]}
                        `}
                      >
                        {item.type}
                      </span>

                      <h3 className="text-sm font-semibold text-text-main truncate">
                        {item.title}
                      </h3>
                    </div>

                    <time
                      dateTime={item.updatedAt}
                      className="text-[11px] text-text-muted"
                    >
                      {new Date(item.updatedAt).toLocaleDateString()}
                    </time>
                  </div>

                  <p className="mt-1 text-xs text-text-muted leading-relaxed line-clamp-2">
                    {item.summary}
                  </p>
                </a>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
};

export default RecentlyUpdatedSection;
