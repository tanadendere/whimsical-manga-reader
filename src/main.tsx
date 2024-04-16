import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import LoginPage from "./LoginPage/LoginPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import ComicBreakdownPage from "./pages/ComicBreakdownPage.tsx";
import Chapters from "./elements/Chapters.tsx";
import MangaReaderPage from "./pages/MangaReaderPage.tsx";
import {NextUIProvider} from "@nextui-org/react";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: "/comic/:comicSlug",
    element: <ComicBreakdownPage />,
  },
  {
    path: "/comic/chapters/:comicHid/:latestChapter",
    element: <Chapters />,
  },
  {
    path: "/comic/reader/:chapterHid",
    element: <MangaReaderPage />,
  },
  {
    path: "/search/:searchTerm",
    element: <SearchPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
