import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";


// import logo from "../assets/img/logo.png";

function Footersection() {
  return (
    <section>
      <div>
        <div>
          <div className="lg:flex  bg-[#F6F8FC] !p-15 ">
            <div className="">
              {/* <img src={logo} alt="logo" /> */}
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
        <div className="bg-[#191521] h-[80px] flex justify-center items-center text-[#6E6E6E] text-[16px] !px-6">
        <p className="!px-2 ">Copyright  2025 by Vikramaadhithya theme All Right Reserved. </p>
      </div>
        </div>
      </div>
    </section>
  );
}

export default Footersection;
