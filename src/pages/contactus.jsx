import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

function Contactus() {
  return (
    <section>
      <div>
        <div className="text-center font-bold">
          <h4 className="lg:text-[24px] md:text-[20px] text-[20px] text-[#2C48A2]">
            Get in Touch
          </h4>
          <h2 className="lg:text-[40px] md:text-[28px] text-[20px] text-[#0E1F51]">
            {" "}
            Hey! Let's Talk{" "}
          </h2>
        </div>
        <div className="lg:!p-15 md:!p-10 !p-5 grid lg:grid-cols-2 grid-cols-1 ">
          <div className=" ">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 ">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full !px-4 !py-3 bg-[#F7F7F7] focus:bg-white  border text-[#252525] border-[#F7F7F7] rounded-lg transition duration-200 !mb-3 "
                    placeholder="Name..."
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full !px-4 !py-3  bg-[#F7F7F7] focus:bg-white border border-[#F7F7F7] rounded-lg  transition duration-200 !mb-3"
                  placeholder="email..."
                />
              </div>
              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full !px-4 !py-3  bg-[#F7F7F7] focus:bg-white border border-[#F7F7F7] rounded-lg  transition duration-200 !mb-3"
                  placeholder="subject..."
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full !px-4 !py-3  bg-[#F7F7F7] focus:bg-white border border-[#F7F7F7] rounded-lg transition duration-200 !mb-3"
                  placeholder="Message..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w- cursor-pointer relative overflow-hidden border border-transparent
                     hover:!bg-white hover:text-[#9F70FD] hover:border-[#9F70FD] bg-[#2C48A2] text-white 
                     font-medium !py-3 !px-6 rounded-lg transition duration-200 "
                >
                  Send Now
                </button>
              </div>
            </form>
          </div>
          <div className="lg:!px-50 lg:!pt-0 !pt-10">
            <div className="flex gap-6 !pb-5">
              <div className="flex border border-transparent rounded-xl h-16 w-16 items-center justify-center  bg-[#F7F7F7] ">
                <FaPhoneVolume size={30} color="#2C48A2" />
              </div>
              <div className=" ">
                <h4 className="text-[#2C48A2] lg:text-[20px] md:text-[18px] text-[16px] font-medium ">
                  Call Anytime
                </h4>
                <div className="lg:text-[16px]  text-[14px] text-[#0E1F51]">
                  <a href="/">+ 91 23678 27867</a>
                  <br />
                  <a href="/">+ 91 67678 92878</a>
                </div>
              </div>
            </div>
            <div className="flex gap-6 !pb-5">
              <div className="flex items-center justify-center border border-transparent rounded-xl h-15 w-16 place-items-center  bg-[#F7F7F7] ">
                <MdEmail size={30} color="#2C48A2" />
              </div>
              <div className=" ">
                <h4 className="text-[#2C48A2] lg:text-[20px] md:text-[18px] text-[16px] font-medium ">
                  Send Email
                </h4>
                <div className="lg:text-[16px] text-[14px] text-[#0E1F51] ">
                  <a href="/">connect@gmail.com</a>
                  <br />
                  <a href="/">he@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="flex gap-6 !pb-5">
              <div className="flex items-center justify-center border border-transparent rounded-xl h-15 w-16 place-items-center  bg-[#F7F7F7] ">
                <IoLocation size={30} color="#2C48A2" />
              </div>
              <div className=" ">
                <h4 className="text-[#2C48A2] lg:text-[20px] md:text-[18px] text-[16px] font-medium ">
                  Visit Us
                </h4>
                <a
                  href="/"
                  className="lg:text-[16px] text-[14px] text-[#0E1F51]"
                >
                  20 Island Park Road, New Jearsy, New York, USA
                </a>
              </div>
            </div>

            <div className="">
              <div className="text-center text-[#0E1F51] lg:text-[24px] md:text-[22px] text-[20px] font-medium">
                <p>Follow Us</p>
              </div>
              <div className="flex justify-center gap-5 !pt-5">
                <a href="" target="_blank">
                  <GrLinkedinOption
                    size={30}
                    color="white"
                    className="border bg-[#2C48A2] rounded-lg h-12 w-12 !p-2 "
                  />
                </a>
                <a href="" target="_blank">
                  <FaInstagram
                    size={30}
                    color="white"
                    className="border bg-[#2C48A2] rounded-lg h-12 w-12 !p-2 "
                  />
                </a>
                <a href="" target="_blank">
                  <FaFacebookF
                    size={30}
                    color="white"
                    className="border bg-[#2C48A2] rounded-lg h-12 w-12 !p-2 "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactus;
