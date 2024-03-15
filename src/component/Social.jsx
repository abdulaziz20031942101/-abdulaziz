import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";




const Social = () => {
  return (
    <div className='absolute left-[20px] bottom-[20px] md:block hidden'>
        <a href='https://t.me/A_H_09_14' target='blank' className='text-[#6b7688] bg-[white] w-[50px] h-[50px] flex justify-center items-center rounded-full transition-[0.5s] hover:bg-[#313bac] hover:text-[white] mb-2'>
           <FaTelegram />
        </a>
        <a href='https://t.me/A_H_09_14' target='blank'  className='text-[#6b7688] bg-[white] w-[50px] h-[50px] flex justify-center items-center rounded-full transition-[0.5s] hover:bg-[#313bac] hover:text-[white]'>
          <FaLinkedinIn />
        </a>
    </div>
  )
}

export default Social 