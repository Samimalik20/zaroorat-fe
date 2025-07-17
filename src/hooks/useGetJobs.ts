import { useQuery } from "@tanstack/react-query";
import http from "../http";

type JobQueryParams = {
  title?: string;
  category?: string;
  country?: string;
  limit?: number;
};

const useGetJobs = ({ title, category, country, limit }: JobQueryParams) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["jobs", { title, category, country, limit }],
    queryFn: () =>
      http.jobs.jobsControllerFindAll({JobQueryDto:{}}),
  });

  const jobs = data?.data;

  return { jobs, isLoading, isError };
};

export default useGetJobs;
