import { VideoAsset } from "@/types";
import { Video } from "@sprinklrjs/spaceweb/video";
import { ReactElement } from "react";

const PostAssetVideo = ({
  assetInfo,
}: {
  assetInfo: VideoAsset;
}): ReactElement => {
  return (
    <Video
      src={assetInfo.mediaUrl}
      poster={assetInfo.previewUrl}
      overrides={{
        Video: {
          props: {
            style: {
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            },
          },
        },
        Root: {
          style: {
            height: `60%`,
            width: `100%`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          },
        },
      }}
    />
  );
};

export { PostAssetVideo };
