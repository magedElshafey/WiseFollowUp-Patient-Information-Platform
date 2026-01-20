// import { FC, memo } from "react";
// import { useTranslation } from "react-i18next";
// import { useSearchParams } from "react-router-dom";

// import FetchHandler from "@/common/api/fetchHandler/FetchHandler";
// import useInfiniteLeaflets from "../api/useInfiniteLeaflets";
// import MainBtn from "@/common/components/buttons/MainBtn";
// import FeaturedLeafletCard from "@/features/home/components/featured-leaflets/FeaturedLeafletCard";
// import type { LeafletType } from "../types/leaflets.types";
// import ResultsToolbar from "./ResultsToolbar";
// const LeafletsList: FC = () => {
//   const { t } = useTranslation();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const pageFromUrl = Number(searchParams.get("page")) || 1;

//   const queryResult = useInfiniteLeaflets();
//   const leaflets = (queryResult.data?.pages || []).flatMap((page) => page.data);

//   return (
//     <div className="w-full flex-1">
//       <FetchHandler queryResult={queryResult} skeletonType="card">
//         {/* Updating feedback */}
//         {queryResult.isFetching && !queryResult.isFetchingNextPage && (
//           <p className="text-xs text-text-muted mb-3">Updating results…</p>
//         )}

//         {leaflets.length > 0 ? (
//           <>
//             <ResultsToolbar resultsCount={leaflets.length} />

//             <div className="grid grid-cols-1  lg:grid-cols-2 gap-5">
//               {leaflets.map((leaflet: LeafletType) => (
//                 <FeaturedLeafletCard key={leaflet.id} leaflet={leaflet} />
//               ))}
//             </div>
//           </>
//         ) : (
//           <div className="text-center py-12 space-y-2">
//             <p className="text-lg font-medium text-text-main">
//               No leaflets match your filters
//             </p>
//             <p className="text-sm text-text-muted">
//               Try adjusting or clearing some filters to see more results.
//             </p>
//           </div>
//         )}

//         {/* Load more */}
//         {queryResult.hasNextPage && !queryResult.isFetchingNextPage && (
//           <div className="py-10 flex-center">
//             <MainBtn
//               onClick={() => {
//                 const nextPage = pageFromUrl + 1;

//                 setSearchParams(
//                   (prev) => {
//                     const params = new URLSearchParams(prev);
//                     params.set("page", String(nextPage));
//                     return params;
//                   },
//                   { replace: true },
//                 );

//                 queryResult.fetchNextPage();
//               }}
//             >
//               {t("load more")}
//             </MainBtn>
//           </div>
//         )}
//       </FetchHandler>
//     </div>
//   );
// };

// export default memo(LeafletsList);
import { FC, memo, useMemo, useRef } from "react";

import useInfiniteLeaflets from "../api/useInfiniteLeaflets";
import FeaturedLeafletCard from "@/features/home/components/featured-leaflets/FeaturedLeafletCard";
import type { LeafletType } from "../types/leaflets.types";
import ResultsToolbar from "./ResultsToolbar";
import LeafletCardSkeleton from "./LeafletCardSkeleton";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
const LeafletsList: FC = () => {
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const queryResult = useInfiniteLeaflets();
  const pages = queryResult.data?.pages ?? [];

  const leaflets = useMemo(() => pages.flatMap((p) => p.data), [pages]);

  useInfiniteScroll({
    target: loadMoreRef,
    enabled: queryResult.hasNextPage && !queryResult.isFetchingNextPage,
    onIntersect: () => {
      queryResult.fetchNextPage();
    },
  });
  return (
    <div className="w-full flex-1">
      {leaflets.length > 0 ? (
        <>
          <ResultsToolbar resultsCount={leaflets.length} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {leaflets.map((leaflet: LeafletType) => (
              <FeaturedLeafletCard key={leaflet.id} leaflet={leaflet} />
            ))}

            {queryResult.isFetchingNextPage &&
              Array.from({ length: 4 }).map((_, i) => (
                <LeafletCardSkeleton key={i} />
              ))}
          </div>
        </>
      ) : (
        <div className="py-12 text-center space-y-2">
          <p className="text-lg font-medium text-text-main">
            No leaflets match your filters
          </p>
          <p className="text-sm text-text-muted">
            Try adjusting or clearing some filters.
          </p>
        </div>
      )}

      <div ref={loadMoreRef} className="h-1" />
    </div>
  );
};

export default memo(LeafletsList);
