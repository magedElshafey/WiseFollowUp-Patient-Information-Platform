import { apiRoutes } from "@/services/api-routes/apiRoutes";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "@/lib/axios/Axios";
import type { TrustTypes } from "../../components/trust/trust.types";
const useGetTrust = () => {
  return useQuery({
    queryKey: [apiRoutes?.trust],
    queryFn: async () => {
      const { data } = await Axios.get(apiRoutes?.trust);
      return data?.data as TrustTypes;
    },
  });
};

export default useGetTrust;
