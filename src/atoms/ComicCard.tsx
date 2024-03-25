import { IComicData } from "../models/comicData";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

function ComicCard({ comic }: { comic: IComicData }) {
  return (
    <>
      <Card className="py-4 h-64">
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{comic.name}</h4>
        </CardHeader>
      </Card>
    </>
  );
}

export default ComicCard;
