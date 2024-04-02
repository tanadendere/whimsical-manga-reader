import ComicScroll from "../elements/ComicScroll";
import Navigation from "../elements/Navigation";
import { Divider } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { getTrendingManga } from "../utilities/api";
import { getHomePageData } from "../utilities/transformAPIdata";
import React from "react";

function HomePage() {
  const { isPending, isError, data } = useQuery({
    queryKey: ["trending"],
    queryFn: getTrendingManga,
  });

  if (isPending) return <h1>Loading....</h1>;
  if (isError) return <h1>Opps! Error loading data!</h1>;

  if (data) {
    const trendingComics = getHomePageData(data, "trending");
    const completedComics = getHomePageData(data, "completed");

    return (
      <>
        <Navigation isLoggedIn={true} />
        <div className="m-5 w-full">
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
        </div>
      </>
    );
  }
}

export default HomePage;
