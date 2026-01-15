import { Axios } from "@/lib/axios/Axios";
import { apiRoutes } from "@/services/api-routes/apiRoutes";
import { delayOptions } from "@/lib/tanstack-react-query/delayOptions";
import { useQuery } from "@tanstack/react-query";
import { Reviews } from "../../types/reviews.types";
const useGetAllReviews = () => {
  return useQuery({
    queryKey: [apiRoutes?.reviews],
    queryFn: async () => {
      const { data } = await Axios.get(apiRoutes?.reviews);
      return data?.data as Reviews[];
    },
    ...delayOptions,
  });
};

export default useGetAllReviews;
