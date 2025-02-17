import React from 'react'
import SmallCard from "../components/SmallCard"
import Card from "../components/Card"
const Dashboard = () => {
    return (
        <div className='bg-[#D9EAFD]'>
    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ">
          <SmallCard/>
          <SmallCard/>
          <SmallCard/>
          <SmallCard/>
        </div>
    
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-[#D9EAFD]">
        <Card bg={'bg-red-400'}/>
        <Card bg={'bg-green-400'}/>
        <Card bg={'bg-yellow-400'}/>
        </div>
        </div>
      );
}

export default Dashboard