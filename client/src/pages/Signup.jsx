import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(formData);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/server/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/profile");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <>
      <div className=" p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7 "> Signup</h1>
        <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
          <input
            type="text"
            placeholder=" Enter your name"
            className="border p-3 rounded-lg text-black"
            id="username"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder=" Enter your email"
            className="border p-3 rounded-lg text-black"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder=" Enter your password"
            className="border p-3 rounded-lg text-black"
            id="password"
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className="bg-[#008170] text-white p-3 rounded-lg uppercase hover:opacity-80"
          >
            {loading ? "Loading.." : "signup"}
          </button>
        </form>
        <div className="flex gap-2 mt-5">
          <p>Have an account?</p>
          <Link to={"/signin"}>
            <span className="text-[#008170]">sign in</span>
          </Link>
        </div>
        {error && <p className="text-red-500 mt-5 text-sm">{error}</p>}
      </div>
    </>
  );
};
