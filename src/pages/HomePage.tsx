import ComicScroll from "../elements/ComicScroll";
import Navigation from "../elements/Navigation";
import { Divider } from "@nextui-org/react";
import { IComicData } from "../models/comicData";

function HomePage() {
  let comics: IComicData[] = [
    { name: "Comic1" },
    { name: "Comic2" },
    { name: "Comic3" },
    { name: "Comic4" },
    { name: "Comic5" },
    { name: "Comic6" },
    { name: "Comic7" },
    { name: "Comic8" },
  ];
  return (
    <>
      <Navigation isLoggedIn={true} />
      <div className="max-w-md">
        <div className="space-y-1">
          <ComicScroll heading="Continue Reading" comics={comics}></ComicScroll>
        </div>
        <Divider className="my-4" />
        <div className="space-y-1">
          <ComicScroll heading="Trending" comics={comics}></ComicScroll>
        </div>
      </div>
    </>
  );
}

export default HomePage;
