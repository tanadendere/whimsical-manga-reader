import { Divider, Button } from "@nextui-org/react";
import { BiArrowBack } from "react-icons/bi";

import Navigation from "../elements/Navigation";
import { useQuery } from "@tanstack/react-query";
import { getComicInfo } from "../utilities/api";
import {
  getComicBreakdown,
  getURL,
  roundNumbers,
} from "../utilities/transformAPIdata";
import { GiSpellBook } from "react-icons/gi";
import { bgURL } from "../styles/getBackgroundImageURL";
import { AiFillStar } from "react-icons/ai";

function ComicBreakdownPage({ slug }: { slug: string }) {
  const { isPending, isLoading, isError, data } = useQuery({
    queryKey: ["search", slug],
    queryFn: () => getComicInfo(slug),
  });

  if (isPending || isLoading) return <h1>Loading....</h1>;
  if (isError) return <h1>Opps! Error loading data!</h1>;

  if (data) {
    const comicBreakdown = getComicBreakdown(data);
    if (JSON.stringify(comicBreakdown) === "{}") {
      return <h1>Opps! Error loading data!</h1>;
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

          <Button
            className="bg-prussian-blue text-[white] font-semibold mx-auto rounded-3xl"
            type="submit"
            endContent={<GiSpellBook />}
          >
            Read
          </Button>

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

        {/* <div className="max-w-md">
          <div className="space-y-1">
            <h4 className="text-medium font-medium">{comicBreakdown?.title}</h4>
          </div>
          <Divider className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-small">
            <div>Image</div>
            <Divider orientation="vertical" />
            <div>Comic 'Meta' data</div>
          </div>
          <Button color="primary">Read</Button>
          <div>Description</div>
        </div> */}
      </>
    );
  }
}

export default ComicBreakdownPage;
