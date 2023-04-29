import React from 'react'
import logo from '../../images/logo.png'
const Footer = () => {
  return (
    <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
      <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
        <div className='flex flex-[0.5] justify-center items-center'>
          <img src={logo} alt="logo" className='w-32 hover:scale-110' />
        </div>

        <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
          <p className='text-white text-base text-center mx-2 cursor-pointer hover:scale-110'>Market</p>
          <p className='text-white text-base text-center mx-2 cursor-pointer hover:scale-110'>Exchange</p>
          <p className='text-white text-base text-center mx-2 cursor-pointer hover:scale-110'>Tutorials</p>
          <p className='text-white text-base text-center mx-2 cursor-pointer hover:scale-110'>Wallets</p>
        </div>
      </div>

      <div className='flex justify-center items-center flex-col mt-5'>
    <p className='text-white text-sm text-center'>Come Join Us</p>
    <p className='text-white text-sm text-center'>imotechnologics@gmail.com</p>
      </div>
      <div className="h-[1px] w-full bg-gray-400 my-2"></div>
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className='text-white text-sm text-center'>Kryptologics 2023</p>
      <p className='text-white text-sm text-center'>All rights Reserved</p></div>
    </div>
  )
}

export default Footer