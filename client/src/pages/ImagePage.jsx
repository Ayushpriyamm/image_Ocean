import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import { ImageSkeleton } from "../components/ImageSkeleton";
import { FaEye, FaCloudDownloadAlt, FaHeart } from "react-icons/fa";
import { ImageItem } from "../components/ImageItem";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const ImagePage = () => {
  const params = useParams();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [relatedImage, setRelatedImage] = useState([]);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true);
        const url = `${BASE_URL}?key=${API_KEY}&id=${params.imageId}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.hits.length > 0) {
          setImage(data.hits[0]);
          const rawTags = data.hits[0].tags; // Get the tags string
          const tagsArray = rawTags.split(",").map((tag) => tag.trim()); // Convert to array and remove spaces

          console.log(tagsArray[0]);
          fetchRelatedImage(tagsArray[0]);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching image details:", error);
        setLoading(false);
      }
    };

    fetchImage();
  }, [params.imageId]);

  const fetchRelatedImage = async (tags) => {
    if (!tags) return;

    try {
      const relatedURL = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
        tags
      )}&per_page=20`;

      const response = await fetch(relatedURL);
      const data = await response.json();

      setRelatedImage(data.hits);
    } catch (error) {
      console.log("Error fetching relatesd images:", error);
    }
  };

  const handleLoadImage = () => {
    setImageLoaded(true);
  };

  const downloadImage = async (url, filename) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="flex flex-col md:flex-row p-4 gap-4 items-center">
        {!imageLoaded && <ImageSkeleton />}

        <div className="flex flex-col image-div w-full md:w-1/2 justify-center  ">
          <img
            className={`rounded-lg shadow-lg object-contain mx-auto ${
              imageLoaded ? `block` : `hidden`
            }`}
            src={image.webformatURL}
            alt={image.tags}
            onLoad={handleLoadImage}
          />
        </div>

        <div className="info-div flex flex-col w-full md:w-1/2 space-y-4">
          {/* Download buttons */}
          <div className="flex flex-col space-y-4  items-center">
            <button
              onClick={() =>
                downloadImage(
                  image.webformatURL,
                  `image-${params.imageId}-small.jpg`
                )
              }
              className="w-full md:w-3/4 p-3  bg-[#20c0ab] text-black hover:text-white rounded-lg hover:bg-[#116257]  transition-colors font-medium"
            >
              Download Small
            </button>
            <button
              onClick={() =>
                downloadImage(
                  image.largeImageURL,
                  `image-${params.imageId}-large.jpg`
                )
              }
              className="w-full md:w-3/4 px-4 py-2 bg-white text-black rounded-lg hover:bg-[#d8dede] transition-colors font-medium"
            >
              Download Large
            </button>
            <button
              onClick={() =>
                downloadImage(
                  image.fullHDURL || image.largeImageURL,
                  `image-${params.imageId}-fullhd.jpg`
                )
              }
              className="w-full md:w-3/4 px-4 py-2 bg-[#20c0ab] text-black hover:text-white rounded-lg hover:bg-[#116257] transition-colors font-medium"
            >
              Download Full HD
            </button>
          </div>

          <div className="info flex md:flex-row gap-4 md:gap-8 justify-center">
            <div className="flex gap-2 items-center p-2">
              <FaEye className="w-[40px] h-[40px]" />
              <p className="">{image.views}</p>
            </div>
            <div className="flex gap-2 items-center p-2">
              <FaCloudDownloadAlt className="w-[40px] h-[40px]" />
              <p className="">{image.downloads}</p>
            </div>
            <div className="flex gap-2 items-center p-2">
              <FaHeart className="w-[40px] h-[40px]" />
              <p className="">{image.likes}</p>
            </div>
          </div>

          <div className="details flex flex-col text-center text-lg space-y-2">
            <p>Media type : {image.type}</p>
            <p>Image tags: {image.tags ? `[ ${image.tags} ]` : "N/A"}</p>
          </div>
        </div>
      </div>
      {/* Related Images Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">Related Images</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto justify-center place-items-center">
          {relatedImage.length > 0 ? (
            relatedImage.map((img) => (
              <ImageItem
                key={img.id}
                img={img}
                className="w-full h-40 object-cover rounded-lg shadow-md cursor-pointer"
              />
            ))
          ) : (
            <p className="text-center text-gray-500">
              No related images found.
            </p>
          )}
        </div>
      </div>
    </>

    // <>
    //   <div className="flex md:flex-row flex-col">
    //     <div className="image-div">
    //       <img {image.largeImageURL} alt="" onLoad={handleLoadImage}/>
    //     </div>

    //     <div className="links-div">
    //       <div className="buttons"></div>

    //       <div className="info-div"></div>
    //     </div>
    //   </div>
    // </>
  );
};
