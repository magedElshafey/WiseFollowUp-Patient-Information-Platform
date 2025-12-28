import { apiRoutes } from "@/services/api-routes/apiRoutes";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "@/lib/axios/Axios";
export type SuggestionItem = {
  id: string;
  label: string;
  slug: string;
};

export function useSearchSuggestions(query: string) {
  return useQuery({
    queryKey: [apiRoutes?.search, query],
    enabled: query.trim().length >= 2,

    queryFn: async ({ queryKey, signal }) => {
      const [, term] = queryKey as [string, string];
      const params: any = { name: term };
      const response = await Axios.get(apiRoutes.search, {
        params,
        signal,
      });
      return response.data.data;
    },
    staleTime: 1000 * 30,
  });
}
