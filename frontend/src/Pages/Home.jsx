import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      <div className=" mt-24 flex justify-center ">Home</div>
    </>
  );
};

export default Home;
