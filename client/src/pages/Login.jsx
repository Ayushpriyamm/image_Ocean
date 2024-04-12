import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-center font-semibold my-7 text-3xl">Signin</h1>

        <form action="" className=" flex flex-col gap-4">
          <input
            type="email"
            className="border p-3 rounded-lg"
            id="email"
            placeholder="Enter your email"
          />
          <input
            type="password "
            className="border p-3 rounded-lg"
            id="email"
            placeholder="Enter your password"
          />
          <button className="bg-[#008170] p-3 rounded-lg uppercase hover:opacity-80">
            Signin
          </button>
        </form>
        <div className=" flex gap-2 mt-5">
          <p>Don't have an account yet?</p>
          <Link to="/signup">
            <span className="text-[#008170]">signup</span>
          </Link>
        </div>
      </div>
    </>
  );
};
