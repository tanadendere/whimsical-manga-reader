export interface IChapter {
  id: number;
  chapter_number: string;
  title?: string;
  vol?: number;
  lang: string;
  is_the_last_chapter: boolean;
  group_name: string[];
  hid: string;
}
