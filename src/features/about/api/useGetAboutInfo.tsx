import { Axios } from "@/lib/axios/Axios";
import { apiRoutes } from "@/services/api-routes/apiRoutes";
import { useQuery } from "@tanstack/react-query";
import { delayOptions } from "@/lib/tanstack-react-query/delayOptions";
import { AboutInfo } from "../types/aboutInfo.types";
const useGetAboutInfo = () => {
  return useQuery({
    queryKey: [apiRoutes?.aboutInfo],
    queryFn: async () => {
      const { data } = await Axios.get(apiRoutes?.aboutInfo);
      return data?.data as AboutInfo;
    },
    ...delayOptions,
  });
};

export default useGetAboutInfo;
