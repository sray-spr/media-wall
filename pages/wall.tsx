//Imports
import { CardGrid } from "@/components/cardGrid";
import { NavBar } from "@/components/header/navBar";
import { UtilityBar } from "@/components/header/utilityBar/UtilityBar";
import { Loader } from "@sprinklrjs/spaceweb/loader";
import { Box } from "@sprinklrjs/spaceweb/box";

import { useState } from "react";
import { useQuery } from "@apollo/client";
import { ASSET_QUERY } from "@/graphql/queries";

export default function Wall() {
  const [keyword, setKeyword] = useState("");

  const { data, loading, error } = useQuery(ASSET_QUERY, {
    variables: { keyword },
  });

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <Box className="flex flex-col w-full h-screen overflow-hidden">
      <Box className="h-16 flex flex-col w-full border-b-1 spr-border-03">
        <NavBar />
        <UtilityBar assets={data?.assets || []} setKeyword={setKeyword} />
      </Box>
      <Box className="grow h-0 spr-ui-02 overflow-hidden pb-3 pt-5 pl-5 pr-3">
        {loading ? (
          <Loader
            className="w-full h-full flex justify-center items-center"
            variant="spinner"
          />
        ) : (
          <CardGrid assets={data?.assets || []} />
        )}
      </Box>
    </Box>
  );
}
