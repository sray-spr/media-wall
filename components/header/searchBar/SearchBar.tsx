import { AssetArray } from "@/types";
import styles from "./searchBar.module.css";

import { Search } from "@sprinklrjs/spaceweb/search";
import { Dispatch, SetStateAction, useState } from "react";

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
  );
};

export { SearchBar };
