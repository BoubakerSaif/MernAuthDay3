import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
