import { Asset } from "@/types";
import { CopyButton } from "./copyButton";
import { DownloadButton } from "./downloadButton";

const HoverButtons = ({ assetInfo }: { assetInfo: Asset }) => {
  return (
    <>
      <CopyButton title={assetInfo.title} />
      <DownloadButton assetInfo={assetInfo} />
    </>
  );
};

export { HoverButtons };
