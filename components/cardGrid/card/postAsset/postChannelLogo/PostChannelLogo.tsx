import { AssetChannel } from "@/types";
import { ReactElement } from "react";

import FacebookIcon from "../../../../../public/assets/BrandFacebookCircleClr.svg";
import InstagramIcon from "../../../../../public/assets/BrandInstagramCircleClr.svg";
import YoutubeIcon from "../../../../../public/assets/BrandYoutubeCircleClr.svg";
import LinkedinIcon from "../../../../../public/assets/BrandLinkedinCircleClr.svg";
import TwitterIcon from "../../../../../public/assets/BrandTwitterCircleClr.svg";
const PostChannelLogo = ({
  channel,
}: {
  channel: AssetChannel;
}): ReactElement | null => {
  switch (channel) {
    case "FACEBOOK":
      return <FacebookIcon width={18} height={18} />;
    case "INSTAGRAM":
      return <InstagramIcon width={18} height={18} />;
    case "YOUTUBE":
      return <YoutubeIcon width={18} height={18} />;
    case "LINKEDIN":
      return <LinkedinIcon width={18} height={18} />;
    case "TWITTER":
      return <TwitterIcon width={18} height={18} />;
  }
};

export { PostChannelLogo };
