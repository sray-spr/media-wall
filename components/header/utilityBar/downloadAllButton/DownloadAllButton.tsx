import { Button } from "@sprinklrjs/spaceweb/button";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { AssetArray } from "@/types";

const DownloadAllButton = ({ assets }: { assets: AssetArray }) => {
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
    <Button
      onClick={() => {
        downloadAllAssets();
      }}
      variant="tertiary"
      size="sm"
    >
      Download All
    </Button>
  );
};

export { DownloadAllButton };
