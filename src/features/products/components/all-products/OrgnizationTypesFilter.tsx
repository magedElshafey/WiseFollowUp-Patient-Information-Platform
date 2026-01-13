import { FC, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { useProductsFilters } from "@/features/products/providers/ProductsFiltersProvider";
import FetchHandler from "@/common/api/fetchHandler/FetchHandler";
import useGetOrgnizationTypes from "../../api/useGetOrgnizationTypes";

import type { CountiesListType } from "@/features/categories/types/category.types";

/* ================================= */
/* ========== Item ================= */
/* ================================= */

interface OrgnizationTypesItemProps {
  orgnizationType: CountiesListType;
  level?: number;
}

const OrgnizationTypesItem: FC<OrgnizationTypesItemProps> = memo(
  ({ orgnizationType, level = 0 }) => {
    const {
      filters: { organization_type_id },
      handleChangeFilters,
    } = useProductsFilters();

    const isSelected = organization_type_id === String(orgnizationType.id);

    const handleSelect = useCallback(() => {
      handleChangeFilters(
        "organization_type_id",
        isSelected ? undefined : String(orgnizationType.id)
      );

      // reset dependent filter
      handleChangeFilters("organization_id", undefined);
    }, [orgnizationType.id, handleChangeFilters, isSelected]);

    return (
      <button
        type="button"
        onClick={handleSelect}
        className={`
          w-full flex items-center
          rounded-pill
          px-3 py-2
          text-left text-sm
          transition-colors
          focus:outline-none focus:ring-2 focus:ring-primary
          ${
            isSelected
              ? "bg-primary-soft text-primary font-medium"
              : "text-text-main hover:bg-bg-page"
          }
        `}
        style={{ paddingInlineStart: `${level * 16 + 12}px` }}
        aria-pressed={isSelected}
      >
        {orgnizationType.name}
      </button>
    );
  }
);

OrgnizationTypesItem.displayName = "OrgnizationTypesItem";

/* ================================= */
/* ========= Filter ================= */
/* ================================= */

const OrgnizationTypesFilter: FC = () => {
  const { t } = useTranslation();
  const queryResult = useGetOrgnizationTypes();
  const types = queryResult.data ?? [];

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
            {t("orgnizations types")}
          </h3>

          <span className="text-text-muted text-lg leading-none">
            {isExpanded ? "−" : "+"}
          </span>
        </button>

        {/* Collapsible Content – No CLS */}
        <div
          className={`
            overflow-hidden
            transition-[max-height,opacity]
            duration-300 ease-in-out
            ${isExpanded ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="pt-2 space-y-1">
            {types.length === 0 ? (
              <div className="py-4 text-center text-sm text-text-muted">
                {t("No countries available")}
              </div>
            ) : (
              types.map((type) => (
                <OrgnizationTypesItem key={type.id} orgnizationType={type} />
              ))
            )}
          </div>
        </div>
      </section>
    </FetchHandler>
  );
};

export default memo(OrgnizationTypesFilter);
