import { Listbox, ListboxItem } from "@nextui-org/react";

function Chapters({ latestChapter }: { latestChapter: number }) {
  const chapters = Array.from(
    { length: latestChapter + 1 },
    (_, index) => latestChapter - index
  );

  return (
    <>
      <h1>Chapters</h1>
      <div className="w-full border-small px-1 py-2 border-default-200 dark:border-default-100">
        <Listbox onAction={(key) => alert(key)}>
          {chapters.map((chapter) => (
            <ListboxItem key={chapter}>Chapter {chapter}</ListboxItem>
          ))}
        </Listbox>
      </div>
    </>
  );
}

export default Chapters;
