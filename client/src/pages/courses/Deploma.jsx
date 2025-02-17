import React from 'react';

const Deploma = () => {
  return (
    <div>
      {/* Header Section */}
      <div className='w-full bg-[#441752] px-4 sm:px-[5%] py-4'>
        <div className="max-w-[1100px] mx-auto">
          <h2 className='text-2xl sm:text-3xl text-white font-bold'>Diploma Courses</h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1100px] mx-auto py-4 px-4 sm:px-8">
        <h2 className='text-2xl font-bold my-4'>Offered Diploma Courses</h2>

        {/* Ordered List of Courses */}
        <ol className='list-decimal pl-5 space-y-2'>
          <li className='font-bold text-md sm:text-lg my-2'>1. DOA (Diploma in Office Automation)</li>
          <li className='font-bold text-md sm:text-lg my-2'>2. DAPT (Diploma in Accounting Package Tally)</li>
          <li className='font-bold text-md sm:text-lg my-2'>3. DCA (Diploma in Computer Application)</li>
          <li className='font-bold text-md sm:text-lg my-2'>4. DDP (Diploma in Desktop Publishing)</li>
          <li className='font-bold text-md sm:text-lg my-2'>5. DCP (Diploma in Computer Programming)</li>
          <li className='font-bold text-md sm:text-lg my-2'>6. DWD (Diploma in Web Designing)</li>
          <li className='font-bold text-md sm:text-lg my-2'>7. DWP (Diploma in Web Programming)</li>
          <li className='font-bold text-md sm:text-lg my-2'>8. DWD (Diploma in Website Development)</li>
        </ol>
      </div>
    </div>
  );
};

export default Deploma;
