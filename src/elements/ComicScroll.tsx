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
      <h4 className="text-medium font-medium">{heading}</h4>
      <div className="major-cities-scroll bg-white overflow-auto whitespace-nowrap mb-6">
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
