import React from 'react';
import olevel1 from "../../assets/o_level1.jpg";

const Nsoftware = () => {
  return (
    <div>
      {/* Header Section */}
      <div className='w-full bg-[#441752] px-4 sm:px-[5%] py-4'>
        <div className="max-w-[1100px] mx-auto">
          <h2 className='text-2xl sm:text-3xl text-white font-bold'>Nielit Software Courses</h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1100px] mx-auto py-4 px-4 sm:px-8">
        <img src={olevel1} className='rounded-lg my-5 w-full' alt="O Level Course" />

        {/* Course Description */}
        <h2 className='text-2xl my-4'>Academic Curriculum of DOEACC 'O' LEVEL</h2>
        <p className='font-bold text-[#5C7285] my-4'>
          DOEACC ‘O’ Level Course is a foundation course of DOEACC Society in the field of Information Technology. The duration of the course is 1 Year (2 semesters of 6 months each). The next level IT course of DOEACC Society is DOEACC ‘A’Level, which is equivalent to an advanced diploma course in Computer Applications. The course starts in the month of January and July every year.
        </p>

        <p className='font-bold text-[#5C7285] my-4'>
          ELIGIBILITY: 10+2 passed and Graduate <br />
          DURATION: [1 Year]
        </p>

        <p className='font-bold text-[#5C7285] my-4'>DETAILED SYLLABUS</p>
        <p className='font-bold text-[#5C7285] my-4'>Course Structure:</p>

        {/* Course Table */}
        <table className='border w-full mb-4'>
          <thead>
            <tr className='w-full border bg-[#DAD2FF]'>
              <th className='border w-1/8 px-2'>Subject Code</th>
              <th className='border w-full px-2 py-1'>Subject Name</th>
            </tr>
          </thead>
          <tbody>
            {[
              { code: "M1-R5", name: "Information Technology Tools and Network Basics" },
              { code: "M2-R5", name: "Web Designing & Publishing" },
              { code: "M3-R5", name: "Programming and Problem Solving through Python" },
              { code: "M4-R5", name: "Internet of Things and its Applications" },
              { code: "M5-R5", name: "Practical based on M1-R5, M2-R5, M3-R5, and M4-R5" },
              { code: "M6-R5", name: "Project" },
            ].map((course, index) => (
              <tr key={index} className={`w-full border ${index % 2 === 0 ? 'bg-[#DAD2FF]' : ''}`}>
                <td className='border w-1/8 px-2'>{course.code}</td>
                <td className='border w-full px-2 py-1'>{course.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Nsoftware;
