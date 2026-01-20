import { Axios } from "@/lib/axios/Axios";
import { apiRoutes } from "@/services/api-routes/apiRoutes";
import { useQuery } from "@tanstack/react-query";
import { delayOptions } from "@/lib/tanstack-react-query/delayOptions";
import { AboutFounders } from "../types/aboutFounders";
const useGetAboutFounders = () => {
  return useQuery({
    queryKey: [apiRoutes?.founders],
    queryFn: async () => {
      const { data } = await Axios.get(apiRoutes?.founders);
      return data?.data as AboutFounders;
    },
    ...delayOptions,
  });
};

export default useGetAboutFounders;
