import React from "react";
import logo from "../img/white_logo.png";
import bg1 from "../img/footer-bg1.png";
import bg2 from "../img/footer-bg2.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";

function Footer() {
  return (
    <footer className="bg-[#161735] text-white">
      {/* Top Section with Background Images */}
      <div className="relative overflow-hidden">
        {/* Background images */}
        <img
          src={bg2}
          alt="bg"
          className="absolute left-0 bottom-0 w-[500px] h-[500px] object-cover opacity-50"
        />
        <img
          src={bg1}
          alt="bg"
          className="absolute right-0 bottom-0 w-[500px] h-[500px] object-cover opacity-50"
        />

        {/* Content */}
        <div className="relative z-10 !px-6 lg:!px-15 !py-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Logo + About */}
            <div className="lg:w-1/2">
              <img src={logo} alt="logo" className="w-[200px] !mb-6" />
              <p className="text-gray-300 lg:w-[75%] w-full !mb-6 leading-10">
                Crafting digital solutions that power growth. We specialize in full-stack
                development, tailored software, and user-centric design—turning ideas into scalable,
                impactful technology. <br />
                Driven by innovation. Built for the future.
              </p>
              <div className="flex gap-5">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF size={28} className="text-[#2C48A2]" />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={28} className="text-[#2C48A2]" />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <TbBrandLinkedin size={28} className="text-[#2C48A2]" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:justify-between lg:w-1/2 ">
            {/* <div className="flex flex-col lg:justify-between lg:w-1/2 "> */}
              <div>
                <h4 className="text-white text-lg font-semibold !my-4">Quick Link</h4>
                <ul className="!space-y-4 ">
                  <li><a href="/" className="text-gray-300  hover:text-white">Home</a></li>
                  <li><a href="/Services" className="text-gray-300 hover:text-white">Services</a></li>
                  <li><a href="/" className="text-gray-300 hover:text-white">Products</a></li>
                  <li><a href="/" className="text-gray-300 hover:text-white">Portfolio</a></li>
                  <li><a href="/AboutUs" className="text-gray-300 hover:text-white">About us</a></li>
                  <li><a href="/ContactUs" className="text-gray-300 hover:text-white">Contact us</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white text-lg font-semibold !my-4">Support</h4>
                <ul className="!space-y-4">
                  <li><a href="/" className="text-gray-300 text-manrope hover:text-white">Getting started</a></li>
                  <li><a href="/" className="text-gray-300 text-manrope hover:text-white">Help center</a></li>
                  <li><a href="/" className="text-gray-300 text-manrope hover:text-white">Report a bug</a></li>
                  <li><a href="/" className="text-gray-300 text-manrope hover:text-white">Chat support</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white text-lg font-semibold !my-4">Contact Us</h4>
                <ul className="!space-y-4">
                  <li><a href="/" className="text-gray-300 text-manrope hover:text-white">contact@company.com</a></li>
                  <li><a href="/" className="text-gray-300 text-manrope hover:text-white">(414) 687 - 5892</a></li>
                  <li><a href="/" className="text-gray-300 text-manrope hover:text-white">794 Mcallister St San Francisco, 94102</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section (no background images) */}
      <div className="bg-[#191521] h-[80px] flex flex-col lg:flex-row justify-center items-center text-[#6E6E6E] text-[16px] px-6">
        <p className="!px-2">Copyright 2025 by Vikramaadhithya theme All Right Reserved. </p>
        {/* <div className="flex items-center !gap-4 mt-4 lg:mt-0">
          <a href="/" className="hover:text-white">Terms and Conditions</a>
          <span>|</span>
          <a href="/" className="hover:text-white">Privacy Policy</a>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
