import React, { useState } from "react";
import Img from "../../img/faq.png";
import { TbPlus, TbMinus } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

function Faq() {
    const Faq = [
        {
            id: 1,
            title: "What Makes Your Websites Truly User-Friendly?",
            answer:
                "We design with the end-user in mind—from intuitive navigation to responsive layouts. Every element is optimized to enhance engagement and reduce friction.",
        },
        {
            id: 2,
            title: "How Do You Approach a New Project?",
            answer:
                "We start by understanding your brand, audience, and goals. From there, we plan a solution that’s strategic, scalable, and visually aligned with your identity.",
        },
        {
            id: 3,
            title: "Can I Request Custom Features During Development?",
            answer:
                "Absolutely. We welcome collaboration and encourage feedback throughout the process, allowing you to tailor features that best suit your business needs.",
        },
        {
            id: 4,
            title: "Do You Provide Ongoing Support After Launch?",
            answer:
                "Yes. Our team offers continuous support, including updates, bug fixes, and performance optimization so your platform always runs smoothly.",
        },
        {
            id: 5,
            title: "How Do You Ensure the Website Performs Well?",
            answer:
                "We run rigorous performance tests, SEO checks, and cross-device reviews. Our developers also optimize code for speed, accessibility, and security.",
        },
    ];

    const [selected, setSelected] = useState(null);

    return (
        <section className="w-full flex flex-col gap-10 lg:py-20 py-10">
            <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center !my-10 !mx-10 " >

                {/* Left Image */}
                <div className="lg:w-1/2 md:w-1/2 w-full flex justify-center items-center !mb-20 md:mb-0">
                    <img src={Img} alt="" />
                </div>

                {/* Right Content */}
                <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col justify-center lg:!pl-10 md:!pl-10  ">
                    <p className="text-[#104CBA] lg:text-[24px] md:text-[20px] text-[16px] font-manrope font-bold leading-5 md:leading-10 lg:leading-10">
                        Our Company
                    </p>
                    <p className="pb-10 lg:text-[40px] md:text-[30px] text-[20px] font-bold font-manrope leading-5 md:leading-10 lg:leading-[3rem] text-[#0E1F51]">
                        Smart Questions. Smarter Solutions.
                    </p>

                    {/* FAQ List */}
                    <div className="lg:w-[100%] md:w-[80%] w-full flex flex-col  !gap-5 !py-10">
                        {Faq?.map((item) => {
                            const isSelected = selected?.id === item?.id;

                            return (
                                <div key={item.id} className="shadow-lg rounded">
                                    {/* Title Row */}
                                    <div
                                        className={`flex !p-3 justify-between items-center rounded-t-[5px] cursor-pointer transition-all duration-300 ${isSelected
                                            ? "bg-gradient-to-r from-[#2C48A2] to-[#4773FF]"
                                            : "bg-white"
                                            }`}
                                        onClick={() => {
                                            setSelected(isSelected ? null : item);
                                        }}
                                    >
                                        <h2
                                            className={`lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] font-semibold w-full font-poppins capitalize ${isSelected ? "text-white" : "text-[#2C48A2]"
                                                }`}
                                        >
                                            {item?.title}
                                        </h2>
                                        {isSelected ? (
                                            <TbMinus
                                                size={25}
                                                color={isSelected ? "#fff" : "#AF4BFF"}
                                            />
                                        ) : (
                                            <TbPlus size={25} color="#2C48A2" />
                                        )}
                                    </div>

                                    {/* Answer */}
                                    <AnimatePresence initial={false}>
                                        {isSelected && (
                                            <motion.div
                                                key="faq"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                className="overflow-hidden bg-white rounded-b-[50px] border-t border-gray-200"
                                            >
                                                <div className="!p-5">
                                                    <p className="lg:text-[16px] md:text-[16px] sm:text-[14px] text-[12px] text-[#828282] font-nunito">
                                                        {item?.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>


                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
