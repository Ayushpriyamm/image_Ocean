import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../components/Loader";
import { Box } from "../components/Box";
import { Hero } from "../components/Hero";
import { HomeComp2 } from "../components/HomeComp2";
import { HomeComp3 } from "../components/HomeComp3";
export const Home = () => {
  return (
    // <div className="min-h-screen flex justify-center items-center">
    //   <Link className="flex justify-center items-center" to="/explore">
    //     <button className="flex justify-center text-4xl font-semibold">
    //       Let's Explore
    //     </button>
    //   </Link>
    // </div>

    <div className="">
      <Hero></Hero>

      {/* */}
      <HomeComp2></HomeComp2>

      <HomeComp3 />
    </div>
  );
};
