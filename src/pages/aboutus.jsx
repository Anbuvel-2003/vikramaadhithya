import React from 'react'
import img from "../img/section.png";
import img1 from "../img/about1.png";
import img2 from "../img/about2.png";
import img3 from "../img/about3.png";
import img4 from "../img/about4.png";
import img5 from "../img/about5.png";
import img6 from "../img/about6.png";
import img7 from "../img/service-1.png";
import img8 from "../img/service-2.png";
import img9 from "../img/service-3.png";
import img10 from "../img/service-4.png";
import img11 from "../img/service-5.png";
import img12 from "../img/service-6.png";
import img13 from "../img/about.png";
import profile1 from "../img/profile1.png";
import profile2 from "../img/profile2.png";
import profile3 from "../img/profile3.png";
import profile4 from "../img/profile4.png";
import profile5 from "../img/profile5.png";
import profile6 from "../img/profile6.png";
import { SiTicktick } from "react-icons/si";


const things = [
  {
    id: 1,
    icon: img1,
    img: img7,
    title: "Strategy & Planning",
    desc: "We build digital strategies that align business goals with scalable tech solutions from concept to deployment.",
  },
  {
    id: 2,
    icon: img2,
    img: img8,
    title: "Program Manager",
    desc: "End-to-end management of complex tech projects with a focus on timelines, quality, and innovation.",
  },
  {
    id: 3,
    icon: img3,
    img: img9,
    title: "Tech Architecture",
    desc: "Custom system design for SaaS, apps, and platforms structured for speed, security, and scale.",
  },
  {
    id: 4,
    icon: img4,
    img: img10,
    title: " IT Consultancy",
    desc: "Expert guidance to streamline infrastructure, improve workflows, and digitally future-proof your operations.",
  },
  {
    id: 5,
    icon: img5,
    img: img11,
    title: "Product Engineering",
    desc: "From wireframes to full-stack builds, we craft modern web and mobile experiences that perform and convert.",
  },
  {
    id: 6,
    icon: img6,
    img: img12,
    title: "Growth Marketing",
    desc: "Digital campaigns driven by analytics built to increase visibility, drive leads, and grow revenue.",
  }
];

const team = [
  {
    id: 1,
    img: profile1,
    name: "Arun",
    role: "Cheif Executive Officer",
  },
  {
    id: 2,
    img: profile2,
    name: "Guhan",
    role: "Administrator",
  },
  {
    id: 3,
    img: profile3,
    name: "Anbuvel",
    role: "Full Stack Developer",
  },
  {
    id: 4,
    img: profile4,
    name: "Sujith",
    role: "Content Writer",
  },
  {
    id: 5,
    img: profile5,
    name: "Sabareesh",
    role: "UI Designer",
  },
  {
    id: 6,
    img: profile6,
    name: "Sowndhar",
    role: "Frontend Developer",
  }
];

