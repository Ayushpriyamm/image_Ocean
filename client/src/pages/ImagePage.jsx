import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const ImagePage = () => {
  const params = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const url = `${BASE_URL}?key=${API_KEY}&id=${params.imageId}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.hits.length > 0) {
          setImage(data.hits[0]);
        }
      } catch (error) {
        console.error("Error fetching image details:", error);
      }
    };

    fetchImage();
  }, [params]);

  if (!image) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{image.tags}</h1>
      <img
        className="rounded-lg shadow-lg max-w-full"
        src={image.largeImageURL}
        alt={image.tags}
      />
      <p className="mt-4">Views: {image.views}</p>
      <p>Downloads: {image.downloads}</p>
      <p>Likes: {image.likes}</p>
      <p>User: {image.user}</p>
    </div>
  );
};
