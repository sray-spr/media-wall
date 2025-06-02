//Imports

//Hooks and Contexts
import { useContext, useEffect, useRef } from "react";

//Data
import { AssetData } from "@/tempData/Data";

//Type

import { AssetsContext, SearchBarContext } from "@/components/Layout";
import { AssetArray } from "@/types/AssetType";
import CardGrid from "@/components/cardGrid";

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
  const checkAssetContext = useContext(AssetsContext);
  if (!checkAssetContext) {
    throw new Error("AssetContext is undefined");
  }
  const { assets, setAssets } = checkAssetContext;

  const checkSearchContext = useContext(SearchBarContext);
  if (!checkSearchContext) {
    throw new Error("SearchBarContext is undefined");
  }
  const { searchBarText } = checkSearchContext;
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
    <div className="mediawall">
      <CardGrid assets={assets} />
    </div>
  );
}
