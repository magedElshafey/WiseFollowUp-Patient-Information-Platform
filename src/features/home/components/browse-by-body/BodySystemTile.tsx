// import React, { memo } from "react";
// import { Link } from "react-router-dom";
// import { FaLayerGroup } from "react-icons/fa";
// import type { DepartmentSystem } from "@/features/uk-hierarchy/types/ukHierarchy.types";
// type Props = {
//   system: DepartmentSystem;
// };

// const BodySystemTile: React.FC<Props> = ({ system }) => {
//   const { name, id, icon, topicsCount, description } = system;

//   return (
//     <Link
//       to={`/leaflets?filter-department_id=${id}`}
//       aria-label={`Explore ${name} system`}
//       className="
//         group relative flex flex-col justify-between
//         rounded-card border border-border-subtle
//         bg-bg-surface p-4
//         transition
//         hover:-translate-y-0.5 hover:shadow-soft
//         focus-visible:outline-none
//         focus-visible:ring-2 focus-visible:ring-primary
//         focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page
//       "
//     >
//       {/* Icon */}
//       <div
//         className="
//           mb-3 flex h-10 w-10 items-center justify-center
//           rounded-md bg-bg-muted text-primary
//           text-lg
//         "
//         aria-hidden="true"
//       >
//         {icon ? icon : <FaLayerGroup />}
//       </div>

//       {/* Content */}
//       <div className="space-y-1">
//         <h3 className="text-sm font-semibold text-text-main line-clamp-1">
//           {name}
//         </h3>

//         {description && (
//           <p className="text-xs text-text-muted line-clamp-2">{description}</p>
//         )}
//       </div>

//       {/* Meta */}
//       {typeof topicsCount === "number" && (
//         <span className="mt-3 text-xs text-text-muted">
//           {topicsCount} topic{topicsCount !== 1 ? "s" : ""}
//         </span>
//       )}
//     </Link>
//   );
// };

// export default memo(BodySystemTile);

import React, { memo } from "react";
import { Link } from "react-router-dom";
import { FaLayerGroup } from "react-icons/fa";
import type { DepartmentSystem } from "@/features/uk-hierarchy/types/ukHierarchy.types";
import clsx from "clsx";

type Props = {
  system: DepartmentSystem;
};

const BodySystemTile: React.FC<Props> = ({ system }) => {
  const { id, name, icon, topicsCount, description } = system;

  return (
    <Link
      to={`/leaflets?filter-department_id=${id}`}
      aria-label={`Browse patient leaflets for ${name}`}
      className={clsx(
        "group relative flex h-full flex-col justify-between",
        "rounded-card border border-border-subtle bg-bg-surface p-4",
        "transition hover:-translate-y-0.5 hover:shadow-soft",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page"
      )}
    >
      {/* Icon */}
      <div
        className="
          mb-3 flex h-10 w-10 items-center justify-center
          rounded-md bg-primary/10 text-primary
          text-base
        "
        aria-hidden
      >
        {icon ?? <FaLayerGroup />}
      </div>

      {/* Content */}
      <div className="space-y-1">
        <h3 className="text-sm font-semibold text-text-main">{name}</h3>

        {description && (
          <p className="text-xs text-text-muted line-clamp-2">{description}</p>
        )}
      </div>

      {/* Meta */}
      <div className="mt-3 flex items-center justify-between text-xs text-text-muted">
        {typeof topicsCount === "number" ? (
          <span>
            {topicsCount} leaflet{topicsCount !== 1 ? "s" : ""}
          </span>
        ) : (
          <span />
        )}

        <span
          className="
            opacity-0 transition group-hover:opacity-100
            text-primary
          "
          aria-hidden
        >
          View →
        </span>
      </div>
    </Link>
  );
};

export default memo(BodySystemTile);
