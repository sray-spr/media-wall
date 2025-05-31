import styles from "../styles/searchbar.module.css";

import { useContext } from "react";
import { ImagesContext, SearchBarContext } from "@/components/Layout";

export default function Searchbar() {
  const context = useContext(ImagesContext);
  if (!context) {
    throw new Error("ImageContext is undefined");
  }
  const { images } = context;
  const searchContext = useContext(SearchBarContext);
  if (!searchContext) {
    throw new Error("SearchBarContext is undefined");
  }
  const { searchBarText, setSearchBarText } = searchContext;

  return (
    <div className={styles.container}>
      <div className={styles.assetcount}>
        {"All Assets (" + images.length + ")"}
      </div>
      <div className="searchSpace">
        <input
          type="text"
          placeholder="Search assets"
          value={searchBarText}
          onChange={(e) => setSearchBarText(e.target.value)}
        />
      </div>

      {/* TODO */}
      <div className="downloadButton">
        <button>Download all</button>
      </div>
    </div>
  );
}
