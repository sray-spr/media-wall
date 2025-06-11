import { Asset } from "@/types";
import { CopyAction } from "./copyAction";
import { DownloadAction } from "./downloadAction";
import { ReactElement } from "react";

const CardActions = ({ assetInfo }: { assetInfo: Asset }): ReactElement => {
  return (
    <>
      <CopyAction title={assetInfo.title} />
      <DownloadAction assetInfo={assetInfo} />
    </>
  );
};

export { CardActions };
