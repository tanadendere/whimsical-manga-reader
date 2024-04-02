import ComicCard from "../atoms/ComicCard";
import { ICarouselComic } from "../models/homePageData";
function ComicScroll({
  heading,
  comics,
}: {
  heading: string;
  comics: ICarouselComic[];
}) {
  return (
    <>
      <h2 className="text-2xl font-bold text-prussian-blue">{heading}</h2>
      <div className="bg-white overflow-auto whitespace-nowrap">
        {comics.map((comic) => (
          <a
            key={comic.id}
            className="inline-block text-black text-center no-underline p-3.5"
            href="#"
          >
            <ComicCard comic={comic} />
          </a>
        ))}
      </div>
    </>
  );
}

export default ComicScroll;
