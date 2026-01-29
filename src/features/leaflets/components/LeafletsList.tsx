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

  return (
    <div className="flex-1 w-full">
      {queryResult?.isLoading ? (
        <div className="mb-6 animate-pulse">
          {/* subtitle */}
          <div className="w-40 h-4 mb-2 bg-gray-200 rounded dark:bg-gray-700" />

          <div className="flex items-baseline gap-2">
            {/* number */}
            <div className="w-24 h-10 bg-gray-200 rounded dark:bg-gray-700" />

            {/* label */}
            <div className="w-16 h-4 bg-gray-200 rounded dark:bg-gray-700" />
          </div>
        </div>
      ) : (
        <LeafletsStatsHeader total={totalLeaflets} />
      )}
      {queryResult?.isLoading ? (
        <div className="flex items-center justify-between gap-3 mb-4 animate-pulse">
          {/* Left */}
          <div className="flex items-center gap-3">
            {/* Mobile filter button */}
            <div className="lg:hidden">
              <div className="w-24 bg-gray-200 rounded-md h-9 dark:bg-gray-700" />
            </div>

            {/* Results count */}
            <div className="hidden sm:block">
              <div className="w-40 h-4 bg-gray-200 rounded dark:bg-gray-700" />
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <div className="hidden w-16 h-4 bg-gray-200 rounded sm:inline dark:bg-gray-700" />
            <div className="w-32 bg-gray-200 rounded-md h-9 dark:bg-gray-700" />
          </div>
        </div>
      ) : (
        <ResultsToolbar resultsCount={leaflets.length} />
      )}
      {queryResult?.isLoading && (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <LeafletCardSkeleton key={i} />
          ))}
        </div>
      )}
      {leaflets.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {leaflets.map((leaflet: LeafletType) => (
            <FeaturedLeafletCard key={leaflet.id} leaflet={leaflet} />
          ))}

          {queryResult.isFetchingNextPage &&
            Array.from({ length: 4 }).map((_, i) => (
              <LeafletCardSkeleton key={i} />
            ))}
        </div>
      ) : (
        <div className="py-12 space-y-2 text-center">
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
