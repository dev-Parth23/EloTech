import React from 'react'
import { GoArrowRight } from "react-icons/go";

const Button = ({title}) => {
  return (
        <a href='/contact' className='bg-[#EBFD40] flex gap-4 px-4 py-2 rounded-full items-center hover:bg-white delay-100 ease-in-out '>
            <h3 className='text-lg  font-[Font2]  text-black font-medium'>{title}</h3>
            <span className='bg-black text-[#ffffff] rounded-full p-3'>
                <GoArrowRight />    
            </span>
        </a>
  )
}

export default Button