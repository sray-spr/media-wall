import { Asset } from "@/types";
import { Box } from "@sprinklrjs/spaceweb/box";
import { Image } from "@sprinklrjs/spaceweb/image";
import { Video } from "@sprinklrjs/spaceweb/video";
import { Typography } from "@sprinklrjs/spaceweb/typography";

const VideoAsset = ({ assetInfo }: { assetInfo: Asset }) => {
  return (
    <>
      <Video
        src={assetInfo.previewUrl}
        poster="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg"
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
              height: `75%`,
              width: `100%`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#DBDBDB",
            },
          },
        }}
      />

      <Box
        style={{ height: "25%" }}
        className="flex flex-row w-full justify-center items-center pr-1"
      >
        <Box
          style={{ width: "15%" }}
          className="flex h-full justify-center items-center"
        >
          <Image
            src="/assets/SolidVideoAssetClr.svg"
            alt="Logo"
            width={20}
            height={15}
          />
        </Box>
        <Box
          style={{
            width: "85%",
          }}
          className="h-full flex flex-col justify-center items-left"
        >
          <Typography
            variant="body-16"
            weight="medium"
            className="flex spr-text-01 pb-0.5"
            maxWidth={20}
            maxLines={2}
          >
            {assetInfo.title}
          </Typography>
          <Typography
            variant="body-14"
            weight="medium"
            className="flex spr-text-03"
          >
            Video
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export { VideoAsset };
