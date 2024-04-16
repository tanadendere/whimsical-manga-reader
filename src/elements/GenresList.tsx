import GenrePill from "../atoms/GenrePill";
import { getGenres } from "../utilities/api";
import { useQuery } from "@tanstack/react-query";
import { sortGenres } from "../utilities/transformAPIdata";

function GenreList() {
  const { isPending, isLoading, isError, data } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });

  if (isPending || isLoading) return <h1>Loading....</h1>;
  if (isError) return <h1>Oops! Error loading data!</h1>;

  if (data) {
    const genres = sortGenres(data, "comic_count");
    return (
      <>
        <h1 className="font-semibold m-3">Explore genres</h1>

        <ul
          className="h-full flex flex-wrap gap-2 justify-center"
          aria-label="Genres"
          onClick={(key) => alert(key)}
        >
          {genres.map((genre) => (
            <li key={genre.id}>
              <GenrePill genre={genre} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default GenreList;
