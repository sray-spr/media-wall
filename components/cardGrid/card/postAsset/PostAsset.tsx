import { PostAsset as PostAssetType } from "@/types";
import { Box } from "@sprinklrjs/spaceweb/box";
import { Image } from "@sprinklrjs/spaceweb/image";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { PostChannelLogo } from "./postChannelLogo";
import { PostAssetImage, PostAssetVideo } from "./postAssetMedia";
import { ReactElement } from "react";

const PostAsset = ({
  assetInfo,
}: {
  assetInfo: PostAssetType;
}): ReactElement => {
  const date = new Date(assetInfo.createdTime * 1000);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  var media;
  if (assetInfo.postAssetContent.type === "PHOTO") {
    media = <PostAssetImage assetInfo={assetInfo.postAssetContent} />;
  } else {
    media = <PostAssetVideo assetInfo={assetInfo.postAssetContent} />;
  }
  return (
    <>
      <Box style={{ height: "20%" }} className="bg-white flex flex-col">
        <Box style={{ height: "50%" }} className="px-2 py-1.5">
          <PostChannelLogo channel={assetInfo.postAssetChannel} />
        </Box>
        <Typography
          variant="body-12"
          weight="medium"
          className="flex grow spr-text-01 pl-2"
          maxWidth={18}
          maxLines={1}
        >
          {assetInfo.title}
        </Typography>
      </Box>
      {media}
      <Box
        style={{ height: "9%" }}
        className="flex flex-row w-full rounded-8 bg-white justify-center items-center pr-0.5"
      >
        <Box
          style={{
            width: "90%",
          }}
          className="h-full flex justify center items-center px-2"
        >
          <Typography
            variant="body-13"
            weight="semibold"
            className="flex spr-text-01 "
            maxWidth={20}
            maxLines={1}
          >
            {assetInfo.postAssetContent.title}
          </Typography>
        </Box>
        <Box
          style={{ width: "10%" }}
          className="flex h-full justify-center items-center"
        >
          <Image
            src="/assets/SolidPostAsset.svg"
            alt="Logo"
            width={20}
            height={20}
          />
        </Box>
      </Box>
      <Box
        style={{ height: "11%" }}
        className="flex flex-row w-full justify-center items-center pr-0.5"
      >
        <Box
          style={{ width: "10%" }}
          className="flex h-full justify-center items-center"
        >
          <Image
            src="/assets/SolidCalender.svg"
            alt="Logo"
            width={18}
            height={18}
          />
        </Box>
        <Box
          style={{
            width: "90%",
          }}
          className="h-full flex items-center pr-1"
        >
          <Typography
            variant="body-14"
            weight="medium"
            className="spr-text-03 "
            maxWidth={20}
            maxLines={1}
          >
            Date Created: {formattedDate}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export { PostAsset };
