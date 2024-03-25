import React from "react";
import { Selection } from "@react-types/shared";
import { IGenreData } from "../models/genreData";
import { Listbox, ListboxItem } from "@nextui-org/react";

function GenreList({ genres }: { genres: IGenreData[] }) {
  //   state to track the selected genres
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([""])
  );

  // join the selected genres to get a search query
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );

  return (
    <>
      <h1>Explore genres</h1>
      <div className="flex flex-col gap-2">
        <div className="w-full border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
          <Listbox
            aria-label="Multiple selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="multiple"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            {genres.map((genre) => (
              <ListboxItem key={genre.genreName}>{genre.genreName}</ListboxItem>
            ))}
          </Listbox>
        </div>
      </div>
    </>
  );
}

export default GenreList;
