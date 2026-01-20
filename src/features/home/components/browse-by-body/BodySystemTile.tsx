import React, { memo } from "react";
import { Link } from "react-router-dom";
import { FaLayerGroup } from "react-icons/fa";
import type { DepartmentSystem } from "@/features/uk-hierarchy/types/ukHierarchy.types";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
type Props = {
  system: DepartmentSystem;
};

const BodySystemTile: React.FC<Props> = ({ system }) => {
  const { id, name, icon, topicsCount, description } = system;
  const { t, i18n } = useTranslation();
  return (
    <Link
      to={`/leaflets?filter-department_id=${id}`}
      aria-label={`Browse patient leaflets for ${name}`}
      className={clsx(
        "group relative flex h-full flex-col justify-between",
        "rounded-card border border-border-subtle bg-bg-surface p-4",
        "transition hover:-translate-y-0.5 hover:shadow-soft",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page",
      )}
    >
      {/* Icon (placeholder-safe) */}
      <div
        className="
          mb-3 flex h-10 w-10 items-center justify-center
          rounded-md bg-primary/10 text-primary text-base
        "
        aria-hidden
      >
        {React.isValidElement(icon) ? icon : <FaLayerGroup />}
      </div>

      {/* Content */}
      <div className="space-y-1">
        <h3 className="text-sm font-semibold text-text-main">{name}</h3>

        <p className="text-xs text-text-muted line-clamp-2 min-h-[2rem]">
          {description || ""}
        </p>
      </div>

      {/* Meta */}
      <div className="mt-3 flex items-center justify-between text-xs text-text-muted">
        <span className="min-h-[1rem]">
          {typeof topicsCount === "number"
            ? `${topicsCount} ${t("leaflet")}${topicsCount !== 1 && i18n.language === "en" ? "s" : ""}`
            : ""}
        </span>

        {/* Reserve space for hover text */}
        <span
          className="
            opacity-0 group-hover:opacity-100
            transition text-primary
          "
          aria-hidden
        >
          {t("View →")}
        </span>
      </div>
    </Link>
  );
};

export default memo(BodySystemTile);
