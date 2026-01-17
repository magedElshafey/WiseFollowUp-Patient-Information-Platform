import React from "react";
import SectionHeader from "@/common/components/section-header/SectionHeader";
import type { LeafletType } from "@/features/leaflets/types/leaflets.types";
import FeaturedLeafletCard from "../featured-leaflets/FeaturedLeafletCard";
type Props = {
  leaflets: LeafletType[];
};

const RecentlyUpdatedSection: React.FC<Props> = ({ leaflets }) => {
  return (
    <section
      aria-labelledby="recently-updated-heading"
      className="section-shell bg-bg-alt"
    >
      <div className="containerr">
        <SectionHeader
          title="Recently updated leaflets"
          titleId="recently-updated-heading"
          description="Content reviewed to reflect current guidance."
          hasViewAll
          path="/leaflets??sort_by=date-desc"
          viewAllText="View all updates →"
        />

        <div
          className="
            grid gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {leaflets.slice(0, 3).map((leaflet) => (
            <FeaturedLeafletCard key={leaflet.id} leaflet={leaflet} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyUpdatedSection;
