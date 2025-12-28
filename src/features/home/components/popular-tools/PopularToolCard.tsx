import React from "react";
import type { PopularTool } from "./popularTools.types";
import { Link } from "react-router-dom";

type Props = { tool: PopularTool };

const badgeStyles: Record<string, string> = {
  New: "bg-primary text-white",
  Updated: "bg-primary-soft text-primary",
  Popular: "bg-bg-page text-text-main border border-border-subtle",
};

const FeaturedToolCard: React.FC<Props> = ({ tool }) => {
  return (
    <Link
      to={`/tools/${tool.slug}`}
      className="
        block rounded-card border border-border-subtle bg-bg-surface shadow-soft
        overflow-hidden
        transition-transform transition-shadow
        hover:-translate-y-0.5 hover:shadow-soft
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
        focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page
      "
      aria-label={`Open featured tool: ${tool.title}`}
    >
      {/* top accent strip */}
      <div className="h-1 bg-primary" aria-hidden="true" />

      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
              Tool of the week
            </p>

            <h3 className="text-lg md:text-xl font-bold text-text-main leading-snug">
              {tool.title}
            </h3>
          </div>

          <span
            className={`
              rounded-pill px-3 py-1 text-xs font-semibold
              ${
                tool.badge
                  ? badgeStyles[tool.badge] ?? badgeStyles.Popular
                  : "bg-bg-page text-text-muted"
              }
            `}
          >
            {tool.badge ?? tool.category}
          </span>
        </div>

        <p className="mt-3 text-sm text-text-muted leading-relaxed">
          {tool.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-text-muted">
          <span className="rounded-pill bg-bg-page px-3 py-1 border border-border-subtle">
            ⏱ {tool.timeToUse}
          </span>
          <span className="rounded-pill bg-primary-soft px-3 py-1 text-primary">
            {tool.category}
          </span>
          <span className="ml-auto text-[11px]">
            Updated{" "}
            <time dateTime={tool.updatedAt}>
              {new Date(tool.updatedAt).toLocaleDateString()}
            </time>
          </span>
        </div>

        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Open tool <span aria-hidden="true">→</span>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedToolCard;
