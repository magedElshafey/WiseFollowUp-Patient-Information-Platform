import { memo } from "react";
// import { useYearStats } from "./useYearStats";
import YearHistogram from "./YearHistogram";
import YearRangeSlider from "./YearRangeSlider";
import YearFilterSkeleton from "./YearFilterSkeleton";
import "./double-slider.css";
import { useWebsiteSettings } from "@/store/WebsiteSettingsProvider";
// const START = 1992;
// const END = 2026;

const YearFilter = () => {
  const { yearFrom, yearto, years, loadingYears } = useWebsiteSettings();
  if (loadingYears) return <YearFilterSkeleton />;

  return (
    <div className="relative">
      <YearHistogram data={years || []} min={yearFrom || 0} max={yearto || 0} />
      <YearRangeSlider
        min={yearFrom || 0}
        max={yearto || 0}
        data={years || []}
      />

      <div className="flex justify-between mt-3 text-xs text-text-muted">
        <span>{yearFrom}</span>
        <span>{yearto}</span>
      </div>
    </div>
  );
};

export default memo(YearFilter);
