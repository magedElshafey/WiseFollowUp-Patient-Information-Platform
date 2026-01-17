import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { HiFilter } from "react-icons/hi";
import { useLeafletsFilters } from "@/features/uk-hierarchy/components/hierarchy-filter/providers/LeafletsFiltersProvider";
import SortDropdown from "@/features/uk-hierarchy/components/hierarchy-filter/components/SortDropdown";
type Props = {
  resultsCount: number;
};

const ResultsToolbar: FC<Props> = ({ resultsCount }) => {
  const { t } = useTranslation();
  const { isDrawerOpen, setIsDrawerOpen } = useLeafletsFilters();

  return (
    <div className="flex items-center justify-between mb-4 gap-3">
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Mobile filter button */}
        <button
          type="button"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="
            lg:hidden inline-flex items-center gap-2
            px-3 py-2 rounded-md
            border border-border-subtle
            bg-bg-surface
            text-text-main
            focus:outline-none
            focus-visible:ring-2 focus-visible:ring-primary
          "
          aria-label={t("Toggle filters")}
        >
          <HiFilter size={18} />
          <span className="text-sm font-medium">{t("Filters")}</span>
        </button>

        {/* Results count */}
        <p className="text-sm text-text-muted hidden sm:block">
          {t("Showing")}{" "}
          <span className="font-medium text-text-main">{resultsCount}</span>{" "}
          {t("leaflets")}
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-text-muted hidden sm:inline">
          {t("Sort by")}
        </span>
        <SortDropdown />
      </div>
    </div>
  );
};

export default memo(ResultsToolbar);
