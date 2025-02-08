import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] ">
      <div className="shadow-lg grid gird-cols-1 md:grid-cols-4 gap-4 justify-center mx-auto p-4">
        <div className="flex flex-col space-y-2 md:space-y-4">
          <Link to="/">
            <h1 className="text-slate-100 font-bold text-xl md:text-2xl">
              Image<span className="text-[#20c0ab] ">Ocean</span>
            </h1>
          </Link>
          <p>
            Over 5.3 million+ high quality stock images shared by our talented
            community.
          </p>
          <div className=" flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="flex flex-col ">
          <Link to="">
            <h1 className="text-slate-100 font-bold text-xl md:text-2xl">
              Discover
            </h1>
          </Link>
          <Link to="/explore?sports">
            <p className="text-slate-200 ">sports</p>
          </Link>
          <Link to="/explore">
            <p className="text-slate-200 ">music</p>
          </Link>
          <Link to="/explore">
            <p className="text-slate-200 ">arts</p>
          </Link>
          <Link to="/explore">
            <p className="text-slate-200 ">fashion</p>
          </Link>
        </div>
        <div className="flex flex-col m-0 p-0">
          <Link to="/about">
            <h1 className="text-slate-100 font-bold text-xl md:text-2xl">
              About
            </h1>
          </Link>

          <Link to="/about">
            <p className="text-slate-200 ">About Us </p>
          </Link>

          <Link to="/">
            <p className="text-slate-200 ">Terms of Service</p>
          </Link>
          <Link to="/">
            <p className="text-slate-200 ">Privacy Policy</p>
          </Link>
          <Link to="/">
            <p className="text-slate-200 ">Cookies Policy</p>
          </Link>
        </div>
        <div className="flex flex-col m-0 p-0">
          <Link to="/">
            <h1 className="text-slate-100 font-bold text-xl md:text-2xl">
              Community
            </h1>
          </Link>

          <Link to="/">
            <p className="text-slate-200 ">Blog</p>
          </Link>

          <Link to="/">
            <p className="text-slate-200 ">Forum</p>
          </Link>
          <Link to="/">
            <p className="text-slate-200 ">Creators</p>
          </Link>
        </div>
      </div>
      <div className="text-center text-sm p-4">
        {" "}
        <p>
          © {new Date().getFullYear()} IMAGE OCEAN. All rights reserved.
          Developed by Ayush Priyam.
        </p>
      </div>
    </footer>
  );
};
