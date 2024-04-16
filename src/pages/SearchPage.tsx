import { useQuery } from "@tanstack/react-query";
import { search } from "../utilities/api";
import { getSearchResultsData } from "../utilities/transformAPIdata";
import SearchResultCard from "../atoms/SearchResultCard";
import {Link, useParams} from "react-router-dom";

function SearchPage() {
  const {searchTerm} = useParams()
  const { isPending, isLoading, isError, data } = useQuery({
    queryKey: ["search", searchTerm],
    queryFn: () => search(searchTerm ?? ''),
  });

  if (isPending || isLoading) return <h1>Loading....</h1>;
  if (isError) return <h1>Oops! Error loading data!</h1>;

  if (data) {
    const searchResults = getSearchResultsData(data);
    return (
      <>
        {searchResults.map((result) => (
          <Link
            key={result.id}
            className="inline-block text-black text-center no-underline p-3.5"
            to={`/comic/${result.slug}`}
          >
            <SearchResultCard comic={result} />
          </Link>
        ))}
      </>
    );
  }
}

export default SearchPage;
