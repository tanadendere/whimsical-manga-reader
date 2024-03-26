import { IMangaImage } from "./mangaImageData";

export interface IComicData {
  comic: IComic;
  artists: Artist[];
  authors: Author[];
  langList: string[];
}

export interface IComic {
  id: number;
  hid: string;
  title: string;
  country: string;
  last_chapter: number;
  hentai: boolean;
  user_follow_count: number;
  follow_count: number;
  desc: string;
  slug: string;
  year: number;
  content_rating: string;
  translation_completed: boolean;
  chapter_numbers_reset_on_new_volume_manual: boolean;
  md_covers: MdCover[];
  lang_name: string;
}
