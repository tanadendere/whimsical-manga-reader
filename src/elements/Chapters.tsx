import { Listbox, ListboxItem } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { getComicChapters } from "../utilities/api";
import { getRefinedComicChapters } from "../utilities/transformAPIdata";

function Chapters({
  latestChapter,
  comicHid,
}: {
  latestChapter: number;
  comicHid: string;
}) {
  const { isPending, isLoading, isError, data } = useQuery({
    queryKey: ["chaptersArray", comicHid],
    queryFn: () => getComicChapters(comicHid),
  });

  if (isPending || isLoading) return <h1>Loading....</h1>;
  if (isError) return <h1>Opps! Error loading data!</h1>;

  if (data) {
    const comicChapters = getRefinedComicChapters(latestChapter, data);

    return (
      <>
        <h1>Chapters</h1>
        <div className="w-full border-small px-1 py-2 border-default-200 dark:border-default-100">
          <Listbox onAction={(key) => alert(key)}>
            {comicChapters.map((chapter) => (
              <ListboxItem key={chapter.hid}>
                Chapter {chapter.chap}
              </ListboxItem>
            ))}
          </Listbox>
        </div>
      </>
    );
  }
}

export default Chapters;
