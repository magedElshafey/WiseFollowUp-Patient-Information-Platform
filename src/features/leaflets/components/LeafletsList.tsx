import { FC, memo, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import useInfiniteLeaflets from "../api/useInfiniteLeaflets";
import FeaturedLeafletCard from "@/features/home/components/featured-leaflets/FeaturedLeafletCard";
import type { LeafletType } from "../types/leaflets.types";
import ResultsToolbar from "./ResultsToolbar";
import LeafletCardSkeleton from "./LeafletCardSkeleton";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import LeafletsStatsHeader from "./LeafletsStatsHeader";
const LeafletsList: FC = () => {
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const queryResult = useInfiniteLeaflets();

  const pages = queryResult.data?.pages ?? [];

  const leaflets = useMemo(() => pages.flatMap((p) => p.data), [pages]);
  const totalLeaflets = queryResult.data?.pages?.[0]?.meta?.total ?? 0;

  useInfiniteScroll({
    target: loadMoreRef,
    enabled: queryResult.hasNextPage && !queryResult.isFetchingNextPage,
    onIntersect: () => {
      queryResult.fetchNextPage();
    },
  });
  const { t } = useTranslation();
  if (queryResult?.isLoading) {
    return (
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
        {queryResult.isLoading &&
          Array.from({ length: 4 }).map((_, i) => (
            <LeafletCardSkeleton key={i} />
          ))}
      </div>
    );
  }
  return (
    <div className="w-full flex-1">
      <LeafletsStatsHeader total={totalLeaflets} />
      <ResultsToolbar resultsCount={leaflets.length} />
      {leaflets.length > 0 ? (


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {leaflets.map((leaflet: LeafletType) => (
            <FeaturedLeafletCard key={leaflet.id} leaflet={leaflet} />
          ))}

          {queryResult.isFetchingNextPage &&
            Array.from({ length: 4 }).map((_, i) => (
              <LeafletCardSkeleton key={i} />
            ))}
        </div>

      ) : (
        <div className="py-12 text-center space-y-2">
          <p className="text-lg font-medium text-text-main">
            {t("No leaflets match your filters")}
          </p>
          <p className="text-sm text-text-muted">
            {t("Try adjusting or clearing some filters.")}
          </p>
        </div>
      )}

      <div ref={loadMoreRef} className="h-1" />
    </div>
  );
};

export default memo(LeafletsList);
