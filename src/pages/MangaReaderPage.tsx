import { Listbox, ListboxItem } from "@nextui-org/react";
import { IMangaImage } from "../models/mangaImageData";

function MangaReaderPage({ mangaImages }: { mangaImages: IMangaImage[] }) {
  return (
    <>
      <div className="w-full border-small px-1 py-2 border-default-200 dark:border-default-100">
        <Listbox onAction={(key) => alert(key)}>
          {mangaImages.map((mangaImage) => (
            <ListboxItem key={mangaImage.id}>
              <img src={mangaImage.src} alt="Manga Image" />
            </ListboxItem>
          ))}
        </Listbox>
      </div>
    </>
  );
}

export default MangaReaderPage;
