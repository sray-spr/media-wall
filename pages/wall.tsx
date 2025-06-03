//Imports
import { CardGrid } from "@/components/cardGrid";
import { NavBar } from "@/components/header/navBar";
import { SearchBar } from "@/components/header/searchBar/SearchBar";

//Hooks and Contexts
import { useEffect, useState } from "react";

//Type
import { AssetArray } from "@/types";

export default function Wall() {
  const [searchBarText, setSearchBarText] = useState("");
  const [assets, setAssets] = useState<AssetArray>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function setData() {
      const res = await fetch(`/api/assets?keyword=${searchBarText}`);
      const data = await res.json();
      const fetchedAssets: AssetArray = data.assets;
      setAssets(fetchedAssets);
      setLoading(false);
    }
    setLoading(true);
    setData();
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
        {loading ? <div>Loading...</div> : <CardGrid assets={assets} />}
      </div>
    </div>
  );
}
