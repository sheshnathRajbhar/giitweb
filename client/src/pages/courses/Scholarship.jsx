import React from 'react';
import scor from "../../assets/scor.jpg";

const Scholarship = () => {
  return (
    <div>
      {/* Header Section */}
      <div className='w-full bg-[#441752] px-4 sm:px-[5%] py-4'>
        <div className="max-w-[1100px] mx-auto">
          <h2 className='text-2xl sm:text-3xl text-white font-bold'>Scholarship Courses</h2>
        </div>
      </div>

      {/* Image Section */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
        <img src={scor} className='w-full rounded-lg my-5' alt="Scholarship Image" />
      </div>
    </div>
  );
}

export default Scholarship;
