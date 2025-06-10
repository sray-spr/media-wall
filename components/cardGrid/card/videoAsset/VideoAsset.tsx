import { Asset } from "@/types";
import { Box } from "@sprinklrjs/spaceweb/box";
import { Image } from "@sprinklrjs/spaceweb/image";
import { Video } from "@sprinklrjs/spaceweb/video";
import { Typography } from "@sprinklrjs/spaceweb/typography";

const VideoAsset = ({ assetInfo }: { assetInfo: Asset }) => {
  return (
    <>
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
              height: `80%`,
              width: `100%`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            },
          },
        }}
      />

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
            {assetInfo.title}
          </Typography>
        </Box>
        <Box
          style={{ width: "10%" }}
          className="flex h-full justify-center items-center"
        >
          <Image
            src="/assets/SolidVideo.svg"
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
            Date Created: Jun 2, 2025
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export { VideoAsset };
