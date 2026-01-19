import { useQuery } from "@tanstack/react-query";
import { apiRoutes } from "@/services/api-routes/apiRoutes";
import { Axios } from "@/lib/axios/Axios";
import type { HeroTypes } from "../../components/hero/types/hero.types";
const useGetHero = () => {
  return useQuery({
    queryKey: [apiRoutes?.hero],
    queryFn: async () => {
      const { data } = await Axios.get(apiRoutes?.hero);
      return data?.data as HeroTypes;
    },
  });
};

export default useGetHero;
