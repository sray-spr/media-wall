import { Asset } from "@/types";
import { IconButton } from "@sprinklrjs/spaceweb/button";
import { Image } from "@sprinklrjs/spaceweb/image";

const HoverButtons = ({ assetInfo }: { assetInfo: Asset }) => {
  return (
    <>
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          navigator.clipboard.writeText(assetInfo.title);
        }}
        bordered
        shape="square"
        intent="default"
        size="xxxs"
        tooltipContent="Copy Title"
      >
        <Image src="/assets/logo.png" alt="Should be Icon" />
      </IconButton>
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
        }}
        bordered
        shape="square"
        intent="default"
        size="xxxs"
        tooltipContent="Download"
      >
        <Image src="/assets/logo.png" alt="Should be Icon" />
      </IconButton>
    </>
  );
};

export { HoverButtons };
