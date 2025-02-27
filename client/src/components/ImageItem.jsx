import React from "react";
import { Link } from "react-router-dom";

export const ImageItem = ({ img }) => {
  return (
    <Link to={`/image/${img.id}`} className="block">
      <div className=" rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl hover:shadow-2xl">
        <div className="relative group">
          {/* Add 'group' to enable group-hover */}
          <img
            className="object-cover  w-full sm:h-48 md:h-56 lg:h-64 xl:h-72 group-hover:opacity-90"
            src={img.webformatURL}
            alt={img.tag}
            loading="lazy"
            style={{ imageRendering: "auto" }}
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-2 text-xs sm:text-sm md:text-base lg:text-lg w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {img.tags}
          </div>
        </div>
      </div>
    </Link>
  );
};
