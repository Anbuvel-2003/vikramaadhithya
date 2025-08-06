import img1 from "../img/main_img.png"
import img2 from "../img/Mask group.png"
import img3 from "../img/faq.png"
import img4 from "../img/Img_05-7.webp.png"
import logo from "../img/main_logo.png"
import logo1 from "../img/white_logo.png"
import logo2 from "../img/va_favicon.png"
import goal from "../img/our_goal.png"
import vision from "../img/our_vision.png"
import icon1 from "../img/icon1.png"
import icon2 from "../img/icon2.png"
import icon3 from "../img/icon3.png"
import icon4 from "../img/icon4.png"
import React from 'react'
import Step from "./components/steps"
import { Divider, Steps } from 'antd';
import { number } from "yup"
import Faq from "./components/faq"



const items = [
  {
    id: 1,
    title: "01. Discussion ",
    desc: "We start with a collaborative meeting to understand your needs and business goals.",
  },
  {
    id: 2,
    title: "02. Ideas & concepts ",
    desc: "Our experts brainstorm and outline tailored solutions for your project.",
  },
  {
    id: 3,
    title: "03. Testing & Trying ",
    desc: "We test concepts, gather feedback, and make refinements before launch.",
  },
  {
    id: 4,
    title: "04. Execute & install ",
    desc: "We finalize, deploy, and ensure everything works seamlessly post-launch.",
  }
];


 const testing = [
    {
      id: 1,
      image: icon1,
      q1: "Design",
      q2: "We craft visually engaging and intuitive interfaces for a seamless user journey. Each design is purpose-driven and aligned with your brand identity.",
    },
    {
      id: 2,
      image: icon2,
      q1: "Testing",
      q2: "Our engineers write clean, efficient code for scalable and high-performance software. From frontend to backend, every layer is optimized for results.",
    },
    {
      id: 3,
      image: icon3,
      q1: "Development",
      q2: "We rigorously test across environments to ensure flawless functionality. From manual reviews to automated checks, quality is guaranteed.",
    },
    {
      id: 4,
      image: icon4,
      q1: "Deploy",
      q2: "We ensure smooth deployment with zero downtime and full optimization. Post-launch support and monitoring keep your product running at its best.",
    },
  ];




