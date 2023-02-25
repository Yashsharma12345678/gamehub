import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="h-9 bg-gray-800 text-white text-center pt-1 hover:bg-gray-900 cursor-pointer">
        Back to top
      </div>
      <div className="flex flex-row justify-evenly bg-gray-900 text-white">
        <div className=" m-20">
          <h2 className="text-xl font-bold mb-2">Get to know us</h2>
          <h2>About us</h2>
          <h2>carreers</h2>
          <h2>Press releases</h2>
          <h2>carreers</h2>
        </div>
        <div className="m-20">
          <h2 className="text-xl font-bold mb-2">Connect with us</h2>
          <h2>Facebook</h2>
          <h2>Whatsapp</h2>
          <h2>Instagram</h2>
        </div>

        <div className="m-20">
          <h2 className="text-xl font-bold mb-2">Let us help you</h2>
          <h2>Your account</h2>
          <h2>100% Purchase protection</h2>
          <h2>Return center</h2>
          <h2>YashCart App download</h2>
          <h2>Help</h2>
        </div>
      </div>
      <div className=" w-full h-px bg-gray-400"></div>
      <div className=" flex bg-gray-600 justify-center text-white font-bold">
        <h1 className="m-3">India</h1>
        <h1 className="m-3">Australia</h1>
        <h1 className="m-3">Brazil</h1>
        <h1 className="m-3">China</h1>
        <h1 className="m-3">japan</h1>
        <h1 className="m-3">Mexico</h1>
        <h1 className="m-3">Netherland</h1>
        <h1 className="m-3">Dubai</h1>
      </div>
      <div className="bg-gray-900 text-white pl-80">
        Conditions of Use & Sale Privacy Notice Interest-Based Ads © 2022-2022,
        gamehub.com, Inc. or its affiliates
      </div>
    </div>
  );
};

export default Footer;
