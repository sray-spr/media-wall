export type PhotoAsset = {
  id: string;
  title: string;
  type: "PHOTO";
  createdTime: number;
  previewUrl: string;
  mediaUrl: string;
  extension: "jpg" | "jpeg" | "png";
};
export type VideoAsset = {
  id: string;
  title: string;
  type: "VIDEO";
  createdTime: number;
  previewUrl: string;
  mediaUrl: string;
  extension: "mp3" | "mp4";
};

export type AssetChannel =
  | "FACEBOOK"
  | "INSTAGRAM"
  | "YOUTUBE"
  | "LINKEDIN"
  | "TWITTER";

export type PostAsset = {
  id: string;
  title: string;
  type: "POST";
  createdTime: number;
  postAssetChannel: AssetChannel;
  postAssetContent: PhotoAsset | VideoAsset;
};

export type Asset = PhotoAsset | VideoAsset | PostAsset;

export type AssetArray = Asset[];
