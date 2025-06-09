export type AssetCategory = "image" | "video" | "post";
export type MediaExtension =
  | "jpg"
  | "jpeg"
  | "png"
  | "mp3"
  | "mp4"
  | "pdf"
  | "doc";

export type Asset = {
  id: string;
  title: string;
  previewUrl: string;
  mediaUrl: string;
  extension: MediaExtension;
  category: AssetCategory;
};

export type AssetArray = Asset[];
