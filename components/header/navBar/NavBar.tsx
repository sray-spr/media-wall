import { Box } from "@sprinklrjs/spaceweb/box";
import { Image } from "@sprinklrjs/spaceweb/image";
import { Typography } from "@sprinklrjs/spaceweb/typography";

const NavBar = () => {
  return (
    <Box className="flex flex-row h-7 w-full align-center spr-tooltip-01">
      <Box className="self-center pl-3">
        <Image
          src="/assets/BrandSprinklrClr.svg"
          alt="Logo"
          width={35}
          height={22}
        />
      </Box>

      <Typography
        variant="display-20"
        weight="medium"
        className="spr-text-05 w-full self-center pl-3"
      >
        A Board
      </Typography>
    </Box>
  );
};

export { NavBar };
