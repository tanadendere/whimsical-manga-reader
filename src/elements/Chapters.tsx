import { Listbox, ListboxItem } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { BiArrowBack } from "react-icons/bi";
import { getComicChapters } from "../utilities/api";
import { getRefinedComicChapters } from "../utilities/transformAPIdata";
import React from "react";

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
      <div className="flex flex-col">
        <div className="flex align-middle">
          <BiArrowBack className="m-3 size-6" />
          <h1 className="p-2 pb-0 text-start text-2xl">Chapters</h1>
        </div>
        <span className="flex pl-2 gap-2">
          <img
            className="ml-1 size-6"
            src="https://flagsapi.com/GB/flat/64.png"
            alt="Great Britain logo"
          ></img>
          <h2 className="text-start text-sm">in English</h2>
        </span>

        <Listbox className="w-auto" onAction={(key) => alert(key)}>
          {comicChapters.map((chapter) => (
            <ListboxItem
              aria-label={"Chapter" + chapter.chap}
              className="text-start"
              key={chapter.hid}
            >
              Chapter {chapter.chap}
              {""}
              {chapter.title && <span>: {chapter.title}</span>}
            </ListboxItem>
          ))}
        </Listbox>
      </div>
    );
  }
}

export default Chapters;
