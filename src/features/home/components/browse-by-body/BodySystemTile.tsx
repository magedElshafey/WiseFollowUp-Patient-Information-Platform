import React from "react";
import type { BodySystem } from "./browseByBody.types";
import { Link } from "react-router-dom";

type Props = {
  system: BodySystem;
};

const BodySystemTile: React.FC<Props> = ({ system }) => {
  return (
    <Link
      to={`/explore?filter-system=${system.slug}`}
      className="
        group relative rounded-card border border-border-subtle
        bg-bg-surface p-5
        transition-transform transition-shadow
        hover:-translate-y-0.5 hover:shadow-soft
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
        focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page
      "
    >
      {/* Icon */}
      <div className="mb-4 text-3xl">{system.icon}</div>

      {/* Label */}
      <h3 className="text-sm font-semibold text-text-main">{system.label}</h3>

      <p className="text-xs text-text-muted">{system.topicsCount} topics</p>

      {/* Hover popover */}
      <div
        className="
          pointer-events-none absolute inset-x-3 bottom-3
          translate-y-2 opacity-0
          transition-all
          group-hover:translate-y-0 group-hover:opacity-100
        "
        aria-hidden="true"
      >
        <div className="rounded-card bg-bg-page border border-border-subtle p-3 shadow-soft">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-text-muted">
            Popular
          </p>
          <ul className="space-y-1">
            {system.popularConditions.map((c) => (
              <li key={c.id} className="text-xs text-text-main">
                {c.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default BodySystemTile;
