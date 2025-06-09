import { Box } from "@sprinklrjs/spaceweb/box";
import { Asset } from "@/types";
import { HoverButtons } from "./hoverButtons";
import { VideoAsset } from "./videoAsset";
import { PostAsset } from "./postAssets";
import { ImageAsset } from "./imageAsset";

const Card = ({ assetInfo }: { assetInfo: Asset }) => {
  var content;
  switch (assetInfo.category) {
    case "image":
      content = <ImageAsset assetInfo={assetInfo} />;
      break;
    case "video":
      content = <VideoAsset assetInfo={assetInfo} />;
      break;
    case "post":
      content = <PostAsset assetInfo={assetInfo} />;
  }
  return (
    <Box className="group flex flex-col w-full h-full spr-border-06 overflow-hidden spr-shadow-01 hover:transition-shadow  hover:duration-500 hover:spr-shadow-02 rounded-4">
      <div className="z-10 absolute top-0 right-0 flex flex-row opacity-0 group-hover:opacity-100 w-1/4 h-9/50 justify-evenly items-center transition-opacity">
        <HoverButtons assetInfo={assetInfo} />
      </div>
      {content}
    </Box>
  );
};
export { Card };
