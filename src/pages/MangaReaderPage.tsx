import { useQuery } from "@tanstack/react-query";
import { getAChapter } from "../utilities/api";
import { getMangaImageURLs } from "../utilities/transformAPIdata";
import React from "react";
import { useParams } from "react-router-dom";

function MangaReaderPage() {
  const { chapterHid } = useParams();

  if (!chapterHid) {
    return <h1>Oh no, we cannot retrieve this chapter at the moment</h1>;
  }

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
        <div className="w-full flex justify-center">
          <ul className="p-0 gap-0">
            {mangaImages.map((mangaImage) => (
              <li key={mangaImage.b2key} className="p-0">
                <img src={mangaImage.src} alt="Manga Image" />
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default MangaReaderPage;
