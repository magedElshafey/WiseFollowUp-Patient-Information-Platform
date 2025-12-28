// src/features/home/browse-by-body/BrowseByBodySection.tsx
import React from "react";
import SectionHeader from "@/common/components/section-header/SectionHeader";
import BodySystemTile from "./BodySystemTile";
import type { BodySystem } from "./browseByBody.types";

type Props = {
  systems: BodySystem[];
};

const BrowseByBodySection: React.FC<Props> = ({ systems }) => {
  return (
    <section aria-labelledby="browse-by-body-heading" className="section-shell">
      <div className="containerr">
        <SectionHeader
          title="Browse by body system"
          titleId="browse-by-body-heading"
          description="Start with where the problem is, then explore common conditions"
          hasViewAll={false}
        />

        <div
          className="
            grid gap-4
           grid-cols-2 md:grid-cols-3
            lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
          "
        >
          {systems.map((system) => (
            <BodySystemTile key={system.id} system={system} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByBodySection;
