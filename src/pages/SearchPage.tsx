import { useQuery } from "@tanstack/react-query";
import { search } from "../utilities/api";
import { getSearchResultsData } from "../utilities/transformAPIdata";
import SearchResultCard from "../atoms/SearchResultCard";
import React from "react";

function SearchPage({ query }: { query: string }) {
  const { isPending, isLoading, isError, data } = useQuery({
    queryKey: ["search", query],
    queryFn: () => search(query),
  });

  if (isPending || isLoading) return <h1>Loading....</h1>;
  if (isError) return <h1>Opps! Error loading data!</h1>;

  if (data) {
    const searchResults = getSearchResultsData(data);
    console.log(searchResults);
    return (
      <>
        {searchResults.map((result) => (
          <a
            key={result.id}
            className="inline-block text-black text-center no-underline p-3.5"
            href="#"
          >
            <SearchResultCard comic={result} />
          </a>
        ))}
      </>
    );
    SearchResultCard;
  }
}

export default SearchPage;
