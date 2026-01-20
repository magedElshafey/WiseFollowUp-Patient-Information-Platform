import { Axios } from "@/lib/axios/Axios";
import { apiRoutes } from "@/services/api-routes/apiRoutes";
import { useQuery } from "@tanstack/react-query";
import { delayOptions } from "@/lib/tanstack-react-query/delayOptions";
import type { HeroAbout } from "../types/aboutHero.types";
const useGetAboutHero = () => {
  return useQuery({
    queryKey: [apiRoutes?.aboutHero],
    queryFn: async () => {
      const { data } = await Axios.get(apiRoutes?.aboutHero);
      return data?.data as HeroAbout;
    },
    ...delayOptions,
  });
};

export default useGetAboutHero;
