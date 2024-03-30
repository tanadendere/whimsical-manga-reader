import {
  IChapter,
  IComicChapters,
  ISingularChapterMeta,
} from "../models/chapterData";
import { IComic, IComicData } from "../models/comicData";
import { ICarouselComic, TopComics } from "../models/homePageData";
import { IMangaImage } from "../models/mangaImageData";

export function getHomePageData(
  comics: TopComics,
  sectionName: string
): ICarouselComic[] {
  switch (sectionName) {
    case "trending":
      const trendingData: ICarouselComic[] = comics?.trending[30];
      trendingData.filter((comic) => comic.content_rating === "safe");
      return trendingData;
    case "completed":
      const completedData: ICarouselComic[] = comics?.completions;
      completedData.filter((comic) => comic.content_rating === "safe");
      return completedData;
    default:
      return [];
  }
}

export function getSearchResultsData(
  searchResults: IComicData[]
): IComicData[] {
  searchResults.filter((result) => result?.comic?.content_rating === "safe");
  return searchResults;
}

export function getComicBreakdown(comicData: IComicData): IComic {
  const thisComic: IComic = comicData?.comic;
  if (thisComic?.content_rating === "safe") {
    return thisComic;
  } else {
    return {} as IComic;
  }
}

export function getRefinedComicChapters(
  latestChapter: number,
  rawComicChapters: IComicChapters
): IChapter[] {
  const comicChapters: IChapter[] = rawComicChapters?.chapters;
  const refinedComicChapters: IChapter[] = [];

  let chapterCount = latestChapter;
  for (let chapter of comicChapters) {
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
  for (let image of mangaImages) {
    image.src = getURL(image.b2key);
  }
  return mangaImages;
}

export function getURL(b2key: string): string {
  return `https://meo3.comick.pictures/${b2key}`;
}
