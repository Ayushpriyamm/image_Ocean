import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Explore = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation(); // Add useLocation to get location.search

  useEffect(() => {
    const urlparams = new URLSearchParams(location.search);
    const term = urlparams.get("searchTerm");

    if (term) {
      setSearchTerm(term);
    }
  }, [location.search]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // API CREDENTIALS
        const API_KEY = "45185638-2fe2246e844b833a2a1fe44be";
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
          searchTerm
        )}&per_page=50`;

        const response = await fetch(url, {
          method: "GET",
        });

        const data = await response.json();
        setImages(data.hits);
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();
  }, [searchTerm]);

  return (
    <div>
      <div className="">
        {images.map((image) => (
          <div className="" key={image.id}>
            <img src={image.previewURL} alt={image.tags} />
            <p>{image.tags}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
