import { AssetArray } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { keyword = "" } = req.query;
  const mockAssets: AssetArray = require("../../public/assets/MOCK_DATA.json");
  const filteredAssets = mockAssets.filter((asset) =>
    asset.title.toLowerCase().includes((keyword as string).toLowerCase())
  );

  setTimeout(() => {
    res.json({ assets: filteredAssets });
  }, 1000);
}
