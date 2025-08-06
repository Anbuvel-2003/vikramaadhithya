import React from "react";
import { BsTelephoneOutbound } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
    <section className="bg-[#F6F8FC] !py-16">
      {/* Heading */}
      <div className="text-center font-bold !mb-10">
        <h1 className="lg:text-[50px] md:text-[28px] text-[20px] text-[#51553a]">
          Contact Us
        </h1>
        <h4 className="lg:text-[24px] md:text-[20px] text-[20px] text-[#2C48A2]">
          Get in Touch
        </h4>
        <h2 className="lg:text-[40px] md:text-[28px] text-[20px] text-[#0E1F51]">
          Hey! Let's Talk
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-10 !px-6 lg:!px-20">
        <div>
        <div>
        <p className="lg:text-[58px] md:text-[30px] text-[20px] font-bold font-manrope text-[#0E1F51] ">
          Contact Us
        </p>
        <p className="lg:text-[20px] md:text-[18px] text-[16px] font-manrope w-3/4 !pb-5 text-[#696969] ">
          We’d love to hear from you! Whether you have a question, need expert advice, or want to start a project — our team is ready to help
        </p>
</div>



        {/* Contact Info */}
        <div>
          {/* Email */}
          <div className="flex gap-6 pb-5">
            <div className="flex items-center justify-center rounded-xl h-16 w-16 bg-[#F7F7F7]">
              <MdOutlineEmail size={25} color="#2C48A2" />
            </div>
            <div>
              
              <p className="text-[#0E1F51] text-sm lg:text-base">
                connect@gmail.com <br /> he@gmail.com
              </p>
            </div>
          </div>



          {/* Location */}
          <div className="flex gap-6 pb-5">
            <div className="flex items-center justify-center rounded-xl h-16 w-16 bg-[#F7F7F7]">
              <MdOutlineLocationOn size={25} color="#2C48A2" />
            </div>
            <div>
             
              <p className=" text-[#0E1F51] text-sm  lg:text-base">
                20 Island Park Road, New Jearsy, New York, USA
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-6 pb-5">
            <div className="flex items-center justify-center rounded-xl h-16 w-16 bg-[#F7F7F7]">
              <BsTelephoneOutbound size={25} color="#2C48A2" />
            </div>
            <div>
              
              
              
          </div>

          {/* Follow Us */}
          <div className="mt-8">
            <p className=" text-[#0E1F51] lg:text-[24px] md:text-[22px] text-[20px] font-medium">
              Follow Us
            </p>
            <div className="flex gap-5 !pt-5">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <GrLinkedinOption
                  size={15}
                  color="white"
                  className="bg-[#2C48A2] rounded-lg h-12 w-12 !p-3"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram
                  size={15}
                  color="white"
                  className="bg-[#2C48A2] rounded-lg h-12 w-12 !p-3"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
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
            <Form
              onSubmit={handleSubmit}
              className=" "
            >
              {/* Name */}
              <div className="!mb-6">
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="peer w-full bg-[#F6F6F6] border border-gray-300 text-gray-900 text-md rounded-md !px-3 !py-3 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm !mt-1"
                />
              </div>

              {/* Mobile */}
              <div className="!mb-6">
                <Field
                  type="text"
                  name="mobile"
                  placeholder="Mobile"
                  maxLength="10"
                  onKeyDown={(e) => {
                    if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab') {
                      e.preventDefault();
                    }
                  }}
                  className="w-full bg-[#F6F6F6] border border-gray-300 text-gray-900 text-md rounded-md !px-3 !py-3 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="text-red-500 text-sm !mt-1"
                />
              </div>

              {/* Email */}
              <div className="!mb-6">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full bg-[#F6F6F6] border border-gray-300 text-gray-900 text-md rounded-md !px-3 !py-3 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm !mt-1"
                />
              </div>

              {/* Address */}
              <div className="!mb-6">
                <Field
                  type="text"
                  as="textarea"
                  rows="6"
                  name="address"
                  placeholder="Address"
                  className="w-full bg-[#F6F6F6] border border-gray-300 text-gray-900 text-md rounded-md !px-3 !py-3 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 text-sm !mt-1"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="lg:w-1/3 w-full cursor-pointer border border-transparent hover:bg-white hover:text-[#9F70FD] hover:border-[#9F70FD] bg-[#2C48A2] text-white font-medium !py-3 !px-6 rounded-lg transition duration-200"
              >
                Send Message
              </button>
            </Form>
          )}
        </Formik>


      </div>
    </section>
  );
}

export default Contactus;
