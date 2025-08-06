import React from 'react'
import img13 from "../../img/Container.png";



const progressBar = [
  {
    name: "Business Transformation",
    value: 90, color: "bg-[#4B164C]"
  },
  {
    name: "Smart Communication Systems",
    value: 80, color: "bg-[#0A3D62]"
  },
  {
    name: "Intelligent Contact Centers",
    value: 70, color: "bg-[#4C1D95]"
  },
  {
    name: "Managed Network Solutions",
    value: 50, color: "bg-[#00B4D8]"
  },
];

function Progress() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-2">
          <div className="flex justify-center items-center w-1/2">
            <img src={img13} alt="" className="  " />
          </div>
          <div className="lg:w-1/2 w-full relative">


            <h2 className="lg:text-[40px] md:text-[30px] text-[20px] font-bold text-[#0E1F51] !mb-8">
              Fast & Secure Services
            </h2>

            <div className="!space-y-6 relative z-10">
              {progressBar.map((service, index) => (
                <div key={index}>
                  {/* Label + Value */}
                  <div className="flex justify-between items-center !mb-2">
                    <span className="lg:text-[20px] md:text-[18px] text-[16px] font-medium text-[#0E1F51]">{service.name}</span>
                    <span className="lg:text-[20px] md:text-[18px] text-[16px] font-medium text-[#0E1F51]">{service.value}%</span>
                  </div>

                  {/* Progress bar background */}
                  <div className="w-full h-[4px] bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-[4px] rounded-full ${service.color}`}
                      style={{ width: `${service.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Progress
