import React from "react";

const Drawer = () => {
  return (
    <>
     <div className=" list-none sm:w-1/5 bg-gray-900 text-white ">
      <div className=" text-white bg-gradient-to-r from-gray-900 to-gray-900 flex flex-row  text-2xl  p-3"
>
          <div>

              <img
                className="w-8 ml-3"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt=""
              /> 
            
          </div>
          <div>
            <h1 className=" text-white ml-5 text-2xl ">Hello</h1>
          </div>
      </div>
      
      <div>
        <li className="font-bold text-xl p-3 m-0 border-2 ">Trending</li>
        <li className="p-3  ">Best Sellers</li>
        <li className="p-3">New releases</li>
        <li className="font-bold text-xl p-3 ">Shop By Category</li>
        
        <li className="font-bold text-xl p-3 ">Help & Setting</li>
        <li className="p-3">Your Account</li>
        <li className="p-3">Customer Services</li>
        <li className="p-3">Sign in/login in</li>
        
        
      </div>
    </div>
    </>
  );
};

export default Drawer;
