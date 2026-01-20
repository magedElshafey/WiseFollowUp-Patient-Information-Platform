import { FC, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import PageSeo from "@/common/components/seo/PageSeo";
import LeafletsFiltersProvider from "../../uk-hierarchy/components/hierarchy-filter/providers/LeafletsFiltersProvider";
import LeafletsFilters from "../../uk-hierarchy/components/hierarchy-filter/components/LeafletsFilters";
import LeafletsList from "../components/LeafletsList";
import AllLeafletsSearchHeader from "../components/AllLeafletsSearchHeader";

const NON_INDEXABLE_FILTERS = [
  "year_from",
  "year_to",
  "organization_id",
  "county_id",
];

const AllLeaflets: FC = () => {
  const [searchParams] = useSearchParams();

  const hasNonIndexableFilters = useMemo(
    () =>
      NON_INDEXABLE_FILTERS.some((key) => searchParams.has(`filter-${key}`)),
    [searchParams],
  );

  return (
    <>
      <PageSeo
        title="Browse all patient leaflets"
        description="Explore trusted UK patient information leaflets reviewed by healthcare professionals."
        canonicalPath="/leaflets"
        ogType="website"
        noIndex={hasNonIndexableFilters}
      />

      {/* Search + title header */}
      <AllLeafletsSearchHeader />

      {/* Content */}
      <div className="containerr py-6">
        <LeafletsFiltersProvider>
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Filters (sidebar + drawer mobile) */}
            <LeafletsFilters />

            {/* Results */}
            <LeafletsList />
          </div>
        </LeafletsFiltersProvider>
      </div>
    </>
  );
};

export default AllLeaflets;
