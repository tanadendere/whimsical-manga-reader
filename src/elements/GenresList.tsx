import { getGenres } from "../utilities/api";
import { useQuery } from "@tanstack/react-query";

function GenreList() {
  const { isPending, isLoading, isError, data } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });

  if (isPending || isLoading) return <h1>Loading....</h1>;
  if (isError) return <h1>Opps! Error loading data!</h1>;

  if (data) {
    const genres = data;
    return (
      <>
        <h1>Explore genres</h1>
        <div className="flex flex-col gap-2">
          <div className="w-full border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
            TODO: grid of genres and cute icons matching them
          </div>
        </div>
      </>
    );
  }
}

export default GenreList;
