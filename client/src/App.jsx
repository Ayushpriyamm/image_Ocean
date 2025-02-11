import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Create } from "./pages/Create";
import { Explore } from "./pages/Explore";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Loader } from "./components/Loader";

import { ImagePage } from "./pages/ImagePage";
import { Footer } from "./components/Footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
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
      <Footer />
    </BrowserRouter>
  );
};

export default App;
