import { AssetArray } from "@/types";
import styles from "./searchBar.module.css";

import { Search } from "@sprinklrjs/spaceweb/search";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@sprinklrjs/spaceweb/button";
import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";
const SearchBar = ({
  assets,
  setKeyword,
}: {
  assets: AssetArray;
  setKeyword: Dispatch<SetStateAction<string>>;
}) => {
  const [searchBarText, setSearchBarText] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.assetcount}>
        {"All Assets (" + assets.length + ")"}
      </div>
      <div className="searchSpace">
        <Search
          value={searchBarText}
          onChange={(e) => setSearchBarText(e.target.value)}
          debouncedOnChange={(e) => setKeyword(e.target.value)}
          style="w"
          variant="default"
          placeholder="Search"
          debounceInterval={400}
        />
      </div>

      {/* TODO */}
      <div className="downloadButton">
        <button>Download all</button>
      </div>
    </div>
    // <Box className="w-full h-12.5 px-7/50 flex flex-row items-center justify-between">
    //   <Typography variant="body-16" weight="bold">
    //     {"All Assets (" + 100 + ")"}
    //   </Typography>
    //   <Typography variant="body-16" weight="bold">
    //     {"All Assets (" + 100 + ")"}
    //   </Typography>
    //   <Typography variant="body-16" weight="bold">
    //     {"All Assets (" + 100 + ")"}
    //   </Typography>
    // </Box>
    // <Box className="h-12.5 px-7/50 flex flex-row items-center justify-between">
    //   <Typography variant="body-16" weight="bold">
    //     {"All Assets (" + assets.length + ")"}
    //   </Typography>

    //   <Search
    //     value={searchBarText}
    //     onChange={(e) => setSearchBarText(e.target.value)}
    //     debouncedOnChange={(e) => setKeyword(e.target.value)}
    //     size="sm"
    //     variant="light"
    //     placeholder="Search assets"
    //     clearable
    //     debounceInterval={400}
    //   />

    //   <Button onClick={() => alert("click")} variant="tertiary" size="sm">
    //     Download All
    //   </Button>
    // </Box>
  );
};

export { SearchBar };
