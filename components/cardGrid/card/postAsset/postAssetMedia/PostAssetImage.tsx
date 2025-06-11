import { PhotoAsset } from "@/types";
import { Image } from "@sprinklrjs/spaceweb/image";
import { ReactElement } from "react";

const PostAssetImage = ({
  assetInfo,
}: {
  assetInfo: PhotoAsset;
}): ReactElement => {
  return (
    <Image
      onClick={() => {
        window.open(assetInfo.mediaUrl, "_blank");
      }}
      src={assetInfo.previewUrl}
      alt="This should be an image"
      overrides={{
        Image: {
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

export { PostAssetImage };
