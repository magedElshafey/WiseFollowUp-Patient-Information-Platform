// import React from "react";
// import { Link } from "react-router-dom";
// import type { LeafletType } from "@/features/leaflets/types/leaflets.types";
// import clsx from "clsx";

// type Props = {
//   leaflet: LeafletType;
// };

// const FeaturedLeafletCard: React.FC<Props> = ({ leaflet }) => {
//   const isAvailable = Boolean(leaflet.pdf_url);

//   const CardContent = (
//     <>
//       {/* Header */}
//       <div className="flex items-start justify-between gap-2">
//         <h3 className="text-sm font-semibold text-text-main leading-snug">
//           {leaflet.title}
//         </h3>

//         {!isAvailable && (
//           <span
//             className="shrink-0 rounded-full bg-gray-200 px-2 py-0.5 text-[10px] font-medium text-gray-600"
//             aria-label="PDF not available"
//           >
//             Not available
//           </span>
//         )}
//       </div>

//       {/* Description */}
//       <p className="mt-1 text-xs text-text-muted line-clamp-2">
//         {leaflet.short_description}
//       </p>

//       {/* Meta */}
//       <p className="mt-auto text-[11px] text-text-muted">
//         Updated{" "}
//         <time dateTime={leaflet.created_at}>
//           {new Date(leaflet.created_at).toLocaleDateString()}
//         </time>
//       </p>
//     </>
//   );

//   const baseClasses = clsx(
//     "card-base border flex flex-col gap-2",
//     "transition-transform transition-shadow",
//     {
//       "hover:-translate-y-0.5 hover:shadow-soft focus-visible:ring-2 focus-visible:ring-primary":
//         isAvailable,
//       "opacity-60 cursor-not-allowed": !isAvailable,
//     }
//   );

//   if (!isAvailable) {
//     return (
//       <div className={baseClasses} aria-disabled="true" role="article">
//         {CardContent}
//       </div>
//     );
//   }

//   return (
//     <Link
//       to={`/leaflets/${leaflet.slug}`}
//       className={baseClasses}
//       aria-label={`Open leaflet ${leaflet.title}`}
//     >
//       {CardContent}
//     </Link>
//   );
// };

// export default React.memo(FeaturedLeafletCard);
import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import type { LeafletType } from "@/features/leaflets/types/leaflets.types";

type Props = {
  leaflet: LeafletType;
};

const LeafletCard: React.FC<Props> = ({ leaflet }) => {
  const isAvailable = Boolean(leaflet.pdf_url);

  const reviewDate =
    leaflet.reviewed_at || leaflet.publication_date || leaflet.updated_at;

  const content = (
    <article className="flex h-full flex-col gap-2">
      {/* Header */}
      <header>
        <h3 className="text-sm font-semibold leading-snug text-text-main line-clamp-2">
          {leaflet.title}
        </h3>
      </header>

      {/* Description */}
      <p className="text-xs text-text-muted line-clamp-2">
        {leaflet.short_description}
      </p>

      {/* Meta */}
      <footer className="mt-auto flex flex-wrap items-center gap-x-2 text-[11px] text-text-muted">
        {leaflet.organization?.name && <span>{leaflet.organization.name}</span>}

        {reviewDate && (
          <>
            <span aria-hidden>•</span>
            <time dateTime={reviewDate}>
              Reviewed{" "}
              {new Date(reviewDate).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "short",
              })}
            </time>
          </>
        )}
      </footer>
    </article>
  );

  const baseClasses = clsx(
    "card-base border transition",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
    {
      "hover:-translate-y-0.5 hover:shadow-soft": isAvailable,
      "opacity-60 cursor-not-allowed": !isAvailable,
    }
  );

  if (!isAvailable) {
    return (
      <div className={baseClasses} aria-disabled="true" role="article">
        {content}
      </div>
    );
  }

  return (
    <Link
      to={`/leaflets/${leaflet.slug}`}
      className={baseClasses}
      aria-label={`Open leaflet: ${leaflet.title}`}
    >
      {content}
    </Link>
  );
};

export default React.memo(LeafletCard);
