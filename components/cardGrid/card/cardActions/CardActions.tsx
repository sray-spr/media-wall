import { Asset } from "@/types";
import { CopyButton } from "./copyButton";
import { DownloadButton } from "./downloadButton";

const CardActions = ({ assetInfo }: { assetInfo: Asset }) => {
  return (
    <>
      <CopyButton title={assetInfo.title} />
      <DownloadButton assetInfo={assetInfo} />
    </>
  );
};

export { CardActions };
