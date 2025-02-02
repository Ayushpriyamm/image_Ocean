import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
  ];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesData = {};
        for (const topic of topics) {
          const requestUrl = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
            topic
          )}&image_type=photo`;

          console.log(`Fetching: ${requestUrl}`);
          const response = await fetch(requestUrl);

          if (!response.ok) {
            console.error(`API Error ${response.status}`);
            continue;
          }

          const data = await response.json();
          imagesData[topic] =
            data.hits && data.hits.length > 0
              ? data.hits[0].webformatURL
              : "/fallback.jpg";
        }
        setImages(imagesData);
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
    <div className="flex flex-col justify-center p-4 space-y-8">
      <h1 className="text-2xl text-center">
        Over 5.3 million+ high-quality stock images, shared by our talented
        community
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="relative bg-slate-300 cursor-pointer rounded"
            onClick={() => handleTopicClick(topic)}
          >
            {images[topic] ? (
              <img
                src={images[topic]}
                alt={topic}
                className="w-full h-40 object-cover rounded"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-40">
                Loading...
              </div>
            )}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-1">
              {topic.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
