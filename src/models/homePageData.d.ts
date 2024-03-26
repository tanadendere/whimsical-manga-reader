import { IMangaImage } from "./mangaImageData";

export interface TopComics {
  trending: Trending;
  completions: ICarouselComic[];
}

export interface Trending {
  "7": ICarouselComic[];
  "30": ICarouselComic[];
  "90": ICarouselComic[];
}

export interface ICarouselComic {
  slug: string;
  title: string;
  demographic?: number;
  genres: number[];
  created_at: string;
  uploaded_at: string;
  last_chapter: number;
  content_rating: string;
  md_covers: MdCover[];
}
