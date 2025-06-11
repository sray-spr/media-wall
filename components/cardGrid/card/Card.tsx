import { Box } from "@sprinklrjs/spaceweb/box";
import { Asset } from "@/types";
import { CardActions } from "./cardActions";
import { PostAsset } from "./postAsset";
import { ImageAsset } from "./imageAsset";
import { VideoAsset } from "./videoAsset";
import { ReactElement } from "react";

const Card = ({ assetInfo }: { assetInfo: Asset }): ReactElement => {
  var content;
  switch (assetInfo.type) {
    case "PHOTO":
      content = <ImageAsset assetInfo={assetInfo} />;
      break;
    case "VIDEO":
      content = <VideoAsset assetInfo={assetInfo} />;
      break;
    case "POST":
      content = <PostAsset assetInfo={assetInfo} />;
  }
  return (
    <Box className="group flex flex-col w-full h-full spr-border-06 overflow-hidden spr-shadow-01 hover:transition-shadow  hover:duration-500 hover:spr-shadow-02 rounded-4">
      <div className="z-10 absolute top-0 right-0 flex flex-row opacity-0 group-hover:opacity-100 w-1/4 h-9/50 justify-evenly items-center transition-opacity">
        <CardActions assetInfo={assetInfo} />
      </div>
      {content}
    </Box>
  );
};
export { Card };
