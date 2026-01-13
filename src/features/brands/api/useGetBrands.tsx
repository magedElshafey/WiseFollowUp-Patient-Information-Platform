import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Axios } from "@/lib/axios/Axios";
import { apiRoutes } from "@/services/api-routes/apiRoutes";
import { CountiesListType } from "@/features/categories/types/category.types";

interface UseGetBrandsOptions {
  featured?: boolean;
  delay?: Partial<UseQueryOptions<CountiesListType[]>>;
  category?: string;
}

const useGetBrands = ({
  featured,
  delay,
  category,
}: UseGetBrandsOptions = {}) => {
  return useQuery<CountiesListType[]>({
    queryKey: [apiRoutes.counties, { featured, category }],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (featured !== undefined) params.append("featured", String(featured));
      if (category !== undefined) params.append("country_id", category);

      const queryString = params.toString() ? `?${params.toString()}` : "";
      const { data } = await Axios.get(`${apiRoutes.counties}${queryString}`);

      return data?.data as CountiesListType[];
    },
    ...delay,
  });
};

export default useGetBrands;
