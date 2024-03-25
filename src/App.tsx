import GenreList from "./elements/GenresList";
import { IGenreData } from "./models/genreData";
import "./styles/App.css";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  let genres: IGenreData[] = [
    {
      genreName: "Action",
    },
    {
      genreName: "Adventure",
    },
    {
      genreName: "Sporty",
    },
  ];
  return (
    <NextUIProvider>
      <>
        <GenreList genres={genres} />
      </>
    </NextUIProvider>
  );
}

export default App;
