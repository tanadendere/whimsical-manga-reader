import { useQuery } from "@tanstack/react-query";
import { search } from "../utilities/api";
import { getSearchResultsData } from "../utilities/transformAPIdata";

function SearchPage({ query }: { query: string }) {
  const { isPending, isLoading, isError, data } = useQuery({
    queryKey: ["search", query],
    queryFn: () => search(query),
  });

  if (isPending || isLoading) return <h1>Loading....</h1>;
  if (isError) return <h1>Opps! Error loading data!</h1>;

  if (data) {
    const searchResults = getSearchResultsData(data);
    return <>{/* TODO: DISPLAY SEARCH RESULTS */}</>;
  }
}

export default SearchPage;
