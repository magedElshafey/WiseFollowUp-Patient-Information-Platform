import { FC, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { useProductsFilters } from "@/features/products/providers/ProductsFiltersProvider";
import FetchHandler from "@/common/api/fetchHandler/FetchHandler";
import useGetDepartments from "../../api/useGetDepartments";

import type { CountiesListType } from "@/features/categories/types/category.types";

/* ================================= */
/* ========== Item ================= */
/* ================================= */

interface DepartmentItemProps {
  department: CountiesListType;
  level?: number;
}

const DepartmentItem: FC<DepartmentItemProps> = memo(
  ({ department, level = 0 }) => {
    const {
      filters: { department_id },
      handleChangeFilters,
    } = useProductsFilters();

    const isSelected = department_id === String(department.id);

    const handleSelect = useCallback(() => {
      handleChangeFilters(
        "department_id",
        isSelected ? undefined : String(department.id)
      );
    }, [department.id, handleChangeFilters, isSelected]);

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
        {department.name}
      </button>
    );
  }
);

DepartmentItem.displayName = "DepartmentItem";

/* ================================= */
/* ========= Filter ================= */
/* ================================= */

const DepartmentFilter: FC = () => {
  const { t } = useTranslation();
  const queryResult = useGetDepartments();
  const departments = queryResult.data ?? [];

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
            {t("departments")}
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
            {departments.length === 0 ? (
              <div className="py-4 text-center text-sm text-text-muted">
                {t("No countries available")}
              </div>
            ) : (
              departments.map((department) => (
                <DepartmentItem key={department.id} department={department} />
              ))
            )}
          </div>
        </div>
      </section>
    </FetchHandler>
  );
};

export default memo(DepartmentFilter);
