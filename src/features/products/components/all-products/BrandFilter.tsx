import { FC, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";

import { useProductsFilters } from "@/features/products/providers/ProductsFiltersProvider";
import useGetBrands from "@/features/brands/api/useGetBrands";
import FetchHandler from "@/common/api/fetchHandler/FetchHandler";

import type { CountiesListType } from "@/features/categories/types/category.types";

/* ================================= */
/* ========== Item ================= */
/* ================================= */

interface BrandItemProps {
  brand: CountiesListType;
}

const BrandItem: FC<BrandItemProps> = memo(({ brand }) => {
  const {
    filters: { county_id },
    handleChangeFilters,
  } = useProductsFilters();

  const isSelected = county_id === String(brand.id);

  const toggle = useCallback(() => {
    handleChangeFilters("county_id", isSelected ? undefined : String(brand.id));

    // reset dependent filter
    handleChangeFilters("organization_id", undefined);
  }, [brand.id, handleChangeFilters, isSelected]);

  return (
    <button
      type="button"
      onClick={toggle}
      className="
        w-full flex items-center gap-3
        rounded-pill
        px-3 py-2
        text-left
        transition-colors
        focus:outline-none focus:ring-2 focus:ring-primary
        hover:bg-bg-page
      "
      aria-pressed={isSelected}
    >
      {/* Checkbox */}
      <span
        className={`
          inline-flex h-4 w-4
          items-center justify-center
          rounded
          border-2
          transition-colors
          ${
            isSelected
              ? "bg-primary border-primary"
              : "border-border-subtle bg-bg-surface"
          }
        `}
        aria-hidden="true"
      >
        <FaCheck
          className={`
            h-2.5 w-2.5
            text-white
            transition-opacity
            ${isSelected ? "opacity-100" : "opacity-0"}
          `}
        />
      </span>

      <span
        className={`
          text-sm
          ${isSelected ? "text-text-main font-medium" : "text-text-muted"}
        `}
      >
        {brand.name}
      </span>
    </button>
  );
});

BrandItem.displayName = "BrandItem";

/* ================================= */
/* ========= Filter ================= */
/* ================================= */

const BrandFilter: FC = () => {
  const { t } = useTranslation();
  const {
    filters: { country_id },
  } = useProductsFilters();

  const queryResult = useGetBrands({ category: country_id });
  const brands = queryResult.data ?? [];

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
            {t("counties")}
          </h3>

          <span className="text-text-muted text-lg leading-none">
            {isExpanded ? "−" : "+"}
          </span>
        </button>

        {/* Collapsible Content (No CLS) */}
        <div
          className={`
            overflow-hidden
            transition-[max-height,opacity]
            duration-300 ease-in-out
            ${isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="pt-2 space-y-1">
            {brands.length === 0 ? (
              <div className="py-4 text-center text-sm text-text-muted">
                {t("no brands available")}
              </div>
            ) : (
              brands.map((brand) => <BrandItem key={brand.id} brand={brand} />)
            )}
          </div>
        </div>
      </section>
    </FetchHandler>
  );
};

export default memo(BrandFilter);
