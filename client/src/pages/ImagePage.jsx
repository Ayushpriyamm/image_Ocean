import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import { ImageSkeleton } from "../components/ImageSkeleton";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const ImagePage = () => {
  const params = useParams();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true);
        const url = `${BASE_URL}?key=${API_KEY}&id=${params.imageId}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.hits.length > 0) {
          setImage(data.hits[0]);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching image details:", error);
        setLoading(false);
      }
    };

    fetchImage();
  }, [params]);

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

  if (loading || isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{image.tags}</h1>
      {!imageLoaded && <ImageSkeleton />}
      <img
        className={`rounded-lg shadow-lg max-w-full max-h-[300px] object-contain ${
          imageLoaded ? `block` : `hidden`
        }`}
        src={image.largeImageURL}
        alt={image.tags}
        onLoad={handleLoadImage}
      />
      <p className="mt-4">Views: {image.views}</p>
      <p>Downloads: {image.downloads}</p>
      <p>Likes: {image.likes}</p>
      <p>User: {image.user}</p>

      {/* Download buttons */}
      <div className="flex space-x-2 mt-4">
        <button
          onClick={() =>
            downloadImage(
              image.webformatURL,
              `image-${params.imageId}-small.jpg`
            )
          }
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Small
        </button>
        <button
          onClick={() =>
            downloadImage(
              image.largeImageURL,
              `image-${params.imageId}-large.jpg`
            )
          }
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Large
        </button>
        <button
          onClick={() =>
            downloadImage(
              image.fullHDURL || image.largeImageURL,
              `image-${params.imageId}-fullhd.jpg`
            )
          }
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Full HD
        </button>
      </div>
    </div>
  );
};
