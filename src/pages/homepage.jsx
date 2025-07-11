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
    
      {/* footer */}
      
    </div >
     
  )
}

export default Homepage
