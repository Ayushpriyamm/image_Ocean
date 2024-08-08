import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ImageItem } from "../components/ImageItem";

export const Explore = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalImages, setTotalImages] = useState(0);
  const location = useLocation();

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
        const API_KEY = "45185638-2fe2246e844b833a2a1fe44be";
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
          searchTerm
        )}&per_page=50`;

        const response = await fetch(url);
        const data = await response.json();
        setImages(data.hits);

        console.log(data.total);
        setTotalImages(data.total);
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();
  }, [searchTerm]);

  const headText = `Access ${totalImages} Free ${searchTerm} Images and Photos`;

  return (
    <div className="p-2 md:p-4">
      <div className="flex text-center justify-center p-2 md:p-4">
        <h1 className="text-2xl md:text-5xl text-center p-2 md:p-5">
          Access{" "}
          <span className="text-[#20c0ab] font-bold">{totalImages}+</span> Free{" "}
          <span className="text-[#20c0ab] font-semibold">
            {" "}
            {searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)}
          </span>{" "}
          Images and Photos
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 p-2 md:p-4">
        {images.map((image) => (
          <ImageItem
            key={image.id}
            image={image.webformatURL}
            text={image.tags}
          />
        ))}
      </div>
    </div>
  );
};
