import { IComic } from "../models/comicData";
import { getURL } from "../utilities/transformAPIdata";

function SearchResultCard({ comic }: { comic: IComic }) {
  function truncateParagraph(paragraph: string): string {
    const maxlength = 80;
    if (paragraph.length <= maxlength) {
      return paragraph;
    } else {
      return paragraph.slice(0, maxlength) + "...";
    }
  }
  return (
    <div className="flex items-center gap-2">
      <img
        src={getURL(comic.md_covers[0].b2key)}
        alt="Manga Title Image"
        className="w-20"
      />
      <div className="flex flex-col items-start">
        <h3 className="text-prussian-blue font-extrabold text-xl">
          {comic.title}
        </h3>
        <div className="flex gap-1 text-small">
          <span>{comic.last_chapter} Chapters </span>
          <span className="font-bold text-s">
            {comic.translation_completed ? "Completed" : "In Progress"}
          </span>
        </div>
        <p className="text-xs truncate">{truncateParagraph(comic.desc)}</p>
      </div>
    </div>

    // <div className="flex ">
    //   <div>
    //     <img
    //       alt="Manga Title Image"
    //       className="w-[480px] object-cover rounded-xl"
    //       src={getURL(comic.md_covers[0]?.b2key)}
    //     />
    //   </div>
    //   <div className="flex flex-col">
    //     <div className="text-prussian-blue">Hello</div>
    //     <div className="flex">
    //       <span>{comic.last_chapter} Chapters</span>
    //       <span>
    //         {comic.translation_completed ? "Completed" : "In Progress"}
    //       </span>
    //     </div>
    //     <div className="truncate">{comic.desc}</div>
    //   </div>
    // </div>
  );
}

export default SearchResultCard;
