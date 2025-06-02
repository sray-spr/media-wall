import { AssetData } from "@/tempData/data";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { keyword = "" } = req.query;

  const filteredAssets = AssetData.data.assets.filter((asset) =>
    asset.title.toLowerCase().includes((keyword as string).toLowerCase())
  );

  res.json({ assets: filteredAssets });
}
