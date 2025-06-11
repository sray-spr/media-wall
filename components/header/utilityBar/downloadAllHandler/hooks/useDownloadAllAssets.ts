import JSZip from "jszip";
import { saveAs } from "file-saver";
import { AssetArray } from "@/types";

export const useDownloadAllAssets = () => {
  async function downloadAllAssets({ assets }: { assets: AssetArray }) {
    const zip = new JSZip();
    for (const asset of assets) {
      if (asset.type !== "POST") {
        const response = await fetch(asset.mediaUrl);
        const blob = await response.blob();
        zip.file(asset.title + "." + asset.extension, blob);
      } else {
        const response = await fetch(asset.postAssetContent.mediaUrl);
        const blob = await response.blob();
        zip.file(asset.title + "." + asset.postAssetContent.extension, blob);
      }
    }
    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, "assets.zip");
  }
  return { downloadAllAssets };
};
