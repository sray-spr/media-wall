import { AssetArray } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

function generateRandomTitle(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let title = "";

  for (let i = 0; i < length; i++) {
    title += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return title;
}

function generateMockAssets(): AssetArray {
  const landscapeImages: AssetArray = [];
  const portraitImages: AssetArray = [];

  for (let i = 0; i < 100; i++) {
    landscapeImages.push({
      id: (i + 1).toString(),
      title: generateRandomTitle(10),
      previewUrl: `https://picsum.photos/id/${i + 200}/1920/1080`,
      category: "image",
    });

    portraitImages.push({
      id: (i + 101).toString(),
      title: generateRandomTitle(12),
      previewUrl: `https://picsum.photos/id/${i + 200}/1080/1920`,
      category: "image",
    });
  }

  const allImages = [...landscapeImages, ...portraitImages];

  // Shuffle the combined array
  allImages.sort(() => Math.random() - 0.5);

  return allImages;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { keyword = "" } = req.query;

  const filteredAssets = generateMockAssets().filter((asset) =>
    asset.title.toLowerCase().includes((keyword as string).toLowerCase())
  );

  setTimeout(() => {
    res.json({ assets: filteredAssets });
  }, 1000);
}
