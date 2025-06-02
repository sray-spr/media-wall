//Imports
import CardGrid from "@/components/cardGrid";
import NavBar from "@/components/headers/NavBar";
import SearchBar from "@/components/headers/SearchBar";

//Hooks and Contexts
import { useEffect, useRef, useState } from "react";

//Data
import { AssetData } from "@/tempData/Data";

//Type

import { AssetArray } from "@/types/AssetType";

//Function to get Images with given filters
function getData(keyword: string): AssetArray {
  const json = AssetData;

  const filteredAssets: AssetArray = json.data.assets.filter((asset) =>
    asset.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return filteredAssets;
}

Wall.getInitialProps = async () => {
  console.log("Get Initial Props Ran");
  return { InitialAssets: getData("") };
};

export default function Wall({ InitialAssets }: { InitialAssets: AssetArray }) {
  const [searchBarText, setSearchBarText] = useState("");
  const [assets, setAssets] = useState<AssetArray>([]);

  const hasMounted = useRef(false);

  useEffect(() => {
    setAssets(InitialAssets);
  }, [InitialAssets, setAssets]);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    } else {
      setAssets(getData(searchBarText));
    }
  }, [searchBarText, setAssets]);

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
