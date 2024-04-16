import { Link } from "react-router-dom";
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
          <Link
            to={`comic/${comic?.slug}`}
            key={comic.slug}
            className="inline-block text-black text-center no-underline p-3.5"
          >
            <ComicCard comic={comic} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default ComicScroll;
