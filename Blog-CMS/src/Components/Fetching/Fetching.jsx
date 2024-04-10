import { useQuery } from "react-query";
import { request } from "graphql-request";

export const useGetQuery = (query, key) => {
  const baseUrl = `https://api-eu-west-2.hygraph.com/v2/clusw5c8v0u5f07wb4ymvl228/master`;

  const { data, isLoading, error } = useQuery({
    queryKey: [key],
    queryFn: async () => request(baseUrl, query),
  });

  return { data, isLoading, error };
};
