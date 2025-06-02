import styles from "../styles/searchbar.module.css";

import { useContext } from "react";
import { AssetsContext, SearchBarContext } from "@/components/Layout";

import { Search } from "@sprinklrjs/spaceweb/search";

export default function SearchBar() {
  const context = useContext(AssetsContext);
  if (!context) {
    throw new Error("AssetsContext is undefined");
  }
  const { assets } = context;

  const searchContext = useContext(SearchBarContext);
  if (!searchContext) {
    throw new Error("SearchBarContext is undefined");
  }
  const { searchBarText, setSearchBarText } = searchContext;

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
