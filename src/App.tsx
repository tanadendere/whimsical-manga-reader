import Chapters from "./elements/Chapters";
import GenreList from "./elements/GenresList";
import { IComicData } from "./models/comicData";
import { IGenreData } from "./models/genreData";
import ComicBreakdownPage from "./pages/ComicBreakdownPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import "./styles/App.css";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  let comic: IComicData = {
    name: "Comic 1",
  };

  // let genres: IGenreData[] = [
  //   { genreName: "Action" },
  //   { genreName: "Adventure" },
  //   { genreName: "Fantasy" },
  //   { genreName: "Comedy" },
  //   { genreName: "Drama" },
  //   { genreName: "Sporty" },
  // ];
  return (
    <NextUIProvider>
      <>
        <Chapters latestChapter={206} />
        {/* <LoginPage></LoginPage>
        <HomePage />
        <GenreList genres={genres} /> */}
      </>
    </NextUIProvider>
  );
}

export default App;
