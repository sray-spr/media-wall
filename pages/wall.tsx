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
    <Box className="flex flex-col w-full">
      <Box
        style={{ borderBottom: "1px solid #dddddd" }}
        className="h-16 flex flex-col w-full"
      >
        <NavBar />
        <SearchBar assets={assets} setKeyword={setKeyword} />
      </Box>
      <Box style={{ flexGrow: "1", background: "#f7f8fd" }}>
        {loading ? (
          <Loader
            className="w-full h-screen flex justify-center items-center"
            variant="spinner"
          />
        ) : (
          <CardGrid assets={assets} />
        )}
      </Box>
    </Box>
  );
}
