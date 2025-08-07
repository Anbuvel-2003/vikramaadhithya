import React from 'react'
import img from "../img/section.png";
import img1 from "../img/project1.png";
import img2 from "../img/project2.png"; 
import img3 from "../img/project3.png"; 
import img4 from "../img/project4.png"; 
import img5 from "../img/project5.png"; 
import img6 from "../img/project6.png";

const project = [
  {
    img: img1,
    name: "Vikramaadhithya",
    type: "Website",
  },
  {
    img: img2,
    name: "Vikramaadhithya",
    type: "Website",
  },
  {
    img: img3,
    name: "Vikramaadhithya",
    type: "Website",
  },
  {
    img: img4,
    name: "Vikramaadhithya",
    type: "Website",
  },
  {
    img: img5,
    name: "Vikramaadhithya",
    type: "Website",
  },
  {
    img: img6,
    name: "Vikramaadhithya",
    type: "Website",
  },
]


function Portfolio() {
  return (
    <div className="!mt-15 ">
        {/* Header Section with Background */}
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex flex-col items-center justify-center">
                <img
                  src={img}
                  alt="section background"
                  className="absolute inset-0 w-full h-full object-cover -z-10"
                />
                <h1 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[50px] text-white font-bold text-center px-4">
                  Portfolio
                </h1>
                <div className="border-t-[3px] border-white rounded-2xl w-[60px] sm:w-[80px] !mt-2 sm:!mt-4"></div>
              </div>

            <div className="!my-10">
              <div>
          <h2 className="text-[24px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-medium text-[#2C48A2] text-center !mb-6">
            Our Works
          </h2>
          <p className="text-[#0E1F51] text-[20px] sm:text-[26px] md:text-[30px] lg:text-[40px] font-bold text-center !mb-6">
             Portfolio
          </p>
          </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center !mt-10 !mb-10 lg:!gap-10 md:!gap-8 !gap-0  lg:!px-15 md:!px-10 !px-5">
              {
                project.map((item, index) => (
                  <div className="flex justify-center items-center w-full " key={index}>
                    <div className=' flex flex-col justify-center items-center cursor-pointer'>
                    <img
                      src={item.img}
                      alt="Progress Illustration"
                      className="max-w-[90%] sm:max-w-[80%] md:max-w-full h-auto"
                    />
                    <div className='relative flex flex-col -top-10 w-[80%] place-self-center   !p-5 bg-white shadow-2xl rounded-2xl '>
                      <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] font-medium text-[#0E1F51] text-center">
                        {item.type}
                      </p>
                      <h2 className="text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-semibold text-[#0E1F51] text-center">
                        {item.name}
                      </h2>
                    </div>
                    </div>
                  </div>
                ))
              }



                  </div>

          </div>


    </div>
  )
}

export default Portfolio