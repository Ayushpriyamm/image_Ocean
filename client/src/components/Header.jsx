import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  //handle change in serach box
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className=" bg-[#1A1A1A] shadow-lg  ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
        <Link to="/">
          <h1 className="text-slate-100 font-bold text-xl">
            Image<span className="text-[#008170] ">Ocean</span>
          </h1>
        </Link>
        <form
          className=" bg-[#232323] p-3 rounded-lg flex items-center"
          onSubmit={handleSubmit}
        >
          <input
            onChange={handleChange}
            type="text"
            placeholder="search..."
            value={searchTerm}
            className=" bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <button type="submit">
            <FaSearch />
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
