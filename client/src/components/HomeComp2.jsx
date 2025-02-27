import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ImageSkeleton } from "./ImageSkeleton";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const HomeComp2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [images, setImages] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const topics = [
    "sports",
    "music",
    "art",
    "technology",
    "nature",
    "food",
    "travel",
    "fashion",
    "cars",
    "fitness",
    "wildlife",
    "architecture",
    "boxing",
    "paintings",
    "animation",
    "Ai",
    "robots",
    "animals",
    "cartoons",
    "mountains",
  ];

  useEffect(() => {
    const fetchImage = async (topic) => {
      const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
        topic
      )}&image_type=photo`;
      const response = await fetch(url);
      const data = await response.json();
      return [topic, data.hits?.[0]?.webformatURL || "/fallback.jpg"];
    };

    const fetchImages = async () => {
      try {
        const result = await Promise.all(topics.map(fetchImage));
        setImages(Object.fromEntries(result));
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  // Navigate to search page with selected topic
  const handleTopicClick = (topic) => {
    const urlparams = new URLSearchParams();
    urlparams.set("searchTerm", topic);
    const searchQuery = urlparams.toString();
    navigate(`/explore?${searchQuery}`);
  };

  // Update searchTerm when URL changes
  useEffect(() => {
    const urlparams = new URLSearchParams(location.search);
    const searchTermFromURL = urlparams.get("searchTerm");
    if (searchTermFromURL) {
      setSearchTerm(searchTermFromURL);
    }
  }, [location.search]);

  return (
    <div className="relative flex flex-col justify-center p-4 space-y-8">
      <h1 className="text-2xl text-center">
        Over 5.3 million+ high-quality stock images, shared by our talented
        community
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="relative bg-slate-300 cursor-pointer rounded-lg overflow-hidden group border-1 border-[#20c0ab]"
            onClick={() => handleTopicClick(topic)}
          >
            {images[topic] ? (
              <img
                src={images[topic]}
                alt={topic}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
                style={{ imageRendering: "auto" }}
              />
            ) : (
              <div className="flex items-center justify-center w-full h-40">
                <ImageSkeleton />
              </div>
            )}
            {/* Overlay for Hover Effect */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-bold">
                {topic.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/90 to-transparent mask mask-linear p-20">
        <Link
          to="/explore"
          className="bg-transparent border-2 border-black rounded-full p-2 text-lg mx-auto text-black "
        >
          Discover more
        </Link>
      </div>
    </div>
  );
};