function Aboutus() {
  return (
    <div className="!mt-16 ">
     {/* Header Section with Background */}
           <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex flex-col items-center justify-center">
             <img
               src={img}
               alt="section background"
               className="absolute inset-0 w-full h-full object-cover -z-10"
             />
             <h1 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[50px] text-white font-bold text-center px-4">
               About Us
             </h1>
             <div className="border-t-[3px] border-white rounded-2xl w-[60px] sm:w-[80px] !mt-2 sm:!mt-4"></div>
           </div>

      <div className="flex flex-col lg:flex-row items-center justify-center !gap-6 lg:!gap-12 !mt-10 !mb-10  lg:!px-15 md:!px-10 !px-10">
        {/* Image */}
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <img
            src={img13}
            alt="Progress Illustration"
            className="max-w-[90%] sm:max-w-[80%] md:max-w-full h-auto"
          />
        </div>

        {/* Progress Details */}
        <div className="w-full lg:w-1/2 md:w-1/2">
          <h2 className="text-[24px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-bold text-[#104CBA] ">
            About Vikramaadhithya
          </h2>
          <p className="text-[#0E1F51] text-[20px] sm:text-[26px] md:text-[30px] lg:text-[40px] font-bold !mb-6">
            Empowering Innovation Through Technology
          </p>
          <p className="lg:text-[20px] md:text-[18px] text-[16px] text-[#696969] text-manrope font-medium text-justify">
            At Vikramaadhithya, we specialize in providing expert IT and business consulting tailored to your goals.
            With a deep understanding of modern technology and market trends, our team helps you solve challenges,
            optimize performance, and drive growth — efficiently and effectively.
          </p>
          <div className='!pt-10'>
            <div className='flex !gap-8 items-center  '>
              <div className='border-0 bg-[#ECEFF7] !p-4 rounded-full'>
                <SiTicktick
                  color={'#104CBA'}
                  size={25}
                />
              </div>

              <div className='w-3/4 !pb-5'>
                <p className='lg:text-[22px] md:text-[18px] text-[16px] font-extrabold text-manrope'>Solution Focused</p>
                <p className='lg:text-[18px] md:text-[16px] text-[14px] text-[#696969] text-manrope'>We don’t just consult — we collaborate to design real-world, results-driven solutions tailored to your business.</p>
              </div>
            </div>
            <div className='flex gap-8 items-center '>
              <div className='border-0 bg-[#ECEFF7] !p-4 rounded-full'>
                <SiTicktick
                  color={'#104CBA'}
                  size={25}
                />
              </div>
              <div className='w-3/5'>
                <p className='lg:text-[22px] md:text-[18px] text-[16px] font-extrabold text-manrope'>99.99% Success</p>
                <p className='lg:text-[18px] md:text-[16px] text-[14px] text-[#696969] text-marope'>
                  Our proven methodology and client-centric approach ensure near-perfect delivery and long-term satisfaction.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

        {/* what we do */}

      <div className='!mt-20 !mb-1'>
        <p className="text-[#104CBA] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-manrope text-center font-semibold leading-8 sm:leading-10">
          What We Do
        </p>
        <p className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[40px] font-bold font-manrope text-center text-[#0E1F51] !mb-8 sm:!mb-12 md:!mb-16">
          Providing the best solutions in the Industry
        </p>
        {/* Services Grid */}
        <div className="lg:!mb-30 md:!mb-40 !mb-25" >
          <div div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 !gap-30 !px-6 lg:!px-15 justify-center place-self-center" >
            {
              things.map((thing) => (
                <div key={thing.id} className="relative group cursor-pointer">
                  {/* Background Image */}
                  <img
                    src={thing.img}
                    alt="service"
                    className="rounded-2xl w-fit h-auto  group-hover:brightness-50"
                  />
                  <div className=' top-0 left-0 lg:!pb-20'>

                    {/* Icon */}
                    <div className="absolute z-10 lg:top-45 lg:left-22 md:top-22 md:left-13  top-20 bg-[#104CBA] rounded-full shadow-lg w-14 h-14 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-18">
                      <img src={thing.icon} alt="icon" className="w-8 h-8" />
                    </div>

                    {/* White Card */}
                    <div className="absolute top-30 lg:right-0  right-0 transform lg:translate-y-1/2  bg-white rounded-2xl shadow-2xl !px-5 !py-6 w-full max-w-[300px] transition-transform duration-300 group-hover:translate-y-6">
                      <h3 className="text-[#0E1F51] text-xl font-semibold !mb-2 hover:text-red-400">
                        {thing.title}
                      </h3>
                      <p className="text-[#696969] text-md leading-relaxed lg:!h-25 ">
                        {thing.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </div>


      {/* our team */}

      <div className="lg:!mx-30 md:!mx-20 !mx-10 lg:!mb-20 md:!mb-15 !mb-10">
        <p className="text-[#104CBA] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-manrope text-center font-semibold leading-8 sm:leading-10">
          Team Members
        </p>
        <p className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[40px] font-bold font-manrope text-center text-[#0E1F51] !mb-2 sm:!mb-12 md:!mb-16">
          Our Proficient Team
        </p>
          <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-center">
        {
          team.map((person) => (
            <div key={person.id} className="grid lg:grid-cols-3 grid-cols-1 !gap-10 lg:w-[80vw] w-full  justify-between">
              <div
                className="cursor-pointer  w-full h-[100%]  "
               
              >
                <div className=" w-full h-[80%] ">
                  <img
                    src={person.img}
                    alt=""
                    className="w-full h-full object-contain transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="!px-10">
                  <h3 className="text-black lg:text-[40px] md:text-[30px] sm:text-[20px] text-14px font-bold text-center">
                    {person.name}
                  </h3>
                  <h3 className="text-[#696969] lg:text=[18px] md:text-[16px] text-[14px] font-normal text-center">
                    {person.role}
                  </h3> 
                </div>
              </div>
            </div>
          ))
        }
      </div>

</div>

<a href='/Sample' className="text-[#104CBA] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-manrope text-center font-semibold leading-8 sm:leading-10">
          Our Clients
        </a>

    </div >
  )
}

export default Aboutus