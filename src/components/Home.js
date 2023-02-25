import React from "react";
import Drawer from "./Drawer";
import LeftHome from "./LeftHome";

const HomePage = () => {
  return (
    <>
      <div>
        <img className="w-full h-auto" src="../images/banner.png" alt="" />
      </div>
      <div className="flex flex-row">
        <Drawer />
        <LeftHome />
      </div>
    </>
  );
};

export default HomePage;
