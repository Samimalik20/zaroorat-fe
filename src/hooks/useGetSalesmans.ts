import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetSalesmans = (city?: string, name?: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["salesmans", city, name],
    queryFn: () =>
      http.salesman.salesmanControllerGetAll({
        city: city,
        name: name,
      }),
  });
  const salesmans = data?.data;

  return { salesmans, isLoading };
};

export default useGetSalesmans;
