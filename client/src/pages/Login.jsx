import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInSuccess,
  signInFailure,
  signInStart,
} from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const [formData, setFormData] = useState({});
  //redux store
  const { error, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(formData);

  //handle change in form feild
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  //handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const server = "https://image-ocean.onrender.com";
    try {
      dispatch(signInStart());
      const res = await fetch(`${server}/server/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      console.log(res);
      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-center font-semibold my-7 text-3xl">Signin</h1>

        <form
          onSubmit={handleSubmit}
          className=" flex flex-col gap-4 text-black"
        >
          <input
            type="email"
            className="border p-3 rounded-lg"
            id="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <input
            type="password "
            className="border p-3 rounded-lg"
            id="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
          <button className="bg-[#008170] text-white p-3 rounded-lg uppercase hover:opacity-80">
            {loading ? "Loading..." : "Signin"}
          </button>
        </form>
        <div className=" flex gap-2 mt-5">
          <p>Don't have an account yet?</p>
          <Link to="/signup">
            <span className="text-[#008170]">signup</span>
          </Link>
        </div>
        {error && <p className="text-sm text-red-500 mt-5">{error}</p>}
      </div>
    </>
  );
};
