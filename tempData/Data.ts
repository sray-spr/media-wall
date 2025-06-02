import { AssetArray } from "@/types";

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

//Generating Data

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

export const AssetData = {
  data: {
    assets: totalData,
  },
};
