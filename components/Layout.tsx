//Styles
import { defaultImgObjectArray, imgObjectArray } from "@/types/imageType";
import styles from "../styles/layout.module.css";

//SubComponents
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import { createContext, Dispatch, SetStateAction, useState } from "react";

export type ImagesContextType = {
  images: imgObjectArray;
  setImages: Dispatch<SetStateAction<imgObjectArray>>;
};

export type SearchBarContextType = {
  searchBarText: string;
  setSearchBarText: Dispatch<SetStateAction<string>>;
};

export const SearchBarContext = createContext<SearchBarContextType | undefined>(
  undefined
);
export const ImagesContext = createContext<ImagesContextType | undefined>(
  undefined
);

export default function Layout({ children }) {
  const [searchBarText, setSearchBarText] = useState("");
  const [images, setImages] = useState(defaultImgObjectArray);
  return (
    <ImagesContext.Provider
      value={{
        images,
        setImages,
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
            <Navbar />
            <Searchbar />
          </div>
          <main className={styles.main}>{children}</main>
        </div>
      </SearchBarContext.Provider>
    </ImagesContext.Provider>
  );
}
