import { memo, useMemo } from "react";
import { YearStat } from "./useYearStats";

const MIN_BAR_HEIGHT = 6;

interface Props {
  data: YearStat[];
  min: number;
  max: number;
}

const YearHistogram = ({ data, min, max }: Props) => {
  const bars = useMemo(() => {
    // Map للبحث السريع
    const map = new Map<number, number>();
    data.forEach((d) => map.set(d.year, d.count));

    // كل سنة = bar
    const years = Array.from({ length: max - min + 1 }, (_, i) => min + i);

    const values = years.map((year) => ({
      year,
      value: map.get(year) ?? 0,
    }));

    const maxValue = Math.max(...values.map((v) => v.value), 1);

    return values.map((v) => ({
      ...v,
      height:
        v.value === 0
          ? MIN_BAR_HEIGHT
          : Math.max((v.value / maxValue) * 100, MIN_BAR_HEIGHT),
    }));
  }, [data, min, max]);

  return (
    <div className="flex h-20 items-end gap-[2px] mb-3">
      {bars.map((bar) => (
        <div
          key={bar.year}
          className="flex-1 rounded-sm bg-primary/40 hover:bg-primary transition-colors"
          style={{ height: `${bar.height}%` }}
          title={`${bar.year}: ${bar.value}`}
        />
      ))}
    </div>
  );
};

export default memo(YearHistogram);
