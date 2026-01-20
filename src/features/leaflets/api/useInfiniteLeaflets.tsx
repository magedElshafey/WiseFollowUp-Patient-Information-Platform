// import { useInfiniteQuery } from "@tanstack/react-query";
// import { useSearchParams } from "react-router-dom";

// import { Axios } from "@/lib/axios/Axios";
// import { apiRoutes } from "@/services/api-routes/apiRoutes";
// import type { LeafletType } from "../types/leaflets.types";
// import type { PaginatedResponse } from "@/types/Response";
// import getNextPage from "@/utils/getNextPage";

// const useInfiniteLeaflets = () => {
//   const [searchParams] = useSearchParams();

//   const pageFromUrl = Number(searchParams.get("page")) || 1;
//   const sortBy = searchParams.get("sort_by");

//   /**
//    * Build filters params (filter-xxx => xxx / xxx[])
//    */
//   const filterParams = Array.from(searchParams.entries()).reduce(
//     (current, [key, value]) => {
//       if (key.startsWith("filter-")) {
//         const filterKey = key.split("-")[1];
//         if (!filterKey) return current;

//         // handle multiple values
//         if (current.has(filterKey)) {
//           const existing = current.get(filterKey);
//           current.delete(filterKey);
//           if (existing) current.append(`${filterKey}[]`, existing);
//           current.append(`${filterKey}[]`, value);
//         } else if (current.has(`${filterKey}[]`)) {
//           current.append(`${filterKey}[]`, value);
//         } else {
//           current.set(filterKey, value);
//         }
//       }

//       return current;
//     },
//     new URLSearchParams(),
//   );

//   if (sortBy) {
//     filterParams.set("sort", sortBy);
//   }

//   return useInfiniteQuery<
//     PaginatedResponse<LeafletType[]>, // page type
//     Error
//   >({
//     queryKey: [apiRoutes.leaflets, "infinite", filterParams.toString()],

//     queryFn: async ({ pageParam }) => {
//       const { data } = await Axios.get<PaginatedResponse<LeafletType[]>>(
//         `${apiRoutes.leaflets}?${filterParams.toString()}`,
//         {
//           params: { page: pageParam },
//         },
//       );

//       return data;
//     },

//     initialPageParam: pageFromUrl,

//     getNextPageParam: (lastPage) => getNextPage(lastPage),
//   });
// };

// export default useInfiniteLeaflets;
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { Axios } from "@/lib/axios/Axios";
import { apiRoutes } from "@/services/api-routes/apiRoutes";
import type { LeafletType } from "../types/leaflets.types";
import type { PaginatedResponse } from "@/types/Response";
import getNextPage from "@/utils/getNextPage";

const useInfiniteLeaflets = () => {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sort_by");

  /**
   * Build filters params
   */
  const filterParams = Array.from(searchParams.entries()).reduce(
    (current, [key, value]) => {
      if (key.startsWith("filter-")) {
        const filterKey = key.split("-")[1];
        if (!filterKey) return current;

        if (current.has(filterKey)) {
          const existing = current.get(filterKey);
          current.delete(filterKey);
          if (existing) current.append(`${filterKey}[]`, existing);
          current.append(`${filterKey}[]`, value);
        } else if (current.has(`${filterKey}[]`)) {
          current.append(`${filterKey}[]`, value);
        } else {
          current.set(filterKey, value);
        }
      }
      return current;
    },
    new URLSearchParams(),
  );

  if (sortBy) {
    filterParams.set("sort", sortBy);
  }

  return useInfiniteQuery<PaginatedResponse<LeafletType[]>, Error>({
    queryKey: [apiRoutes.leaflets, "infinite", filterParams.toString()],

    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await Axios.get<PaginatedResponse<LeafletType[]>>(
        apiRoutes.leaflets,
        {
          params: {
            ...Object.fromEntries(filterParams),
            page: pageParam,
          },
        },
      );

      return data;
    },

    initialPageParam: 1,

    getNextPageParam: (lastPage) => getNextPage(lastPage),
  });
};

export default useInfiniteLeaflets;
