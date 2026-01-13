import { FC, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { useProductsFilters } from "@/features/products/providers/ProductsFiltersProvider";
import useGetAllCategories from "@/features/categories/api/useGetAllCategories";
import FetchHandler from "@/common/api/fetchHandler/FetchHandler";

import type { CountriesListType } from "@/features/categories/types/category.types";

/* ================================= */
/* ========== Item ================= */
/* ================================= */

interface CountryItemProps {
  country: CountriesListType;
  level?: number;
}

const CountryItem: FC<CountryItemProps> = memo(({ country, level = 0 }) => {
  const {
    filters: { country_id },
    handleChangeFilters,
  } = useProductsFilters();

  const isSelected = country_id === String(country.id);

  const handleSelect = useCallback(() => {
    handleChangeFilters(
      "country_id",
      isSelected ? undefined : String(country.id)
    );

    // Reset dependent filters
    handleChangeFilters("county_id", undefined);
    handleChangeFilters("organization_id", undefined);
  }, [country.id, handleChangeFilters, isSelected]);

  return (
    <button
      type="button"
      onClick={handleSelect}
      className={`
          w-full flex items-center
          rounded-pill
          px-3 py-2
          text-sm text-left
          transition-colors
          focus:outline-none focus:ring-2 focus:ring-primary
          ${
            isSelected
              ? "bg-primary-soft text-primary font-semibold"
              : "text-text-main hover:bg-bg-page"
          }
        `}
      style={{ paddingInlineStart: `${level * 16 + 12}px` }}
      aria-pressed={isSelected}
    >
      {country.name}
    </button>
  );
});

CountryItem.displayName = "CountryItem";

/* ================================= */
/* ========= Filter ================= */
/* ================================= */

const CountriesFilter: FC = () => {
  const { t } = useTranslation();
  const queryResult = useGetAllCategories();
  const categories = queryResult.data ?? [];

  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <FetchHandler queryResult={queryResult} skeletonType="list">
      <section className="space-y-3">
        {/* Header */}
        <button
          type="button"
          onClick={toggleExpand}
          className="
            w-full flex items-center justify-between
            text-left
            focus:outline-none
          "
          aria-expanded={isExpanded}
        >
          <h3 className="text-sm font-semibold text-text-main">
            {t("countries")}
          </h3>

          <span className="text-text-muted text-lg leading-none">
            {isExpanded ? "−" : "+"}
          </span>
        </button>

        {/* Content (No CLS) */}
        <div
          className={`
            overflow-hidden
            transition-[max-height,opacity]
            duration-300 ease-in-out
            ${isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="pt-2 space-y-1">
            {categories.length === 0 ? (
              <div className="py-4 text-center text-sm text-text-muted">
                {t("No countries available")}
              </div>
            ) : (
              categories.map((category) => (
                <CountryItem key={category.id} country={category} />
              ))
            )}
          </div>
        </div>
      </section>
    </FetchHandler>
  );
};

export default memo(CountriesFilter);
