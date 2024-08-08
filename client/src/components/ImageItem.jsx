import React from "react";

export const ImageItem = ({ image, text }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <div className="relative group">
        {" "}
        {/* Add 'group' to enable group-hover */}
        <img
          className="object-cover w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 group-hover:opacity-80"
          src={image}
          alt={text}
          loading="lazy"
          style={{ imageRendering: "auto" }}
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-2 text-xs sm:text-sm md:text-base lg:text-lg w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {text}
        </div>
      </div>
    </div>
  );
};
