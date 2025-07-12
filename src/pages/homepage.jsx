import { useState } from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";


import logo from "../assets/img/logo.png";

function Homepage() {
  return (
    <div>
      {/* top section */}
      <section>
        <div>
          {/* <div className='grid lg:grid-cols-2 grid-cols-1 bg-[#F6F8FC] !px-10 !py-5'>
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
          </div> */}
          <div className='lg:grid lg:grid-cols-2 flex md:flex-col flex-col bg-[#F6F8FC] !pt-20 '>
            <div className='!ml-10'>
              <p className='text-[#262626] lg:text-[100px] text-[40px] font-semibold '>Creativity.</p>
              <p className='text-[#262626] lg:text-[100px] text-[40px] font-semibold '>Collabration.</p>
              <p className='text-[#0938D3] lg:text-[100px] text-[40px] font-semibold '>Development.</p>
              <div>
                <p className='!p-10 lg:text-[27px] md:text-[20px] text-[15px]  text-gray-700'>We help build and manage a team of world-class developers to bring your vision to life</p>
              </div>
              <div className='!pb-10'>
                <button className='border-2 border-none rounded-xl !mx-10 text-white font-semibold bg-[#3D63EA] lg:h-15 lg:w-50 h-10 w-35 lg:text-[19px]  md:text-[16px] text-[14px] '>Let's get started!</button>
              </div>
            </div>
            <div className='lg:!pl-50 w-[100%]  !pl-20 place-content-center'>
              <img src="src\assets\img\man-using-laptop.png" alt="man using laptop" />
            </div>
          </div>

        </div>

      </section>
      {/*  planning section */}
      <section>
        <div className='bg-white lg:!p-30'>
          <div className='text-center font-bold'>
            <h4 className='lg:text-[24px] md:text-[20px] text-[20px] text-[#2C48A2]'>Planning</h4>
            <h2 className='lg:text-[40px] md:text-[28px] text-[20px] text-[#0E1F51]'>Our Process</h2>
          </div>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 !p-5 '>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-5'>
              <img src='src\assets\img\Research.png' alt='Research' className='!pb-5 '></img>
              <h4 className='font-bold'>Research</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-5'>
              <img src='src\assets\img\Design.png' alt='Design' className='!pb-5'></img>
              <h4 className='font-bold'>Design</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-5'>
              <img src='src\assets\img\Develop.png' alt='Develop' className='!pb-5'></img>
              <h4 className='font-bold'>Develop</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-5'>
              <img src='src\assets\img\Test.png' alt='Test' className='!pb-5'></img>
              <h4 className='font-bold'>Test</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Vision  */}
      <section >
        <div className='bg-[#F6F8FC] lg:!p-15 !p-5'>
          <div className='lg:!m-20 md:!m-10 !m-10 w-fit  lg:flex grid !gap-10 '>
            <img src='src\assets\img\modern-office.png' alt='young people' className='rounded-[20px]'></img>
            <div className=' lg:!pl-20 pl-10 '>
              <h4 className='lg:text-[24px] md:text-[20px] text-[20px] font-bold text-[#2C48A2]'>What We Do</h4>
              <h2 className='lg:text-[40px] md:text-[28px] text-[20px] font-bold text-[#0E1F51]'>We Develop Products That <br></br>People Love To Use</h2>
              <p className='lg:text-[18px] text-[15px] !pt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed, Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
              <div className='lg:flex  rounded-xl lg:!gap-10 lg:!mt-10 md:!mt-5 !mt-5'>
                <div className='flex  bg-white lg:!p-4 !p-2 items-center !gap-2'>
                  <img src='src\assets\img\Our vision.png' alt='Our vision' />
                  <div>
                    <h4>Our Vision</h4>
                    <p>It is a long established fact that</p>
                  </div>
                </div>
                <div className='flex bg-white !p-4 items-center !gap-2 '>
                  <img src="src\assets\img\Goal.png" alt="out vision" />
                  <div>
                    <h4>Our Goal</h4>
                    <p>It is a long established fact that</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section>
        <div className='bg-white lg:!p-30'>
          <div className='text-center font-bold'>
            <h4 className='lg:text-[24px] md:text-[20px] text-[20px] text-[#2C48A2]'>Planning</h4>
            <h2 className='lg:text-[40px] md:text-[28px] text-[20px] text-[#0E1F51]'>Our Process</h2>
          </div>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 !p-5 '>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-5'>
              <img src='src\assets\img\web-design.png' alt='Web Design / Development' className='!pb-5 '></img>
              <h4 className='font-bold'>Web Design / Development</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-5'>
              <img src='src\assets\img\UI & UX.png' alt='UI / UX Design' className='!pb-5'></img>
              <h4 className='font-bold'>UI / UX Design</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-5'>
              <img src='src\assets\img\wm.png' alt='Website Migration' className='!pb-5'></img>
              <h4 className='font-bold'>Website Migration</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-5'>
              <img src='src\assets\img\App.png' alt='App Development' className='!pb-5'></img>
              <h4 className='font-bold'>App Development</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-5'>
              <img src='src\assets\img\Saas.png' alt='Saas Product Development' className='!pb-5 '></img>
              <h4 className='font-bold'>Saas Product Development</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-5'>
              <img src='src\assets\img\Testing.png' alt='Testing' className='!pb-5'></img>
              <h4 className='font-bold'>Testing</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-5'>
              <img src='src\assets\img\DevOps.png' alt='DevOps' className='!pb-5'></img>
              <h4 className='font-bold'>DevOps</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-5'>
              <img src='src\assets\img\Dm.png' alt='Digital marketing' className='!pb-5'></img>
              <h4 className='font-bold'>Digital marketing</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>

          </div>
        </div>
      </section>
      {/* Contact Us */}
      <section>
        <div>
          <div className='text-center font-bold'>
            <h4 className='lg:text-[24px] md:text-[20px] text-[20px] text-[#2C48A2]'>Get in Touch</h4>
            <h2 className='lg:text-[40px] md:text-[28px] text-[20px] text-[#0E1F51]'> Hey! Let's Talk </h2>
          </div>
          <div className='lg:!p-15 md:!p-10 !p-5 grid lg:grid-cols-2 grid-cols-1 '>
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
                     font-medium !py-3 !px-6 rounded-lg transition duration-200 " >
                    Send Now
                  </button>
                </div>
              </form>
            </div>
            <div className='lg:!px-50 lg:!pt-0 !pt-10'>
              <div className='flex gap-6 !pb-5'>
                <div className='flex border border-transparent rounded-xl h-16 w-16 items-center justify-center  bg-[#F7F7F7] '>
                  <FaPhoneVolume size={30} color="#2C48A2" /></div>
                <div className=' '>
                  <h4 className='text-[#2C48A2] lg:text-[20px] md:text-[18px] text-[16px] font-medium '>Call Anytime</h4>
                  <div className='lg:text-[16px]  text-[14px] text-[#0E1F51]'> 
                    <a href='/'>+ 91 23678 27867</a><br />
                    <a href='/'>+ 91 67678 92878</a>
                  </div>
                </div>
              </div>
              <div className='flex gap-6 !pb-5'>
                <div className='flex items-center justify-center border border-transparent rounded-xl h-15 w-16 place-items-center  bg-[#F7F7F7] '>
                  <MdEmail size={30} color="#2C48A2" /></div>
                <div className=' '>
                  <h4 className='text-[#2C48A2] lg:text-[20px] md:text-[18px] text-[16px] font-medium '>Send Email</h4>
                  <div className='lg:text-[16px] text-[14px] text-[#0E1F51] '>
                    <a href='/'>connect@gmail.com</a><br />
                    <a href='/'>he@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className='flex gap-6 !pb-5'>
                <div className='flex items-center justify-center border border-transparent rounded-xl h-15 w-16 place-items-center  bg-[#F7F7F7] '>
                  <IoLocation size={30} color="#2C48A2" /></div>
                <div className=' '>
                  <h4 className='text-[#2C48A2] lg:text-[20px] md:text-[18px] text-[16px] font-medium '>Visit Us</h4>
                  <a href='/' className='lg:text-[16px] text-[14px] text-[#0E1F51]'>20 Island Park Road,
                    New Jearsy, New York, USA</a>
                </div>
              </div>

              <div className=''>
                <div className='text-center text-[#0E1F51] lg:text-[24px] md:text-[22px] text-[20px] font-medium'>
                  <p>Follow Us</p>
                </div>
                <div className='flex justify-center gap-5 !pt-5'>
                  <a href="" target="_blank">
                    <GrLinkedinOption size={30} color="white" className='border bg-[#2C48A2] rounded-lg h-12 w-12 !p-2 ' />
                  </a>
                  <a href="" target="_blank">
                    <FaInstagram size={30} color="white" className='border bg-[#2C48A2] rounded-lg h-12 w-12 !p-2 ' />
                  </a>
                  <a href="" target="_blank">
                    <FaFacebookF size={30} color="white" className='border bg-[#2C48A2] rounded-lg h-12 w-12 !p-2 ' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      {/* footer */}
      <section>
        <div>
          <div>
          <div className='lg:flex  bg-[#F6F8FC] !p-15 '>
            <div className='' >
              <img src={logo} alt="logo" />
              <p className='lg:flex lg:w-1/2 w-full text-neutral-600 !py-10'>Empowering the future of wealth through intelligent, high-return lending with data-driven credit assessment and active tracking</p>
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
                  <a href="/" className="text-neutral-600 text-[14px] font-light ">
                    contact@company.com
                  </a>
                </h4>
                <h4 className="flex !mb-3 ">
                  {" "}
                  <a href="/" className="text-neutral-600 !pl-1 text-[14px] font-light !p ">
                    (414) 687 - 5892
                  </a>
                </h4>
                <h4 className="!mb-3">
                  {" "}
                  <a href="/" className="text-neutral-600 text-[14px] font-light ">
                    794 Mcallister St San Francisco, 94102
                  </a>
                </h4>
              </div>
            </div>
        </div>
          </div>
        <div className=' bg-[#F6F8FC] lg:w-full !px-15 !pb-10'>
          <hr className='my-4 m-8 border-t border-neutral-400'></hr>
          <div className='grid lg:grid-cols-2 grid-cols-1 lg:text-[18px] md:text-[14px] text-[12px] !pt-1 '>
          <div>
            <p>Copyright © 2025 VIKRAMAADHITHYA</p>
            </div>
            <div className='lg:flex md:flex  lg:place-content-end items-center gap-4 '>
              <p>All Rights Reserved</p>
              <span className="text-[#6e6e6e]">|</span>
              <a href='/'>  Terms and Conditions </a>
              <span className="text-[#6e6e6e]">|</span>
              <a href='/'>Privacy Policy</a>
            </div>
        </div>
        </div>
        </div>
        </div>
      </section>
    </div >
     
  )
}

export default Homepage
