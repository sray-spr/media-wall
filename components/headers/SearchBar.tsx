import { AssetArray } from "@/types/AssetType";
import styles from "./searchbar.module.css";

import { Search } from "@sprinklrjs/spaceweb/search";
import { Dispatch, SetStateAction } from "react";

export default function SearchBar({
  assets,
  searchBarText,
  setSearchBarText,
}: {
  assets: AssetArray;
  searchBarText: string;
  setSearchBarText: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.assetcount}>
        {"All Assets (" + assets.length + ")"}
      </div>
      <div className="searchSpace">
        <Search
          value={searchBarText}
          onChange={(e) => setSearchBarText(e.target.value)}
          debouncedOnChange={(e) => console.log(e.target.value)}
          style="w-3/4"
          variant="default"
          placeholder="Search"
          debounceInterval={200}
        />
      </div>

      {/* TODO */}
      <div className="downloadButton">
        <button>Download all</button>
      </div>
    </div>
  );
}
