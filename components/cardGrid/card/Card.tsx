import { Box } from "@sprinklrjs/spaceweb/box";
import { Image } from "@sprinklrjs/spaceweb/image";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { Asset } from "@/types";

const Card = ({ assetInfo }: { assetInfo: Asset }) => {
  return (
    <Box className="flex flex-col w-full h-full spr-border-06 overflow-hidden spr-shadow-01 hover:spr-shadow-03 rounded-4">
      <Image
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
              height: `75%`,
              width: `100%`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#D7D7DC",
            },
          },
        }}
      />

      <Box
        style={{ height: "25%" }}
        className="flex flex-row w-full justify-center items-center"
      >
        <Box
          style={{ width: "20%" }}
          className="flex h-full justify-center items-center"
        >
          <Image src="/assets/logo.png" alt="Logo" width={35} height={22} />
        </Box>
        <Typography
          style={{
            height: "100%",
            width: "80%",
            display: "flex",
            alignItems: "center",
          }}
          variant="body-14"
          weight="medium"
          className="flex spr-text-01 "
        >
          {assetInfo.title}
        </Typography>
      </Box>
    </Box>
  );
};
export { Card };
