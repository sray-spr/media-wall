//Imports
import { CardGrid } from "@/components/cardGrid";
import { NavBar } from "@/components/header/navBar";
import { SearchBar } from "@/components/header/searchBar/SearchBar";

//Hooks and Contexts
import { useEffect, useState } from "react";

//Type
import { AssetArray } from "@/types";
import { Box } from "@sprinklrjs/spaceweb/box";

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
    <Box className="flex flex-col min-h-0">
      <Box className="h-16">
        <NavBar />
        <SearchBar assets={assets} setKeyword={setKeyword} />
      </Box>
      <div className="mediawall">
        {loading ? <div>Loading...</div> : <CardGrid assets={assets} />}
      </div>
    </Box>
  );
}