function homePage() {
  return (
    <div className=" ">
      <section>
        <div>

          <div className=' flex  lg:flex-row flex-col bg-[#F6F8FC] lg:!pt-30 !pt-20  '>
            <div className=' lg:!px-15 md:!px-10 !px-10 w-full '>
              <p className='text-[#262626] lg:text-[100px] md:text-[60px] text-[40px] font-semibold lg:leading-32 md:leading-12 leading-10'>Creativity.</p>
              <p className='text-[#262626] lg:text-[100px] md:text-[60px] text-[40px] font-semibold lg:leading-32 md:leading-20 leading-15'>Collabration.</p>
              <p className='text-[#0938D3] lg:text-[100px] md:text-[60px] text-[40px] font-semibold lg:leading-32 md:leading-12 leading-10'>Development.</p>
              <div>
                <p className='flex lg:!py-10 !py-5 lg:text-[27px] md:text-[20px] text-[15px]  text-gray-700'>
                  We bring together top-tier developers to help you build, scale, and succeed with digital innovation.
                </p>
              </div>
              <div className='!pb-20'>
                <button className='border-2 border-none rounded-xl  text-white font-semibold bg-[#3D63EA] lg:h-15 
                lg:w-50 h-10 w-35 lg:text-[19px]  md:text-[16px] text-[14px] '>
                  Let's get started!
                </button>
              </div>
            </div>
            <div className=' flex justify-center w-full '>
              <img src={img1}
                alt="man using laptop"
                className='lg:w-fit  md:w-1/2 w-1/2 ' />
            </div>
          </div>

        </div>
      </section>

      {/* who we are */}

      <section>

        <div className="bg-white  ">
          <div className='flex lg:flex-row flex-col lg:!pt-30 !pt-10 lg:!px-15 md:!px-10 !px-10 '>
            <div className='flex flex-col lg:w-1/2 md:w-full w-full justify-center '>
              <div className=' '>
                <p className='text-[#104CBA] lg:text-[24px] md:text-[20px] text-[16px] font-manrope font-semibold lg:leading-10 md:leading-10 leading-10'>
                  Who we are
                </p>
              </div>
              <div className='!pb-10'>
                <p className='lg:text-[40px] md:text-[30px] text-[20px] font-bold font-manrope lg:leading-18 md:leading-10 leading-8 text-[#0E1F51]'>
                  We Deliver Smarter Digital Solutions
                </p>
                <p className='lg:text-[18px] md:text-[16px] text-[14px]  text-[#696969] font-manrope lg:leading-10 md:leading-10 leading-7 text-justify'>
                  We’re a team of developers, designers, and strategists focused on creating tailored digital experiences.
                  From web development to marketing tech, we help your business grow with purpose-driven solutions.
                </p>
              </div>
              <div >
                <div className="flex flex-row gap-20 lg:!pb-20 !pb-10">
                  <div className='flex flex-col '>
                    <p className='lg:text-[40px] md:text-[30px] text-[20px] font-manrope font-bold text-[#2C48A2] '>100%</p>
                    <p className='lg:text-[20px] md:text-[16px] text-[14px] font-manrope font-semibold text-black '>Satisfaction</p>
                  </div>
                  <div className='flex flex-col '>
                    <p className='lg:text-[40px] md:text-[30px] text-[20px] font-manrope font-bold text-[#2C48A2] '>100%</p>
                    <p className='lg:text-[20px] md:text-[16px] text-[14px] font-manrope font-semibold text-black '>Trustable</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='lg:w-1/2 md:w-full w-full flex justify-center '>
              <img src={img4} alt="" />
            </div>

          </div>
        </div>



      </section>

      {/* what we do */}

      <section>

        <div className="bg-[#FCFCFC]  ">
          <div className='flex lg:flex-row flex-col !py-10 lg:!px-15 md:!px-10 lg:!mt-20 md:!mt-15 !mt-10 !px-10 '>
            <div className='lg:w-1/2 md:w-full w-full flex justify-center '>
              <img src={img2} alt="" />
            </div>
            <div className='flex flex-col lg:w-1/2 md:w-full w-full justify-center '>
              <div className=' '>
                <p className='text-[#104CBA] lg:text-[24px] md:text-[20px] text-[16px] font-manrope font-semibold lg:leading-10 md:leading-10 leading-5 lg:pt-0 md:pt-0 !py-5'>
                  What we do
                </p>
              </div>
              <div className='!pb-10'>
                <p className='lg:text-[40px] md:text-[30px] text-[20px] font-bold font-manrope lg:leading-18 md:leading-10 leading-5 lg:pb-0 md:pb-0 !pb-5 text-[#0E1F51]'>
                  We Develop Products That People Love to Use.
                </p>
                <p className='lg:text-[18px] md:text-[16px] text-[14px]  text-[#696969] font-manrope lg:leading-10 md:leading-10 leading-8 text-justify'>
                  We craft intelligent, scalable software and digital platforms that solve real-world problems. We specialize in building
                  digital products that blend functionality with delightful user experience. Every line of code and pixel of design
                  is crafted to meet user needs and exceed expectations.Our focus is on usability, performance, and long-term growth.
                </p>
              </div>
              <div className="flex lg:flex-row md:flex-col flex-col gap-4 ">
                <div className="flex flex-row  bg-[#F6FAFF] rounded-xl !p-3 gap-4 lg:w-1/2">
                  <img src={vision} alt="vision" />
                  <div className='flex flex-col  '>
                    <p className='lg:text-[20px] md:text-[16px] text-[14px] font-raleway font-semibold font-raleway text-[#2C48A2] '>Our Vision</p>
                    <p className='lg:text-[16px] md:text-[14px] text-[12px] font-manrope font-medium text-black '>
                      Deliver meaningful tech that empowers users.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row  bg-[#F6FAFF] rounded-xl !p-3 gap-4 ">
                  <img src={goal} alt="vision" className="w-fit" />
                  <div className='flex flex-col  '>
                    <p className='lg:text-[18px] md:text-[16px] text-[14px] font-raleway font-semibold font-raleway text-[#2C48A2] '>Our Goal</p>
                    <p className='lg:text-[16px] md:text-[14px] text-[12px] font-manrope font-medium text-[#0E1F51] '>
                      Build digital experiences that intuitive, reliable
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* how we work */}

      <section>

        <div className='flex flex-col w-full justify-center !py-10 !px-10'>
          <div className=' '>
            <p className='text-[#104CBA] lg:text-[24px] md:text-[20px] text-[16px] font-manrope text-center font-semibold lg:leading-10 md:leading-10 leading-10'>
              How we work
            </p>
          </div>
          <div className='!pb-16'>
            <p className='lg:text-[40px] md:text-[30px] text-[20px] font-bold font-manrope text-center lg:leading-18 md:leading-10 leading-8 text-[#0E1F51]'>
              How Vikramaadhithya assist your business
            </p>
          </div>
          <div className='lg:!pl-20'>
            <Step />
          </div>
        </div>

      </section>

      {/* quality & efficience */}

      <section>

        <div className="bg-white  ">
          <div className=' grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:!mx-15 md:!mx-15 !mx-10 lg:gap-16 '>
            <div className='flex flex-col md:w-full w-full justify-center '>
              <div className=' '>
                <p className='text-[#104CBA] lg:text-[24px] md:text-[20px] text-[16px] font-manrope font-semibold lg:leading-10 md:leading-10 leading-10'>
                  Quality & Efficience
                </p>
              </div>
              <div className='!pb-20'>
                <p className='lg:text-[40px] md:text-[30px] text-[20px] font-bold font-manrope lg:leading-18 md:leading-10 leading-8 text-[#0E1F51]'>
                  Full-stack software Engineering
                </p>
                <p className='lg:text-[20px] md:text-[18px] text-[16px]  text-[#696969] font-manrope lg:leading-10 md:leading-10 leading-6 text-justify !py-4'>
                  At our core, we help businesses grow by crafting robust digital products and offering dependable, end-to-end services.
                  Whether you're a startup aiming for rapid growth or an established enterprise looking to modernize, our mission is to turn
                  your vision into scalable, high-performing software.</p>

                <p className='lg:text-[20px] md:text-[18px] text-[16px]  text-[#696969] font-manrope lg:leading-10 md:leading-10 leading-6 text-justify !py-4'>
                  With a team of seasoned experts in full-stack development, design, and strategic consulting, we bring years of cross-industry experience to every project.
                  From the first wireframe to the final line of code, we ensure your digital product is not just built—but built right.
                </p>
              </div>
            </div>
             <div className="lg:flex ">
              <div className=" w-full grid lg:grid-cols-2 grid-cols-1 !gap-10 lg:!m-10 lg:mb-0 !mb-10">
                {testing?.map((item, index) => {
                  const extraMarginTop = index === 1 || index === 3 ? "0px" : "50px";
                  return (
                    <div style={{ marginTop: extraMarginTop }}>
                      <div
                        key={index}
                        className="!px-10 !py-5 rounded-[20px] shadow-2xl !mt-5 "
                      >
                        <img src={item?.image} alt="" className="" />
                        <div>
                          <h2 className="text-[#2E325B] text-[22px] capitalize font-bold font-syne !mb-5 ">
                            {item?.q1}
                          </h2>
                          <h2 className="text-[#696969] lg:text-[16px] md:text-[14px] text-[14px] font-manrope !my-3 leading-8">
                            {item?.q2}
                          </h2>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            
            </div>

          </div>
        </div>



      </section>

      {/* faq */}

      <section>
        <Faq />


      </section>


    </div>
  )
}

export default homePage;
