import { useQuery } from "@tanstack/react-query";
import { Axios } from "@/lib/axios/Axios";
import { apiRoutes } from "@/services/api-routes/apiRoutes";
import type { CountriesListType } from "../types/category.types";
import { delayOptions } from "@/lib/tanstack-react-query/delayOptions";
const useGetAllCategories = () => {
  return useQuery({
    queryKey: [apiRoutes?.countries],
    queryFn: async () => {
      const { data } = await Axios.get(apiRoutes?.countries);
      return data?.data as CountriesListType[];
    },
    ...delayOptions,
  });
};

export default useGetAllCategories;
