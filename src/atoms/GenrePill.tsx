import { IGenreData } from "../models/genreData";
import randomColor from "randomcolor";
import React from "react";

function GenrePill({ genre }: { genre: IGenreData }) {
  const bgColor = randomColor();
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`flex flex-col items-center justify-center border-solid border-2 rounded-md w-[200px] h-[90px]`}
    >
      <div className="font-extrabold text-lg">{genre.name}</div>
      <div className="text-xs">
        <span className="font-semibold">{genre.comic_count}</span>{" "}
        <span> Comics </span>
      </div>
    </div>
  );
}

export default GenrePill;
