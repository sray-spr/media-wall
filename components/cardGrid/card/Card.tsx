import { Box } from "@sprinklrjs/spaceweb/box";
import { Image } from "@sprinklrjs/spaceweb/image";
import { Typography } from "@sprinklrjs/spaceweb/typography";
import { Asset } from "@/types";
import { IconButton } from "@sprinklrjs/spaceweb/button";

const Card = ({ assetInfo }: { assetInfo: Asset }) => {
  return (
    <Box
      className="group flex flex-col w-full h-full spr-border-06 overflow-hidden spr-shadow-01 hover:transition-shadow  hover:duration-500 hover:spr-shadow-02 rounded-4"
      onClick={() => {
        window.open(assetInfo.previewUrl, "_blank");
      }}
    >
      <div className="absolute top-0 right-0 flex flex-row opacity-0 group-hover:opacity-100 w-1/4 h-9/50 justify-evenly items-center transition-opacity">
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
      </div>

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
              backgroundColor: "#DBDBDB",
            },
          },
        }}
      />

      <Box
        style={{ height: "25%" }}
        className="flex flex-row w-full justify-center items-center"
      >
        <Box
          style={{ width: "15%" }}
          className="flex h-full justify-center items-center"
        >
          <Image src="/assets/logo.png" alt="Logo" width={35} height={22} />
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
          >
            {assetInfo.title}
          </Typography>
          <Typography
            variant="body-14"
            weight="medium"
            className="flex spr-text-03"
          >
            70 KB
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export { Card };
