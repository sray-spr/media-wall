import { Asset } from "@/types";
import { IconButton } from "@sprinklrjs/spaceweb/button";
import { Image } from "@sprinklrjs/spaceweb/image";
import { saveAs } from "file-saver";

const DownloadButton = ({ assetInfo }: { assetInfo: Asset }) => {
  async function downloadAsset() {
    const response = await fetch(assetInfo.mediaUrl);
    const blob = await response.blob();
    saveAs(blob, assetInfo.title + "." + assetInfo.extension);
  }
  return (
    <IconButton
      onClick={async (e) => {
        e.stopPropagation();
        downloadAsset();
      }}
      bordered
      shape="square"
      intent="default"
      size="xxxs"
      tooltipContent="Download"
    >
      <Image
        src="/assets/SolidDownload.svg"
        width={20}
        height={15}
        alt="Should be Icon"
      />
    </IconButton>
  );
};

export { DownloadButton };
