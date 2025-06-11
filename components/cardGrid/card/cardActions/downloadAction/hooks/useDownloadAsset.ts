import { Asset } from "@/types";
import { saveAs } from "file-saver";
export const useDownloadAsset = () => {
  async function downloadAsset({ assetInfo }: { assetInfo: Asset }) {
    if (assetInfo.type !== "POST") {
      const response = await fetch(assetInfo.mediaUrl);
      const blob = await response.blob();
      saveAs(blob, assetInfo.title + "." + assetInfo.extension);
    } else {
      const response = await fetch(assetInfo.postAssetContent.mediaUrl);
      const blob = await response.blob();
      saveAs(
        blob,
        assetInfo.title + "." + assetInfo.postAssetContent.extension
      );
    }
  }
  return { downloadAsset };
};
