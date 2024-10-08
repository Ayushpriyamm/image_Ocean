import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../components/Loader";
import { Box } from "../components/Box";
import { Hero } from "../components/Hero";
export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
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
    </div>
  );
};
