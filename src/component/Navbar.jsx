import React, { useState } from 'react'
import { HiMiniBars2 } from "react-icons/hi2";

const Navbar = () => {
    
    const [toggle,setToggle] = useState(false)
 
  return (

   
    <nav className=' containerr z-[10] fixed w-full h-[80px] backdrop-blur flex justify-between items-center'>
        <div className='text-[30px] font-bold'>Abdulaziz.</div>
        <div>
            <ul className={`flex md:flex-row flex-col text-[20px] gap-10 text-[#6b7688]  font-[600] uppercase md:static  bg-[white] absolute md:w-aoto md:bg-transparent w-[80%] ${toggle? 'right-0': 'right-[-100%]'} top-[80px] md:h-auto h-[100vh] transition-[1s] md:p-0 p-10`}>
                <li><a href="#"  className='links'>Home</a></li>
                <li><a href="#"  className='links'>Skills</a></li>
                <li><a href="#"  className='links flex gap-[4px]'><p>MY </p><p>Works</p></a></li>
                <li><a href="#" className='links'>Contact</a></li>
            </ul>
        </div>
        <div className='flex md:gap-5 gap-1 text-[14px]'>
            <div>RU</div>
            <div>ENG</div>
        </div>

        {/* bars  */}
        <div className=' p-1 bg-[#313bac] text-[white] rounded-full text-[20px] md:hidden block' onClick={()=>setToggle(!toggle)}>
        <HiMiniBars2 />
        </div>
    </nav>
  )
}

export default Navbar