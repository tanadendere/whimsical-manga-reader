import { Listbox, ListboxItem } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { getAChapter } from "../utilities/api";
import { getMangaImageURLs } from "../utilities/transformAPIdata";

function MangaReaderPage({ chapterHid }: { chapterHid: string }) {
  const { isPending, isLoading, isError, data } = useQuery({
    queryKey: ["mangaImages", chapterHid],
    queryFn: () => getAChapter(chapterHid),
  });

  if (isPending || isLoading) return <h1>Loading....</h1>;
  if (isError) return <h1>Opps! Error loading data!</h1>;

  if (data) {
    const mangaImages = getMangaImageURLs(data);
    return (
      <>
        <div className="w-full border-small px-1 py-2 border-default-200 dark:border-default-100">
          <Listbox>
            {mangaImages.map((mangaImage) => (
              <ListboxItem key={mangaImage.b2key}>
                <img src={mangaImage.src} alt="Manga Image" />
              </ListboxItem>
            ))}
          </Listbox>
        </div>
      </>
    );
  }
}

export default MangaReaderPage;
