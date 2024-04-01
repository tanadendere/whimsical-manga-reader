import { NextUIProvider } from "@nextui-org/react";
import HomePage from "./pages/HomePage";
import ComicBreakdownPage from "./pages/ComicBreakdownPage";
import SearchPage from "./pages/SearchPage";
import Chapters from "./elements/Chapters";
import MangaReaderPage from "./pages/MangaReaderPage";
import GenreList from "./elements/GenresList";
import Navigation from "./elements/Navigation";

function App() {
  return (
    <NextUIProvider>
      <Navigation isLoggedIn={true}></Navigation>
    </NextUIProvider>
  );
}

export default App;
