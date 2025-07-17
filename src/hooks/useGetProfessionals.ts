import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetProfessionals = (
  city?: string,
  address?: string,
  profession?: any
) => {
  const { data, isLoading } = useQuery({
    queryKey: ["professionals", city, address, profession],
    queryFn: () =>
      http.professionals.professionalControllerFindAll({
        address,
        city,
        profession,
      }),
   
  });

  const professionals = data?.data;

  return { professionals, isLoading };
};

export default useGetProfessionals;
