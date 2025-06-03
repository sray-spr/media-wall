import { Box } from "@sprinklrjs/spaceweb/box";
import { Image } from "@sprinklrjs/spaceweb/image";
import { Typography } from "@sprinklrjs/spaceweb/typography";

const NavBar = () => {
  return (
    <Box className="flex flex-row h-7 w-full spr-tooltip-01">
      <Box className="self-center pl-3">
        <Image src="/assets/logo.png" alt="Logo" width={35} height={22} />
      </Box>

      <Typography
        variant="display-18"
        weight="medium"
        className="spr-text-05 w-full h-4.5 self-center pl-3"
      >
        A Board
      </Typography>
    </Box>
  );
};

export { NavBar };
