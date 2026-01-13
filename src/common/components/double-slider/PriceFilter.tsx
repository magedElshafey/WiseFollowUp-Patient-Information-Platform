import { useRef, useCallback, useEffect, memo } from "react";
import { useTranslation } from "react-i18next";
import "./double-slider.css";
import { useProductsFilters } from "@/features/products/providers/ProductsFiltersProvider";

const START_YEAR = 1927;
const END_YEAR = 2026;

interface YearFilterProps {
  initialMin?: number;
  initialMax?: number;
  step?: number;
}

const YearFilter: React.FC<YearFilterProps> = ({
  initialMin = START_YEAR,
  initialMax = END_YEAR,
  step = 1,
}) => {
  const { i18n } = useTranslation();

  const {
    filters: { year_from, year_to },
    handleChangeFilters,
  } = useProductsFilters();

  const minYear = Number(year_from) || initialMin;
  const maxYear = Number(year_to) || initialMax;

  const minValRef = useRef(minYear);
  const maxValRef = useRef(maxYear);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) =>
      Math.round(((value - initialMin) / (initialMax - initialMin)) * 100),
    [initialMin, initialMax]
  );

  useEffect(() => {
    const minPercent = getPercent(minYear);
    const maxPercent = getPercent(maxYear);

    if (!range.current) return;

    if (i18n.language === "ar") {
      range.current.style.right = `${minPercent}%`;
      range.current.style.left = "unset";
    } else {
      range.current.style.left = `${minPercent}%`;
      range.current.style.right = "unset";
    }

    range.current.style.width = `${maxPercent - minPercent}%`;
  }, [minYear, maxYear, getPercent, i18n.language]);

  return (
    <div className="my-5">
      <h4 className="mb-3 font-semibold text-sm">
        {i18n.language === "ar" ? "سنة الإنتاج" : "Production Year"}
      </h4>

      <div className="flex-center relative">
        {/* Min Year */}
        <input
          type="range"
          min={initialMin}
          max={initialMax}
          value={minYear}
          step={step}
          onChange={(e) => {
            const value = Math.min(Number(e.target.value), maxYear);
            handleChangeFilters("year_from", value.toString(), true);
            minValRef.current = value;
          }}
          className="thumb thumbLeft"
        />

        {/* Max Year */}
        <input
          type="range"
          min={initialMin}
          max={initialMax}
          value={maxYear}
          step={step}
          onChange={(e) => {
            const value = Math.max(Number(e.target.value), minYear);
            handleChangeFilters("year_to", value.toString(), true);
            maxValRef.current = value;
          }}
          className="thumb thumbRight"
        />

        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
        </div>
      </div>

      {/* Year labels */}
      <div className="flex justify-between mt-4 text-sm font-medium">
        <span>
          {i18n.language === "ar" ? "من" : "From"} {minYear}
        </span>
        <span>
          {i18n.language === "ar" ? "إلى" : "To"} {maxYear}
        </span>
      </div>
    </div>
  );
};

export default memo(YearFilter);
