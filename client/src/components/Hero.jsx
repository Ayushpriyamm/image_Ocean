import React from "react";
import { SearchBar } from "./SearchBar";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const searchTerm = "dogs";

export const Hero = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center space-x-6 space-y-6 p-4 items-center h-screen">
        <div className=" text-center md:w-1/2 space-y-4">
          <h1 className="text-5xl font-medium ">
            Create great <span className="text-[#20c0ab]">design faster</span>{" "}
          </h1>
          <p className="text-sm text-gray-200">
            High-quality photos, vectors, PSD, AI images, icons... to go from
            ideas to outstanding designs
          </p>
          <div className="w-3/4  mx-auto rounded-lg">
            <SearchBar></SearchBar>
          </div>
        </div>

        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 p-4 ">
          <div className="h-44 md:h-52 text-center relative border-8 border-white">
            <div className="absolute top-0 right-0 bg-white opacity-30 rounded-xl h-44 w-3/4"></div>
            <div className="absolute bottom-0 left-0 bg-white opacity-30 rounded-full h-20  w-20">
              01
            </div>
          </div>
          <div className=" h-52 text-center relative">
            <div className="absolute bottom-0 left-0 bg-white opacity-30 rounded-xl h-44 w-3/4 border-4 border-[#00ffdd]">
              01
            </div>
            <div className="absolute top-0 right-0 bg-white opacity-30 rounded-full h-20  w-20 border-4 border-[#00ffdd]">
              01
            </div>
          </div>
          <div className=" h-52 text-center relative ">
            <div className="absolute right-0 top-0 bg-white opacity-30 rounded-xl h-44 w-3/4 border-4 border-[#00ffdd]">
              01
            </div>
            <div className="absolute bottom-0 left-0 bg-white opacity-30 rounded-full h-20  w-20 border-4 border-[#00ffdd]">
              01
            </div>
          </div>
          <div className=" h-52 text-center relative border-8 border-white">
            <div className="absolute bottom-0 bg-white opacity-30 rounded-xl h-44 w-3/4">
              01
            </div>
            <div className="absolute top-0 right-0 bg-white opacity-30 rounded-full h-20  w-20">
              01
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
