import React, { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const query = "Anime"; // Update this to the desired search query
        const response = await axios.get(
          `http://localhost:3000/server/images/get-image?query=${encodeURIComponent(
            query
          )}`
        );
        setImages(response.data.hits); // Ensure response.data.hits exists
      } catch (error) {
        setError("Error fetching images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {images.length > 0 ? (
        images.map((image) => (
          <div key={image.id} className="image-item">
            <img
              src={image.webformatURL}
              alt={`Image tagged with ${image.tags}`}
            />
            <p>{image.tags}</p>
          </div>
        ))
      ) : (
        <div>No images found</div>
      )}
    </div>
  );
};
