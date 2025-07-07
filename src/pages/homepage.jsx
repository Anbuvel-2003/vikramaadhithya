import { useState } from 'react'


function Homepage() {
  return (
    <div>
      {/*  planning section */}
      <section className=''>
        <div className='bg-white lg:!p-30'>
          <div className='text-center font-bold'>
            <h4 className='lg:text-[24px] md:text-[20px] text-[16px] text-[#2C48A2]'>\ Planning \</h4>
            <h2 className='lg:text-[40px] md:text-[28px] text-[20px] text-[#0E1F51]'>Our Process</h2>
          </div>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 !p-5 '>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-10'>
              <img src='src\assets\img\Research.png' alt='Research' className='!pb-5 '></img>
              <h4 className='font-bold'>Research</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-10'>
              <img src='src\assets\img\Design.png' alt='Design' className='!pb-5'></img>
              <h4 className='font-bold'>Design</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-10'>
              <img src='src\assets\img\Develop.png' alt='Develop' className='!pb-5'></img>
              <h4 className='font-bold'>Develop</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-10'>
              <img src='src\assets\img\Test.png' alt='Test' className='!pb-5'></img>
              <h4 className='font-bold'>Test</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Vision  */}
      <section className='bg-white lg:!p-30'>
        <div className='flex w-full'>
          <img src='src\assets\img\modern-office.png' alt='young people' className='rounded-[20px]'></img>
          <div className='font-bold !pl-20'>
            <h4 className='lg:text-[24px] md:text-[20px] text-[16px] text-[#2C48A2]'>\ What We Do \</h4>
            <h2 className='lg:text-[40px] md:text-[28px] text-[20px] text-[#0E1F51]'>We Develop Products That <br></br>People Love To Use</h2>
            <p className='lg:text-[18px] font-medium !pt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed, Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
            <div className='grid lg:grid-cols-2 grid-cols-1 bg-white'>
              <img src='src\assets\img\Our vision.png' alt='Our vision'></img>
              <div>
                <h4>Our Vision</h4>
                <p>It is a long established fact that</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section>
        <div className='bg-white lg:!p-30'>
          <div className='text-center font-bold'>
            <h4 className='lg:text-[24px] md:text-[20px] text-[16px] text-[#2C48A2]'>\ Planning \</h4>
            <h2 className='lg:text-[40px] md:text-[28px] text-[20px] text-[#0E1F51]'>Our Process</h2>
          </div>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 !p-5 '>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-10'>
              <img src='src\assets\img\web-design.png' alt='Web Design / Development' className='!pb-5 '></img>
              <h4 className='font-bold'>Web Design / Development</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-10'>
              <img src='src\assets\img\UI & UX.png' alt='UI / UX Design' className='!pb-5'></img>
              <h4 className='font-bold'>UI / UX Design</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-10'>
              <img src='src\assets\img\wm.png' alt='Website Migration' className='!pb-5'></img>
              <h4 className='font-bold'>Website Migration</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-10'>
              <img src='src\assets\img\App.png' alt='App Development' className='!pb-5'></img>
              <h4 className='font-bold'>App Development</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-10'>
              <img src='src\assets\img\Saas.png' alt='Saas Product Development' className='!pb-5 '></img>
              <h4 className='font-bold'>Saas Product Development</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-10'>
              <img src='src\assets\img\Testing.png' alt='Testing' className='!pb-5'></img>
              <h4 className='font-bold'>Testing</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-10'>
              <img src='src\assets\img\DevOps.png' alt='DevOps' className='!pb-5'></img>
              <h4 className='font-bold'>DevOps</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>
            <div className='bg-[#F6F8FC] border-2 border-none rounded-md !p-10'>
              <img src='src\assets\img\Dm.png' alt='Digital marketing' className='!pb-5'></img>
              <h4 className='font-bold'>Digital marketing</h4>
              <img src='src\assets\img\line.png' className='!pt-5 !pb-5'></img>
              <p className='text-left'>It is a long established fact that a reader will be distra by the readable content of a page.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage
