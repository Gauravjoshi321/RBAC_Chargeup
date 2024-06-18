import { useQuery } from "@tanstack/react-query";
import getData, { checkLoggedIn } from "../API/dataAPICall";

export default function useData(token) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getData(token),
    retry: false
  })

  console.log(error);


  return { data, error, isLoading };
}

export function useCheckLoggedIn(token) {

  const { data, error, isLoading } = useQuery({
    queryKey: ["CheckLoggedIn"],
    queryFn: () => checkLoggedIn(token),
    retry: false
  })

  console.log(error);

  return { data, error, isLoading };
}

