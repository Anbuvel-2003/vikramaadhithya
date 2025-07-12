import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";


import logo from "../assets/img/logo.png";

function Footersection() {
  return (
    <section>
      <div>
        <div>
          <div className="lg:flex  bg-[#F6F8FC] !p-15 ">
            <div className="">
              <img src={logo} alt="logo" />
              <p className="lg:flex lg:w-1/2 w-full text-neutral-600 !py-10">
                Empowering the future of wealth through intelligent, high-return
                lending with data-driven credit assessment and active tracking
              </p>
              <div className="flex !mt-3 !gap-5 lg:!mb-0 md:!lg-15 !mb-10">
                <div>
                  <a href="/" target="_blank">
                    <FaFacebookF size={30} color="#2C48A2" />
                  </a>
                </div>
                <div>
                  <a href="" target="_blank">
                    <FaInstagram size={30} color="#2C48A2" />
                  </a>
                </div>
                <div>
                  <a href="" target="_blank">
                    <TbBrandLinkedin size={30} color="#2C48A2" />
                  </a>
                </div>
              </div>
            </div>

            <div className=" lg:flex md:flex grid grid-cols-1 sm:grid-cols-2 !gap-10  lg:flex-1/3 md:flex-1/3 sm:flex-1/2 flex-1 w-full lg:justify-evenly justify-around">
              <div className="">
                <div className="!mb-6">
                  <h4 className="text-neutral-800 text-[22px] font-medium capitalize ">
                    Company
                  </h4>
                </div>
                <div>
                  <h4 className="!mb-3">
                    {" "}
                    <a
                      href="/"
                      className="text-neutral-600 text-[14px] font-light  "
                    >
                      Home
                    </a>
                  </h4>
                  <h4 className="!mb-3">
                    {" "}
                    <a
                      href="/"
                      className="text-neutral-600 text-[14px] font-light "
                    >
                      Services
                    </a>
                  </h4>
                  <h4 className="!mb-3">
                    {" "}
                    <a
                      href="/"
                      className="text-neutral-600 text-[14px] font-light "
                    >
                      Products
                    </a>
                  </h4>
                  <h4 className="!mb-3">
                    {" "}
                    <a
                      href="/"
                      className="text-neutral-600 text-[14px] font-light "
                    >
                      Portfolio
                    </a>
                  </h4>
                  <h4 className="!mb-3">
                    {" "}
                    <a
                      href="/AboutUs"
                      className="text-neutral-600 text-[14px] font-light "
                    >
                      About us
                    </a>
                  </h4>
                  <h4 className="!mb-3">
                    {" "}
                    <a
                      href="/ContactUs"
                      className="text-neutral-800 text-[14px] font-light "
                    >
                      Contact us
                    </a>
                  </h4>
                </div>
              </div>
              <div>
                <div className="!mb-6">
                  <h4 className="text-neutral-800 text-[22px] font-medium  ">
                    Support
                  </h4>
                </div>
                <div>
                  <h4 className="!mb-3">
                    {" "}
                    <a
                      href="/"
                      className="text-neutral-600 text-[14px] font-light "
                    >
                      Getting started
                    </a>
                  </h4>
                  <h4 className="!mb-3">
                    {" "}
                    <a
                      href="/"
                      className="text-neutral-600 text-[14px] font-light "
                    >
                      Help center
                    </a>
                  </h4>
                  <h4 className="!mb-3">
                    {" "}
                    <a
                      href="/"
                      className="text-neutral-600 text-[14px] font-light "
                    >
                      Report a bug
                    </a>
                  </h4>
                  <h4 className="!mb-3">
                    {" "}
                    <a
                      href="/"
                      className="text-neutral-600 text-[14px] font-light "
                    >
                      Chat support
                    </a>
                  </h4>
                </div>
              </div>
              <div>
                <div className="!mb-6">
                  <h4 className="text-neutral-800 text-[22px] font-medium  ">
                    Contacts us
                  </h4>
                </div>
                <div>
                  <h4 className="!mb-3">
                    {" "}
                    <a
                      href="/"
                      className="text-neutral-600 text-[14px] font-light "
                    >
                      contact@company.com
                    </a>
                  </h4>
                  <h4 className="flex !mb-3 ">
                    {" "}
                    <a
                      href="/"
                      className="text-neutral-600 !pl-1 text-[14px] font-light !p "
                    >
                      (414) 687 - 5892
                    </a>
                  </h4>
                  <h4 className="!mb-3">
                    {" "}
                    <a
                      href="/"
                      className="text-neutral-600 text-[14px] font-light "
                    >
                      794 Mcallister St San Francisco, 94102
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-[#F6F8FC] lg:w-full !px-15 !pb-10">
            <hr className="my-4 m-8 border-t border-neutral-400"></hr>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:text-[18px] md:text-[14px] text-[12px] !pt-1 ">
              <div>
                <p>Copyright © 2025 VIKRAMAADHITHYA</p>
              </div>
              <div className="lg:flex md:flex  lg:place-content-end items-center gap-4 ">
                <p>All Rights Reserved</p>
                <span className="text-[#6e6e6e]">|</span>
                <a href="/"> Terms and Conditions </a>
                <span className="text-[#6e6e6e]">|</span>
                <a href="/">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footersection;
