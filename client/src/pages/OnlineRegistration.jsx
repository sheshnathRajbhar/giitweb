import React, { useState, useContext } from 'react';
import axios from 'axios';
import {toast} from "react-toastify"

const OnlineRegistration = () => {

  const [coursename, setCourse] = useState('');
  const [name, setName] = useState('');
  const [adhar, setAdhar] = useState('');
  const [gender, setGender] = useState('');
  const [fathername, setFatherName] = useState('');
  const [mothername, setMotherName] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [qualification, setQualification] = useState('');

  const resetFields = ()=>{
    setCourse('')
    setName('')
    setAdhar('')
    setGender('')
    setFatherName('')
    setMotherName('')
    setAddress('')
    setDob('')
    setPhone('')
    setEmail('')
    setQualification('')
  }

 const handleSubmit = async(e)=>{
  e.preventDefault()

  try {
    const {data} = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/user/register', {coursename, name, email, adhar, phone, fathername, mothername, dob, qualification, gender, address})
    if(data.success){
      toast.success(data.message)
      resetFields()
    }else{
      toast.error(data.message)
    }
  } catch (error) {
    toast.error(error.message)
  }
 }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="w-full bg-[#441752] px-[5%]">
        <div className="max-w-[1100px] mx-auto py-4">
          <h2 className="text-2xl text-white font-bold">Online Registration</h2>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-[1100px] mx-auto p-6 flex-grow">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Course */}
          <div className="w-full">
            <label className="block text-gray-700 mb-1">Course</label>
            <input
              type="text" value={coursename} onChange={(e)=>setCourse(e.target.value)}
              className="w-full border py-2 px-3 rounded mt-2"
              placeholder="Enter course"
            />
          </div>

          {/* Name */}
          <div className="w-full">
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text" value={name} onChange={(e)=>setName(e.target.value)}
              className="w-full border py-2 px-3 rounded mt-2"
              placeholder="Enter your name"
            />
          </div>

          {/* Aadhar */}
          <div className="w-full">
            <label className="block text-gray-700 mb-1">Aadhar No</label>
            <input
              type="text" value={adhar} onChange={(e)=>setAdhar(e.target.value)}
              className="w-full border py-2 px-3 rounded mt-2"
              placeholder="Enter Aadhar number"
            />
          </div>

          {/* Email */}
          <div className="w-full">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  
              className="w-full border py-2 px-3 rounded mt-2"
              placeholder="Enter your email"
            />
          </div>
          {/* Phone */}
          <div className="w-full">
            <label className="block text-gray-700 mb-1">Phone</label>
            <input
              type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}   
              className="w-full border py-2 px-3 rounded mt-2"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Father Name */}
          <div className="w-full">
            <label className="block text-gray-700 mb-1">Father's Name</label>
            <input
              type="text" value={fathername} onChange={(e)=>setFatherName(e.target.value)}
              className="w-full border py-2 px-3 rounded mt-2"
              placeholder="Enter father's name"
            />
          </div>

          {/* Mother Name */}
          <div className="w-full">
            <label className="block text-gray-700 mb-1">Mother's Name</label>
            <input
              type="text" value={mothername} onChange={(e)=>setMotherName(e.target.value)}
              className="w-full border py-2 px-3 rounded mt-2"
              placeholder="Enter mother's name"
            />
          </div>

          {/* Date of Birth */}
          <div className="w-full">
            <label className="block text-gray-700 mb-1">Date of Birth</label>
            <input
              type="date" value={dob} onChange={(e)=>setDob(e.target.value)}
              className="w-full border py-2 px-3 rounded mt-2"
            />
          </div>

          {/* Qualification */}
          <div className="w-full">
            <label className="block text-gray-700 mb-1">Qualifications</label>
            <input
              type="text" value={qualification} onChange={(e)=>setQualification(e.target.value)}
             
              className="w-full border py-2 px-3 rounded mt-2"
              placeholder="Enter your qualifications"
            />
          </div>

          {/* Gender */}
          <div className="w-full">
            <label className="block text-gray-700 mb-1">Gender</label>
            <select
             value={gender} onChange={(e)=>setGender(e.target.value)}
              className="w-full border py-2 px-3 rounded mt-2"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Address */}
          <div className="w-full col-span-2">
            <label className="block text-gray-700 mb-1">Address</label>
            <textarea
            value={address} onChange={(e)=>setAddress(e.target.value)}
              className="w-full border py-2 px-3 rounded mt-2"
              placeholder="Enter your address"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="w-full col-span-2">
            <button
              type="submit"
              className=" bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnlineRegistration;
