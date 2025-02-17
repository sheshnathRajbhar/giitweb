import React, { useEffect, useState } from 'react'
import axios from "axios"

const RegistrationList = () => {
  const [data, setData] = useState([])

  const fetchEnquiryList = async()=>{
    useEffect(()=>{
      const fetchData = async()=>{
       try {
         const {data} = await axios.get(import.meta.env.VITE_BACKEND_URL + '/api/admin/registration-list')
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
      {/* <div className='grid grid-cols-[1fr_1fr_0.5fr_1fr_2fr_2fr_1fr_1fr_1fr_1fr_1fr] border gap-2 px-4 py-2'>
        <b>Name - {}</b>
        <b>Email</b>
        <b>Phone</b>
        <b>Course</b>
        <b>Fathername</b>
        <b>Mothername</b>
        <b>Dob</b>
        <b>Adhar No</b>
        <b>Qualification</b>
        <b>Gender</b>
        <b>Address</b>
        </div> */}
        {/* coursename, name, email, adhar, phone, fathername, mothername, dob, qualification, gender, address */}

       {
        data.length >0 ? (data[0].map((item, index)=>(
          <div className='flex flex-col gap-3 border my-2 px-4 py-2' key={index}>
          <p>Name - {item.name}</p>
          <p>Email - {item.email}</p>
          <p>Phone - {item.phone}</p>
          <p>Course - {item.coursename}</p>
          <p>Fathername - {item.fathername}</p>
          <p>Mothername- {item.mothername}</p>
          <p>Date of birth - {item.dob}</p>
          <p>Adhar - {item.adhar}</p>
          <p>Qualification - {item.qualification}</p>
          <p>Gender - {item.gender}</p>
          <p>Address - {item.address}</p>
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

export default RegistrationList