import { IComicData } from "../models/comicData";

function ComicCard({ comic }: { comic: IComicData }) {
  return (
    <>
      <div>{comic.name}</div>
    </>
  );
}

export default ComicCard;
