import { apiRoutes } from "@/services/api-routes/apiRoutes";
import { Axios } from "@/lib/axios/Axios";
import { useQuery } from "@tanstack/react-query";
interface Dis {
  heading: string;
  description: string[];
  details: string[];
  icon: string;
  is_active: boolean;
}
const useGetLeafletsDiscilimar = () => {
  return useQuery({
    queryKey: [apiRoutes?.leafletDesc],
    queryFn: async () => {
      const { data } = await Axios.get(apiRoutes?.leafletDesc);
      return data?.data as Dis;
    },
  });
};

export default useGetLeafletsDiscilimar;
