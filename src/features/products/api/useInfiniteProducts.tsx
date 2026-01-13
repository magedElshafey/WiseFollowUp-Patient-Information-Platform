import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { Axios } from "@/lib/axios/Axios";
import { apiRoutes } from "@/services/api-routes/apiRoutes";
import type { Product } from "../types/product.types";
import { PaginatedResponse } from "@/types/Response";
import getNextPage from "@/utils/getNextPage";

const useInfiniteProducts = () => {
  const [searchParams] = useSearchParams();

  const pageFromUrl = Number(searchParams.get("page")) || 1;
  const sortBy = searchParams.get("sort_by");

  const filterParams = Array.from(searchParams.entries()).reduce(
    (current, [key, value]) => {
      if (key.startsWith("filter-")) {
        const filterKey = key.split("-")?.[1] || "";
        const currentValue = current.get(filterKey);

        if (filterKey && currentValue) {
          current.delete(filterKey);
          current.append(`${filterKey}[]`, currentValue);
          current.append(`${filterKey}[]`, value);
        } else if (current.get(`${filterKey}[]`)) {
          current.append(`${filterKey}[]`, value);
        } else {
          current.set(filterKey, value);
        }
      }
      return current;
    },
    new URLSearchParams()
  );

  if (sortBy) filterParams.set("sort", sortBy);

  return useInfiniteQuery<
    PaginatedResponse<Product[]>, // data
    Error, // error
    PaginatedResponse<Product[]>, // select
    [string, string, string], // queryKey
    number // pageParam type ✅
  >({
    queryKey: [apiRoutes.products, "infinite", filterParams.toString()],

    queryFn: async ({ pageParam }) => {
      const { data } = await Axios.get<PaginatedResponse<Product[]>>(
        `${apiRoutes.products}?${filterParams.toString()}`,
        {
          params: { page: pageParam },
        }
      );

      return data;
    },

    getNextPageParam: (lastPage) => getNextPage(lastPage),

    initialPageParam: pageFromUrl,
  });
};

export default useInfiniteProducts;
