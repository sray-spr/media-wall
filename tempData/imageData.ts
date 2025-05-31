function makeid(length:number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const imageData = Array.from({ length: 100 }, (_, i) => ({
  id: (i + 1).toString(),
  url: `https://picsum.photos/id/${i + 200}/1920/1080`,
  title: makeid(10),
}));
const imageData2 = Array.from({ length: 100 }, (_, i) => ({
  id: (i + 101).toString(),
  url: `https://picsum.photos/id/${i + 200}/1080/1920`,
  title: makeid(12),
}));



const totalData = imageData2.concat(imageData);
totalData.sort(() => Math.random() - 0.5);
export const imageD = {
  data: {
    photos: totalData,
  },
};
