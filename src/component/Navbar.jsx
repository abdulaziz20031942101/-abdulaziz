import React, { useState } from 'react'

// icons 
import { HiMiniBars2 } from "react-icons/hi2";
import {MdOutlineCancel} from "react-icons/md";

import Translate from "../utils/Translate"
import { setLanguage } from '../redux/navbarSlice';
import {useDispatch,useSelector} from "react-redux";


const Navbar = () => {
    const {language} = useSelector(state=>state.navbar)
    const dispatch = useDispatch()

    
    const [toggle,setToggle] = useState(false)
 
  return (

   
    <nav className=' containerr z-[10] fixed w-full h-[80px] backdrop-blur flex justify-between items-center'>
        <div className='text-[30px] font-bold'>Abdulaziz.</div>
        <div>
            <ul className={`flex md:flex-row flex-col text-[20px] gap-10 text-[#6b7688]  font-[600] uppercase md:static  bg-[white] absolute md:w-aoto md:bg-transparent w-[80%] ${toggle? 'right-0': 'right-[-100%]'} top-[80px] md:h-auto h-[100vh] transition-[1s] md:p-0 p-10`}>
                <li><a href="#home"  className='links'onClick={()=>setToggle(false)}><Translate dictionary={{ru:'ГЛАВНАЯ', en:'Home'}}/></a></li>
                <li><a href="#skills"  className='links' onClick={()=>setToggle(false)}> <Translate dictionary={{ru:'Навыки', en:'Skills'}}/></a></li>
                <li><a href="#works"  className='links flex gap-[4px]' onClick={()=>setToggle(false)}>  <span><Translate dictionary={{ru:'мои', en:' My '}}/></span><span><Translate dictionary={{ru:' работы', en:'  works'}}/></span></a></li>
                <li><a href="#contact" className='links' onClick={()=>setToggle(false)}><Translate dictionary={{ru:'Контакт', en:'Contact'}}/></a></li>
            </ul>
        </div>
        <div className='flex md:gap-5 gap-1 text-[14px]'>
            <div onClick={()=>dispatch(setLanguage('ru'))} className={`cursor pointer ${language === 'ru' ? 'text-[blue]' : 'text-[#6b7688]'}`}>RU</div>
            <div onClick={()=>dispatch(setLanguage('en'))} className={`cursor pointer ${language === 'en' ? 'text-[blue]' : 'text-[#6b7688]'}`}>ENG</div>
        </div>

        {/* bars  */}
        <div className=' p-1 bg-[#313bac] text-[white] rounded-full text-[20px] md:hidden block' onClick={()=>setToggle(!toggle)}>
        <HiMiniBars2 />
        </div>
    </nav>
  )
}

export default Navbar