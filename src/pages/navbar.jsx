import React from "react";
import logo from "../assets/img/logo.png";

function Navbar() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 bg-[#F6F8FC] !px-10 !py-5">
      <img src={logo} alt="logo" />
      <div className=" ">
        <div className=" flex justify-evenly place-content-end ">
          <h2 className="text-[#263030] hover:text-[#0B2D9C] cursor-pointer capitalize font-sans !px-5 text-[20px]">
            <a href={"/"}>Home</a>
          </h2>
          <h2 className="text-[#263030] hover:text-[#0B2D9C] cursor-pointer capitalize font-sans !px-5 text-[20px]">
            <a href={"/AboutUs"}>Services</a>
          </h2>
          <h2 className="text-[#263030] hover:text-[#0B2D9C] cursor-pointer capitalize font-sans !px-5 text-[20px]">
            <a href={"/"}>Products</a>
          </h2>
          <h2 className="text-[#263030] hover:text-[#0B2D9C] cursor-pointer capitalize font-sans !px-5 text-[20px]">
            <a href={"/ContactUs"}>Portfolio</a>
          </h2>
          <h2 className="text-[#263030] hover:text-[#0B2D9C] cursor-pointer capitalize font-sans !px-5 text-[20px]">
            <a href={"/ContactUs"}>About us</a>
          </h2>
          <h2 className="text-[#263030] hover:text-[#0B2D9C] cursor-pointer capitalize font-sans !px-5 text-[20px]">
            <a href={"/ContactUs"}>Contact us</a>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
