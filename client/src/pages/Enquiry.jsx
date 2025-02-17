import React, { useState} from "react";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

const Enquiry = () => {

  const [name, setName] = useState('')
  const [course, setCourse] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')


  const resetFields = ()=>{
    setCourse('')
    setName('')
    setEmail('')
    setMessage('')
    setPhone('')
  }

  const handleSubmit = async(e)=>{

      e.preventDefault()

      try {
        const {data} = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/user/enquiry', {name, course, email, phone, message})
        if(data.success){
          resetFields()
          toast.success(data.message)

        }else{
          toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.message)
      }


  }

      

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="w-full bg-[#441752] px-[5%]">
        <div className="max-w-[1100px] mx-auto py-4">
          <h2 className="text-2xl text-white font-bold">Quick Enquiry</h2>
        </div>
      </div>

      {/* Form & Contact Section */}
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6 flex-grow">
        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Course</label>
            <input
              type="text" value={course} onChange={(e)=>setCourse(e.target.value)}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter course name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text" value={name} onChange={(e)=>setName(e.target.value)}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Mobile No</label>
            <input
              type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              value={message} onChange={(e)=>setMessage(e.target.value)}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your message"
              rows="3"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-gray-100 p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold">GIIT Computer Education</h2>
          <p className="my-2">
            <strong>Phone No:</strong> 05461-222386
          </p>
          <p className="my-2">
            <strong>Mobile:</strong> +91-7607872680, 7754939906
          </p>
          <p className="my-2">
            <strong>Email:</strong> giit.gyansthaly@gmail.com
          </p>
          <p className="my-2">
            <strong>Address:</strong> Near Gandhi Tiraha, Majhwara Morh, Ghoshi - Mau (U.P.) 275105
          </p>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
