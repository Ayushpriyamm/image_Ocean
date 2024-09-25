import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlparams = new URLSearchParams(window.location.search);
    urlparams.set("searchTerm", searchTerm);
    const serachQuery = urlparams.toString();
    navigate(`/explore?${serachQuery}`);
  };

  useEffect(() => {
    const urlparams = new URLSearchParams(location.search);
    const searchTermFromURL = urlparams.get("searchTerm");
    if (searchTermFromURL) {
      setSearchTerm(searchTermFromURL);
    }
  }, [location.search]);
  return (
    <div>
      <form
        className=" bg-[#7b7a7a] p-3 rounded-lg flex items-center text-white"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="search..."
          value={searchTerm}
          className=" bg-transparent focus:outline-none w-full text-white"
          id="search"
          name="search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};
