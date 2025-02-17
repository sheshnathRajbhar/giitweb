import React, { useEffect, useState } from 'react'
import axios from "axios"
const EnquiryList = () => {
  const [data, setData] = useState([])

  const fetchEnquiryList = async()=>{
    useEffect(()=>{
      const fetchData = async()=>{
       try {
         const {data} = await axios.get(import.meta.env.VITE_BACKEND_URL + '/api/admin/enquiry-list')
         if(data.success){
           setData(prev=>[data.data])
           console.log(data)
         }else{
           console.log(data.message)
         }
       } catch (error) {
        console.log(error.message)
       }
      }
      fetchData()

    },[])
  }


  fetchEnquiryList()





  return (
    <div>
      <div className='grid grid-cols-[1fr_2fr_1fr_1fr_2fr_1fr] border px-4 py-2'>
        <b>Name</b>
        <b>Email</b>
        <b>Phone</b>
        <b>Course</b>
        <b>Message</b>
        <b>Action</b>
        </div>

       {
        data.length > 1 ? (data[0].map((item, index)=>(
          <div className='grid grid-cols-[1fr_2fr_1fr_1fr_2fr_1fr] border px-4 py-2' key={index}>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <p>{item.phone}</p>
          <p>{item.course}</p>
          <p>{item.message}</p>
          <p>X</p>
        </div>
        ))):(
          <div className='text-center'>
          <h2 className='text-3xl'>No record aviable</h2>
          </div>
        )
       }

     

    </div>
  )
}

export default EnquiryList