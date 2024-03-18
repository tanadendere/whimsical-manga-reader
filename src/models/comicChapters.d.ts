export interface ComicChapters {
  chapters: Chapter[];
  total: number;
  limit: number;
}

export interface Chapter {
  id: number;
  chap: string;
  title: any;
  vol: any;
  lang: string;
  created_at: string;
  updated_at: string;
  up_count: number;
  down_count: number;
  is_the_last_chapter: boolean;
  group_name: string[];
  hid: string;
  identities: any;
  md_chapters_groups: MdChaptersGroup[];
}

export interface MdChaptersGroup {
  md_groups: MdGroups;
}

export interface MdGroups {
  title: string;
  slug: string;
}
