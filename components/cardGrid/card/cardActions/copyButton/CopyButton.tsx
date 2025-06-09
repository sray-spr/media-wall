import { IconButton } from "@sprinklrjs/spaceweb/button";
import { Image } from "@sprinklrjs/spaceweb/image";

const CopyButton = ({ title }: { title: string }) => {
  return (
    <IconButton
      onClick={(e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(title);
      }}
      bordered
      shape="square"
      intent="default"
      size="xxxs"
      tooltipContent="Copy Title"
    >
      <Image
        src="/assets/SolidCopy.svg"
        width={20}
        height={15}
        alt="Should be Icon"
      />
    </IconButton>
  );
};

export { CopyButton };
