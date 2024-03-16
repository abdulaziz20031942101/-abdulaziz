import React from 'react'
import Telegram from "../assets/telegramP.png"
import Linkedin  from "../assets/linkedinP.png"
import Call from "../assets/call.png"

const Contact = () => {
  return (
    <div>
        <div className='text-[35px] my-10 md:text-[44px] text-center font-bold '>Contact Me</div>
        <div className='max-w-[700px] w-full m-auto px-5 '>
          <div className='flex flex-wrap justify-center items-center gap-5 md:gap-10 my-5'>
           <a  target='blank' href='https://t.me/A_H_09_14' className='flex min-w-[300px] w-full  sm:w-auto h-[60px] justefy-ctart gap-2 px-5 items-center bg-[#fef4f5] rounded-[10px] shadow-md hover:shadow-lg cursor-pointer'>
                <img src={Linkedin} alt="Linkedin" className='w-[60px]' />
                <span className='text-[#5e6064]'>in/Abdulaziz Abdsattorov</span>
            </a>
            <a  href='https://t.me/A_H_09_14' target='blank' className='flex min-w-[300px] w-full sm:w-auto  h-[60px]  justefy-ctart gap-2 px-5 items-center bg-[#fef4f5] rounded-[10px] shadow-md hover:shadow-lg cursor-pointer'>
                <img src={Telegram} alt="Telegram" className='w-[45px]' />
                <span  className='text-[#5e6064]'>t.me/Abdulaziz Abdsattorov</span>
            </a>
            <a href='tel:+998947535233' target='blank' className='flex min-w-[300px] w-full sm:w-auto  h-[60px] justefy-ctart gap-2 px-5 items-center bg-[#fef4f5] rounded-[10px] shadow-md hover:shadow-lg cursor-pointer'>
                <img src={Call} alt="Call" className='w-[50px]' />
                <span  className='text-[#5e6064]'> +(998) 94 753 52 33</span>
            </a>
          </div>
             
        </div>
        
    </div>
  )
}

export default Contact