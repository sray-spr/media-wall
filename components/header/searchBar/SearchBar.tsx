import { AssetArray } from "@/types";

import { Search } from "@sprinklrjs/spaceweb/search";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@sprinklrjs/spaceweb/button";
import { Box } from "@sprinklrjs/spaceweb/box";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import JSZip from "jszip";
import { saveAs } from "file-saver";
const SearchBar = ({
  assets,
  setKeyword,
}: {
  assets: AssetArray;
  setKeyword: Dispatch<SetStateAction<string>>;
}) => {
  const [searchBarText, setSearchBarText] = useState("");
  async function downloadAllAssets() {
    const zip = new JSZip();
    for (const asset of assets) {
      const response = await fetch(asset.previewUrl);
      const blob = await response.blob();
      zip.file(asset.title + ".png", blob);
    }
    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, "assets.zip");
  }
  return (
    <Box
      style={{ paddingInline: "3%" }}
      className="grow flex flex-row justify-between items-center "
    >
      <Typography variant="body-16" weight="bold">
        {"All Assets (" + assets.length + ")"}
      </Typography>
      <Search
        value={searchBarText}
        onChange={(e) => setSearchBarText(e.target.value)}
        debouncedOnChange={(e) => setKeyword(e.target.value)}
        size="sm"
        variant="light"
        placeholder="Search assets"
        clearable
        debounceInterval={400}
        overrides={{
          Root: {
            style: { width: "40%" },
          },
        }}
      />
      <Button
        onClick={() => {
          downloadAllAssets();
        }}
        variant="tertiary"
        size="sm"
      >
        Download All
      </Button>
    </Box>
  );
};

export { SearchBar };
