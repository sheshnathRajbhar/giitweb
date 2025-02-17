import React, { useState } from 'react'
import { toast } from 'react-toastify';
import axios from "axios"

const Result = () => {
  
  // state variables
  const [registration_number, setRegistration_number] = useState('')
  const [dob, setDob] = useState('')
  const [image, setImage] = useState('')

// onSubmit handler function
const onSubmitHandler = async(e)=>{
  e.preventDefault()
try {
  
const {data} = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/admin/upload-result', {registration_number, dob, image},{ headers: {
  'Content-Type': 'multipart/form-data',  // Ensure proper content-type for file uploads
},})

if(data.success){
  toast.success(data.message)
}else{
  console.log(data.message)
  toast.error(data.message)
}

} catch (error) {
  console.log(error.message)
  toast.error(error.message)
}

}

  return (
    <form onSubmit={onSubmitHandler}>
       <div className='p-8 rounded w-[400px] shadow-md shadow-black'>
         <h2 className=' text-center mb-4 text-xl'>Upload Certificate</h2>
         <div className='flex flex-col gap-2'>
          <label>Registration No</label>
          <input 
          value={registration_number} onChange={(e)=>setRegistration_number(e.target.value)}
          className="border border-1 border-black px-4 py-2 rounded" type="text" placeholder='Registration number' />
         </div>

         <div className='flex flex-col gap-2 my-2'>
          <label>Date of birth</label>
          <input 
          value={dob} onChange={(e)=>setDob(e.target.value)}
          className="border border-1 border-black px-4 py-2 rounded" type="date" placeholder='Registration number' />
         </div>

         <div className='flex flex-col gap-2 my-2'>
          <label>Certificate</label>
          <input 
           onChange={(e)=>setImage(e.target.files[0])}
          className="border border-1 border-black px-4 py-2 rounded" type="file" placeholder='Registration number' />
         </div>

         <button type='submit' className='bg-blue-600 text-white rounded py-2 w-full my-4'>Upload</button>
       </div>
    </form>
  )
}

export default Result