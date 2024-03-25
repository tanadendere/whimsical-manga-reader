import { Divider, Button } from "@nextui-org/react";
import { IComicData } from "../models/comicData";
import Navigation from "../elements/Navigation";

function ComicBreakdownPage({ comic }: { comic: IComicData }) {
  return (
    <>
      <Navigation isLoggedIn={true}></Navigation>
      <div className="max-w-md">
        <div className="space-y-1">
          <h4 className="text-medium font-medium">{comic.name}</h4>
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

export default ComicBreakdownPage;
