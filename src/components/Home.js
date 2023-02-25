import React from "react";
import Drawer from "./Drawer";
import LeftHome from "./LeftHome";

const HomePage = () => {
  return (
    <>
      <div className="">
        <img className="w-screen" src="../images/banner.png" alt="" />
      </div>
      <div className="flex flex-row">
        <Drawer />
        <div className="relative hidden lg:block">
        <LeftHome /> 
        </div>
      </div>
    </>
  );
};

export default HomePage;
