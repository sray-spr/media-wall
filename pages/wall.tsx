//Imports
import { CardGrid } from "@/components/cardGrid";
import { NavBar } from "@/components/header/navBar";
import { SearchBar } from "@/components/header/searchBar/SearchBar";

//Hooks and Contexts
import { useEffect, useRef, useState } from "react";

//Type
import { AssetArray } from "@/types";

Wall.getInitialProps = async () => {
  console.log("Get Initial Props Ran");

  const res = await fetch("http://localhost:3000/api/assets");
  const data = await res.json();
  const fetchedAssets: AssetArray = data.assets;
  return { initialAssets: fetchedAssets };
};

export default function Wall({ initialAssets }: { initialAssets: AssetArray }) {
  const [searchBarText, setSearchBarText] = useState("");
  const [assets, setAssets] = useState<AssetArray>(initialAssets);

  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    } else {
      async function setData() {
        const res = await fetch(`/api/assets?keyword=${searchBarText}`);
        const data = await res.json();
        const fetchedAssets: AssetArray = data.assets;
        setAssets(fetchedAssets);
      }
      setData();
    }
  }, [searchBarText]);

  return (
    <div className="container">
      <div className="header">
        <NavBar />
        <SearchBar
          assets={assets}
          searchBarText={searchBarText}
          setSearchBarText={setSearchBarText}
        />
      </div>

      <div className="mediawall">
        <CardGrid assets={assets} />
      </div>
    </div>
  );
}
