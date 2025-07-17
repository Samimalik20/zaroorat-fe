import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetSalesPersonWithUser = (userId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["salesperson", userId],
    queryFn: () =>
      http.salesman.salesmanControllerGetSalesmanByUser(userId)
  });
  const salesman = data?.data;

  return { salesman, isLoading };
};

export default useGetSalesPersonWithUser;
