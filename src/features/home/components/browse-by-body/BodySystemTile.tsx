import React, { memo } from "react";
import { Link } from "react-router-dom";
import { DepartmentSystem } from "@/features/categories/types/category.types";
import { FaLayerGroup } from "react-icons/fa";

type Props = {
  system: DepartmentSystem;
};

const BodySystemTile: React.FC<Props> = ({ system }) => {
  const { name, id, icon, topicsCount, description } = system;

  return (
    <Link
      to={`/leaflets?filter-department_id=${id}`}
      aria-label={`Explore ${name} system`}
      className="
        group relative flex flex-col justify-between
        rounded-card border border-border-subtle
        bg-bg-surface p-4
        transition
        hover:-translate-y-0.5 hover:shadow-soft
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-primary
        focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page
      "
    >
      {/* Icon */}
      <div
        className="
          mb-3 flex h-10 w-10 items-center justify-center
          rounded-md bg-bg-muted text-primary
          text-lg
        "
        aria-hidden="true"
      >
        {icon ? icon : <FaLayerGroup />}
      </div>

      {/* Content */}
      <div className="space-y-1">
        <h3 className="text-sm font-semibold text-text-main line-clamp-1">
          {name}
        </h3>

        {description && (
          <p className="text-xs text-text-muted line-clamp-2">{description}</p>
        )}
      </div>

      {/* Meta */}
      {typeof topicsCount === "number" && (
        <span className="mt-3 text-xs text-text-muted">
          {topicsCount} topic{topicsCount !== 1 ? "s" : ""}
        </span>
      )}
    </Link>
  );
};

export default memo(BodySystemTile);

/**
 *  <div
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
 */
