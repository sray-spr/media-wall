//Imports
import CardGrid from "@/components/CardGrid";

//Hooks and Contexts
import { useContext, useEffect, useRef } from "react";

//Data
import { imageD } from "@/tempData/imageData";

//Type

import { ImagesContext, SearchBarContext } from "@/components/Layout";
import { ImgObjectArrayType } from "@/types/ImageType";

//Function to get Images with given filters
function getData(keyword: string): ImgObjectArrayType {
  const json = imageD;

  const filteredImages = json.data.photos.filter((photo) =>
    photo.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return filteredImages;
}

Wall.getInitialProps = async () => {
  // For Query using GraphQL
  // const query = `
  //     query {
  //         photos(first: 20) {
  //             id,
  //             url,
  //             title
  //         }
  //     }

  // `;
  // const res = await fetch("https://graphqlplaceholder.vercel.app/graphql",
  //     {
  //         method: "POST",
  //         headers: {
  //             "Content-type": "application/json",
  //         },
  //         body: JSON.stringify({
  //             query
  //         }),
  //     }
  // )
  // const json = await res.json()

  console.log("Get Initial Props Ran");
  return { photos: getData("") };
};

export default function Wall({ photos }: { photos: ImgObjectArrayType }) {
  const checkImagesContext = useContext(ImagesContext);
  if (!checkImagesContext) {
    throw new Error("ImagesContext is undefined");
  }
  const { images, setImages } = checkImagesContext;

  const checkSearchContext = useContext(SearchBarContext);
  if (!checkSearchContext) {
    throw new Error("SearchBarContext is undefined");
  }
  const { searchBarText } = checkSearchContext;
  const hasMounted = useRef(false);

  useEffect(() => {
    setImages(photos);
  }, [photos, setImages]);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    } else {
      setImages(getData(searchBarText));
    }
  }, [searchBarText, setImages]);

  return (
    <div className="mediawall">
      <CardGrid imageObjects={images} />
    </div>
  );
}
