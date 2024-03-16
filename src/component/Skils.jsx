import React from 'react'
import {SkillsData} from "../databas/skills.db."

const Skils = () => {
  return (
    <div>
        <div className='font-bold flex gap-2 text-[35px] md:text-[50px] my-10 md:my-16 justify-center'>
          <span>MY</span>
          <span className='text-[#313bac]'>Skills</span>

        </div>

        <div className='flex flex-wrap gap-5 md:gap-10 py-10 justify-center items-center w-[90%] md:w-[70%] m-auto '>
          {SkillsData.map((item)=>
           <div key={item.id}>
           <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px]  rounded-full bg-[#fef4f5] flex justify-center items-center hover:shadow-lg '>
              <img src={item.img} alt="img" className='w-[50px] h-[50px] p-2' />
           </div>
           <div className='text-center mt-2 text-[14px] '>{item.title}</div>
         </div>
          )}
          
        </div>
        <div className='text-[14px] text-right w-[90%] '>@2024 Abdsattorov Abdulaziz</div>
    </div>
  )
}

export default Skils