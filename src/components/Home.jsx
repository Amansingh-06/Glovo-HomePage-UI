import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";




function Home() {
  return (
      <>
          <div className='flex justify-center items-center w-full h-full bg-[#fdc204] lg:p-10'>
              <div className='flex flex-col lg:flex-row justify-end md:w-4/5 items-center   p-2 '>
          <div>
                  <video src="https://glovoapp.com/images/landing/address-container-animation.webm" autoPlay muted loop> video is not supported</video>
          </div>
              <div className='flex flex-col gap-8  justify-center items-center lg:justify-start lg:items-start md:p-5'>
                  <h1 className='md:text-6xl font-bold tracking-wide text-4xl text-center lg:text-start'>Food delivery and more</h1>
                      <h2 className='md:text-2xl font-bold tracking-tight text-center lg:text-start'>Groceries, shops, pharmacies, anything!</h2>
                      <div className='relative  md:w-4/5 w-full  md:p-0 flex flex-col justify-center items-center gap-5 lg:inline'>
                          <h1 className='p-4 bg-white rounded w-full text-lg flex gap-3 items-center ' > <IoLocationOutline/>what's your address</h1>
                          <button className='md:absolute top-2.5 right-2 p-1.5 text-green-900 px-5 rounded-2xl bg-green-100 text-bold font-bold cursor-pointer w-3/5 md:w-auto flex items-center gap-3'> <CiLocationArrow1/>Use your location</button>
                      </div>
              
                  </div>
              </div>
              {/* Wave Border at Bottom */}
              

          </div>
          <img src="https://glovoapp.com/images/waves/address-jumbotron-wave-desktop.svg" alt="" className='w-full'/>
      </>
  )
}

export default Home