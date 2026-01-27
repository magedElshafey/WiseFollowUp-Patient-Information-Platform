import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { useCountUp } from "../hooks/useCountUp";
type Props = {
  total: number;
};

const LeafletsStatsHeader: FC<Props> = ({ total }) => {
  const { t } = useTranslation();
  const count = useCountUp({ end: total, duration: 900 });

  return (
    <div className="mb-6">
      <p className="text-sm text-text-muted">{t("Total leaflets available")}</p>

      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-bold tracking-tight text-text-main">
          {count.toLocaleString()}
        </span>
        <span className="text-sm text-text-muted">{t("leaflets")}</span>
      </div>
    </div>
  );
};

export default memo(LeafletsStatsHeader);
