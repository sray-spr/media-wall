import { AssetArray } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

function makeid(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function generateData(): AssetArray {
  const imageData: AssetArray = Array.from({ length: 100 }, (_, i) => ({
    id: (i + 1).toString(),
    title: makeid(10),
    previewUrl: `https://picsum.photos/id/${i + 200}/1920/1080`,
    category: "image",
  }));
  const imageData2: AssetArray = Array.from({ length: 100 }, (_, i) => ({
    id: (i + 101).toString(),
    title: makeid(12),
    previewUrl: `https://picsum.photos/id/${i + 200}/1080/1920`,
    category: "image",
  }));

  const totalData = imageData2.concat(imageData);
  totalData.sort(() => Math.random() - 0.5);
  return totalData;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { keyword = "" } = req.query;

  const filteredAssets = generateData().filter((asset) =>
    asset.title.toLowerCase().includes((keyword as string).toLowerCase())
  );

  setTimeout(() => {
    res.json({ assets: filteredAssets });
  }, 1500);
}
