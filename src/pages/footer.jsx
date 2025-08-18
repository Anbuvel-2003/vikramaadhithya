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
          className="absolute opacity-50 object-cover w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] 
          top-0 left-1/2 -translate-x-1/2 
          lg:left-0 lg:bottom-0 lg:top-auto lg:translate-x-0"
        />
        <img
          src={bg1}
          alt="bg"
          className="absolute opacity-50 object-cover w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] 
          bottom-0 left-1/2 -translate-x-1/2 
          lg:right-0 lg:bottom-0 lg:left-auto lg:translate-x-0"
        />

        {/* Content */}
        <div className="relative z-10 !px-10 sm:!px-10 lg:!px-15 !py-12 lg:!pt-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            {/* Logo + About */}
            <div className="lg:w-1/2">
            <a href="/">
              <img src={logo} alt="logo" className="w-[180px] sm:w-[200px] !mb-6" /></a>
              <p className="text-gray-300 lg:w-[75%] leading-8 sm:leading-10 text-justify !mb-6">
                Crafting digital solutions that power growth. We specialize in
                full-stack development, tailored software, and user-centric
                design—turning ideas into scalable, impactful technology.
                <br />
                Driven by innovation. Built for the future.
              </p>
              <div className="flex gap-5">
                <a href="https://www.facebook.com/share/16kW9eZbo2/" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF size={24} className="sm:!size-[28px]" />
                </a>
                <a href="https://www.instagram.com/vikramaadhithya_pvt.ltd?igsh=MTB5NDllcjVycnJmYQ==" target="_blank">
                  <FaInstagram size={24} className="sm:!size-[28px]" />
                </a>
                <a href="https://www.linkedin.com/company/aadhithyaa/" target="_blank" rel="noopener noreferrer">
                  <TbBrandLinkedin size={24} className="sm:!size-[28px]" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0 lg:w-1/2">
              <div>
                <h4 className="text-white text-lg font-semibold !mb-4">Quick Link</h4>
                <ul className="!space-y-3 sm:!space-y-4">
                  <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                  <li><a href="/Services" className="text-gray-300 hover:text-white">Services</a></li>
                  <li><a href="/portfolio" className="text-gray-300 hover:text-white">Portfolio</a></li>
                  <li><a href="/AboutUs" className="text-gray-300 hover:text-white">About us</a></li>
                  <li><a href="/ContactUs" className="text-gray-300 hover:text-white">Contact us</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white text-lg font-semibold !mb-4">Support</h4>
                <ul className="!space-y-3 sm:!space-y-4">
                  <li><a href="/" className="text-gray-300 hover:text-white">Getting started</a></li>
                  <li><a href="/" className="text-gray-300 hover:text-white">Help center</a></li>
                  <li><a href="/" className="text-gray-300 hover:text-white">Report a bug</a></li>
                  <li><a href="/" className="text-gray-300 hover:text-white">Chat support</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white text-lg font-semibold !mb-4">Contact Us</h4>
                <ul className="!space-y-3 sm:!space-y-4">
                  <li><a href="mailto:info@aadhithyaa.in" className="text-gray-300 hover:text-white">info@aadhithyaa.in</a></li>
                  <li><a href="tel:+91 74187 07788" className="text-gray-300 hover:text-white">+91 74187 07788</a></li>
                  <li>
                    <a
                      href="https://maps.app.goo.gl/TvLKzYiKDKixGPxz8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white"
                    >
                      H-22, Peelamedu, HUDCO Colony,<br />
                      Coimbatore, Tamil Nadu-641004
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center !mt-5 !gap-5">
            <a href="/privacy" className="text-gray-300 hover:text-white hover:underline cursor-pointer">Privacy Policy</a>
            <p>|</p>
            <a href="/terms" className="text-gray-300 hover:text-white hover:underline cursor-pointer">Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#191521] h-auto lg:h-[80px] flex flex-col lg:flex-row justify-center items-center text-[#6E6E6E] !text-[14px] sm:!text-[16px] !px-6 !py-4">
        <p className="text-center lg:text-left">Copyright 2025 by Vikramaadhithya theme All Right Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
