import React from 'react'
import {SkillsData} from "../databas/skills.db."

// anination 
import { Fade } from 'react-reveal';

const Skils = () => {
  return (
    <div className=' h-auto md:h-[100vh] relative' id='skills'>
        <div className='font-bold flex gap-2 text-[35px] md:text-[50px] my-10 md:my-16 justify-center'>
          <span>MY</span>
          <span className='text-[#313bac]'>Skills</span>

        </div>

        <div className='flex flex-wrap gap-5 md:gap-10 py-10 justify-center items-center w-[90%] md:w-[70%] m-auto '>
          {SkillsData.map((item)=>

          <Fade top>
           <div key={item.id}>
           <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px]  rounded-full bg-[#fef4f5] flex justify-center items-center hover:shadow-lg '>
              <img src={item.img} alt="img" className='w-[50px] h-[50px] p-2' />
           </div>
           <div className='text-center mt-2 text-[14px] '>{item.title}</div>
         </div>
          </Fade>
          )}
          
        </div>
        <div className='text-[14px] text-right w-[90%] md:absolute bottom-[20px] py-5 right-[40px] '>@2024 Abdsattorov Abdulaziz</div>
    </div>
  )
}

export default Skils