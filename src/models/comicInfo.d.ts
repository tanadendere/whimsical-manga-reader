export interface ComicInfo {
  firstChap: FirstChap;
  comic: Comic;
  artists: Artist[];
  authors: Author[];
  langList: string[];
  recommendable: boolean;
  demographic: any;
  englishLink: any;
  matureContent: boolean;
  checkVol2Chap1: boolean;
}

export interface FirstChap {
  chap: string;
  hid: string;
  lang: string;
  group_name: string[];
  vol: any;
}

export interface Comic {
  id: number;
  hid: string;
  title: string;
  country: string;
  status: number;
  links: Links;
  last_chapter: number;
  chapter_count: number;
  demographic: any;
  hentai: boolean;
  user_follow_count: number;
  follow_rank: number;
  comment_count: number;
  follow_count: number;
  desc: string;
  parsed: string;
  slug: string;
  mismatch: any;
  year: number;
  bayesian_rating: string;
  rating_count: number;
  content_rating: string;
  translation_completed: boolean;
  chapter_numbers_reset_on_new_volume_manual: boolean;
  final_chapter: any;
  final_volume: any;
  noindex: boolean;
  adsense: boolean;
  recommendations: Recommendation[];
  relate_from: RelateFrom[];
  md_titles: MdTitle[];
  md_comic_md_genres: MdComicMdGenre[];
  md_covers: MdCover2[];
  mu_comics: MuComics;
  iso639_1: string;
  lang_name: string;
  lang_native: string;
}

export interface Links {
  al: string;
  ap: string;
  kt: string;
  mu: string;
  nu: string;
  mal: string;
  raw: string;
  engtl: string;
}

export interface Recommendation {
  up: number;
  down: number;
  total: number;
  relates: Relates;
}

export interface Relates {
  title: string;
  slug: string;
  hid: string;
  md_covers: MdCover[];
}

export interface MdCover {
  vol?: string;
  w: number;
  h: number;
  b2key: string;
}

export interface RelateFrom {
  relate_to: RelateTo;
  md_relates: MdRelates;
}

export interface RelateTo {
  slug: string;
  title: string;
}

export interface MdRelates {
  name: string;
}

export interface MdTitle {
  title: string;
  lang: string;
}

export interface MdComicMdGenre {
  md_genres: MdGenres;
}

export interface MdGenres {
  name: string;
  type?: string;
  slug: string;
  group: string;
}

export interface MdCover2 {
  vol: string;
  w: number;
  h: number;
  b2key: string;
}

export interface MuComics {
  mu_comic_publishers: MuComicPublisher[];
  licensed_in_english: boolean;
  mu_comic_categories: MuComicCategory[];
}

export interface MuComicPublisher {
  mu_publishers: MuPublishers;
}

export interface MuPublishers {
  title: string;
  slug: string;
}

export interface MuComicCategory {
  mu_categories: MuCategories;
  positive_vote: number;
  negative_vote: number;
}

export interface MuCategories {
  title: string;
  slug: string;
}

export interface Artist {
  name: string;
  slug: string;
}

export interface Author {
  name: string;
  slug: string;
}
