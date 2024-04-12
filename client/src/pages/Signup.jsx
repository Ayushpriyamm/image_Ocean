import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <>
      <div className=" p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7 "> Signup</h1>
        <form action="" className="flex flex-col gap-4">
          <input
            type="text"
            placeholder=" Enter your name"
            className="border p-3 rounded-lg"
            id="username"
          />
          <input
            type="email"
            placeholder=" Enter your email"
            className="border p-3 rounded-lg"
            id="email"
          />
          <input
            type="password"
            placeholder=" Enter your password"
            className="border p-3 rounded-lg"
            id="password"
          />
          <button className="bg-[#008170] text-white p-3 rounded-lg uppercase hover:opacity-80">
            {" "}
            Signup
          </button>
        </form>
        <div className="flex gap-2 mt-5">
          <p>Have an account?</p>
          <Link to={"/signin"}>
            <span className="text-[#008170]">sign in</span>
          </Link>
        </div>
      </div>
    </>
  );
};
