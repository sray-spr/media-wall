import { Button } from "@sprinklrjs/spaceweb/button";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { AssetArray } from "@/types";
import { useState } from "react";
import { DownloadAllDialogBox } from "./downloadAllDialogueBox";

const DownloadAllButton = ({ assets }: { assets: AssetArray }) => {
  async function downloadAllAssets() {
    const zip = new JSZip();
    for (const asset of assets) {
      const response = await fetch(asset.mediaUrl);
      const blob = await response.blob();
      zip.file(asset.title + "." + asset.extension, blob);
    }
    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, "assets.zip");
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <DownloadAllDialogBox isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <Button
        onClick={() => {
          if (assets.length <= 50) downloadAllAssets();
          else {
            setIsModalOpen(true);
          }
        }}
        variant="tertiary"
        size="sm"
      >
        Download All
      </Button>
    </>
  );
};

export { DownloadAllButton };
