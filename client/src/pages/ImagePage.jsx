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
    // Simulate an API call
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

  if (loading || isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{image.tags}</h1>
      {!imageLoaded && <ImageSkeleton />}
      <img
        className={`rounded-lg shadow-lg max-w-full ${
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
    </div>
  );
};
