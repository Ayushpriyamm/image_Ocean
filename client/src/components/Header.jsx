import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  return (
    <header className=" bg-[#0F0F0F] shadow-lg  ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
        <Link to="/">
          <h1 className="text-slate-100 font-bold text-xl">
            Image<span className="text-[#008170] ">Ocean</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="search..."
            className=" bg-tr focus:outline-none w-24 sm:w-64"
          />
          <button>
            <FaSearch></FaSearch>
          </button>
        </form>
        <ul className="flex gap-4 text-slate-100">
          <Link to="/">
            <li className="hidden sm:inline text-slate-100 hover:underline active:text-[#008170]">
              Home
            </li>
          </Link>
          <Link to="explore">
            <li className="hidden sm:inline text-slate-100 hover:underline active:text-[#008170]">
              Explore
            </li>
          </Link>
          <Link to="/signin">
            <li className=" text-slate-100 hover:underline">Signin</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
