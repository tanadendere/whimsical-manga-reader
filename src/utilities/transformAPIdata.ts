import { ICarouselComic, TopComics } from "../models/homePageData";

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

// function getCompletedComics() ICarouselComic[] {

// }
