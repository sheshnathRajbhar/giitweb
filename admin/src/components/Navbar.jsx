import React from 'react'
import { ToastContainer } from 'react-toastify';

const Navbar = ({setToken}) => {
  return (
    <>
    
    <div className='flex justify-between px-[4%] items-center bg-blue-500 text-white md:py-3 py-2'>
        <h2 className='font-bold text-xl'>Dashboard</h2>
        <button onClick={()=>setToken('')} className='px-4 md:py-2 py-3 bg-white text-blue-600 rounded'>Logout</button>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Navbar