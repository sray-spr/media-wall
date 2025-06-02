//Styles
import styles from "../styles/layout.module.css";

//SubComponents

import { createContext, Dispatch, SetStateAction, useState } from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

//Types
import { AssetArray } from "@/types/AssetType";

export type AssetsContextType = {
  assets: AssetArray;
  setAssets: Dispatch<SetStateAction<AssetArray>>;
};

export type SearchBarContextType = {
  searchBarText: string;
  setSearchBarText: Dispatch<SetStateAction<string>>;
};

//Context

export const SearchBarContext = createContext<SearchBarContextType | undefined>(
  undefined
);
export const AssetsContext = createContext<AssetsContextType | undefined>(
  undefined
);

export default function Layout({ children }) {
  const [searchBarText, setSearchBarText] = useState("");
  const [assets, setAssets] = useState<AssetArray>([]);

  return (
    <AssetsContext.Provider
      value={{
        assets,
        setAssets,
      }}
    >
      <SearchBarContext.Provider
        value={{
          searchBarText,
          setSearchBarText,
        }}
      >
        <div className={styles.container}>
          <div className={styles.header}>
            <NavBar />
            <SearchBar />
          </div>
          <main className={styles.main}>{children}</main>
        </div>
      </SearchBarContext.Provider>
    </AssetsContext.Provider>
  );
}
