import { TopComics } from "../models/homePageData";
import { IComicData } from "../models/comicData";
import { IComicChapters, ISingularChapterMeta } from "../models/chapterData";
import { IGenreData } from "../models/genreData";

// get top manga
export function getTrendingManga(): Promise<TopComics> {
  return fetch(
    "https://api.comick.io/top?type=trending&comic_types=manga&accept_mature_content=false"
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.error("Error getting trending manga", error));
}

// search for comics
export function search(query: string): Promise<IComicData[]> {
  return fetch(
    `https://api.comick.io/v1.0/search/?type=comic&page=1&limit=15&showall=false&q=${query}&t=false`
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.error("Error in search", error));
}

// get the comic's information
export function getComicInfo(slug: string): Promise<IComicData> {
  return fetch(`https://api.comick.io/comic/${slug}/`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.error("Error getting comic information", error));
}

// get chapters of a comic
export function getComicChapters(comicHid: string): Promise<IComicChapters> {
  return fetch(
    `https://api.comick.io/comic/${comicHid}/chapters?limit=20000&lang=en`
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) =>
      console.error("Error getting chapters of a comic", error)
    );
}

// get the chapter
export function getAChapter(chapterHid: string): Promise<ISingularChapterMeta> {
  return fetch(`https://api.comick.io/chapter/${chapterHid}/`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.error("Error getting a chapter", error));
}

export function getGenres(): Promise<IGenreData[]> {
  return fetch("https://api.comick.io/genre/")
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.error("Error getting the genres", error));
}
