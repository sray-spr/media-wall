import { AssetArray } from "@/types";

import { Dispatch, ReactElement, SetStateAction } from "react";

import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";

import { SearchBar } from "./searchBar";
import { DownloadAllHandler } from "./downloadAllHandler";

const UtilityBar = ({
  assets,
  setKeyword,
}: {
  assets: AssetArray;
  setKeyword: Dispatch<SetStateAction<string>>;
}): ReactElement => {
  return (
    <Box
      style={{ paddingInline: "3%" }}
      className="grow flex flex-row justify-between items-center "
    >
      <Typography variant="body-16" weight="bold">
        {"All Assets (" + assets.length + ")"}
      </Typography>
      <SearchBar setKeyword={setKeyword} />
      <DownloadAllHandler assets={assets} />
    </Box>
  );
};

export { UtilityBar };
