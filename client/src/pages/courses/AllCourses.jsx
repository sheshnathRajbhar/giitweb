import React from 'react';
import { Link } from 'react-router-dom';

const AllCourses = () => {
  return (
    <div>
      {/* Header Section */}
      <div className='w-full bg-[#441752] px-4 sm:px-8 py-4'>
        <div className="max-w-[1100px] mx-auto">
          <h2 className='text-2xl sm:text-3xl text-white font-bold text-center'>All Courses</h2>
        </div>
      </div>

      {/* Courses List Section */}
      <div className="max-w-[1100px] mx-auto py-4 px-4 sm:px-8">
        <div className="space-y-3">
          <Link to={'deploma'} className='text-blue-400 font-bold text-lg sm:text-xl block'>1. Deploma Courses</Link>
          <Link to={'accounting'} className='text-blue-400 font-bold text-lg sm:text-xl block'>2. Accounting Courses</Link>
          <Link to={'software'} className='text-blue-400 font-bold text-lg sm:text-xl block'>3. Nielit Software Courses - (O Level, CCC)</Link>
          <Link to={'hardware'} className='text-blue-400 font-bold text-lg sm:text-xl block'>4. Nielit Hardware Courses</Link>
          <Link to={'university'} className='text-blue-400 font-bold text-lg sm:text-xl block'>5. University Courses</Link>
          <Link to={'certificate'} className='text-blue-400 font-bold text-lg sm:text-xl block'>6. Certificate Courses</Link>
          <Link to={'scholarship'} className='text-blue-400 font-bold text-lg sm:text-xl block'>7. Scholarship Courses</Link>
          <Link to={'web-designing'} className='text-blue-400 font-bold text-lg sm:text-xl block'>8. Web Designing Courses</Link>
        </div>
      </div>
    </div>
  );
}

export default AllCourses;
