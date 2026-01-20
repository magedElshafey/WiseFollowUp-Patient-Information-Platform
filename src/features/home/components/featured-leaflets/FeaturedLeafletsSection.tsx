import React from "react";
import SectionHeader from "@/common/components/section-header/SectionHeader";
import FeaturedLeafletCard from "./FeaturedLeafletCard";
import type { LeafletType } from "@/features/leaflets/types/leaflets.types";

type Props = {
  leaflets: LeafletType[];
};

const FeaturedLeafletsSection: React.FC<Props> = ({ leaflets }) => {
  return (
    <section
      aria-labelledby="featured-leaflets-heading"
      className="section-shell"
    >
      <div className="containerr">
        <SectionHeader
          title="Featured leaflets"
          titleId="featured-leaflets-heading"
          description="Frequently read patient information"
          hasViewAll
          path="/leaflets"
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

export default FeaturedLeafletsSection;
