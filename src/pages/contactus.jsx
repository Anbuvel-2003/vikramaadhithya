import React from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import img from "../img/section.png";


// Validation schema
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .max(30, "Name must be at most 30 characters")
    .required("Name is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile must be exactly 10 digits")
    .required("Mobile is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  address: Yup.string().required("Address is required"),
});

function Contactus() {
  return (
    <section className=" !my-16">

      {/* Header Section with Background */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex flex-col items-center justify-center">
        <img
          src={img}
          alt="section background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <h1 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[50px] text-white font-bold text-center px-4">
          Contact Us
        </h1>
        <div className="border-t-[3px] border-white rounded-2xl w-[60px] sm:w-[80px] !mt-2 sm:!mt-4"></div>
      </div>

      {/* Heading */}
      <div className="text-center font-bold !m-10">
        <h4 className="lg:text-[24px] md:text-[20px] text-[20px] text-[#2C48A2]">
          Get in Touch
        </h4>
        <h2 className="lg:text-[40px] md:text-[30px] text-[25px] text-[#0E1F51]">
          Hey! Let's Talk
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2  gap-10 !px-10 lg:!px-15 ">
        <div>
          <div>
            <p className="lg:text-[58px] md:text-[30px] text-[20px] font-bold font-manrope  text-[#0E1F51] ">
              Contact Us
            </p>
            <p className="lg:text-[20px] md:text-[18px] text-[16px] font-manrope lg:w-3/4 md:w-3/4 w-full !pb-5 text-[#696969] ">
              We’d love to hear from you! Whether you have a question, need
              expert advice, or want to start a project — our team is ready to
              help
            </p>
          </div>

          {/* Contact Info */}
          <div>
            {/* Email */}
            <div className="flex !gap-6 lg:!pb-5 md:!pb-5 !pb-5">
              <div className="flex items-center justify-center rounded-xl">
                <MdOutlineEmail size={30} color="#2C48A2" />
              </div>
              <a href="mailto:info@aadhithyaa.in" className="text-black text-sm lg:text-base ">
                info@aadhithyaa.in
              </a>
            </div>

            {/* Location */}
            <div className="flex !gap-6 lg:!pb-5 md:!pb-5 !pb-5">
              <div className="flex items-center justify-center rounded-xl ">
                <MdOutlineLocationOn size={30} color="#2C48A2" />
              </div>
              <a href="" target="_blank" className="text-black text-sm lg:text-base ">
                H-22, Peelamedu, HUDCO Colony, <br /> Coimbatore, Tamil Nadu-641004
              </a>
            </div>

            {/* Phone */}
            <div className="flex !gap-6 !pb-5">
              <div className="flex items-center justify-center rounded-xl">
                <MdOutlinePhoneInTalk size={30} color="#2C48A2" />
              </div>
              <a href="tel:+917418707788" className="text-black text-sm lg:text-base ">
                +91 74187 07788
              </a>
            </div>

            {/* Follow Us */}
            <div className="!mt-8">
              <p className="text-[#0E1F51] lg:text-[24px] md:text-[22px] text-[20px] font-medium">
                Follow Us
              </p>
              <div className="flex !gap-5 !pt-5">
                <a href="https://www.linkedin.com/company/aadhithyaa/" target="_blank" rel="noopener noreferrer">
                  <GrLinkedinOption
                    size={15}
                    color="white"
                    className="bg-[#2C48A2] rounded-lg h-12 w-12 !p-3"
                  />
                </a>
                <a href="https://www.instagram.com/vikramaadhithya_pvt.ltd?igsh=MTB5NDllcjVycnJmYQ==" target="_blank" rel="noopener noreferrer">
                  <FaInstagram
                    size={15}
                    color="white"
                    className="bg-[#2C48A2] rounded-lg h-12 w-12 !p-3"
                  />
                </a>
                <a href="https://www.facebook.com/share/16kW9eZbo2/" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF
                    size={15}
                    color="white"
                    className="bg-[#2C48A2] rounded-lg h-12 w-12 !p-3"
                  />
                </a>
              </div>
            </div>

          </div>
        </div>

        <div className=" lg:!mt-10 ">
          {/* Form */}
          <Formik
            initialValues={{ name: "", mobile: "", email: "", address: "" }}
            validationSchema={ContactSchema}
            onSubmit={(values, { resetForm }) => {
              console.log("Form Submitted", values);
              resetForm();
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit} className="!space-y-6">

                {/* Name */}
                <div className="relative !mb-6">
                  <Field
                    type="text"
                    name="name"
                    placeholder=" "
                    className="peer w-full bg-[#F6F6F6] focus:bg-white border-0 text-gray-900 rounded-md !px-3 !py-3 focus:outline-none focus:ring-2 focus:ring-[#2C48A2]"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 !px-1 text-gray-500 text-md transition-all bg-[#F6F6F6]
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-md
            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#2C48A2] peer-focus:bg-white
            peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:bg-white
            z-10"
                  >
                    Name
                  </label>
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm !mt-1" />
                </div>

                {/* Mobile */}
                <div className="relative !mb-6">
                  <Field
                    type="text"
                    name="mobile"
                    placeholder=" "
                    maxLength="10"
                    onKeyDown={(e) => {
                      if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
                        e.preventDefault();
                      }
                    }}
                    className="peer w-full bg-[#F6F6F6] focus:bg-white border-0 text-gray-900 rounded-md !px-3 !py-3 focus:outline-none focus:ring-2 focus:ring-[#2C48A2]"
                  />
                  <label
                    htmlFor="mobile"
                    className="absolute left-3 !px-1 text-gray-500 text-md transition-all bg-[#F6F6F6]
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-md
            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#2C48A2] peer-focus:bg-white
            peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:bg-white
            z-10"
                  >
                    Mobile
                  </label>
                  <ErrorMessage name="mobile" component="div" className="text-red-500 text-sm !mt-1" />
                </div>

                {/* Email */}
                <div className="relative !mb-6">
                  <Field
                    type="email"
                    name="email"
                    placeholder=" "
                    className="peer w-full bg-[#F6F6F6] focus:bg-white border-0 text-gray-900 rounded-md !px-3 !py-3 focus:outline-none focus:ring-2 focus:ring-[#2C48A2]"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 !px-1 text-gray-500 text-md transition-all bg-[#F6F6F6]
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-md
            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#2C48A2] peer-focus:bg-white
            peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:bg-white
            z-10"
                  >
                    Email
                  </label>
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm !mt-1" />
                </div>

                {/* Address */}
                <div className="relative !mb-6">
                  <Field
                    as="textarea"
                    name="address"
                    rows="4"
                    placeholder=" "
                    className="peer w-full bg-[#F6F6F6] focus:bg-white border-0 text-gray-900 rounded-md !px-3 !py-3 focus:outline-none focus:ring-2 focus:ring-[#2C48A2]"
                  />
                  <label
                    htmlFor="address"
                    className="absolute left-3 !px-1 text-gray-500 text-md transition-all bg-[#F6F6F6]
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-md
            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#2C48A2] peer-focus:bg-white
            peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:bg-white
            z-10"
                  >
                    Address
                  </label>
                  <ErrorMessage name="address" component="div" className="text-red-500 text-sm !mt-1" />
                </div>

                {/* Submit */}
                <div
                  onClick={() => navigate("/")}
                  className="group flex justify-center items-center rounded-xl bg-[#2C48A2] text-white
                                  lg:h-15 lg:w-50 h-10 md:h-12 md:w-40 w-40 cursor-pointer transition-colors duration-300
                                  hover:bg-white hover:text-[#2C48A2] hover:border-2 hover:border-[#2C48A2] !gap-2"
                >
                  <button className="lg:text-[22px] font-semibold md:text-[16px] text-[14px] transition-colors duration-300">
                    Send Message
                  </button>

                </div>

              </Form>
            )}
          </Formik>
        </div>
      </div>


    </section >
  );
}

export default Contactus;