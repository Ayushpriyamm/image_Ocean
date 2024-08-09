import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Create } from "./pages/Create";
import { Explore } from "./pages/Explore";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";

import { ImagePage } from "./pages/ImagePage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/image/:imageId" element={<ImagePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
