import React, { useEffect, useRef, useState } from "react";
import img13 from "../../img/Container.png";

const Services = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  const progressBar = [
    {
      name: "Business Transformation",
      value: 90,
      color: "bg-[#4B164C]",
    },
    {
      name: "Smart Communication Systems",
      value: 80,
      color: "bg-[#0A3D62]",
    },
    {
      name: "Intelligent Contact Centers",
      value: 70,
      color: "bg-[#4C1D95]",
    },
    {
      name: "Managed Network Solutions",
      value: 50,
      color: "bg-[#00B4D8]"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect(); // animate only once
        }
      },
      { threshold: 0.3 } // trigger when 30% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col lg:flex-row items-center justify-center !gap-6 lg:!gap-12"
    >
      {/* Image */}
      <div className="flex justify-center items-center w-full lg:w-1/2">
        <img
          src={img13}
          alt="Progress Illustration"
          className="max-w-[90%] sm:max-w-[80%] md:max-w-full h-auto"
        />
      </div>

      {/* Progress Details */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-[20px] sm:text-[26px] md:text-[30px] lg:text-[40px] font-bold text-[#0E1F51] !mb-6">
          Fast & Secure Services
        </h2>

        <div className="!space-y-6">
          {progressBar.map((service, index) => (
            <div key={index}>
              {/* Label + Value */}
              <div className="flex justify-between items-center !mb-2">
                <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium text-[#0E1F51]">
                  {service.name}
                </span>
                <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium text-[#0E1F51]">
                  {service.value}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-[4px] bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-[4px] rounded-full transition-all duration-1000 ease-in-out ${service.color}`}
                  style={{ width: animated ? `${service.value}%` : "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
