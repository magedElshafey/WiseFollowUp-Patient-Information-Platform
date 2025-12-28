import React from "react";
import type { PopularTool } from "./popularTools.types";
import SectionHeader from "@/common/components/section-header/SectionHeader";
import { Link } from "react-router-dom";

type Props = {
  tools: PopularTool[];
  isLoading?: boolean;
};

const BentoPopularToolsSection: React.FC<Props> = ({
  tools,
  isLoading = false,
}) => {
  const items = tools;

  return (
    <section
      aria-labelledby="popular-tools-heading"
      className="section-shell bg-bg-page"
    >
      <div className="containerr">
        <SectionHeader
          title="Popular tools & calculators"
          titleId="popular-tools-heading"
          description="Quick, patient-friendly tools for safer follow-up"
          hasViewAll={true}
          path="/explore?type=tools"
        />

        {isLoading ? (
          <div className="grid gap-4 md:grid-cols-3">
            <div className="h-48 card-base animate-pulse md:col-span-2" />
            <div className="h-48 card-base animate-pulse" />
            <div className="h-32 card-base animate-pulse" />
            <div className="h-32 card-base animate-pulse" />
            <div className="h-32 card-base animate-pulse" />
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-3 auto-rows-[1fr]">
            {/* Big tile */}
            {items[0] && (
              <BentoTile
                tool={items[0]}
                variant="big"
                className="md:col-span-2"
                isFeatured
              />
            )}

            {/* Tall tile */}
            {items[1] && <BentoTile tool={items[1]} variant="tall" />}

            {/* 3 small tiles */}
            {items.slice(2).map((t) => (
              <BentoTile key={t.id} tool={t} variant="small" />
            ))}
          </div>
        )}

        <p className="mt-5 text-xs text-text-muted leading-relaxed">
          Tools provide guidance only and do not replace clinical advice.
        </p>
      </div>
    </section>
  );
};

export default BentoPopularToolsSection;

// --------------------

type TileVariant = "big" | "tall" | "small" | "wide";

const variantClasses: Record<TileVariant, string> = {
  big: "p-6 min-h-[12rem]",
  tall: "p-5 min-h-[12rem] md:min-h-[14rem]",
  small: "p-4 min-h-[9rem]",
  wide: "p-5 min-h-[10rem]",
};

const BentoTile: React.FC<{
  tool: PopularTool;
  variant: TileVariant;
  className?: string;
  isFeatured?: boolean;
}> = ({ tool, variant, className = "", isFeatured = false }) => {
  return (
    <Link
      to={`/tools/${tool.slug}`}
      className={`
        group relative block rounded-card border
        ${isFeatured ? "border-primary" : "border-border-subtle"}
        bg-bg-surface shadow-soft
        transition-transform transition-shadow
        hover:-translate-y-0.5 hover:shadow-soft
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
        focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page
        overflow-hidden
        ${variantClasses[variant]}
        ${className}
      `}
      aria-label={`Open tool: ${tool.title}`}
    >
      {/* Accent strip for Tool of the week */}
      {isFeatured && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 bg-primary "
        />
      )}

      {/* Header */}
      <div className="mb-3 flex items-center justify-between gap-3">
        <span
          className={`
            rounded-pill px-3 py-1 text-[11px] font-semibold
            ${
              isFeatured
                ? "bg-primary text-white"
                : "bg-primary-soft text-primary"
            }
          `}
        >
          {isFeatured ? "Tool of the week" : tool.category}
        </span>

        <span className="text-[11px] text-text-muted">⏱ {tool.timeToUse}</span>
      </div>

      {/* Title */}
      <h3
        className={`
          font-semibold text-text-main
          ${variant === "big" ? "text-xl" : "text-sm"}
          leading-snug
        `}
      >
        {tool.title}
      </h3>

      {/* Description */}
      <p
        className={`
          mt-2 text-text-muted
          ${variant === "big" ? "text-sm" : "text-xs"}
          line-clamp-2
        `}
      >
        {tool.description}
      </p>

      {/* Extra reassurance copy only for featured */}
      {isFeatured && (
        <p className="mt-3 text-xs text-text-muted leading-relaxed">
          Most used this week by patients preparing for their follow-up.
        </p>
      )}

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between text-[11px] text-text-muted">
        <time dateTime={tool.updatedAt}>
          Updated {new Date(tool.updatedAt).toLocaleDateString()}
        </time>

        <span
          aria-hidden="true"
          className="text-primary font-semibold transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </div>
    </Link>
  );
};
