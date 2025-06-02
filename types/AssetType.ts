export type AssetCategory = "image" | "video" | "post";

export type Asset = {
  id: string;
  title: string;
  previewUrl: string;
  category: AssetCategory;
};

export type AssetArray = Asset[];
