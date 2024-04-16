import {
  IChapter,
  IComicChapters,
  ISingularChapterMeta,
} from "../models/chapterData";
import { Creator, IComic, IComicData } from "../models/comicData";
import { IGenreData } from "../models/genreData";
import { ICarouselComic, TopComics } from "../models/homePageData";
import { IMangaImage } from "../models/mangaImageData";

export function getHomePageData(
  comics: TopComics,
  sectionName: string
): ICarouselComic[] {
  switch (sectionName) {
    case "trending":
      return comics?.trending[30].filter((comic) => comic.content_rating === "safe");
    case "completed":
      return comics?.completions.filter((comic) => comic.content_rating === "safe");
    default:
      return [];
  }
}

export function getSearchResultsData(searchResults: IComic[]): IComic[] {
  searchResults.filter((result) => result?.content_rating === "safe");
  return searchResults;
}

export function getComicBreakdown(comicData: IComicData): IComic {
  const thisComic: IComic = comicData?.comic;
  if (thisComic?.content_rating === "safe") {
    thisComic.numAuthors = 1;
    if (comicData.authors.length > 1) {
      thisComic.numAuthors = 2;
    }
    thisComic.author = getAuthors(comicData.authors);
    return thisComic;
  } else {
    return {} as IComic;
  }
}

function getAuthors(authors: Creator[]) {
  let comicAuthors: string = "";
  for (const author of authors) {
    if (comicAuthors.length > 0) {
      comicAuthors = comicAuthors.concat(", ");
    }
    comicAuthors = comicAuthors.concat(author.name);
  }
  return comicAuthors;
}

export function getRefinedComicChapters(
  latestChapter: number,
  rawComicChapters: IComicChapters
): IChapter[] {
  const comicChapters: IChapter[] = rawComicChapters?.chapters;
  const refinedComicChapters: IChapter[] = [];

  let chapterCount = latestChapter;
  for (const chapter of comicChapters) {
    if (Number(chapter.chap) === chapterCount) {
      refinedComicChapters.push(chapter);
      chapterCount--;
    }
  }
  return refinedComicChapters;
}

export function getMangaImageURLs(
  chapterData: ISingularChapterMeta
): IMangaImage[] {
  const mangaImages = chapterData?.chapter?.md_images;
  for (const image of mangaImages) {
    image.src = getURL(image.b2key);
  }
  return mangaImages;
}

export function getURL(b2key: string): string {
  return `https://meo3.comick.pictures/${b2key}`;
}

export function roundNumbers(num: number): string {
  if (num < 999) {
    return "" + num;
  } else if (num < 999999) {
    const newNum = num / 1000;
    return "" + Math.round(newNum * 10) / 10 + "K";
  } else {
    const newNum = num / 1000000;
    return "" + Math.round(newNum * 10) / 10 + "M";
  }
}

export function sortGenres(
  arr: IGenreData[],
  comicCount: keyof IGenreData
): IGenreData[] {
  return arr.slice().sort((a, b) => {
    if (a[comicCount] < b[comicCount]) {
      return 1;
    }
    if (a[comicCount] > b[comicCount]) {
      return -1;
    }
    return 0;
  });
}
