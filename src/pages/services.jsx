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
import img14 from "../img/touch.png";
import Progress from "./components/progress";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Formik, Field, ErrorMessage, Form as FormikForm } from "formik";
import * as Yup from "yup";


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

const TouchSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
})



function Services() {
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="!mt-15">
      {/* Header Section with Background */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex flex-col items-center justify-center">
        <img
          src={img}
          alt="section background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <h1 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[50px] text-white font-bold text-center !px-4">
          Services
        </h1>
        <div className="border-t-[3px] border-white rounded-2xl w-[60px] sm:w-[80px] !mt-2 sm:!mt-4"></div>
      </div>

      {/* Services Content */}
      <div className="w-full !px-5 sm:!px-8 md:!px-12 lg:!px-15 !py-10 sm:!py-12 md:!py-15">
        {/* Section Title */}
        <p className="text-[#104CBA] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-manrope text-center font-semibold leading-8 sm:leading-10">
          Services
        </p>
        <p className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[40px] font-bold font-manrope text-center text-[#0E1F51] ">
          Our Expertise
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !gap-6 sm:!gap-8 md:!gap-10 !px-4 sm:!px-8 md:!px-10 lg:!px-30 !py-6 sm:!py-8 md:!py-10">
          {services.map((service) => {
            const isHovered = hoveredId === service.id;
            return (
              <div
                key={service.id}
                className="rounded-[20px] shadow-2xl !p-5 sm:!p-6 flex flex-col items-center transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: isHovered ? "#0E1F51" : "white",
                }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`!h-16 !w-16 sm:!h-20 sm:!w-20 flex items-center justify-center border-none
              ${isHovered ? "rounded-tr-2xl rounded-bl-2xl rounded-sm" : "rounded-tl-2xl rounded-br-2xl rounded-sm"}`}
                  style={{
                    backgroundColor: isHovered ? "white" : service.bg,
                  }}
                >
                  <img
                    src={isHovered ? service.imgWhite : service.img}
                    alt={service.title}
                    className="!w-10 !h-10 sm:!w-14 sm:!h-14 object-contain !p-2"
                  />
                </div>
                <h3
                  className={`text-[18px] sm:text-[20px] lg:text-[24px] font-bold !my-3 sm:!my-4
              ${isHovered ? "text-white" : "text-[#212121]"}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center
              ${isHovered ? "text-white" : "text-[#696969]"}`}
                >
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>


      {/* Progress Bar */}
      <div className="!mx-10 md:!mx-12 lg:!mx-15">
        <Progress />
      </div>

      {/* Impressions */}

      <div className="!my-10 ">
        {/* Background image */}
        <img
          src={img13}
          alt=""
          className="absolute w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover -z-10"
        />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center !px-4 sm:!px-6 lg:!px-15 !py-10 md:!py-25 lg:!py-auto">
          <p className="text-white text-[20px] md:text-[25px] lg:text-[30px] font-manrope text-center font-bold leading-8 md:leading-10">
            Impressions are Everything
          </p>
          <p className="text-[30px] md:text-[50px] lg:text-[96px] font-bold font-manrope text-center text-white !mb-10 md:!mb-12 lg:!mb-16">
            Transform Digital <br /> Brands
          </p>

          {/* Button */}
          <div className="flex justify-center">
            <div
              onClick={() => navigate("/Contactus")}
              className="group flex justify-center items-center rounded-xl bg-[#2C48A2] text-white
                   lg:h-15 lg:w-40 h-10 md:h-12 md:w-40 w-40 cursor-pointer transition-colors duration-300
                   hover:bg-white hover:text-[#2C48A2] !gap-2"
            >
              <span className="lg:text-[22px] font-semibold md:text-[16px] text-[14px] transition-colors duration-300">
                Contact us
              </span>
            </div>
          </div>
        </div>
      </div>


      {/* get in touch */}

      <div className="!px-10 lg:!px-15 !pb-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:!gap-12">

          {/* Left - Image */}
          <div className="flex justify-center items-center w-full md:w-1/2">
            <img src={img14} alt="" className="max-w-full h-auto" />
          </div>

          {/* Right - Form */}
          <div className="w-full md:w-1/2 relative">
            <h2 className="lg:text-[20px] md:text-[18px] text-[16px] font-semibold text-[#0E1F51] !mb-2">
              Get in Touch
            </h2>
            <p className="lg:text-[40px] md:text-[30px] text-[20px] font-bold font-manrope text-[#0E1F51]">
              Send us a message
            </p>
            <p className="lg:text-[20px] md:text-[18px] text-[16px] font-medium text-[#696969] !pt-4">
              We’d love to hear from you! Whether you need expert advice, or want to start a project — our team is ready to help.
            </p>

            <div className="!py-8">
              <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validationSchema={TouchSchema}
                onSubmit={(values, { resetForm }) => {
                  console.log("Form Submitted", values);
                  resetForm();
                }}
              >
                {() => (
                  <FormikForm className="flex flex-col !gap-6">

                    {/* Name Field */}
                    <div className="relative w-full">
                      <Field
                        type="text"
                        name="name"
                        id="name"
                        placeholder=" "
                        className="peer w-full bg-[#F6F6F6] focus:bg-white border-0 text-gray-900 text-md rounded-md !px-3 !py-3 focus:outline-none focus:ring-2 focus:ring-[#2C48A2]"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-3 !px-1 text-gray-500 text-md transition-all
                    bg-[#F6F6F6]
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-md
                    peer-focus:-top-3 peer-focus:text-sm peer-focus:text-purple-500 peer-focus:bg-white
                    peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:bg-white
                    z-10"
                      >
                        Name
                      </label>
                      <ErrorMessage name="name" component="div" className="text-red-500 text-sm !pt-2" />
                    </div>

                    {/* Email Field */}
                    <div className="relative w-full">
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        placeholder=" "
                        className="peer w-full bg-[#F6F6F6] focus:bg-white border-0 text-gray-900 text-md rounded-md !px-3 !py-3 focus:outline-none focus:ring-2 focus:ring-[#2C48A2]"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-3 !px-1 text-gray-500 text-md transition-all
                    bg-[#F6F6F6]
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-md
                    peer-focus:-top-3 peer-focus:text-sm peer-focus:text-purple-500 peer-focus:bg-white
                    peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:bg-white
                    z-10"
                      >
                        Email
                      </label>
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm !pt-2" />
                    </div>

                    {/* Message Field */}
                    <div className="relative w-full">
                      <Field
                        as="textarea"
                        name="message"
                        id="message"
                        rows={5}
                        placeholder=" "
                        className="peer w-full bg-[#F6F6F6] focus:bg-white border-0 text-gray-900 text-md rounded-md !px-3 !py-3 focus:outline-none focus:ring-2 focus:ring-[#2C48A2]"
                      />
                      <label
                        htmlFor="message"
                        className="absolute left-3 !px-1 text-gray-500 text-md transition-all
                    bg-[#F6F6F6]
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-md
                    peer-focus:-top-3 peer-focus:text-sm peer-focus:text-purple-500 peer-focus:bg-white
                    peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:bg-white
                    z-10"
                      >
                        Message
                      </label>
                      <ErrorMessage name="message" component="div" className="text-red-500 text-sm !pt-2" />
                    </div>

                    {/* Submit Button */}
                    <div
                      onClick={() => navigate("/")}
                      className="group flex justify-center items-center rounded-xl bg-[#2C48A2] text-white
                   lg:h-15 lg:w-50 h-10 md:h-12 md:w-40 w-40 cursor-pointer transition-colors duration-300
                   hover:bg-white hover:text-[#2C48A2] hover:border-2 hover:border-[#2C48A2] !gap-2"
                    >
                      <span className="lg:text-[22px] font-semibold md:text-[16px] text-[14px] transition-colors duration-300">
                         Send Message
                      </span>

                    </div>
                  </FormikForm>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>










    </div>
  );
}

export default Services;
