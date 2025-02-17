import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import slider from "../assets/slider1.jpg"
import axios from "axios"
import { MyContext } from '../context/store';
import logo from "/temp/logo.svg"

const ResultVerification = () => {
const navigate = useNavigate()
// State variables

const [registration_number, setRegistration_number] = useState('')
const [dob, setDob] = useState('')
const [image_url,setImage_url] = useState('')

// OnSubmi handler function

const onSubmitHandler = async(e)=>{
  e.preventDefault()
  try {
    const {data} = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/user/verify-certificate',{registration_number, dob})
    if(data.success){
      setImage_url(data.image_url)
      
      
    }else{
      console.log(data.message)
    }
  } catch (error) {
    console.log(error.message)
  }
}






  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="w-full bg-[#441752] px-[5%]">
        <div className="max-w-[1100px] mx-auto py-4">
          <h2 className="text-2xl text-white font-bold">Result Verification</h2>
        </div>
      </div>

      {/* Two-Column Section */}
      <div className="max-w-[1100px] mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Left Column (Form - 20%) */}
          <div className="md:col-span-1 p-4 bg-gray-100 rounded-md h-[300px]">
            <h3 className="text-lg font-semibold">Enter Your Details</h3>
            <form onSubmit={onSubmitHandler} className="mt-4 space-y-4 h-[400px]">
              <div>
                <label htmlFor="rollNo" className="block text-sm font-medium text-gray-700">Roll No</label>
                <input
                  type="text"
                  id="rollNo" value={registration_number} onChange={(e)=>setRegistration_number(e.target.value)}
                  className="w-full border py-2 px-3 rounded mt-2"
                  placeholder="Enter your roll number"
                />
              </div>

              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="text"
                  placeholder='dd-mm-yy' id="dob" value={dob} onChange={(e)=>setDob(e.target.value)}
                  className="w-full border py-2 px-3 rounded mt-2"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"

              >
                View
              </button>
            </form>
          </div>

          {/* Right Column (Certificate Image - 80%) */}
          <div className="md:col-span-4 p-4 bg-white  rounded-md flex relative">
          <img src={image_url} className='w-full h-screen border '/>
          <a
            href={image_url}
            className="absolute top-4 right-[-160px] bg-blue-600 text-white px-4 py-2 rounded"> Download</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultVerification;
