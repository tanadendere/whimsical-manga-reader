import { Divider, Button } from "@nextui-org/react";

import Navigation from "../elements/Navigation";
import { useQuery } from "@tanstack/react-query";
import { getComicInfo } from "../utilities/api";
import {
  getComicBreakdown,
  getURL,
  roundNumbers,
} from "../utilities/transformAPIdata";
import { GiSpellBook } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function ComicBreakdownPage() {
  const { comicSlug } = useParams();

  const { isPending, isLoading, isError, data } = useQuery({
    queryKey: ["search", comicSlug],
    queryFn: () => getComicInfo(comicSlug ?? ''),
    enabled: !!comicSlug
  });

  if (!comicSlug) {
    return <h1>This comic is not available right now</h1>;
  }

  if (isPending || isLoading) return <h1>Loading....</h1>;
  if (isError){
    return <h1>Oops! Error loading data!</h1>;
  }

  if (data) {
    const comicBreakdown = getComicBreakdown(data);
    if (JSON.stringify(comicBreakdown) === "{}") {
      return <h1>Oops! Error loading data!</h1>;
    }
    return (
      <>
        <Navigation isLoggedIn={true}></Navigation>

        <div className="w-full flex flex-col mx-auto gap-2">
          <div className="w-full flex justify-center">
            <div className="flex-col">
              <h1 className="p-2 pb-0 pl-0 text-2xl font-bold">
                {comicBreakdown.title}
              </h1>
              <div className="flex gap-1 justify-center">
                <span className="font-bold">{comicBreakdown.last_chapter}</span>{" "}
                <span className="font-thin">Chapters</span>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="flex-col">
              <img
                src={getURL(comicBreakdown.md_covers[0]?.b2key)}
                alt="Manga Image"
                className="w-52 mx-auto rounded-md"
              />
              <span>
                {comicBreakdown.numAuthors > 1 ? (
                  <b>Authors: </b>
                ) : (
                  <b>Author: </b>
                )}
                {comicBreakdown.author}
              </span>
            </div>
          </div>
          <Link
            className="mx-auto"
            to={`/comic/chapters/${comicBreakdown.hid}/${comicBreakdown.last_chapter}`}
          >
            <Button
              className="bg-prussian-blue text-[white] font-semibold mx-auto rounded-3xl"
              type="submit"
              endContent={<GiSpellBook />}
            >
              Read
            </Button>
          </Link>

          <div className="flex justify-evenly h-14 w-5/6 mx-auto text-small rounded-md">
            <div className="flex items-center gap-1">
              <AiFillStar className="text-selective-yellow" />
              <span>{comicBreakdown.bayesian_rating}</span>
            </div>
            <Divider orientation="vertical" />
            <div className="flex items-center">
              {roundNumbers(comicBreakdown.follow_count)} Readers
            </div>
            <Divider orientation="vertical" />
            <div className="flex items-center">
              {comicBreakdown.translation_completed
                ? "Completed"
                : "In Progress"}
            </div>
          </div>

          <div className="m-4">
            <h2 className="font-bold">Description</h2>
            <p>{comicBreakdown.desc}</p>
          </div>
        </div>
      </>
    );
  }
}

export default ComicBreakdownPage;
