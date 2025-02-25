import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
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
    <header className=" bg-[#1A1A1A] shadow-lg  ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
        <Link to="/">
          <h1 className="text-slate-100 font-bold text-xl">
            Image<span className="text-[#20c0ab] ">Ocean</span>
          </h1>
        </Link>
        <form
          className=" bg-[#232323] p-3 rounded-lg flex items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="search..."
            value={searchTerm}
            className=" bg-transparent focus:outline-none w-24 sm:w-64"
            id="search"
            name="search"
            onChange={(e) => setSearchTerm(e.target.value)}
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
          <Link to="/about">
            <li className=" text-slate-100 hover:underline">About</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
