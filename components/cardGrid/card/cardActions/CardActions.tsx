import { Asset } from "@/types";
import { CopyButton } from "./copyButton";
import { DownloadAction } from "./downloadAction";
import { ReactElement } from "react";

const CardActions = ({ assetInfo }: { assetInfo: Asset }): ReactElement => {
  return (
    <>
      <CopyButton title={assetInfo.title} />
      <DownloadAction assetInfo={assetInfo} />
    </>
  );
};

export { CardActions };
