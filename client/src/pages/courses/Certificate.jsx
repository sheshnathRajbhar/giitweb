import React from 'react';

const Certificate = () => {
  const courses = [
    { course: 'Certificate Course in Excel', duration: '1 Month' },
    { course: 'Certificate Course in C and C++ Programming', duration: '2 Month' },
    { course: 'Certificate Course in Java Programming', duration: '1 Month' },
    { course: 'Certificate Course in Visual Basic Programming', duration: '2 Month' },
    { course: 'Certificate Course in HTML and DHTML, XHTML and XML', duration: '2 Month' },
    { course: 'Certificate Course in DBMS Using Access', duration: '6 Weeks' },
    { course: 'Certificate Course in MS-Office', duration: '1 Month' },
    { course: 'Certificate Course in DTP', duration: '2 Month' },
    { course: 'Certificate Course in Tally', duration: '2 Month' },
    { course: 'Certificate Course in Internet Technologies and Social Media', duration: '1 Month' },
    { course: 'Certificate Course in Graphic Design (Photoshop and CorelDraw)', duration: '1 Month' },
    { course: 'Certificate Course in Hardware Maintenance', duration: '1 Month' },
    { course: 'Certificate Course in Networking', duration: '1 Month' },
    { course: 'Certificate Course in Hindi and English Typing', duration: '1 Month' },
    { course: 'Certificate Course in English Speaking and Personality Development', duration: '' } // No duration provided
  ];

  return (
    <div>
      {/* Header Section */}
      <div className='w-full bg-[#441752] px-4 sm:px-[5%] py-4'>
        <div className="max-w-[1100px] mx-auto">
          <h2 className='text-2xl sm:text-3xl text-white font-bold'>Certificate Courses</h2>
        </div>
      </div>

      {/* Courses Table Section */}
      <div className="max-w-[1100px] mx-auto py-4 px-4 sm:px-8">
        <h2 className='text-2xl font-bold my-4'>Certificate Courses</h2>

        {/* Table for larger screens */}
        <div className="hidden sm:block">
          <table className='border w-full mb-4'>
            <thead>
              <tr className='w-full border bg-[#493D9E] text-white'>
                <th className='text-left border w-1/2 px-2 py-1'>Course Name</th>
                <th className='text-left border w-1/2 px-2 py-1'>Duration</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((ele, ind) => (
                <tr className={`w-full border ${ind % 2 === 0 ? 'bg-[#DAD2FF]' : ''}`} key={ind}>
                  <td className='border px-2 py-1'>{ele.course}</td>
                  <td className='border px-2 py-1'>{ele.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stackable list for small screens */}
        <div className="sm:hidden">
          {courses.map((ele, ind) => (
            <div key={ind} className={`border p-4 mb-4 ${ind % 2 === 0 ? 'bg-[#DAD2FF]' : ''}`}>
              <h3 className='text-lg font-bold'>{ind + 1}. {ele.course}</h3>
              <p>{ele.duration || 'Duration not available'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
