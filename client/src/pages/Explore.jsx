import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ImageItem } from "../components/ImageItem";
import { Loader } from "../components/Loader";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const Explore = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(true);
        const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
          searchTerm
        )}&per_page=200`;

        const response = await fetch(url);
        const data = await response.json();
        setImages(data.hits);

        setTotalImages(data.total);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchImages();
    setLoading(false);
  }, [searchTerm]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col justify-center space-y-4">
      <div className="flex justify-center p-4 text-center">
        <h1 className="text-2xl md:text-5xl">
          Access{" "}
          <span className="text-[#20c0ab] font-bold">{totalImages}+</span> Free{" "}
          <span className="text-[#20c0ab] font-semibold">
            {searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)}
          </span>{" "}
          Images and Photos
        </h1>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center mx-auto space-y-4 md:space-x-4">
        {images.map((image) => (
          <ImageItem key={image.id} img={image} />
        ))}
      </div>
    </div>
  );
};
