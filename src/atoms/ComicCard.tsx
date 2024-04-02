import { ICarouselComic } from "../models/homePageData";
import { getURL } from "../utilities/transformAPIdata";
import React from "react";

function ComicCard({ comic }: { comic: ICarouselComic }) {
  return (
    <div className="flex flex-col w-56">
      <div>
        <img
          alt="Manga Title Image"
          className="object-cover rounded-xl"
          src={getURL(comic.md_covers[0]?.b2key)}
        />
      </div>
      <div className="font-bold text-large truncate">{comic.title}</div>
    </div>
  );
}

export default ComicCard;
