import React from "react";
import type { FeaturedLeaflet } from "./featuredLeaflet.types";
import { Link } from "react-router-dom";

type Props = {
  leaflet: FeaturedLeaflet;
};

const FeaturedLeafletCard: React.FC<Props> = ({ leaflet }) => {
  return (
    <Link
      to={`/leaflets/${leaflet.slug}`}
      className=" border 
        card-base group
        transition-transform transition-shadow
        hover:-translate-y-0.5 hover:shadow-soft
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-primary
        focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page
      "
    >
      {/* Title */}
      <h3 className="text-sm font-semibold text-text-main leading-snug">
        {leaflet.title}
      </h3>

      {/* Description */}
      <p className="text-xs text-text-muted line-clamp-2">
        {leaflet.description}
      </p>

      {/* Tags */}
      <ul className="flex flex-wrap gap-1.5">
        {leaflet.tags.map((tag) => (
          <li
            key={tag.id}
            className="
              rounded-pill bg-primary-soft
              px-2 py-0.5
              text-[11px] text-primary
            "
          >
            {tag.label}
          </li>
        ))}
      </ul>

      {/* Meta */}
      <p className="mt-auto text-[11px] text-text-muted">
        Updated{" "}
        <time dateTime={leaflet.updatedAt}>
          {new Date(leaflet.updatedAt).toLocaleDateString()}
        </time>
      </p>
    </Link>
  );
};

export default FeaturedLeafletCard;
