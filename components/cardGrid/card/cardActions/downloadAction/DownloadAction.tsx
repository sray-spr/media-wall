import { Asset } from "@/types";
import { IconButton } from "@sprinklrjs/spaceweb/button";
import { Image } from "@sprinklrjs/spaceweb/image";
import { ReactElement } from "react";
import { useDownloadAsset } from "./hooks/useDownloadAsset";

const DownloadAction = ({ assetInfo }: { assetInfo: Asset }): ReactElement => {
  const { downloadAsset } = useDownloadAsset();
  return (
    <IconButton
      onClick={async (e) => {
        e.stopPropagation();
        downloadAsset({ assetInfo });
        alert(
          "increase count of downloads of asset with asset ID " +
            assetInfo.id +
            " by one (TODO)"
        );
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

export { DownloadAction };
