import { Button } from "@sprinklrjs/spaceweb/button";
import { AssetArray } from "@/types";
import { ReactElement, useState } from "react";
import { DownloadAllDialogBox } from "./downloadAllDialogueBox";
import { useDownloadAllAssets } from "./hooks/useDownloadAllAssets";

const DownloadAllHandler = ({
  assets,
}: {
  assets: AssetArray;
}): ReactElement => {
  const { downloadAllAssets } = useDownloadAllAssets();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <DownloadAllDialogBox isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <Button
        onClick={() => {
          if (assets.length <= 50) downloadAllAssets({ assets });
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

export { DownloadAllHandler };
