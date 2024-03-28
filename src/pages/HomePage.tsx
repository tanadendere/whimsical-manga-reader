import ComicScroll from "../elements/ComicScroll";
import Navigation from "../elements/Navigation";
import { Divider } from "@nextui-org/react";
import { IComicData } from "../models/comicData";
import { useQuery } from "@tanstack/react-query";
import { getTrendingManga } from "../utilities/api";
import { getHomePageData } from "../utilities/transformAPIdata";
import { ICarouselComic } from "../models/homePageData";

function HomePage() {
  const homePageQuery = useQuery({
    queryKey: ["trending"],
    queryFn: getTrendingManga,
  });

  if (homePageQuery.isLoading) return <h1>Loading....</h1>;
  if (homePageQuery.isError) return <h1>Opps! Error loading data!</h1>;

  if (homePageQuery.data) {
    const trendingComics = getHomePageData(homePageQuery.data, "trending");
    const completedComics = getHomePageData(homePageQuery.data, "completed");

    return (
      <>
        <p></p>
        <Navigation isLoggedIn={true} />
        <div className="w-full">
          <div className="space-y-1">
            <ComicScroll
              heading="Trending"
              comics={trendingComics}
            ></ComicScroll>
          </div>
          <Divider className="my-4" />
          <div className="space-y-1">
            <ComicScroll
              heading="Recently Completed"
              comics={completedComics}
            ></ComicScroll>
          </div>
          <div className="space-y-1">
            <ComicScroll heading="Continue Reading" comics={[]}></ComicScroll>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
