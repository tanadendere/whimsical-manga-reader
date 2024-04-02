import { NextUIProvider } from "@nextui-org/react";
import HomePage from "./pages/HomePage";
import ComicBreakdownPage from "./pages/ComicBreakdownPage";
import SearchPage from "./pages/SearchPage";
import Chapters from "./elements/Chapters";
import MangaReaderPage from "./pages/MangaReaderPage";
import GenreList from "./elements/GenresList";
import Navigation from "./elements/Navigation";
import LoginPage from "./LoginPage/LoginPage";

function App() {
  return (
    <NextUIProvider>
      <SearchPage query="Solo levelling"></SearchPage>
    </NextUIProvider>
  );
}

export default App;
