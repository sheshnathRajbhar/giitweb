import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlinePermMedia } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";

import { PiCashRegisterLight } from "react-icons/pi";
import { MdAppRegistration } from "react-icons/md";


const Sidebar = () => {
  return (
    <div className='px-4 py-2 bg-black text-white min-h-screen w-[15%]'>
        
        <NavLink to={'/'} className='flex gap-3 items-center w-full hover-bg-[#D91656]  px-2 py-2 transition-0.5 rounded my-3'><MdAppRegistration />Dashboard</NavLink>
        <NavLink to={'/upload-media'} className='flex gap-3 items-center w-full hover-bg-[#D91656]  px-2 py-2 transition-0.5 rounded my-3'><MdOutlinePermMedia />Upload Media</NavLink>
        <NavLink to={'/news'} className='flex gap-3 items-center w-full hover-bg-[#D91656]  px-2 py-2 transition-0.5 rounded my-3'><MdOutlinePermMedia />Publish news</NavLink>
        <NavLink to={'/upload-result'} className='flex gap-3 items-center w-full hover-bg-[#D91656]  px-2 py-2 transition-0.5 rounded my-3'><AiOutlineSafetyCertificate />Upload Certificate</NavLink>
        <NavLink to={'/enquiry-list'} className='flex gap-3 items-center w-full hover-bg-[#D91656]  px-2 py-2 transition-0.5 rounded my-3'><BsInfoCircle />View enquiry</NavLink>
        <NavLink to={'/registration-list'} className='flex gap-3 items-center w-full hover-bg-[#D91656]  px-2 py-2 transition-0.5 rounded my-3'><PiCashRegisterLight />Registration</NavLink>
    </div>
  )
}

export default Sidebar