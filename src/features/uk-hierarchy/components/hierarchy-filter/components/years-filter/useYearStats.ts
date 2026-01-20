import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { apiRoutes } from "@/services/api-routes/apiRoutes";
import { Axios } from "@/lib/axios/Axios";

export interface YearStat {
    year: number;
    count: number;
}

interface Response {
    from: number;
    to: number;
    data: YearStat[];
}

export const useYearStats = () =>
    useQuery({
        queryKey: [apiRoutes.years],
        queryFn: async () => {
            const { data } = await Axios.get(apiRoutes.years);
            console.log("data from years query", data)
            return data.data as Response;
        },
        staleTime: 5 * 60 * 1000,
        placeholderData: keepPreviousData,
    });
