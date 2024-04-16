import {Button} from "@nextui-org/react";
import {useQuery} from "@tanstack/react-query";
import {getComicChapters} from "../utilities/api";
import {getRefinedComicChapters} from "../utilities/transformAPIdata";
import {Link, useParams} from "react-router-dom";
import Navigation from "./Navigation.tsx";

function Chapters() {
    const {comicHid, latestChapter} = useParams();
    const {isPending, isLoading, isError, data} = useQuery({
        queryKey: ["chaptersArray", comicHid],
        queryFn: () => getComicChapters(comicHid ?? ''),
        enabled: !!comicHid
    });

    if (!comicHid || !latestChapter) {
        return <h1>This comic's chapters are not available right now</h1>;
    }

    if (isPending || isLoading) return <h1>Loading....</h1>;
    if (isError) return <h1>Oops! Error loading data!</h1>;

    if (data) {
        const comicChapters = getRefinedComicChapters(Number(latestChapter), data);
        return (
            <>
                <Navigation isLoggedIn={true}></Navigation>
                <div className="flex flex-col">
                    <div className="flex align-middle">
                        <h1 className="p-2 pb-0 text-start text-2xl">Chapters</h1>
                    </div>
                    <span className="flex pl-2 gap-2">
                      <img
                          className="ml-1 size-6"
                          src="https://flagsapi.com/GB/flat/64.png"
                          alt="Great Britain logo"
                      ></img>
                      <h2 className="text-start text-sm">in English</h2>
                    </span>
                    {comicChapters.map((chapter) =>
                        <Link key={chapter.hid} to={`/comic/reader/${chapter.hid}`} className="w-full">
                            <Button size="sm" variant="light" className="truncate max-w-full block">
                                {`Chapter ${chapter.chap}${chapter.title ? ': ' + chapter.title : ''}`}
                            </Button>
                        </Link>
                    )}
                </div>
            </>
        );
    }
}

export default Chapters;
