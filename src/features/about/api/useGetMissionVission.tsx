import { Axios } from "@/lib/axios/Axios";
import { apiRoutes } from "@/services/api-routes/apiRoutes";
import { useQuery } from "@tanstack/react-query";
import { delayOptions } from "@/lib/tanstack-react-query/delayOptions";
import type { Card } from "../types/vision.types";
const useGetMissionVission = () => {
  return useQuery({
    queryKey: [apiRoutes?.vision],
    queryFn: async () => {
      const { data } = await Axios.get(apiRoutes?.vision);
      return data?.data as Card[];
    },
    ...delayOptions,
  });
};

export default useGetMissionVission;
