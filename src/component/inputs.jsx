import React from 'react'

const inputs = () => {
  return (
    <div className='my-20 flex flex-col items-center gap-[20px]  max-w-[700px] w-full m-auto px-5'>
        <input type="text" className='w-full border-none outline-none  bg-[#edf2f8] px-[12px] py-[15px] rounded-[10px] hover:shadow-md' placeholder='Your Name ' />

        <input type="email" className='w-full border-none outline-none  bg-[#edf2f8] px-[15px] py-[15px] rounded-[10px] hover:shadow-md' placeholder='Your Email ' />

        <textarea  type="text" className='w-full md:h-[200px] h-[100px] border-none outline-none  bg-[#edf2f8] px-[15px] py-[15px] rounded-[10px] hover:shadow-md' placeholder='Your Massage ' ></textarea>
        
        <button   type="button" class="text-white bg-[#313bac] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sand Massge</button>

      </div>
  )
}

export default inputs