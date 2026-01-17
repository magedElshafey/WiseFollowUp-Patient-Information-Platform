import { useQuery } from "@tanstack/react-query";
import { Axios } from "@/lib/axios/Axios";
import { apiRoutes } from "@/services/api-routes/apiRoutes";
import type { SearchPayload } from "../types/search.types";
import { useMemo } from "react";
import { getSearchHistory } from "../components/searchHistory";

export interface SuggestionItem {
  id: string;
  title: string;
  source: "history" | "api";
}

export function useSearchSuggestions(payload: SearchPayload) {
  const query = typeof payload.value === "string" ? payload.value.trim() : "";

  /* -------- history suggestions (always) -------- */
  const historySuggestions = useMemo<SuggestionItem[]>(() => {
    if (!query) return [];

    return getSearchHistory()
      .filter((h) => h.value.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5)
      .map((h) => ({
        id: h.id,
        title: h.value,
        source: "history",
      }));
  }, [query]);

  /* -------- api suggestions -------- */
  const apiQuery = useQuery({
    queryKey: ["search-suggestions", payload],
    queryFn: async () => {
      const { data } = await Axios.get(apiRoutes.advancedSearch, {
        params: payload,
      });
      return data?.data ?? [];
    },
    enabled: query.length > 1,
    staleTime: 60_000,
    retry: false, // 👈 مهم
  });

  const apiSuggestions: SuggestionItem[] =
    apiQuery.data?.map((item: any) => ({
      id: item.id,
      title: item.title,
      source: "api",
    })) ?? [];

  return {
    ...apiQuery,
    data: [...historySuggestions, ...apiSuggestions],
  };
}
