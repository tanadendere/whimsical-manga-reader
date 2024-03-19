export interface ComicChapters {
  chapters: Chapter[];
  total: number;
  limit: number;
}

export interface Chapter {
  id: number;
  chap: string;
  title: unknown;
  vol: unknown;
  lang: string;
  created_at: string;
  updated_at: string;
  up_count: number;
  down_count: number;
  is_the_last_chapter: boolean;
  group_name: string[];
  hid: string;
  identities: unknown;
  md_chapters_groups: MdChaptersGroup[];
}

export interface MdChaptersGroup {
  md_groups: MdGroups;
}

export interface MdGroups {
  title: string;
  slug: string;
}
