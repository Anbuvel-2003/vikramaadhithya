import React, { useState } from "react";
import img from "../img/section.png";
import img1 from "../img/services1.png";
import img2 from "../img/services2.png";
import img3 from "../img/services3.png";
import img4 from "../img/services4.png";
import img5 from "../img/services5.png";
import img6 from "../img/services6.png";
import img7 from "../img/W-services1.png";
import img8 from "../img/W-services2.png";
import img9 from "../img/W-services3.png";
import img10 from "../img/W-services4.png";
import img11 from "../img/W-services5.png";
import img12 from "../img/W-services6.png";
import img13 from "../img/services01.png";
import Progress from "./components/progress";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const services = [
  {
    id: 1,
    title: "IT Consultancy",
    desc: "Expert advice to align your tech strategy with business goals and boost performance",
    img: img1,
    imgWhite: img7,
    bg: "#6B6FFF",
  },
  {
    id: 2,
    title: "Web Development",
    desc: "Responsive, scalable websites built for speed, security, and modern user experiences.",
    img: img2,
    imgWhite: img8,
    bg: "#DEB0FE",
  },
  {
    id: 3,
    title: "Digital Marketing",
    desc: "Data-driven strategies to grow your brand, drive traffic, and convert leads effectively.",
    img: img3,
    imgWhite: img9,
    bg: "#79E8E2",
  },
  {
    id: 4,
    title: "App Development",
    desc: "Custom mobile apps tailored for iOS and Android with seamless user experience.",
    img: img4,
    imgWhite: img10,
    bg: "#FCC774",
  },
  {
    id: 5,
    title: "E-commerce Development",
    desc: "Robust online stores with secure payments and user-friendly shopping experiences.",
    img: img5,
    imgWhite: img11,
    bg: "#84B7FD",
  },
  {
    id: 6,
    title: "IT Solutions",
    desc: "End-to-end IT services that simplify infrastructure, security, and ongoing support.",
    img: img6,
    imgWhite: img12,
    bg: "#FE929F",
  },
];





function Services() {
  const [hoveredId, setHoveredId] = useState(null);
   const navigate = useNavigate();

  return (
    <div className="!mt-15">
      {/* Header Section with Background */}
      <div className="relative w-full h-[400px] flex flex-col items-center justify-center  ">
        <img
          src={img}
          alt="section background"
          className="absolute inset-0 w-full h-full object-fit -z-10 "
        />
        <h1 className="lg:text-[50px] md:text-[28px] text-[20px] text-white font-bold">
          Services
        </h1>
        <div className="border-t-[3px] border-white rounded-2xl w-[80px] !mt-4"></div>
      </div>

      {/* Services Content */}
      <div className="w-full !px-15 !py-15">
        <p className="text-[#104CBA] lg:text-[24px] md:text-[20px] text-[16px] font-manrope text-center font-semibold leading-10">
          Services
        </p>
        <p className="lg:text-[40px] md:text-[30px] text-[20px] font-bold font-manrope text-center text-[#0E1F51] mb-16">
          Our Expertise
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !gap-10 lg:!px-30 md:!px-20 !px-10 !py-10">
          {services.map((service) => {
            const isHovered = hoveredId === service.id;
            return (
              <div
                key={service.id}
                className="rounded-[20px] shadow-2xl !p-6 flex flex-col items-center transition-all duration-300 cursor-pointer"
                style={
                  isHovered
                    ? { backgroundColor: "#0E1F51" }
                    : { backgroundColor: "white" }

                }
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`h-20 w-20 flex  items-center justify-center border-2 border-none 
                  ${isHovered ? "rounded-tr-2xl rounded-bl-2xl rounded-sm" : "rounded-tl-2xl rounded-br-2xl rounded-sm"}`}
                  style={{
                    backgroundColor: isHovered ? "white" : service.bg,
                  }}

                >
                  <img
                    src={isHovered ? service.imgWhite : service.img}
                    alt={service.title}
                    className="w-14 h-14 object-contain !p-2"
                  />
                </div>
                <h3
                  className={`lg:text-[24px] md:text-[20px] text-[18px] font-bold !my-4 text-[#212121] ${isHovered ? "text-white" : "text-[#212121]"
                    }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`!m-2 lg:text-[20px] md:text-[18px] text-[16px] text-center ${isHovered ? "text-white" : "text-[#696969]"
                    }`}
                >
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="!m-15">
        <Progress />
      </div>

      <div className="!my-15">
         <img src={img13} alt="" 
    className="absolute w-full h-full object-cover -z-10"
        />
        <div className="relative items-center justify-center  !px-6 lg:!px-15 !py-40">
        <p className="text-white lg:text-[30px] md:text-[25px] text-[20px] font-manrope text-center font-bold leading-10">
          Impressions are Everything
        </p>
        <p className="lg:text-[96px] md:text-[50px] text-[30px] font-bold font-manrope text-center text-white mb-16">
          Transform Digital <br /> Brands
        </p>
        <div className="flex justify-center">
        <div
        onClick={() => navigate("/")}
        className="flex justify-center items-center border-2 border-none rounded-xl bg-[#3D63EA] lg:h-15 lg:w-70 h-10 w-35 cursor-pointer">
        <div 
        className=" lg:text-[20px] items-center justify-center font-semibold text-white md:text-[16px] text-[14px] ">
          Contact us
          </div>
           <IoArrowForwardOutline
           color="white"
           size={40}
           className="!pl-4 "
           />
        </div>  
        </div>
       </div>
        </div>
    </div>
  );
}

export default Services;
