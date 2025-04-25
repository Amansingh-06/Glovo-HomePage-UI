import React from 'react'
import { CiUser } from "react-icons/ci";


function Header() {
  return (
      <>
          <div className='flex justify-center items-center p-3 bg-[#fdc204]
'>
              <div className='md:w-4/5 w-full flex justify-between text-2xl  text-green-600 p-3'>
                  <h1 className='md:text-5xl text-4xl font-semibold'>Glovo</h1>
                  <button className='  md:px-7 px-5 text-lg text-white bg-green-600 rounded-4xl flex justify-center items-center gap-3'><CiUser/>Login</button>
              </div>
              
          </div>
      </>
  )
}

export default Header