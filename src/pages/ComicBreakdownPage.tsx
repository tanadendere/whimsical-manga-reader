import { Divider, Button } from "@nextui-org/react";
import Navigation from "../elements/Navigation";
import { useQuery } from "@tanstack/react-query";
import { getComicInfo } from "../utilities/api";
import { getComicBreakdown } from "../utilities/transformAPIdata";

function ComicBreakdownPage({ slug }: { slug: string }) {
  const { isPending, isLoading, isError, data } = useQuery({
    queryKey: ["search", slug],
    queryFn: () => getComicInfo(slug),
  });

  if (isPending || isLoading) return <h1>Loading....</h1>;
  if (isError) return <h1>Opps! Error loading data!</h1>;

  if (data) {
    const comicBreakdown = getComicBreakdown(data);
    return (
      <>
        <Navigation isLoggedIn={true}></Navigation>
        <div className="max-w-md">
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
        </div>
      </>
    );
  }
}

export default ComicBreakdownPage;
