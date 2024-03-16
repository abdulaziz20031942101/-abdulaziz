import React from 'react'
import WorkImg from "../assets/devImg1.jpg"
 
import { WorksData } from '../databas/works.db'


// import {Zoom} from 'react-reveal'

const Works = () => {
  return (
     <div className='bg-[#edf2f8] py-5'>
         <div className='font-bold flex gap-2 text-[35px] md:text-[50px] my-10  md:my-16  justify-center '>
        <span>MY</span>
        <span className='text-[#313bac]'>Works</span>
        </div> 
        
        <div className='flex justify-center flex-col  items-center gap-4'>
             
        {WorksData.map(item=>(
          
           <div key={item.id} className='max-w-[350px] sm:max-w-[500px] md:max-w-[768px] lg:max-w-[1000px] gap-2 md:gap-5 md:p-12 bg-[white] rounded-[10px]'>

           <img src={item.img} alt="WorkImg" className=' rounded-[10px] border-[1px] border-solid border-[#edf2f8]' />

           <div className='flex flex-col gap-5 mt-10 '>

             <h1 className='font-bold'>{item.title}</h1>

             <p className='text-[#5e6064] text-[14px]'>{item.date}</p>

             <p className='text-[#5e6064] text-[14px]'> {item.description}</p>

             <b>Stac:</b>

             <p className='text-[15px]'>{item.stack}</p>

             <div className='flex justify-center gap-5 md:justify-start mt-5'>
             <a href={item.link} target='blank' type="button" class="text-white bg-[#313bac] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Demo</a>
             <button href={item.github}  target='blank' type="button" class="text-white bg-[#313bac] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Code</button>
             </div>

           </div>
         </div>

        

        ))}
         
        </div>
      </div>
  )
}

export default Works