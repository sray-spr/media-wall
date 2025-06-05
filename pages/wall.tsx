//Imports
import { CardGrid } from "@/components/cardGrid";
import { NavBar } from "@/components/header/navBar";
import { SearchBar } from "@/components/header/searchBar/SearchBar";
import { Loader } from "@sprinklrjs/spaceweb/loader";
import { Box } from "@sprinklrjs/spaceweb/box";

import { useEffect, useState } from "react";

import { AssetArray } from "@/types";

export default function Wall() {
  const [keyword, setKeyword] = useState("");
  const [assets, setAssets] = useState<AssetArray>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function setData() {
      const res = await fetch(`/api/assets?keyword=${keyword}`);
      const data = await res.json();
      const fetchedAssets: AssetArray = data.assets;
      setAssets(fetchedAssets);
      setLoading(false);
    }
    setLoading(true);
    setData();
  }, [keyword]);

  return (
    <Box className="flex flex-col w-full h-screen overflow-hidden">
      <Box className="h-16 flex flex-col w-full border-b-1 spr-border-03">
        <NavBar />
        <SearchBar assets={assets} setKeyword={setKeyword} />
      </Box>
      <Box className="grow h-0 spr-ui-02 overflow-hidden pb-3 pt-5 pl-5 pr-3">
        {loading ? (
          <Loader
            className="w-full h-full flex justify-center items-center"
            variant="spinner"
          />
        ) : (
          <CardGrid assets={assets} />
        )}
      </Box>
    </Box>
  );
}
