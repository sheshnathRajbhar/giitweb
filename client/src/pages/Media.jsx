import React, { useEffect, useState } from 'react';
import axios from "axios"



const Media = () => {
  const [data, setData] = useState([])
 const fetchData = async()=>{
  useEffect(()=>{
    const fetch = async()=>{
      try {
        const {data} = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/user/media')
        if(data.success){
          setData(data.data)
        }else{
          alert(data.message)
        }
      } catch (error) {
        alert(error.message)
      }
    }

    fetch()
  },[])

 }

 fetchData()

  return (
    <div>
      {/* Header Section */}
      <div className="w-full bg-[#441752] py-4">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-white text-2xl font-semibold">Gallery Images</h2>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-[1100px] mx-auto py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-[5%]">
          {data.map((image, index) => (
            <img 
              key={index} 
              src={image.imageUrl} 
              alt={`Gallery image ${index + 1}`} 
              className="rounded-md w-full max-w-full object-contain shadow-lg transition-transform transform hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
