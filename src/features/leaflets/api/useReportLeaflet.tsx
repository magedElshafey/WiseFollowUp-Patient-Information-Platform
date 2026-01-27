import { useMutation } from "@tanstack/react-query";
import { apiRoutes } from "@/services/api-routes/apiRoutes";
import { Axios } from "@/lib/axios/Axios";
const useReportLeaflet = () => {
  return useMutation({
    mutationKey: [apiRoutes?.report],
    mutationFn: async (id: string) => {
      const { data } = await Axios.post(apiRoutes?.report, { leaflet: id });
      return data;
    },
  });
};

export default useReportLeaflet;
